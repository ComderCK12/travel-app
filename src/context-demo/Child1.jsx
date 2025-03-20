import React, { useContext } from 'react'
import { ContextWithState, MyContext } from './MyContext'
import GrandChild from './GrandChild'

const Child1 = () => {
    const ctx = useContext(MyContext)
    const secondCtx = useContext(ContextWithState)

  return (
    <>
        <div>Child1 {ctx.color}</div>
        <div>Context with state {secondCtx.msg}</div>
        <button onClick={() => {secondCtx.setMsg('Child oneeeeeeeeeeeeeee')}}>Click me !</button>
        <GrandChild></GrandChild>
    </>
  )
}

export default Child1