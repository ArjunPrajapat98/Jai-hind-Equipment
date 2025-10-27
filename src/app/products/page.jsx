import Link from 'next/link'
import React from 'react'
import { FiChevronRight } from "react-icons/fi";
import { FaRupeeSign } from "react-icons/fa";

const Products = () => {
  return (
    <>
      <div className='__productMain_bx'>
        <div className='__mainContainer'>
          <h1 className='text-2xl text-[#333] font-medium mb-3.5'>Tractor Cultivators</h1>

          <div className='flex items-center bg-[#0000000f] text-[#333] p-[5px_10px] mb-4'>
            <Link href="/" className='text-[12.5px] text-[#0006] font-normal hover:text-[#62a403]'>Home</Link>
            <span><FiChevronRight /></span>
            <Link href="/" className='text-[12.5px] text-[#0006] font-normal hover:text-[#62a403]'>Products</Link>
            <span><FiChevronRight /></span>
            <span className='text-[12.5px]'>Tractor Cultivators</span>
          </div>

          <p className='text-base mb-5 text-[#333]'>Leading Manufacturers, Exporters and Wholesaler of 5 Tynes Duck Foot Tractor Cultivator, 5 Tynes Garden Tractor Cultivator, 7 Tynes Duck Foot Tractor Cultivator, 9 Tynes Balram Hal Cultivator, C Model 9 Tynes Tractor Cultivator, D Model 9 Tynes Tractor Cultivator, Janta Model Tractor Cultivator, Mild Steel 5 Tynes Tractor Cultivator, Mild Steel Plough Cultivator and Sardarpur Model Tractor Cultivator from Indore.</p>

          <div className='flex flex-col gap-8'>
            <div className='bg-[#fcfcfc] border border-[#00000021] shadow-[0_0_10px_rgba(204,204,204,0.67)] py-3 px-1.5 flex flex-wrap'>
              <div className='w-[38%] px-2.5'>
                <img src="/assets/img/gallery4.png" alt="" className='w-full' />

                <div className='flex flex-wrap gap-2 mt-3'>
                  <img src="/assets/img/gallery4.png" alt="" className='w-1/4' />
                  <img src="/assets/img/gallery4.png" alt="" className='w-1/4' />
                  <img src="/assets/img/gallery4.png" alt="" className='w-1/4' />
                </div>
              </div>
              <div className='w-[62%] px-[15px]'>
                <Link href="/" className='text-2xl text-[#333] font-semibold'><h2>5 Tynes Duck Foot Tractor Cultivator</h2></Link>

                <div className='flex items-center gap-1 text-[#333]'>
                  <b className='text-[#e93536] text-lg flex items-center'><FaRupeeSign /> 37,400.00</b>
                  <span className='text-base'> / Piece</span>
                </div>

                <Link
                  href="/"
                  className='text-[15px] bg-[#bb8d3b] inline-block border border-[#ffffffb3] text-white font-semibold mt-2.5 py-2 px-5 rounded-[5px]'>
                  Get Best Price
                </Link>

                <div className='mt-4 proDtls'>
                  <table>
                    <tbody>
                      <tr>
                        <td className='__opa75'>Business Type</td>
                        <td>Manufacturer, Exporter, Supplier</td>
                      </tr>
                      <tr>
                        <td className='__opa75'>Material</td>
                        <td>Mild Steel</td>
                      </tr>
                      <tr>
                        <td className='__opa75'>Driven Type</td>
                        <td>Mechanical</td>
                      </tr>
                      <tr>
                        <td className='__opa75'>Color</td>
                        <td>Grey</td>
                      </tr>
                      <tr>
                        <td className='__opa75'>Automatic Grade</td>
                        <td>Automatic</td>
                      </tr>
                      <tr>
                        <td className='__opa75'>Application</td>
                        <td>Agriculture Use</td>
                      </tr>
                      <tr>
                        <td className='__opa75'>Weight</td>
                        <td>200-400kg</td>
                      </tr>
                      <tr>
                        <td className='__opa75'>Warranty</td>
                        <td>1 Year</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p>
                  <Link href="/" className='text-[#e93536] text-[13.8px] hover:text-[#333]'>Click to view more</Link>
                </p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Products