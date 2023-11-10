import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppRoute from "../src/config/routes";
import "../src/style/style.css";
import "./App.css";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <AppRoute />
      <ToastContainer />
    </AuthProvider>
  );
}
export default App;
