import { useEffect, useReducer } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import type { State, IncrementAction, DecrementAction, CounterId } from './store'
// import { useSelector } from 'react-redux'
import { store } from './store'

function App() {

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
      <Counter counterId="first"/>
      <Counter counterId="second"/>
    </>
  )
}

export function Counter({ counterId }: { counterId: CounterId }){

  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  console.log('render counter:', counterId);
  
  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      forceUpdate();
    });
    return unsubscribe;
  }, []);

  return (
    <>
      counter {store.getState().counters[counterId]?.counter}
      <button onClick={() => store.dispatch({ type: "decrement", payload: { counterId } } satisfies DecrementAction)}>
        decrement
      </button>
      <button onClick={() => store.dispatch({ type: "increment", payload: { counterId } } satisfies IncrementAction)}>
        increment
      </button>
    </>
  )
}

export default App
