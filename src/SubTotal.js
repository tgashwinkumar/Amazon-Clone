import React from 'react';
import './SubTotal.css';

import CurrecyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';

function SubTotal() {

    const [{basket}, dispatch] = useStateValue();

    const getBasketTotal = (basket) => {
        var total = 0;
        basket.forEach(item => {
            total += item.price
        });
        return total;
    }

    return (
        <div className="subtotal">
           <h1 className="subtotal__head">Subtotal</h1>
           <CurrecyFormat
           renderText = {(value) => (
               <p>
                    SubTotal ({basket.length} items): <strong>{value}</strong>
               </p>
           )}
            decimalScale={3}
            value={getBasketTotal(basket)}
            displayType="text"
            thousandSeparator={true}
            prefix={'£'}
           />
           <button>Proceed to Checkout</button>
        </div>
    )
}

export default SubTotal
