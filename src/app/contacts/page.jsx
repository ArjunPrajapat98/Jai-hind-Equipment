import { CommonInput } from '@/common/CommonInput'
import { CommonTextArea } from '@/common/CommonTextArea'
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
              <span className="text-gray-900 font-medium"> Enquiry Now</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-[#f1f1f1] rounded-lg shadow-md p-6">
                <h1 className="text-2xl font-semibold text-gray-500 mb-6">Jai Hind Equipment Pvt. Ltd.</h1>

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
                    <CommonInput
                      type="text"
                      label="Name"
                      starRed={true}
                      placeholder="Name"
                    />
                  </div>

                  <div>
                    <CommonInput
                      type="text"
                      label="Email"
                      starRed={true}
                      placeholder="Email"
                    />
                  </div>

                  <div>
                    <CommonInput
                      type="text"
                      label="Mobile"
                      starRed={true}
                      placeholder="Mobile"
                    />
                  </div>

                  <div>
                    <CommonTextArea
                      label="Enquiry Details"
                      placeholder="Your Requirement"
                    />
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