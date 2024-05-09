//react-router-dom
import { RouterProvider, createBrowserRouter } from "react-router-dom";

//components
import { ProtectedRoutes } from "./components";

//layouts
import MainLayout from "./layouts/MainLayout";

//pages
import { Home, About, Create, Contact, Login, Signup } from "./pages";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoutes user={true}>
          <MainLayout />
        </ProtectedRoutes>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/create",
          element: <Create />,
        },
        {
          path: "/contact",
          element: <Create />,
        },
      ],
    },
    { path: "/login", element: <Login /> },
    { path: "/signup", element: <Signup /> },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
