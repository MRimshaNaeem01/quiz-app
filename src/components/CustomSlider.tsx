'use client'

import React, { useState, useEffect } from "react";
import img1 from '../public/images/Property 1=Default.png';
import img2 from '../public/images/Property 1=Variant2.png';
import img3 from '../public/images/Property 1=Variant3.png';
import Image from "next/image";

const sliderData = [
    { image: img1 },
    { image: img2 },
    { image: img3 }
];

const CustomSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev === sliderData.length - 1 ? 0 : prev + 1));
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex justify-center h-[700px] relative text-center">
            <Image
                src={sliderData[currentSlide].image}
                alt={`Slide ${currentSlide + 1}`}
                className="h-100" />
        </div>
    );
};

export default CustomSlider;
