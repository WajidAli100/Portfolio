import React from 'react'
import { FaLinkedin, FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='px-6 md:px-0 mt-12 text-white/70 py-8 max-w-[1000px] mx-auto pt-4 flex justify-between items-center border-t border-gray-700'>
            <h1 className='text-2xl font-bold'>Wajid Ali</h1>
            <div className='flex space-x-6 mt-4'>
                <a href="https://www.linkedin.com/in/wajid-ali100/" className='hover:text-gray-300'>
                    <FaLinkedin size={24} />
                </a>
                <a href="#" className='hover:text-gray-300'>
                    <FaTwitter size={24} />
                </a>
                <a href="#" className='hover:text-gray-300'>
                    <FaFacebook size={24} />
                </a>
            </div>
        </div>
    )
}

export default Footer