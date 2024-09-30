'use client'
import React, { useState } from 'react';
import AddProductModal from './AddProductModal';

const AddProduct = () => {
    const [productModalController, setProductModalController] = useState(false)
    return (
        <div>
            <div className='flex justify-between items-center px-4'>
                <h1 className='font-bold '>All products</h1>
                <button
                    className="bg-accent hover:bg-[#36518f] text-white font-bold py-2 px-2 rounded mb-4"
                    onClick={() => setProductModalController(true)}
                >
                    + Add New Product
                </button>
            </div>
            <div>
                {productModalController && <AddProductModal setProductModalController={setProductModalController} />}
            </div>
        </div>
    );
};

export default AddProduct;