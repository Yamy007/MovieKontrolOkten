import { createBrowserRouter } from "react-router-dom";
import { MainLayouts } from "./layouts";
import { DiscoverPage, HomePages, MoviesPages } from "./pages";
import { LivePages } from "./pages/live/LivePages";

export const router = createBrowserRouter([
  {
    path: "",
    element: <MainLayouts />,
    children: [
      {
        index: true,
        element: <HomePages />,
      },
      {
        path: "discover",
        element: <DiscoverPage />,
      },
      {
        path: "live",
        element: <LivePages />,
      },
      {
        path: "movies/:id",
        element: <MoviesPages />,
      },
    ],
  },
]);
