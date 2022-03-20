import requests from "./httpService";

const CategoryServices = {
  getAllCategory() {
    return requests.get("/getAllCategory");
  },

  addCategory(body) {
    return requests.post("/admin/category/new", body);
  },
};

export default CategoryServices;
