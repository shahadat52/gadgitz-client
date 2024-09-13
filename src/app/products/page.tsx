/* eslint-disable @typescript-eslint/no-explicit-any */
import ProductCard from '@/components/product/ProductCard';

const ProductsPage = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/services`)
    const data = await res.json();
    const products = data?.data
    return (
        <div>
            <h1 className='text-center font-bold text-4xl my-5'>Our Products</h1> <hr />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-3'>
                {
                    products?.map((item: any) => <ProductCard key={item._id} product={item} />)
                }
            </div>
        </div>
    );
};

export default ProductsPage;