import React from 'react';
import './Checkout.css';
import Subtotal from "./Subtotal";
import { useStateValue } from './StateProvider';
import CheckoutProduct from "./CheckoutProduct"

function Checkout() {
    const [{basket,user}, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img
                    className="checkout__ad"
                    src="https://wowslider.com/sliders/demo-40/data1/images/cherry_blossom.jpg"
                    alt="img not found"
                />
                <div>
                    <h3>Hello, {user?.email}</h3>
                    <h2 className="checkout__title">
                        Your Shopping Basket
                    </h2>
                    {basket.map(item=>(
                    <CheckoutProduct 
                    id={item.id}
                    title={item.title}
                    price={item.price}
                    image={item.image}
                    rating={item.rating}
                    />
                    ))}


                </div>
            </div>

            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
