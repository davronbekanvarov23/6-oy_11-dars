//react-router-dom
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

//components
import { ProtectedRoutes } from "./components";

//layouts
import MainLayout from "./layouts/MainLayout";

//pages
import { Home, About, Create, Contact, Login, Signup } from "./pages";
import { loader as Bookloader } from "./pages/Home";
import { action as CreateAction } from "./pages/Create";

function App() {
  const user = true;
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoutes user={user}>
          <MainLayout />
        </ProtectedRoutes>
      ),
      children: [
        {
          index: true,
          element: <Home />,
          loader: Bookloader,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/create",
          element: <Create />,
          action: CreateAction,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
    { path: "/login", element: user ? <Navigate to="/" /> : <Login /> },
    { path: "/signup", element: user ? <Navigate to="/" /> : <Signup /> },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
