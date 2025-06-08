import { configureStore } from '@reduxjs/toolkit'
import { usersSlice } from '../modules/users/users.slice';
import { countersReduser } from "../modules/counters/counters.slice";
import { api } from '../shared/api';
import { router } from './router';

export const extraArgument = { api, router };

export const store = configureStore({
  reducer: {
    counters: countersReduser,
    [usersSlice.name]: usersSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: { extraArgument } }),
});