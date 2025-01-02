import { useContext } from "react"
import { UserContext } from "./context/UserContext";

export const LoginApp = () => {

  const { user, setUser } = useContext( UserContext );  

  return (
    <>
      <h1>Login App</h1>
      <hr />

      <pre>
        { JSON.stringify(user, null, 3)}
      </pre>

      <button
        className="btn btn-primary"
        onClick={ () => setUser({ id: 123, name: 'pepe', email: 'elpepe@doxdox.com'})}
      >
        Set user
      </button>
    </>
  )
}
