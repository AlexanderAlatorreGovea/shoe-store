export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
      cartItem => cartItem._id === cartItemToAdd._id
    );

    if (existingCartItem) {
      return cartItems.map(cartItem =>
        cartItem._id === cartItemToAdd._id
          ? { ...cartItem, quantity: cartItemToAdd.chosenSize.length }
          : cartItem
      );
    }
 
    return [...cartItems, { ...cartItemToAdd, quantity: cartItemToAdd['chosenSize'].length }];
};
  
export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem._id === cartItemToRemove._id
    );
 
    console.log(existingCartItem.chosenSize.pop())

    if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem._id !== cartItemToRemove._id) 
    }

    return cartItems.map(cartItem =>
        cartItem._id === cartItemToRemove._id
        ? { ...cartItem, quantity: cartItem.quantity - 1, chosenSize: [cartItem.chosenSize].pop() }
        : cartItem
    );
};

export const removeSize = (cartItems, cartItemToRemove, size, idx) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem._id === cartItemToRemove._id
    );

    if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem._id !== cartItemToRemove._id) 
    }

    return cartItems.map((cartItem, index) =>
        cartItem._id === cartItemToRemove._id 
        ? { ...cartItem, quantity: cartItem.quantity - 1, ...index > -1 && cartItem.chosenSize.splice(idx, 1) }
        : cartItem
    );
};
