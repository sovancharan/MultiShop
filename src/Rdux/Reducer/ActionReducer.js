import { addToCart } from '../Action/Action';

const initialData = {
    list: {
        addToCart: 5,
        addToWishlist: 2,
    },
};

const ActionReducer = (state = initialData, action) => {
    switch (action.type) {
        case 'ADDTOCART':
            state.list.addToCart += 1;
            return {
                ...state,
            };

        case 'ADDTOWISHLIST':
                state.list.addToWishlist +=1;

                return{
                        ...state,
                }

        default:
            return state;
    }
};

export default ActionReducer;
