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
                            src="https://img.freepik.com/free-photo/still-life-wireless-cyberpunk-headphones_23-2151072201.jpg?t=st=1725989191~exp=1725992791~hmac=eda2f67e6f9ed4a9676459c1e0ccf6d9a49dca835a49df2e198a735527972d73&w=360"
                            alt="Shoes" />
                    </figure>
                    <div>
                        <h3>Shoe name</h3>
                        <p>Price</p>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default FlashSell;