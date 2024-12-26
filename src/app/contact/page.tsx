'use client'

import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission (e.g., send email, save in database)
    console.log(formData)
  }

  return (
    <section className="container mx-auto px-4 py-16  text-black">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-semibold text-yellow-500">Contact Me</h2>
        <p className="text-lg text-black">I would love to hear from you! Please reach out if you have any questions or would like to collaborate.</p>
      </div>

      <div className="flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-2xl  p-8 rounded-lg shadow-lg"
        >
          {/* Name Field */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-semibold text-black">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              id="name"
              required
              className="w-full p-3 mt-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-semibold text-black">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              id="email"
              required
              className="w-full p-3 mt-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          {/* Message Field */}
          <div className="mb-4">
            <label htmlFor="message" className="block text-lg font-semibold text-black">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              id="message"
              required
              rows={4}
              className="w-full p-3 mt-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-yellow-500 text-black font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>

      <div className="mt-12 text-center">
        <h3 className="text-2xl font-semibold text-yellow-500 mb-4">Other Ways to Contact Me</h3>
        <p className="text-lg text-black">Feel free to reach out through any of the following channels:</p>
        <ul className="mt-4 space-y-2">
          <li className="text-lg text-black">
            <strong>Email:</strong> <a href="mailto:tanzeelnaveed8@gmail.com" className="text-yellow-500 hover:text-yellow-400">tanzeelnaveed8@gmail.com</a>
          </li>
          <li className="text-lg text-black">
            <strong>Phone:</strong> <span className="text-yellow-500">+1 234 567 890</span>
          </li>
          <li className="text-lg text-black">
            <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/tanzeelnaveed8" className="text-yellow-500 hover:text-yellow-400">Tanzeel Naveed Khan</a>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Contact
