"use client";
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useMenu } from '../MenuProvider';
import { FaWhatsapp } from 'react-icons/fa';
import { usePathname } from 'next/navigation';

const Header = () => {
    const { isOpen, setIsOpen } = useMenu();
    const [activeSection, setActiveSection] = useState("home");
    const pathname = usePathname();

    useEffect(() => {
        const sections = document.querySelectorAll("section[id]");
        const handleScroll = () => {
            let current = "home";
            sections.forEach((section) => {
                const sectionTop = section.offsetTop - 100;
                if (window.scrollY >= sectionTop) {
                    current = section.getAttribute("id");
                }
            });
            setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleLinkClick = (e, id) => {
        e.preventDefault();
        const section = document.querySelector(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
            setActiveSection(id.replace("#", ""));
            setIsOpen(false);
        }
    };

    return (
        <>
            <header className="__stickedHeader">
                <div className="__mainContainer flex items-center justify-between py-3 min-h-[65px]">
                    <a href='/'>
                        <span className="text-lg font-semibold text-[#0066ff]">
                            Jai Hind Equipment
                        </span>
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <ul className="flex">
                            <li className="px-1 lg:px-2">
                                <Link
                                    href="/"
                                    onClick={(e) => handleLinkClick(e, "#home")}
                                    className={`__navLinks ${activeSection === "home" ? "text-[#62a403]" : ""
                                        }`}
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="px-1 lg:px-2">
                                <Link
                                    href="/"
                                    onClick={(e) => handleLinkClick(e, "#ourProduct")}
                                    className={`__navLinks ${activeSection === "ourProduct" ? "text-[#62a403]" : ""
                                        }`}
                                >
                                    Products
                                </Link>
                            </li>
                            <li className="px-1 lg:px-2">
                                <Link
                                    href="/"
                                    onClick={(e) => handleLinkClick(e, "#ourService")}
                                    className={`__navLinks ${activeSection === "ourService" ? "text-[#62a403]" : ""
                                        }`}
                                >
                                    Services
                                </Link>
                            </li>
                            {/* <li className="px-1 lg:px-2">
                                <Link
                                    href="/about"
                                    className={`__navLinks ${pathname === "/about" ? "text-[#62a403]" : ""
                                        }`}
                                >
                                    About Us
                                </Link>
                            </li>
                            <li className="px-1 lg:px-2">
                                <Link
                                    href="/contacts"
                                    className={`__navLinks ${pathname === "/contacts" ? "text-[#62a403]" : ""
                                        }`}
                                >
                                    Enquiry
                                </Link>
                            </li> */}
                        </ul>
                    </div>

                    {/* WhatsApp / Call */}
                    <div className="hidden md:block">
                        <Link href="tel:8305033403" className="flex items-center gap-1">
                            <span className="text-[#25D366] text-lg flex mb-0.5">
                                <FaWhatsapp />
                            </span>
                            <span className="text-base leading-4">8305033403</span>
                        </Link>
                    </div>

                    {/* Mobile Menu */}
                    <div className="block md:hidden">
                        <div
                            className="hamburger-icon"
                            id="icon"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <div className="icon-1" id="a"></div>
                            <div className="icon-2" id="b"></div>
                            <div className="icon-3" id="c"></div>
                            <div className="clear"></div>
                        </div>

                        {isOpen && (
                            <div className="__mainMenu">
                                <ul className="_otrMenu_bx">
                                    <div className="absolute h-full flex md:hidden">
                                        <div className="__menuBlur"></div>
                                    </div>
                                    <div className="md:hidden mb-5">
                                        <span className="text-lg font-semibold text-[#0066ff]">
                                            Jai Hind Equipment
                                        </span>
                                    </div>
                                    <li>
                                        <Link
                                            href="/"
                                            onClick={(e) => handleLinkClick(e, "#home")}
                                            className={`text-[16px] font-normal ${activeSection === "home" ? "text-[#62a403]" : ""
                                                }`}
                                        >
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/#ourProduct"
                                            onClick={(e) => handleLinkClick(e, "#ourProduct")}
                                            className={`text-[16px] font-normal ${activeSection === "ourProduct" ? "text-[#62a403]" : ""
                                                }`}
                                        >
                                            Products
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/#ourService"
                                            onClick={(e) => handleLinkClick(e, "#ourService")}
                                            className={`text-[16px] font-normal ${activeSection === "ourService" ? "text-[#62a403]" : ""
                                                }`}
                                        >
                                            Services
                                        </Link>
                                    </li>
                                    {/* <li>
                                        <Link
                                            href="/about"
                                            className={`text-[16px] font-normal ${activeSection === "about" ? "text-[#62a403]" : ""
                                                }`}
                                        >
                                            About Us
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/contacts"
                                            className={`text-[16px] font-normal ${activeSection === "enquiry" ? "text-[#62a403]" : ""
                                                }`}
                                        >
                                            Enquiry
                                        </Link>
                                    </li> */}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header