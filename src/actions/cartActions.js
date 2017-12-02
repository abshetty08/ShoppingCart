"use strict"

// ADD to cart
export function addToCart(book){
	return {
		type:"ADD_TO_CART",
		payload: book
	}
}

// UPDATE to cart
export function updateCart(_id, unit, cart){
	// Create a copy of the current array of books
	const currentBookToUpdate = cart
	// Determine at which index in books array is the book to be deleted
	const indexToUpdate = currentBookToUpdate.findIndex(
		function(book){
			return book._id === _id;
		}
	)
	// Create a new book object with the new values and with the same array index of the item we want to replace. To achieve this we will use ...spread but we could use concat methos too
	const newBookToUpdate = { 
		...currentBookToUpdate[indexToUpdate], 
		quantity: currentBookToUpdate[indexToUpdate].quantity + unit
	}
	
	let cartUpdate = [...currentBookToUpdate.slice(0, indexToUpdate), newBookToUpdate, 
	...currentBookToUpdate.slice(indexToUpdate + 1)]

	return {
		type:"UPDATE_CART",
		payload:cartUpdate
	}
}

// DELETE from cart
export function deleteCartItem(cart){
	return {
		type:"DELETE_CART_ITEM",
		payload: cart
	}
}