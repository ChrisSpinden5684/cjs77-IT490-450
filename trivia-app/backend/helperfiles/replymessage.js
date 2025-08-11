const amqp = require('amqplib');
const { v4: uuidv4 } = require('uuid');

let connection, channel;

async function setupRabbitMQ() {
  if (!channel) {
    connection = await amqp.connect('amqp://CENTRAL_VM_IP'); // replace with your actual address
    channel = await connection.createChannel();

    // Make sure the exchange exists
    await channel.assertExchange('vm_exchange', 'direct', { durable: false });
  }
  return channel;
}

async function sendToVMWithReply(targetVM, payload) {
  await setupRabbitMQ();

  const correlationId = uuidv4();
  // Create a temporary exclusive queue for replies
  const replyQueue = await channel.assertQueue('', { exclusive: true });

  return new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
      reject(new Error("Response timeout"));
    }, 5000); // 5 seconds timeout

    channel.consume(
      replyQueue.queue,
      msg => {
        if (msg.properties.correlationId === correlationId) {
          clearTimeout(timeout);
          resolve(JSON.parse(msg.content.toString()));
        }
      },
      { noAck: true }
    );

    // Publish to the exchange with the routing key equal to targetVM
    channel.publish(
      'vm_exchange',
      targetVM,
      Buffer.from(JSON.stringify(payload)),
      {
        correlationId,
        replyTo: replyQueue.queue
      }
    );
  });
}

module.exports = { sendToVMWithReply };