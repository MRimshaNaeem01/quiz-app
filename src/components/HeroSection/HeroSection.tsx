import React from 'react'
import Styles from './heroSection.module.scss';
import Image from 'next/image';
import WelcomeBanner from '../../public/images/welcomebanner.png'
import img1 from '../../public/images/img1 1.png';
import img2 from '../../public/images/img1 2.png'

interface PropType {
    text: string;
}
const HeroSection: React.FC<PropType> = ({ text }) => {
    console.log(text, "text");

    return (
        <div className={`p-5 bg-primary-blue  border-t-[0.1px] relative h-[280px]`}>
            <Image
                src={img1}
                alt="Welcome Banner"
                className="absolute top-0 left-0"
            />
            <Image
                src={img2}
                alt="Welcome Banner"
                className="absolute bottom-0 right-0"
            />
            <h2  className={`flex justify-center text-5xl mt-[90px] font-normal	 text-white`}>Welcome</h2>
        </div>
    )
}

export default HeroSection
