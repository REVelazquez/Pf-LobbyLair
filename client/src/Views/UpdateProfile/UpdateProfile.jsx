import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../Redux/actions'


export default function UpdateProfile() {
  const user = useSelector((state) => state.user);
  const id = user ? user.id : '';  
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    image: '',
    description: '',
    perfilUrl: '',
  });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,}$/;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser(id, formData));
  };
  //const urlPattern = /^(http://www.|https://www.|http://|https://)?[a-zA-Z0-9]+([-.]{1}[a-zA-Z0-9]+).[a-zA-Z]{2,5}(:[0-9]{1,5})?(/.)?$/;

  const isEmailValid = emailRegex.test(formData.email);
  const isPasswordValid = passwordRegex.test(formData.password);
  const isButtonDisabled = !isEmailValid || !isPasswordValid;

  return (
    <div className="flex justify-center items-center h-screen">
      <form className="w-80 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
        <h2 className="text-2xl mb-4">Update Profile</h2>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />
           {!isEmailValid && (
            <p className="text-red-500 text-xs mt-1">Please enter a valid email address.</p>
          )}

        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
          />
           {!isPasswordValid && (
            <p className="text-red-500 text-xs mt-1">Please enter a password with at least 6 characters, including one uppercase letter and one special character.</p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block text-gray-700 text-sm font-bold mb-2">Image</label>
          <input
            type="text"
            name="image"
            id="image"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter the image URL"
            value={formData.image}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="perfilUrl" className="block text-gray-700 text-sm font-bold mb-2">Perfil URL</label>
          <input
            type="text"
            name="perfilUrl"
            id="perfilUrl"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter the perfil URL"
            value={formData.perfilUrl}
            onChange={handleChange}
          />
        <div className="mb-4 mt-4">
          <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">Description</label>
          <textarea
            name="description"
            id="description"
            rows="4"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter a description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        </div>
        <div className="flex items-center justify-center">
        <button
            type="submit"
            className="bg-[#1f2937] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            disabled={isButtonDisabled}
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
}
