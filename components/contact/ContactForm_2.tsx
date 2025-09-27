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
          className="bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white shadow-lg w-full flex items-center justify-center"
        >
          <Phone className="h-4 w-4 mr-2" />
          {triggerLabel || "Liên hệ"}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700">
        <DialogHeader className="mb-4">
          <DialogTitle className="text-2xl font-bold text-foreground dark:text-white">
            Liên hệ với Ms. Khánh hoặc Mr. Vinh
          </DialogTitle>
          <p className="text-sm text-muted-foreground dark:text-gray-300">
            Điền thông tin để được tư vấn nhanh qua số <strong>0909002207(Ms. Khánh) & 0972641322( Mr. Vinh )</strong>
          </p>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input 
            placeholder="Họ và tên" 
            required 
            className="bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-400 dark:focus:ring-cyan-400 rounded-lg shadow-sm"
          />
          <Input 
            type="email" 
            placeholder="Email" 
            required 
            className="bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-400 dark:focus:ring-cyan-400 rounded-lg shadow-sm"
          />
          <Input 
            type="tel" 
            placeholder="Số điện thoại" 
            required 
            className="bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-400 dark:focus:ring-cyan-400 rounded-lg shadow-sm"
          />
          <Textarea 
            placeholder="Nội dung cần liên hệ..." 
            rows={4} 
            className="bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-400 dark:focus:ring-cyan-400 rounded-lg shadow-sm"
          />
          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-green-400 to-teal-400 hover:from-green-500 hover:to-teal-500 text-white shadow-lg rounded-xl"
          >
            Gửi thông tin
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

