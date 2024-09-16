export type TProduct = {
    _id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    category: string;
    brand: string;
    features: string;
    isDeleted?: boolean;
    quantity?: number
};