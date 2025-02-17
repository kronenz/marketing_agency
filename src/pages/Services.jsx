import React from 'react'

export default function Services() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-4">Digital Marketing</h3>
          <p className="text-gray-600 mb-4">
            Strategic digital marketing solutions to help your business grow online.
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Marketing Strategy</li>
            <li>Campaign Management</li>
            <li>Performance Analytics</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-4">SEO Optimization</h3>
          <p className="text-gray-600 mb-4">
            Improve your search engine rankings and drive organic traffic.
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Keyword Research</li>
            <li>On-page SEO</li>
            <li>Link Building</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-4">Social Media</h3>
          <p className="text-gray-600 mb-4">
            Build and engage with your audience on social platforms.
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Content Creation</li>
            <li>Community Management</li>
            <li>Paid Advertising</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
