import React from 'react'
import { Link } from 'react-router-dom'
import { HiCheckCircle } from 'react-icons/hi'

export default function CheckoutSuccess() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center">
        <HiCheckCircle className="mx-auto h-16 w-16 text-green-500" />
        <h2 className="mt-4 text-3xl font-bold text-gray-900">Payment Successful!</h2>
        <p className="mt-2 text-lg text-gray-600">
          Thank you for your purchase. We'll send you an email with your order details.
        </p>
        <div className="mt-8">
          <Link
            to="/shop"
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  )
}
