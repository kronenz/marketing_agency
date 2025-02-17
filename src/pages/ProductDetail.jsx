import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useWishlist } from '../context/WishlistContext'
import { HiHeart, HiOutlineHeart } from 'react-icons/hi'

const products = [
  {
    id: 1,
    name: 'SEO Starter Package',
    price: 499,
    description: 'Complete SEO audit and optimization strategy',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    features: [
      'Comprehensive SEO Audit',
      'Keyword Research and Analysis',
      'On-Page SEO Optimization',
      'Technical SEO Implementation',
      'Monthly Performance Reports'
    ],
    details: 'Our SEO Starter Package is designed to help businesses improve their search engine visibility and drive organic traffic. This comprehensive package includes everything you need to start ranking higher in search results.'
  },
  // Add other product details similarly
]

export default function ProductDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addToCart } = useCart()
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist()
  
  const product = products.find(p => p.id === parseInt(id))
  
  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Product not found</h2>
          <button
            onClick={() => navigate('/shop')}
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
          >
            Return to Shop
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-96 object-cover rounded-lg"
          />
        </div>
        <div>
          <div className="flex justify-between items-start">
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <button
              onClick={() => isInWishlist(product.id) 
                ? removeFromWishlist(product.id)
                : addToWishlist(product)
              }
              className="text-red-500 hover:text-red-600"
            >
              {isInWishlist(product.id) 
                ? <HiHeart size={24} />
                : <HiOutlineHeart size={24} />
              }
            </button>
          </div>
          <p className="text-3xl font-bold text-blue-600 mt-4">${product.price}</p>
          <p className="mt-6 text-gray-600">{product.details}</p>
          
          <div className="mt-8">
            <h3 className="text-lg font-bold mb-4">Features</h3>
            <ul className="space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <span className="h-2 w-2 bg-blue-600 rounded-full mr-2"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          
          <button
            onClick={() => addToCart(product)}
            className="mt-8 w-full bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}
