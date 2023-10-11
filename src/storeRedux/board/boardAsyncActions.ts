import { createAsyncThunk } from "@reduxjs/toolkit";
import { Board, Column } from "../../types/board";

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
  async ({ title }) => {
    const newBoard: Board = {
      boardTitle: title,
      columns: [],
    };

    const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBoard),
    });
    return await response.json();
  }
);
