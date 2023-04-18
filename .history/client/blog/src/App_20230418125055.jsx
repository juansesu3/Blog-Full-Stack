import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Single from "./pages/Single";
import Write from "./pages/Write";
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Footer from ".."
const router = createBrowserRouter([
  {
    path: "/",
    element: <div>
      <Navbar/>
      <Home/>
      <Write/>
    </div>,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/single",
    element: <Single />,
  },
  {
    path: "/write",
    element: <Write />,
  },
]);

function App() {
  return (
    <div >
      <RouterProvider router={router} />
    </div>
  )
}

export default App
