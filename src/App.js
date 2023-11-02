import { useState } from "react";
import '../src/style/style.css';
import "./App.css";
import { AuthProvider } from "./context/AuthContext";
import AppRoute from "./routes";
import Home from "./views/Home";
function App() {
  const [token, setToken] = useState(false);
  const updateToken = () => {
    setToken(true);
  };
  return (
    <AuthProvider>
      {token ? <AppRoute /> : <Home updateToken={updateToken} />}
    </AuthProvider>
  );
}
export default App;
