"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Camera,
  Save,
  ShoppingBag,
  TrendingUp,
  Heart,
  Bell,
  Shield,
  CreditCard,
  Crown,
} from "lucide-react"

export function UserProfile() {
  const [isEditing, setIsEditing] = useState(false)
  const [profileData, setProfileData] = useState({
    name: "Nguyễn Văn An",
    email: "nguyen.van.an@email.com",
    phone: "+84 123 456 789",
    address: "123 Đường ABC, Quận 1, TP.HCM",
    birthDate: "1990-01-15",
    avatar: "",
    tier: "premium" as "basic" | "premium" | "vip",
  })

  const [notifications, setNotifications] = useState({
    orderUpdates: true,
    promotions: true,
    newsletter: false,
    investmentAlerts: true,
  })

  const handleSave = () => {
    setIsEditing(false)
    // Save to API
  }

  const getTierInfo = (tier: string) => {
    switch (tier) {
      case "premium":
        return { label: "Premium", color: "bg-yellow-500/10 text-yellow-600 border-yellow-500/20", icon: Crown }
      case "vip":
        return { label: "VIP", color: "bg-purple-500/10 text-purple-600 border-purple-500/20", icon: Crown }
      default:
        return { label: "Cơ bản", color: "bg-gray-500/10 text-gray-600 border-gray-500/20", icon: User }
    }
  }

  const tierInfo = getTierInfo(profileData.tier)

  const orderHistory = [
    {
      id: "ORD-001",
      date: "2024-01-15",
      total: "45,990,000",
      status: "Đã giao",
      items: 2,
    },
    {
      id: "ORD-002",
      date: "2024-01-10",
      total: "28,990,000",
      status: "Đang giao",
      items: 1,
    },
    {
      id: "ORD-003",
      date: "2024-01-05",
      total: "89,990,000",
      status: "Đã giao",
      items: 1,
    },
  ]

  const investments = [
    {
      id: "INV-001",
      name: "Dự án Bất động sản Eco Green",
      amount: "50,000,000",
      roi: "+18%",
      status: "Đang hoạt động",
    },
    {
      id: "INV-002",
      name: "Startup Công nghệ FinTech",
      amount: "30,000,000",
      roi: "+25%",
      status: "Đang hoạt động",
    },
  ]

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Profile Header */}
      <Card>
        <CardContent className="p-8">
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-8">
            <div className="relative">
              <Avatar className="h-32 w-32">
                <AvatarImage src={profileData.avatar || "/placeholder.svg"} alt={profileData.name} />
                <AvatarFallback className="bg-primary text-primary-foreground text-3xl">
                  {profileData.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <Button
                size="sm"
                className="absolute bottom-0 right-0 h-8 w-8 rounded-full p-0"
                onClick={() => {
                  /* Handle avatar upload */
                }}
              >
                <Camera className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex-1 space-y-4">
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <h1 className="text-3xl font-bold">{profileData.name}</h1>
                  <Badge variant="secondary" className={tierInfo.color}>
                    <tierInfo.icon className="h-4 w-4 mr-1" />
                    {tierInfo.label}
                  </Badge>
                </div>
                <p className="text-muted-foreground">{profileData.email}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-muted/30 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-primary">12</div>
                  <div className="text-sm text-muted-foreground">Đơn hàng</div>
                </div>
                <div className="bg-muted/30 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-accent">2</div>
                  <div className="text-sm text-muted-foreground">Đầu tư</div>
                </div>
                <div className="bg-muted/30 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-green-600">5</div>
                  <div className="text-sm text-muted-foreground">Yêu thích</div>
                </div>
                <div className="bg-muted/30 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-yellow-600">1,250</div>
                  <div className="text-sm text-muted-foreground">Điểm thưởng</div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Profile Tabs */}
      <Tabs defaultValue="personal" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="personal">Thông tin</TabsTrigger>
          <TabsTrigger value="orders">Đơn hàng</TabsTrigger>
          <TabsTrigger value="investments">Đầu tư</TabsTrigger>
          <TabsTrigger value="favorites">Yêu thích</TabsTrigger>
          <TabsTrigger value="settings">Cài đặt</TabsTrigger>
        </TabsList>

        {/* Personal Information */}
        <TabsContent value="personal">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="flex items-center space-x-2">
                <User className="h-5 w-5" />
                <span>Thông tin cá nhân</span>
              </CardTitle>
              <Button
                variant={isEditing ? "default" : "outline"}
                onClick={isEditing ? handleSave : () => setIsEditing(true)}
              >
                {isEditing ? (
                  <>
                    <Save className="h-4 w-4 mr-2" />
                    Lưu
                  </>
                ) : (
                  "Chỉnh sửa"
                )}
              </Button>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Họ và tên</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="name"
                      value={profileData.name}
                      onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                      disabled={!isEditing}
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      value={profileData.email}
                      onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                      disabled={!isEditing}
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Số điện thoại</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="phone"
                      value={profileData.phone}
                      onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
                      disabled={!isEditing}
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="birthDate">Ngày sinh</Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="birthDate"
                      type="date"
                      value={profileData.birthDate}
                      onChange={(e) => setProfileData({ ...profileData, birthDate: e.target.value })}
                      disabled={!isEditing}
                      className="pl-10"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Địa chỉ</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="address"
                    value={profileData.address}
                    onChange={(e) => setProfileData({ ...profileData, address: e.target.value })}
                    disabled={!isEditing}
                    className="pl-10"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Order History */}
        <TabsContent value="orders">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <ShoppingBag className="h-5 w-5" />
                <span>Lịch sử đơn hàng</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {orderHistory.map((order) => (
                  <div key={order.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-4">
                        <span className="font-medium">{order.id}</span>
                        <Badge
                          variant={order.status === "Đã giao" ? "default" : "secondary"}
                          className={
                            order.status === "Đã giao"
                              ? "bg-green-500/10 text-green-600 border-green-500/20"
                              : "bg-blue-500/10 text-blue-600 border-blue-500/20"
                          }
                        >
                          {order.status}
                        </Badge>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {order.date} • {order.items} sản phẩm
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-primary">{order.total}₫</div>
                      <Button variant="outline" size="sm" className="mt-2 bg-transparent">
                        Xem chi tiết
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Investment Portfolio */}
        <TabsContent value="investments">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5" />
                <span>Danh mục đầu tư</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {investments.map((investment) => (
                  <div
                    key={investment.id}
                    className="flex items-center justify-between p-4 border border-border rounded-lg"
                  >
                    <div className="space-y-1">
                      <div className="font-medium">{investment.name}</div>
                      <div className="text-sm text-muted-foreground">Mã: {investment.id}</div>
                      <Badge variant="secondary" className="bg-green-500/10 text-green-600 border-green-500/20">
                        {investment.status}
                      </Badge>
                    </div>
                    <div className="text-right">
                      <div className="font-bold">{investment.amount}₫</div>
                      <div className="text-sm text-green-600 font-medium">{investment.roi}</div>
                      <Button variant="outline" size="sm" className="mt-2 bg-transparent">
                        Chi tiết
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Favorites */}
        <TabsContent value="favorites">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Heart className="h-5 w-5" />
                <span>Sản phẩm yêu thích</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <Heart className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <p className="text-muted-foreground">Chưa có sản phẩm yêu thích nào</p>
                <Button variant="outline" className="mt-4 bg-transparent">
                  Khám phá sản phẩm
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Settings */}
        <TabsContent value="settings">
          <div className="space-y-6">
            {/* Notifications */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Bell className="h-5 w-5" />
                  <span>Thông báo</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Cập nhật đơn hàng</div>
                    <div className="text-sm text-muted-foreground">Nhận thông báo về trạng thái đơn hàng</div>
                  </div>
                  <Switch
                    checked={notifications.orderUpdates}
                    onCheckedChange={(checked) => setNotifications({ ...notifications, orderUpdates: checked })}
                  />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Khuyến mãi</div>
                    <div className="text-sm text-muted-foreground">Nhận thông báo về ưu đãi và giảm giá</div>
                  </div>
                  <Switch
                    checked={notifications.promotions}
                    onCheckedChange={(checked) => setNotifications({ ...notifications, promotions: checked })}
                  />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Bản tin</div>
                    <div className="text-sm text-muted-foreground">Nhận bản tin hàng tuần</div>
                  </div>
                  <Switch
                    checked={notifications.newsletter}
                    onCheckedChange={(checked) => setNotifications({ ...notifications, newsletter: checked })}
                  />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Cảnh báo đầu tư</div>
                    <div className="text-sm text-muted-foreground">Thông báo về cơ hội đầu tư mới</div>
                  </div>
                  <Switch
                    checked={notifications.investmentAlerts}
                    onCheckedChange={(checked) => setNotifications({ ...notifications, investmentAlerts: checked })}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Security */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="h-5 w-5" />
                  <span>Bảo mật</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  Đổi mật khẩu
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  Xác thực hai yếu tố
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  Quản lý phiên đăng nhập
                </Button>
              </CardContent>
            </Card>

            {/* Payment Methods */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CreditCard className="h-5 w-5" />
                  <span>Phương thức thanh toán</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-4">
                  <CreditCard className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <p className="text-muted-foreground mb-4">Chưa có phương thức thanh toán nào</p>
                  <Button>Thêm thẻ thanh toán</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
