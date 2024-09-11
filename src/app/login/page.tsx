'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm, FieldValues } from "react-hook-form";

import { ColorRing } from 'react-loader-spinner'

const LoginPage = () => {
    const [loading, setLoading] = useState(false)
    const { register, handleSubmit, formState: { errors }, } = useForm();

    const handleForm = (data: FieldValues) => {
        setLoading(!loading)
        console.log(data);
        setLoading(!loading)
    }
    return (
        <div className=" flex justify-center items-center h-[100vh] ">

            <form onSubmit={handleSubmit(handleForm)} className="shadow-lg py-20 pb-5 px-14 rounded-md bg-gray-200">
                <h1 className="uppercase font-bold text-center mb-10">Sign In your Account</h1>

                <div>
                    <p>Email</p>
                    <input
                        type="email"
                        placeholder="Enter Email"
                        className="input input-bordered w-full max-w-xs"
                        autoComplete="email"
                        {...register('email', {
                            required: 'Email is required',
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: 'Invalid email format'
                            }
                        })}
                    />
                    {errors.email && typeof errors.email.message === 'string' && <p className="text-red-500">{errors.email.message}</p>}
                </div>
                <div>
                    <p>Password</p>
                    <input
                        type="password"
                        placeholder="Enter Password"
                        className="input input-bordered w-full max-w-xs"
                        {...register('password', {
                            required: 'Password is required',
                            minLength: {
                                value: 4,
                                message: 'Password must be 4 characters long'
                            }
                        })}
                    />
                    {errors.password && typeof errors.password.message === 'string' && <p className="text-red-500">{errors.password.message}</p>}

                </div>
                <div className="w-full flex justify-center mt-10" >

                    {
                        loading ? <ColorRing
                            visible={true}
                            height="80"
                            width="80"
                            ariaLabel="color-ring-loading"
                            wrapperStyle={{}}
                            wrapperClass="color-ring-wrapper"
                            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                        /> : <input type="submit" className="input input-bordered " />


                    }

                </div>
                <p>If you have no account <Link href='/register' className='font-bold link uppercase'>Register</Link></p>
            </form>
        </div>
    );
};

export default LoginPage;