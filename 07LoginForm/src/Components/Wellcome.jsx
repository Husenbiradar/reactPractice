import React from 'react'

function Wellcome() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-blue-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md text-center">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">Welcome!</h1>
        <p className="text-gray-700 mb-6">We're glad to have you here. Let's get started on your journey.</p>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Get Started
        </button>
      </div>
    </div>
    </>
  )
}

export default Wellcome
