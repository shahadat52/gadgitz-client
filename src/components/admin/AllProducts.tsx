import React from 'react';
import ProductsTable from './ProductsTable';
import AddProduct from './AddProduct';

const AllProducts = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`)
    const data = await res.json();
    const products = data?.data;
    return (
        <div className='p-3'>
            <AddProduct />
            <ProductsTable products={products} />
        </div>
    );
};

export default AllProducts;