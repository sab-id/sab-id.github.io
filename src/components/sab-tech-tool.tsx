'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

export function SabTechTool() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <header className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a href="#" className="flex items-center">
                <Image src="/placeholder.svg" alt="SAB Tech Tool Logo" width={40} height={40} className="h-8 w-auto sm:h-10" />
                <span className="ml-2 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">SAB Tech Tool</span>
              </a>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <button
                type="button"
                className="bg-black rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <span className="sr-only">Open menu</span>
                {isMenuOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
              </button>
            </div>
            <nav className="hidden md:flex space-x-10">
              <a href="#" className="text-base font-medium text-gray-300 hover:text-white">About</a>
              <a href="#" className="text-base font-medium text-gray-300 hover:text-white">Team</a>
              <a href="#" className="text-base font-medium text-gray-300 hover:text-white">Projects</a>
            </nav>
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <a href="#" className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="py-12">
          <h2 className="text-3xl font-extrabold text-white mb-6">Project List</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-gray-900 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 ease-in-out">
                <div className="p-6">
                  <h3 className="text-lg font-medium text-white mb-2">Project {item}</h3>
                  <p className="text-gray-400">Short description of the project goes here.</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="border-t border-white opacity-10 my-12"></div>

        <section className="py-12">
          <h2 className="text-3xl font-extrabold text-white mb-6">About SAB</h2>
          <p className="text-gray-300 max-w-3xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et nisi lectus. Sed ut erat non libero
            malesuada sagittis. Suspendisse potenti. Proin id elit non lacus cursus dapibus. Sed euismod, urna vel
            tincidunt ultricies, nisi nulla ultricies nunc, vitae aliquam nunc nunc vel nunc. Sed euismod, urna vel
            tincidunt ultricies, nisi nulla ultricies nunc, vitae aliquam nunc nunc vel nunc.
          </p>
        </section>

        <div className="border-t border-white opacity-10 my-12"></div>

        <section className="py-12">
          <h2 className="text-3xl font-extrabold text-white mb-6">Project List</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-gray-900 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 ease-in-out">
                <div className="p-6">
                  <h3 className="text-lg font-medium text-white mb-2">Project {item}</h3>
                  <p className="text-gray-400">Short description of the project goes here.</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="border-t border-white opacity-10 my-12"></div>

        <section className="py-12">
          <h2 className="text-3xl font-extrabold text-white mb-6">Our Team</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="bg-gray-900 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 ease-in-out">
                <Image src="/placeholder.svg" alt={`Team Member ${item}`} width={300} height={200} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-lg font-medium text-white mb-2">Team Member {item}</h3>
                  <p className="text-gray-400">Position</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 mt-12">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-400">&copy; 2023 SAB Tech Tool. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}