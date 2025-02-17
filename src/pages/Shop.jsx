import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useWishlist } from '../context/WishlistContext'
import { HiHeart, HiOutlineHeart } from 'react-icons/hi'

const products = [
  {
    id: 1,
    name: 'SEO Starter Package',
    price: 499,
    description: 'Complete SEO audit and optimization strategy',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 2,
    name: 'Social Media Bundle',
    price: 299,
    description: 'Monthly content creation and management',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 3,
    name: 'Content Marketing Pack',
    price: 399,
    description: 'Blog posts, articles, and content strategy',
    image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 4,
    name: 'Email Marketing Kit',
    price: 199,
    description: 'Email templates and campaign setup',
    image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 5,
    name: 'Analytics Dashboard',
    price: 299,
    description: 'Custom reporting and analytics setup',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 6,
    name: 'PPC Campaign Bundle',
    price: 599,
    description: 'Google Ads and social media advertising',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  }
]

export default function Shop() {
  const { addToCart } = useCart()
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist()

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative">
              <Link to={`/product/${product.id}`}>
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
              </Link>
              <button
                onClick={() => isInWishlist(product.id) 
                  ? removeFromWishlist(product.id)
                  : addToWishlist(product)
                }
                className="absolute top-2 right-2 p-2 rounded-full bg-white shadow-md text-red-500 hover:text-red-600"
              >
                {isInWishlist(product.id) 
                  ? <HiHeart size={20} />
                  : <HiOutlineHeart size={20} />
                }
              </button>
            </div>
            <div className="p-6">
              <Link to={`/product/${product.id}`}>
                <h3 className="text-xl font-bold mb-2 hover:text-blue-600">{product.name}</h3>
              </Link>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-blue-600">${product.price}</span>
                <button 
                  onClick={() => addToCart(product)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
