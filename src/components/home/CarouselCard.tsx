
import { TProduct } from '@/types/TProduct';
import Image from 'next/image';
const CarouselCard = ({ product }: { product: TProduct }) => {
    return (
        <div className="mx-auto">

            <div className='shadow-md '>

                <figure className=''>
                    <Image
                        className='rounded '
                        width={300}
                        height={100}
                        src={product.image}
                        alt="Shoes" />
                </figure>
                <div>
                    <h3>Shoe name</h3>
                    <p>Price</p>

                </div>

            </div>
        </div>
    );
};

export default CarouselCard;