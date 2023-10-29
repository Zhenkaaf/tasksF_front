import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ApiError, Board } from "../../types/board";
import {
  createNewBoardAct,
  createNewColumnAct,
  getAllBoardsAct,
} from "./boardAsyncActions";

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
    setCurrentBoard: (
      state: InitialStateType,
      action: PayloadAction<Board>
    ) => {
      console.log(action.payload);
      state.currentBoard = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllBoardsAct.fulfilled, (state, action) => {
        console.log("getAllBoardsAct.fulfilled");
        state.allBoards = action.payload;
        /* getAllBoardsAct - это асинхронное действие, которое вы запускаете, когда хотите получить список досок.
        getAllBoardsAct.fulfilled - это часть reducer'a, который автоматически создается Redux Toolkit при использовании createAsyncThunk. Этот fulfilled кейс срабатывает, когда ваше асинхронное действие завершилось успешно.

        Внутри getAllBoardsAct.fulfilled case, action.payload представляет собой данные, которые вернула ваша асинхронная операция. В вашем случае это список досок.

        state.allBoards = action.payload; - эта строка обновляет свойство allBoards в состоянии хранилища вашего Redux store новым списком досок, который был получен из вашего асинхронного запроса. */
      })
      .addCase(createNewBoardAct.fulfilled, (state, action) => {
        console.log("createNewBoardAct.fulfilled");
        state.allBoards.push(action.payload);
      })
      .addCase(createNewBoardAct.rejected, (state, action) => {
        const payload = action.payload as ApiError;
        console.error(payload.code);
      })
      .addCase(createNewColumnAct.fulfilled, (state, action) => {
        console.log("createNewColumnAct.fulfilled");
        const newColumn = action.payload;
        console.log("newColumn", newColumn);
        //проверку на айди доски добавить
        state.currentBoard?.columns.push(newColumn);
        /*  console.log("newColumn", newColumn);
        const currentBoard = state.allBoards.find(
          (board) => board._id === currentBoardId
        );
        currentBoard?.columns.push(newColumn); */
      });

    /*  .addCase(removeTodo.fulfilled, (state, action) => {
        state.list = state.list.filter((todo) => todo.id !== action.payload);
      }) */
  },
});

export const { setCurrentBoard } = boardsSlice.actions;

export default boardsSlice.reducer;
