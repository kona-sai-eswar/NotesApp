import './App.css'

import Layout from './components/Layout';
import Home from './components/Home';
import Favorites from './components/Favorites';
import { useNotesPersistence } from "./hooks/useNotesPersistence";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "home", element: <Home /> },
      { path: "favorites", element: <Favorites /> },
    ],
  },
]);

function App() {
  useNotesPersistence();
  return (
    <RouterProvider router={router} />

  )
}

export default App
