'use client'
import { addToCart } from "@/redux/features/cart/cartSlice";
import { useAppDispatch } from "@/redux/hooks";
import { TProduct } from "@/types/TProduct";
import { useState } from "react";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";

const AddToCartButton = ({ product }: { product: TProduct }) => {
    const [quantity, setQuantity] = useState(0)
    const dispatch = useAppDispatch()

    const handleCart = (product: TProduct, quantity: number) => {
        alert('Are You Want To Add This Product')
        dispatch(addToCart({ ...product, quantity }))
    }


    return (
        <div>
            <h2>Quantity: {quantity}</h2>
            <div className="flex justify-around bg-gray-100  px-3 items-center text-3xl">
                <p onClick={() => setQuantity(quantity - 1)}><FaMinus /></p>
                <p onClick={() => setQuantity(quantity + 1)}><FaPlus /></p>
            </div>
            <button
                onClick={() => handleCart(product, quantity)}
                className='bg-accent w-full p-2 rounded-xl'
            >Add to cart</button>
        </div>
    );
};

export default AddToCartButton;