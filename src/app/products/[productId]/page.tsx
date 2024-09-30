import ProductDetails from '@/components/product/ProductDetails';
import React from 'react';



const Product = async ({ params }: { params: { productId: string } }) => {
    const { productId } = params
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${productId}`);
    const resData = await res.json();
    const product = resData?.data;
    return (
        <div>
            <ProductDetails product={product} />
        </div>
    );
};

export default Product;