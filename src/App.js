import React, { useReducer } from 'react'

const initialState = {
  count: 0
}

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {
        count: state.count + 1
      }
    case 'decrement':
      return {
        count: state.count - 1
      }
    case 'reset':
      return initialState
    default:
      return initialState
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      Count: { state.count }
      <button className="border p-1 m-1" onClick={() => dispatch({ type: 'increment'})}>Increment</button>
      <button className="border p-1 m-1" onClick={() => dispatch({ type: 'decrement'})}>Decrement</button>
      <button className="border p-1 m-1" onClick={() => dispatch({ type: 'reset'})}>Reset</button>
    </div>
  )
}