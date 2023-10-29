import { useState } from "react";
import Column from "../column/Column";
import s from "./currentBoard.module.css";
import { CreateNewColumnPortal } from "../../portals/newColumn/CreateNewCulumnPortal";
import { useAppDispatch } from "../../storeRedux/reduxHooks";
import { createNewColumnAct } from "../../storeRedux/board/boardAsyncActions";
import { useSelector } from "react-redux";
import { selectCurrentBoardColumns } from "../../selectors/allSelectors";
interface CurrentBoardProps {
  currentBoardId: string;
}
////////////////////////////////////////////////////////////
const CurrentBoard = ({ currentBoardId }: CurrentBoardProps) => {
  const dispatch = useAppDispatch();
  const currentBoardColumns = useSelector(selectCurrentBoardColumns);
  console.log(currentBoardColumns);
  const [isOpenPortal, setIsOpenPortal] = useState(false);
  const handleClosePortal = () => {
    setIsOpenPortal(false);
  };
  const handleCreateNewColumn = (title: string) => {
    console.log("titleFromPortalColumn", title);
    dispatch(createNewColumnAct({ currentBoardId, title }));
  };

  return (
    <div className={s.columnsContainer}>
      <div>
        {isOpenPortal && (
          <CreateNewColumnPortal
            isOpen={isOpenPortal}
            onClose={handleClosePortal}
            createNewColumn={handleCreateNewColumn}
          />
        )}
      </div>
      {currentBoardColumns?.map((item) => (
        <Column
          key={item._id}
          columnTitle={item.columnTitle}
        />
      ))}

      <div>
        <button onClick={() => setIsOpenPortal(true)}>
          Add another column
        </button>
      </div>
    </div>
  );
};
export default CurrentBoard;
