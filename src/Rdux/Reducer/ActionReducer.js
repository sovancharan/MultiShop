import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
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
            toast.success('Item Add to Cart');

            const {
                productId,

                productName,
                productImage,
                productPrice,
                productRateing,
                productQuantity,
            } = action.payload;

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
            toast.success('Item Add to WishList');

            return {
                ...state,
            };

        case 'INCBTN':
            state.list.addToCart += 1;
            const { id } = action.payload;

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
            if (state.list.addToCart > 1) state.list.addToCart -= 1;
            else if (state.list.addToCart === 1) {
                toast.error("You Can't Decriment More");
            }
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
        case 'REMOVE_ITEMS':
            if (state.list.addToCart > 1) {
                state.list.addToCart -= 1;
            }
            const newItems = state.products.filter(
                (items) => items.productId !== action.payload.id
            );

            return {
                ...state,
                products: [...newItems],
            };

        default:
            return state;
    }
};

export default ActionReducer;
