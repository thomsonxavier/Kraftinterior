import { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setName('');
    setEmail('');
    setPhone('');
    setMessage('Form submitted successfully!');
  };

  return (
    <div className='relative p-8 bg-white rounded-lg shadow-lg dark:bg-dark-2 sm:p-12'>
      <h2 className="text-2xl font-bold text-gray-900 text-center mb-4">Get in Touch</h2>

      <form onSubmit={handleSubmit} className='space-y-4'>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 border rounded-md placeholder-gray-400 focus:ring-2 focus:ring-indigo-600 text-sm text-gray-900"
        />

        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border rounded-md placeholder-gray-400 focus:ring-2 focus:ring-indigo-600 text-sm text-gray-900"
        />

        <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full px-4 py-2 border rounded-md placeholder-gray-400 focus:ring-2 focus:ring-indigo-600 text-sm text-gray-900"
        />

        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-2 rounded-md focus:ring focus:ring-indigo-600"
        >
          Let's talk
        </button>
      </form>

      {message && (
        <p className="mt-4 text-center text-indigo-600">{message}</p>
      )}
    </div>
  );
};

export default ContactForm;
