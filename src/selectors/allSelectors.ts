import { RootStateType } from "../storeRedux/store";

export const selectAllBoards = (state: RootStateType) => state.boards.allBoards;

export const isLoadingState = (state: RootStateType) => state.loading.isLoading;

export const selectCurrentBoard = (state: RootStateType) =>
  state.boards.currentBoard;

export const selectCurrentBoardColumns = (state: RootStateType) =>
  state.boards.currentBoard?.columns;
