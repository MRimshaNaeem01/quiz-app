import { Button } from '@mui/material';
import React from 'react';
import Styles from './customButton.module.scss';

interface PropType {
    text: string;
    customClass?: string;
    fullWidth?: boolean;
    roundedLight?: boolean;
}

const CustomButton: React.FC<PropType> = ({ text, fullWidth = false, roundedLight = false }) => {
    return (
        <Button
            type='submit'
            className={`bg-primary-mustard px-5 
            ${fullWidth ? 'w-full' : ''} py-3 text-white
            ${roundedLight ? 'rounded-lg' : 'rounded-full'}
            ${Styles.customClass}`}
        >
            {text}
        </Button>
    );
}

export default CustomButton;
