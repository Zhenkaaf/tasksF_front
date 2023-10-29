import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Start from "./pages/start/Start";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Start />}
      />
      <Route
        path="/home"
        element={<Home />}
      />
      <Route
        path="/register"
        element={<Register />}
      />
      <Route
        path="/login"
        element={<Login />}
      />
    </Routes>
  );
}

export default App;
