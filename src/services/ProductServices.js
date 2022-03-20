import requests from "./httpService";

const ProductServices = {
  getAllProducts() {
    return requests.get("/admin/products");
  },

  getProductById(id) {
    return requests.post(`/admin/products/${id}`);
  },

  addProduct(body) {
    return requests.post("/admin/product/new", body);
  },

  updateProduct(id, body) {
    return requests.put(`/admin/product/${id}`, body);
  },

  deleteProduct(id) {
    return requests.delete(`/admin/product/${id}`);
  },
};

export default ProductServices;
