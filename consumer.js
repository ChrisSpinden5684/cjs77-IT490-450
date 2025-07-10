const amqp = require('amqplib');

async function startConsumer(vmname) {
  const connection = await amqp.connect('amqp://INSERTIPHERE');
  const channel = await connection.createChannel();

  const exchange = 'vm_exchange';
  await channel.assertExchange(exchange, 'direct', { durable: false });

  const q = await channel.assertQueue('', { exclusive: true });
  await channel.bindQueue(q.queue, exchange, vmname);

  console.log(`Waiting for messages for ${vmname}` );

  channel.consume(q.queue, msg => {
    if (msg !== null) {
      const content = msg.content.toString();
      const headers = msg.properties.headers || {};
      console.log('Received', content);
      console.log('Headers:', headers );
      channel.ack(msg);
    }
  });
}

startConsumer('insertvmname').catch(console.error);