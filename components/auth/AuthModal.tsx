"use client";

import React, { useEffect, useState, useCallback, useMemo } from "react";
// Lucide-react icons
import { X, AlertTriangle } from "lucide-react";

// Định nghĩa các trạng thái xem (View) của Modal
type AuthView = "login" | "register" | "forgot-password";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTab: AuthView; // Xác định view mặc định khi mở modal
}

// Màu xanh lá cây đậm mô phỏng 'shop_dark_green' trong Tailwind config.
const PRIMARY_GREEN = "bg-green-600 hover:bg-green-700";

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  defaultTab,
}) => {
  // State quản lý View hiện tại bên trong Modal
  const [currentView, setCurrentView] = useState<AuthView>(defaultTab);
  // State quản lý thông báo lỗi/thành công (Custom Alert)
  const [alertMessage, setAlertMessage] = useState<string>("");
  const [isAlertVisible, setIsAlertVisible] = useState<boolean>(false);

  // Cập nhật view khi prop defaultTab thay đổi
  useEffect(() => {
    if (isOpen) setCurrentView(defaultTab);
    // Khi modal đóng, xóa thông báo alert
    if (!isOpen) {
      setIsAlertVisible(false);
      setAlertMessage("");
    }
  }, [defaultTab, isOpen]);

  // Xử lý đóng modal khi nhấn ESC
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  const handleViewChange = useCallback((view: AuthView) => {
    setCurrentView(view);
    // Reset alert khi chuyển view
    setIsAlertVisible(false);
    setAlertMessage("");
  }, []);

  const showAlert = (message: string) => {
    setAlertMessage(message);
    setIsAlertVisible(true);
    setTimeout(() => {
      setIsAlertVisible(false);
      setAlertMessage("");
    }, 4000); // Ẩn sau 4 giây
  };

  // -----------------------
  // Các Form Con gom trong file này
  // -----------------------

  const AuthLoginForm = ({ onViewChange }: { onViewChange: (v: AuthView) => void }) => {
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      // Logic đăng nhập giả định
      showAlert("Login functionality is simulated.");
    };

    return (
      <div className="p-8 space-y-6">
        <h2 className="text-2xl font-extrabold text-gray-800 dark:text-gray-100 text-center">
          Welcome Back
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email Address"
            required
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-green-500 focus:outline-none dark:bg-gray-700 dark:text-white transition duration-150"
          />
          <input
            type="password"
            placeholder="Password"
            required
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-green-500 focus:outline-none dark:bg-gray-700 dark:text-white transition duration-150"
          />
          <button
            type="submit"
            className={`w-full ${PRIMARY_GREEN} text-white py-3 rounded-xl font-bold shadow-md transition duration-200`}
          >
            Login
          </button>
        </form>
        <div className="flex justify-between text-sm pt-2">
          <button
            onClick={() => onViewChange("forgot-password")}
            className="text-blue-600 dark:text-blue-400 hover:underline transition"
          >
            Forgot password?
          </button>
          <button
            onClick={() => onViewChange("register")}
            className="text-blue-600 dark:text-blue-400 hover:underline transition"
          >
            Create an account
          </button>
        </div>
      </div>
    );
  };

  const AuthRegisterForm = ({ onViewChange }: { onViewChange: (v: AuthView) => void }) => {
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      // Logic đăng ký giả định
      showAlert("Registration successful! Please login.");
      onViewChange("login");
    };

    return (
      <div className="p-8 space-y-6">
        <h2 className="text-2xl font-extrabold text-gray-800 dark:text-gray-100 text-center">
          Join Us
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            required
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-green-500 focus:outline-none dark:bg-gray-700 dark:text-white transition duration-150"
          />
          <input
            type="email"
            placeholder="Email Address"
            required
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-green-500 focus:outline-none dark:bg-gray-700 dark:text-white transition duration-150"
          />
          <input
            type="password"
            placeholder="Password (min 8 chars)"
            required
            minLength={8}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-green-500 focus:outline-none dark:bg-gray-700 dark:text-white transition duration-150"
          />
          <button
            type="submit"
            className={`w-full ${PRIMARY_GREEN} text-white py-3 rounded-xl font-bold shadow-md transition duration-200`}
          >
            Register
          </button>
        </form>
        <div className="text-sm text-center pt-2 text-gray-600 dark:text-gray-400">
          Already have an account?{" "}
          <button
            onClick={() => onViewChange("login")}
            className="text-blue-600 dark:text-blue-400 hover:underline transition font-semibold"
          >
            Login
          </button>
        </div>
      </div>
    );
  };

  const AuthForgotPasswordForm = ({ onViewChange }: { onViewChange: (v: AuthView) => void }) => {
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      // Logic quên mật khẩu giả định
      showAlert("Password reset link sent to your email!");
    };

    return (
      <div className="p-8 space-y-6">
        <h2 className="text-2xl font-extrabold text-gray-800 dark:text-gray-100 text-center">
          Reset Password
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 text-sm">
          Enter your email address and we'll send you a link to reset your password.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Enter your email"
            required
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:outline-none dark:bg-gray-700 dark:text-white transition duration-150"
          />
          <button
            type="submit"
            className="w-full bg-yellow-500 text-white py-3 rounded-xl font-bold hover:bg-yellow-600 shadow-md transition duration-200"
          >
            Send Reset Link
          </button>
        </form>
        <div className="text-sm text-center pt-2">
          <button
            onClick={() => onViewChange("login")}
            className="text-blue-600 dark:text-blue-400 hover:underline transition font-semibold"
          >
            &larr; Back to Login
          </button>
        </div>
      </div>
    );
  };

  // -----------------------
  // Chọn Form hiển thị
  // -----------------------
  const RenderedForm = useMemo(() => {
    switch (currentView) {
      case "register":
        return <AuthRegisterForm onViewChange={handleViewChange} />;
      case "forgot-password":
        return <AuthForgotPasswordForm onViewChange={handleViewChange} />;
      case "login":
      default:
        return <AuthLoginForm onViewChange={handleViewChange} />;
    }
  }, [currentView, handleViewChange]);

  if (!isOpen) return null;

  return (
    <>
      {/* Custom Alert (sử dụng opacity và translate cho hiệu ứng mượt mà) */}
      <div
        id="custom-alert-modal"
        className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-[100] p-4 mx-4 bg-yellow-50 dark:bg-yellow-900 border border-yellow-400 text-yellow-800 dark:text-yellow-200 rounded-xl shadow-xl transition-all duration-300 ${
          isAlertVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <div className="flex items-center space-x-2">
          <AlertTriangle className="h-5 w-5 flex-shrink-0" />
          <p id="custom-alert-message" className="text-sm font-medium">
            {alertMessage}
          </p>
        </div>
      </div>

      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-70 z-40 transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8">
        <div
          className={`
            relative w-full md:max-w-md lg:max-w-lg bg-white dark:bg-gray-800 rounded-2xl 
            shadow-2xl max-h-[90vh] overflow-y-auto transform 
            transition-all duration-500 ease-out border border-gray-100 dark:border-gray-700
            ${isOpen ? "scale-100 opacity-100 translate-y-0" : "scale-90 opacity-0 translate-y-4"}
          `}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close authentication modal"
            className="absolute top-3 right-3 p-2 rounded-full text-gray-500 dark:text-gray-400 bg-white/70 dark:bg-gray-800/70 hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-150 z-10 shadow-sm"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Rendered Form Content */}
          {RenderedForm}
        </div>
      </div>
    </>
  );
};
