export interface NewTodo {
  text: string;
  completed: boolean;
}

export interface TodoDoc extends NewTodo {
  _id: string;
  _rev: string;
}
