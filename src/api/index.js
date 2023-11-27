import axios from "axios";

const instance = axios.create({
  // baseURL: "https://mysigilbackend.onrender.com",
  baseURL: "http://localhost:5000",
  headers: { "X-Custom-Header": "foobar" },
});

export const accountLogin = (payload) => {
  return instance.post("/login", payload);
};

export const accountRegister = (payload) => {
  return instance.post("/registeruser", payload);
};

export const forgotPassword = (payload) => {
  return instance.post("/forgotpassword", payload);
};

export const verifyToken = (payload) => {
  return instance.get(`/verifytoken/${payload.token}`);
};

export const resetPassword = (payload) => {
  return instance.put(`/updateuserPassword/${payload.id}`, payload);
};
