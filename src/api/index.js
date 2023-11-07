import axios from "axios";

const instance = axios.create({
  baseURL: "https://mysigilbackend.onrender.com",
  headers: { "X-Custom-Header": "foobar" },
  
});

const accountLogin = (payload) => {
  return instance.post("/login", payload);
};

const accountRegister = (payload) => {
  return instance.post("/registeruser", payload);
};

export { accountLogin, accountRegister };
