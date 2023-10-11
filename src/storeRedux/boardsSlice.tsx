import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Board } from "../types/board";
import { createNewBoardAct } from "./board/boardAsyncActions";

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
    /*  createNewBoardAct: (
      state: InitialStateType,
      action: PayloadAction<Board>
    ) => {
      console.log(state);
      console.log(action);
      const newBoard = {
        boardTitle: action.payload.boardTitle,
        columns: action.payload.columns,
      };
      state.allBoards.push(newBoard);
    }, */
  },
  extraReducers: (builder) => {
    builder
      /*  .addCase(fetchcAllTodos.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchcAllTodos.fulfilled, (state, action) => {
        state.status = "finished";
        state.list = action.payload;
      })
      .addCase(fetchcAllTodos.rejected, (state) => {
        state.status = "error";
      }) */
      .addCase(createNewBoardAct.fulfilled, (state, action) => {
        state.allBoards.push(action.payload);
      });
    /*  .addCase(removeTodo.fulfilled, (state, action) => {
        state.list = state.list.filter((todo) => todo.id !== action.payload);
      }) */
    /*  .addCase(toggleTodo.fulfilled, (state, action) => {
        const todo = state.list.find((el) => el.id === action.payload.id);
        if (todo) {
          console.log("if");
          todo.completed = action.payload.completed;
        }
      }); */
  },
});

export const {
  /*  createNewBoardAct */
} = boardsSlice.actions;

export default boardsSlice.reducer;
