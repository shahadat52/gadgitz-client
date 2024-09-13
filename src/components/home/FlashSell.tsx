import { TProduct } from '@/types/TProduct';
import Image from 'next/image';
import React from 'react';

const FlashSell = ({ product }: { product: TProduct }) => {
    return (
        <div className='mx-auto'>

            <div className="">

                <div className='shadow-md'>

                    <figure className=''>
                        <Image
                            className='rounded '
                            width={300}
                            height={100}
                            src={product?.image}
                            alt="mobile" />
                    </figure>
                    <div>
                        <h3>{product?.name}</h3>
                        <p>Price</p>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default FlashSell;