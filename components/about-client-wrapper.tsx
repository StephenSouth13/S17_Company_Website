// components/AboutPageWrapper.tsx
'use client'; // BẮT BUỘC: Biến file này thành Client Component

import dynamic from 'next/dynamic';

// Logic dynamic import với ssr: false được di chuyển vào đây
const AboutClient = dynamic(() => import('@/components/about/about-client'), { 
  ssr: false 
});

export default function AboutPageWrapper() {
  return <AboutClient />;
}