import requests from "./httpService";

const AdminServices = {
  loginAdmin(body) {
    return requests.post(`/login`, body);
  },
};

export default AdminServices;
