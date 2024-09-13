
import { TProduct } from '@/types/TProduct';
import Image from 'next/image';
const CarouselCard = ({ product }: { product: TProduct }) => {
    return (
        <div className="mx-auto ">

            <div className='shadow-md rounded-t-3xl'>
                <div className='rounded-t-xl'>
                    <Image
                        className='rounded '
                        width={300}
                        height={100}
                        src={product.image}
                        alt="Shoes" />
                </div>
                <div className='px-5 py-5'>
                    <h3 className='font-semibold '>{product?.name}</h3>
                    <p>{product?.price}</p>

                </div>

            </div>
        </div>
    );
};

export default CarouselCard;