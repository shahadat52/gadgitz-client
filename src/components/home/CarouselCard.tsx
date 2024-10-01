
import { TProduct } from '@/types/TProduct';
import Image from 'next/image';
const CarouselCard = ({ product }: { product: TProduct }) => {
    return (
        <div className="mx-auto ">

            <div className='shadow-md max-w-[300px] rounded-t-3xl'>
                <div className='rounded-t-3xl'>
                    <Image
                        className='rounded '
                        width={300}
                        height={100}
                        src={product.image}
                        alt="Shoes" />
                </div>
                <div className='px-5 py-5'>
                    <h3 className='font-semibold text-xl '>{product?.name}</h3>
                    <p className='font-semibold'>Price: {product?.price}</p>
                    <p className='text-justify'>{product?.description.slice(0, 60)}</p>

                </div>

            </div>
        </div>
    );
};

export default CarouselCard;