"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Calendar, MapPin, Users, Target, FileText, BarChart3, Shield, Clock, Building } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface ProjectDetailProps {
  projectId: string
}

// Mock project data - in real app, this would come from API
const getProjectById = (id: string) => {
  const projects = {
    "1": {
      id: 1,
      title: "Smart City Development",
      category: "Real Estate",
      status: "Active",
      investment: "$50M",
      returns: "+24.5%",
      duration: "36 months",
      location: "Ho Chi Minh City",
      investors: 156,
      description:
        "Revolutionary smart city project integrating IoT, AI, and sustainable technologies to create the future of urban living.",
      longDescription:
        "This groundbreaking smart city development project represents the future of urban living in Vietnam. By integrating cutting-edge IoT sensors, artificial intelligence systems, and sustainable technologies, we are creating a model for modern cities across Southeast Asia. The project encompasses residential, commercial, and public spaces designed with environmental sustainability and technological innovation at their core.",
      images: ["/smart-city-development.jpg", "/smart-city-development-2.jpg", "/smart-city-development-3.jpg"],
      progress: 65,
      riskLevel: "Medium",
      minInvestment: "$10,000",
      expectedROI: "24-28%",
      projectManager: "Nguyen Van Duc",
      startDate: "2023-01-15",
      endDate: "2026-01-15",
      totalRaised: "$32.5M",
      targetAmount: "$50M",
      keyFeatures: [
        "Smart traffic management systems",
        "IoT-enabled infrastructure",
        "Renewable energy integration",
        "AI-powered city services",
        "Sustainable building materials",
        "Digital twin technology",
      ],
      financialProjections: [
        { year: 2024, revenue: "$5M", profit: "$1.2M" },
        { year: 2025, revenue: "$12M", profit: "$3.6M" },
        { year: 2026, revenue: "$18M", profit: "$6.2M" },
      ],
      riskFactors: [
        "Regulatory changes in smart city policies",
        "Technology adoption rates",
        "Construction delays due to weather",
        "Market competition from other developments",
      ],
      team: [
        { name: "Nguyen Van Duc", role: "Project Manager", experience: "15 years" },
        { name: "Tran Thi Mai", role: "Technical Lead", experience: "12 years" },
        { name: "Le Hoang Nam", role: "Financial Analyst", experience: "10 years" },
      ],
    },
  }

  return projects[id as keyof typeof projects] || null
}

