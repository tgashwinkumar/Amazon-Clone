import shoe2 from './images/0004.jpg';

export const initialState = {
    basket:[{
        id:"0001",
        title:"Black and White Nike SportsX",
        price:11.96,
        rating:5,
        image:shoe2
    },{
        id:"0001",
        title:"Black and White Nike SportsX",
        price:11.96,
        rating:5,
        image:shoe2
    },{
        id:"0001",
        title:"Black and White Nike SportsX",
        price:11.96,
        rating:5,
        image:shoe2
    },{
        id:"0001",
        title:"Black and White Nike SportsX",
        price:11.96,
        rating:5,
        image:shoe2
    },{
        id:"0001",
        title:"Black and White Nike SportsX",
        price:11.96,
        rating:5,
        image:shoe2
    },{
        id:"0001",
        title:"Black and White Nike SportsX",
        price:11.96,
        rating:5,
        image:shoe2
    },{
        id:"0001",
        title:"Black and White Nike SportsX",
        price:11.96,
        rating:5,
        image:shoe2
    },],
    user:null,
}

const reducer = (state, action) => {
    console.log("From reducer:- ", "\nState:",state,"\nAction:",action);
    switch(action.type){
        case "ADD_TO_BASKET":
            return {...state, basket: [...state.basket, action.item]};
        case "REMOVE_FROM_BASKET":
            let newBasket = [...state.basket];
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id)
            if (index > -1){
                newBasket.splice(index, 1);
                return {...state, basket: [...newBasket]};
            }else{
                console.warn("Cant remove the item in the basket.");
                alert("Cant remove the item.");
                return {...state};
            }
        default:
            return {...state};
    }
}

export default reducer;