  import { createBrowserRouter } from "react-router-dom";
  import Layout from "../pages/Layout";
  import ErrorPage from "../pages/ErrorPage";
  import Tasks from "../pages/Tasks";
  import History from "../pages/History";
  import { listActions } from "../actions/listActions";
  import { listsLoader } from "../loaders/listsLoader";
  import { taskActions } from "../actions/taskActions";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      action: listActions,
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
          element: null,
        
        },
        {
          path: "tasks",
          element: <Tasks />,
          action: taskActions,
        
        },
      ],
    },
  ]);
