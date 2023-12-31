import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { useTheme } from "@mui/material/styles";
import { DrawerHeader, drawerWidth } from "../materialUI/Mui";
import { useEffect, useState } from "react";
import { v1 } from "uuid";
import { useDispatch, useSelector } from "react-redux";

import { selectAllBoards } from "../../selectors/allSelectors";
import { useAppDispatch } from "../../storeRedux/reduxHooks";
import { CreateNewBoardPortal } from "../../portals/newBoard/CreateNewBoardPortal";
import {
  createNewBoardAct,
  getAllBoardsAct,
} from "../../storeRedux/board/boardAsyncActions";
import { Board } from "../../types/board";

import { setCurrentBoard } from "../../storeRedux/board/boardsSlice";

interface SidebarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

///////////////////////////////////////////////////////////////
const Sidebar = ({ open, setOpen }: SidebarProps) => {
  console.log("sidebarRerender");
  const [isOpenPortal, setIsOpenPortal] = useState(false);
  const allBoards = useSelector(selectAllBoards);
  //useSelector автоматически вызывает selectAllBoards и передает текущее состояние Redux-хранилища в этот селектор. При вызове useSelector React Redux обнаруживает, что вы передали функцию и вызывает ее, передавая в нее текущее состояние Redux-хранилища.
  const dispatch = useAppDispatch();
  const theme = useTheme();
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleClosePortal = () => {
    setIsOpenPortal(false);
  };
  const handleCreateNewBoard = (title: string) => {
    dispatch(createNewBoardAct({ title }));
  };

  console.log("boards", allBoards);

  useEffect(() => {
    console.log("useEffect");
    dispatch(getAllBoardsAct());
  }, []);

  const handleChooseBord = (currentBoard: Board) => {
    dispatch(setCurrentBoard(currentBoard));
  };

  return (
    <div>
      <div>
        {isOpenPortal && (
          <CreateNewBoardPortal
            isOpen={isOpenPortal}
            onClose={handleClosePortal}
            createNewBoard={handleCreateNewBoard}
          />
        )}
      </div>
      <div style={{ backgroundColor: "blue", height: "50px" }}>
        {" "}
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <div>
            <button onClick={() => setIsOpenPortal(true)}>
              {/* <button onClick={() => dispatch(addBoard({ boardTitle: "title" }))}>465</button> */}
              Create a new board
            </button>
          </div>
          <Divider />
          My boards:
          <Divider />
          <List>
            {allBoards?.map((item: Board, index: number) => (
              <ListItem
                key={index}
                disablePadding
                onClick={() => handleChooseBord(item)}
              >
                <ListItemButton>
                  {/* <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon> */}
                  <ListItemText primary={item?.boardTitle} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Drawer>
      </div>
    </div>
  );
};

export default Sidebar;
