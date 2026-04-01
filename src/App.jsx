// import { useState } from "react";
import "./App.css";
import ProductCard from "./product-card/ProductCard";

function App() {
    const products = [
        {
            id: 101,
            title: "SonicBlast Wireless Earbuds",
            brand: "AuraSound",
            price: 89.99,
            description:
                "True wireless earbuds with active noise cancellation and 30-hour battery life.",
            image: "https://fake-img.com",
        },
        {
            id: 102,
            title: "PixelView 27-inch 4K Monitor",
            brand: "VisionTech",
            price: 349.5,
            description:
                "Ultra-HD IPS display with 144Hz refresh rate and HDR10 support for professional editing.",
            image: "https://fake-img.com",
        },
        {
            id: 103,
            title: "Titan Pro Mechanical Keyboard",
            brand: "KeyForge",
            price: 120.0,
            description:
                "RGB backlit mechanical keyboard with hot-swappable switches and brushed aluminum frame.",
            image: "https://fake-img.com",
        },
        {
            id: 104,
            title: "NovaTab 10 Plus",
            brand: "Stellar",
            price: 299.0,
            description:
                "Slim 10-inch tablet with a crystal-clear OLED screen and expandable storage.",
            image: "https://fake-img.com",
        },
        {
            id: 105,
            title: "StreamMaster 1080p Webcam",
            brand: "OpticFlow",
            price: 65.0,
            description:
                "High-definition webcam with autofocus and dual noise-reducing microphones.",
            image: "https://fake-img.com",
        },
        {
            id: 106,
            title: "PowerGrid Portable Power Bank",
            brand: "VoltCore",
            price: 45.99,
            description:
                "20,000mAh high-capacity charger with USB-C PD fast charging.",
            image: "https://fake-img.com",
        },
    ];

    return (
        <main>
            <h1>Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {products.map((product) => (
                    // <p>{product.title}</p>
                    <ProductCard
                        key={product.id}
                        product={product}
                    ></ProductCard>
                ))}
            </div>
        </main>
    );
}

export default App;
