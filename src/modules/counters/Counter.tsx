import { useAppSelector } from "../../store";
import { useDispatch } from "react-redux";
import { selectCounter, type CounterId, type DecrementAction, type IncrementAction } from "./counters.slice";

export default function Counter({ counterId }: { counterId: CounterId }){

    const dispatch = useDispatch();
    const counterState = useAppSelector((state) => selectCounter(state, counterId))
    
    console.log('render counter:', counterId);

      return (
        <>
        counter {counterState?.counter}<br/>
          <button onClick={() => dispatch({ type: "decrement", payload: { counterId } } satisfies DecrementAction)}>
            decrement
          </button>
    
        <button onClick={() => dispatch({ type: "increment", payload: { counterId } } satisfies IncrementAction)}>
            increment
          </button><br/>
        </>
      )
    }