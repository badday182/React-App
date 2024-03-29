import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import ErrorPage from "../pages/ErrorPage";
import Tasks from "../pages/Tasks";
import History from "../pages/History";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Tasks />,
      },
      {
        path: "history",
        element: <History />,
      },
    ],
  },
]);
