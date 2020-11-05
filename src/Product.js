import React from 'react'
import './Product.css'
import StarIcon from '@material-ui/icons/Star'

function Product({id,title,price,rating,image}) {
    const antirating = 5 - rating
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
            <button>
                Add to Basket
            </button>
        </div>
    )
}

export default Product
