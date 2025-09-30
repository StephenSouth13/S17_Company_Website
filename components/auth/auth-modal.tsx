"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Checkbox } from "@/components/ui/checkbox"
import { Eye, EyeOff, Mail, Lock, User, Phone, Facebook, Chrome } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
  defaultTab?: "login" | "register"
}

export function AuthModal({ isOpen, onClose, defaultTab = "login" }: AuthModalProps) {
  const [activeTab, setActiveTab] = useState(defaultTab)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  // Form states
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
    rememberMe: false,
  })

  const [registerForm, setRegisterForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
    subscribeNewsletter: true,
  })

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsLoading(false)
    onClose()
  }

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    if (registerForm.password !== registerForm.confirmPassword) {
      alert("Mật khẩu không khớp!")
      return
    }
    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsLoading(false)
    onClose()
  }

  const handleSocialLogin = async (provider: string) => {
    setIsLoading(true)
    // Simulate social login
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsLoading(false)
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-full max-w-md md:max-w-lg bg-white dark:bg-gray-900 border-border shadow-2xl max-h-[95vh] overflow-hidden flex flex-col">
        <DialogHeader className="flex-shrink-0">
          <DialogTitle className="text-center text-2xl font-bold gradient-text">
            {activeTab === "login" ? "Đăng nhập" : "Đăng ký"}
          </DialogTitle>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto space-y-6 pr-1 scrollbar-thin" style={{ maxHeight: 'calc(95vh - 12rem)' }}>
          {/* Tab Switcher */}
          <div className="flex bg-gray-100 dark:bg-gray-800 rounded-lg p-1 relative overflow-hidden">
            <Button
              variant={activeTab === "login" ? "default" : "ghost"}
              className={`flex-1 h-10 relative z-10 transition-all duration-300 ${
                activeTab === "login" 
                  ? "bg-white dark:bg-gray-700 text-primary shadow-md" 
                  : "text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary"
              }`}
              onClick={() => setActiveTab("login")}
            >
              Đăng nhập
            </Button>
            <Button
              variant={activeTab === "register" ? "default" : "ghost"}
              className={`flex-1 h-10 relative z-10 transition-all duration-300 ${
                activeTab === "register" 
                  ? "bg-white dark:bg-gray-700 text-primary shadow-md" 
                  : "text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary"
              }`}
              onClick={() => setActiveTab("register")}
            >
              Đăng ký
            </Button>
          </div>

          {/* Social Login */}
          <div className="space-y-3">
            <Button
              variant="outline"
              className="w-full h-12 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 hover:bg-blue-50 hover:border-blue-500 hover:text-blue-600 dark:hover:bg-blue-900/20 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-all duration-200 group"
              onClick={() => handleSocialLogin("google")}
              disabled={isLoading}
            >
              <Chrome className="h-5 w-5 mr-3 group-hover:scale-110 transition-transform duration-200" />
              Tiếp tục với Google
            </Button>
            <Button
              variant="outline"
              className="w-full h-12 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 hover:bg-blue-50 hover:border-blue-600 hover:text-blue-600 dark:hover:bg-blue-900/20 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-all duration-200 group"
              onClick={() => handleSocialLogin("facebook")}
              disabled={isLoading}
            >
              <Facebook className="h-5 w-5 mr-3 group-hover:scale-110 transition-transform duration-200" />
              Tiếp tục với Facebook
            </Button>
          </div>

          <div className="relative">
            <Separator />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="bg-white dark:bg-gray-900 px-4 text-sm text-muted-foreground">hoặc</span>
            </div>
          </div>

          {/* Login Form */}
          {activeTab === "login" && (
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="login-email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="login-email"
                    type="email"
                    placeholder="Nhập email của bạn"
                    className="pl-10"
                    value={loginForm.email}
                    onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="login-password">Mật khẩu</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="login-password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Nhập mật khẩu"
                    className="pl-10 pr-10"
                    value={loginForm.password}
                    onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="remember-me"
                    checked={loginForm.rememberMe}
                    onCheckedChange={(checked) => setLoginForm({ ...loginForm, rememberMe: checked as boolean })}
                  />
                  <Label htmlFor="remember-me" className="text-sm">
                    Ghi nhớ đăng nhập
                  </Label>
                </div>
                <Button variant="link" className="p-0 h-auto text-sm text-primary hover:text-primary/80 hover:underline transition-colors duration-200">
                  Quên mật khẩu?
                </Button>
              </div>

              <Button type="submit" className="w-full h-12 bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed" disabled={isLoading}>
                {isLoading ? "Đang đăng nhập..." : "Đăng nhập"}
              </Button>
            </form>
          )}

          {/* Register Form */}
          {activeTab === "register" && (
            <form onSubmit={handleRegister} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="register-name">Họ và tên</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="register-name"
                    type="text"
                    placeholder="Nhập họ và tên"
                    className="pl-10"
                    value={registerForm.fullName}
                    onChange={(e) => setRegisterForm({ ...registerForm, fullName: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="register-email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="register-email"
                      type="email"
                      placeholder="Email"
                      className="pl-10"
                      value={registerForm.email}
                      onChange={(e) => setRegisterForm({ ...registerForm, email: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="register-phone">Số điện thoại</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="register-phone"
                      type="tel"
                      placeholder="Số điện thoại"
                      className="pl-10"
                      value={registerForm.phone}
                      onChange={(e) => setRegisterForm({ ...registerForm, phone: e.target.value })}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="register-password">Mật khẩu</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="register-password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Tạo mật khẩu"
                    className="pl-10 pr-10"
                    value={registerForm.password}
                    onChange={(e) => setRegisterForm({ ...registerForm, password: e.target.value })}
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="register-confirm-password">Xác nhận mật khẩu</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="register-confirm-password"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Nhập lại mật khẩu"
                    className="pl-10 pr-10"
                    value={registerForm.confirmPassword}
                    onChange={(e) => setRegisterForm({ ...registerForm, confirmPassword: e.target.value })}
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="agree-terms"
                    checked={registerForm.agreeToTerms}
                    onCheckedChange={(checked) =>
                      setRegisterForm({ ...registerForm, agreeToTerms: checked as boolean })
                    }
                    required
                  />
                  <Label htmlFor="agree-terms" className="text-sm leading-relaxed">
                    Tôi đồng ý với{" "}
                    <Button variant="link" className="p-0 h-auto text-sm text-primary hover:text-primary/80 hover:underline transition-colors duration-200">
                      Điều khoản sử dụng
                    </Button>{" "}
                    và{" "}
                    <Button variant="link" className="p-0 h-auto text-sm text-primary hover:text-primary/80 hover:underline transition-colors duration-200">
                      Chính sách bảo mật
                    </Button>
                  </Label>
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="subscribe-newsletter"
                    checked={registerForm.subscribeNewsletter}
                    onCheckedChange={(checked) =>
                      setRegisterForm({ ...registerForm, subscribeNewsletter: checked as boolean })
                    }
                  />
                  <Label htmlFor="subscribe-newsletter" className="text-sm">
                    Nhận thông tin khuyến mãi và tin tức mới nhất
                  </Label>
                </div>
              </div>

              <Button type="submit" className="w-full h-12 bg-gradient-to-r from-green-500 to-primary hover:from-green-600 hover:to-primary/90 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed" disabled={isLoading}>
                {isLoading ? "Đang tạo tài khoản..." : "Tạo tài khoản"}
              </Button>
            </form>
          )}

          {/* Benefits */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 space-y-3">
            <h4 className="font-semibold text-sm">Lợi ích khi có tài khoản S17:</h4>
            <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Badge variant="secondary" className="w-2 h-2 p-0 bg-primary" />
                <span>Theo dõi đơn hàng</span>
              </div>
              <div className="flex items-center space-x-2">
                <Badge variant="secondary" className="w-2 h-2 p-0 bg-primary" />
                <span>Ưu đãi độc quyền</span>
              </div>
              <div className="flex items-center space-x-2">
                <Badge variant="secondary" className="w-2 h-2 p-0 bg-primary" />
                <span>Lịch sử mua hàng</span>
              </div>
              <div className="flex items-center space-x-2">
                <Badge variant="secondary" className="w-2 h-2 p-0 bg-primary" />
                <span>Hỗ trợ ưu tiên</span>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
