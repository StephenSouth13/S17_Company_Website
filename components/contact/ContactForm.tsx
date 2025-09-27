"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone } from "lucide-react"

export default function ContactForm({ triggerLabel }: { triggerLabel?: string }) {
  const [open, setOpen] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Thông tin đã được gửi tới Ms. Khánh - 0909002207 ✅")
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button 
          size="sm" 
          className="bg-green-500 hover:bg-green-600 text-white w-full"
        >
          <Phone className="h-4 w-4 mr-2" />
          {triggerLabel || "Liên hệ"}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Liên hệ với Ms. Khánh</DialogTitle>
          <p className="text-sm text-muted-foreground">
            Điền thông tin để được tư vấn nhanh qua số <strong>0909002207</strong>.
          </p>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input placeholder="Họ và tên" required />
          <Input type="email" placeholder="Email" required />
          <Input type="tel" placeholder="Số điện thoại" required />
          <Textarea placeholder="Nội dung cần liên hệ..." rows={4} />
          <Button type="submit" className="w-full">Gửi thông tin</Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
