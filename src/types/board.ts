export type Column = {
  columnTitle: string;
  columnId: string;
};

export type Board = {
  _id: string;
  boardTitle: string;
  columns: Column[];
  boardOwnerEmail: string;
};
