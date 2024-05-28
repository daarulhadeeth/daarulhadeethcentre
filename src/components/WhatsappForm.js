// src/WhatsAppForm.js
import React, { useState } from 'react';

const WhatsAppForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappMessage = `Assalamu-alaykum, I would like to enrol into daaru-l-hadeeth with the following email: ${email},\n\nMy name is `;
    const whatsappUrl = `https://wa.me/+2349024092654?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
    setMessage('Redirecting to WhatsApp...');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-left mb-2">Email:</label>
        <input
          type="email"
          placeholder="user@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600"
      >
        Submit
      </button>
      {message && <p className="mt-4 text-green-500">{message}</p>}
    </form>
  );
};

export default WhatsAppForm;
