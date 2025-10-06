// app/about/page.tsx (Đây vẫn là Server Component)

import AboutPageWrapper from '@/components/about-client-wrapper'; // Import component bọc mới

// LƯU Ý: Không cần import 'next/dynamic' ở đây nữa

export default function AboutPage() {
  return <AboutPageWrapper />;
}