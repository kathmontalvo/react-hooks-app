import { useMemo, useState } from "react";
import { useCounter } from "../hooks"

  const heavyStuff = ( iterationNum = 100 ) => {

    for (let i = 0; i < iterationNum; i++) {
      console.log('heavy stuff consuming');      
    }

    return `${iterationNum} iteraciones`;

  }

export const MemoHook = () => {
  
  const { counter, increment } = useCounter( 5000 );
  const [ show, setShow ] = useState( true );

  const memorizedValue = useMemo( () => heavyStuff(counter), [counter] )

  return (
    <>
      <h1>Counter: <small> { counter } </small> </h1>
      <hr />

      { memorizedValue }

      <button
        className="btn btn-primary"
        onClick = { () => increment() }
      >
        +1
      </button>
      <button
        className="btn btn-primary"
        onClick = { () => setShow( !show ) }
      >
        Hide/Show: { JSON.stringify( show ) }
      </button>
    </>
  )
}
