'use client'
import CartTable from '@/components/cart/CartTable';
import OrderSummery from '@/components/cart/OrderSummery';
import ShippingAddress from '@/components/cart/ShippingAddress';
import { cartEmpty } from '@/redux/features/cart/cartSlice';
import { useAppDispatch } from '@/redux/hooks';


const MyCartPage = () => {
    // const cartState = useAppSelector((state) => state.auth.cart)



    const dispatch = useAppDispatch()

    // const handleCart = () => {
    //     dispatch(cartEmpty())
    // }
    // const products = cartState?.products

    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 p-5'>

            <CartTable />
            <OrderSummery />
            <ShippingAddress />
        </div>
    );
};

export default MyCartPage;