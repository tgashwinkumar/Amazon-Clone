import React from 'react';
import './CheckoutProduct.css'
import StarIcon from '@material-ui/icons/Star';
import { useStateValue } from './StateProvider';

function CheckoutProduct({id,title,price,rating,image}) {
    const antirating = 5 - rating;
    const [{basket}, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id:id,
        })
    }

    return (
        
        <div className="checkoutProduct">
            <div><img src={image} alt={title} /></div>

            <div className="checkoutProduct__info">
                <p>{title}</p>
                <p className="checkoutProduct__price">
                    <span>&#163; </span>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    { Array(rating).fill().map(_ => <span className="checkedStar"><StarIcon/></span>) }
                    { Array(antirating).fill().map(_ => <span><StarIcon/></span>) }
                </div>
                <button onClick={removeFromBasket}>Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
