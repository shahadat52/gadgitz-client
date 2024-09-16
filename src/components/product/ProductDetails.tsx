import { TProduct } from '@/types/TProduct';
import Image from 'next/image';
import React from 'react';
import AddToCartButton from '../AddToCartButton';

export const generateStaticParams = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/services`);
    const resData = await res.json();
    const products = resData?.data
    return products.slice(0, 5)?.map((product: TProduct) => ({
        productId: product._id
    }))
}
const ProductDetails = ({ product }: { product: TProduct }) => {
    return (
        <div className='grid grid-cols-3  w-full px-5 m-5 '>
            <div className='grid grid-cols-3 col-span-2 gap-5'>
                <div className='mx-auto col-span-1'>
                    <div className='bg-gray-400 border border-gray-300 mb-5'>
                        <Image
                            className="w-[100%] "
                            src={product?.image}
                            width={600}
                            height={300}
                            alt="Electronic" />
                    </div>
                    <div className='border border-gray-300'>
                        <Image
                            className="h-[100%] w-[100%]"
                            src={product?.image}
                            width={300}
                            height={350}
                            alt="Electronic" />
                    </div>
                </div>
                <div className='col-span-2 border border-gray-300'>
                    <Image
                        className="h-[100%] w-[100%]"
                        src={product?.image}
                        width={300}
                        height={350}
                        alt="Electronic" />
                </div>
            </div>

            <div className='col-span-1 mx-auto p-5  items-center  '>
                <h1 className='text-center font-bold text-4xl mb-10'>Product Details</h1>
                <div>
                    <h2>{product?.name}</h2>
                    <p>{product?.description}</p>
                    <p>Price: {product?.price}</p>
                </div>
                <AddToCartButton product={product} />
            </div>
        </div>
    );
};

export default ProductDetails;