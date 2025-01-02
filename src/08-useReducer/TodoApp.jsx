
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";
import { useTodo } from "../hooks";

export const TodoApp = () => {

  const { todos, totalTodos, pendingTodos, handleNewTodo, handleToggleTodo, handleDeleteTodo } = useTodo();

  return (
    <>
      <h1>TodoApp: { totalTodos } | <small>pendientes: { pendingTodos }</small></h1>
      <hr />

      <div className="row">
        <div className="col-7">

          <TodoList todos={todos} onDeleteTodo={ handleDeleteTodo } onToggleTodo={ handleToggleTodo } />
          
        </div>
        <div className="col-5">
          <h4>Agregar To do</h4>
          <hr />

          <TodoAdd onNewTodo={ handleNewTodo } />

        </div>
      </div>
    </>
  );
};
