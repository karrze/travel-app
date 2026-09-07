import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout";
import { HomePage } from "../pages/HomePage";
import { NotFoundPage } from "../pages/NotFoundPage";
import { StyleGuidePage } from "../pages/StyleGuidePage";
import { TripPlannerPage } from "../pages/trip/TripPlannerPage";
import { TripsListPage } from "../pages/trip/TripsListPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "podroz/nowa",
        element: <TripPlannerPage />,
      },
      {
        path: "podroze",
        element: <TripsListPage />,
      },
      {
        path: "style-guide",
        element: <StyleGuidePage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);
