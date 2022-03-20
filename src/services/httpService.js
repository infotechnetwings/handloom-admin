import axios from "axios";
import Cookies from "js-cookie";

const instance = axios.create({
  baseURL: `http://localhost:4001/api/v1`,
  timeout: 500000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

instance.interceptors.request.use(function (config) {
  if (Cookies.get("adminInfo")) {
  }
  return {
    ...config,
    headers: {},
  };
});

const responseBody = (response) => response.data;

const requests = {
  get: (url, body, headers) =>
    instance.get(url, body, headers).then(responseBody),

  post: (url, body) => instance.post(url, body).then(responseBody),

  put: (url, body, headers) =>
    instance.put(url, body, headers).then(responseBody),

  patch: (url, body) => instance.patch(url, body).then(responseBody),

  delete: (url) => instance.delete(url).then(responseBody),
};

export default requests;
