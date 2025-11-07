import { CommonInput } from '@/common/CommonInput'
import { CommonTextArea } from '@/common/CommonTextArea'
import Link from 'next/link'
import React from 'react'

const Contacts = () => {
  return (
    <>
      <div className="__mainContainer">
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            {/* Breadcrumb */}
            <div className="mb-8">
              <Link href='/' className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors group">
                <svg className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Home
              </Link>
              <span className="mx-2 text-gray-400">/</span>
              <span className="text-gray-700 font-medium">Enquiry Now</span>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Contact Information Card */}
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10 border border-blue-100 transform hover:shadow-2xl transition-all duration-300">
                  {/* Company Header */}
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">Jai Hind Equipment Pvt. Ltd.</h1>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mx-auto"></div>
                  </div>

                  {/* Contact Details */}
                  <div className="space-y-6">
                    {/* Contact Person */}
                    <div className="flex items-start space-x-4 group">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-200 transition-colors">
                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">Contact Person</h3>
                        <p className="text-gray-800 font-medium">Mr. Rahul Prajapat</p>
                      </div>
                    </div>

                    {/* Address */}
                    <div className="flex items-start space-x-4 group">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-200 transition-colors">
                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">Address</h3>
                        <p className="text-gray-800">
                          Kshipra, District Indore,<br />
                          Madhya Pradesh, India – 453771
                        </p>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start space-x-4 group">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-200 transition-colors">
                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">Call Us</h3>
                        <a href="tel:8305033403" className="text-blue-600 hover:text-blue-800 font-medium transition-colors inline-flex items-center">
                          8305033403
                          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </a>
                      </div>
                    </div>

                    {/* Website Links */}
                    <div className="space-y-4">
                      <div className="flex items-start space-x-4 group">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-200 transition-colors">
                          <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">Web Address</h3>
                          <a
                            href="https://jaihindequipment.co.in"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 transition-colors break-words inline-flex items-center"
                          >
                            https://jaihindequipment.co.in
                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* QR Code Section */}
                    <div className="pt-6 mt-6 border-t border-gray-200">
                      <div className="text-center">
                        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Quick Contact</h3>
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200 inline-block">
                          <div className="w-48 h-48 bg-white rounded-xl shadow-lg p-4 mx-auto mb-4 border border-blue-100">
                            <div className="w-full h-full bg-gradient-to-br from-blue-200 to-indigo-300 rounded-lg flex items-center justify-center">
                              <div className="text-center">
                                <div className="w-12 h-12 bg-white rounded-lg mx-auto mb-2 flex items-center justify-center shadow-sm">
                                  <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z" />
                                  </svg>
                                </div>
                                <span className="text-blue-800 font-medium text-sm">QR Code</span>
                              </div>
                            </div>
                          </div>
                          <p className="text-gray-600 text-sm font-medium">Scan for contact information</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form Card */}
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10 border border-blue-100 transform hover:shadow-2xl transition-all duration-300">
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">Get In Touch</h2>
                    <p className="text-gray-600">We'd love to hear from you. Send us your enquiry.</p>
                    <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mx-auto mt-4"></div>
                  </div>

                  <form className="space-y-6">
                    {/* Product/Service Selection */}
                    <div>
                      <label htmlFor="product-service" className="block text-sm font-semibold text-gray-700 mb-2">
                        Product / Service Looking for *
                      </label>
                      <select
                        id="product-service"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-white appearance-none"
                        required
                      >
                        <option value="">Select a product or service</option>
                        <option value="tractor-cultivators">Tractor Cultivators</option>
                        <option value="seed-drill-machine">Seed Drill Machine</option>
                        <option value="potato-planter">Potato Planter Machine</option>
                        <option value="land-leveler">Land Leveler</option>
                        <option value="rotavators">Agricultural Rotavators</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    {/* Name */}
                    <div>
                      <CommonInput
                        type="text"
                        label="Name"
                        starRed={true}
                        placeholder="Your full name"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <CommonInput
                        type="email"
                        label="Email"
                        starRed={true}
                        placeholder="your.email@example.com"
                      />
                    </div>

                    {/* Mobile */}
                    <div>
                      <CommonInput
                        type="tel"
                        label="Mobile"
                        starRed={true}
                        placeholder="Your mobile number"
                      />
                    </div>

                    {/* Enquiry Details */}
                    <div>
                      <CommonTextArea
                        label="Enquiry Details"
                        placeholder="Please describe your requirement in detail..."
                        rows={4}
                      />
                    </div>

                    {/* Buttons */}
                    <div className="flex space-x-4 pt-4">
                      <button
                        type="submit"
                        className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-6 rounded-xl hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl font-semibold"
                      >
                        Submit
                      </button>
                      <button
                        type="button"
                        className="flex-1 bg-gray-100 text-gray-700 py-3 px-6 rounded-xl hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all font-semibold border border-gray-300"
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
      </div>
    </>
  )
}

export default Contacts