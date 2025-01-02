import { useForm } from "../hooks/useForm"

export const TodoAdd = ({ onNewTodo }) => {

  const initialValue = {
    description: ''
  }

  const { onInputChange, description, onResetForm } = useForm(initialValue);

  const handleSubmit = (e) => {

    e.preventDefault();

    if( description.length <= 1 ) return;
    
    const newTodo = {
      id: new Date().getTime(),
      done: false,
      description: description,
    }

    onNewTodo && onNewTodo(newTodo);
    onResetForm();
  }

  return (
    <form onSubmit={ handleSubmit }>
      <input 
        type="text" 
        placeholder="Qué hay por hacer?"
        className="form-control"
        name="description"
        value={description}
        onChange={ onInputChange }
      />
      <button 
        type="submit"
        className="btn btn-outline-primary mt-1"
      >
        Agregar
      </button>
    </form>
  )
}
