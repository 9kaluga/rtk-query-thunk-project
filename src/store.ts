import { createSelector, configureStore} from '@reduxjs/toolkit'
import { useDispatch, useSelector, useStore } from 'react-redux';
import { usersSlice } from './modules/users/users.slice';
import { countersReduser } from "./modules/counters/counters.slice";

export const store = configureStore({
  reducer: {
    counters: countersReduser,
    [usersSlice.name]: usersSlice.reducer,
  },
});


export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector = useSelector.withTypes<AppState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppStore = useStore.withTypes<typeof store>();
export const createAppSelector = createSelector.withTypes<AppState>();