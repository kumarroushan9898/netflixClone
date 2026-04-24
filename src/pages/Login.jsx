import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('netflix_user', JSON.stringify({ email }));
    window.dispatchEvent(new Event('authChange'));
    navigate('/');
  };

  return (
    <div className="relative w-full h-screen bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg')] bg-cover bg-center">

      <div className="absolute inset-0 bg-black/60 sm:bg-black/50" />

      <div className="absolute top-0 w-full px-4 md:px-12 py-4 z-50">
        <h1 
          onClick={() => navigate('/')}
          className="text-red-600 text-3xl md:text-5xl font-bold cursor-pointer uppercase tracking-wider"
        >
          Netflix
        </h1>
      </div>


      <div className="relative flex justify-center items-center h-full z-10 px-4">
        <div className="max-w-[450px] w-full bg-black/80 text-white rounded-lg p-10 md:p-16">
          <h2 className="text-3xl font-bold mb-8">
            {isSignIn ? 'Sign In' : 'Sign Up'}
          </h2>
          
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input 
              type="email" 
              placeholder="Email or phone number" 
              className="p-3 my-2 bg-gray-700/50 rounded focus:outline-none focus:ring-2 focus:ring-gray-400 placeholder-gray-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input 
              type="password" 
              placeholder="Password" 
              className="p-3 my-2 bg-gray-700/50 rounded focus:outline-none focus:ring-2 focus:ring-gray-400 placeholder-gray-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            
            <button 
              type="submit" 
              className="bg-red-600 py-3 my-4 rounded font-bold hover:bg-red-700 transition"
            >
              {isSignIn ? 'Sign In' : 'Sign Up'}
            </button>
            
            <div className="flex items-center justify-between text-sm text-gray-400 mb-8">
              <label className="flex items-center gap-2 cursor-pointer hover:text-gray-300">
                <input type="checkbox" className="accent-gray-400" />
                Remember me
              </label>
              <p className="cursor-pointer hover:underline hover:text-gray-300">Need help?</p>
            </div>
          </form>

          <p className="text-gray-400 text-md">
            {isSignIn ? 'New to Netflix?' : 'Already subscribed?'}
            <span 
              onClick={toggleSignIn} 
              className="text-white ml-2 cursor-pointer hover:underline"
            >
              {isSignIn ? 'Sign up now.' : 'Sign in.'}
            </span>
          </p>
          
          <p className="text-gray-500 text-xs mt-6">
            This page is protected by Google reCAPTCHA to ensure you're not a bot. 
            <span className="text-blue-500 cursor-pointer hover:underline ml-1">Learn more.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
