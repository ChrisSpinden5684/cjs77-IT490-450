import React from 'react'
import { useRef } from 'react';
import { useState } from "react";

function Logout(){

 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch('http://localhost:5000/api/logout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      }
    });

    const data = await response.json();
  } catch (error) {
    console.error('Error sendin logout to backend', error);
  }
 };
 
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <button type="submit">Logout</button>
            </form>
        </div>
    );
}
export default Logout;