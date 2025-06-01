// import { useState, useEffect, useReducer } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import type { State, IncrementAction, DecrementAction } from './store'
import { useSelector } from 'react-redux'
import { store } from './store'

function App() {
  // const [count, setCount] = useState(0)

  // const [, forceUpdate] = useReducer((x) => x + 1, 0);

  // useEffect(() => {
  //   const unsubscribe = store.subscribe(() => {
  //     forceUpdate();
  //   });
  //   return unsubscribe;
  // }, []);

  const counter = useSelector((state: State) => state.counter);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        counter {counter} <br/>
        {/* counter {store.getState().counter} <br/> */}
        <button onClick={() => store.dispatch({ type: "decrement" } satisfies DecrementAction)}>
          decrement
        </button>
        <button onClick={() => store.dispatch({ type: "increment" } satisfies IncrementAction)}>
          increment
        </button>
      </div>
    </>
  )
}

export default App
