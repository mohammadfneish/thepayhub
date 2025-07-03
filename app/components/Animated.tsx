

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import Link from "next/link";

// Define a TypeScript interface for the expected data structure
interface GridItem {
    title: string;
    description: string;
    image?: string; // Optional image support
}

interface AnimatedGridProps {
    data: GridItem[];
    contentCenter?: boolean; // Optional prop to center content
}

const AnimatedGrid: React.FC<AnimatedGridProps> = ({ data, contentCenter = false }) => {
    return (
        <>
            {data.map((item, index) => (
                <Link href="/contact" key={index}><motion.div
                    initial={{ opacity: 0, transform: 'scale(0.8)' }}  // Start small and invisible
                    animate={{ opacity: 1, transform: 'scale(1)' }}    // Scale to full size and make visible
                    exit={{ opacity: 0, transform: 'scale(0.8)' }}     // Exit with scaling down and fading
                    transition={{
                        duration: 0.3,
                        delay: index * 0.2 // Delay animation
                    }}
                    className={`relative px-6 py-8 rounded-xl border-2 border-white/50 text-white bg-gray-900 hover:border-red-500  bg-opacity-80 transition-all duration-300 flex ${contentCenter ? "flex-col justify-center items-center text-center" : "flex-col md:flex-row justify-between items-center"}`}
                    style={{
                        background: `radial-gradient(130.32% 212.84% at 0% 172.89%, rgba(232, 137, 136, 0.5) 0%, rgba(28, 27, 51, 0.1) 75.94%)`,
                    }}
                >
                    {/* Image - Left by default, Top center when contentCenter is true on mobile */}
                    {item.image && (
                        <div className={`mb-4 ${contentCenter ? "flex justify-center w-full mb-4 " : "md:mr-4 flex justify-start md:mb-0 "}`}>
                            <Image 
                                src={item.image} 
                                alt={item.title} 
                                width={60} 
                                height={60} 
                                className={`object-contain ${contentCenter ? "mx-auto" : ""}`}
                            />
                        </div>
                    )}

                    {/* Content */}
                    <div className={`flex-1 flex flex-col gap-4 ${contentCenter ? "text-center" : ""}`}>
                        <h3 className="text-xl font-bold">{item.title}</h3>
                        <p className="text-gray-400">{item.description}</p>
                    </div>
                </motion.div></Link>
            ))}
        </>
    );
};

export default AnimatedGrid;
