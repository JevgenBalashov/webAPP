/* eslint-disable react/button-has-type */

'use client';

import Link from 'next/link';
import { ArrowLeft, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4'>
      <div className='max-w-4xl mx-auto text-center'>
        {/* Animated 404 Text */}
        <div className='mb-8'>
          <h1 className='text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 animate-pulse'>
            404
          </h1>
          <div className='w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mt-4 rounded-full' />
        </div>

        <div className='mb-8 relative'>
          <div className='relative w-full max-w-md mx-auto'>
            <div className='absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce delay-100' />
            <div className='absolute top-1/2 -left-6 w-6 h-6 bg-blue-400 rounded-full animate-bounce delay-300' />
            <div className='absolute -bottom-2 left-1/4 w-4 h-4 bg-pink-400 rounded-full animate-bounce delay-500' />
          </div>
        </div>

        {/* Text Content */}
        <div className='mb-12 space-y-4'>
          <h2 className='text-3xl md:text-4xl font-bold text-slate-800 mb-4'>Oops! Page Not Found</h2>
          <p className='text-lg text-slate-600 max-w-1xl mx-auto leading-relaxed'>
            The page you are looking for seems to have wandered off into the digital void.
          </p>
        </div>

        <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
          <Link
            style={{ marginBottom: '20px' }}
            href='/'
            className='inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200'>
            <Home className='w-5 h-5' />
            Go Back Home
          </Link>
        </div>

        <button
          onClick={() => window.history.back()}
          className='mt-8 inline-flex items-center gap-2 text-slate-500 hover:text-slate-700 font-medium transition-colors cursor-pointer'>
          <ArrowLeft className='w-4 h-4' />
          Go Back to Previous Page
        </button>
      </div>
    </div>
  );
}
