import { useEffect, useState } from "react";
import "../src/style/style.css";
import "./App.css";
import { AuthProvider } from "./context/AuthContext";
import AppRoute from "../src/config/routes";
import Home from "./views/Home";
function App() {
  const [token, setToken] = useState(false);
  // useEffect(() => {
  //   const access_token = localStorage.getItem("access_token");
  //   setToken(access_token);
  // }, []);
 
  return (
    <AuthProvider>
      <AppRoute />
    </AuthProvider>
  );
}
export default App;
