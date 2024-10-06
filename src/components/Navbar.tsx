"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';


const navLinks = [
    { title: 'Home', path: "#" },
    { title: 'About', path: "#about" },
    { title: 'Portfolio', path: "#portfolio" },
    { title: 'Contact', path: "#contact" },
]
const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    }
    const closeNav = () => {
        setNav(false);
    }
    const menuVariants = {
        open: { x: 0, transition: { stiffness: 20, damping: 15 } },
        closed: { x: "-100%", transition: { stiffness: 20, damping: 15 } }
    }
    return (
        <div className='text-white/70 pt-6'>
            <div className='flex justify-between items-center h-24 max-w-[400px] mx-auto px-4'>
                <ul className='hidden md:flex'>
                    {navLinks.map((link, index) => (
                        <li key={index} className='p-4'>
                            <Link href={link.path}>
                                <p>{link.title}</p></Link>
                        </li>
                    ))}
                </ul>
                <div onClick={handleNav} className='block md:hidden'>
                    {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                </div>
                <motion.div
                    initial={false}
                    animate={nav ? "open" : "closed"}
                    variants={menuVariants}
                    className={nav ? 'fixed left-0 mt-28 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
                    <ul className='uppercase p-4'>
                        {navLinks.map((link, index) => (
                            <li key={index} className='p-4 border-b border-gray-600'>
                                <Link href={link.path} onClick={closeNav}>{link.title}</Link>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </div>

        </div>

    );
};
export default Navbar;