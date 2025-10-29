import Link from 'next/link'
import React from 'react'

const Contacts = () => {
  return (
    <>
      <div className="__mainContainer text-[15px]">
        <div className="min-h-screen bg-gray-50 py-8">
          <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-6">
              <Link href='/'><span className="text-[#0066ff]">Home</span></Link>
              <span className="mx-2 text-gray-400">&gt;</span>
              <span className="text-gray-900 font-medium">Contact Us</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h1 className="text-2xl font-bold text-gray-900 mb-6">Jai Hind Equipment Pvt. Ltd.</h1>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">Contact Person</h3>
                    <p className="text-gray-900">Mr. Rahul Prajapat</p>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">Address</h3>
                    <p className="text-gray-900">
                      Kshipra, District Indore,<br />
                      Madhya Pradesh, India – 453771
                    </p>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">Call Us</h3>
                    <a href="tel:8305033403" className="text-blue-600 hover:text-blue-800 transition-colors">
                      8305033403
                    </a>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">Web Address</h3>
                    <a
                      href=""
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 transition-colors break-words"
                    >
                      https://jaihindequipment.co.in
                    </a>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">Web Page</h3>
                    <div className="space-y-1">
                      <a
                        href="https://www.jaihindequipment.co.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-blue-600 hover:text-blue-800 transition-colors break-words"
                      >
                        https://www.jaihindequipment.co.in
                      </a>
                    </div>
                  </div>

                  <div className="pt-4">
                    <h3 className="text-sm font-semibold text-gray-500 uppercase mb-4">QR Code Help</h3>
                    <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-8 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-32 h-32 bg-gray-200 rounded mx-auto mb-2 flex items-center justify-center">
                          <span className="text-gray-500 text-sm">QR Code</span>
                        </div>
                        <p className="text-gray-600 text-sm">Scan for contact information</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Get In Touch</h2>

                <form className="space-y-6">
                  <div>
                    <label htmlFor="product-service" className="block text-sm font-medium text-gray-700 mb-2">
                      Product / Service Looking for *
                    </label>
                    <select
                      id="product-service"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    >
                      <option value="">Product / Service Looking for</option>
                      <option value="tractor-cultivators">Tractor Cultivators</option>
                      <option value="seed-drill-machine">Seed Drill Machine</option>
                      <option value="potato-planter">Potato Planter Machine</option>
                      <option value="land-leveler">Land Leveler</option>
                      <option value="rotavators">Agricultural Rotavators</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Your Name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-2">
                      Mobile *
                    </label>
                    <div className="flex">
                      {/* <div className="flex items-center px-3 border border-r-0 border-gray-300 rounded-l-md bg-gray-50">
                        <span className="text-gray-700">+91</span>
                      </div> */}
                      {/* <input
                        type="tel"
                        id="mobile"
                        placeholder="Mobile"
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-r-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                      /> */}
                      <input
                        type="text"
                        id="mobile"
                        placeholder="mobile"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="enquiry" className="block text-sm font-medium text-gray-700 mb-2">
                      Enquiry Details *
                    </label>
                    <textarea
                      id="enquiry"
                      rows={4}
                      placeholder="Your Requirement"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-vertical"
                      required
                    ></textarea>
                  </div>

                  <div className="flex space-x-4 pt-4">
                    <button
                      type="submit"
                      className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                    >
                      Submit
                    </button>
                    <button
                      type="button"
                      className="flex-1 bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contacts