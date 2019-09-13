import { FetchTodosAction, DeleteTodoAction } from "./todos";

export enum ActionTypes {
  FetchTodos = "[Todo] Fetch All",
  DeleteTodo = "[Todo] delete"
}

export type Action = FetchTodosAction | DeleteTodoAction;
