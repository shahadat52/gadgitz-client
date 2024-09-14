/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import ProductCard from '@/components/product/ProductCard';
import { useGetAllServicesQuery } from '@/redux/features/service/serviceApi';
import { TProduct } from '@/types/TProduct';
import { useState } from 'react';

const ProductsPage = () => {
    const [brand, setBrand] = useState('');
    const [priceRange, setPriceRange] = useState([0, 0]);
    const [category, setCategory] = useState('');
    const [searchTerm, setSearchTerm] = useState('')
    const { data } = useGetAllServicesQuery({ brand, priceRange, category, searchTerm })
    const { data: primaryData } = useGetAllServicesQuery('')

    const handleApplyFilters = () => {
        // onFilter({
        //     brand,
        //     priceRange,
        //     category,
        // });
    };
    const allData = primaryData?.data
    const products = data?.data
    console.log(data);
    return (
        <div className='grid grid-cols-4'>

            <div className='col-span-1'>
                <h2 className='text-center font-semibold text-lg uppercase my-[21px]'>Sort and Filtering</h2>
                <div>

                    <div className="mb-4 w-full py-2">
                        <label className="block mb-2">Brand</label>
                        <select value={brand} onChange={(e) => setBrand(e.target.value)} className="p-2 border rounded w-full">
                            {
                                allData?.map((product: TProduct) => <option key={product?._id} value={product.brand}>{product.brand}</option>)
                            }
                        </select>
                    </div>

                    {/* Price Range Filter */}
                    <div className="mb-4 py-2">
                        <label className="block mb-2">Price Range</label>
                        <select
                            value={priceRange.join('-')}
                            onChange={(e) => {
                                const range = e.target.value.split('-').map(Number);
                                setPriceRange(range);
                            }}
                            className="p-2 border rounded w-full"
                        >
                            <option value="">All Prices</option>
                            <option value="5000-10000">₹5000 - ₹10000</option>
                            <option value="11000-15000">₹11000 - ₹15000</option>
                            <option value="16000-20000">₹16000 - ₹20000</option>
                            <option value="21000-30000">₹21000 - ₹30000</option>
                        </select>
                    </div>

                    {/* Category Filter */}
                    <div className="mb-4 py-2">
                        <label className="block mb-2">Category</label>
                        <select value={category} onChange={(e) => setCategory(e.target.value)} className="p-2 border rounded w-full">
                            {
                                allData?.map((product: TProduct) => <option key={product?._id} value={product.category}>{product.category}</option>)
                            }
                        </select>
                    </div>

                    <button
                        onClick={handleApplyFilters}
                        className="w-full bg-blue-500 text-white p-2 rounded"
                    >
                        Apply Filters
                    </button>
                </div>

            </div>
            <div className='col-span-3'>
                <h1 className='text-center font-bold text-4xl my-5'>Our Products</h1> <hr />
                <div className='flex justify-between mx-2 my-5'>
                    <input
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered w-[100%] mx-6 "
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-3'>
                    {
                        products?.map((item: TProduct) => <ProductCard key={item._id} product={item} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default ProductsPage;