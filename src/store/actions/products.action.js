
export const selectProduct = (id) => {
    return {
        type: 'SELECT_PRODUCT',
        productId: id,
    }
}

export const filterProducts = (categoryId) => {
    return {
    type: 'FILTER_PRODUCTS',
    categoryId: categoryId
}}