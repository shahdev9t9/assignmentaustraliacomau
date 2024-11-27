"use client";
import { useEffect } from 'react';

const ChatCode = () => {
  useEffect(() => {
    const s1 = document.createElement('script');
    s1.async = true;
    s1.src = 'https://embed.tawk.to/5c348a88361b3372892efb91/default';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    document.head.appendChild(s1);
  }, []);

  return null;
};

export default ChatCode;
