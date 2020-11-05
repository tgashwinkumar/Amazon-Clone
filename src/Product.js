import React from 'react'
import './Product.css'
import StarIcon from '@material-ui/icons/Star'
import { useStateValue } from './StateProvider';

function Product({id,title,price,rating,image}) {
    const antirating = 5 - rating;
    const [state, dispatch] = useStateValue();
    // const {basket} = state

    const addToBasket = () => {
        
        dispatch({
            type:"ADD_TO_BASKET",
            item:{
                id:id,
                title:title,
                price:price,
                rating:rating,
                image:image
            }
        })
    }

    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <span>&#165;</span>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {
                        Array(rating).fill().map(_ => <span className="checkedStar"><StarIcon/></span>)
                    }
                    
                    {
                        Array(antirating).fill().map(_ => <span><StarIcon/></span>)
                    }
                </div>
            </div>
            
            <img src={image} alt={`${title}`} /><br/>
            <button onClick={addToBasket}>
                Add to Basket
            </button>
        </div>
    )
}

export default Product
