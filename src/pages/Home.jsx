import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <div className="bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Grow Your Business With Digital Marketing
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              We help businesses reach their full potential through strategic digital marketing solutions.
            </p>
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition duration-300"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <h3 className="text-xl font-bold mb-4">Digital Marketing</h3>
            <p className="text-gray-600">
              Comprehensive digital marketing strategies to reach your target audience.
            </p>
          </div>
          <div className="text-center p-6">
            <h3 className="text-xl font-bold mb-4">SEO Optimization</h3>
            <p className="text-gray-600">
              Improve your search engine rankings and drive organic traffic.
            </p>
          </div>
          <div className="text-center p-6">
            <h3 className="text-xl font-bold mb-4">Social Media</h3>
            <p className="text-gray-600">
              Engage with your audience and build brand awareness on social platforms.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
