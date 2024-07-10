import React from 'react'

function About() {
  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
    <h1 className="text-3xl font-bold mb-4">About Us</h1>
    <p className="text-lg mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
    <p className="text-lg mb-6">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
    <div className="flex flex-wrap justify-center mb-6">
      <img src="https://via.placeholder.com/150" alt="Team Member 1" className="w-24 h-24 rounded-full mr-4 mb-4" />
      <img src="https://via.placeholder.com/150" alt="Team Member 2" className="w-24 h-24 rounded-full mr-4 mb-4" />
      <img src="https://via.placeholder.com/150" alt="Team Member 3" className="w-24 h-24 rounded-full mr-4 mb-4" />
    </div>
    <p className="text-lg mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
  </div>
  )
}

export default About
