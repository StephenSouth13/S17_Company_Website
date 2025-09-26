"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, TrendingUp, DollarSign, Calendar, MapPin, Users, Target } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"

const projectCategories = [
  "All Projects",
  "Real Estate",
  "Technology",
  "Manufacturing",
  "Energy",
  "Healthcare",
  "Finance",
]

const projectStatuses = ["All Status", "Active", "Completed", "Planning", "On Hold"]

const mockProjects = [
  {
    id: 1,
    title: "Smart City Development",
    category: "Real Estate",
    status: "Active",
    investment: "$50M",
    returns: "+24.5%",
    duration: "36 months",
    location: "Ho Chi Minh City",
    investors: 156,
    description: "Revolutionary smart city project integrating IoT, AI, and sustainable technologies",
    image: "/smart-city-development.jpg",
    progress: 65,
    riskLevel: "Medium",
    minInvestment: "$10,000",
  },
  {
    id: 2,
    title: "Green Energy Solutions",
    category: "Energy",
    status: "Active",
    investment: "$75M",
    returns: "+31.2%",
    duration: "48 months",
    location: "Da Nang",
    investors: 203,
    description: "Solar and wind energy infrastructure development across Vietnam",
    image: "/green-energy-solutions.jpg",
    progress: 42,
    riskLevel: "Low",
    minInvestment: "$25,000",
  },
  {
    id: 3,
    title: "FinTech Innovation Hub",
    category: "Technology",
    status: "Completed",
    investment: "$30M",
    returns: "+45.8%",
    duration: "24 months",
    location: "Hanoi",
    investors: 89,
    description: "Digital banking and payment solutions for Southeast Asian markets",
    image: "/fintech-innovation-hub.jpg",
    progress: 100,
    riskLevel: "High",
    minInvestment: "$5,000",
  },
  {
    id: 4,
    title: "Healthcare Technology",
    category: "Healthcare",
    status: "Planning",
    investment: "$40M",
    returns: "Projected +28%",
    duration: "30 months",
    location: "Can Tho",
    investors: 45,
    description: "AI-powered diagnostic and telemedicine platform development",
    image: "/healthcare-technology.jpg",
    progress: 15,
    riskLevel: "Medium",
    minInvestment: "$15,000",
  },
  {
    id: 5,
    title: "Manufacturing Automation",
    category: "Manufacturing",
    status: "Active",
    investment: "$60M",
    returns: "+19.7%",
    duration: "42 months",
    location: "Binh Duong",
    investors: 178,
    description: "Industry 4.0 automation solutions for Vietnamese manufacturing sector",
    image: "/manufacturing-automation.jpg",
    progress: 78,
    riskLevel: "Low",
    minInvestment: "$20,000",
  },
  {
    id: 6,
    title: "Digital Banking Platform",
    category: "Finance",
    status: "Completed",
    investment: "$25M",
    returns: "+52.3%",
    duration: "18 months",
    location: "Ho Chi Minh City",
    investors: 134,
    description: "Next-generation digital banking platform with blockchain integration",
    image: "/digital-banking-platform.jpg",
    progress: 100,
    riskLevel: "Medium",
    minInvestment: "$8,000",
  },
]

