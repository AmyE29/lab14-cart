/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
var cart;

function loadCart() {
  var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// DONE: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  // for (var i= 0; i < trEL.length; i++);
  table.deleteRow(-1);
}

// DONE: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
  var cart = cart;
  // DONE: Find the table body
  for (var i = 0; i < cart.length; i++);
  // DONE: Iterate over the items in the cart
  var tableDataEl = document.getElementById('cart');
  function cart () {
    var trEL= document.createElement('tr');
    tableDataEl.appendChild(trEL);

    var tdEL = document.createElement('Remove');
    trEL.appendChild(tdEL);

    var tdEL = document.createElement('Quantity');
    trEL.appendChild(tdEL);

    var tdEL = document.createElement('Item');
    trEL.appendChild(tdEL);

  }
  // DONE: Create a TR
  // DONE: Create a TD for the delete link, quantity,  and the item
  // DONE!: Add the TR to the TBODY and each of the TD's to the TR
  // cartItems = variable array

}
// DONE: When a delete link is clicked, use cart.removeItem to remove the correct item
function removeItemFromCart(event) {
  event.addEventListener('click', cart.removeItemFromCart)('Item');

  
  // DONE: Save the cart back to local storage
  var cartItemsStringified = JSON.stringify(cartItems);
  localStorage.setItem('cart', cartItemsStringified);
  // DONE: Re-draw the cart table
cart();
}

// This will initialize the page and draw the cart on screen
renderCart();
