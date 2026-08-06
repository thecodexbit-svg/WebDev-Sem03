import React from 'react'
import { memo } from 'react'

const Child = () => {
  console.log("CHILD haahhaahahahahhaha")
  return (
    <div>Child</div>
  )
}

export default memo(Child) //memo is used for optimization of the components. Stops the rerendering of the child component.