export function ProjectsShowcase() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All Projects")
  const [selectedStatus, setSelectedStatus] = useState("All Status")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  const { t, language } = useLanguage()

  const filteredProjects = mockProjects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All Projects" || project.category === selectedCategory
    const matchesStatus = selectedStatus === "All Status" || project.status === selectedStatus

    return matchesSearch && matchesCategory && matchesStatus
  })

  const getStatusColor = (status: string) => {
    const statusKey = status.toLowerCase()
    switch (statusKey) {
      case "active":
      case "đang hoạt động":
        return "bg-green-500/20 text-green-400 border-green-500/30"
      case "completed":
      case "hoàn thành":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30"
      case "planning":
      case "đang lên kế hoạch":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
      case "on hold":
      case "tạm dừng":
        return "bg-red-500/20 text-red-400 border-red-500/30"
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30"
    }
  }

  const getRiskColor = (risk: string) => {
    const riskKey = risk.toLowerCase()
    switch (riskKey) {
      case "low":
      case "thấp":
        return "text-green-400"
      case "medium":
      case "trung bình":
        return "text-yellow-400"
      case "high":
      case "cao":
        return "text-red-400"
      default:
        return "text-gray-400"
    }
  }

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header Section */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          {t.projects.title.split(" ")[0]} <span className="text-accent-blue">{t.projects.title.split(" ")[1]}</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">{t.projects.subtitle}</p>
      </motion.div>

      {/* Filters and Search */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-8"
      >
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between mb-6">
          <div className="flex flex-col sm:flex-row gap-4 flex-1">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder={t.projects.searchPlaceholder}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-dark-secondary border-gray-600 text-white placeholder-gray-400"
              />
            </div>

            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 bg-dark-secondary border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-accent-blue"
            >
              {projectCategories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>

            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="px-4 py-2 bg-dark-secondary border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-accent-blue"
            >
              {projectStatuses.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </div>

          <div className="flex gap-2">
            <Button
              variant={viewMode === "grid" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("grid")}
              className="bg-accent-blue hover:bg-accent-blue/80"
            >
              {t.common.grid}
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("list")}
              className="bg-accent-blue hover:bg-accent-blue/80"
            >
              {t.common.list}
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Projects Grid/List */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-4"}
      >
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="bg-dark-secondary border-gray-700 hover:border-accent-blue/50 transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className={getStatusColor(project.status)}>{project.status}</Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-black/50 text-white">
                    {project.category}
                  </Badge>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-white group-hover:text-accent-blue transition-colors">
                  {project.title}
                </CardTitle>
                <p className="text-gray-400 text-sm line-clamp-2">{project.description}</p>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Progress Bar */}
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-400">Progress</span>
                    <span className="text-white">{project.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-accent-blue h-2 rounded-full transition-all duration-300"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-accent-blue" />
                    <div>
                      <p className="text-gray-400">Investment</p>
                      <p className="text-white font-semibold">{project.investment}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-green-400" />
                    <div>
                      <p className="text-gray-400">Returns</p>
                      <p className="text-green-400 font-semibold">{project.returns}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-accent-blue" />
                    <div>
                      <p className="text-gray-400">Duration</p>
                      <p className="text-white">{project.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-accent-blue" />
                    <div>
                      <p className="text-gray-400">Location</p>
                      <p className="text-white">{project.location}</p>
                    </div>
                  </div>
                </div>

                {/* Additional Info */}
                <div className="flex justify-between items-center pt-4 border-t border-gray-700">
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-400">{project.investors} investors</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Target className="w-4 h-4 text-gray-400" />
                      <span className={getRiskColor(project.riskLevel)}>{project.riskLevel} Risk</span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-xs text-gray-400">Min. Investment</p>
                    <p className="text-white font-semibold">{project.minInvestment}</p>
                  </div>
                  <Link href={`/projects/${project.id}`}>
                    <Button className="bg-accent-blue hover:bg-accent-blue/80">View Details</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* No Results */}
      {filteredProjects.length === 0 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
          <p className="text-gray-400 text-lg">
            {language === "vi"
              ? "Không tìm thấy dự án phù hợp với tiêu chí của bạn."
              : "No projects found matching your criteria."}
          </p>
          <Button
            onClick={() => {
              setSearchTerm("")
              setSelectedCategory(t.projects.categories.all)
              setSelectedStatus(t.projects.statuses.all)
            }}
            className="mt-4 bg-accent-blue hover:bg-accent-blue/80"
          >
            {t.products.clearFilters}
          </Button>
        </motion.div>
      )}
    </div>
  )
}
