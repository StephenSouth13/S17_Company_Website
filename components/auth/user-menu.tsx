"use client";

import React, { useEffect, useState, useCallback, useMemo } from "react";
// Lucide-react icons - Được sử dụng trực tiếp
import { X, AlertTriangle, User, Settings, ShoppingBag, Heart, CreditCard, LogOut, Crown, TrendingUp } from "lucide-react";

// Màu xanh lá cây đậm mô phỏng 'shop_dark_green' trong Tailwind config.
const PRIMARY_GREEN_CLASS = "bg-green-600 hover:bg-green-700";

// ====================================================================
// Mock UI Components (Thay thế cho shadcn/ui: Button, Avatar, Dropdown, Badge)
// ====================================================================

// --- Custom Button ---
const CustomButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'default' | 'ghost' | 'secondary' | 'outline', size?: 'sm' | 'default', className?: string }> = ({
    children,
    variant = 'default',
    size = 'default',
    className = '',
    ...props
}) => {
    let baseClasses = "rounded-xl font-semibold transition duration-150 active:scale-[0.98] whitespace-nowrap";
    let sizeClasses = size === 'sm' ? "px-3 py-1.5 text-sm h-8" : "px-4 py-2 h-10";

    switch (variant) {
        case 'ghost':
            baseClasses += " bg-transparent hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200";
            break;
        case 'secondary':
            baseClasses += " bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-100";
            break;
        case 'outline':
            baseClasses += " bg-transparent border border-gray-300 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200";
            break;
        case 'default':
        default:
            baseClasses += ` ${PRIMARY_GREEN_CLASS} text-white shadow-md`;
            break;
    }

    return (
        <button className={`${baseClasses} ${sizeClasses} ${className}`} {...props}>
            {children}
        </button>
    );
};

// --- Custom Avatar ---
const CustomAvatar: React.FC<{ name: string; avatar?: string; className?: string; fallbackClass?: string }> = ({ name, avatar, className = "h-10 w-10", fallbackClass = "text-sm" }) => {
    const fallbackText = name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2);

    return (
        <div className={`relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full ${className}`}>
            {avatar ? (
                // Sử dụng placeholder để đảm bảo hình ảnh hiển thị
                <img className="aspect-square h-full w-full object-cover" src={avatar} alt={name} onError={(e) => (e.currentTarget.src = `https://placehold.co/100x100/34D399/ffffff?text=${fallbackText}`)} />
            ) : (
                <div className={`flex h-full w-full items-center justify-center rounded-full bg-green-500 text-white ${fallbackClass}`}>
                    {fallbackText}
                </div>
            )}
        </div>
    );
};

// --- Custom Dropdown Menu (Đơn giản hóa) ---
// Thay thế cho DropdownMenu, DropdownMenuTrigger, DropdownMenuContent
const CustomDropdownMenu: React.FC<{ trigger: React.ReactNode, children: React.ReactNode }> = ({ trigger, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    // Close on click outside
    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            const dropdown = document.getElementById('user-menu-dropdown');
            const button = document.getElementById('user-menu-trigger');

            if (dropdown && button && !dropdown.contains(event.target as Node) && !button.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        if (isOpen) {
            document.addEventListener('mousedown', handleOutsideClick);
        }
        return () => document.removeEventListener('mousedown', handleOutsideClick);
    }, [isOpen]);

    return (
        <div className="relative inline-block text-left">
            <div id="user-menu-trigger" onClick={() => setIsOpen(!isOpen)}>{trigger}</div>
            {isOpen && (
                <div
                    id="user-menu-dropdown"
                    className="absolute right-0 mt-2 w-80 origin-top-right rounded-xl bg-white dark:bg-gray-800 shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none z-50 transition transform duration-200 ease-out p-1"
                    role="menu"
                >
                    {children}
                </div>
            )}
        </div>
    );
};

// --- Custom Badge ---
const CustomBadge: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${className}`}>
        {children}
    </span>
);

// --- Custom Dropdown Items (Thay thế DropdownMenuLabel, Separator, Item) ---
const CustomDropdownMenuLabel: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className }) => (
    <div className={`px-3 py-2 ${className}`}>
        {children}
    </div>
);

const CustomDropdownMenuSeparator: React.FC = () => (
    <div className="h-[1px] bg-gray-200 dark:bg-gray-700 my-1" />
);

const CustomDropdownMenuItem: React.FC<{ children: React.ReactNode, onClick: () => void, isDestructive?: boolean }> = ({ children, onClick, isDestructive = false }) => (
    <div
        onClick={onClick}
        className={`flex items-center px-3 py-2 text-sm rounded-lg cursor-pointer transition duration-150 
        ${isDestructive ? 'text-red-600 hover:bg-red-50 dark:hover:bg-red-900/50' : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
    >
        {children}
    </div>
);

