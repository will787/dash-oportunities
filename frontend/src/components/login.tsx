// LoginScreen.tsx
import React from "react";

const LoginScreen: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background text-text">
      <div className="w-full max-w-md p-6 bg-input rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold text-center text-primary">Login</h1>
        <form className="mt-6">
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="w-full px-4 py-2 mt-2 bg-input text-text border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 mt-2 bg-input text-text border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-primary rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-text"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-sm text-center">
          Don't have an account?{" "}
          <a href="#" className="text-primary hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginScreen;