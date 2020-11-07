export const initialState = {
    basket:[],
    user:null,
}

const reducer = (state, action) => {
    console.log("From reducer:- ", "\nState:",state,"\nAction:",action);
    switch(action.type){
        case "SET_USER":
            return {...state, user:action.user}
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