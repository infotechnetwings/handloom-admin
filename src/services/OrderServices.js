import requests from "./httpService";

const OrderServices = {
  getAllOrders(body, headers) {
    return requests.get("/admin/orders", body, headers);
  },

  getOrderByUser(id, body) {
    return requests.get(`/admin/order/me`, body);
  },

  getOrderById(id, body) {
    return requests.get(`/order/${id}`, body);
  },

  updateOrder(id, body, headers) {
    return requests.put(`/admin/order/${id}`, body, headers);
  },

  deleteOrder(id) {
    return requests.delete(`/admin/order/${id}`);
  },
};

export default OrderServices;
