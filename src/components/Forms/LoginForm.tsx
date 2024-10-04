'use client'
import React from 'react'
import CustomInput from '../CustomInput'
import Heading from '../Heading'
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import CustomButton from '../CustomButton/CustomButton'
import { SubmitHandler, useForm } from 'react-hook-form'
import Link from 'next/link'
import Image from 'next/image'
import googleLogo from '../../public/images/devicon_google.png';
import facebookLogo from '../../public/images/logos_facebook.png';
import linkedInLogo from '../../public/images/devicon_linkedin.png';
import ReCAPTCHA from 'react-google-recaptcha'


type FormValues = {
    emailOrCustomerNumber: string;
    password: string;
    rememberMe: boolean;
};

const LoginForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
    const captcha_sitekey = '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'

    const submitForm: SubmitHandler<FormValues> = (data) => {
        console.log(data);
    }

    return (
        <div className='p-[50px]'>
            <Heading text="Log In" />
            <form onSubmit={handleSubmit(submitForm)}>
                <div className="mt-5 text-center">
                    <div className='my-5'>
                        <CustomInput
                            label="Email / Customer Number"
                            type="email"
                            placeholder="Customer Number / Email"
                            register={register('emailOrCustomerNumber',
                                { required: 'Email or Customer Number is required' }
                            )}
                            error={errors.emailOrCustomerNumber?.message}
                        />
                    </div>
                    <div className='mt-5'>
                        <CustomInput
                            label="Password"
                            type="password"
                            placeholder="Password"
                            register={register('password',
                                { required: 'Password is required' })}
                            error={errors.password?.message}
                        />
                    </div>
                    <div className='flex justify-between'>
                        <FormGroup>
                            <FormControlLabel
                                control={<Checkbox  {...register('rememberMe')} />}
                                label="Remember me"
                            />
                        </FormGroup>
                        <span className='text-primary-light-blue mt-1'>Forget Password?</span>
                    </div>
                    <div className='my-5 flex justify-center items-center mx-auto '>
            <ReCAPTCHA
              sitekey={captcha_sitekey}
            />
          </div>
                    <div className='border w-[270px] flex flex-col mx-auto'>
                        <CustomButton
                            fullWidth={true}
                            roundedLight={true}
                            text="LOGIN"
                        />
                    </div>
                </div>
            </form>

            <div className=' w-[270px] flex flex-col p-5 mx-auto'>
                <p className='text-primary-light-blue mt-1'>
                    Don’t have an account
                    <Link href="/register"
                        className='text-sm ps-2 text-primary-blue'>Sign Up</Link>
                </p>
                <div className='relative my-5 flex justify-center items-center'>
                    <hr style={{ borderColor: 'gray' }} className='w-full border-t border-gray-300' />
                    <span className='absolute bg-white px-2 text-gray-500'>OR</span>
                </div>


                <div className='flex justify-between  my-4'>
                    <Image
                        src={googleLogo}
                        alt='Google logo'
                    />
                    <Image
                        src={facebookLogo}
                        alt='Google logo'
                    />
                    <Image
                        src={linkedInLogo}
                        alt='Google logo'
                    />
                </div>
            </div>
        </div>
    )

}

export default LoginForm
