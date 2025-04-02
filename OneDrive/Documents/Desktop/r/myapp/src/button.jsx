import React from 'react'
function Hello(){
    console.log("how r u")
}
export default function But() {
  return (
    <div onClick={Hello}>click me!</div>
  )
}
