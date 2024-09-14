/* eslint-disable @typescript-eslint/no-explicit-any */
import ProductCard from '@/components/product/ProductCard';

const ProductsPage = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/services`)
    const data = await res.json();
    const products = data?.data
    return (
        <div className='grid grid-cols-4'>
            <div className='col-span-1'>
                <p>Sort By</p>

            </div>
            <div className='col-span-3'>
                <h1 className='text-center font-bold text-4xl my-5'>Our Products</h1> <hr />
               <div>
               <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
               
               </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-3'>
                    {
                        products?.map((item: any) => <ProductCard key={item._id} product={item} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default ProductsPage;