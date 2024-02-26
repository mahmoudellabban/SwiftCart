// to add item to the cart 
export const addCart = (product) => {
    return{
        type: "ADDITEM",
        payload: product
    }
}

// to delete item from the cart 
export const delCart = (product) => {
    return{
        type: "DELITEM",
        payload: product
    }
}