export function ProjectDetail({ projectId }: ProjectDetailProps) {
  const [selectedImage, setSelectedImage] = useState(0)
  const project = getProjectById(projectId)

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl text-white mb-4">Project Not Found</h1>
        <Link href="/projects">
          <Button className="bg-accent-blue hover:bg-accent-blue/80">Back to Projects</Button>
        </Link>
      </div>
    )
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-500/20 text-green-400 border-green-500/30"
      case "Completed":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30"
      case "Planning":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
      case "On Hold":
        return "bg-red-500/20 text-red-400 border-red-500/30"
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30"
    }
  }

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "Low":
        return "text-green-400"
      case "Medium":
        return "text-yellow-400"
      case "High":
        return "text-red-400"
      default:
        return "text-gray-400"
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Back Button */}
      <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-6">
        <Link href="/projects">
          <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Button>
        </Link>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Header */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <Badge className={getStatusColor(project.status)}>{project.status}</Badge>
              <Badge variant="secondary" className="bg-dark-secondary text-gray-300">
                {project.category}
              </Badge>
              <div className="flex items-center gap-1">
                <Target className="w-4 h-4 text-gray-400" />
                <span className={getRiskColor(project.riskLevel)}>{project.riskLevel} Risk</span>
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{project.title}</h1>

            <p className="text-xl text-gray-300 leading-relaxed">{project.longDescription}</p>
          </motion.div>

          {/* Image Gallery */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <Card className="bg-dark-secondary border-gray-700">
              <CardContent className="p-0">
                <div className="relative">
                  <Image
                    src={project.images[selectedImage] || "/placeholder.svg"}
                    alt={project.title}
                    width={800}
                    height={400}
                    className="w-full h-64 md:h-96 object-cover rounded-t-lg"
                  />
                </div>
                <div className="p-4">
                  <div className="flex gap-2 overflow-x-auto">
                    {project.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                          selectedImage === index ? "border-accent-blue" : "border-gray-600 hover:border-gray-500"
                        }`}
                      >
                        <Image
                          src={image || "/placeholder.svg"}
                          alt={`${project.title} ${index + 1}`}
                          width={80}
                          height={80}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Detailed Information Tabs */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4 bg-dark-secondary">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="financials">Financials</TabsTrigger>
                <TabsTrigger value="team">Team</TabsTrigger>
                <TabsTrigger value="risks">Risks</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-4">
                <Card className="bg-dark-secondary border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      <FileText className="w-5 h-5 text-accent-blue" />
                      Key Features
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {project.keyFeatures.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-accent-blue rounded-full" />
                          <span className="text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="financials" className="space-y-4">
                <Card className="bg-dark-secondary border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      <BarChart3 className="w-5 h-5 text-accent-blue" />
                      Financial Projections
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {project.financialProjections.map((projection, index) => (
                        <div key={index} className="flex justify-between items-center p-3 bg-dark-primary rounded-lg">
                          <span className="text-white font-semibold">{projection.year}</span>
                          <div className="text-right">
                            <p className="text-gray-300">Revenue: {projection.revenue}</p>
                            <p className="text-green-400">Profit: {projection.profit}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="team" className="space-y-4">
                <Card className="bg-dark-secondary border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      <Users className="w-5 h-5 text-accent-blue" />
                      Project Team
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {project.team.map((member, index) => (
                        <div key={index} className="flex items-center gap-4 p-3 bg-dark-primary rounded-lg">
                          <div className="w-12 h-12 bg-accent-blue/20 rounded-full flex items-center justify-center">
                            <Users className="w-6 h-6 text-accent-blue" />
                          </div>
                          <div>
                            <h4 className="text-white font-semibold">{member.name}</h4>
                            <p className="text-gray-400">{member.role}</p>
                            <p className="text-sm text-gray-500">{member.experience} experience</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="risks" className="space-y-4">
                <Card className="bg-dark-secondary border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      <Shield className="w-5 h-5 text-accent-blue" />
                      Risk Factors
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {project.riskFactors.map((risk, index) => (
                        <div key={index} className="flex items-start gap-3 p-3 bg-dark-primary rounded-lg">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-300">{risk}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Investment Summary */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
            <Card className="bg-dark-secondary border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Investment Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Total Investment</span>
                    <span className="text-white font-semibold">{project.investment}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Expected Returns</span>
                    <span className="text-green-400 font-semibold">{project.expectedROI}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Min. Investment</span>
                    <span className="text-white font-semibold">{project.minInvestment}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Duration</span>
                    <span className="text-white">{project.duration}</span>
                  </div>
                </div>

                {/* Progress */}
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-400">Funding Progress</span>
                    <span className="text-white">{project.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-accent-blue h-2 rounded-full" style={{ width: `${project.progress}%` }} />
                  </div>
                  <div className="flex justify-between text-sm mt-2">
                    <span className="text-gray-400">Raised: {project.totalRaised}</span>
                    <span className="text-gray-400">Target: {project.targetAmount}</span>
                  </div>
                </div>

                <Button className="w-full bg-accent-blue hover:bg-accent-blue/80">Invest Now</Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Project Details */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
            <Card className="bg-dark-secondary border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Project Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-accent-blue" />
                    <div>
                      <p className="text-gray-400 text-sm">Location</p>
                      <p className="text-white">{project.location}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Calendar className="w-4 h-4 text-accent-blue" />
                    <div>
                      <p className="text-gray-400 text-sm">Start Date</p>
                      <p className="text-white">{new Date(project.startDate).toLocaleDateString()}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-accent-blue" />
                    <div>
                      <p className="text-gray-400 text-sm">End Date</p>
                      <p className="text-white">{new Date(project.endDate).toLocaleDateString()}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Building className="w-4 h-4 text-accent-blue" />
                    <div>
                      <p className="text-gray-400 text-sm">Project Manager</p>
                      <p className="text-white">{project.projectManager}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Users className="w-4 h-4 text-accent-blue" />
                    <div>
                      <p className="text-gray-400 text-sm">Total Investors</p>
                      <p className="text-white">{project.investors}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
