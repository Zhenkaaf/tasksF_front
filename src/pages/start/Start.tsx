import { Link } from "react-router-dom";
import s from "./start.module.css";

const Start = () => {
  return (
    <div>
      <div>
        <img
          src="https://task-pro.p.goit.global/static/media/welcome-page-1x.abcacf1d2213219c6bdf.png"
          alt=""
        />
      </div>
      <div>
        <div>icon</div>
        <h1>TaskF</h1>
      </div>
      <div>
        <p>
          Supercharge your productivity and take control of your tasks with Task
          Pro - Don't wait, start achieving your goals now!
        </p>
      </div>
      <div>
        <Link to="/register">Registration</Link>
      </div>
      <div>
        <Link to="/login">Log In</Link>
      </div>
    </div>
  );
};
export default Start;
