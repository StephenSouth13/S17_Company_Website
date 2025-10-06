"use client"

import React from 'react';
import { Button } from "@/components/ui/button"
import { UserPlus, AtSign, Lock, User } from 'lucide-react';

interface AuthRegisterFormProps {
  onViewChange: (view: 'login' | 'register' | 'forgot-password') => void;
}

const AuthRegisterForm: React.FC<AuthRegisterFormProps> = ({ onViewChange }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitting register form...");
    // Thêm logic Đăng ký thực tế ở đây
  };

  return (
    <div className="space-y-6 p-4 md:p-8">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white flex items-center justify-center">
          <UserPlus className="w-7 h-7 mr-2 text-blue-600"/> Tạo Tài Khoản
        </h2>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Tham gia cộng đồng S17 ngay hôm nay.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Tên người dùng */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Họ tên
          </label>
          <div className="relative">
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Nguyễn Văn A"
              className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-150 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 dark:text-gray-500" />
          </div>
        </div>
        
        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Email
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
            <AtSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 dark:text-gray-500" />
          </div>
        </div>

        {/* Mật khẩu */}
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Mật khẩu (Tối thiểu 6 ký tự)
          </label>
          <div className="relative">
            <input
              id="password"
              name="password"
              type="password"
              required
              placeholder="••••••••"
              className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-150 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 dark:text-gray-500" />
          </div>
        </div>

        {/* Nút Đăng ký */}
        <button
          type="submit"
          className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-lg text-lg font-bold text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-200 transform hover:scale-[1.01] active:scale-100"
        >
          Đăng Ký Tài Khoản
        </button>
      </form>

      {/* Chuyển sang Đăng nhập */}
      <p className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
        Đã có tài khoản?{' '}
        <button
          type="button"
          onClick={() => onViewChange('login')}
          className="font-bold text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 transition duration-150"
        >
          Đăng nhập
        </button>
      </p>
    </div>
  );
};

export default AuthRegisterForm;
