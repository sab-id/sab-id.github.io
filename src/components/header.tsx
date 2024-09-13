'use client'

import { useDarkMode } from './ui/darkMode'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Sun, Moon } from 'lucide-react'
import { useEffect } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { isDarkMode, toggleDarkMode } = useDarkMode()

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDarkMode])

  return (
    <header className="bg-white dark:bg-gray-800 shadow-lg transition-colors duration-300">
      <div className="container max-w-7xl mx-auto px-4 lg:px-8 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
            { isDarkMode ? (
                <Image src="/images/company/logo-sab-white.svg" alt="SAB Logo" width={80} height={80} />
            ) : (
                <Image src="/images/company/logo-sab.svg" alt="SAB Logo" width={80} height={80} />
            )}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300">Home</a>
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300">Project List</a>
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300">About</a>
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300">Contact</a>
          </nav>

          <div className="flex items-center space-x-4">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition duration-300"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 focus:outline-none text-gray-600 dark:text-gray-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 space-y-3">
            <a href="#" className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300">Home</a>
            <a href="#" className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300">Project List</a>
            <a href="#" className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300">About</a>
            <a href="#" className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300">Contact</a>
          </nav>
        )}
      </div>
    </header>
  )
}