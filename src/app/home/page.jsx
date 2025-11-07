"use client";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "animate.css";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { FaArrowLeft, FaArrowRight, FaLongArrowAltRight, FaQuoteLeft, FaRegCircle, FaRegStar, FaSearch, FaShoppingBag, FaStar, FaWhatsapp } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { renderToStaticMarkup } from "react-dom/server";
import React, { useState } from 'react'
import Link from "next/link";
import { CommonTabs } from "@/common/commonTabs";
import { Tab, TabPanel } from "react-tabs";
import { YouTubeEmbed } from "@/common/youTube_embed";
import { constant } from "@/constant";

var $ = require("jquery");
if (typeof window !== "undefined") {
    window.$ = window.jQuery = require("jquery");
}

const Home = () => {

    const [activeTab, setActiveTab] = useState(1);
    const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
        ssr: false,
    });

    const bannerSlides = {
        0: {
            items: 1,
            margin: 0,
        },
    };


    const categorySlides = {
        0: {
            items: 1,
            margin: 0,
            center: true,
        },
        660: {
            items: 2,
            margin: 0,
            center: true,
        },
        868: {
            items: 3,
            margin: 0,
            center: true,
        },
        1024: {
            items: 3,
            margin: 0,
            center: true,
        },
        1300: {
            items: 5,
            margin: 0,
        },
    };


    const youTubeSlides = {
        0: {
            items: 1,
            margin: 20,
            center: true,
        },
        660: {
            items: 2,
            margin: 20,
            center: true,
        },
        868: {
            items: 2,
            margin: 20,
            center: true,
        },
        1024: {
            items: 2,
            margin: 20,
            center: true,
        },
        1300: {
            items: 2,
            margin: 20,
        },
    };

    const testimonialSlides = {
        0: {
            items: 1,
            margin: 0,
        },
        768: {
            items: 1,
            margin: 0,
        },
        1024: {
            items: 1,
            margin: 0,
        },
    };

    const topics = ['Images', 'Videos'];

    const freshCategory = [
        {
            name: 'Rotavator',
            image: 'assets/rotaviter/r-01.png',
            count: 6,
        },
        {
            name: 'Cultivator',
            image: 'assets/cultivator/c-04.png',
            count: 6,
        },
        {
            name: 'Plough (Plow/Hal)',
            image: '/assets/plumb/p-02.jpeg',
            count: 6,
        },
        {
            name: 'Seed Fertilizer Drill',
            image: '/assets/seed/s-03.webp',
            count: 6,
        },
        {
            name: 'Disc Harrow',
            image: '/assets/disc/d-02.jpeg',
            count: 6,
        },
        {
            name: 'Boom Sprayer',
            image: '/assets/sprey/s-01.jpeg',
            count: 6,
        },
        {
            name: 'Land Leveler',
            image: '/assets/land/l-02.webp',
            count: 5,
        },
    ];

    return (
        <>
            <main>
                <section id='home'>
                    <OwlCarousel responsive={bannerSlides} className="bannerSlider" center loop autoplay nav={true} dots={false} animateOut="fadeOut" animateIn="fadeIn"
                        navText={[
                            renderToStaticMarkup(<AiOutlineLeft />),
                            renderToStaticMarkup(<AiOutlineRight />),
                        ]}>
                        {/* <div className="owlItems">
                            <img className="min-h-[600px] h-[600px] object-cover object-center" src="/assets/hero/h-06.jpg" alt="banner3" />
                        </div> */}
                        <div className="owlItems">
                            <img className="min-h-[600px] h-[600px] object-cover object-center" src="/assets/hero/h-07.jpg" alt="banner3" />
                        </div>
                        <div className="owlItems">
                            <img className="min-h-[600px] h-[600px] object-cover object-center" src="/assets/img/equipment/premium_photo-1664300969063-b274f727fcad.avif" alt="banner3" />
                        </div>
                        <div className="owlItems">
                            <img className="min-h-[600px] h-[600px] object-cover object-center" src="/assets/hero/h-01.png" alt="banner3" />
                        </div>
                        <div className="owlItems">
                            <img className="min-h-[600px] h-[600px] object-cover object-center" src="/assets/img/equipment/premium_photo-1661818380392-eff80caa5d91.avif" alt="banner3" />
                        </div>
                        <div className="owlItems">
                            <img className="min-h-[600px] h-[600px] object-cover object-center" src="/assets/hero/h-03.png" alt="banner3" />
                        </div>
                        {/* <div className="owlItems">
                            <img className="min-h-[600px] h-[600px] object-cover object-center" src="/assets/img/equipment/Screenshot from 2025-10-30 09-26-30.png" alt="banner3" />
                        </div> */}
                        {/* <div className="owlItems">
                            <img className="min-h-[600px] h-[600px] object-cover object-center" src="/assets/img/banners/banner_machine1.webp" alt="banner1" />
                        </div> */}
                        {/* <div className="owlItems">
                            <img className="min-h-[600px] h-[600px] object-cover object-center" src="/assets/img/banners/banner_machine2.webp" alt="banner2" />
                        </div> */}
                        {/* <div className="owlItems">
                            <img className="min-h-[600px] h-[600px] object-cover object-center" src="/assets/img/banners/banner_machine3.webp" alt="banner3" />
                        </div> */}
                        {/* <div className="owlItems">
                            <img className="min-h-[600px] h-[600px] object-cover object-center" src="/assets/cultivator/c-011.webp" alt="banner3" />
                        </div>
                        <div className="owlItems">
                            <img className="min-h-[600px] h-[600px] object-cover object-center" src="/assets/hero/h-02.png" alt="banner3" />
                        </div> */}
                    </OwlCarousel>
                </section>

                <section className="">
                    <div className="__ut_bgImg_bx">
                        {/* <div className='__ut_bg_overlay'></div> */}
                        <div className="__mainContainer relative">
                            <div className="p-[10px_20px_40px] sm:p-[10px_40px_40px] md:p-[10px_100px_40px] lg:p-[10px_100px_40px]">
                                <div className="quality_top_title text-center">
                                    <h2 className="text-[30px] lg:text-[45px] mb-[.5rem] philosopher-bold ">Watch Product Videos</h2>
                                </div>
                            </div>

                            {/* <div className="flex flex-wrap gap-5">
                                {youTubeUrls?.map((item, index) => {
                                    return (
                                        <div key={index} className="w-full md:w-[calc(33.33%-14px)]">
                                            <YouTubeEmbed videoId={item.videoId} />
                                        </div>
                                    )
                                })}
                            </div> */}

                            <OwlCarousel responsive={youTubeSlides} className="youTubeSlider"
                                loop
                                dots={true}
                                nav={false}
                                autoplay>
                                {constant.youTubeUrls?.map((item, index) => {
                                    return (
                                        <div className="owlItems">
                                            <div key={index} className="w-full ">
                                                <YouTubeEmbed videoId={item.videoId} />
                                            </div>
                                        </div>
                                    )
                                })}
                            </OwlCarousel>

                            <div className="mt-5">
                                <div className="text-center">
                                    <Link href='/video' className=" inline-block cursor-pointer">
                                        <button className='custom_btn'>
                                            View All Videos
                                            <span className="__lgArrow_icon "> <FaLongArrowAltRight /></span>
                                        </button>
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section id='ourProduct' className="produce_category_section">
                    <div className="__mainContainer pt-30">
                        <CommonTabs
                            classNameDyn="__commonTabBx __frsh_cateTabx"
                            buttons={
                                <>
                                    <div className="prdc_ctg_content">
                                        <div className="flex text-[#7cc000] items-center justify-center lg:justify-start">
                                            <span className="text-[8px] p-[0rem_0.1rem]"><FaRegCircle /></span>
                                            <span className="text-[8px] p-[0rem_0.1rem]"><FaRegCircle /></span>
                                            <span className="text-[8px] p-[0rem_0.1rem]"><FaRegCircle /></span>
                                            {/* <span className="text-[12px] font-medium">FRESH FROM OUR FARM</span> */}
                                        </div>
                                        <h2 className="text-[26px] lg:text-[40px] my-[.5rem] philosopher-bold leading-normal lg:leading-14 text-center lg:text-left">Products Categories</h2>

                                        <div className="prdc_ctg_desc py-2">
                                            <p>Explore all-in-one farming solutions - Rotavators, Seed Drills, Harrows, Weeders and Sprayers — built to make farming smarter and easier.</p>
                                        </div>
                                    </div>

                                    {freshCategory.map((topic) => (
                                        <Tab key={topic.name}>
                                            <button className="">
                                                <div className="flex justify-center items-center">
                                                    <div className="prdc_ctg_icon ">
                                                        <img src={topic.image} alt={topic.name} className="" />
                                                    </div>
                                                    <div className="prdc_ctg_icon_title">
                                                        <h5>{topic.name}</h5>
                                                    </div>
                                                </div>

                                                <div className="prdc_ctg_icon_num">
                                                    <span>{topic.count}</span>
                                                </div>
                                            </button>
                                        </Tab>
                                    ))}
                                </>
                            }>
                            <div className="__frsh_cateTab_content">
                                <TabPanel>
                                    <div className="prdc_ctg_product_wrap">
                                        <div className="prdc_ctg_inner_product bg-white">
                                            <div className="flex flex-wrap gap-x-6">
                                                <div className="w-full sm:w-[calc(50%-12px)]">
                                                    <div className="prdc_ctg_product_content">
                                                        <div className="prdc_ctg_product_img">
                                                            <img src="assets/rotaviter/r-08.webp" />
                                                        </div>

                                                        <div className="prdc_ctg_product_text">
                                                            <div className="prdc_ctg_product_badge mb-2">
                                                                <span> 3 - 4 feet widths </span>
                                                            </div>
                                                            <div className="rating_wrap ">
                                                                <span className="shop_review_text">15 - 30 HP tractors</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title">
                                                                    <Link href="#">Mini Rotavator</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1"> View Price (₹)</span>
                                                                    {/* <del>$65.00</del> */}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-full sm:w-[calc(50%-12px)]">
                                                    <div className="prdc_ctg_product_content">
                                                        <div className="prdc_ctg_product_img">
                                                            <img src="assets/rotaviter/r-05.png" />
                                                        </div>

                                                        <div className="prdc_ctg_product_text">
                                                            <div className="prdc_ctg_product_badge mb-2">
                                                                <span> 5 - 6 feet widths </span>
                                                            </div>
                                                            <div className="rating_wrap ">
                                                                <span className="shop_review_text">35 - 50 HP tractors</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title">
                                                                    <Link href="#">Standard Rotavator</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1"> View Price (₹)</span>
                                                                    {/* <del>$65.00</del> */}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-full sm:w-[calc(50%-12px)]">
                                                    <div className="prdc_ctg_product_content">
                                                        <div className="prdc_ctg_product_img">
                                                            <img src="assets/rotaviter/r-02.jpg" />
                                                        </div>

                                                        <div className="prdc_ctg_product_text">
                                                            <div className="prdc_ctg_product_badge mb-2">
                                                                <span> 6 - 8 ft widths </span>
                                                            </div>
                                                            <div className="rating_wrap ">
                                                                <span className="shop_review_text">70-75 HP tractors</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title">
                                                                    <Link href="#">Heavy Rotavator</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1"> View Price (₹)</span>
                                                                    {/* <del>$65.00</del> */}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-full sm:w-[calc(50%-12px)]">
                                                    <div className="prdc_ctg_product_content">
                                                        <div className="prdc_ctg_product_img">
                                                            <img src="assets/rotaviter/r-09.png" />
                                                        </div>

                                                        <div className="prdc_ctg_product_text">
                                                            <div className="prdc_ctg_product_badge mb-2">
                                                                <span> 7 - 8 feet widths </span>
                                                            </div>
                                                            <div className="rating_wrap ">
                                                                <span className="shop_review_text">45-60 HP tractors</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title">
                                                                    <Link href="#">Seeder Rotavator</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1"> View Price (₹)</span>
                                                                    {/* <del>$65.00</del> */}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-full sm:w-[calc(50%-12px)]">
                                                    <div className="prdc_ctg_product_content">
                                                        <div className="prdc_ctg_product_img">
                                                            <img src="assets/rotaviter/r-11.png" />
                                                        </div>

                                                        <div className="prdc_ctg_product_text">
                                                            <div className="prdc_ctg_product_badge mb-2">
                                                                <span> 6 - 9 feet widths </span>
                                                            </div>
                                                            <div className="rating_wrap ">
                                                                <span className="shop_review_text">70 - 120 HP tractors</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title">
                                                                    <Link href="#">Harrow Rotavator</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1"> View Price (₹)</span>
                                                                    {/* <del>$65.00</del> */}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-full sm:w-[calc(50%-12px)]">
                                                    <div className="prdc_ctg_product_content">
                                                        <div className="prdc_ctg_product_img">
                                                            <img src="assets/rotaviter/r-06.jpeg" />
                                                        </div>

                                                        <div className="prdc_ctg_product_text">
                                                            <div className="prdc_ctg_product_badge mb-2">
                                                                <span> 6 - 8 feet widths </span>
                                                            </div>
                                                            <div className="rating_wrap ">
                                                                <span className="shop_review_text">45 - 65 HP tractors</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title">
                                                                    <Link href="#">Reversible Rotavator</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1"> View Price (₹)</span>
                                                                    {/* <del>$65.00</del> */}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>

                                <TabPanel>
                                    <div className="prdc_ctg_product_wrap">
                                        <div className="prdc_ctg_inner_product bg-white">
                                            <div className="flex flex-wrap gap-x-6">
                                                <div className="w-full sm:w-[calc(50%-12px)]">
                                                    <div className="prdc_ctg_product_content">
                                                        <div className="prdc_ctg_product_img">
                                                            <img src="assets/cultivator/c-02.jpeg" />
                                                        </div>

                                                        <div className="prdc_ctg_product_text">
                                                            <div className="prdc_ctg_product_badge mb-2">
                                                                <span> Breaking up tough soil </span>
                                                            </div>
                                                            <div className="rating_wrap ">
                                                                <span className="shop_review_text">30 - 60 HP tractors</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title">
                                                                    <Link href="#">Rigid Tyne Cultivator</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1"> View Price (₹)</span>
                                                                    {/* <del>$65.00</del> */}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-full sm:w-[calc(50%-12px)]">
                                                    <div className="prdc_ctg_product_content">
                                                        <div className="prdc_ctg_product_img">
                                                            <img src="assets/cultivator/c-05.jpg" />
                                                        </div>

                                                        <div className="prdc_ctg_product_text">
                                                            <div className="prdc_ctg_product_badge mb-2">
                                                                <span> Uneven fields, Stony soils </span>
                                                            </div>
                                                            <div className="rating_wrap ">
                                                                <span className="shop_review_text">40 - 75 HP tractors</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title">
                                                                    <Link href="#">Spring Cultivator</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1"> View Price (₹)</span>
                                                                    {/* <del>$65.00</del> */}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-full sm:w-[calc(50%-12px)]">
                                                    <div className="prdc_ctg_product_content">
                                                        <div className="prdc_ctg_product_img">
                                                            <img src="assets/cultivator/c-04.png" />
                                                        </div>

                                                        <div className="prdc_ctg_product_text">
                                                            <div className="prdc_ctg_product_badge mb-2">
                                                                <span> Breaking up tough soil </span>
                                                            </div>
                                                            <div className="rating_wrap ">
                                                                <span className="shop_review_text">30 - 90 HP tractors</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title">
                                                                    <Link href="#">Trailed Cultivator</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1"> View Price (₹)</span>
                                                                    {/* <del>$65.00</del> */}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-full sm:w-[calc(50%-12px)]">
                                                    <div className="prdc_ctg_product_content">
                                                        <div className="prdc_ctg_product_img">
                                                            <img src="assets/cultivator/c-09.avif" />
                                                        </div>

                                                        <div className="prdc_ctg_product_text">
                                                            <div className="prdc_ctg_product_badge mb-2">
                                                                <span> Breaking up tough soil </span>
                                                            </div>
                                                            <div className="rating_wrap ">
                                                                <span className="shop_review_text">30 - 60 HP tractors</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title">
                                                                    <Link href="#">Mounted Cultivator</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1"> View Price (₹)</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-full sm:w-[calc(50%-12px)]">
                                                    <div className="prdc_ctg_product_content">
                                                        <div className="prdc_ctg_product_img">
                                                            <img src="assets/cultivator/c-06.webp" />
                                                        </div>

                                                        <div className="prdc_ctg_product_text">
                                                            <div className="prdc_ctg_product_badge mb-2">
                                                                <span> Shallow tillage, light soils </span>
                                                            </div>
                                                            <div className="rating_wrap ">
                                                                <span className="shop_review_text">Deep tillage models</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title">
                                                                    <Link href="#">Sweep Cultivator</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1"> View Price (₹)</span>
                                                                    {/* <del>$65.00</del> */}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-full sm:w-[calc(50%-12px)]">
                                                    <div className="prdc_ctg_product_content">
                                                        <div className="prdc_ctg_product_img">
                                                            <img src="assets/cultivator/c-07.webp" />
                                                        </div>

                                                        <div className="prdc_ctg_product_text">
                                                            <div className="prdc_ctg_product_badge mb-2">
                                                                <span> Hard, compacted soils </span>
                                                            </div>
                                                            <div className="rating_wrap ">
                                                                <span className="shop_review_text"> Higher HP </span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title">
                                                                    <Link href="#">Disc Cultivator</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1"> View Price (₹)</span>
                                                                    {/* <del>$65.00</del> */}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>

                                <TabPanel>
                                    <div className="prdc_ctg_product_wrap">
                                        <div className="prdc_ctg_inner_product bg-white">
                                            <div className="flex flex-wrap gap-x-6">
                                                <div className="w-full sm:w-[calc(50%-12px)]">
                                                    <div className="prdc_ctg_product_content">
                                                        <div className="prdc_ctg_product_img">
                                                            <img src="assets/plumb/p-04.jpg" />
                                                        </div>

                                                        <div className="prdc_ctg_product_text">
                                                            <div className="prdc_ctg_product_badge mb-2">
                                                                <span> Hard / Medium soil </span>
                                                            </div>
                                                            <div className="rating_wrap ">
                                                                <span className="shop_review_text">25 - 60 HP tractors</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title">
                                                                    <Link href="#">Mould Board Plough</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1"> View Price (₹)</span>
                                                                    {/* <del>$65.00</del> */}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-full sm:w-[calc(50%-12px)]">
                                                    <div className="prdc_ctg_product_content">
                                                        <div className="prdc_ctg_product_img">
                                                            <img src="assets/plumb/p-03.jpg" />
                                                        </div>

                                                        <div className="prdc_ctg_product_text">
                                                            <div className="prdc_ctg_product_badge mb-2">
                                                                <span> Black cotton / Rocky </span>
                                                            </div>
                                                            <div className="rating_wrap ">
                                                                <span className="shop_review_text">75 - 60 HP tractors</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title">
                                                                    <Link href="#">Disc Plough</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1"> View Price (₹)</span>
                                                                    {/* <del>$65.00</del> */}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-full sm:w-[calc(50%-12px)]">
                                                    <div className="prdc_ctg_product_content">
                                                        <div className="prdc_ctg_product_img">
                                                            <img src="assets/plumb/p-05.jpeg" />
                                                        </div>

                                                        <div className="prdc_ctg_product_text">
                                                            <div className="prdc_ctg_product_badge mb-2">
                                                                <span> All soils </span>
                                                            </div>
                                                            <div className="rating_wrap ">
                                                                <span className="shop_review_text">40 - 90 HP tractors</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title">
                                                                    <Link href="#">Reversible Plough</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1"> View Price (₹)</span>
                                                                    {/* <del>$65.00</del> */}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-full sm:w-[calc(50%-12px)]">
                                                    <div className="prdc_ctg_product_content">
                                                        <div className="prdc_ctg_product_img">
                                                            <img src="assets/plumb/p-06.jpeg" />
                                                        </div>

                                                        <div className="prdc_ctg_product_text">
                                                            <div className="prdc_ctg_product_badge mb-2">
                                                                <span> Dry & compact soil </span>
                                                            </div>
                                                            <div className="rating_wrap ">
                                                                <span className="shop_review_text">45 - 90 HP tractors</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title">
                                                                    <Link href="#">Chisel / Subsoiler</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1"> View Price (₹)</span>
                                                                    {/* <del>$65.00</del> */}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-full sm:w-[calc(50%-12px)]">
                                                    <div className="prdc_ctg_product_content">
                                                        <div className="prdc_ctg_product_img">
                                                            <img src="assets/plumb/p-07.jpeg" />
                                                        </div>

                                                        <div className="prdc_ctg_product_text">
                                                            <div className="prdc_ctg_product_badge mb-2">
                                                                <span> Loose to medium soil </span>
                                                            </div>
                                                            <div className="rating_wrap ">
                                                                <span className="shop_review_text">25 - 60 HP tractors</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title">
                                                                    <Link href="#">Rotary / Power Plough</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1"> View Price (₹)</span>
                                                                    {/* <del>$65.00</del> */}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-full sm:w-[calc(50%-12px)]">
                                                    <div className="prdc_ctg_product_content">
                                                        <div className="prdc_ctg_product_img">
                                                            <img src="assets/plumb/p-08.png" />
                                                        </div>

                                                        <div className="prdc_ctg_product_text">
                                                            <div className="prdc_ctg_product_badge mb-2">
                                                                <span> Soft soil </span>
                                                            </div>
                                                            <div className="rating_wrap ">
                                                                <span className="shop_review_text">No tractor</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title">
                                                                    <Link href="#">Bullock Plough</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1"> View Price (₹)</span>
                                                                    {/* <del>$65.00</del> */}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>

                                <TabPanel>
                                    <div className="prdc_ctg_product_wrap">
                                        <div className="prdc_ctg_inner_product bg-white">
                                            <div className="flex flex-wrap gap-x-6">
                                                <div className="w-full sm:w-[calc(50%-12px)]">
                                                    <div className="prdc_ctg_product_content">
                                                        <div className="prdc_ctg_product_img">
                                                            <img src="assets/seed/s-01.jpeg" />
                                                        </div>

                                                        <div className="prdc_ctg_product_text">
                                                            <div className="prdc_ctg_product_badge mb-2">
                                                                <span> Row Spacing : 20 - 25 cm </span>
                                                            </div>
                                                            <div className="rating_wrap ">
                                                                <span className="shop_review_text">25 - 55 HP tractors</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title">
                                                                    <Link href="#">Seed Cum Fertilizer</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1"> View Price (₹)</span>
                                                                    {/* <del>$65.00</del> */}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-full sm:w-[calc(50%-12px)]">
                                                    <div className="prdc_ctg_product_content">
                                                        <div className="prdc_ctg_product_img">
                                                            <img src="assets/seed/s-04.jpeg" />
                                                        </div>

                                                        <div className="prdc_ctg_product_text">
                                                            <div className="prdc_ctg_product_badge mb-2">
                                                                <span> Row Spacing : 20 - 22 cm </span>
                                                            </div>
                                                            <div className="rating_wrap ">
                                                                <span className="shop_review_text">35 - 65 HP tractors</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title">
                                                                    <Link href="#">Zero Tillage Drill</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1"> View Price (₹)</span>
                                                                    {/* <del>$65.00</del> */}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-full sm:w-[calc(50%-12px)]">
                                                    <div className="prdc_ctg_product_content">
                                                        <div className="prdc_ctg_product_img">
                                                            <img src="assets/seed/s-6.jpeg" />
                                                        </div>

                                                        <div className="prdc_ctg_product_text">
                                                            <div className="prdc_ctg_product_badge mb-2">
                                                                <span> Row Spacing : Adjustable </span>
                                                            </div>
                                                            <div className="rating_wrap ">
                                                                <span className="shop_review_text">45 - 75 HP tractors</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title">
                                                                    <Link href="#">Super Seeder Combo</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1"> View Price (₹)</span>
                                                                    {/* <del>$65.00</del> */}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-full sm:w-[calc(50%-12px)]">
                                                    <div className="prdc_ctg_product_content">
                                                        <div className="prdc_ctg_product_img">
                                                            <img src="assets/seed/s-05.jpeg" />
                                                        </div>

                                                        <div className="prdc_ctg_product_text">
                                                            <div className="prdc_ctg_product_badge mb-2">
                                                                <span> Row Spacing : 20 - 22 cm  </span>
                                                            </div>
                                                            <div className="rating_wrap ">
                                                                <span className="shop_review_text">50 - 75 HP tractors</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title">
                                                                    <Link href="#">Happy Seeder</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1"> View Price (₹)</span>
                                                                    {/* <del>$65.00</del> */}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-full sm:w-[calc(50%-12px)]">
                                                    <div className="prdc_ctg_product_content">
                                                        <div className="prdc_ctg_product_img">
                                                            <img src="assets/seed/s-07.jpeg" />
                                                        </div>

                                                        <div className="prdc_ctg_product_text">
                                                            <div className="prdc_ctg_product_badge mb-2">
                                                                <span> Row Spacing : 20 - 25 cm </span>
                                                            </div>
                                                            <div className="rating_wrap ">
                                                                <span className="shop_review_text">70 - 120 HP tractors</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title">
                                                                    <Link href="#">Disc Seed Cum Drill</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1"> View Price (₹)</span>
                                                                    {/* <del>$65.00</del> */}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-full sm:w-[calc(50%-12px)]">
                                                    <div className="prdc_ctg_product_content">
                                                        <div className="prdc_ctg_product_img">
                                                            <img src="assets/seed/s-08.jpeg" />
                                                        </div>

                                                        <div className="prdc_ctg_product_text">
                                                            <div className="prdc_ctg_product_badge mb-2">
                                                                <span> Row Spacing : 20 - 22 cm </span>
                                                            </div>
                                                            <div className="rating_wrap ">
                                                                <span className="shop_review_text">45 - 65 HP tractors</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title">
                                                                    <Link href="#">Multi-Crop Seed Cum</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1"> View Price (₹)</span>
                                                                    {/* <del>$65.00</del> */}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>

                                <TabPanel>
                                    <div className="prdc_ctg_product_wrap">
                                        <div className="prdc_ctg_inner_product bg-white">
                                            <div className="flex flex-wrap gap-x-6">
                                                <div className="w-full sm:w-[calc(50%-12px)]">
                                                    <div className="prdc_ctg_product_content">
                                                        <div className="prdc_ctg_product_img">
                                                            <img src="assets/disc/d-03.jpeg" />
                                                        </div>

                                                        <div className="prdc_ctg_product_text">
                                                            <div className="prdc_ctg_product_badge mb-2">
                                                                <span> No. of Discs 12-36 </span>
                                                            </div>
                                                            <div className="rating_wrap ">
                                                                <span className="shop_review_text">25 - 75 HP tractors</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title">
                                                                    <Link href="#">Trailed Disc Harrow</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1"> View Price (₹)</span>
                                                                    {/* <del>$65.00</del> */}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-full sm:w-[calc(50%-12px)]">
                                                    <div className="prdc_ctg_product_content">
                                                        <div className="prdc_ctg_product_img">
                                                            <img src="assets/disc/d-06.webp" />
                                                        </div>

                                                        <div className="prdc_ctg_product_text">
                                                            <div className="prdc_ctg_product_badge mb-2">
                                                                <span> No. of Discs 12-24 </span>
                                                            </div>
                                                            <div className="rating_wrap ">
                                                                <span className="shop_review_text">30 - 60 HP tractors</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title">
                                                                    <Link href="#">Mounted (3-Point Linkage) Disc</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1"> View Price (₹)</span>
                                                                    {/* <del>$65.00</del> */}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-full sm:w-[calc(50%-12px)]">
                                                    <div className="prdc_ctg_product_content">
                                                        <div className="prdc_ctg_product_img">
                                                            <img src="assets/disc/d-07.jpeg" />
                                                        </div>

                                                        <div className="prdc_ctg_product_text">
                                                            <div className="prdc_ctg_product_badge mb-2">
                                                                <span> No. of Discs 12-28 </span>
                                                            </div>
                                                            <div className="rating_wrap ">
                                                                <span className="shop_review_text">40 - 110 HP tractors</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title">
                                                                    <Link href="#">Offset Disc Harrow</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1"> View Price (₹)</span>
                                                                    {/* <del>$65.00</del> */}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-full sm:w-[calc(50%-12px)]">
                                                    <div className="prdc_ctg_product_content">
                                                        <div className="prdc_ctg_product_img">
                                                            <img src="assets/disc/d-08.png" />
                                                        </div>

                                                        <div className="prdc_ctg_product_text">
                                                            <div className="prdc_ctg_product_badge mb-2">
                                                                <span> No. of Discs 16-36 </span>
                                                            </div>
                                                            <div className="rating_wrap ">
                                                                <span className="shop_review_text">45 - 120 HP tractors</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title">
                                                                    <Link href="#">Tandem Disc Harrow</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1"> View Price (₹)</span>
                                                                    {/* <del>$65.00</del> */}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-full sm:w-[calc(50%-12px)]">
                                                    <div className="prdc_ctg_product_content">
                                                        <div className="prdc_ctg_product_img">
                                                            <img src="assets/disc/d-09.png" />
                                                        </div>

                                                        <div className="prdc_ctg_product_text">
                                                            <div className="prdc_ctg_product_badge mb-2">
                                                                <span> No. of Discs 16-40 </span>
                                                            </div>
                                                            <div className="rating_wrap ">
                                                                <span className="shop_review_text">70 - 150 HP tractors</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title">
                                                                    <Link href="#">Trailed Disc Harrow</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1"> View Price (₹)</span>
                                                                    {/* <del>$65.00</del> */}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-full sm:w-[calc(50%-12px)]">
                                                    <div className="prdc_ctg_product_content">
                                                        <div className="prdc_ctg_product_img">
                                                            <img src="assets/disc/d-10.jpeg" />
                                                        </div>

                                                        <div className="prdc_ctg_product_text">
                                                            <div className="prdc_ctg_product_badge mb-2">
                                                                <span> No. of Discs 24-48 </span>
                                                            </div>
                                                            <div className="rating_wrap ">
                                                                <span className="shop_review_text">80 - 150+ HP tractors</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title">
                                                                    <Link href="#">Hydraulic Foldable</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1"> View Price (₹)</span>
                                                                    {/* <del>$65.00</del> */}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>

                                <TabPanel>
                                    <div className="prdc_ctg_product_wrap">
                                        <div className="prdc_ctg_inner_product bg-white">
                                            <div className="flex flex-wrap gap-x-6">
                                                <div className="w-full sm:w-[calc(50%-12px)]">
                                                    <div className="prdc_ctg_product_content">
                                                        <div className="prdc_ctg_product_img">
                                                            <img src="assets/sprey/s-01.jpeg" />
                                                        </div>

                                                        <div className="prdc_ctg_product_text">
                                                            <div className="prdc_ctg_product_badge mb-2">
                                                                <span> Capacity 200 - 1200 Ltr </span>
                                                            </div>
                                                            <div className="rating_wrap ">
                                                                <span className="shop_review_text">Boom Length 10 - 20 Meters</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title">
                                                                    <Link href="#">Mounted Sprayer</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1"> View Price (₹)</span>
                                                                    {/* <del>$65.00</del> */}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-full sm:w-[calc(50%-12px)]">
                                                    <div className="prdc_ctg_product_content">
                                                        <div className="prdc_ctg_product_img">
                                                            <img src="assets/sprey/s-03.webp" />
                                                        </div>

                                                        <div className="prdc_ctg_product_text">
                                                            <div className="prdc_ctg_product_badge mb-2">
                                                                <span> Capacity 500 - 3000 Ltr </span>
                                                            </div>
                                                            <div className="rating_wrap ">
                                                                <span className="shop_review_text">Boom Length 12 - 24 Meters</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title">
                                                                    <Link href="#">Trailed Sprayer</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1"> View Price (₹)</span>
                                                                    {/* <del>$65.00</del> */}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-full sm:w-[calc(50%-12px)]">
                                                    <div className="prdc_ctg_product_content">
                                                        <div className="prdc_ctg_product_img">
                                                            <img src="assets/sprey/s-04.webp" />
                                                        </div>

                                                        <div className="prdc_ctg_product_text">
                                                            <div className="prdc_ctg_product_badge mb-2">
                                                                <span> Capacity 500 - 2000 Ltr </span>
                                                            </div>
                                                            <div className="rating_wrap ">
                                                                <span className="shop_review_text">Boom Length 12 - 30 Meters</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title">
                                                                    <Link href="#">Self Propelled Sprayer</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1"> View Price (₹)</span>
                                                                    {/* <del>$65.00</del> */}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-full sm:w-[calc(50%-12px)]">
                                                    <div className="prdc_ctg_product_content">
                                                        <div className="prdc_ctg_product_img">
                                                            <img src="assets/sprey/s-06.jpeg" />
                                                        </div>

                                                        <div className="prdc_ctg_product_text">
                                                            <div className="prdc_ctg_product_badge mb-2">
                                                                <span> Capacity 200 - 1200 Ltr </span>
                                                            </div>
                                                            <div className="rating_wrap ">
                                                                <span className="shop_review_text">Boom Length 10 - 20 Meters</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title">
                                                                    <Link href="#">Tractor Sprayer</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1"> View Price (₹)</span>
                                                                    {/* <del>$65.00</del> */}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-full sm:w-[calc(50%-12px)]">
                                                    <div className="prdc_ctg_product_content">
                                                        <div className="prdc_ctg_product_img">
                                                            <img src="assets/sprey/s-08.png" />
                                                        </div>

                                                        <div className="prdc_ctg_product_text">
                                                            <div className="prdc_ctg_product_badge mb-2">
                                                                <span> Capacity 200 - 1200 Ltr </span>
                                                            </div>
                                                            <div className="rating_wrap ">
                                                                <span className="shop_review_text">Boom Length 10 - 20 Meters</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title">
                                                                    <Link href="#">Mounted Boom</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1"> View Price (₹)</span>
                                                                    {/* <del>$65.00</del> */}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-full sm:w-[calc(50%-12px)]">
                                                    <div className="prdc_ctg_product_content">
                                                        <div className="prdc_ctg_product_img">
                                                            <img src="assets/sprey/s-09.jpeg" />
                                                        </div>

                                                        <div className="prdc_ctg_product_text">
                                                            <div className="prdc_ctg_product_badge mb-2">
                                                                <span> Capacity 200 - 1200 Ltr </span>
                                                            </div>
                                                            <div className="rating_wrap ">
                                                                <span className="shop_review_text">Boom Length 10 - 20 Meters</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title">
                                                                    <Link href="#">Propelled Boom</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1"> View Price (₹)</span>
                                                                    {/* <del>$65.00</del> */}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>

                                <TabPanel>
                                    <div className="prdc_ctg_product_wrap">
                                        <div className="prdc_ctg_inner_product bg-white">
                                            <div className="flex flex-wrap gap-x-6">
                                                <div className="w-full sm:w-[calc(50%-12px)]">
                                                    <div className="prdc_ctg_product_content">
                                                        <div className="prdc_ctg_product_img">
                                                            <img src="assets/land/l-01.webp" />
                                                        </div>

                                                        <div className="prdc_ctg_product_text">
                                                            <div className="prdc_ctg_product_badge mb-2">
                                                                <span> 5 to 8 Feet </span>
                                                            </div>
                                                            <div className="rating_wrap ">
                                                                <span className="shop_review_text">25 - 60 HP tractors</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title">
                                                                    <Link href="#">Reversible Land Leveler</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1"> View Price (₹)</span>
                                                                    {/* <del>$65.00</del> */}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-full sm:w-[calc(50%-12px)]">
                                                    <div className="prdc_ctg_product_content">
                                                        <div className="prdc_ctg_product_img">
                                                            <img src="assets/land/l-03.jpeg" />
                                                        </div>

                                                        <div className="prdc_ctg_product_text">
                                                            <div className="prdc_ctg_product_badge mb-2">
                                                                <span> 6 to 9 Feet </span>
                                                            </div>
                                                            <div className="rating_wrap ">
                                                                <span className="shop_review_text">35 - 75 HP tractors</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title">
                                                                    <Link href="#">Heavy Duty Box Land Leveler</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1"> View Price (₹)</span>
                                                                    {/* <del>$65.00</del> */}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-full sm:w-[calc(50%-12px)]">
                                                    <div className="prdc_ctg_product_content">
                                                        <div className="prdc_ctg_product_img">
                                                            <img src="assets/land/l-04.png" />
                                                        </div>

                                                        <div className="prdc_ctg_product_text">
                                                            <div className="prdc_ctg_product_badge mb-2">
                                                                <span> 6 to 12 Feet </span>
                                                            </div>
                                                            <div className="rating_wrap ">
                                                                <span className="shop_review_text">50 - 90 HP tractors</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title">
                                                                    <Link href="#">Laser Guided Land Leveler</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1"> View Price (₹)</span>
                                                                    {/* <del>$65.00</del> */}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-full sm:w-[calc(50%-12px)]">
                                                    <div className="prdc_ctg_product_content">
                                                        <div className="prdc_ctg_product_img">
                                                            <img src="assets/land/l-05.png" />
                                                        </div>

                                                        <div className="prdc_ctg_product_text">
                                                            <div className="prdc_ctg_product_badge mb-2">
                                                                <span> 6 to 10 Feet </span>
                                                            </div>
                                                            <div className="rating_wrap ">
                                                                <span className="shop_review_text">40 - 90 HP tractors</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title">
                                                                    <Link href="#">Hydraulic Land Leveler</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1"> View Price (₹)</span>
                                                                    {/* <del>$65.00</del> */}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-full sm:w-[calc(50%-12px)]">
                                                    <div className="prdc_ctg_product_content">
                                                        <div className="prdc_ctg_product_img">
                                                            <img src="assets/land/l-06.jpg" />
                                                        </div>

                                                        <div className="prdc_ctg_product_text">
                                                            <div className="prdc_ctg_product_badge mb-2">
                                                                <span> 5 to 9 Feet </span>
                                                            </div>
                                                            <div className="rating_wrap ">
                                                                <span className="shop_review_text">30 - 80 HP tractors</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title">
                                                                    <Link href="#">Scraper Land Leveler</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1"> View Price (₹)</span>
                                                                    {/* <del>$65.00</del> */}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>
                            </div>
                        </CommonTabs>
                    </div>
                </section>

                <section id='ourService' className="p-[0px_0px_100px]">
                    <div className="__mainContainer pt-30">
                        <div className="pb-3.5">
                            <div className="flex text-[#7cc000] items-center justify-center lg:justify-start">
                                <span className="text-[8px] p-[0rem_0.1rem]"><FaRegCircle /></span>
                                <span className="text-[8px] p-[0rem_0.1rem]"><FaRegCircle /></span>
                                <span className="text-[8px] p-[0rem_0.1rem]"><FaRegCircle /></span>
                                {/* <span className="text-[12px] font-medium">FRESH FROM OUR FARM</span> */}
                            </div>
                            <h2 className="text-[26px] lg:text-[40px] font-bold mb-[.5rem] philosopher-bold text-center lg:text-left">Our Services</h2>
                        </div>
                        <CommonTabs
                            classNameDyn="__commonTabBx __productFilts"
                            buttons={
                                <>
                                    {topics.map((topic) => (
                                        <Tab key={topic}>
                                            <button>{topic.charAt(0).toUpperCase() + topic.slice(1)}</button>
                                        </Tab>
                                    ))}
                                </>
                            }>
                            <TabPanel>
                                <div className="flex flex-wrap gap-6">
                                    <div className="w-[100%] sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-18px)] xl:w-[calc(25%-18px)]">
                                        <div className="product_layout_1">
                                            <div className="product_layout_content">
                                                <div className="product_image_wrap">
                                                    <Link href='#' className="product_image">
                                                        <img src="/assets/rotaviter/r-08.webp" className="pic-1" alt="" />
                                                        <img src="/assets/rotaviter/r-08.webp" className="pic-2" alt="" />
                                                    </Link>
                                                    <ul className="product_badge_group">
                                                        <li><span className="product_badge badge_meats">3 - 4 feet widths</span></li>
                                                        <li><span className="product_badge badge_discount">15-30 HP</span></li>
                                                    </ul>
                                                    {/* <ul className="product_action_btns">
                                                        <li><Link href='#'><FaSearch /></Link></li>
                                                        <li><Link href='#'><FaShoppingBag /></Link></li>
                                                    </ul> */}
                                                </div>

                                                <div className="rating_wrap ">
                                                    <ul className="rating_star ul_li">
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        {/* <li className=""><FaRegStar /></li> */}
                                                    </ul>
                                                    <span className="shop_review_text">( 5.0 )</span>
                                                </div>

                                                <div className="product_content">
                                                    <h3 className="product_title">
                                                        <Link href="#">Rotavator</Link>
                                                    </h3>
                                                    {/* <div className="product_price">
                                                        <span className="sale_price pe-1"> Contact Dealer (₹)</span>
                                                    </div> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[100%] sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-18px)] xl:w-[calc(25%-18px)]">
                                        <div className="product_layout_1">
                                            <div className="product_layout_content">
                                                <div className="product_image_wrap">
                                                    <Link href='#' className="product_image">
                                                        <img src="/assets/cultivator/c-04.png" className="pic-1" alt="" />
                                                        <img src="/assets/cultivator/c-04.png" className="pic-2" alt="" />
                                                    </Link>
                                                    <ul className="product_badge_group">
                                                        <li><span className="product_badge badge_meats">Breaking up tough soil</span></li>
                                                        <li><span className="product_badge badge_discount">30-90 HP</span></li>
                                                    </ul>
                                                    {/* <ul className="product_action_btns">
                                                        <li><Link href='#'><FaSearch /></Link></li>
                                                        <li><Link href='#'><FaShoppingBag /></Link></li>
                                                    </ul> */}
                                                </div>

                                                <div className="rating_wrap ">
                                                    <ul className="rating_star ul_li">
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        {/* <li className=""><FaRegStar /></li> */}
                                                    </ul>
                                                    <span className="shop_review_text">( 5.0 )</span>
                                                </div>

                                                <div className="product_content">
                                                    <h3 className="product_title">
                                                        <Link href="#">Cultivator</Link>
                                                    </h3>
                                                    {/* <div className="product_price">
                                                        <span className="sale_price pe-1"> Contact Dealer (₹)</span>
                                                    </div> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[100%] sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-18px)] xl:w-[calc(25%-18px)]">
                                        <div className="product_layout_1">
                                            <div className="product_layout_content">
                                                <div className="product_image_wrap">
                                                    <Link href='#' className="product_image">
                                                        <img src="/assets/plumb/p-05.jpeg" className="pic-1" alt="" />
                                                        <img src="/assets/plumb/p-05.jpeg" className="pic-2" alt="" />
                                                    </Link>
                                                    <ul className="product_badge_group">
                                                        <li><span className="product_badge badge_meats"> All type soil</span></li>
                                                        <li><span className="product_badge badge_discount">40-90 HP</span></li>
                                                    </ul>
                                                    {/* <ul className="product_action_btns">
                                                        <li><Link href='#'><FaSearch /></Link></li>
                                                        <li><Link href='#'><FaShoppingBag /></Link></li>
                                                    </ul> */}
                                                </div>

                                                <div className="rating_wrap ">
                                                    <ul className="rating_star ul_li">
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        {/* <li className=""><FaRegStar /></li> */}
                                                    </ul>
                                                    <span className="shop_review_text">( 5.0 )</span>
                                                </div>

                                                <div className="product_content">
                                                    <h3 className="product_title">
                                                        <Link href="#">Plough</Link>
                                                    </h3>
                                                    {/* <div className="product_price">
                                                        <span className="sale_price pe-1"> Contact Dealer (₹)</span>
                                                    </div> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[100%] sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-18px)] xl:w-[calc(25%-18px)]">
                                        <div className="product_layout_1">
                                            <div className="product_layout_content">
                                                <div className="product_image_wrap">
                                                    <Link href='#' className="product_image">
                                                        <img src="/assets/seed/s-01.jpeg" className="pic-1" alt="" />
                                                        <img src="/assets/seed/s-01.jpeg" className="pic-2" alt="" />
                                                    </Link>
                                                    <ul className="product_badge_group">
                                                        <li><span className="product_badge badge_meats"> Row spacing 20-25 cm</span></li>
                                                        <li><span className="product_badge badge_discount">25-55 HP</span></li>
                                                    </ul>
                                                    {/* <ul className="product_action_btns">
                                                        <li><Link href='#'><FaSearch /></Link></li>
                                                        <li><Link href='#'><FaShoppingBag /></Link></li>
                                                    </ul> */}
                                                </div>

                                                <div className="rating_wrap ">
                                                    <ul className="rating_star ul_li">
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        {/* <li className=""><FaRegStar /></li> */}
                                                    </ul>
                                                    <span className="shop_review_text">( 5.0 )</span>
                                                </div>

                                                <div className="product_content">
                                                    <h3 className="product_title">
                                                        <Link href="#">Seed Fertilizer Drill</Link>
                                                    </h3>
                                                    {/* <div className="product_price">
                                                        <span className="sale_price pe-1"> Contact Dealer (₹)</span>
                                                    </div> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[100%] sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-18px)] xl:w-[calc(25%-18px)]">
                                        <div className="product_layout_1">
                                            <div className="product_layout_content">
                                                <div className="product_image_wrap">
                                                    <Link href='#' className="product_image">
                                                        <img src="/assets/land/l-01.webp" className="pic-1" alt="" />
                                                        <img src="/assets/land/l-01.webp" className="pic-2" alt="" />
                                                    </Link>
                                                    <ul className="product_badge_group">
                                                        <li><span className="product_badge badge_meats">5 - 8 feet widths</span></li>
                                                        <li><span className="product_badge badge_discount">25-60 HP</span></li>
                                                    </ul>
                                                </div>

                                                <div className="rating_wrap ">
                                                    <ul className="rating_star ul_li">
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                    </ul>
                                                    <span className="shop_review_text">( 5.0 )</span>
                                                </div>

                                                <div className="product_content">
                                                    <h3 className="product_title">
                                                        <Link href="#">Reversible Leveler</Link>
                                                    </h3>
                                                    {/* <div className="product_price">
                                                        <span className="sale_price pe-1"> Contact Dealer (₹)</span>
                                                    </div> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[100%] sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-18px)] xl:w-[calc(25%-18px)]">
                                        <div className="product_layout_1">
                                            <div className="product_layout_content">
                                                <div className="product_image_wrap">
                                                    <Link href='#' className="product_image">
                                                        <img src="/assets/disc/d-08.png" className="pic-1" alt="" />
                                                        <img src="/assets/disc/d-08.png" className="pic-2" alt="" />
                                                    </Link>
                                                    <ul className="product_badge_group">
                                                        <li><span className="product_badge badge_meats">No.of disc 16-36</span></li>
                                                        <li><span className="product_badge badge_discount">45-120 HP</span></li>
                                                    </ul>
                                                </div>

                                                <div className="rating_wrap ">
                                                    <ul className="rating_star ul_li">
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                    </ul>
                                                    <span className="shop_review_text">( 5.0 )</span>
                                                </div>

                                                <div className="product_content">
                                                    <h3 className="product_title">
                                                        <Link href="#">Tandem Disc Harrow</Link>
                                                    </h3>
                                                    {/* <div className="product_price">
                                                        <span className="sale_price pe-1"> Contact Dealer (₹)</span>
                                                    </div> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[100%] sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-18px)] xl:w-[calc(25%-18px)]">
                                        <div className="product_layout_1">
                                            <div className="product_layout_content">
                                                <div className="product_image_wrap">
                                                    <Link href='#' className="product_image">
                                                        <img src="/assets/rotaviter/r-05.png" className="pic-1" alt="" />
                                                        <img src="/assets/rotaviter/r-05.png" className="pic-2" alt="" />
                                                    </Link>
                                                    <ul className="product_badge_group">
                                                        <li><span className="product_badge badge_meats">5 - 6 feet widths</span></li>
                                                        <li><span className="product_badge badge_discount">35-50 HP</span></li>
                                                    </ul>
                                                </div>

                                                <div className="rating_wrap ">
                                                    <ul className="rating_star ul_li">
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                    </ul>
                                                    <span className="shop_review_text">( 5.0 )</span>
                                                </div>

                                                <div className="product_content">
                                                    <h3 className="product_title">
                                                        <Link href="#">Standard Rotavator</Link>
                                                    </h3>
                                                    {/* <div className="product_price">
                                                        <span className="sale_price pe-1"> Contact Dealer (₹)</span>
                                                    </div> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[100%] sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-18px)] xl:w-[calc(25%-18px)]">
                                        <div className="product_layout_1">
                                            <div className="product_layout_content">
                                                <div className="product_image_wrap">
                                                    <Link href='#' className="product_image">
                                                        <img src="/assets/disc/d-10.jpeg" className="pic-1" alt="" />
                                                        <img src="/assets/disc/d-10.jpeg" className="pic-2" alt="" />
                                                    </Link>
                                                    <ul className="product_badge_group">
                                                        <li><span className="product_badge badge_meats">No.of disc 24 - 28</span></li>
                                                        <li><span className="product_badge badge_discount">80-150+ HP</span></li>
                                                    </ul>
                                                </div>

                                                <div className="rating_wrap ">
                                                    <ul className="rating_star ul_li">
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                    </ul>
                                                    <span className="shop_review_text">( 5.0 )</span>
                                                </div>

                                                <div className="product_content">
                                                    <h3 className="product_title">
                                                        <Link href="#">Hydraulic Foldable</Link>
                                                    </h3>
                                                    {/* <div className="product_price">
                                                        <span className="sale_price pe-1"> Contact Dealer (₹)</span>
                                                    </div> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>

                            <TabPanel>
                                <div className="flex flex-wrap gap-6">
                                    <div className="w-[100%] sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-18px)] xl:w-[calc(25%-18px)]">
                                        <div className="product_layout_1">
                                            <div className="product_layout_content">
                                                <div className="product_image_wrap">
                                                    <Link href='#' className="product_image">
                                                        <img src="/assets/disc/d-10.jpeg" className="pic-1" alt="" />
                                                        <img src="/assets/disc/d-10.jpeg" className="pic-2" alt="" />
                                                    </Link>
                                                    <ul className="product_badge_group">
                                                        <li><span className="product_badge badge_meats">No.of disc 24 - 28</span></li>
                                                        <li><span className="product_badge badge_discount">80-150+ HP</span></li>
                                                    </ul>
                                                </div>

                                                <div className="rating_wrap ">
                                                    <ul className="rating_star ul_li">
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                    </ul>
                                                    <span className="shop_review_text">( 5.0 )</span>
                                                </div>

                                                <div className="product_content">
                                                    <h3 className="product_title">
                                                        <Link href="#">Hydraulic Foldable</Link>
                                                    </h3>
                                                    {/* <div className="product_price">
                                                        <span className="sale_price pe-1"> Contact Dealer (₹)</span>
                                                    </div> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[100%] sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-18px)] xl:w-[calc(25%-18px)]">
                                        <div className="product_layout_1">
                                            <div className="product_layout_content">
                                                <div className="product_image_wrap">
                                                    <Link href='#' className="product_image">
                                                        <img src="/assets/disc/d-08.png" className="pic-1" alt="" />
                                                        <img src="/assets/disc/d-08.png" className="pic-2" alt="" />
                                                    </Link>
                                                    <ul className="product_badge_group">
                                                        <li><span className="product_badge badge_meats">No.of disc 16-36</span></li>
                                                        <li><span className="product_badge badge_discount">45-120 HP</span></li>
                                                    </ul>
                                                </div>

                                                <div className="rating_wrap ">
                                                    <ul className="rating_star ul_li">
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                    </ul>
                                                    <span className="shop_review_text">( 5.0 )</span>
                                                </div>

                                                <div className="product_content">
                                                    <h3 className="product_title">
                                                        <Link href="#">Tandem Disc Harrow</Link>
                                                    </h3>
                                                    {/* <div className="product_price">
                                                        <span className="sale_price pe-1"> Contact Dealer (₹)</span>
                                                    </div> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[100%] sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-18px)] xl:w-[calc(25%-18px)]">
                                        <div className="product_layout_1">
                                            <div className="product_layout_content">
                                                <div className="product_image_wrap">
                                                    <Link href='#' className="product_image">
                                                        <img src="/assets/land/l-01.webp" className="pic-1" alt="" />
                                                        <img src="/assets/land/l-01.webp" className="pic-2" alt="" />
                                                    </Link>
                                                    <ul className="product_badge_group">
                                                        <li><span className="product_badge badge_meats">5 - 8 feet widths</span></li>
                                                        <li><span className="product_badge badge_discount">25-60 HP</span></li>
                                                    </ul>
                                                </div>

                                                <div className="rating_wrap ">
                                                    <ul className="rating_star ul_li">
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                    </ul>
                                                    <span className="shop_review_text">( 5.0 )</span>
                                                </div>

                                                <div className="product_content">
                                                    <h3 className="product_title">
                                                        <Link href="#">Reversible Leveler</Link>
                                                    </h3>
                                                    {/* <div className="product_price">
                                                        <span className="sale_price pe-1"> Contact Dealer (₹)</span>
                                                    </div> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[100%] sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-18px)] xl:w-[calc(25%-18px)]">
                                        <div className="product_layout_1">
                                            <div className="product_layout_content">
                                                <div className="product_image_wrap">
                                                    <Link href='#' className="product_image">
                                                        <img src="/assets/rotaviter/r-05.png" className="pic-1" alt="" />
                                                        <img src="/assets/rotaviter/r-05.png" className="pic-2" alt="" />
                                                    </Link>
                                                    <ul className="product_badge_group">
                                                        <li><span className="product_badge badge_meats">5 - 6 feet widths</span></li>
                                                        <li><span className="product_badge badge_discount">35-50 HP</span></li>
                                                    </ul>
                                                </div>

                                                <div className="rating_wrap ">
                                                    <ul className="rating_star ul_li">
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                    </ul>
                                                    <span className="shop_review_text">( 5.0 )</span>
                                                </div>

                                                <div className="product_content">
                                                    <h3 className="product_title">
                                                        <Link href="#">Standard Rotavator</Link>
                                                    </h3>
                                                    {/* <div className="product_price">
                                                        <span className="sale_price pe-1"> Contact Dealer (₹)</span>
                                                    </div> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[100%] sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-18px)] xl:w-[calc(25%-18px)]">
                                        <div className="product_layout_1">
                                            <div className="product_layout_content">
                                                <div className="product_image_wrap">
                                                    <Link href='#' className="product_image">
                                                        <img src="/assets/cultivator/c-04.png" className="pic-1" alt="" />
                                                        <img src="/assets/cultivator/c-04.png" className="pic-2" alt="" />
                                                    </Link>
                                                    <ul className="product_badge_group">
                                                        <li><span className="product_badge badge_meats">Breaking up tough soil</span></li>
                                                        <li><span className="product_badge badge_discount">30-90 HP</span></li>
                                                    </ul>
                                                    {/* <ul className="product_action_btns">
                                                        <li><Link href='#'><FaSearch /></Link></li>
                                                        <li><Link href='#'><FaShoppingBag /></Link></li>
                                                    </ul> */}
                                                </div>

                                                <div className="rating_wrap ">
                                                    <ul className="rating_star ul_li">
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        {/* <li className=""><FaRegStar /></li> */}
                                                    </ul>
                                                    <span className="shop_review_text">( 5.0 )</span>
                                                </div>

                                                <div className="product_content">
                                                    <h3 className="product_title">
                                                        <Link href="#">Cultivator</Link>
                                                    </h3>
                                                    {/* <div className="product_price">
                                                        <span className="sale_price pe-1"> Contact Dealer (₹)</span>
                                                    </div> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[100%] sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-18px)] xl:w-[calc(25%-18px)]">
                                        <div className="product_layout_1">
                                            <div className="product_layout_content">
                                                <div className="product_image_wrap">
                                                    <Link href='#' className="product_image">
                                                        <img src="/assets/rotaviter/r-08.webp" className="pic-1" alt="" />
                                                        <img src="/assets/rotaviter/r-08.webp" className="pic-2" alt="" />
                                                    </Link>
                                                    <ul className="product_badge_group">
                                                        <li><span className="product_badge badge_meats">3 - 4 feet widths</span></li>
                                                        <li><span className="product_badge badge_discount">15-30 HP</span></li>
                                                    </ul>
                                                    {/* <ul className="product_action_btns">
                                                        <li><Link href='#'><FaSearch /></Link></li>
                                                        <li><Link href='#'><FaShoppingBag /></Link></li>
                                                    </ul> */}
                                                </div>

                                                <div className="rating_wrap ">
                                                    <ul className="rating_star ul_li">
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        {/* <li className=""><FaRegStar /></li> */}
                                                    </ul>
                                                    <span className="shop_review_text">( 5.0 )</span>
                                                </div>

                                                <div className="product_content">
                                                    <h3 className="product_title">
                                                        <Link href="#">Rotavator</Link>
                                                    </h3>
                                                    {/* <div className="product_price">
                                                        <span className="sale_price pe-1"> Contact Dealer (₹)</span>
                                                    </div> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[100%] sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-18px)] xl:w-[calc(25%-18px)]">
                                        <div className="product_layout_1">
                                            <div className="product_layout_content">
                                                <div className="product_image_wrap">
                                                    <Link href='#' className="product_image">
                                                        <img src="/assets/seed/s-01.jpeg" className="pic-1" alt="" />
                                                        <img src="/assets/seed/s-01.jpeg" className="pic-2" alt="" />
                                                    </Link>
                                                    <ul className="product_badge_group">
                                                        <li><span className="product_badge badge_meats"> Row spacing 20-25 cm</span></li>
                                                        <li><span className="product_badge badge_discount">25-55 HP</span></li>
                                                    </ul>
                                                    {/* <ul className="product_action_btns">
                                                        <li><Link href='#'><FaSearch /></Link></li>
                                                        <li><Link href='#'><FaShoppingBag /></Link></li>
                                                    </ul> */}
                                                </div>

                                                <div className="rating_wrap ">
                                                    <ul className="rating_star ul_li">
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        {/* <li className=""><FaRegStar /></li> */}
                                                    </ul>
                                                    <span className="shop_review_text">( 5.0 )</span>
                                                </div>

                                                <div className="product_content">
                                                    <h3 className="product_title">
                                                        <Link href="#">Seed Fertilizer Drill</Link>
                                                    </h3>
                                                    {/* <div className="product_price">
                                                        <span className="sale_price pe-1"> Contact Dealer (₹)</span>
                                                    </div> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[100%] sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-18px)] xl:w-[calc(25%-18px)]">
                                        <div className="product_layout_1">
                                            <div className="product_layout_content">
                                                <div className="product_image_wrap">
                                                    <Link href='#' className="product_image">
                                                        <img src="/assets/plumb/p-05.jpeg" className="pic-1" alt="" />
                                                        <img src="/assets/plumb/p-05.jpeg" className="pic-2" alt="" />
                                                    </Link>
                                                    <ul className="product_badge_group">
                                                        <li><span className="product_badge badge_meats"> All type soil</span></li>
                                                        <li><span className="product_badge badge_discount">40-90 HP</span></li>
                                                    </ul>
                                                    {/* <ul className="product_action_btns">
                                                        <li><Link href='#'><FaSearch /></Link></li>
                                                        <li><Link href='#'><FaShoppingBag /></Link></li>
                                                    </ul> */}
                                                </div>

                                                <div className="rating_wrap ">
                                                    <ul className="rating_star ul_li">
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        {/* <li className=""><FaRegStar /></li> */}
                                                    </ul>
                                                    <span className="shop_review_text">( 5.0 )</span>
                                                </div>

                                                <div className="product_content">
                                                    <h3 className="product_title">
                                                        <Link href="#">Plough</Link>
                                                    </h3>
                                                    {/* <div className="product_price">
                                                        <span className="sale_price pe-1"> Contact Dealer (₹)</span>
                                                    </div> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>

                        </CommonTabs>
                    </div>
                </section>
            </main>
            <Link href="/contacts">
                <div className="enquiry_now">
                    <p className="flex btn">
                        <span className="text-[#25D366] text-lg flex mt-0.5">
                            <FaWhatsapp />
                        </span>
                        Enquiry Now
                    </p>
                </div>
            </Link>
        </>
    )
}

export default Home