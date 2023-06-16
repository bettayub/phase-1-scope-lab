// Write your solution in t

let customerName;

function declareCustomerName() {
  window.customerName = 'bob';
}

function upperCaseCustomerName() {
  window.customerName = window.customerName.toUpperCase();
}

declareCustomerName();

function setBestCustomer() {
  bestCustomer = 'not bob';
}

function overwriteBestCustomer(newBestCustomer) {
  bestCustomer = newBestCustomer;
}

const leastFavoriteCustomer = 'someone';

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'new person';
}