import Column from "../column/Column";
import s from "./columns.module.css";

////////////////////////////////////////////////////////////
const Columns = () => {
  return (
    <div className={s.columnsContainer}>
      <Column />
      <Column />
      <Column />
    </div>
  );
};
export default Columns;
