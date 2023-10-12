import { RootStateType } from "../storeRedux/store";

export const selectAllBoards = (state: RootStateType) => state.boards.allBoards;

export const isLoadingState = (state: RootStateType) => state.loading.isLoading;
