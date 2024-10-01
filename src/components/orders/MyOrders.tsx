/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import MeOrderCart from './MeOrderCart';

const OurOrders = ({ products }: { products: any }) => {
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        products?.map((product: any, index: number) => <MeOrderCart product={product} index={index} key={index} />)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default OurOrders;