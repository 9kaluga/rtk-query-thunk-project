import { createAction, createReducer } from "@reduxjs/toolkit";
import type { AppState } from "../../store";

type CounterState = {
    counter: number;
};

export type CounterId = string;

type CountersState = Record<CounterId, CounterState | undefined>;

export const incrementAction = createAction<{
    counterId: CounterId;
}>("counter/increment");

export const decrementAction = createAction<{
    counterId: CounterId;
}>("counter/decrement");

const initialCounterState: CounterState = {counter: 0};
const initialCountersState: CountersState = {};

export const countersReduser = 
    createReducer(initialCountersState, (builder) => {
        builder.addCase(incrementAction, (state, action) => {
            const { counterId } = action.payload;
            const currentCounter = state[counterId] ?? initialCounterState
                return {
                    ...state,
                    [counterId]:{
                        ...currentCounter,
                        counter: currentCounter.counter + 1
                    }
                };
            });
        builder.addCase(decrementAction, (state, action) => {
            const { counterId } = action.payload;
            const currentCounter = state[counterId] ?? initialCounterState

            if (!state[counterId]) {
                state[counterId] = initialCounterState;
            }

            currentCounter.counter--;
        });
    }
);

export const selectCounter = (state: AppState, counterId: CounterId) => 
    state.counters[counterId];