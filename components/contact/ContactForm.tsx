// components/layout/contact-form.tsx
"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone } from "lucide-react"

interface ContactFormProps {
  triggerLabel: React.ReactNode;
  className?: string // ✅ thêm prop cho phép custom style nút trigger
}

export default function ContactForm({ triggerLabel, className }: ContactFormProps) {
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
          className={`w-full justify-center rounded-xl font-semibold shadow-lg transition-all duration-300 ${className || "bg-neutral-900 text-neutral-50 hover:bg-neutral-800"}`}
        >
          <Phone className="mr-2 h-4 w-4" />
          {triggerLabel || "Liên hệ"}
        </Button>
      </DialogTrigger>

      <DialogContent className="fixed inset-0 m-auto !p-0 h-fit w-fit rounded-3xl bg-neutral-50 shadow-xl transition-all duration-300 dark:bg-neutral-900 sm:max-w-xl">
        <DialogHeader className="p-6">
          <DialogTitle className="text-2xl font-bold text-neutral-800 dark:text-neutral-100">
            Liên hệ với Ms. Khánh
          </DialogTitle>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            Điền thông tin để được tư vấn nhanh qua số <strong>0909002207</strong>.
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 p-6 pt-0">
          <Input placeholder="Họ và tên" required className="h-12 rounded-lg border border-neutral-200 bg-neutral-100 px-4 text-neutral-800 shadow-sm transition-all duration-300 placeholder:text-neutral-400 focus:border-accent focus:bg-white focus:ring-1 focus:ring-accent dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200 dark:focus:border-accent dark:focus:bg-neutral-900" />
          <Input type="email" placeholder="Email" required className="h-12 rounded-lg border border-neutral-200 bg-neutral-100 px-4 text-neutral-800 shadow-sm transition-all duration-300 placeholder:text-neutral-400 focus:border-accent focus:bg-white focus:ring-1 focus:ring-accent dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200 dark:focus:border-accent dark:focus:bg-neutral-900" />
          <Input type="tel" placeholder="Số điện thoại" required className="h-12 rounded-lg border border-neutral-200 bg-neutral-100 px-4 text-neutral-800 shadow-sm transition-all duration-300 placeholder:text-neutral-400 focus:border-accent focus:bg-white focus:ring-1 focus:ring-accent dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200 dark:focus:border-accent dark:focus:bg-neutral-900" />
          <Textarea placeholder="Nội dung cần liên hệ..." rows={4} className="min-h-[100px] rounded-lg border border-neutral-200 bg-neutral-100 px-4 py-3 text-neutral-800 shadow-sm transition-all duration-300 placeholder:text-neutral-400 focus:border-accent focus:bg-white focus:ring-1 focus:ring-accent dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200 dark:focus:border-accent dark:focus:bg-neutral-900" />
          <Button type="submit" className="w-full rounded-xl bg-accent py-3 text-lg font-bold text-accent-foreground shadow-lg transition-all duration-300 hover:bg-accent/90">
            Gửi thông tin
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
