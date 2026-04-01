// import { useState } from "react";
import CartIcon from "../assets/add_shopping_cart.svg";

function AddButton({ productId, productTitle }) {
    function handleClick() {
        alert(`Product clicked.\n id: ${productId}, title: ${productTitle}`);
    }

    return (
        <button
            className="bg-gray-800 hover:bg-gray-900 text-white font-bold p-3 rounded-full"
            type="button"
            onClick={handleClick}
        >
            <img src={CartIcon} alt="cart" className="w-5 h-5 block " />
            {console.log(CartIcon)}
        </button>
    );
}

export default AddButton;
