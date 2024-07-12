function calculateTotal(cart) {
    // Write your code here
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        total += cart[i].price * cart[i].quantity;
    }
    return total;
}


// Approach 2: Rewrite the code using reduce() method.
function calculateTotal(cart) {
    const total = cart.reduce((accumulator, currentItem) => {
        // Calculate the cost of each item (price * quantity) and add it to the accumulator
        return accumulator + (currentItem.price * currentItem.quantity);
    }, 0); // Initialize the accumulator to 0

    return total;
}

// Do not modify the below lines
// module.exports = { calculateTotal };
const cart1 = [
    { name: "Laptop", price: 1000, quantity: 1 },
    { name: "Phone", price: 500, quantity: 2 },
    { name: "Headphones", price: 50, quantity: 4 },
  ];
  
console.log(calculateTotal(cart1))


// Reduce Method Approach:
// Uses the reduce() method on the cart array.
// The reduce() method takes an accumulator and the current item as parameters.
// Calculates the cost of each item (price * quantity) and adds it to the accumulator.
// Returns the final accumulated total after processing all items in the cart.
// In terms of functionality, both approaches achieve the same result of calculating the total cost of items in the cart. However, the reduce() method approach is more concise and leverages a built-in JavaScript array method designed for such calculations, making the code cleaner and potentially easier to understand for developers familiar with functional programming concepts.