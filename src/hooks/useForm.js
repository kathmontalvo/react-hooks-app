import { useState } from "react"

export const useForm = ( initialForm = {} ) => {

  const [formState, setFormState] = useState( initialForm )

  const onInputChange = ({ target }) => {
    // e as a param -- e.target.value

    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    })
  }

  const onResetForm = () => {
    setFormState(initialForm)
  }


  return {
    ...formState, // envia cada propiedad desestructurada, solo 'email', 'username',...
    formState,
    onInputChange,
    onResetForm
  }
}
