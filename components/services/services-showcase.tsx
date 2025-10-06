// components/services/services-showcase.tsx
'use client'; // BẮT BUỘC: Biến file này thành Client Component
import dynamic from 'next/dynamic'

// Import động component Client. Đường dẫn phải trỏ đến file mới bạn tạo ở Bước 2.
const ServiceShowcaseClient = dynamic(
  () => import('./services-showcase.client'), 
  { ssr: false }
);

export function ServiceShowcase() {
  return <ServiceShowcaseClient />;
}