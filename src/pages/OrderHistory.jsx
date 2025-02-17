import React from 'react'
import { Link } from 'react-router-dom'

// In a real app, this would come from an API
const orders = [
  {
    id: 1,
    date: '2023-07-20',
    total: 798,
    status: 'Delivered',
    items: [
      {
        id: 1,
        name: 'SEO Starter Package',
        price: 499,
        quantity: 1
      },
      {
        id: 2,
        name: 'Social Media Bundle',
        price: 299,
        quantity: 1
      }
    ]
  }
]

export default function OrderHistory() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold mb-8">Order History</h1>
      
      {orders.length === 0 ? (
        <div className="text-center py-12">
          <h2 className="text-xl font-medium text-gray-900 mb-4">No orders yet</h2>
          <Link
            to="/shop"
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
          >
            Start Shopping
          </Link>
        </div>
      ) : (
        <div className="space-y-8">
          {orders.map(order => (
            <div key={order.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h3 className="text-lg font-medium">Order #{order.id}</h3>
                  <p className="text-gray-600">{order.date}</p>
                </div>
                <div>
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                    {order.status}
                  </span>
                </div>
              </div>
              
              <div className="border-t border-gray-200 mt-4 pt-4">
                {order.items.map(item => (
                  <div key={item.id} className="flex justify-between py-2">
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                    </div>
                    <p className="font-medium">${item.price * item.quantity}</p>
                  </div>
                ))}
              </div>
              
              <div className="border-t border-gray-200 mt-4 pt-4">
                <div className="flex justify-between">
                  <p className="font-bold">Total</p>
                  <p className="font-bold">${order.total}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
