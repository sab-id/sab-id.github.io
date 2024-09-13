"use client"

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRightIcon } from 'lucide-react'
import { useDarkMode } from './ui/darkMode'
import Image from 'next/image'



const projects = [
  {
    title: "Nexus",
    category: "Brand Identity",
    image: "/images/placeholder.svg?height=600&width=800",
    color: "bg-purple-600"
  },
  {
    title: "Quantum",
    category: "Web Design",
    image: "/images/placeholder.svg?height=600&width=800",
    color: "bg-blue-600"
  },
  {
    title: "Eco Flow",
    category: "Product Design",
    image: "/images/placeholder.svg?height=600&width=800",
    color: "bg-green-600"
  },
  {
    title: "Nova",
    category: "Brand Strategy",
    image: "/images/placeholder.svg?height=600&width=800",
    color: "bg-red-600"
  },
  {
    title: "Pulse",
    category: "UX Research",
    image: "/images/placeholder.svg?height=600&width=800",
    color: "bg-yellow-600"
  },
  {
    title: "Zenith",
    category: "App Development",
    image: "/images/placeholder.svg?height=600&width=800",
    color: "bg-indigo-600"
  }
]

export default function CaseStudyShowcase() {
  const { isDarkMode } = useDarkMode()

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDarkMode])

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-300">
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gray-100 dark:bg-black">
          <div className="w-full h-full opacity-30 dark:opacity-20" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '30px 30px'
          }} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white dark:to-black opacity-50" />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-white dark:from-black to-transparent" />
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white dark:from-black to-transparent" />
        <div className="relative z-10 text-center px-4">
          <motion.h1 
            className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Case Studies Showcase
            {" "}
            <motion.span
              className="text-[#224390] dark:text-[#d1d8e9] inline-block"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              SAB
            </motion.span>
          </motion.h1>
          <motion.p 
            className="text-xl mb-8 text-gray-600 dark:text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Explore our portfolio of innovative solutions and creative designs
          </motion.p>
          <motion.div
            className="flex justify-center space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a 
              href="#projects" 
              className="inline-flex items-center px-6 py-3 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600 transition duration-300"
            >
              View Projects
            </a>
            <a 
              href="https://www.sab.id/contact/"
              target="_blank"
              className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white rounded-full font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition duration-300"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </header>

      <main id="projects" className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group relative overflow-hidden rounded-lg shadow-lg bg-white dark:bg-gray-800"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Image 
                src={project.image} 
                alt={project.title} 
                className="w-full h-64 object-cover transition duration-300 group-hover:scale-110"
                width={800}
                height={600}
              />
              <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition duration-300">
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-white text-sm">{project.category}</p>
              </div>
              <div className={`absolute top-4 right-4 ${project.color} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                {project.category}
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      <footer className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white py-12 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold mb-2">Ready to start your project?</h2>
              <p className="text-gray-600 dark:text-gray-400">Let&apos;s create something amazing together.</p>
            </div>
            <a 
              href="#contact" 
              className="inline-flex items-center px-6 py-3 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600 transition duration-300"
            >
              Get in Touch
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}