import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { SunIcon, MoonIcon, BookOpenIcon, UsersIcon, TrophyIcon, BrainIcon } from 'lucide-react';
export function LandingPage() {
  const {
    theme,
    toggleTheme
  } = useTheme();
  return <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center">
              <span className="font-bold text-xl text-blue-600 dark:text-blue-400">
                EduLink AI
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}>
                {theme === 'light' ? <MoonIcon className="h-5 w-5 text-gray-600" /> : <SunIcon className="h-5 w-5 text-yellow-400" />}
              </button>
              <Link to="/login" className="px-4 py-2 text-sm font-medium rounded-md text-blue-600 dark:text-blue-400 border border-blue-600 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900">
                Login
              </Link>
              <Link to="/signup" className="px-4 py-2 text-sm font-medium rounded-md bg-blue-600 text-white hover:bg-blue-700">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </header>
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white dark:bg-gray-900 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
                  <span className="block">Accessible Learning</span>
                  <span className="block text-blue-600 dark:text-blue-400">
                    for Everyone
                  </span>
                </h1>
                <p className="mt-3 text-base text-gray-500 dark:text-gray-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  EduLink AI leverages artificial intelligence to personalize
                  learning experiences, connect students with resources, and
                  empower teachers with insights.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link to="/signup" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10">
                      Get Started
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Link to="/login" className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 dark:border-gray-700 text-base font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 md:py-4 md:text-lg md:px-10">
                      Log In
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" alt="Students learning with technology" />
        </div>
      </div>
      {/* Features Section */}
      <div className="py-12 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-blue-600 dark:text-blue-400 font-semibold tracking-wide uppercase">
              Features
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              A better way to learn
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 lg:mx-auto">
              Our platform provides tools for both students and teachers to
              enhance the learning experience.
            </p>
          </div>
          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="pt-6">
                <div className="flow-root bg-white dark:bg-gray-900 rounded-lg px-6 pb-8 shadow-md">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-blue-600 rounded-md shadow-lg">
                        <BookOpenIcon className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 dark:text-white">
                      Adaptive Learning
                    </h3>
                    <p className="mt-5 text-base text-gray-500 dark:text-gray-400">
                      Personalized content that adapts to your learning pace and
                      style.
                    </p>
                  </div>
                </div>
              </div>
              <div className="pt-6">
                <div className="flow-root bg-white dark:bg-gray-900 rounded-lg px-6 pb-8 shadow-md">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-blue-600 rounded-md shadow-lg">
                        <UsersIcon className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 dark:text-white">
                      Community Learning
                    </h3>
                    <p className="mt-5 text-base text-gray-500 dark:text-gray-400">
                      Connect with peers and teachers in our interactive forum.
                    </p>
                  </div>
                </div>
              </div>
              <div className="pt-6">
                <div className="flow-root bg-white dark:bg-gray-900 rounded-lg px-6 pb-8 shadow-md">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-blue-600 rounded-md shadow-lg">
                        <TrophyIcon className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 dark:text-white">
                      Gamified Experience
                    </h3>
                    <p className="mt-5 text-base text-gray-500 dark:text-gray-400">
                      Earn rewards and track progress with our streak and badge
                      system.
                    </p>
                  </div>
                </div>
              </div>
              <div className="pt-6">
                <div className="flow-root bg-white dark:bg-gray-900 rounded-lg px-6 pb-8 shadow-md">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-blue-600 rounded-md shadow-lg">
                        <BrainIcon className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 dark:text-white">
                      AI Assistance
                    </h3>
                    <p className="mt-5 text-base text-gray-500 dark:text-gray-400">
                      Get help anytime with our AI-powered chatbot tutor.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
          <p className="mt-8 text-center text-base text-gray-500 dark:text-gray-400">
            &copy; 2023 EduLink AI. All rights reserved.
          </p>
        </div>
      </footer>
    </div>;
}