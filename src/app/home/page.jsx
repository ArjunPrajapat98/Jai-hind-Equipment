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

    const topics = ['All', 'Videos', 'Images'];

    const freshCategory = [
        {
            name: 'Rotavator',
            image: 'assets/rotaviter/r-01.png',
            count: 40,
        },
        {
            name: 'Fresh Fruits',
            image: '/assets/img/ctg_icon2.png',
            count: 30,
        },
        {
            name: 'Beverages',
            image: '/assets/img/ctg_icon3.png',
            count: 30,
        },
        {
            name: 'Babies & Kids',
            image: '/assets/img/ctg_icon4.png',
            count: 10,
        },
        {
            name: 'Frozen Foods',
            image: '/assets/img/ctg_icon5.png',
            count: 20,
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
                        <div className="owlItems">
                            <img className="min-h-[600px] h-[600px] object-cover object-center" src="/assets/img/equipment/premium_photo-1664300969063-b274f727fcad.avif" alt="banner3" />
                        </div>
                        <div className="owlItems">
                            <img className="min-h-[600px] h-[600px] object-cover object-center" src="/assets/img/equipment/premium_photo-1661818380392-eff80caa5d91.avif" alt="banner3" />
                        </div>
                        <div className="owlItems">
                            <img className="min-h-[600px] h-[600px] object-cover object-center" src="/assets/img/equipment/Screenshot from 2025-10-30 09-26-30.png" alt="banner3" />
                        </div>
                        <div className="owlItems">
                            <img className="min-h-[600px] h-[600px] object-cover object-center" src="/assets/img/banners/banner_machine1.webp" alt="banner1" />
                        </div>
                        <div className="owlItems">
                            <img className="min-h-[600px] h-[600px] object-cover object-center" src="/assets/img/banners/banner_machine2.webp" alt="banner2" />
                        </div>
                        <div className="owlItems">
                            <img className="min-h-[600px] h-[600px] object-cover object-center" src="/assets/img/banners/banner_machine3.webp" alt="banner3" />
                        </div>
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
                                                            <img src="assets/img/fresh_cat6.png" />
                                                        </div>

                                                        <div className="prdc_ctg_product_text">
                                                            <div className="prdc_ctg_product_badge mb-2">
                                                                <span>Meats</span>
                                                            </div>
                                                            <div className="rating_wrap ">
                                                                <ul className="rating_star ul_li">
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className=""><FaRegStar /></li>
                                                                </ul>
                                                                <span className="shop_review_text">( 4.0 )</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title">
                                                                    <Link href="#">Organic Cabbage</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1">$50.00</span>
                                                                    <del>$65.00</del>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-full sm:w-[calc(50%-12px)]">
                                                    <div className="prdc_ctg_product_content">
                                                        <div className="prdc_ctg_product_img">
                                                            <img src="assets/img/fresh_cat7.png" />
                                                        </div>

                                                        <div className="prdc_ctg_product_text">
                                                            <div className="prdc_ctg_product_badge mb-2">
                                                                <span>Meats</span>
                                                            </div>
                                                            <div className="rating_wrap ">
                                                                <ul className="rating_star ul_li">
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className=""><FaRegStar /></li>
                                                                </ul>
                                                                <span className="shop_review_text">( 4.0 )</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title">
                                                                    <Link href="#">Organic Cabbage</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1">$50.00</span>
                                                                    <del>$65.00</del>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-full sm:w-[calc(50%-12px)]">
                                                    <div className="prdc_ctg_product_content">
                                                        <div className="prdc_ctg_product_img">
                                                            <img src="assets/img/fresh_cat8.png" />
                                                        </div>

                                                        <div className="prdc_ctg_product_text">
                                                            <div className="prdc_ctg_product_badge mb-2">
                                                                <span>Meats</span>
                                                            </div>
                                                            <div className="rating_wrap ">
                                                                <ul className="rating_star ul_li">
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className=""><FaRegStar /></li>
                                                                </ul>
                                                                <span className="shop_review_text">( 4.0 )</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title">
                                                                    <Link href="#">Organic Cabbage</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1">$50.00</span>
                                                                    <del>$65.00</del>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-full sm:w-[calc(50%-12px)]">
                                                    <div className="prdc_ctg_product_content">
                                                        <div className="prdc_ctg_product_img">
                                                            <img src="assets/img/fresh_cat9.png" />
                                                        </div>

                                                        <div className="prdc_ctg_product_text">
                                                            <div className="prdc_ctg_product_badge mb-2">
                                                                <span>Meats</span>
                                                            </div>
                                                            <div className="rating_wrap ">
                                                                <ul className="rating_star ul_li">
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className=""><FaRegStar /></li>
                                                                </ul>
                                                                <span className="shop_review_text">( 4.0 )</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title">
                                                                    <Link href="#">Organic Cabbage</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1">$50.00</span>
                                                                    <del>$65.00</del>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-full sm:w-[calc(50%-12px)]">
                                                    <div className="prdc_ctg_product_content">
                                                        <div className="prdc_ctg_product_img">
                                                            <img src="assets/img/fresh_cat10.png" />
                                                        </div>

                                                        <div className="prdc_ctg_product_text">
                                                            <div className="prdc_ctg_product_badge mb-2">
                                                                <span>Meats</span>
                                                            </div>
                                                            <div className="rating_wrap ">
                                                                <ul className="rating_star ul_li">
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className=""><FaRegStar /></li>
                                                                </ul>
                                                                <span className="shop_review_text">( 4.0 )</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title">
                                                                    <Link href="#">Organic Cabbage</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1">$50.00</span>
                                                                    <del>$65.00</del>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-full sm:w-[calc(50%-12px)]">
                                                    <div className="prdc_ctg_product_content">
                                                        <div className="prdc_ctg_product_img">
                                                            <img src="assets/img/fresh_cat11.png" />
                                                        </div>

                                                        <div className="prdc_ctg_product_text">
                                                            <div className="prdc_ctg_product_badge mb-2">
                                                                <span>Meats</span>
                                                            </div>
                                                            <div className="rating_wrap ">
                                                                <ul className="rating_star ul_li">
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className=""><FaRegStar /></li>
                                                                </ul>
                                                                <span className="shop_review_text">( 4.0 )</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title">
                                                                    <Link href="#">Organic Cabbage</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1">$50.00</span>
                                                                    <del>$65.00</del>
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
                                                            <img src="assets/img/fresh_cat6.png" />
                                                        </div>

                                                        <div className="prdc_ctg_product_text">
                                                            <div className="prdc_ctg_product_badge mb-2">
                                                                <span>Meats</span>
                                                            </div>
                                                            <div className="rating_wrap ">
                                                                <ul className="rating_star ul_li">
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className=""><FaRegStar /></li>
                                                                </ul>
                                                                <span className="shop_review_text">( 4.0 )</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title">
                                                                    <Link href="#">Organic Cabbage</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1">$50.00</span>
                                                                    <del>$65.00</del>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-full sm:w-[calc(50%-12px)]">
                                                    <div className="prdc_ctg_product_content">
                                                        <div className="prdc_ctg_product_img">
                                                            <img src="assets/img/fresh_cat7.png" />
                                                        </div>

                                                        <div className="prdc_ctg_product_text">
                                                            <div className="prdc_ctg_product_badge mb-2">
                                                                <span>Meats</span>
                                                            </div>
                                                            <div className="rating_wrap ">
                                                                <ul className="rating_star ul_li">
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className=""><FaRegStar /></li>
                                                                </ul>
                                                                <span className="shop_review_text">( 4.0 )</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title">
                                                                    <Link href="#">Organic Cabbage</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1">$50.00</span>
                                                                    <del>$65.00</del>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-full sm:w-[calc(50%-12px)]">
                                                    <div className="prdc_ctg_product_content">
                                                        <div className="prdc_ctg_product_img">
                                                            <img src="assets/img/fresh_cat8.png" />
                                                        </div>

                                                        <div className="prdc_ctg_product_text">
                                                            <div className="prdc_ctg_product_badge mb-2">
                                                                <span>Meats</span>
                                                            </div>
                                                            <div className="rating_wrap ">
                                                                <ul className="rating_star ul_li">
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className=""><FaRegStar /></li>
                                                                </ul>
                                                                <span className="shop_review_text">( 4.0 )</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title">
                                                                    <Link href="#">Organic Cabbage</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1">$50.00</span>
                                                                    <del>$65.00</del>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-full sm:w-[calc(50%-12px)]">
                                                    <div className="prdc_ctg_product_content">
                                                        <div className="prdc_ctg_product_img">
                                                            <img src="assets/img/fresh_cat9.png" />
                                                        </div>

                                                        <div className="prdc_ctg_product_text">
                                                            <div className="prdc_ctg_product_badge mb-2">
                                                                <span>Meats</span>
                                                            </div>
                                                            <div className="rating_wrap ">
                                                                <ul className="rating_star ul_li">
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className=""><FaRegStar /></li>
                                                                </ul>
                                                                <span className="shop_review_text">( 4.0 )</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title">
                                                                    <Link href="#">Organic Cabbage</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1">$50.00</span>
                                                                    <del>$65.00</del>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-full sm:w-[calc(50%-12px)]">
                                                    <div className="prdc_ctg_product_content">
                                                        <div className="prdc_ctg_product_img">
                                                            <img src="assets/img/fresh_cat10.png" />
                                                        </div>

                                                        <div className="prdc_ctg_product_text">
                                                            <div className="prdc_ctg_product_badge mb-2">
                                                                <span>Meats</span>
                                                            </div>
                                                            <div className="rating_wrap ">
                                                                <ul className="rating_star ul_li">
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className=""><FaRegStar /></li>
                                                                </ul>
                                                                <span className="shop_review_text">( 4.0 )</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title">
                                                                    <Link href="#">Organic Cabbage</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1">$50.00</span>
                                                                    <del>$65.00</del>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-full sm:w-[calc(50%-12px)]">
                                                    <div className="prdc_ctg_product_content">
                                                        <div className="prdc_ctg_product_img">
                                                            <img src="assets/img/fresh_cat11.png" />
                                                        </div>

                                                        <div className="prdc_ctg_product_text">
                                                            <div className="prdc_ctg_product_badge mb-2">
                                                                <span>Meats</span>
                                                            </div>
                                                            <div className="rating_wrap ">
                                                                <ul className="rating_star ul_li">
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className=""><FaRegStar /></li>
                                                                </ul>
                                                                <span className="shop_review_text">( 4.0 )</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title">
                                                                    <Link href="#">Organic Cabbage</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1">$50.00</span>
                                                                    <del>$65.00</del>
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
                                                            <img src="assets/img/fresh_cat6.png" />
                                                        </div>

                                                        <div className="prdc_ctg_product_text">
                                                            <div className="prdc_ctg_product_badge mb-2">
                                                                <span>Meats</span>
                                                            </div>
                                                            <div className="rating_wrap ">
                                                                <ul className="rating_star ul_li">
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className=""><FaRegStar /></li>
                                                                </ul>
                                                                <span className="shop_review_text">( 4.0 )</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title">
                                                                    <Link href="#">Organic Cabbage</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1">$50.00</span>
                                                                    <del>$65.00</del>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-full sm:w-[calc(50%-12px)]">
                                                    <div className="prdc_ctg_product_content">
                                                        <div className="prdc_ctg_product_img">
                                                            <img src="assets/img/fresh_cat7.png" />
                                                        </div>

                                                        <div className="prdc_ctg_product_text">
                                                            <div className="prdc_ctg_product_badge mb-2">
                                                                <span>Meats</span>
                                                            </div>
                                                            <div className="rating_wrap ">
                                                                <ul className="rating_star ul_li">
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className=""><FaRegStar /></li>
                                                                </ul>
                                                                <span className="shop_review_text">( 4.0 )</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title">
                                                                    <Link href="#">Organic Cabbage</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1">$50.00</span>
                                                                    <del>$65.00</del>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-full sm:w-[calc(50%-12px)]">
                                                    <div className="prdc_ctg_product_content">
                                                        <div className="prdc_ctg_product_img">
                                                            <img src="assets/img/fresh_cat8.png" />
                                                        </div>

                                                        <div className="prdc_ctg_product_text">
                                                            <div className="prdc_ctg_product_badge mb-2">
                                                                <span>Meats</span>
                                                            </div>
                                                            <div className="rating_wrap ">
                                                                <ul className="rating_star ul_li">
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className=""><FaRegStar /></li>
                                                                </ul>
                                                                <span className="shop_review_text">( 4.0 )</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title">
                                                                    <Link href="#">Organic Cabbage</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1">$50.00</span>
                                                                    <del>$65.00</del>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-full sm:w-[calc(50%-12px)]">
                                                    <div className="prdc_ctg_product_content">
                                                        <div className="prdc_ctg_product_img">
                                                            <img src="assets/img/fresh_cat9.png" />
                                                        </div>

                                                        <div className="prdc_ctg_product_text">
                                                            <div className="prdc_ctg_product_badge mb-2">
                                                                <span>Meats</span>
                                                            </div>
                                                            <div className="rating_wrap ">
                                                                <ul className="rating_star ul_li">
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className=""><FaRegStar /></li>
                                                                </ul>
                                                                <span className="shop_review_text">( 4.0 )</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title">
                                                                    <Link href="#">Organic Cabbage</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1">$50.00</span>
                                                                    <del>$65.00</del>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-full sm:w-[calc(50%-12px)]">
                                                    <div className="prdc_ctg_product_content">
                                                        <div className="prdc_ctg_product_img">
                                                            <img src="assets/img/fresh_cat10.png" />
                                                        </div>

                                                        <div className="prdc_ctg_product_text">
                                                            <div className="prdc_ctg_product_badge mb-2">
                                                                <span>Meats</span>
                                                            </div>
                                                            <div className="rating_wrap ">
                                                                <ul className="rating_star ul_li">
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className=""><FaRegStar /></li>
                                                                </ul>
                                                                <span className="shop_review_text">( 4.0 )</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title">
                                                                    <Link href="#">Organic Cabbage</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1">$50.00</span>
                                                                    <del>$65.00</del>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-full sm:w-[calc(50%-12px)]">
                                                    <div className="prdc_ctg_product_content">
                                                        <div className="prdc_ctg_product_img">
                                                            <img src="assets/img/fresh_cat11.png" />
                                                        </div>

                                                        <div className="prdc_ctg_product_text">
                                                            <div className="prdc_ctg_product_badge mb-2">
                                                                <span>Meats</span>
                                                            </div>
                                                            <div className="rating_wrap ">
                                                                <ul className="rating_star ul_li">
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className=""><FaRegStar /></li>
                                                                </ul>
                                                                <span className="shop_review_text">( 4.0 )</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title">
                                                                    <Link href="#">Organic Cabbage</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1">$50.00</span>
                                                                    <del>$65.00</del>
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
                                                            <img src="assets/img/fresh_cat6.png" />
                                                        </div>

                                                        <div className="prdc_ctg_product_text">
                                                            <div className="prdc_ctg_product_badge mb-2">
                                                                <span>Meats</span>
                                                            </div>
                                                            <div className="rating_wrap ">
                                                                <ul className="rating_star ul_li">
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className=""><FaRegStar /></li>
                                                                </ul>
                                                                <span className="shop_review_text">( 4.0 )</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title">
                                                                    <Link href="#">Organic Cabbage</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1">$50.00</span>
                                                                    <del>$65.00</del>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-full sm:w-[calc(50%-12px)]">
                                                    <div className="prdc_ctg_product_content">
                                                        <div className="prdc_ctg_product_img">
                                                            <img src="assets/img/fresh_cat7.png" />
                                                        </div>

                                                        <div className="prdc_ctg_product_text">
                                                            <div className="prdc_ctg_product_badge mb-2">
                                                                <span>Meats</span>
                                                            </div>
                                                            <div className="rating_wrap ">
                                                                <ul className="rating_star ul_li">
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className=""><FaRegStar /></li>
                                                                </ul>
                                                                <span className="shop_review_text">( 4.0 )</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title">
                                                                    <Link href="#">Organic Cabbage</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1">$50.00</span>
                                                                    <del>$65.00</del>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-full sm:w-[calc(50%-12px)]">
                                                    <div className="prdc_ctg_product_content">
                                                        <div className="prdc_ctg_product_img">
                                                            <img src="assets/img/fresh_cat8.png" />
                                                        </div>

                                                        <div className="prdc_ctg_product_text">
                                                            <div className="prdc_ctg_product_badge mb-2">
                                                                <span>Meats</span>
                                                            </div>
                                                            <div className="rating_wrap ">
                                                                <ul className="rating_star ul_li">
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className=""><FaRegStar /></li>
                                                                </ul>
                                                                <span className="shop_review_text">( 4.0 )</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title">
                                                                    <Link href="#">Organic Cabbage</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1">$50.00</span>
                                                                    <del>$65.00</del>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-full sm:w-[calc(50%-12px)]">
                                                    <div className="prdc_ctg_product_content">
                                                        <div className="prdc_ctg_product_img">
                                                            <img src="assets/img/fresh_cat9.png" />
                                                        </div>

                                                        <div className="prdc_ctg_product_text">
                                                            <div className="prdc_ctg_product_badge mb-2">
                                                                <span>Meats</span>
                                                            </div>
                                                            <div className="rating_wrap ">
                                                                <ul className="rating_star ul_li">
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className=""><FaRegStar /></li>
                                                                </ul>
                                                                <span className="shop_review_text">( 4.0 )</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title">
                                                                    <Link href="#">Organic Cabbage</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1">$50.00</span>
                                                                    <del>$65.00</del>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-full sm:w-[calc(50%-12px)]">
                                                    <div className="prdc_ctg_product_content">
                                                        <div className="prdc_ctg_product_img">
                                                            <img src="assets/img/fresh_cat10.png" />
                                                        </div>

                                                        <div className="prdc_ctg_product_text">
                                                            <div className="prdc_ctg_product_badge mb-2">
                                                                <span>Meats</span>
                                                            </div>
                                                            <div className="rating_wrap ">
                                                                <ul className="rating_star ul_li">
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className=""><FaRegStar /></li>
                                                                </ul>
                                                                <span className="shop_review_text">( 4.0 )</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title">
                                                                    <Link href="#">Organic Cabbage</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1">$50.00</span>
                                                                    <del>$65.00</del>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-full sm:w-[calc(50%-12px)]">
                                                    <div className="prdc_ctg_product_content">
                                                        <div className="prdc_ctg_product_img">
                                                            <img src="assets/img/fresh_cat11.png" />
                                                        </div>

                                                        <div className="prdc_ctg_product_text">
                                                            <div className="prdc_ctg_product_badge mb-2">
                                                                <span>Meats</span>
                                                            </div>
                                                            <div className="rating_wrap ">
                                                                <ul className="rating_star ul_li">
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className="active"><FaStar /></li>
                                                                    <li className=""><FaRegStar /></li>
                                                                </ul>
                                                                <span className="shop_review_text">( 4.0 )</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title">
                                                                    <Link href="#">Organic Cabbage</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1">$50.00</span>
                                                                    <del>$65.00</del>
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
                                <span className="text-[12px] font-medium">FRESH FROM OUR FARM</span>
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
                                                        <img src="/assets/img/product1.png" className="pic-1" alt="" />
                                                        <img src="/assets/img/product2.png" className="pic-2" alt="" />
                                                    </Link>
                                                    <ul className="product_badge_group">
                                                        <li><span className="product_badge badge_meats">Meats</span></li>
                                                        <li><span className="product_badge badge_discount">-27%</span></li>
                                                    </ul>
                                                    <ul className="product_action_btns">
                                                        <li><Link href='#'><FaSearch /></Link></li>
                                                        <li><Link href='#'><FaShoppingBag /></Link></li>
                                                    </ul>
                                                </div>

                                                <div className="rating_wrap ">
                                                    <ul className="rating_star ul_li">
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className=""><FaRegStar /></li>
                                                    </ul>
                                                    <span className="shop_review_text">( 4.0 )</span>
                                                </div>

                                                <div className="product_content">
                                                    <h3 className="product_title">
                                                        <Link href="#">Organic Cabbage</Link>
                                                    </h3>
                                                    <div className="product_price">
                                                        <span className="sale_price pe-1">$50.00</span>
                                                        <del>$65.00</del>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[100%] sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-18px)] xl:w-[calc(25%-18px)]">
                                        <div className="product_layout_1">
                                            <div className="product_layout_content">
                                                <div className="product_image_wrap">
                                                    <Link href='#' className="product_image">
                                                        <img src="/assets/img/product2.png" className="pic-1" alt="" />
                                                        <img src="/assets/img/product3.png" className="pic-2" alt="" />
                                                    </Link>
                                                    <ul className="product_badge_group">
                                                        <li><span className="product_badge badge_meats">Meats</span></li>
                                                        <li><span className="product_badge badge_discount">-27%</span></li>
                                                    </ul>
                                                    <ul className="product_action_btns">
                                                        <li><Link href='#'><FaSearch /></Link></li>
                                                        <li><Link href='#'><FaShoppingBag /></Link></li>
                                                    </ul>
                                                </div>

                                                <div className="rating_wrap ">
                                                    <ul className="rating_star ul_li">
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className=""><FaRegStar /></li>
                                                    </ul>
                                                    <span className="shop_review_text">( 4.0 )</span>
                                                </div>

                                                <div className="product_content">
                                                    <h3 className="product_title">
                                                        <Link href="#">Organic Cabbage</Link>
                                                    </h3>
                                                    <div className="product_price">
                                                        <span className="sale_price pe-1">$50.00</span>
                                                        <del>$65.00</del>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[100%] sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-18px)] xl:w-[calc(25%-18px)]">
                                        <div className="product_layout_1">
                                            <div className="product_layout_content">
                                                <div className="product_image_wrap">
                                                    <Link href='#' className="product_image">
                                                        <img src="/assets/img/product3.png" className="pic-1" alt="" />
                                                        <img src="/assets/img/product4.png" className="pic-2" alt="" />
                                                    </Link>
                                                    <ul className="product_badge_group">
                                                        <li><span className="product_badge badge_meats">Meats</span></li>
                                                        <li><span className="product_badge badge_discount">-27%</span></li>
                                                    </ul>
                                                    <ul className="product_action_btns">
                                                        <li><Link href='#'><FaSearch /></Link></li>
                                                        <li><Link href='#'><FaShoppingBag /></Link></li>
                                                    </ul>
                                                </div>

                                                <div className="rating_wrap ">
                                                    <ul className="rating_star ul_li">
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className=""><FaRegStar /></li>
                                                    </ul>
                                                    <span className="shop_review_text">( 4.0 )</span>
                                                </div>

                                                <div className="product_content">
                                                    <h3 className="product_title">
                                                        <Link href="#">Organic Cabbage</Link>
                                                    </h3>
                                                    <div className="product_price">
                                                        <span className="sale_price pe-1">$50.00</span>
                                                        <del>$65.00</del>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[100%] sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-18px)] xl:w-[calc(25%-18px)]">
                                        <div className="product_layout_1">
                                            <div className="product_layout_content">
                                                <div className="product_image_wrap">
                                                    <Link href='#' className="product_image">
                                                        <img src="/assets/img/product4.png" className="pic-1" alt="" />
                                                        <img src="/assets/img/product5.png" className="pic-2" alt="" />
                                                    </Link>
                                                    <ul className="product_badge_group">
                                                        <li><span className="product_badge badge_meats">Meats</span></li>
                                                        <li><span className="product_badge badge_discount">-27%</span></li>
                                                    </ul>
                                                    <ul className="product_action_btns">
                                                        <li><Link href='#'><FaSearch /></Link></li>
                                                        <li><Link href='#'><FaShoppingBag /></Link></li>
                                                    </ul>
                                                </div>

                                                <div className="rating_wrap ">
                                                    <ul className="rating_star ul_li">
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className=""><FaRegStar /></li>
                                                    </ul>
                                                    <span className="shop_review_text">( 4.0 )</span>
                                                </div>

                                                <div className="product_content">
                                                    <h3 className="product_title">
                                                        <Link href="#">Organic Cabbage</Link>
                                                    </h3>
                                                    <div className="product_price">
                                                        <span className="sale_price pe-1">$50.00</span>
                                                        <del>$65.00</del>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w-[100%] sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-18px)] xl:w-[calc(25%-18px)]">
                                        <div className="product_layout_1">
                                            <div className="product_layout_content">
                                                <div className="product_image_wrap">
                                                    <Link href='#' className="product_image">
                                                        <img src="/assets/img/product5.png" className="pic-1" alt="" />
                                                        <img src="/assets/img/product6.png" className="pic-2" alt="" />
                                                    </Link>
                                                    <ul className="product_badge_group">
                                                        <li><span className="product_badge badge_meats">Meats</span></li>
                                                        <li><span className="product_badge badge_discount">-27%</span></li>
                                                    </ul>
                                                    <ul className="product_action_btns">
                                                        <li><Link href='#'><FaSearch /></Link></li>
                                                        <li><Link href='#'><FaShoppingBag /></Link></li>
                                                    </ul>
                                                </div>

                                                <div className="rating_wrap ">
                                                    <ul className="rating_star ul_li">
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className=""><FaRegStar /></li>
                                                    </ul>
                                                    <span className="shop_review_text">( 4.0 )</span>
                                                </div>

                                                <div className="product_content">
                                                    <h3 className="product_title">
                                                        <Link href="#">Organic Cabbage</Link>
                                                    </h3>
                                                    <div className="product_price">
                                                        <span className="sale_price pe-1">$50.00</span>
                                                        <del>$65.00</del>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[100%] sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-18px)] xl:w-[calc(25%-18px)]">
                                        <div className="product_layout_1">
                                            <div className="product_layout_content">
                                                <div className="product_image_wrap">
                                                    <Link href='#' className="product_image">
                                                        <img src="/assets/img/product6.png" className="pic-1" alt="" />
                                                        <img src="/assets/img/product7.png" className="pic-2" alt="" />
                                                    </Link>
                                                    <ul className="product_badge_group">
                                                        <li><span className="product_badge badge_meats">Meats</span></li>
                                                        <li><span className="product_badge badge_discount">-27%</span></li>
                                                    </ul>
                                                    <ul className="product_action_btns">
                                                        <li><Link href='#'><FaSearch /></Link></li>
                                                        <li><Link href='#'><FaShoppingBag /></Link></li>
                                                    </ul>
                                                </div>

                                                <div className="rating_wrap ">
                                                    <ul className="rating_star ul_li">
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className=""><FaRegStar /></li>
                                                    </ul>
                                                    <span className="shop_review_text">( 4.0 )</span>
                                                </div>

                                                <div className="product_content">
                                                    <h3 className="product_title">
                                                        <Link href="#">Organic Cabbage</Link>
                                                    </h3>
                                                    <div className="product_price">
                                                        <span className="sale_price pe-1">$50.00</span>
                                                        <del>$65.00</del>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[100%] sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-18px)] xl:w-[calc(25%-18px)]">
                                        <div className="product_layout_1">
                                            <div className="product_layout_content">
                                                <div className="product_image_wrap">
                                                    <Link href='#' className="product_image">
                                                        <img src="/assets/img/product7.png" className="pic-1" alt="" />
                                                        <img src="/assets/img/product8.png" className="pic-2" alt="" />
                                                    </Link>
                                                    <ul className="product_badge_group">
                                                        <li><span className="product_badge badge_meats">Meats</span></li>
                                                        <li><span className="product_badge badge_discount">-27%</span></li>
                                                    </ul>
                                                    <ul className="product_action_btns">
                                                        <li><Link href='#'><FaSearch /></Link></li>
                                                        <li><Link href='#'><FaShoppingBag /></Link></li>
                                                    </ul>
                                                </div>

                                                <div className="rating_wrap ">
                                                    <ul className="rating_star ul_li">
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className=""><FaRegStar /></li>
                                                    </ul>
                                                    <span className="shop_review_text">( 4.0 )</span>
                                                </div>

                                                <div className="product_content">
                                                    <h3 className="product_title">
                                                        <Link href="#">Organic Cabbage</Link>
                                                    </h3>
                                                    <div className="product_price">
                                                        <span className="sale_price pe-1">$50.00</span>
                                                        <del>$65.00</del>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[100%] sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-18px)] xl:w-[calc(25%-18px)]">
                                        <div className="product_layout_1">
                                            <div className="product_layout_content">
                                                <div className="product_image_wrap">
                                                    <Link href='#' className="product_image">
                                                        <img src="/assets/img/product8.png" className="pic-1" alt="" />
                                                        <img src="/assets/img/product11.png" className="pic-2" alt="" />
                                                    </Link>
                                                    <ul className="product_badge_group">
                                                        <li><span className="product_badge badge_meats">Meats</span></li>
                                                        <li><span className="product_badge badge_discount">-27%</span></li>
                                                    </ul>
                                                    <ul className="product_action_btns">
                                                        <li><Link href='#'><FaSearch /></Link></li>
                                                        <li><Link href='#'><FaShoppingBag /></Link></li>
                                                    </ul>
                                                </div>

                                                <div className="rating_wrap ">
                                                    <ul className="rating_star ul_li">
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className=""><FaRegStar /></li>
                                                    </ul>
                                                    <span className="shop_review_text">( 4.0 )</span>
                                                </div>

                                                <div className="product_content">
                                                    <h3 className="product_title">
                                                        <Link href="#">Organic Cabbage</Link>
                                                    </h3>
                                                    <div className="product_price">
                                                        <span className="sale_price pe-1">$50.00</span>
                                                        <del>$65.00</del>
                                                    </div>
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
                                                        <img src="/assets/img/product1.png" className="pic-1" alt="" />
                                                        <img src="/assets/img/product2.png" className="pic-2" alt="" />
                                                    </Link>
                                                    <ul className="product_badge_group">
                                                        <li><span className="product_badge badge_meats">Meats</span></li>
                                                        <li><span className="product_badge badge_discount">-27%</span></li>
                                                    </ul>
                                                    <ul className="product_action_btns">
                                                        <li><Link href='#'><FaSearch /></Link></li>
                                                        <li><Link href='#'><FaShoppingBag /></Link></li>
                                                    </ul>
                                                </div>

                                                <div className="rating_wrap ">
                                                    <ul className="rating_star ul_li">
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className=""><FaRegStar /></li>
                                                    </ul>
                                                    <span className="shop_review_text">( 4.0 )</span>
                                                </div>

                                                <div className="product_content">
                                                    <h3 className="product_title">
                                                        <Link href="#">Organic Cabbage</Link>
                                                    </h3>
                                                    <div className="product_price">
                                                        <span className="sale_price pe-1">$50.00</span>
                                                        <del>$65.00</del>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[100%] sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-18px)] xl:w-[calc(25%-18px)]">
                                        <div className="product_layout_1">
                                            <div className="product_layout_content">
                                                <div className="product_image_wrap">
                                                    <Link href='#' className="product_image">
                                                        <img src="/assets/img/product2.png" className="pic-1" alt="" />
                                                        <img src="/assets/img/product3.png" className="pic-2" alt="" />
                                                    </Link>
                                                    <ul className="product_badge_group">
                                                        <li><span className="product_badge badge_meats">Meats</span></li>
                                                        <li><span className="product_badge badge_discount">-27%</span></li>
                                                    </ul>
                                                    <ul className="product_action_btns">
                                                        <li><Link href='#'><FaSearch /></Link></li>
                                                        <li><Link href='#'><FaShoppingBag /></Link></li>
                                                    </ul>
                                                </div>

                                                <div className="rating_wrap ">
                                                    <ul className="rating_star ul_li">
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className=""><FaRegStar /></li>
                                                    </ul>
                                                    <span className="shop_review_text">( 4.0 )</span>
                                                </div>

                                                <div className="product_content">
                                                    <h3 className="product_title">
                                                        <Link href="#">Organic Cabbage</Link>
                                                    </h3>
                                                    <div className="product_price">
                                                        <span className="sale_price pe-1">$50.00</span>
                                                        <del>$65.00</del>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[100%] sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-18px)] xl:w-[calc(25%-18px)]">
                                        <div className="product_layout_1">
                                            <div className="product_layout_content">
                                                <div className="product_image_wrap">
                                                    <Link href='#' className="product_image">
                                                        <img src="/assets/img/product3.png" className="pic-1" alt="" />
                                                        <img src="/assets/img/product4.png" className="pic-2" alt="" />
                                                    </Link>
                                                    <ul className="product_badge_group">
                                                        <li><span className="product_badge badge_meats">Meats</span></li>
                                                        <li><span className="product_badge badge_discount">-27%</span></li>
                                                    </ul>
                                                    <ul className="product_action_btns">
                                                        <li><Link href='#'><FaSearch /></Link></li>
                                                        <li><Link href='#'><FaShoppingBag /></Link></li>
                                                    </ul>
                                                </div>

                                                <div className="rating_wrap ">
                                                    <ul className="rating_star ul_li">
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className=""><FaRegStar /></li>
                                                    </ul>
                                                    <span className="shop_review_text">( 4.0 )</span>
                                                </div>

                                                <div className="product_content">
                                                    <h3 className="product_title">
                                                        <Link href="#">Organic Cabbage</Link>
                                                    </h3>
                                                    <div className="product_price">
                                                        <span className="sale_price pe-1">$50.00</span>
                                                        <del>$65.00</del>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[100%] sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-18px)] xl:w-[calc(25%-18px)]">
                                        <div className="product_layout_1">
                                            <div className="product_layout_content">
                                                <div className="product_image_wrap">
                                                    <Link href='#' className="product_image">
                                                        <img src="/assets/img/product4.png" className="pic-1" alt="" />
                                                        <img src="/assets/img/product5.png" className="pic-2" alt="" />
                                                    </Link>
                                                    <ul className="product_badge_group">
                                                        <li><span className="product_badge badge_meats">Meats</span></li>
                                                        <li><span className="product_badge badge_discount">-27%</span></li>
                                                    </ul>
                                                    <ul className="product_action_btns">
                                                        <li><Link href='#'><FaSearch /></Link></li>
                                                        <li><Link href='#'><FaShoppingBag /></Link></li>
                                                    </ul>
                                                </div>

                                                <div className="rating_wrap ">
                                                    <ul className="rating_star ul_li">
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className=""><FaRegStar /></li>
                                                    </ul>
                                                    <span className="shop_review_text">( 4.0 )</span>
                                                </div>

                                                <div className="product_content">
                                                    <h3 className="product_title">
                                                        <Link href="#">Organic Cabbage</Link>
                                                    </h3>
                                                    <div className="product_price">
                                                        <span className="sale_price pe-1">$50.00</span>
                                                        <del>$65.00</del>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w-[100%] sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-18px)] xl:w-[calc(25%-18px)]">
                                        <div className="product_layout_1">
                                            <div className="product_layout_content">
                                                <div className="product_image_wrap">
                                                    <Link href='#' className="product_image">
                                                        <img src="/assets/img/product5.png" className="pic-1" alt="" />
                                                        <img src="/assets/img/product6.png" className="pic-2" alt="" />
                                                    </Link>
                                                    <ul className="product_badge_group">
                                                        <li><span className="product_badge badge_meats">Meats</span></li>
                                                        <li><span className="product_badge badge_discount">-27%</span></li>
                                                    </ul>
                                                    <ul className="product_action_btns">
                                                        <li><Link href='#'><FaSearch /></Link></li>
                                                        <li><Link href='#'><FaShoppingBag /></Link></li>
                                                    </ul>
                                                </div>

                                                <div className="rating_wrap ">
                                                    <ul className="rating_star ul_li">
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className=""><FaRegStar /></li>
                                                    </ul>
                                                    <span className="shop_review_text">( 4.0 )</span>
                                                </div>

                                                <div className="product_content">
                                                    <h3 className="product_title">
                                                        <Link href="#">Organic Cabbage</Link>
                                                    </h3>
                                                    <div className="product_price">
                                                        <span className="sale_price pe-1">$50.00</span>
                                                        <del>$65.00</del>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[100%] sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-18px)] xl:w-[calc(25%-18px)]">
                                        <div className="product_layout_1">
                                            <div className="product_layout_content">
                                                <div className="product_image_wrap">
                                                    <Link href='#' className="product_image">
                                                        <img src="/assets/img/product6.png" className="pic-1" alt="" />
                                                        <img src="/assets/img/product7.png" className="pic-2" alt="" />
                                                    </Link>
                                                    <ul className="product_badge_group">
                                                        <li><span className="product_badge badge_meats">Meats</span></li>
                                                        <li><span className="product_badge badge_discount">-27%</span></li>
                                                    </ul>
                                                    <ul className="product_action_btns">
                                                        <li><Link href='#'><FaSearch /></Link></li>
                                                        <li><Link href='#'><FaShoppingBag /></Link></li>
                                                    </ul>
                                                </div>

                                                <div className="rating_wrap ">
                                                    <ul className="rating_star ul_li">
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className=""><FaRegStar /></li>
                                                    </ul>
                                                    <span className="shop_review_text">( 4.0 )</span>
                                                </div>

                                                <div className="product_content">
                                                    <h3 className="product_title">
                                                        <Link href="#">Organic Cabbage</Link>
                                                    </h3>
                                                    <div className="product_price">
                                                        <span className="sale_price pe-1">$50.00</span>
                                                        <del>$65.00</del>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[100%] sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-18px)] xl:w-[calc(25%-18px)]">
                                        <div className="product_layout_1">
                                            <div className="product_layout_content">
                                                <div className="product_image_wrap">
                                                    <Link href='#' className="product_image">
                                                        <img src="/assets/img/product7.png" className="pic-1" alt="" />
                                                        <img src="/assets/img/product8.png" className="pic-2" alt="" />
                                                    </Link>
                                                    <ul className="product_badge_group">
                                                        <li><span className="product_badge badge_meats">Meats</span></li>
                                                        <li><span className="product_badge badge_discount">-27%</span></li>
                                                    </ul>
                                                    <ul className="product_action_btns">
                                                        <li><Link href='#'><FaSearch /></Link></li>
                                                        <li><Link href='#'><FaShoppingBag /></Link></li>
                                                    </ul>
                                                </div>

                                                <div className="rating_wrap ">
                                                    <ul className="rating_star ul_li">
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className=""><FaRegStar /></li>
                                                    </ul>
                                                    <span className="shop_review_text">( 4.0 )</span>
                                                </div>

                                                <div className="product_content">
                                                    <h3 className="product_title">
                                                        <Link href="#">Organic Cabbage</Link>
                                                    </h3>
                                                    <div className="product_price">
                                                        <span className="sale_price pe-1">$50.00</span>
                                                        <del>$65.00</del>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[100%] sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-18px)] xl:w-[calc(25%-18px)]">
                                        <div className="product_layout_1">
                                            <div className="product_layout_content">
                                                <div className="product_image_wrap">
                                                    <Link href='#' className="product_image">
                                                        <img src="/assets/img/product8.png" className="pic-1" alt="" />
                                                        <img src="/assets/img/product11.png" className="pic-2" alt="" />
                                                    </Link>
                                                    <ul className="product_badge_group">
                                                        <li><span className="product_badge badge_meats">Meats</span></li>
                                                        <li><span className="product_badge badge_discount">-27%</span></li>
                                                    </ul>
                                                    <ul className="product_action_btns">
                                                        <li><Link href='#'><FaSearch /></Link></li>
                                                        <li><Link href='#'><FaShoppingBag /></Link></li>
                                                    </ul>
                                                </div>

                                                <div className="rating_wrap ">
                                                    <ul className="rating_star ul_li">
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className=""><FaRegStar /></li>
                                                    </ul>
                                                    <span className="shop_review_text">( 4.0 )</span>
                                                </div>

                                                <div className="product_content">
                                                    <h3 className="product_title">
                                                        <Link href="#">Organic Cabbage</Link>
                                                    </h3>
                                                    <div className="product_price">
                                                        <span className="sale_price pe-1">$50.00</span>
                                                        <del>$65.00</del>
                                                    </div>
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
                                                        <img src="/assets/img/product1.png" className="pic-1" alt="" />
                                                        <img src="/assets/img/product2.png" className="pic-2" alt="" />
                                                    </Link>
                                                    <ul className="product_badge_group">
                                                        <li><span className="product_badge badge_meats">Meats</span></li>
                                                        <li><span className="product_badge badge_discount">-27%</span></li>
                                                    </ul>
                                                    <ul className="product_action_btns">
                                                        <li><Link href='#'><FaSearch /></Link></li>
                                                        <li><Link href='#'><FaShoppingBag /></Link></li>
                                                    </ul>
                                                </div>

                                                <div className="rating_wrap ">
                                                    <ul className="rating_star ul_li">
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className=""><FaRegStar /></li>
                                                    </ul>
                                                    <span className="shop_review_text">( 4.0 )</span>
                                                </div>

                                                <div className="product_content">
                                                    <h3 className="product_title">
                                                        <Link href="#">Organic Cabbage</Link>
                                                    </h3>
                                                    <div className="product_price">
                                                        <span className="sale_price pe-1">$50.00</span>
                                                        <del>$65.00</del>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[100%] sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-18px)] xl:w-[calc(25%-18px)]">
                                        <div className="product_layout_1">
                                            <div className="product_layout_content">
                                                <div className="product_image_wrap">
                                                    <Link href='#' className="product_image">
                                                        <img src="/assets/img/product2.png" className="pic-1" alt="" />
                                                        <img src="/assets/img/product3.png" className="pic-2" alt="" />
                                                    </Link>
                                                    <ul className="product_badge_group">
                                                        <li><span className="product_badge badge_meats">Meats</span></li>
                                                        <li><span className="product_badge badge_discount">-27%</span></li>
                                                    </ul>
                                                    <ul className="product_action_btns">
                                                        <li><Link href='#'><FaSearch /></Link></li>
                                                        <li><Link href='#'><FaShoppingBag /></Link></li>
                                                    </ul>
                                                </div>

                                                <div className="rating_wrap ">
                                                    <ul className="rating_star ul_li">
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className=""><FaRegStar /></li>
                                                    </ul>
                                                    <span className="shop_review_text">( 4.0 )</span>
                                                </div>

                                                <div className="product_content">
                                                    <h3 className="product_title">
                                                        <Link href="#">Organic Cabbage</Link>
                                                    </h3>
                                                    <div className="product_price">
                                                        <span className="sale_price pe-1">$50.00</span>
                                                        <del>$65.00</del>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[100%] sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-18px)] xl:w-[calc(25%-18px)]">
                                        <div className="product_layout_1">
                                            <div className="product_layout_content">
                                                <div className="product_image_wrap">
                                                    <Link href='#' className="product_image">
                                                        <img src="/assets/img/product3.png" className="pic-1" alt="" />
                                                        <img src="/assets/img/product4.png" className="pic-2" alt="" />
                                                    </Link>
                                                    <ul className="product_badge_group">
                                                        <li><span className="product_badge badge_meats">Meats</span></li>
                                                        <li><span className="product_badge badge_discount">-27%</span></li>
                                                    </ul>
                                                    <ul className="product_action_btns">
                                                        <li><Link href='#'><FaSearch /></Link></li>
                                                        <li><Link href='#'><FaShoppingBag /></Link></li>
                                                    </ul>
                                                </div>

                                                <div className="rating_wrap ">
                                                    <ul className="rating_star ul_li">
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className=""><FaRegStar /></li>
                                                    </ul>
                                                    <span className="shop_review_text">( 4.0 )</span>
                                                </div>

                                                <div className="product_content">
                                                    <h3 className="product_title">
                                                        <Link href="#">Organic Cabbage</Link>
                                                    </h3>
                                                    <div className="product_price">
                                                        <span className="sale_price pe-1">$50.00</span>
                                                        <del>$65.00</del>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[100%] sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-18px)] xl:w-[calc(25%-18px)]">
                                        <div className="product_layout_1">
                                            <div className="product_layout_content">
                                                <div className="product_image_wrap">
                                                    <Link href='#' className="product_image">
                                                        <img src="/assets/img/product4.png" className="pic-1" alt="" />
                                                        <img src="/assets/img/product5.png" className="pic-2" alt="" />
                                                    </Link>
                                                    <ul className="product_badge_group">
                                                        <li><span className="product_badge badge_meats">Meats</span></li>
                                                        <li><span className="product_badge badge_discount">-27%</span></li>
                                                    </ul>
                                                    <ul className="product_action_btns">
                                                        <li><Link href='#'><FaSearch /></Link></li>
                                                        <li><Link href='#'><FaShoppingBag /></Link></li>
                                                    </ul>
                                                </div>

                                                <div className="rating_wrap ">
                                                    <ul className="rating_star ul_li">
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className=""><FaRegStar /></li>
                                                    </ul>
                                                    <span className="shop_review_text">( 4.0 )</span>
                                                </div>

                                                <div className="product_content">
                                                    <h3 className="product_title">
                                                        <Link href="#">Organic Cabbage</Link>
                                                    </h3>
                                                    <div className="product_price">
                                                        <span className="sale_price pe-1">$50.00</span>
                                                        <del>$65.00</del>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w-[100%] sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-18px)] xl:w-[calc(25%-18px)]">
                                        <div className="product_layout_1">
                                            <div className="product_layout_content">
                                                <div className="product_image_wrap">
                                                    <Link href='#' className="product_image">
                                                        <img src="/assets/img/product5.png" className="pic-1" alt="" />
                                                        <img src="/assets/img/product6.png" className="pic-2" alt="" />
                                                    </Link>
                                                    <ul className="product_badge_group">
                                                        <li><span className="product_badge badge_meats">Meats</span></li>
                                                        <li><span className="product_badge badge_discount">-27%</span></li>
                                                    </ul>
                                                    <ul className="product_action_btns">
                                                        <li><Link href='#'><FaSearch /></Link></li>
                                                        <li><Link href='#'><FaShoppingBag /></Link></li>
                                                    </ul>
                                                </div>

                                                <div className="rating_wrap ">
                                                    <ul className="rating_star ul_li">
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className=""><FaRegStar /></li>
                                                    </ul>
                                                    <span className="shop_review_text">( 4.0 )</span>
                                                </div>

                                                <div className="product_content">
                                                    <h3 className="product_title">
                                                        <Link href="#">Organic Cabbage</Link>
                                                    </h3>
                                                    <div className="product_price">
                                                        <span className="sale_price pe-1">$50.00</span>
                                                        <del>$65.00</del>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[100%] sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-18px)] xl:w-[calc(25%-18px)]">
                                        <div className="product_layout_1">
                                            <div className="product_layout_content">
                                                <div className="product_image_wrap">
                                                    <Link href='#' className="product_image">
                                                        <img src="/assets/img/product6.png" className="pic-1" alt="" />
                                                        <img src="/assets/img/product7.png" className="pic-2" alt="" />
                                                    </Link>
                                                    <ul className="product_badge_group">
                                                        <li><span className="product_badge badge_meats">Meats</span></li>
                                                        <li><span className="product_badge badge_discount">-27%</span></li>
                                                    </ul>
                                                    <ul className="product_action_btns">
                                                        <li><Link href='#'><FaSearch /></Link></li>
                                                        <li><Link href='#'><FaShoppingBag /></Link></li>
                                                    </ul>
                                                </div>

                                                <div className="rating_wrap ">
                                                    <ul className="rating_star ul_li">
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className=""><FaRegStar /></li>
                                                    </ul>
                                                    <span className="shop_review_text">( 4.0 )</span>
                                                </div>

                                                <div className="product_content">
                                                    <h3 className="product_title">
                                                        <Link href="#">Organic Cabbage</Link>
                                                    </h3>
                                                    <div className="product_price">
                                                        <span className="sale_price pe-1">$50.00</span>
                                                        <del>$65.00</del>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[100%] sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-18px)] xl:w-[calc(25%-18px)]">
                                        <div className="product_layout_1">
                                            <div className="product_layout_content">
                                                <div className="product_image_wrap">
                                                    <Link href='#' className="product_image">
                                                        <img src="/assets/img/product7.png" className="pic-1" alt="" />
                                                        <img src="/assets/img/product8.png" className="pic-2" alt="" />
                                                    </Link>
                                                    <ul className="product_badge_group">
                                                        <li><span className="product_badge badge_meats">Meats</span></li>
                                                        <li><span className="product_badge badge_discount">-27%</span></li>
                                                    </ul>
                                                    <ul className="product_action_btns">
                                                        <li><Link href='#'><FaSearch /></Link></li>
                                                        <li><Link href='#'><FaShoppingBag /></Link></li>
                                                    </ul>
                                                </div>

                                                <div className="rating_wrap ">
                                                    <ul className="rating_star ul_li">
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className=""><FaRegStar /></li>
                                                    </ul>
                                                    <span className="shop_review_text">( 4.0 )</span>
                                                </div>

                                                <div className="product_content">
                                                    <h3 className="product_title">
                                                        <Link href="#">Organic Cabbage</Link>
                                                    </h3>
                                                    <div className="product_price">
                                                        <span className="sale_price pe-1">$50.00</span>
                                                        <del>$65.00</del>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[100%] sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-18px)] xl:w-[calc(25%-18px)]">
                                        <div className="product_layout_1">
                                            <div className="product_layout_content">
                                                <div className="product_image_wrap">
                                                    <Link href='#' className="product_image">
                                                        <img src="/assets/img/product8.png" className="pic-1" alt="" />
                                                        <img src="/assets/img/product11.png" className="pic-2" alt="" />
                                                    </Link>
                                                    <ul className="product_badge_group">
                                                        <li><span className="product_badge badge_meats">Meats</span></li>
                                                        <li><span className="product_badge badge_discount">-27%</span></li>
                                                    </ul>
                                                    <ul className="product_action_btns">
                                                        <li><Link href='#'><FaSearch /></Link></li>
                                                        <li><Link href='#'><FaShoppingBag /></Link></li>
                                                    </ul>
                                                </div>

                                                <div className="rating_wrap ">
                                                    <ul className="rating_star ul_li">
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className=""><FaRegStar /></li>
                                                    </ul>
                                                    <span className="shop_review_text">( 4.0 )</span>
                                                </div>

                                                <div className="product_content">
                                                    <h3 className="product_title">
                                                        <Link href="#">Organic Cabbage</Link>
                                                    </h3>
                                                    <div className="product_price">
                                                        <span className="sale_price pe-1">$50.00</span>
                                                        <del>$65.00</del>
                                                    </div>
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