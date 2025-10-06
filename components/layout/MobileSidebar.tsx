"use client"

// Import React và các hooks cần thiết
import React, { useState } from "react"
// Thêm Menu icon để hoàn thiện
import { Menu, Search, X, ShoppingCart, Globe, Sun, Moon, LogIn, UserPlus, Home, Tag, Briefcase, Info, Mail } from "lucide-react" 

// Component giả lập Logo S17 (thay thế bằng component Logo thực tế của bạn)
const S17Logo: React.FC = () => (
  <div className="flex items-center space-x-1">
    <span className="text-4xl font-extrabold text-white leading-none">S17</span>
    <span className="text-[10px] text-white/80 font-medium uppercase leading-none mt-1">Invest for Future</span>
  </div>
)

interface MobileSidebarProps {
  isOpen: boolean
  onClose: () => void
  // Thêm prop để giả lập việc chuyển tab (giống như trong AuthModal)
  onNavigateToAuth: (tab: "login" | "register") => void 
}

// Dữ liệu cho các liên kết điều hướng
const navLinks = [
  { name: "Trang Chủ", icon: Home, href: "/"},
  { name: "Sản Phẩm", icon: Tag, href: "/products"},
  { name: "Dịch Vụ", icon: Briefcase, href: "/services"},
  { name: "Giới Thiệu", icon: Info, href: "/about"},
  { name: "Liên Hệ", icon: Mail, href: "/contact"},
]

// Sử dụng React.FC<MobileSidebarProps> cho typing chuẩn TSX
const MobileSidebar: React.FC<MobileSidebarProps> = ({ isOpen, onClose, onNavigateToAuth }) => {
  // State giả lập cho Dark Mode
  const [isDark, setIsDark] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  const handleLinkClick = (href: string) => {
    // Logic điều hướng (ví dụ: router.push(href))
    console.log("Navigating to:", href)
    onClose() // Đóng menu sau khi click
  }
  
  const handleAuthClick = (tab: "login" | "register") => {
    onNavigateToAuth(tab)
    onClose()
  }

  // Lớp CSS chung cho menu, sử dụng gradient xanh đậm như ảnh tham khảo
  const menuBgClass = "bg-gradient-to-br from-blue-700 to-indigo-800 dark:from-gray-900 dark:to-gray-800 text-white";

  return (
    <>
      {/* Overlay - Lớp phủ mờ khi menu mở */}
      <div 
        className={`
          fixed inset-0 z-40 transition-opacity duration-300 md:hidden
          ${isOpen ? "opacity-100 visible bg-black/50" : "opacity-0 invisible"}
        `}
        onClick={onClose}
      />

      {/* Sidebar Content */}
      <div 
        className={`
          fixed top-0 left-0 h-screen w-80 max-w-[85vw] z-50 shadow-2xl p-6 md:hidden
          transform transition-transform duration-500 ease-in-out 
          ${menuBgClass} 
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          flex flex-col space-y-8
        `}
      >
        
        {/* Header - Logo và Icons chức năng */}
        <div className="flex justify-between items-center flex-shrink-0 border-b border-white/20 pb-4">
            {/* Logo */}
            <S17Logo />

            {/* Icons */}
            <div className="flex items-center space-x-4">
                {/* Theme Toggle */}
                <button onClick={() => setIsDark(!isDark)} className="p-2 rounded-full hover:bg-white/10 transition duration-200">
                    {isDark ? <Sun className="h-6 w-6 text-yellow-300" /> : <Moon className="h-6 w-6 text-white" />}
                </button>
                {/* Language */}
                <div className="flex items-center space-x-1">
                    <Globe className="h-6 w-6" />
                    <span className="font-semibold text-lg">VI</span>
                </div>
                {/* Cart */}
                <button onClick={() => console.log("Open Cart")} className="p-2 rounded-full hover:bg-white/10 transition duration-200">
                    <ShoppingCart className="h-6 w-6" />
                </button>
                {/* Close Button */}
                <button onClick={onClose} className="p-2 rounded-full hover:bg-white/10 transition duration-200">
                    <X className="h-6 w-6" />
                </button>
            </div>
        </div>

        {/* Search Bar */}
        <div className="flex-shrink-0">
          <div className="relative">
            <input
              type="text"
              placeholder="Tìm kiếm sản phẩm..."
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/10 border-2 border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-white transition-colors text-base"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                    console.log("Searching for:", searchQuery)
                    onClose()
                }
              }}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/80" />
          </div>
        </div>

        {/* Main Navigation - Sử dụng flex-1 và overflow-y-auto để đảm bảo cuộn nếu nội dung dài */}
        <nav className="flex-1 overflow-y-auto custom-scrollbar space-y-2 py-2">
            {navLinks.map((link) => (
                <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault(); // Ngăn chặn hành vi mặc định, dùng handleLinkClick
                      handleLinkClick(link.href);
                    }}
                    className="flex items-center space-x-4 px-4 py-3 rounded-xl text-lg font-medium hover:bg-white/20 transition duration-200 group focus:outline-none focus:ring-2 focus:ring-white/50"
                >
                    <link.icon className="h-6 w-6 text-white/80 group-hover:text-white" />
                    <span>{link.name}</span>
                </a>
            ))}
            
            <div className="h-px bg-white/20 my-4" /> 

            {/* Authentication Links */}
            <button
                onClick={() => handleAuthClick("login")}
                className="w-full flex items-center space-x-4 px-4 py-3 rounded-xl text-lg font-bold bg-white/10 hover:bg-white/20 transition duration-200 focus:outline-none focus:ring-2 focus:ring-white/50"
            >
                <LogIn className="h-6 w-6 text-white/80" />
                <span>Đăng nhập</span>
            </button>
            <button
                onClick={() => handleAuthClick("register")}
                className="w-full flex items-center space-x-4 px-4 py-3 rounded-xl text-lg font-bold hover:bg-white/20 transition duration-200 focus:outline-none focus:ring-2 focus:ring-white/50"
            >
                <UserPlus className="h-6 w-6 text-white/80" />
                <span>Đăng ký</span>
            </button>
        </nav>
        
      </div>
      
      {/* Thêm style cho scrollbar tùy chỉnh trong menu */}
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: rgba(255, 255, 255, 0.4);
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background-color: rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </>
  )
}

export default MobileSidebar;
