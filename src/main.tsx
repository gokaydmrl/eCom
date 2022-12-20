import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import Hello from "./components/Hello";
import PrivateRoutes from "./components/Protected";
import Login from "./components/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRoutes children={<App />} />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/hello",
    element: <PrivateRoutes children={<Hello />} />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

// const [isSignedIn, setIsSignedIn] = useState<boolean>(false);

// const props = {
//   isSignedIn: isSignedIn,
// };

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);
