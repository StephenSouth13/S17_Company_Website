"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { User, Settings, ShoppingBag, Heart, CreditCard, LogOut, Crown, TrendingUp } from "lucide-react"
import { AuthModal } from "./auth-modal"

export function UserMenu() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
  const [authModalTab, setAuthModalTab] = useState<"login" | "register">("login")

  // Mock user state - in real app, this would come from auth context
  const [user, setUser] = useState<{
    id: string
    name: string
    email: string
    avatar?: string
    tier: "basic" | "premium" | "vip"
  } | null>(null)

  const handleLogin = (tab: "login" | "register" = "login") => {
    setAuthModalTab(tab)
    setIsAuthModalOpen(true)
  }

  const handleLogout = () => {
    setUser(null)
  }

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
      <>
        <div className="flex items-center space-x-2">
          <Button variant="default" size="sm" onClick={() => handleLogin("login")}>
            Đăng nhập
          </Button>
        </div>
        <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} defaultTab={authModalTab} />
      </>
    )
  }

  const tierInfo = getTierInfo(user.tier)

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative h-10 w-10 rounded-full">
            <Avatar className="h-10 w-10">
              <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
              <AvatarFallback className="bg-primary text-primary-foreground">
                {user.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
                  .toUpperCase()}
              </AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-80" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-3">
              <div className="flex items-center space-x-3">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                  <AvatarFallback className="bg-primary text-primary-foreground text-lg">
                    {user.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">{user.name}</p>
                  <p className="text-xs leading-none text-muted-foreground">{user.email}</p>
                  <Badge variant="secondary" className={`${tierInfo.color} w-fit text-xs`}>
                    <tierInfo.icon className="h-3 w-3 mr-1" />
                    {tierInfo.label}
                  </Badge>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="bg-muted/30 rounded-lg p-2">
                  <div className="text-lg font-bold text-primary">12</div>
                  <div className="text-xs text-muted-foreground">Đơn hàng</div>
                </div>
                <div className="bg-muted/30 rounded-lg p-2">
                  <div className="text-lg font-bold text-accent">5</div>
                  <div className="text-xs text-muted-foreground">Yêu thích</div>
                </div>
                <div className="bg-muted/30 rounded-lg p-2">
                  <div className="text-lg font-bold text-green-600">2</div>
                  <div className="text-xs text-muted-foreground">Đầu tư</div>
                </div>
              </div>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />

          <DropdownMenuItem className="cursor-pointer">
            <User className="mr-2 h-4 w-4" />
            <span>Thông tin cá nhân</span>
          </DropdownMenuItem>

          <DropdownMenuItem className="cursor-pointer">
            <ShoppingBag className="mr-2 h-4 w-4" />
            <span>Đơn hàng của tôi</span>
          </DropdownMenuItem>

          <DropdownMenuItem className="cursor-pointer">
            <TrendingUp className="mr-2 h-4 w-4" />
            <span>Danh mục đầu tư</span>
          </DropdownMenuItem>

          <DropdownMenuItem className="cursor-pointer">
            <Heart className="mr-2 h-4 w-4" />
            <span>Sản phẩm yêu thích</span>
          </DropdownMenuItem>

          <DropdownMenuItem className="cursor-pointer">
            <CreditCard className="mr-2 h-4 w-4" />
            <span>Phương thức thanh toán</span>
          </DropdownMenuItem>

          <DropdownMenuItem className="cursor-pointer">
            <Settings className="mr-2 h-4 w-4" />
            <span>Cài đặt</span>
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <DropdownMenuItem className="cursor-pointer text-red-600 focus:text-red-600" onClick={handleLogout}>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Đăng xuất</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}
