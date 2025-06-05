import { useState } from "react"

export default function Test() {

    const [test, setTest] = useState("")
  
    return(
      <>
        <p>My test: {test}</p>
        <input onChange={({target}) => {setTest(target.value)}}/>
      </>
    )
  }