/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { useEffect, useState } from "react";
import { useForm, FieldValues, } from "react-hook-form"
import { ColorRing } from "react-loader-spinner";
import { toast } from "sonner";
import { jwtDecode } from "jwt-decode";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { TUser } from "@/Interface/TUser";
import { setUser } from "@/redux/features/auth/authSlice";
import Link from "next/link";
import { useRouter } from "next/navigation";

const LoginPage = () => {
    const [loading, setLoading] = useState(false);
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const router = useRouter();
    const { token } = useAppSelector(state => state.auth)

    const dispatch = useAppDispatch()

    const [login] = useLoginMutation()

    useEffect(() => {
        if (token) {
            router.push('/')
            reset();
        }
    }, [token, router, reset]);



    const handleForm = async (data: FieldValues): Promise<void> => {
        const toastId = toast.loading('Logging in', { duration: 2000 })
        setLoading(true)
        const userData = {
            email: data.email,
            password: data.password
        }

        try {
            const res = await login(userData)
            if (res.data) {
                const token = (res as any)?.data?.token;
                toast.success(`${(res as any)?.data?.message}`, { id: toastId, duration: 2000 })

                // eslint-disable-next-line prefer-const
                let user: TUser = jwtDecode(token);
                const userToken = {
                    user: {
                        id: user.id,
                        name: user.name,
                        email: user.email,
                        role: user.role,
                    },
                    token
                }
                dispatch(setUser(userToken))
                setLoading(false)
            } else if (res.error) {
                toast.error(`${(res.error as any)?.data?.message}`, { id: toastId, duration: 2000 })
                setLoading(false)
            }

        } catch (error) {
            toast.error(`${(error as any)?.data?.message}`, { id: toastId, duration: 2000 })
            setLoading(false)
        }
    }
    return (
        <div className=" flex justify-center items-center h-[100vh] ">

            <form onSubmit={handleSubmit(handleForm)} className="shadow-lg py-20 pb-5 px-14 rounded-md bg-gray-200">
                <h1 className="text-center mb-10 uppercase font-bold">Login your Account</h1>
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