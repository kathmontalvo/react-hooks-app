import { useState, useEffect } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

  const [formState, setFormState] = useState({
    username: '',
    email: ''
  })

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    // e as a param -- e.target.value

    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    })
  }

  useEffect( () => {
    // console.log('useeffect');
  }, [])

  useEffect( () => {
    // console.log('formState');
  }, [formState])

  useEffect( () => {
    // console.log('email');
  }, [email])

  return (
    <>
      <h1> Simple form </h1>
      <hr />

      <input 
        type="text" 
        className="form-control"
        placeholder="Username"
        name="username"
        value={ username }
        onChange={ onInputChange }
      />

      <input 
        type="email" 
        className="form-control mt-2"
        placeholder="example@example.com"
        name="email"
        value={ email }
        onChange={ onInputChange }
      />

      {
        (username === 'strider2') && <Message />
      }

    </>
  )
}