// ====================================================================
// 1. AuthModal Component (Đã hoàn thiện)
// ====================================================================

// Định nghĩa các trạng thái xem (View) của Modal
type AuthView = "login" | "register" | "forgot-password";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTab: AuthView; 
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  defaultTab,
}) => {
  const [currentView, setCurrentView] = useState<AuthView>(defaultTab);
  const [alertMessage, setAlertMessage] = useState<string>("");
  const [isAlertVisible, setIsAlertVisible] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) setCurrentView(defaultTab);
    if (!isOpen) {
      setIsAlertVisible(false);
      setAlertMessage("");
    }
  }, [defaultTab, isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  const handleViewChange = useCallback((view: AuthView) => {
    setCurrentView(view);
    setIsAlertVisible(false);
    setAlertMessage("");
  }, []);

  const showAlert = (message: string) => {
    setAlertMessage(message);
    setIsAlertVisible(true);
    setTimeout(() => {
      setIsAlertVisible(false);
      setAlertMessage("");
    }, 4000); 
  };

  const AuthLoginForm = ({ onViewChange }: { onViewChange: (v: AuthView) => void }) => {
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      showAlert("Login simulated: Successful!");
      // Thêm logic đăng nhập thực tế ở đây
    };

    return (
      <div className="p-8 space-y-6">
        <h2 className="text-2xl font-extrabold text-gray-800 dark:text-gray-100 text-center">Welcome Back</h2>
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
          <CustomButton type="submit" className="w-full py-3 rounded-xl font-bold shadow-md transition duration-200">
            Login
          </CustomButton>
        </form>
        <div className="flex justify-between text-sm pt-2">
          <button onClick={() => onViewChange("forgot-password")} className="text-blue-600 dark:text-blue-400 hover:underline transition">
            Forgot password?
          </button>
          <button onClick={() => onViewChange("register")} className="text-blue-600 dark:text-blue-400 hover:underline transition">
            Create an account
          </button>
        </div>
      </div>
    );
  };

  const AuthRegisterForm = ({ onViewChange }: { onViewChange: (v: AuthView) => void }) => {
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      showAlert("Registration simulated: Redirecting to login...");
      onViewChange("login");
    };

    return (
      <div className="p-8 space-y-6">
        <h2 className="text-2xl font-extrabold text-gray-800 dark:text-gray-100 text-center">Join Us</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" placeholder="Full Name" required className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-green-500 focus:outline-none dark:bg-gray-700 dark:text-white transition duration-150" />
          <input type="email" placeholder="Email Address" required className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-green-500 focus:outline-none dark:bg-gray-700 dark:text-white transition duration-150" />
          <input type="password" placeholder="Password (min 8 chars)" required minLength={8} className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-green-500 focus:outline-none dark:bg-gray-700 dark:text-white transition duration-150" />
          <CustomButton type="submit" className="w-full py-3 rounded-xl font-bold shadow-md transition duration-200">
            Register
          </CustomButton>
        </form>
        <div className="text-sm text-center pt-2 text-gray-600 dark:text-gray-400">
          Already have an account?{" "}
          <button onClick={() => onViewChange("login")} className="text-blue-600 dark:text-blue-400 hover:underline transition font-semibold">
            Login
          </button>
        </div>
      </div>
    );
  };

  const AuthForgotPasswordForm = ({ onViewChange }: { onViewChange: (v: AuthView) => void }) => {
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      showAlert("Password reset link simulated: Please check your email!");
    };

    return (
      <div className="p-8 space-y-6">
        <h2 className="text-2xl font-extrabold text-gray-800 dark:text-gray-100 text-center">Reset Password</h2>
        <p className="text-center text-gray-600 dark:text-gray-400 text-sm">Enter your email address and we'll send you a link to reset your password.</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="email" placeholder="Enter your email" required className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:outline-none dark:bg-gray-700 dark:text-white transition duration-150" />
          <CustomButton type="submit" variant="secondary" className="w-full py-3 rounded-xl font-bold hover:bg-yellow-600 shadow-md transition duration-200 bg-yellow-500 text-white">
            Send Reset Link
          </CustomButton>
        </form>
        <div className="text-sm text-center pt-2">
          <button onClick={() => onViewChange("login")} className="text-blue-600 dark:text-blue-400 hover:underline transition font-semibold">
            &larr; Back to Login
          </button>
        </div>
      </div>
    );
  };

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
      {/* Custom Alert */}
      <div
        id="custom-alert-modal"
        className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-[100] p-4 mx-4 bg-yellow-50 dark:bg-yellow-900 border border-yellow-400 text-yellow-800 dark:text-yellow-200 rounded-xl shadow-xl transition-all duration-300 ${
          isAlertVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <div className="flex items-center space-x-2">
          <AlertTriangle className="h-5 w-5 flex-shrink-0" />
          <p id="custom-alert-message" className="text-sm font-medium">{alertMessage}</p>
        </div>
      </div>

      {/* Backdrop */}
      <div className="fixed inset-0 bg-black bg-opacity-70 z-40 transition-opacity duration-300" onClick={onClose} />

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
          <button onClick={onClose} aria-label="Close authentication modal" className="absolute top-3 right-3 p-2 rounded-full text-gray-500 dark:text-gray-400 bg-white/70 dark:bg-gray-800/70 hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-150 z-10 shadow-sm">
            <X className="h-5 w-5" />
          </button>

          {/* Rendered Form Content */}
          {RenderedForm}
        </div>
      </div>
    </>
  );
};

