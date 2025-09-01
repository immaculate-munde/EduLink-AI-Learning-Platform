import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { SunIcon, MoonIcon } from 'lucide-react';
export function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState<'student' | 'teacher'>('student');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const {
    signup
  } = useAuth();
  const {
    theme,
    toggleTheme
  } = useTheme();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    setIsLoading(true);
    try {
      await signup(name, email, password, role);
    } catch (err) {
      setError('Failed to create an account');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };
  return <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <div className="absolute top-4 right-4">
        <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none" aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}>
          {theme === 'light' ? <MoonIcon className="h-5 w-5 text-gray-600" /> : <SunIcon className="h-5 w-5 text-yellow-400" />}
        </button>
      </div>
      <div className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
              Create your account
            </h2>
          </div>
          {error && <div className="bg-red-50 dark:bg-red-900 border-l-4 border-red-500 p-4 mb-4">
              <div className="flex">
                <div className="ml-3">
                  <p className="text-sm text-red-700 dark:text-red-200">
                    {error}
                  </p>
                </div>
              </div>
            </div>}
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <input id="name" name="name" type="text" required value={name} onChange={e => setName(e.target.value)} className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white dark:bg-gray-700 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm" placeholder="Full name" />
              </div>
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input id="email-address" name="email" type="email" autoComplete="email" required value={email} onChange={e => setEmail(e.target.value)} className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white dark:bg-gray-700 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm" placeholder="Email address" />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input id="password" name="password" type="password" autoComplete="new-password" required value={password} onChange={e => setPassword(e.target.value)} className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white dark:bg-gray-700 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm" placeholder="Password" />
              </div>
              <div>
                <label htmlFor="confirm-password" className="sr-only">
                  Confirm password
                </label>
                <input id="confirm-password" name="confirm-password" type="password" autoComplete="new-password" required value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white dark:bg-gray-700 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm" placeholder="Confirm password" />
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <input id="role-student" name="role" type="radio" checked={role === 'student'} onChange={() => setRole('student')} className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300" />
                  <label htmlFor="role-student" className="ml-2 block text-sm text-gray-900 dark:text-gray-300">
                    I'm a student
                  </label>
                </div>
                <div className="flex items-center">
                  <input id="role-teacher" name="role" type="radio" checked={role === 'teacher'} onChange={() => setRole('teacher')} className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300" />
                  <label htmlFor="role-teacher" className="ml-2 block text-sm text-gray-900 dark:text-gray-300">
                    I'm a teacher
                  </label>
                </div>
              </div>
            </div>
            <div>
              <button type="submit" disabled={isLoading} className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}>
                {isLoading ? 'Creating account...' : 'Sign up'}
              </button>
            </div>
            <div className="text-sm text-center">
              <p className="font-medium text-gray-600 dark:text-gray-300">
                Already have an account?{' '}
                <Link to="/login" className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400">
                  Log in
                </Link>
              </p>
            </div>
          </form>
          <div className="mt-4 text-center">
            <Link to="/" className="text-sm text-blue-600 hover:text-blue-500 dark:text-blue-400">
              ← Back to home
            </Link>
          </div>
        </div>
      </div>
    </div>;
}