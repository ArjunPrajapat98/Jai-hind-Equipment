"use client";
import Link from 'next/link';
import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

function TableRow({ label, value }) {
  return (
    <tr className="bg-white">
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r border-gray-200 w-1/3">
        {label}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
        {value}
      </td>
    </tr>
  );
}

function ProductList({ items }) {
  return (
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index} className="flex items-center">
          <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
          <span className="text-gray-700">{item}</span>
        </li>
      ))}
    </ul>
  );
}

const About = () => {
  return (
    <div className="__mainContainer text-sm font-semibold">
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link href='/'><span className="text-[#0066ff]">Home</span></Link>
            <span className="mx-2 text-gray-400">&gt;</span>
            <span className="text-gray-900 font-medium">About Us</span>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">About Us</h1>

            <div className="prose max-w-none text-gray-700 mb-8">
              <p className="mb-4">
                Established as a Proprietorship firm in the year 2025, we Jai Hind Equipment Pvt. Ltd. are a leading Manufacturers, Exporters, Wholesaler of a wide range of Mild Steel 360 Degree Land Leveler, Mild Steel Laser Land Leveler, 6 Tynes Mini Inter Cultivator, 5 Tynes Garden Tractor Seed Cum Fertilizer Drill, 5 Tynes Garden Tractor Seed Drill, 2 Row Automatic Potato Planter, 8 Inches Mini Tractor Reversible Plough, 5 Tynes Garden Tractor Cultivator, Automatic Mulching Machine, Bed Maker & Mulching Machine etc.
              </p>
              <p className="mb-4">
                Situated in Kshipra, District Indore, Madhya Pradesh, We offer these products at reasonable rates and deliver these within the promised time-frame. Under the headship of Mr. Rahul Prajapat, we have gained a huge clientele across the nation.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Company Details</h2>
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <tbody className="divide-y divide-gray-200">
                    <TableRow label="Nature of Business" value="Manufacturer, Exporter & Supplier" />
                    <TableRow label="Number of Employees" value="50+ Numbers of people" />
                    <TableRow label="Year of Establishment" value="2025" />
                    <TableRow label="Market Covered" value="Worldwide" />
                    <TableRow label="Name of Founder" value="Mr. Rahul Prajapat" />
                    <TableRow label="GST No" value="23ABCCV****G8K9" />
                    <TableRow label="Annual Turnover" value="Rs. 0 Approx." />
                    <TableRow label="Legal Status of Firm" value="Private Limited" />
                  </tbody>
                </table>
              </div>
            </div>

            {/* <div className="border-t border-gray-200 my-8"></div> */}

          </div>
        </div>
      </div>
    </div>
  );
}

export default About