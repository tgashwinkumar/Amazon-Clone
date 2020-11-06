import React from 'react';
import './Checkout.css'
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import {Link} from 'react-router-dom';
import emptyCart from './images/emptycart.svg'

function Checkout() {

    const [{basket},dispatch] = useStateValue();

    return (
        <div className="checkout">
            {basket?.length === 0 ? (
                <div className="checkout__emptyInfo">
                    <h2>Your shopping basket is empty.</h2>
                    <p>You have no items in your basket. Click "<Link to='/' className="checkout__emptyLink">Add to Basket</Link>" near the item, to add it to the basket.</p>
                    <img src={emptyCart} alt="Your Basket is empty." className="checkout__emptyImg"/>
                </div>
            ) : (
                <div>
                    <h2>Your Shopping basket:</h2>
                    {
                        basket.map(
                            item => <CheckoutProduct id={item.id} title={item.title} rating={item.rating} price={item.price} image={item.image}/>
                        )
                    }
                </div>
            )
            }
        </div>
    )
}

export default Checkout
