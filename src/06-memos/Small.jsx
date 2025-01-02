import React from "react";

export const Small = React.memo(({ counter }) => {

  console.log('generado again uwu');
  
  return (
    <small>{ counter }</small>
  )
})
