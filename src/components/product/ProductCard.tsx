/* eslint-disable @typescript-eslint/no-explicit-any */
// import { TBlog } from "@/types";

import { TProduct } from "@/types/TProduct";
import Image from "next/image";
import Link from "next/link";

const ProductCard
    = ({ product }: { product: TProduct }) => {
        return (
            <Link href={`products/${product._id}`} className="card card-compact bg-base-100 w-[90%] shadow-xl mx-auto">
                <figure>
                    <Image
                        className=""
                        src={product?.image}
                        width={330}
                        height={0}
                        alt="Electronic" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Oppo!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-accent">Buy Now</button>
                    </div>
                </div>
            </Link>
        );
    };

export default ProductCard
    ;
