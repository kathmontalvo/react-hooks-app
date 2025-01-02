import { useEffect, useState } from "react"

export const Message = () => {

  const [coords, setCoords] = useState({ x:0, y:0 })
  useEffect(() => {
    console.log(' message mounted ');

    const onMouseMove = ( { x, y } ) => {

      // const coords = { x: e.x, y: e.y}
      const coords = { x, y }
      setCoords(coords)

    }

    window.addEventListener( 'mousemove', onMouseMove )
  
    return () => {
      console.log(' message UNmounted ');
      window.removeEventListener( 'mousemove', onMouseMove )

    }
  }, [])
  
  return(
    <>
      <h4 className="mt-3"> Usuario ya existe </h4>

      {JSON.stringify(coords)}
    </>
  )
}