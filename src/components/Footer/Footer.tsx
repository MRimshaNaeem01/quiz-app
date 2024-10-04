import React from 'react';
import Link from 'next/link';
import CustomButton from '../CustomButton/CustomButton';
import Logo from '../../public/images/techniTestLogo.png';
import Image from 'next/image';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GoogleIcon from '@mui/icons-material/Google';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import CustomSearch from '../CustomSearch';

const Footer = () => {

    return (
        <div className="flex pt-[60px] md:flex-row flex-col bg-primary-blue md:h-[430px] h-[100%] px-3 relative">

            <div className="flex-1 flex justify-center md:p-3">
                <div className='flex flex-col'>
                    <Image
                        src={Logo}
                        alt="Welcome Banner"
                        className=''
                    />
                    <p className='text-white text-sm my-5 w-[300px]'>
                        Lorem ipsum dolor sit amet, consectetur ipsum dolor elilacus.
                    </p>
                    <div className='flex flex-row space-x-4 text-white my-5 md:justify-start justify-center'>
                        <FacebookIcon />
                        <XIcon />
                        <InstagramIcon />
                        <LinkedInIcon />
                        <GoogleIcon />
                        <LocalParkingIcon />
                    </div>
                </div>
            </div>

            <div className="flex-1 flex justify-center md:p-3 p-4">
                <div className="flex flex-row justify-center space-x-20">
                    <ul className='text-white flex flex-col items-center'>
                        <li className='text-base mb-2 font-normal'>Quick Links</li>
                        <li className='text-sm font-light my-1'>Q-Link 01</li>
                        <li className='text-sm font-light my-1'>Q-Link 01</li>
                        <li className='text-sm font-light my-1'>Q-Link 01</li>
                        <li className='text-sm font-light my-1'>Q-Link 01</li>
                    </ul>
                    <ul className='text-white flex flex-col items-center'>
                        <li className='text-base mb-2 font-normal'>Categories</li>
                        <li className='text-sm font-light my-1'>Category 01 </li>
                        <li className='text-sm font-light my-1'>Category 01 </li>
                        <li className='text-sm font-light my-1'>Category 01 </li>
                        <li className='text-sm font-light my-1'>Category 01 </li>
                        <li className='text-sm font-light my-1'>Category 01 </li>
                        <li className='text-sm font-light my-1'>Category 01 </li>
                        <li className='text-sm font-light my-1'>Category 01 </li>
                        <li className='text-sm font-light my-1'>Category 01 </li>
                    </ul>
                    <ul className='text-white flex flex-col items-center'>
                        <li className='text-base mb-2 font-normal'>Useful Links</li>
                        <li className='text-sm font-light my-1'>U-Link 01</li>
                        <li className='text-sm font-light my-1'>U-Link 01</li>
                        <li className='text-sm font-light my-1'>U-Link 01</li>
                        <li className='text-sm font-light my-1'>U-Link 01</li>
                    </ul>
                </div>
            </div>

            <div className="flex-1 flex justify-center md:p-3 p-4 ">
                <div className="text-white flex flex-col">
                    <div className='flex h-[100px] md:space-x-3 space-x-6 items-center'>
                        <CustomSearch />
                        <CustomButton text='Subscribe' />
                    </div>
                    <div>
                        <p className='text-white text-sm text-center md:mt-0 md:mb-5 mb-[30px] '>
                            Or Click here to
                            <Link href="#" className='text-sm ps-2 text-[#0BFFF0]'>Unsubscribe</Link>
                        </p>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 left-0  w-full text-center py-2 bg-primary-mustard text-white text-sm">
                Copyright ©2023 All rights reserved.
            </div>
        </div>
    );
};

export default Footer;