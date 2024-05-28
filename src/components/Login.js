import React, { useState} from 'react';

const Login = ({ onLogin }) => {

  const data = () => {
    let existingData = JSON.parse(localStorage.getItem("pin"));
    if (existingData === null) existingData = [];
    return existingData;
  };

  const [pin, setPin] = useState(data());
  const [error, setError] = useState('');

  // Function to handle input change
  const abc = (e) => {
    setPin(e.target.value);
    localStorage.setItem("pin", JSON.stringify(e.target.value));
  };
  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (pin === 'dhc') {
      onLogin(true);
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="max-w-sm mx-auto p-4 text-center bg-white shadow-md rounded-md">
      <p className="py-3">Input pin</p>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="password"
            value={pin}
            onChange={abc}
            className="w-full px-3 py-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-1 my-2 rounded-sm hover:bg-blue-600"
        >
          Submit
        </button>
        {error && <p className="mt-4 text-red-500">{error}</p>}
      </form>
    </div>
  );
};

export default Login;
