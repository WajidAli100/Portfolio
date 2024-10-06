"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import proj1 from '../assets/shoestore.png';
import proj2 from '../assets/e-commerce.png';
import proj3 from '../assets/weather-app.png';


const projects = [
    {
        title: 'Porfolio Website',
        description: 'I have created a portfolio website using Next.js, Tailwind CSS, TypeScript, and Framer Motion. The website showcases my skills and projects with smooth animations, providing a modern and interactive user experience.',
        image: proj1
    },
    {
        title: 'E-commerce Store',
        description: 'I have developed an e-commerce store using Next.js, Tailwind CSS, TypeScript, Framer Motion, Sanity, and Firebase. The store offers dynamic content management, real-time data handling, and a modern design with smooth animations, providing a seamless user experience and a scalable backend',
        image: proj2
    },
    {
        title: 'Data Analysis',
        description: 'I conducted a data analysis of the attrition rate for a company using Power BI. The analysis focused on key factors such as employee age, salary, work experience, job role, and education field. I built interactive visualizations to identify trends and correlations, providing insights into how different variables impact employee turnover and helping to inform strategic decisions for improving retention',
        image: proj3
    }
]

const Portfolio = () => {
    return (
        <div className='text-white bg-gradient-to-b from-black to-[#381a5f] py-18 mt-52' id='portfolio'>
            <h1 className='text-white text-6xl max-w-[400px] mx-auto font-semibold my-12'>Portfolio
                <span className='text-orange-400'> Me</span></h1>

            <div className='px-6 md:px-0 max-w-[1000px] mx-auto mt-40 space-y-24'>
                {projects.map((project, index) => (
                    <motion.div key={index} initial={{ opacity: 0, y: 75 }} whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.25 }}
                        className={`mt-12 flex flex-col ${index % 2 == 1 ? " md:flex-row-reverse gap-12" : " md:flex-row"}`}
                    >
                        <div className='space-y-2 max-w-[550px]'>
                            <h1 className='text-3xl font-bold my-4'>{project.title}</h1>
                            <p className='text-lg p-4 break-words text-white/70'>{project.description}</p>
                            <button className='bg-white text-black px-4 py-2 rounded-md'>View Project</button>

                        </div>
                        <div className='flex justify-center items-center'>
                            <Image src={project.image} alt="project 1" className='h-[350px] w-[500px] object-cover border rounded border-gray-700' />
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default Portfolio