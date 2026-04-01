// import { useState } from "react";

function AddButton({ productId, productTitle }) {
    function handleClick() {
        alert(`Product clicked.\n id: ${productId}, title: ${productTitle}`);
    }

    return (
        <button
            className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded"
            type="button"
            onClick={handleClick}
        >
            Add to Cart
        </button>
    );
}

export default AddButton;
