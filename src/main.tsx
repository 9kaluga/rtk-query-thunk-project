import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './store';
import './index.css'
import { fetchUsers } from './modules/users/model/fetch-users.ts';
import { RouterProvider } from 'react-router-dom';
import { router } from './router.tsx';

store.dispatch(fetchUsers());

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
)
