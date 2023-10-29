import { Link } from "react-router-dom";
import s from "./login.module.css";

const Login = () => {
  return (
    <div>
      Login
      <div>
        <Link to="/home">To Home</Link>
      </div>
    </div>
  );
};
export default Login;
