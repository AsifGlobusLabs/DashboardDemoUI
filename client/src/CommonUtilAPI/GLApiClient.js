import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/api",
  headers: { "Content-Type": "application/json" },
});
const authTokenGl = window.sessionStorage.getItem("authToken");
const axiosInstance_WithToken = axios.create({
  baseURL: "http://localhost:5000/api",
  headers: {
    Authorization: `x-gl-Auth-Token ${authTokenGl}`,
    "Content-Type": "application/json",
  },
});

const _getAll_WithoutToken = (urlAction) => {
  return axiosInstance.get(urlAction).then((res) => res.data);
};

const _post_WithoutToken = (urlAction, data = {}) => {
  return axiosInstance.post(urlAction, data).then((res) => res.data);
};

const _getAll = (urlAction) => {
  return axiosInstance_WithToken.get(urlAction).then((res) => res.data);
};

const _post = (urlAction, data = {}) => {
  console.log("Url :", urlAction);
  return axiosInstance_WithToken.post(urlAction, data).then((res) => res.data);
};

export { _getAll_WithoutToken, _post_WithoutToken, _getAll, _post };
