import { TProduct } from '@/types/TProduct';

const ProductsTable = ({ products }: { products: TProduct[] }) => {
    return (
        <div className="container mx-auto p-4">
            <table className="min-w-full bg-white">
                <thead>
                    <tr className='bg-gray-300'>
                        <th className="py-2 px-4 border-b text-start">Name</th>
                        <th className="py-2 px-4 border-b text-start">Description</th>
                        <th className="py-2 px-4 border-b text-start">Price</th>
                        <th className="py-2 px-4 border-b text-start">Brand</th>
                        <th className="py-2 px-4 border-b text-start">Stock</th>
                    </tr>
                </thead>
                <tbody>
                    {products?.map((product: TProduct) => (
                        <tr key={product._id}>
                            <td className="py-2 px-4 border-b  text-start font-bold">{product?.name}</td>
                            <td className="py-2 px-4 border-b text-start">{product?.description.substring(0, 30)}</td>
                            <td className="py-2 px-4 border-b text-start">{product?.price}</td>
                            <td className="py-2 px-4 border-b text-start">{product.brand}</td>
                            <td className="py-2 px-4 border-b text-start">{product.quantity}</td>
                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
    );
};

export default ProductsTable;