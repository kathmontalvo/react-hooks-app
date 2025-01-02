import { useContext } from "react"
import { UserContext } from "./context/UserContext";

export const HomeApp = () => {

  const { user } = useContext( UserContext );

  return (
    <>
      <h1>Home App</h1>
      <hr />

      <pre>
        { JSON.stringify(user, null, 3)}
      </pre>
    </>
  )
}
