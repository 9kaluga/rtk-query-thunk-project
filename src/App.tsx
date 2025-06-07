import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Counter from './modules/counters/Counter'
import Test from './modules/testcomponent/Test'
import { UsersList } from './modules/users/user-list'
import './App.css'

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
      <Test/>
      <UsersList/>
      <UsersList/>

    </>
  )
}

export default App
