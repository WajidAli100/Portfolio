import React from 'react'
import Image from 'next/image'
import book from '../assets/book.png'
import finance from '../assets/finance.png'
import card from '../assets/card.png'
import pc from '../assets/pc.png'


const About = () => {
    return (
        <div className='max-w-[1200px] mx-auto text-white' id="about">
            <h1 className='text-white text-6xl max-w-[320px] mx-auto font-semibold p-4 mb-4'>About
                <span className='text-orange-400'> Me</span></h1>
            <div className='px-6 md:p-0 grid md:grid-cols-8 gap-6 place-items-center'>
                {/* 1st card */}
                <div className='w-full md:col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg overflow-hidden'>
                    <div className='absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy '></div>
                    <div className='flex flex-row p-6'>
                        <Image src={book} alt="book" className='w-auto h-[130px]' />
                        <div className='flex flex-col mt-4'>
                            <h2 className='text-2xl font-bold text-white/80'>Education</h2>
                            <p className='text-lg text-white/70 mt-2'>I hold a Masters of Science degree in Computer Science, which has provided me with a strong foundation in various areas of technology, including web development,software development, data analysis, and artificial intelligence</p>
                        </div>
                    </div>
                </div>

                {/* 2nd card */}
                <div className='w-full md:col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg overflow-hidden'>
                    <div className='absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy '></div>
                    <div className='flex flex-row p-6'>
                        <Image src={finance} alt="book" className='w-auto h-[130px]' />
                        <div className='flex flex-col mt-4'>
                            <h2 className='text-2xl font-bold text-white/80'>Experience</h2>
                            <p className='text-lg text-white/70 mt-2'>I have experience in web development and data analysis i.e. Next.js, TypeScript, Framer Motion, Sanity, and Firebase. </p>
                        </div>
                    </div>
                </div>

                {/* 3rd card */}
                <div className='w-full md:col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg overflow-hidden'>

                    <div className='absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy '></div> <div className='flex flex-row p-6'>
                        <Image src={card} alt="book" className='w-auto h-[130px]' />
                        <div className='flex flex-col mt-4'>
                            <h2 className='text-2xl font-bold text-white/80'>Projects</h2>
                            <p className='text-lg text-white/70 mt-2'>Panaverse-Dao <br /> Weather App <br />E-Commerce Store <br />Pricing UI</p>
                        </div>
                    </div>
                </div>

                {/* 4th card */}
                <div className='w-full md:col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg overflow-hidden'>

                    <div className='absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy '></div>
                    <div className='flex flex-row p-6'>
                        <Image src={pc} alt="book" className='w-auto h-[130px]' />
                        <div className='flex flex-col mt-4'>
                            <h2 className='text-2xl font-bold text-white/80'>Technical Skills</h2>
                            <p className='text-lg text-white/70 mt-2'>I have technical expertise in web development i.e. Next.js, Tailwind CSS, React, TypeScript, and Framer Motion, Sanity, Firebase, and PostgreSQL. My skills in data analysis and visualization using Power BI, Python, Pandas, NumPy, and Matplotlib.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About