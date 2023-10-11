import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Board = {
  boardTitle: string;
};

type InitialStateType = {
  allBoards: Board[];
  currentBoard: Board | null;
};

const initialState: InitialStateType = {
  allBoards: [],
  currentBoard: null,
};

const boardsSlice = createSlice({
  name: "boards",
  initialState,
  reducers: {
    addBoard: (state: InitialStateType, action: PayloadAction<Board>) => {
      console.log(state);
      console.log(action);
      const newBoard = {
        boardTitle: action.payload.boardTitle,
      };
      state.allBoards.push(newBoard);
    },
  },
});

export const { addBoard } = boardsSlice.actions;

export default boardsSlice.reducer;
