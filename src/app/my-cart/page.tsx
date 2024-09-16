
import CartTable from '@/components/cart/CartTable';
import OrderSummery from '@/components/cart/OrderSummery';
const MyCartPage = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 p-5'>
            <CartTable />
            <OrderSummery />
        </div>
    );
};

export default MyCartPage;