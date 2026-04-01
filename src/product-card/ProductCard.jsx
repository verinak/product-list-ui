// import { useState } from "react";

import AddButton from "../add-button/AddButton";

function ProductCard({ product }) {
    return (
        <div className="rounded-xl border border-gray-200 p-4 shadow-sm bg-white flex flex-col h-full">
            <h2 className="text-lg font-semibold text-gray-800">
                {product.title}
            </h2>

            <p className="text-sm text-gray-600 mt-2">{product.description}</p>

            <p className="text-base font-bold text-gray-900 mt-3">
                ${product.price}
            </p>

            <div className="mt-auto pt-4">
                <AddButton
                    productId={product.id}
                    productTitle={product.title}
                />
            </div>
        </div>
    );
}

export default ProductCard;
