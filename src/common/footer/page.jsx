import Link from 'next/link';
import React from 'react'
import { FaEnvelope, FaFacebookF, FaInstagram } from 'react-icons/fa';
import { FaYoutube } from "react-icons/fa6";
import { FaLocationDot, FaSquareXTwitter } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";

const Footer = () => {
  return (
    <>
      <footer>
        <div className='footer-container'>
          <div className='__mainContainer'>
            <div className="flex flex-wrap gap-7 max-w-[1140px] mx-auto">
              <div className='w-full sm:w-[calc(50%-14px)] md:w-[calc(33.33%-18.67px)] lg:w-[calc(33.33%-18.67px)] my-[0px] sm:my-[50px] md:my-[100px]'>
                <div className='__ttcmColum'>
                  <h5> Information </h5>
                  <ul>
                    <li className='__snpxD mb-4'>
                      <span className='pt-1.5 leading-normal'><FaLocationDot /></span>
                      <div> Kshipra District Indore <br /> Madhya Pradesh India, 453771 </div>
                    </li>

                    <li className='__snpxD mb-4 '>
                      <span className='pt-1.5 leading-normal'><IoIosCall /></span>
                      <div> <Link href='tel:+91 8305033403'> +91 8305033403 </Link> </div>
                    </li>

                    <li className='__snpxD mb-4 '>
                      <span className='pt-1.5 leading-normal'><FaEnvelope /></span>
                      <div> <Link href='mailto:rahulprajapat02525@gmail.com'> rahulprajapat02525@gmail.com </Link> </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className='w-full sm:w-[calc(50%-14px)] md:w-[calc(25.33%-18.67px)] lg:w-[calc(33.33%-18.67px)] my-[0px] sm:my-[50px] md:my-[100px]'>
                <div className='__ttcmColum'>
                  <h5>Extras</h5>
                  <ul>
                    <li className='__snpxD '>
                      <div><Link href="/"> Home </Link> </div>
                    </li>

                    <li className='__snpxD '>
                      <div><Link href="/"> Products </Link> </div>
                    </li>

                    <li className='__snpxD '>
                      <div><Link href="/"> Services </Link> </div>
                    </li>

                    <li className='__snpxD '>
                      <div><Link href="/about"> About Us </Link> </div>
                    </li>

                    <li className='__snpxD '>
                      <div><Link href="/contacts">Enquiry</Link> </div>
                    </li>

                    {/* <li className='__snpxD '>
                      <div><Link href='#'>Site Map</Link> </div>
                    </li>

                    <li className='__snpxD '>
                      <div><Link href='/contacts'>Contact Us</Link> </div>
                    </li> */}
                  </ul>
                </div>
              </div>

              {/* <div className='w-full md:w-[calc(41.33%-18.67px)] lg:w-[calc(33.33%-18.67px)] mb-[50px] md:mb-[100px]'>
                <div className='newletter-subscribe'>
                  <div className='newletter-container'>
                    <div className='nww_bx'>
                      <div className='newletter-title'>
                        <h2 className='tt-title'>Sign Up For Newsletter</h2>
                        <p className='newsletter-desc'>Wants to get latest updates! sign up for free.</p>
                      </div>
                      <div className='box-content newleter-content'>
                        <div id='form_subscribe'>
                          <form id='subscribe'>
                            <input type="text" placeholder='Your email address' name='subscribe_email' id='subscribe_email' autoComplete='off' />

                            <Link href='' className='btn'><span>Subscribe</span></Link>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}

              <div className='w-full md:w-[calc(41.33%-18.67px)] lg:w-[calc(33.33%-18.67px)]'>
                <iframe
                  style={{ width: "100%", height: "98%" }}
                  frameBorder={0}
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4449.40417502716!2d75.95230588400248!3d22.920465384902556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39631a6713c45b6f%3A0x19a19818080cd48b!2sPuwardadai%2C%20Madhya%20Pradesh%20453771!5e0!3m2!1sen!2sin!4v1761623939033!5m2!1sen!2sin"
                  // src="https://maps.google.com/maps?width=720&height=600&hl=en&q=361/14%20Tarana%2C%20District%20Ujjain%2C%20Madhya%20Pradesh%2C%20India%2C%20456665&t=&z=17&ie=UTF8&iwloc=B&output=embed"
                >
                  <a href="https://www.gps.ie/">Jai Hind Equipment</a>
                </iframe>
                {/* <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4449.40417502716!2d75.95230588400248!3d22.920465384902556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39631a6713c45b6f%3A0x19a19818080cd48b!2sPuwardadai%2C%20Madhya%20Pradesh%20453771!5e0!3m2!1sen!2sin!4v1761623939033!5m2!1sen!2sin"
                  width="600"
                  height="450"
                  style="border:0;"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe> */}
              </div>

            </div>
          </div>
        </div>

        <div className='footer-bottom'>
          <div className='__mainContainer'>
            <div className="flex items-center">
              <div className="w-1/2">
                <p> Powered By <Link href='https://www.synergyoversea.com/'> Jai Hind Equipment </Link> © 2025</p>
              </div>

              <div className="w-1/2">
                <div className='follow-us'>
                  <ul className='flex justify-end items-center'>
                    <li className='facebook'><Link href='#' target='_blank'><FaYoutube /></Link></li>
                    <li className='facebook'><Link href='#' target='_blank'><FaFacebookF /></Link></li>
                    <li className='twitter'><Link href='#' target='_blank'><FaSquareXTwitter /></Link></li>
                    <li className='instagram'><Link href='#' target='_blank'><FaInstagram /></Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer