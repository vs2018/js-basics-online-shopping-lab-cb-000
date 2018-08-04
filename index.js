var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

function addToCart(item) {
  var obj = {};
  obj['itemName'] = item;
  obj['itemPrice'] = getRandomIntInclusive(1, 100);
  cart.push(obj);

  return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  }
  var result = "In your cart, you have "
  for(var i = 0; i < cart.length; i++) {
    if (cart.length === 1) {
      result += `${cart[i]['itemName']} at $${cart[i]['itemPrice']}.`
    } else if (cart.length === 2) {
      if (i === 0) {
        result += `${cart[i]['itemName']} at $${cart[i]['itemPrice']}, `
      } else {
        result += `and ${cart[i]['itemName']} at $${cart[i]['itemPrice']}.`
      }
    } else {
      if (i === 0) {
        result += `${cart[i]['itemName']} at $${cart[i]['itemPrice']}, `
      } else if (i !== cart.length - 1) {
        result += `${cart[i]['itemName']} at $${cart[i]['itemPrice']}, `
      } else {
        result += `and ${cart[i]['itemName']} at $${cart[i]['itemPrice']}.`
      }
    }
  }
  return result
}

function total() {
  // write your code here
  var total
  for (var i = 0; i < cart.length; i++) {
    total += cart[i]['itemPrice']
  }
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
