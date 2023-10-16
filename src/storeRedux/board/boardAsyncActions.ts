import { createAsyncThunk } from "@reduxjs/toolkit";
import { Board } from "../../types/board";
import { setLoadingAct } from "../isLoading/isLoadingSlice";
import axios from "axios";

/* При использовании createAsyncThunk, Redux Toolkit автоматически создает три различных типа действия для каждого thunk:

Pending: "board/createNewBoard/pending"
Fulfilled (Success): "board/createNewBoard/fulfilled"
Rejected (Error): "board/createNewBoard/rejected"
Таким образом, "board/createNewBoard" служит базовым префиксом для всех типов действия, связанных с созданием новой задачи в разделе "board". Когда асинхронная операция будет выполнена, Redux Toolkit автоматически создаст действия с соответствующими префиксами и суффиксами ("pending", "fulfilled" или "rejected"). */

/* Здесь <Board, { title: string; columns: Column[] }> указывает на тип результата и тип входных параметров вашей асинхронной функции.
Board - тип результата, который ваша санка вернет после успешного выполнения. В этом случае, это объект типа Board, представляющий созданную доску.
{ title: string; columns: Column[] } - тип входных параметров, которые вы ожидаете в вашей асинхронной функции. Это объект с полями title (строка) и columns (массив объектов типа Column[]), который вы будете использовать внутри вашей санки для создания новой доски. */
export const createNewBoardAct = createAsyncThunk<Board, { title: string }>(
  "boards/createNewBoard",
  async ({ title }, { dispatch }) => {
    /*  Redux Toolkit передает два параметра в вашу асинхронную функцию: payload и thunkAPI.
payload - это значение, которое вы передаете, когда вызываете вашу асинхронную функцию. thunkAPI - это объект, который содержит различные полезные свойства, включая dispatch. */
    try {
      dispatch(setLoadingAct(true));
      const newBoard: Board = {
        boardTitle: title,
        columns: [],
        boardOwnerEmail: "george@gmail.com",
      };

      const response = await axios.post(
        "http://localhost:8001/boards/newboard",
        newBoard,
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "POST",
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error(error);
    } finally {
      dispatch(setLoadingAct(false));
    }
  }
);

export const getAllBoardsAct = createAsyncThunk<Board[]>(
  "boards/getAllBoardsAct",
  async (_, { dispatch }) => {
    try {
      console.log("async");
      dispatch(setLoadingAct(true));

      const response = await axios.get(
        "http://localhost:8001/boards/email/george@gmail.com"
      );
      return response.data;
    } catch (error) {
      console.error(error);
    } finally {
      dispatch(setLoadingAct(false));
    }
  }
);
