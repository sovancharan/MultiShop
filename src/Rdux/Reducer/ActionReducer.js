import { addToCart } from '../Action/Action';

const initialData = {
    list: {
        addToCart: 0,
        addToWishlist: 0,
    },
    products: [],
    Inc_Dec_Btn: {
        total: 123,
    },
};

const ActionReducer = (state = initialData, action) => {
    switch (action.type) {
        case 'ADDTOCART':
            state.list.addToCart += 1;
            const {
                productId,

                productName,
                productImage,
                productPrice,
                productRateing,
                productQuantity,
            } = action.payload;

            console.log('state', state);

            return {
                ...state,
                products: [
                    ...state.products,
                    {
                        productId: productId,

                        productName: productName,
                        productImage: productImage,
                        productPrice: productPrice,
                        productRateing: productRateing,
                        productQuantity: parseInt(productQuantity) + 1,
                    },
                ],
            };

        case 'ADDTOWISHLIST':
            state.list.addToWishlist += 1;

            return {
                ...state,
            };

        case 'INCBTN':
            var { id } = action.payload;

            state.products.map((item) => {
                if (item.productId === id) {
                    item.productQuantity += 1;
                }
            });

            return {
                ...state,
                Inc_Dec_Btn: {
                    ...state.Inc_Dec_Btn,
                    id: id,
                },
            };
        case 'DECBTN':
            console.log('ii', id);

            state.products.map((item) => {
                if (item.productId === action.payload.id) {
                    if (item.productQuantity > 1) {
                        item.productQuantity -= 1;
                    }
                }
            });

            return {
                ...state,
                Inc_Dec_Btn: {
                    ...state.Inc_Dec_Btn,
                    id: action.payload.id,
                },
            };

        default:
            return state;
    }
};

export default ActionReducer;
