export type Column = {
  columnTitle: string;
  columnId: string;
};

export type Board = {
  boardTitle: string;
  columns: Column[];
  boardOwnerEmail: string;
};
