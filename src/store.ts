import { createSelector, combineReducers, configureStore} from '@reduxjs/toolkit'
import { useDispatch, useSelector, useStore } from 'react-redux';
import { initialUsersList, usersReducer, type UsersStoredAction } from './modules/users/users.slice';
import { countersReduser } from './modules/counters/counters.slice';

// export const createAppSelector = createSelector.withTypes<AppState>();

const reducer = combineReducers({
    users: usersReducer,
    counters: countersReduser,
});


export const store = configureStore({
    reducer: reducer,
  })

  store.dispatch({
    type: "usersStored",
    payload: {users: initialUsersList},
  } satisfies UsersStoredAction);

  export type AppState = ReturnType<typeof store.getState>;
  export type AppDispatch = typeof store.dispatch;

  export const useAppSelector = useSelector.withTypes<AppState>();
  export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
  export const useAppStore = useStore.withTypes<typeof store>();