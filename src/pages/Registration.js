import React from 'react';
import WhatsAppForm from '../components/WhatsappForm';

function Registration() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center bg-gray-100 p-4 md:p-12">
      <div className="md:w-1/2 bg-white p-6 md:p-8 rounded-md shadow-md">
        <h2 className="text-3xl font-bold mb-4 text-center">Registration</h2>
        <p className="text-lg mb-2 text-center">Assalamu’alaykum!👋</p>
        <p className="text-gray-700 mb-6 text-center">
          We are excited to have you join us. Please fill out the form below
          to register for our classes.
        </p>
        <WhatsAppForm />
      </div>
    </section>
  );
}

export default Registration;
