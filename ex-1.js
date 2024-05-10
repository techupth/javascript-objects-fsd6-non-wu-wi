// Exercise #1: Food Order

// Start coding here
const foodOrder = {
  orderNumber: "A0234",
  address: "Bangkok",
  paymentType: "Cash",
  totalPrice: 4500,
  restaurantName: "MK",
};

foodOrder.totalPrice = 5000;
foodOrder.paymentType = "Credit Card";

console.log(foodOrder); // =>
// {
//   orderNumber: 'A0234',
//   address: 'Bangkok',
//   paymentType: 'Credit Card',
//   totalPrice: 5000,
//   restaurantName: 'MK'
// }
