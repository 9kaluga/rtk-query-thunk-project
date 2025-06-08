import Counter from './modules/counters/Counter'
import Test from './modules/testcomponent/Test'
import { UsersList } from './modules/users/user-list'
import './App.css'

function App() {

  return (
    <>
      <Counter counterId="first"/>
      <Counter counterId="second"/>
      <Test/>
      <UsersList/>
      <UsersList/>
    </>
  )
}

export default App
