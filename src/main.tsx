import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import './index.css'
import App from './App.tsx'
import Detail from './pages/Detail.tsx'


const router = createBrowserRouter([{
  path: '/',
  element: <App />,
},
{
  path: '/details/:name',
  element: <Detail />,
},
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)