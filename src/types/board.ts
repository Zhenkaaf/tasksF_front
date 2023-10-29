export type Column = {
  columnTitle: string;
  _id: string;
};

export type Board = {
  _id: string;
  boardTitle: string;
  columns: Column[];
  boardOwnerEmail: string;
};
export type ApiError = {
  message: string;
  code: string | undefined;
};
