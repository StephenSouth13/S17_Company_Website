"use client"

import React from 'react';
import { Mail, RefreshCw, ArrowLeft } from 'lucide-react';

interface AuthForgotPasswordFormProps {
  onViewChange: (view: 'login' | 'register' | 'forgot-password') => void;
}

const AuthForgotPasswordForm: React.FC<AuthForgotPasswordFormProps> = ({ onViewChange }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sending password reset email...");
    
    // Logic Đặt lại mật khẩu thực tế sẽ ở đây
    
    // Giả lập thành công: Chuyển về màn hình đăng nhập
    // NOTE: Trong ứng dụng thực, bạn nên hiển thị một thông báo thành công (thông qua state) trước khi chuyển hướng.
    onViewChange('login'); 
  };
  
  return (
    <div className="space-y-6 p-4 md:p-8">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white flex items-center justify-center">
          <RefreshCw className="w-7 h-7 mr-2 text-yellow-500"/> Quên Mật Khẩu
        </h2>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Nhập email của bạn để nhận liên kết đặt lại mật khẩu.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Email đã đăng ký
          </label>
          <div className="relative">
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="tenban@congty.com"
              className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-150 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 dark:text-gray-500" />
          </div>
        </div>

        {/* Nút Gửi yêu cầu */}
        <button
          type="submit"
          className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-lg text-lg font-bold text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition duration-200 transform hover:scale-[1.01] active:scale-100"
        >
          Gửi Yêu Cầu
        </button>
      </form>

      {/* Quay lại Đăng nhập */}
      <p className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
        <button
          type="button"
          onClick={() => onViewChange('login')}
          className="font-bold text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 transition duration-150 flex items-center justify-center mx-auto"
        >
          <ArrowLeft className="h-4 w-4 mr-1" /> Quay lại Đăng nhập
        </button>
      </p>
    </div>
  );
};

export default AuthForgotPasswordForm;
