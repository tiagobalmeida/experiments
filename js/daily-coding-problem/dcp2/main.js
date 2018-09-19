/**
 * Given an array of Number, returns a new array with the 
 * same size that, in each element, has the product of all the
 * other elements, except that element.
 * Don't use division.
 * @param {Array of Number} items 
 */
function products(items) { 
    var result = new Array(items.length);
    var productSoFar = 1;

    // let's scan the array from the left and keep
    // the product of the elements seen so far
    // (except the one just seen)
    for (let i = 0; i < items.length; i++) {
        const element = items[i];
        result[i] = productSoFar;
        productSoFar *= element;     
    }
    // Every element in result has the product
    // of all the previous elements. Let's do the
    // same from the right.
    productSoFar = 1;
    for (let i = items.length - 1 ; i >=0 ; i--) {
        const element = items[i];
        result[i] *= productSoFar;
        productSoFar *= element;
    }
    return result;
}

module.exports = { 
    products
};