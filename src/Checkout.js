import React from 'react';
import './Checkout.css';
import Subtotal from "./Subtotal";

function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img
                    className="checkout__ad"
                    src="https://wowslider.com/sliders/demo-40/data1/images/cherry_blossom.jpg"
                    alt="img not found"
                />
                <div>
                    <h2 className="checkout__title">
                        Your Shopping Basket </h2>
                    {/* BasketItem */}
                    {/* BasketItem */}
                    {/* BasketItem */}
                    {/* BasketItem */}

                </div>
            </div>

            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
