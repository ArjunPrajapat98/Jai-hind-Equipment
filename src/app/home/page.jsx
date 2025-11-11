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
                        <div className="__mainContainer relative">
                            <div className="p-[10px_20px_40px] sm:p-[10px_40px_40px] md:p-[10px_100px_40px] lg:p-[10px_100px_40px]">
                                <div className="quality_top_title text-center">
                                    <h2 className="text-theme-3xl lg:text-theme-4xl mb-[.5rem] philosopher-bold theme-text-primary">Watch Product Videos</h2>
                                </div>
                            </div>

                            <OwlCarousel responsive={youTubeSlides} className="youTubeSlider"
                                loop
                                dots={true}
                                nav={false}
                                autoplay>
                                {constant.youTubeUrls?.map((item, index) => {
                                    return (
                                        <div className="owlItems" key={index}>
                                            <div className="w-full">
                                                <YouTubeEmbed videoId={item.videoId} />
                                            </div>
                                        </div>
                                    )
                                })}
                            </OwlCarousel>

                            <div className="mt-5">
                                <div className="text-center">
                                    <Link href='/video' className="inline-block cursor-pointer">
                                        <button className='custom_btn theme-font-primary'>
                                            View All Videos
                                            <span className="__lgArrow_icon"> <FaLongArrowAltRight /></span>
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
                                        <div className="flex theme-primary items-center justify-center lg:justify-start">
                                            <span className="text-theme-xs p-[0rem_0.1rem]"><FaRegCircle /></span>
                                            <span className="text-theme-xs p-[0rem_0.1rem]"><FaRegCircle /></span>
                                            <span className="text-theme-xs p-[0rem_0.1rem]"><FaRegCircle /></span>
                                        </div>
                                        <h2 className="text-theme-2xl lg:text-theme-4xl my-[.5rem] philosopher-bold leading-normal lg:leading-14 text-center lg:text-left theme-text-primary">Products Categories</h2>

                                        <div className="prdc_ctg_desc py-2">
                                            <p className="theme-text-muted theme-font-primary">Explore all-in-one farming solutions - Rotavators, Seed Drills, Harrows, Weeders and Sprayers — built to make farming smarter and easier.</p>
                                        </div>
                                    </div>

                                    {freshCategory.map((topic) => (
                                        <Tab key={topic.name}>
                                            <button className="theme-font-primary">
                                                <div className="flex justify-center items-center">
                                                    <div className="prdc_ctg_icon">
                                                        <img src={topic.image} alt={topic.name} className="" />
                                                    </div>
                                                    <div className="prdc_ctg_icon_title">
                                                        <h5 className="theme-text-secondary">{topic.name}</h5>
                                                    </div>
                                                </div>

                                                <div className="prdc_ctg_icon_num">
                                                    <span className="theme-text-muted">{topic.count}</span>
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
                                                                <span className="theme-font-primary theme-text-primary"> 3 - 4 feet widths </span>
                                                            </div>
                                                            <div className="rating_wrap">
                                                                <span className="shop_review_text theme-font-primary theme-text-muted">15 - 30 HP tractors</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title theme-font-heading">
                                                                    <Link href="#" className="theme-text-secondary">Mini Rotavator</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1 theme-font-primary theme-text-secondary"> View Price (₹)</span>
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
                                                                <span className="theme-font-primary theme-text-primary"> 5 - 6 feet widths </span>
                                                            </div>
                                                            <div className="rating_wrap">
                                                                <span className="shop_review_text theme-font-primary theme-text-muted">35 - 50 HP tractors</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title theme-font-heading">
                                                                    <Link href="#" className="theme-text-secondary">Standard Rotavator</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1 theme-font-primary theme-text-secondary"> View Price (₹)</span>
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
                                                                <span className="theme-font-primary theme-text-primary"> 6 - 8 ft widths </span>
                                                            </div>
                                                            <div className="rating_wrap">
                                                                <span className="shop_review_text theme-font-primary theme-text-muted">70-75 HP tractors</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title theme-font-heading">
                                                                    <Link href="#" className="theme-text-secondary">Heavy Rotavator</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1 theme-font-primary theme-text-secondary"> View Price (₹)</span>
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
                                                                <span className="theme-font-primary theme-text-primary"> 7 - 8 feet widths </span>
                                                            </div>
                                                            <div className="rating_wrap">
                                                                <span className="shop_review_text theme-font-primary theme-text-muted">45-60 HP tractors</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title theme-font-heading">
                                                                    <Link href="#" className="theme-text-secondary">Seeder Rotavator</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1 theme-font-primary theme-text-secondary"> View Price (₹)</span>
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
                                                                <span className="theme-font-primary theme-text-primary"> 6 - 9 feet widths </span>
                                                            </div>
                                                            <div className="rating_wrap">
                                                                <span className="shop_review_text theme-font-primary theme-text-muted">70 - 120 HP tractors</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title theme-font-heading">
                                                                    <Link href="#" className="theme-text-secondary">Harrow Rotavator</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1 theme-font-primary theme-text-secondary"> View Price (₹)</span>
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
                                                                <span className="theme-font-primary theme-text-primary"> 6 - 8 feet widths </span>
                                                            </div>
                                                            <div className="rating_wrap">
                                                                <span className="shop_review_text theme-font-primary theme-text-muted">45 - 65 HP tractors</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title theme-font-heading">
                                                                    <Link href="#" className="theme-text-secondary">Reversible Rotavator</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1 theme-font-primary theme-text-secondary"> View Price (₹)</span>
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
                                                                <span className="theme-font-primary theme-text-primary"> Breaking up tough soil </span>
                                                            </div>
                                                            <div className="rating_wrap">
                                                                <span className="shop_review_text theme-font-primary theme-text-muted">30 - 60 HP tractors</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title theme-font-heading">
                                                                    <Link href="#" className="theme-text-secondary">Rigid Tyne Cultivator</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1 theme-font-primary theme-text-secondary"> View Price (₹)</span>
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
                                                                <span className="theme-font-primary theme-text-primary"> Uneven fields, Stony soils </span>
                                                            </div>
                                                            <div className="rating_wrap">
                                                                <span className="shop_review_text theme-font-primary theme-text-muted">40 - 75 HP tractors</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title theme-font-heading">
                                                                    <Link href="#" className="theme-text-secondary">Spring Cultivator</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1 theme-font-primary theme-text-secondary"> View Price (₹)</span>
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
                                                                <span className="theme-font-primary theme-text-primary"> Breaking up tough soil </span>
                                                            </div>
                                                            <div className="rating_wrap">
                                                                <span className="shop_review_text theme-font-primary theme-text-muted">30 - 90 HP tractors</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title theme-font-heading">
                                                                    <Link href="#" className="theme-text-secondary">Trailed Cultivator</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1 theme-font-primary theme-text-secondary"> View Price (₹)</span>
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
                                                                <span className="theme-font-primary theme-text-primary"> Breaking up tough soil </span>
                                                            </div>
                                                            <div className="rating_wrap">
                                                                <span className="shop_review_text theme-font-primary theme-text-muted">30 - 60 HP tractors</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title theme-font-heading">
                                                                    <Link href="#" className="theme-text-secondary">Mounted Cultivator</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1 theme-font-primary theme-text-secondary"> View Price (₹)</span>
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
                                                                <span className="theme-font-primary theme-text-primary"> Shallow tillage, light soils </span>
                                                            </div>
                                                            <div className="rating_wrap">
                                                                <span className="shop_review_text theme-font-primary theme-text-muted">Deep tillage models</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title theme-font-heading">
                                                                    <Link href="#" className="theme-text-secondary">Sweep Cultivator</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1 theme-font-primary theme-text-secondary"> View Price (₹)</span>
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
                                                                <span className="theme-font-primary theme-text-primary"> Hard, compacted soils </span>
                                                            </div>
                                                            <div className="rating_wrap">
                                                                <span className="shop_review_text theme-font-primary theme-text-muted"> Higher HP </span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title theme-font-heading">
                                                                    <Link href="#" className="theme-text-secondary">Disc Cultivator</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1 theme-font-primary theme-text-secondary"> View Price (₹)</span>
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
                                                                <span className="theme-font-primary theme-text-primary"> Hard / Medium soil </span>
                                                            </div>
                                                            <div className="rating_wrap">
                                                                <span className="shop_review_text theme-font-primary theme-text-muted">25 - 60 HP tractors</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title theme-font-heading">
                                                                    <Link href="#" className="theme-text-secondary">Mould Board Plough</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1 theme-font-primary theme-text-secondary"> View Price (₹)</span>
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
                                                                <span className="theme-font-primary theme-text-primary"> Black cotton / Rocky </span>
                                                            </div>
                                                            <div className="rating_wrap">
                                                                <span className="shop_review_text theme-font-primary theme-text-muted">75 - 60 HP tractors</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title theme-font-heading">
                                                                    <Link href="#" className="theme-text-secondary">Disc Plough</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1 theme-font-primary theme-text-secondary"> View Price (₹)</span>
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
                                                                <span className="theme-font-primary theme-text-primary"> All soils </span>
                                                            </div>
                                                            <div className="rating_wrap">
                                                                <span className="shop_review_text theme-font-primary theme-text-muted">40 - 90 HP tractors</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title theme-font-heading">
                                                                    <Link href="#" className="theme-text-secondary">Reversible Plough</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1 theme-font-primary theme-text-secondary"> View Price (₹)</span>
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
                                                                <span className="theme-font-primary theme-text-primary"> Dry & compact soil </span>
                                                            </div>
                                                            <div className="rating_wrap">
                                                                <span className="shop_review_text theme-font-primary theme-text-muted">45 - 90 HP tractors</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title theme-font-heading">
                                                                    <Link href="#" className="theme-text-secondary">Chisel / Subsoiler</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1 theme-font-primary theme-text-secondary"> View Price (₹)</span>
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
                                                                <span className="theme-font-primary theme-text-primary"> Loose to medium soil </span>
                                                            </div>
                                                            <div className="rating_wrap">
                                                                <span className="shop_review_text theme-font-primary theme-text-muted">25 - 60 HP tractors</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title theme-font-heading">
                                                                    <Link href="#" className="theme-text-secondary">Rotary / Power Plough</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1 theme-font-primary theme-text-secondary"> View Price (₹)</span>
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
                                                                <span className="theme-font-primary theme-text-primary"> Soft soil </span>
                                                            </div>
                                                            <div className="rating_wrap">
                                                                <span className="shop_review_text theme-font-primary theme-text-muted">No tractor</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title theme-font-heading">
                                                                    <Link href="#" className="theme-text-secondary">Bullock Plough</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1 theme-font-primary theme-text-secondary"> View Price (₹)</span>
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
                                                                <span className="theme-font-primary theme-text-primary"> Row Spacing : 20 - 25 cm </span>
                                                            </div>
                                                            <div className="rating_wrap">
                                                                <span className="shop_review_text theme-font-primary theme-text-muted">25 - 55 HP tractors</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title theme-font-heading">
                                                                    <Link href="#" className="theme-text-secondary">Seed Cum Fertilizer</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1 theme-font-primary theme-text-secondary"> View Price (₹)</span>
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
                                                                <span className="theme-font-primary theme-text-primary"> Row Spacing : 20 - 22 cm </span>
                                                            </div>
                                                            <div className="rating_wrap">
                                                                <span className="shop_review_text theme-font-primary theme-text-muted">35 - 65 HP tractors</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title theme-font-heading">
                                                                    <Link href="#" className="theme-text-secondary">Zero Tillage Drill</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1 theme-font-primary theme-text-secondary"> View Price (₹)</span>
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
                                                                <span className="theme-font-primary theme-text-primary"> Row Spacing : Adjustable </span>
                                                            </div>
                                                            <div className="rating_wrap">
                                                                <span className="shop_review_text theme-font-primary theme-text-muted">45 - 75 HP tractors</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title theme-font-heading">
                                                                    <Link href="#" className="theme-text-secondary">Super Seeder Combo</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1 theme-font-primary theme-text-secondary"> View Price (₹)</span>
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
                                                                <span className="theme-font-primary theme-text-primary"> Row Spacing : 20 - 22 cm  </span>
                                                            </div>
                                                            <div className="rating_wrap">
                                                                <span className="shop_review_text theme-font-primary theme-text-muted">50 - 75 HP tractors</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title theme-font-heading">
                                                                    <Link href="#" className="theme-text-secondary">Happy Seeder</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1 theme-font-primary theme-text-secondary"> View Price (₹)</span>
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
                                                                <span className="theme-font-primary theme-text-primary"> Row Spacing : 20 - 25 cm </span>
                                                            </div>
                                                            <div className="rating_wrap">
                                                                <span className="shop_review_text theme-font-primary theme-text-muted">70 - 120 HP tractors</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title theme-font-heading">
                                                                    <Link href="#" className="theme-text-secondary">Disc Seed Cum Drill</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1 theme-font-primary theme-text-secondary"> View Price (₹)</span>
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
                                                                <span className="theme-font-primary theme-text-primary"> Row Spacing : 20 - 22 cm </span>
                                                            </div>
                                                            <div className="rating_wrap">
                                                                <span className="shop_review_text theme-font-primary theme-text-muted">45 - 65 HP tractors</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title theme-font-heading">
                                                                    <Link href="#" className="theme-text-secondary">Multi-Crop Seed Cum</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1 theme-font-primary theme-text-secondary"> View Price (₹)</span>
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
                                                                <span className="theme-font-primary theme-text-primary"> No. of Discs 12-36 </span>
                                                            </div>
                                                            <div className="rating_wrap">
                                                                <span className="shop_review_text theme-font-primary theme-text-muted">25 - 75 HP tractors</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title theme-font-heading">
                                                                    <Link href="#" className="theme-text-secondary">Trailed Disc Harrow</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1 theme-font-primary theme-text-secondary"> View Price (₹)</span>
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
                                                                <span className="theme-font-primary theme-text-primary"> No. of Discs 12-24 </span>
                                                            </div>
                                                            <div className="rating_wrap">
                                                                <span className="shop_review_text theme-font-primary theme-text-muted">30 - 60 HP tractors</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title theme-font-heading">
                                                                    <Link href="#" className="theme-text-secondary">Mounted (3-Point Linkage) Disc</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1 theme-font-primary theme-text-secondary"> View Price (₹)</span>
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
                                                                <span className="theme-font-primary theme-text-primary"> No. of Discs 12-28 </span>
                                                            </div>
                                                            <div className="rating_wrap">
                                                                <span className="shop_review_text theme-font-primary theme-text-muted">40 - 110 HP tractors</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title theme-font-heading">
                                                                    <Link href="#" className="theme-text-secondary">Offset Disc Harrow</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1 theme-font-primary theme-text-secondary"> View Price (₹)</span>
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
                                                                <span className="theme-font-primary theme-text-primary"> No. of Discs 16-36 </span>
                                                            </div>
                                                            <div className="rating_wrap">
                                                                <span className="shop_review_text theme-font-primary theme-text-muted">45 - 120 HP tractors</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title theme-font-heading">
                                                                    <Link href="#" className="theme-text-secondary">Tandem Disc Harrow</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1 theme-font-primary theme-text-secondary"> View Price (₹)</span>
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
                                                                <span className="theme-font-primary theme-text-primary"> No. of Discs 16-40 </span>
                                                            </div>
                                                            <div className="rating_wrap">
                                                                <span className="shop_review_text theme-font-primary theme-text-muted">70 - 150 HP tractors</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title theme-font-heading">
                                                                    <Link href="#" className="theme-text-secondary">Trailed Disc Harrow</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1 theme-font-primary theme-text-secondary"> View Price (₹)</span>
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
                                                                <span className="theme-font-primary theme-text-primary"> No. of Discs 24-48 </span>
                                                            </div>
                                                            <div className="rating_wrap">
                                                                <span className="shop_review_text theme-font-primary theme-text-muted">80 - 150+ HP tractors</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title theme-font-heading">
                                                                    <Link href="#" className="theme-text-secondary">Hydraulic Foldable</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1 theme-font-primary theme-text-secondary"> View Price (₹)</span>
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
                                                                <span className="theme-font-primary theme-text-primary"> Capacity 200 - 1200 Ltr </span>
                                                            </div>
                                                            <div className="rating_wrap">
                                                                <span className="shop_review_text theme-font-primary theme-text-muted">Boom Length 10 - 20 Meters</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title theme-font-heading">
                                                                    <Link href="#" className="theme-text-secondary">Mounted Sprayer</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1 theme-font-primary theme-text-secondary"> View Price (₹)</span>
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
                                                                <span className="theme-font-primary theme-text-primary"> Capacity 500 - 3000 Ltr </span>
                                                            </div>
                                                            <div className="rating_wrap">
                                                                <span className="shop_review_text theme-font-primary theme-text-muted">Boom Length 12 - 24 Meters</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title theme-font-heading">
                                                                    <Link href="#" className="theme-text-secondary">Trailed Sprayer</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1 theme-font-primary theme-text-secondary"> View Price (₹)</span>
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
                                                                <span className="theme-font-primary theme-text-primary"> Capacity 500 - 2000 Ltr </span>
                                                            </div>
                                                            <div className="rating_wrap">
                                                                <span className="shop_review_text theme-font-primary theme-text-muted">Boom Length 12 - 30 Meters</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title theme-font-heading">
                                                                    <Link href="#" className="theme-text-secondary">Self Propelled Sprayer</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1 theme-font-primary theme-text-secondary"> View Price (₹)</span>
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
                                                                <span className="theme-font-primary theme-text-primary"> Capacity 200 - 1200 Ltr </span>
                                                            </div>
                                                            <div className="rating_wrap">
                                                                <span className="shop_review_text theme-font-primary theme-text-muted">Boom Length 10 - 20 Meters</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title theme-font-heading">
                                                                    <Link href="#" className="theme-text-secondary">Tractor Sprayer</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1 theme-font-primary theme-text-secondary"> View Price (₹)</span>
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
                                                                <span className="theme-font-primary theme-text-primary"> Capacity 200 - 1200 Ltr </span>
                                                            </div>
                                                            <div className="rating_wrap">
                                                                <span className="shop_review_text theme-font-primary theme-text-muted">Boom Length 10 - 20 Meters</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title theme-font-heading">
                                                                    <Link href="#" className="theme-text-secondary">Mounted Boom</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1 theme-font-primary theme-text-secondary"> View Price (₹)</span>
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
                                                                <span className="theme-font-primary theme-text-primary"> Capacity 200 - 1200 Ltr </span>
                                                            </div>
                                                            <div className="rating_wrap">
                                                                <span className="shop_review_text theme-font-primary theme-text-muted">Boom Length 10 - 20 Meters</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title theme-font-heading">
                                                                    <Link href="#" className="theme-text-secondary">Propelled Boom</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1 theme-font-primary theme-text-secondary"> View Price (₹)</span>
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
                                                                <span className="theme-font-primary theme-text-primary"> 5 to 8 Feet </span>
                                                            </div>
                                                            <div className="rating_wrap">
                                                                <span className="shop_review_text theme-font-primary theme-text-muted">25 - 60 HP tractors</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title theme-font-heading">
                                                                    <Link href="#" className="theme-text-secondary">Reversible Land Leveler</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1 theme-font-primary theme-text-secondary"> View Price (₹)</span>
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
                                                                <span className="theme-font-primary theme-text-primary"> 6 to 9 Feet </span>
                                                            </div>
                                                            <div className="rating_wrap">
                                                                <span className="shop_review_text theme-font-primary theme-text-muted">35 - 75 HP tractors</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title theme-font-heading">
                                                                    <Link href="#" className="theme-text-secondary">Heavy Duty Box Land Leveler</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1 theme-font-primary theme-text-secondary"> View Price (₹)</span>
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
                                                                <span className="theme-font-primary theme-text-primary"> 6 to 12 Feet </span>
                                                            </div>
                                                            <div className="rating_wrap">
                                                                <span className="shop_review_text theme-font-primary theme-text-muted">50 - 90 HP tractors</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title theme-font-heading">
                                                                    <Link href="#" className="theme-text-secondary">Laser Guided Land Leveler</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1 theme-font-primary theme-text-secondary"> View Price (₹)</span>
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
                                                                <span className="theme-font-primary theme-text-primary"> 6 to 10 Feet </span>
                                                            </div>
                                                            <div className="rating_wrap">
                                                                <span className="shop_review_text theme-font-primary theme-text-muted">40 - 90 HP tractors</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title theme-font-heading">
                                                                    <Link href="#" className="theme-text-secondary">Hydraulic Land Leveler</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1 theme-font-primary theme-text-secondary"> View Price (₹)</span>
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
                                                                <span className="theme-font-primary theme-text-primary"> 5 to 9 Feet </span>
                                                            </div>
                                                            <div className="rating_wrap">
                                                                <span className="shop_review_text theme-font-primary theme-text-muted">30 - 80 HP tractors</span>
                                                            </div>
                                                            <div className="product_content">
                                                                <h3 className="product_title theme-font-heading">
                                                                    <Link href="#" className="theme-text-secondary">Scraper Land Leveler</Link>
                                                                </h3>
                                                                <div className="product_price">
                                                                    <span className="sale_price pe-1 theme-font-primary theme-text-secondary"> View Price (₹)</span>
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
                            <div className="flex theme-primary items-center justify-center lg:justify-start">
                                <span className="text-theme-xs p-[0rem_0.1rem]"><FaRegCircle /></span>
                                <span className="text-theme-xs p-[0rem_0.1rem]"><FaRegCircle /></span>
                                <span className="text-theme-xs p-[0rem_0.1rem]"><FaRegCircle /></span>
                            </div>
                            <h2 className="text-theme-2xl lg:text-theme-4xl font-bold mb-[.5rem] philosopher-bold text-center lg:text-left theme-text-primary">Our Services</h2>
                        </div>
                        <CommonTabs
                            classNameDyn="__commonTabBx __productFilts"
                            buttons={
                                <>
                                    {topics.map((topic) => (
                                        <Tab key={topic}>
                                            <button className="theme-font-primary">{topic.charAt(0).toUpperCase() + topic.slice(1)}</button>
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
                                                        <li><span className="product_badge badge_meats theme-font-primary theme-text-primary">3 - 4 feet widths</span></li>
                                                        <li><span className="product_badge badge_discount theme-font-primary theme-text-primary">15-30 HP</span></li>
                                                    </ul>
                                                </div>

                                                <div className="rating_wrap">
                                                    <ul className="rating_star ul_li">
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                    </ul>
                                                    <span className="shop_review_text theme-font-primary theme-text-muted">( 5.0 )</span>
                                                </div>

                                                <div className="product_content">
                                                    <h3 className="product_title theme-font-heading">
                                                        <Link href="#" className="theme-text-secondary">Rotavator</Link>
                                                    </h3>
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
                                                        <li><span className="product_badge badge_meats theme-font-primary theme-text-primary">Breaking up tough soil</span></li>
                                                        <li><span className="product_badge badge_discount theme-font-primary theme-text-primary">30-90 HP</span></li>
                                                    </ul>
                                                </div>

                                                <div className="rating_wrap">
                                                    <ul className="rating_star ul_li">
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                    </ul>
                                                    <span className="shop_review_text theme-font-primary theme-text-muted">( 5.0 )</span>
                                                </div>

                                                <div className="product_content">
                                                    <h3 className="product_title theme-font-heading">
                                                        <Link href="#" className="theme-text-secondary">Cultivator</Link>
                                                    </h3>
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
                                                        <li><span className="product_badge badge_meats theme-font-primary theme-text-primary"> All type soil</span></li>
                                                        <li><span className="product_badge badge_discount theme-font-primary theme-text-primary">40-90 HP</span></li>
                                                    </ul>
                                                </div>

                                                <div className="rating_wrap">
                                                    <ul className="rating_star ul_li">
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                    </ul>
                                                    <span className="shop_review_text theme-font-primary theme-text-muted">( 5.0 )</span>
                                                </div>

                                                <div className="product_content">
                                                    <h3 className="product_title theme-font-heading">
                                                        <Link href="#" className="theme-text-secondary">Plough</Link>
                                                    </h3>
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
                                                        <li><span className="product_badge badge_meats theme-font-primary theme-text-primary"> Row spacing 20-25 cm</span></li>
                                                        <li><span className="product_badge badge_discount theme-font-primary theme-text-primary">25-55 HP</span></li>
                                                    </ul>
                                                </div>

                                                <div className="rating_wrap">
                                                    <ul className="rating_star ul_li">
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                    </ul>
                                                    <span className="shop_review_text theme-font-primary theme-text-muted">( 5.0 )</span>
                                                </div>

                                                <div className="product_content">
                                                    <h3 className="product_title theme-font-heading">
                                                        <Link href="#" className="theme-text-secondary">Seed Fertilizer Drill</Link>
                                                    </h3>
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
                                                        <li><span className="product_badge badge_meats theme-font-primary theme-text-primary">5 - 8 feet widths</span></li>
                                                        <li><span className="product_badge badge_discount theme-font-primary theme-text-primary">25-60 HP</span></li>
                                                    </ul>
                                                </div>

                                                <div className="rating_wrap">
                                                    <ul className="rating_star ul_li">
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                    </ul>
                                                    <span className="shop_review_text theme-font-primary theme-text-muted">( 5.0 )</span>
                                                </div>

                                                <div className="product_content">
                                                    <h3 className="product_title theme-font-heading">
                                                        <Link href="#" className="theme-text-secondary">Reversible Leveler</Link>
                                                    </h3>
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
                                                        <li><span className="product_badge badge_meats theme-font-primary theme-text-primary">No.of disc 16-36</span></li>
                                                        <li><span className="product_badge badge_discount theme-font-primary theme-text-primary">45-120 HP</span></li>
                                                    </ul>
                                                </div>

                                                <div className="rating_wrap">
                                                    <ul className="rating_star ul_li">
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                    </ul>
                                                    <span className="shop_review_text theme-font-primary theme-text-muted">( 5.0 )</span>
                                                </div>

                                                <div className="product_content">
                                                    <h3 className="product_title theme-font-heading">
                                                        <Link href="#" className="theme-text-secondary">Tandem Disc Harrow</Link>
                                                    </h3>
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
                                                        <li><span className="product_badge badge_meats theme-font-primary theme-text-primary">5 - 6 feet widths</span></li>
                                                        <li><span className="product_badge badge_discount theme-font-primary theme-text-primary">35-50 HP</span></li>
                                                    </ul>
                                                </div>

                                                <div className="rating_wrap">
                                                    <ul className="rating_star ul_li">
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                    </ul>
                                                    <span className="shop_review_text theme-font-primary theme-text-muted">( 5.0 )</span>
                                                </div>

                                                <div className="product_content">
                                                    <h3 className="product_title theme-font-heading">
                                                        <Link href="#" className="theme-text-secondary">Standard Rotavator</Link>
                                                    </h3>
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
                                                        <li><span className="product_badge badge_meats theme-font-primary theme-text-primary">No.of disc 24 - 28</span></li>
                                                        <li><span className="product_badge badge_discount theme-font-primary theme-text-primary">80-150+ HP</span></li>
                                                    </ul>
                                                </div>

                                                <div className="rating_wrap">
                                                    <ul className="rating_star ul_li">
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                    </ul>
                                                    <span className="shop_review_text theme-font-primary theme-text-muted">( 5.0 )</span>
                                                </div>

                                                <div className="product_content">
                                                    <h3 className="product_title theme-font-heading">
                                                        <Link href="#" className="theme-text-secondary">Hydraulic Foldable</Link>
                                                    </h3>
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
                                                        <li><span className="product_badge badge_meats theme-font-primary theme-text-primary">No.of disc 24 - 28</span></li>
                                                        <li><span className="product_badge badge_discount theme-font-primary theme-text-primary">80-150+ HP</span></li>
                                                    </ul>
                                                </div>

                                                <div className="rating_wrap">
                                                    <ul className="rating_star ul_li">
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                    </ul>
                                                    <span className="shop_review_text theme-font-primary theme-text-muted">( 5.0 )</span>
                                                </div>

                                                <div className="product_content">
                                                    <h3 className="product_title theme-font-heading">
                                                        <Link href="#" className="theme-text-secondary">Hydraulic Foldable</Link>
                                                    </h3>
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
                                                        <li><span className="product_badge badge_meats theme-font-primary theme-text-primary">No.of disc 16-36</span></li>
                                                        <li><span className="product_badge badge_discount theme-font-primary theme-text-primary">45-120 HP</span></li>
                                                    </ul>
                                                </div>

                                                <div className="rating_wrap">
                                                    <ul className="rating_star ul_li">
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                    </ul>
                                                    <span className="shop_review_text theme-font-primary theme-text-muted">( 5.0 )</span>
                                                </div>

                                                <div className="product_content">
                                                    <h3 className="product_title theme-font-heading">
                                                        <Link href="#" className="theme-text-secondary">Tandem Disc Harrow</Link>
                                                    </h3>
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
                                                        <li><span className="product_badge badge_meats theme-font-primary theme-text-primary">5 - 8 feet widths</span></li>
                                                        <li><span className="product_badge badge_discount theme-font-primary theme-text-primary">25-60 HP</span></li>
                                                    </ul>
                                                </div>

                                                <div className="rating_wrap">
                                                    <ul className="rating_star ul_li">
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                    </ul>
                                                    <span className="shop_review_text theme-font-primary theme-text-muted">( 5.0 )</span>
                                                </div>

                                                <div className="product_content">
                                                    <h3 className="product_title theme-font-heading">
                                                        <Link href="#" className="theme-text-secondary">Reversible Leveler</Link>
                                                    </h3>
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
                                                        <li><span className="product_badge badge_meats theme-font-primary theme-text-primary">5 - 6 feet widths</span></li>
                                                        <li><span className="product_badge badge_discount theme-font-primary theme-text-primary">35-50 HP</span></li>
                                                    </ul>
                                                </div>

                                                <div className="rating_wrap">
                                                    <ul className="rating_star ul_li">
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                    </ul>
                                                    <span className="shop_review_text theme-font-primary theme-text-muted">( 5.0 )</span>
                                                </div>

                                                <div className="product_content">
                                                    <h3 className="product_title theme-font-heading">
                                                        <Link href="#" className="theme-text-secondary">Standard Rotavator</Link>
                                                    </h3>
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
                                                        <li><span className="product_badge badge_meats theme-font-primary theme-text-primary">Breaking up tough soil</span></li>
                                                        <li><span className="product_badge badge_discount theme-font-primary theme-text-primary">30-90 HP</span></li>
                                                    </ul>
                                                </div>

                                                <div className="rating_wrap">
                                                    <ul className="rating_star ul_li">
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                    </ul>
                                                    <span className="shop_review_text theme-font-primary theme-text-muted">( 5.0 )</span>
                                                </div>

                                                <div className="product_content">
                                                    <h3 className="product_title theme-font-heading">
                                                        <Link href="#" className="theme-text-secondary">Cultivator</Link>
                                                    </h3>
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
                                                        <li><span className="product_badge badge_meats theme-font-primary theme-text-primary">3 - 4 feet widths</span></li>
                                                        <li><span className="product_badge badge_discount theme-font-primary theme-text-primary">15-30 HP</span></li>
                                                    </ul>
                                                </div>

                                                <div className="rating_wrap">
                                                    <ul className="rating_star ul_li">
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                    </ul>
                                                    <span className="shop_review_text theme-font-primary theme-text-muted">( 5.0 )</span>
                                                </div>

                                                <div className="product_content">
                                                    <h3 className="product_title theme-font-heading">
                                                        <Link href="#" className="theme-text-secondary">Rotavator</Link>
                                                    </h3>
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
                                                        <li><span className="product_badge badge_meats theme-font-primary theme-text-primary"> Row spacing 20-25 cm</span></li>
                                                        <li><span className="product_badge badge_discount theme-font-primary theme-text-primary">25-55 HP</span></li>
                                                    </ul>
                                                </div>

                                                <div className="rating_wrap">
                                                    <ul className="rating_star ul_li">
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                    </ul>
                                                    <span className="shop_review_text theme-font-primary theme-text-muted">( 5.0 )</span>
                                                </div>

                                                <div className="product_content">
                                                    <h3 className="product_title theme-font-heading">
                                                        <Link href="#" className="theme-text-secondary">Seed Fertilizer Drill</Link>
                                                    </h3>
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
                                                        <li><span className="product_badge badge_meats theme-font-primary theme-text-primary"> All type soil</span></li>
                                                        <li><span className="product_badge badge_discount theme-font-primary theme-text-primary">40-90 HP</span></li>
                                                    </ul>
                                                </div>

                                                <div className="rating_wrap">
                                                    <ul className="rating_star ul_li">
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                        <li className="active"><FaStar /></li>
                                                    </ul>
                                                    <span className="shop_review_text theme-font-primary theme-text-muted">( 5.0 )</span>
                                                </div>

                                                <div className="product_content">
                                                    <h3 className="product_title theme-font-heading">
                                                        <Link href="#" className="theme-text-secondary">Plough</Link>
                                                    </h3>
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
                <div class="enquiry_now">
                    <p className="flex btn">
                        <p
                            href="#"
                            class="playbtn relative inline-block px-4 py-2 text-white overflow-hidden transition duration-500 hover:bg-white hover:text-black hover:shadow-[0_0_5px_#fff,0_0_25px_#fff,0_0_50px_#fff,0_0_200px_#fff]"
                        >
                            Enquiry Now
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </p>
                    </p>
                </div>

            </Link>
        </>
    )
}

export default Home