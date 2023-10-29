import s from "./content.module.css";
import { DrawerHeader, Main } from "../materialUI/Mui";

import { selectCurrentBoard } from "../../selectors/allSelectors";
import { useSelector } from "react-redux";
import CurrentBoard from "../currentBoard/CurrentBoard";
type MainProps = {
  open: boolean;
};
/////////////////////////////////////////////////////
const Content = ({ open }: MainProps) => {
  const currentBoard = useSelector(selectCurrentBoard);
  console.log("contentRerender");
  return (
    <div style={{ width: "100%" }}>
      {currentBoard ? (
        <div>
          <Main
            className={s.custom}
            open={open}
          >
            <DrawerHeader />
            <div
              className={open ? s.buttonContainerOpen : s.buttonContainerClosed}
            >
              <CurrentBoard currentBoardId={currentBoard._id} />
            </div>
          </Main>
        </div>
      ) : (
        <div className={open ? s.buttonContainerOpen : s.buttonContainerClosed}>
          <div className={s.content__emptyBlock}>
            <p className={s.content__emptyText}>
              "Before starting your project, it is essential to create a board
              to visualize and track all the necessary tasks and milestones.
              This board serves as a powerful tool to organize the workflow and
              ensure effective collaboration among team members."
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Content;
