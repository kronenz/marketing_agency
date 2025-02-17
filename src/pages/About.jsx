import React from 'react'

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
        <p className="text-gray-600 mb-6">
          We are a team of passionate digital marketers dedicated to helping businesses grow their online presence.
          With years of experience in the industry, we understand what it takes to succeed in the digital world.
        </p>
        <p className="text-gray-600 mb-6">
          Our approach combines creativity with data-driven strategies to deliver measurable results for our clients.
          We stay up-to-date with the latest trends and technologies to ensure we provide cutting-edge solutions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-2">10+</h3>
            <p className="text-gray-600">Years Experience</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold mb-2">200+</h3>
            <p className="text-gray-600">Happy Clients</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold mb-2">500+</h3>
            <p className="text-gray-600">Projects Completed</p>
          </div>
        </div>
      </div>
    </div>
  )
}
