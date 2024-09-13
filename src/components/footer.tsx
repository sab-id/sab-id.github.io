'use client'

import { useDarkMode } from './ui/darkMode'
import Image from 'next/image'
import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  const { isDarkMode } = useDarkMode()
  
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-300 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/">
            { isDarkMode ? (
                <Image src="/images/company/logo-sab-white.svg" alt="SAB Logo" width={80} height={80} />
            ) : (
                <Image src="/images/company/logo-sab.svg" alt="SAB Logo" width={80} height={80} />
            )}
            </Link>
            <p className="text-sm">
              SAB is a leading technology company providing innovative solutions for businesses worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition duration-300">Home</a></li>
              <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition duration-300">Products</a></li>
              <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition duration-300">About Us</a></li>
              <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition duration-300">Web Development</a></li>
              <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition duration-300">Mobile Apps</a></li>
              <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition duration-300">Cloud Solutions</a></li>
              <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition duration-300">Consulting</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <a href="mailto:info@sab.com" className="hover:text-blue-600 dark:hover:text-blue-400 transition duration-300">info@sab.com</a>
              </li>
              <li>123 Tech Street, Digital City</li>
              <li>Phone: (123) 456-7890</li>
            </ul>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex justify-between items-center">
            <p className="text-sm">&copy; 2023 SAB. All rights reserved.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}