// ====================================================================
// 2. UserMenu Component (Đã sửa lỗi imports và dùng Mock UI)
// ====================================================================

interface UserData {
    id: string;
    name: string;
    email: string;
    avatar?: string;
    tier: "basic" | "premium" | "vip";
}

// UserMenu giờ nhận props để điều khiển trạng thái đăng nhập từ component cha (App)
export function UserMenu({
    user,
    handleLogin,
    handleLogout
}: {
    user: UserData | null;
    handleLogin: (tab?: AuthView) => void;
    handleLogout: () => void;
}) {
    const getTierInfo = (tier: string) => {
        switch (tier) {
            case "premium":
                return { label: "Premium", color: "bg-yellow-500/10 text-yellow-600", icon: Crown }
            case "vip":
                return { label: "VIP", color: "bg-purple-500/10 text-purple-600", icon: Crown }
            default:
                return { label: "Cơ bản", color: "bg-gray-500/10 text-gray-600", icon: User }
        }
    }

    if (!user) {
        return (
            <div className="flex items-center space-x-2">
                {/* Dùng CustomButton thay cho Button */}
                <CustomButton variant="ghost" size="sm" onClick={() => handleLogin("login")}>
                    Đăng nhập
                </CustomButton>
                <CustomButton size="sm" onClick={() => handleLogin("register")}>
                    Đăng ký
                </CustomButton>
            </div>
        )
    }

    const tierInfo = getTierInfo(user.tier)

    return (
        // Dùng CustomDropdownMenu thay cho DropdownMenu
        <CustomDropdownMenu
            trigger={
                // Dùng CustomButton/CustomAvatar thay cho Button/Avatar
                <CustomButton variant="ghost" className="relative h-10 w-10 rounded-full p-0">
                    <CustomAvatar name={user.name} avatar={user.avatar} />
                </CustomButton>
            }
        >
            <CustomDropdownMenuLabel>
                <div className="flex flex-col space-y-3">
                    <div className="flex items-center space-x-3">
                        <CustomAvatar name={user.name} avatar={user.avatar} className="h-12 w-12" fallbackClass="text-lg" />
                        <div className="flex flex-col space-y-1">
                            <p className="text-sm font-medium leading-none text-gray-800 dark:text-gray-100">{user.name}</p>
                            <p className="text-xs leading-none text-gray-500 dark:text-gray-400">{user.email}</p>
                            {/* Dùng CustomBadge thay cho Badge */}
                            <CustomBadge className={`${tierInfo.color} w-fit text-xs`}>
                                <tierInfo.icon className="h-3 w-3 mr-1" />
                                {tierInfo.label}
                            </CustomBadge>
                        </div>
                    </div>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-3 gap-2 text-center pt-2">
                        <div className="bg-gray-100/50 dark:bg-gray-700/50 rounded-lg p-2">
                            <div className="text-lg font-bold text-green-600">12</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">Đơn hàng</div>
                        </div>
                        <div className="bg-gray-100/50 dark:bg-gray-700/50 rounded-lg p-2">
                            <div className="text-lg font-bold text-pink-500">5</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">Yêu thích</div>
                        </div>
                        <div className="bg-gray-100/50 dark:bg-gray-700/50 rounded-lg p-2">
                            <div className="text-lg font-bold text-blue-600">2</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">Đầu tư</div>
                        </div>
                    </div>
                </div>
            </CustomDropdownMenuLabel>
            
            <CustomDropdownMenuSeparator />

            {/* Dùng CustomDropdownMenuItem thay cho DropdownMenuItem */}
            <CustomDropdownMenuItem onClick={() => console.log('Thông tin cá nhân')}>
                <User className="mr-3 h-4 w-4" />
                <span>Thông tin cá nhân</span>
            </CustomDropdownMenuItem>

            <CustomDropdownMenuItem onClick={() => console.log('Đơn hàng của tôi')}>
                <ShoppingBag className="mr-3 h-4 w-4" />
                <span>Đơn hàng của tôi</span>
            </CustomDropdownMenuItem>

            <CustomDropdownMenuItem onClick={() => console.log('Danh mục đầu tư')}>
                <TrendingUp className="mr-3 h-4 w-4" />
                <span>Danh mục đầu tư</span>
            </CustomDropdownMenuItem>

            <CustomDropdownMenuItem onClick={() => console.log('Sản phẩm yêu thích')}>
                <Heart className="mr-3 h-4 w-4" />
                <span>Sản phẩm yêu thích</span>
            </CustomDropdownMenuItem>

            <CustomDropdownMenuItem onClick={() => console.log('Phương thức thanh toán')}>
                <CreditCard className="mr-3 h-4 w-4" />
                <span>Phương thức thanh toán</span>
            </CustomDropdownMenuItem>

            <CustomDropdownMenuItem onClick={() => console.log('Cài đặt')}>
                <Settings className="mr-3 h-4 w-4" />
                <span>Cài đặt</span>
            </CustomDropdownMenuItem>

            <CustomDropdownMenuSeparator />

            <CustomDropdownMenuItem onClick={handleLogout} isDestructive>
                <LogOut className="mr-3 h-4 w-4" />
                <span>Đăng xuất</span>
            </CustomDropdownMenuItem>

        </CustomDropdownMenu>
    )
}

