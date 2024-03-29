import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import ErrorPage from "../pages/ErrorPage";
import Tasks from "../pages/Tasks";
import History from "../pages/History";
import { listActions } from "../actions/listActions";
import { listsLoader } from "../loaders/listsLoader";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Tasks />,
        loader: listsLoader,
      },
      {
        path: "history",
        element: <History />,
      },
      {
        path: "lists",
        action: listActions,
        element: null,
      },
    ],
  },
]);
