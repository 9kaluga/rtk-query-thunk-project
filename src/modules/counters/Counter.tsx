import { useAppSelector } from "../../shared/redux";
import { useDispatch } from "react-redux";
import { decrementAction, incrementAction, selectCounter, type CounterId } from "./counters.slice";

export default function Counter({ counterId }: { counterId: CounterId }){

    const dispatch = useDispatch();
    const counterState = useAppSelector((state) => selectCounter(state, counterId))

      return (
        <>
        counter {counterState?.counter}<br/>
          <button onClick={() => dispatch(decrementAction ({ counterId }))}>
            decrement
          </button>
    
        <button onClick={() => dispatch(incrementAction({ counterId }))}>
            increment
          </button><br/>
        </>
      )
    }