// ====================================================================
// 3. Main Application Component (Để chạy và test)
// ====================================================================

export default function App() {
    // Auth Modal State
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
    const [authModalTab, setAuthModalTab] = useState<AuthView>("login");

    // Mock user state - Initialize with a logged-in user for demonstration
    const [user, setUser] = useState<UserData | null>({
        id: "user123",
        name: "Lê Văn Tám",
        email: "tam.le@example.com",
        avatar: "https://placehold.co/100x100/22C55E/ffffff?text=LT", // Placeholder URL
        tier: "premium",
    });

    const handleLogin = (tab: AuthView = "login") => {
        setAuthModalTab(tab);
        setIsAuthModalOpen(true);
    };

    const handleLogout = () => {
        setUser(null);
    };

    const handleCloseAuthModal = () => {
        setIsAuthModalOpen(false);
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 font-sans">
             <script src="https://cdn.tailwindcss.com"></script>

            {/* HEADER */}
            <header className="sticky top-0 z-30 w-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-md border-b border-gray-100 dark:border-gray-700">
                <div className="container mx-auto max-w-7xl h-16 flex items-center justify-between px-4 sm:px-6 lg:px-8">
                    <div className="text-2xl font-bold text-green-600">
                        ECOMMERCE
                    </div>
                    
                    {/* User Menu / Auth Buttons */}
                    <UserMenu
                        user={user}
                        handleLogin={handleLogin}
                        handleLogout={handleLogout}
                    />
                </div>
            </header>

            {/* MAIN CONTENT FOR VISUAL DEMO */}
            <main className="container mx-auto max-w-7xl p-8 text-center">
                <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mt-10">
                    Hệ thống Đăng nhập & Menu người dùng
                </h1>
                <p className="mt-4 text-gray-600 dark:text-gray-400">
                    Trạng thái hiện tại: 
                    <span className={`font-semibold ${user ? 'text-green-600' : 'text-red-600'}`}>
                        {user ? ` Đã đăng nhập (${user.name})` : ' Chưa đăng nhập'}
                    </span>
                </p>
                <CustomButton onClick={() => setUser(prev => prev ? null : {id: "user123", name: "Lê Văn Tám", email: "tam.le@example.com", avatar: "https://placehold.co/100x100/22C55E/ffffff?text=LT", tier: "vip"})} className="mt-8">
                    {user ? 'Chuyển sang Đăng xuất' : 'Chuyển sang Đăng nhập'}
                </CustomButton>
            </main>

            {/* AUTH MODAL */}
            <AuthModal
                isOpen={isAuthModalOpen}
                onClose={handleCloseAuthModal}
                defaultTab={authModalTab}
            />
        </div>
    );
}
