"use client";
import Link from 'next/link';
import React from 'react';

function TableRow({ label, value }) {
  return (
    <div className="bg-gradient-to-r from-white to-blue-50 rounded-2xl p-6 transform hover:scale-[1.02] hover:shadow-lg transition-all duration-300 border border-blue-100">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center space-x-3 mb-3 sm:mb-0">
          <div className="w-3 h-3 theme-primary-bg rounded-full flex-shrink-0"></div>
          <span className="text-theme-sm font-semibold theme-text-muted min-w-[140px] theme-font-primary">
            {label}
          </span>
        </div>
        <span className="text-theme-lg font-bold theme-text-primary bg-white px-4 py-2 rounded-xl border border-blue-200 shadow-sm theme-font-primary">
          {value}
        </span>
      </div>
    </div>
  );
}

const About = () => {
  const companyDetails = [
    { label: "Nature of Business", value: "Manufacturer, Exporter & Supplier" },
    { label: "Number of Employees", value: "50+ Numbers of people" },
    { label: "Year of Establishment", value: "2025" },
    { label: "Market Covered", value: "Worldwide" },
    { label: "Name of Founder", value: "Mr. Rahul Prajapat" },
    { label: "GST No", value: "23ABCCV****G8K9" },
    { label: "Annual Turnover", value: "Rs. 0 Approx." },
    { label: "Legal Status of Firm", value: "Private Limited" }
  ];

  const products = [
    "Mild Steel 360 Degree Land Leveler",
    "Mild Steel Laser Land Leveler",
    "6 Tynes Mini Inter Cultivator",
    "5 Tynes Garden Tractor Seed Cum Fertilizer Drill",
    "5 Tynes Garden Tractor Seed Drill",
    "2 Row Automatic Potato Planter",
    "8 Inches Mini Tractor Reversible Plough",
    "5 Tynes Garden Tractor Cultivator",
    "Automatic Mulching Machine",
    "Bed Maker & Mulching Machine"
  ];

  return (
    <div className="__mainContainer">
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-8">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Enhanced Breadcrumb */}
          <div className="mb-12">
            <nav className="flex items-center space-x-2 text-theme-sm font-medium theme-font-primary">
              <Link href='/' className="inline-flex items-center theme-primary hover:text-blue-800 transition-colors group">
                <svg className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Home
              </Link>
              <span className="theme-text-light">/</span>
              <span className="theme-text-secondary font-semibold">About Us</span>
            </nav>
          </div>

          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full shadow-xl mb-6">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h1 className="text-theme-5xl font-bold theme-text-primary mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent philosopher-bold">
              About Us
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mx-auto mb-8"></div>
            <p className="text-theme-xl theme-text-muted max-w-3xl mx-auto theme-font-primary">
              Leading the agricultural equipment industry with innovation and reliability
            </p>
          </div>

          {/* Main Content Card */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-blue-100 transform hover:shadow-2xl transition-all duration-300 mb-12">
            <div className="p-8 lg:p-12">
              {/* Introduction Section */}
              <div className="mb-12">
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h2 className="text-theme-3xl font-bold theme-text-primary philosopher-bold">Our Journey</h2>
                </div>
                
                <div className="prose prose-lg max-w-none theme-text-secondary space-y-6 theme-font-primary">
                  <p className="text-theme-lg leading-relaxed">
                    Established as a Proprietorship firm in the year 2025, <span className="font-semibold theme-primary">Jai Hind Equipment Pvt. Ltd.</span> has emerged as a leading Manufacturer, Exporter, and Wholesaler of a comprehensive range of agricultural equipment and machinery.
                  </p>
                  
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200">
                    <h3 className="text-theme-xl font-semibold theme-text-primary mb-4 flex items-center philosopher-bold">
                      <svg className="w-5 h-5 theme-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Our Product Portfolio
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {products.map((product, index) => (
                        <div key={index} className="flex items-center space-x-3 group">
                          <div className="w-2 h-2 theme-primary-bg rounded-full group-hover:scale-150 transition-transform"></div>
                          <span className="theme-text-secondary group-hover:theme-text-primary transition-colors theme-font-primary">{product}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <p className="text-theme-lg leading-relaxed">
                    Situated in <span className="font-semibold theme-primary">Kshipra, District Indore, Madhya Pradesh</span>, we are committed to delivering high-quality products at competitive rates within promised timeframes. Under the visionary leadership of <span className="font-semibold theme-primary">Mr. Rahul Prajapat</span>, we have successfully built a substantial clientele across the nation.
                  </p>
                </div>
              </div>

              {/* Company Details Section */}
              <div>
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h2 className="text-theme-3xl font-bold theme-text-primary philosopher-bold">Company Details</h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {companyDetails.map((detail, index) => (
                    <TableRow 
                      key={index} 
                      label={detail.label} 
                      value={detail.value} 
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 text-white text-center transform hover:scale-105 transition-all duration-300 shadow-xl">
              <div className="text-theme-4xl font-bold mb-2 theme-font-heading">50+</div>
              <div className="text-blue-100 font-semibold theme-font-primary">Dedicated Employees</div>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl p-8 text-white text-center transform hover:scale-105 transition-all duration-300 shadow-xl">
              <div className="text-theme-4xl font-bold mb-2 theme-font-heading">2025</div>
              <div className="text-green-100 font-semibold theme-font-primary">Year Established</div>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-3xl p-8 text-white text-center transform hover:scale-105 transition-all duration-300 shadow-xl">
              <div className="text-theme-4xl font-bold mb-2 theme-font-heading">Worldwide</div>
              <div className="text-purple-100 font-semibold theme-font-primary">Market Coverage</div>
            </div>
          </div>

          {/* Vision Section */}
          <div className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-3xl p-8 lg:p-12 text-white text-center">
            <h3 className="text-theme-2xl font-bold mb-4 philosopher-bold">Our Vision</h3>
            <p className="text-theme-lg theme-text-light max-w-4xl mx-auto leading-relaxed theme-font-primary">
              To revolutionize the agricultural equipment industry through innovative solutions, 
              superior quality, and unwavering commitment to customer satisfaction, while 
              contributing to the growth of farmers and the agricultural sector worldwide.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;