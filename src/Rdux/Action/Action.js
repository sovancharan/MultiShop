export const addToCart = (
    productId,

    productName,
    productImage,
    productPrice,
    productRateing,
    productQuantity
) => {
    return {
        type: 'ADDTOCART',
        payload: {
            productId: productId,

            productName: productName,
            productImage: productImage,
            productPrice: productPrice,
            productRateing: productRateing,
            productQuantity: productQuantity,
        },
    };
};


export const addToWishlist = () => {
    return {
        type: 'ADDTOWISHLIST',
    };
};
export const incBtnA=(id,data)=>{
        return{
                type:"INCBTN",
                payload:{
                        id:id,
                        data:data
                }
        }
}
export const decBtnA=(id,data)=>{
        return {
            type: 'DECBTN',
            payload: {
                id: id,
                data: data,
            },
        };
}
export const removeItemsA =(id)=>{
        return {
                type:"REMOVE_ITEMS",
                payload:{
                        id:id
                }
        }
}
