import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import TasksPage from './pages/tasks';

function App() {
  const [count, setCount] = useState(0)

  const router = createBrowserRouter([
    {
      path: '/',
      element: <TasksPage />,
    },
    {
      path: '*',
      element: <div>not found</div>,
    }
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
