import axios from "axios";

const BASE_URL = "https://cinematopy-api.herokuapp.com/";

function createHeader() {
  const auth = JSON.parse(localStorage.getItem("CinemaTopy"));
  const config = {
    headers: { Authorization: `Bearer ${auth.token}` }
  };
  return config;
} 

function singUp(body) {
  const promise = axios.post(BASE_URL + "sign-up", body);
  return promise;
}

function login(body) {
  const promise = axios.post(BASE_URL + "sign-in", body);
  return promise;
}

function validToken() {
  const header = createHeader();
  const promise = axios.get(BASE_URL + "token", header);
  return promise;
}

function listCartProducts() {
  const header = createHeader();
  const promise = axios.get(BASE_URL + "cart/products", header);
  return promise;
}

function updateCartProductAmount(body) {
  const header = createHeader();
  const promise = axios.put(BASE_URL + "cart/product", body, header);
  return promise;
}

function deleteCartProduct(body) {
  const header = createHeader();
  const promise = axios.post(BASE_URL + "cart/delete-product", body, header);
  return promise;
}

function cleanCart() {
  const header = createHeader();
  const promise = axios.delete(BASE_URL + "cart/products", header);
  return promise;
}

function listProducts() {
  const promise = axios.get(BASE_URL + "products");
  return promise;
}

function addProduct(body) {
  const header = createHeader();
  const promise = axios.post(BASE_URL + "cart/product", body, header);
  return promise;
}

function addUserPurchaseDetails(body) {
  const header = createHeader();
  const promise = axios.put(BASE_URL + 'purchase-details', body, header);
  return promise
}

function checkout(body) {
  const header = createHeader();
  const promise = axios.post(BASE_URL + 'checkout', body, header);
  return promise;
}

function productDetails(id) {
  const promise = axios.get(BASE_URL + "product/" + id);
  return promise;
}

function listPurchases() {
  const header = createHeader();
  const promise = axios.get(BASE_URL + "checkout", header);
  return promise;
}

export { listPurchases, singUp, login, validToken, listCartProducts, updateCartProductAmount, deleteCartProduct, cleanCart, listProducts, addProduct, addUserPurchaseDetails, checkout, productDetails };