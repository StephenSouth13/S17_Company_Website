//components/auth/AuthModal.tsx
"use client"

import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { X, AlertTriangle } from 'lucide-react';

// FIX: Trong môi trường biên dịch này, đôi khi cần phải bỏ phần mở rộng '.tsx'
// hoặc đảm bảo tên file không có phần mở rộng nếu bundler tự động xử lý.
// Tôi sẽ thử bỏ phần mở rộng, nếu vẫn lỗi, có nghĩa là các file con chưa được tạo.
// Tuy nhiên, vì bạn đã cung cấp các file con trước đó, tôi sẽ quay lại cách import
// mà không có phần mở rộng.
import AuthLoginForm from './AuthLoginForm';
import AuthRegisterForm from './AuthRegisterForm';
import AuthForgotPasswordForm from './AuthForgotPasswordForm';

// Định nghĩa các trạng thái xem (View) của Modal
type AuthView = 'login' | 'register' | 'forgot-password';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTab: AuthView; // Xác định view mặc định khi mở modal
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, defaultTab }) => {
  // State quản lý View hiện tại bên trong Modal
  const [currentView, setCurrentView] = useState<AuthView>(defaultTab);

  // Cập nhật view khi prop defaultTab thay đổi (ví dụ: từ Header/Sidebar click)
  useEffect(() => {
    // Chỉ cập nhật khi modal mở để tránh giật hình khi đóng/mở
    if (isOpen) {
      setCurrentView(defaultTab);
    }
  }, [defaultTab, isOpen]); 

  // Xử lý đóng modal khi nhấn phím ESC
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  // Hàm chuyển đổi View
  const handleViewChange = useCallback((view: AuthView) => {
    setCurrentView(view);
  }, []);

  // Chọn component form để hiển thị
  const RenderedForm = useMemo(() => {
    switch (currentView) {
      case 'register':
        return <AuthRegisterForm onViewChange={handleViewChange} />;
      case 'forgot-password':
        return <AuthForgotPasswordForm onViewChange={handleViewChange} />;
      case 'login':
      default:
        return <AuthLoginForm onViewChange={handleViewChange} />;
    }
  }, [currentView, handleViewChange]);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      {/* Custom Alert (cho Forgot Password Form) */}
      {/* Component này phải được định nghĩa toàn cục hoặc đảm bảo tồn tại DOM element */}
      <div 
          id="custom-alert-modal" 
          className="hidden fixed top-4 left-1/2 transform -translate-x-1/2 z-[100] p-4 bg-yellow-100 border border-yellow-400 text-yellow-700 rounded-lg shadow-xl transition-opacity duration-300"
      >
          <div className="flex items-center space-x-2">
              <AlertTriangle className="h-5 w-5" />
              <p id="custom-alert-message" className="text-sm font-medium"></p>
          </div>
      </div>

      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-70 z-40 transition-opacity duration-300"
        onClick={onClose} 
      />

      {/* Modal Container */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Modal Content - Responsive & Super Beautiful! */}
        <div 
          className={`
            relative w-full md:max-w-md lg:max-w-lg bg-white dark:bg-gray-800 rounded-2xl 
            shadow-2xl max-h-[90vh] overflow-y-auto transform 
            transition-all duration-500 ease-out border border-gray-100 dark:border-gray-700
            ${isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-90 opacity-0 translate-y-4'}
            
            // Mobile Optimization: Gần full screen trên thiết bị nhỏ
            sm:min-h-[500px] md:min-h-0 md:max-h-full
          `}
          onClick={(e) => e.stopPropagation()} // Ngăn chặn đóng modal khi click bên trong
        >
          
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 transition duration-150 z-50"
            aria-label="Đóng"
          >
            <X className="h-6 w-6" />
          </button>
          
          {/* Render Form Con */}
          {RenderedForm}

        </div>
      </div>
    </>
  );
};
