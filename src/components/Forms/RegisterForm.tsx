'use client'
import React, { useRef } from 'react'
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
  fullName: string;
  email: string;
  password: string;
  phoneNumber: string;
  confirmPassword: string;
  referredBy: string;
  rememberMe: boolean;
};

const RegisterForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();

  const captcha_sitekey = '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'
  const submitForm: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  }

  return (
    <div className='p-[50px]'>
      <Heading text="Sign Up" />
      <form onSubmit={handleSubmit(submitForm)}>
        <div className="mt-5 text-center">

          <div className='my-5'>
            <CustomInput
              label="Full Name"
              type="text"
              placeholder="Full Name"
              register={register('fullName',
                { required: 'Full Name is required' }
              )}
              error={errors.fullName?.message}
            />
          </div>

          <div className='my-5'>
            <CustomInput
              label="Email"
              type="email"
              placeholder="Email"
              register={register('email',
                { required: 'Email is required' }
              )}
              error={errors.email?.message}
            />
          </div>

          <div className='my-5'>
            <CustomInput
              label="Phone Number"
              type="number"
              placeholder="Phone Number"
              register={register('phoneNumber',
                { required: 'Phone Number is required' }
              )}
              error={errors.phoneNumber?.message}
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

          <div className='mt-5'>
            <CustomInput
              label="Confirm Password"
              type="password"
              placeholder="Confirm Password"
              register={register('password',
                { required: 'Confirm Password is required' })}
              error={errors.confirmPassword?.message}
            />
          </div>

          <div className='my-5'>
            <CustomInput
              label="Referred By"
              type="text"
              placeholder="Add Link"
              register={register('referredBy',
                { required: 'Referred By is required' }
              )}
              error={errors.referredBy?.message}
            />
          </div>

          <div className='my-5'>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox  {...register('rememberMe')} />}
                label="Remember me"
              />
            </FormGroup>

            <FormGroup>
              <FormControlLabel
                control={<Checkbox  {...register('rememberMe')} />}
                label={<span>I accept the <span className='text-primary-light-blue' >terms & conditions</span></span>
                }
              />
            </FormGroup>
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
              text="Create Account"
            />
          </div>
        </div>
      </form>

      <div className=' w-[270px] flex flex-col p-5 mx-auto'>
        <p className='text-primary-light-blue mt-1'>
          Already have an account
          <Link href="/login"
            className='text-sm ps-2 text-primary-blue'>Log In</Link>
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

export default RegisterForm
