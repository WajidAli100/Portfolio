"use client";
import Image from "next/image";
import cursor from "../assets/icon1.png";
import light from "../assets/icon2.png";
import { motion } from "framer-motion";
import profilepic from "../assets/pic.png";

const Hero = () => {
    return (
        // <div className="py-24 relative overflow-clip bg-[linear-gradient(to_bottom, #0000, #2B1942_35%,#8F5C55_60%, #DBAF6E_80%)]">
        // </div>
        <div
            className="py-24 relative overflow-clip"
            style={{
                background: 'linear-gradient(to bottom, #0000, #2B1942 35%, #8F5C55 60%, #DBAF6E 80%)'
            }}
        >
            <div
                className="absolute rounded-[50%] w-[3000px] h-[1300px] top-[550px] -translate-x-1/2 left-1/2"
                style={{
                    background: 'radial-gradient(closest-side, #000 80%, #2B1942)',
                }}
            ></div>

            <div className="relative">
                <div className="text-8xl font-bold text-center">
                    <h1 className="text-[#98B4CE]">Hi, I am</h1>
                    <h1 className="text-[#E48A57]"> Wajid Ali</h1>
                </div>
                <motion.div className="hidden md:block absolute left-[280px] top-[170px]" drag>
                    <Image src={cursor} height="190" width="190" alt="cursor" draggable="false" className="" />

                </motion.div>

                <motion.div className="hidden md:block absolute left-[220px] top-[200px]" drag>
                    <Image src={light} height="100" width="100" alt="cursor" draggable="false" className="" />

                </motion.div>

                <p className="text-center text-xl max-e-[500px] mx-auto text-white/80 mt-8">
                    I am a Full Stack developer focusing on websites that provide the best experience to users.
                </p>
                <Image src={profilepic} className="h-[250px] w-auto mx-auto" alt="profilepic" />
            </div>
        </div>


    )
}
export default Hero;