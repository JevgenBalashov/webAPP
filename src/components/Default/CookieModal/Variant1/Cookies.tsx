/* eslint-disable react/button-has-type */
/* eslint-disable react/no-unknown-property */

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

import { CookieModalContent } from './cookies.data';

interface CookieConsentModalProps {
  data: CookieModalContent;
}

export default function CookieConsentModal({ data }: CookieConsentModalProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const consent = localStorage.getItem('cookie_consent');
      if (!consent) {
        setIsVisible(true);
      }
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie_consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className='fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 shadow-lg z-50 animate-slideUpFadeIn'>
      <div className='container mx-auto flex flex-col md:flex-row items-center justify-between gap-4'>
        <div className='text-sm text-center md:text-left'>
          <h3 className='font-bold text-lg mb-1'>{data.title}</h3>
          <p className='mb-2'>{data.text}</p>
          <Link
            href={data.privacyPolicyLinkHref}
            className='text-blue-400 hover:underline'>
            {data.privacyPolicyLinkText}
          </Link>
        </div>
        <div className='flex flex-col sm:flex-row gap-3 w-full md:w-auto'>
          <button
            onClick={handleAccept}
            className='w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-200'>
            {data.acceptButtonText}
          </button>
          <button
            onClick={handleDecline}
            className='w-full sm:w-auto bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-200'>
            {data.declineButtonText}
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideUpFadeIn {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slideUpFadeIn {
          animation: slideUpFadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
