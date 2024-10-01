'use client'
import { MdOutlineCancel } from 'react-icons/md';
import { useForm, FieldValues } from 'react-hook-form';
import { Dispatch, SetStateAction } from 'react';
import { toast } from 'sonner';
import { useAddProductMutation } from '@/redux/features/service/serviceApi';


type AddProductModalProps = {
    // onAdd: (product: TProduct) => void;
    setProductModalController: Dispatch<SetStateAction<boolean>>;
};

type FormValues = {
    name: string;
    description: string;
    price: number;
    image: string;
    category: string;
    brand: string;
    quantity: number;
    features: string
};
const AddProductModal: React.FC<AddProductModalProps> = ({ setProductModalController }) => {

    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();

    const [addProduct] = useAddProductMutation()

    const handleProductAdd = async (data: FieldValues) => {
        const toastId = toast.loading('Product adding', { duration: 2000 })
        const res = await addProduct(data)
        if (res.error) {
            toast.error(`Operation failed`, { id: toastId, duration: 2000 })
            setProductModalController(false)
        } else {
            toast.success(`Product added successful`, { id: toastId, duration: 2000 })
            setProductModalController(false)
        }

        setProductModalController(false)

    }
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="bg-white p-6 rounded-lg ">
                <section className='flex justify-between items-baseline'>
                    <h2 className="text-2xl mb-4">Add Service</h2>
                    <div
                        onClick={() => setProductModalController(false)}
                        className='text-2xl cursor-pointer'>
                        <MdOutlineCancel />
                    </div>
                </section>
                <form
                    onSubmit={handleSubmit(handleProductAdd)}
                    className='grid grid-cols-2 gap-2'
                >
                    <div className="mb-2">
                        <input
                            className={`border p-2 w-full ${errors.name ? 'border-red-500' : ''}`}
                            type="text"
                            placeholder="Name"
                            {...register('name', { required: "Product name is required" })}
                        />
                        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                    </div>

                    <div className="mb-2">
                        <input
                            className={`border p-2 w-full ${errors.description ? 'border-red-500' : ''}`}
                            type="text"
                            placeholder="Description"
                            {...register('description', { required: "Description is required" })}
                        />
                        {errors.description && <p className="text-red-500">{errors.description.message}</p>}
                    </div>

                    <div className="mb-4">
                        <input
                            className={`border p-2 w-full ${errors.price ? 'border-red-500' : ''}`}
                            type="number"
                            placeholder="Price"
                            {...register('price', {
                                required: "Price is required",
                                min: { value: 1, message: "Price must be greater than 0" }
                            })}
                        />
                        {errors.price && <p className="text-red-500">{errors.price.message}</p>}
                    </div>

                    <div className="mb-4">
                        <input
                            className={`border p-2 w-full ${errors.image ? 'border-red-500' : ''}`}
                            type="text"
                            placeholder="Image url"
                            {...register('image', {
                                required: "Image url is required",
                            })}
                        />
                        {errors.image && <p className="text-red-500">{errors.image.message}</p>}
                    </div>

                    <div className="mb-4">
                        <input
                            className={`border p-2 w-full ${errors.category ? 'border-red-500' : ''}`}
                            type="text"
                            placeholder="Category"
                            {...register('category', {
                                required: "Category is required",
                            })}
                        />
                        {errors.category && <p className="text-red-500">{errors.category.message}</p>}
                    </div>


                    <div className="mb-4">
                        <input
                            className={`border p-2 w-full ${errors.brand ? 'border-red-500' : ''}`}
                            type="text"
                            placeholder="Brand"
                            {...register('brand', {
                                required: "Brand is required",
                            })}
                        />
                        {errors.brand && <p className="text-red-500">{errors.brand.message}</p>}
                    </div>

                    <div className="mb-4">
                        <input
                            className={`border p-2 w-full ${errors.features ? 'border-red-500' : ''}`}
                            type="text"
                            placeholder="Features"
                            {...register('features', {
                                required: "Features is required",
                            })}
                        />
                        {errors.features && <p className="text-red-500">{errors.features.message}</p>}
                    </div>
                    <div className="mb-4">
                        <input
                            className={`border p-2 w-full ${errors.price ? 'border-red-500' : ''}`}
                            type="number"
                            placeholder="Quantity"
                            {...register('quantity', {
                                required: "Quantity is required",
                                min: { value: 1, message: "Quantity must be greater than 0" }
                            })}
                        />
                        {errors.price && <p className="text-red-500">{errors.price.message}</p>}
                    </div>

                    <div className="flex justify-start">
                        <button
                            className="bg-accent h-10 hover:bg-[#17526b] text-white font-bold  px-2 rounded"
                            type="submit"
                        >
                            Add Product

                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProductModal;