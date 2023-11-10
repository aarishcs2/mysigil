import { useState } from "react";
import '../src/style/style.css';
import "./App.css";
import { AuthProvider } from "./context/AuthContext";
import AppRoute from "./routes";
import Home from "./views/Home";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [token, setToken] = useState(true);
  const updateToken = () => {
    setToken(true);
  };
  return (
    <AuthProvider>
      <AppRoute />
      <ToastContainer />
    </AuthProvider>
  );
}
export default App;
