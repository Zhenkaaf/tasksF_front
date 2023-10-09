import { RootStateType } from "../storeRedux/store";

export const selectAllBoards = (state: RootStateType) => state.boards.allBoards;
