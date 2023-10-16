import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Board } from "../../types/board";
import { createNewBoardAct, getAllBoardsAct } from "./boardAsyncActions";

type InitialStateType = {
  allBoards: Board[];
  currentBoard: Board | null | true;
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
      .addCase(getAllBoardsAct.fulfilled, (state, action) => {
        console.log(action);
        state.allBoards = action.payload;
        /* getAllBoardsAct - это асинхронное действие, которое вы запускаете, когда хотите получить список досок.
        getAllBoardsAct.fulfilled - это часть reducer'a, который автоматически создается Redux Toolkit при использовании createAsyncThunk. Этот fulfilled кейс срабатывает, когда ваше асинхронное действие завершилось успешно.

        Внутри getAllBoardsAct.fulfilled case, action.payload представляет собой данные, которые вернула ваша асинхронная операция. В вашем случае это список досок.

        state.allBoards = action.payload; - эта строка обновляет свойство allBoards в состоянии хранилища вашего Redux store новым списком досок, который был получен из вашего асинхронного запроса. */
      })
      .addCase(createNewBoardAct.fulfilled, (state, action) => {
        state.allBoards.push(action.payload);
      });

    /*  .addCase(removeTodo.fulfilled, (state, action) => {
        state.list = state.list.filter((todo) => todo.id !== action.payload);
      }) */
  },
});

export const {
  /*  createNewBoardAct */
} = boardsSlice.actions;

export default boardsSlice.reducer;
