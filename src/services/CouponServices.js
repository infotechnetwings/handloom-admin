import requests from "./httpService";

const CouponServices = {
  addCoupon(body) {
    return requests.post("/admin/coupon/new", body);
  },

  getAllCoupons() {
    return requests.get("/getAllCoupons");
  },
  getCouponById(id) {
    return requests.get(`/coupon/${id}`);
  },
};

export default CouponServices;
