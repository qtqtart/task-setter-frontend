import { LazyAuthLayout } from "@app/layouts/auth/ui/lazy";
import { LazyDashboardLayout } from "@app/layouts/dashboard/ui/lazy";
import { LazyHomePage } from "@pages/home";
import { LazyProjectsPage } from "@pages/projects";
import { LazySettingsPage } from "@pages/settings";
import { LazySignInPage } from "@pages/sign-in";
import { LazySignUpPage } from "@pages/sign-up";
import { LazyTaskPage } from "@pages/tasks";
import { LazyTasksByProjectId } from "@pages/tasks-by-project-id";
import { ROUTER_PATHS } from "@shared/consts/router-paths";

import { createBrowserRouter, Navigate } from "react-router-dom";

export const router = createBrowserRouter([
  {
    index: true,
    element: <Navigate replace to={ROUTER_PATHS.FULL.HOME} />,
  },
  {
    path: ROUTER_PATHS.LAYOUTS.AUTH,
    element: <LazyAuthLayout />,
    children: [
      {
        index: true,
        element: <Navigate replace to={ROUTER_PATHS.FULL.SIGN_IN} />,
      },
      {
        path: ROUTER_PATHS.PAGES.SIGN_IN,
        element: <LazySignInPage />,
      },
      {
        path: ROUTER_PATHS.PAGES.SING_UP,
        element: <LazySignUpPage />,
      },
      {
        path: "*",
        element: <Navigate replace to={ROUTER_PATHS.FULL.SIGN_IN} />,
      },
    ],
  },
  {
    path: ROUTER_PATHS.LAYOUTS.DASHBOARD,
    element: <LazyDashboardLayout />,
    children: [
      {
        index: true,
        element: <Navigate replace to={ROUTER_PATHS.FULL.HOME} />,
      },
      {
        path: ROUTER_PATHS.PAGES.HOME,
        element: <LazyHomePage />,
      },
      {
        path: ROUTER_PATHS.PAGES.TASKS,
        element: <LazyTaskPage />,
      },
      {
        path: ROUTER_PATHS.PAGES.PROJECTS,
        children: [
          {
            index: true,
            element: <LazyProjectsPage />,
          },
          {
            path: ":id",
            element: <LazyTasksByProjectId />,
          },
        ],
      },
      {
        path: ROUTER_PATHS.PAGES.SETTINGS,
        element: <LazySettingsPage />,
      },
      {
        path: "*",
        element: <Navigate replace to={ROUTER_PATHS.FULL.HOME} />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate replace to={ROUTER_PATHS.FULL.HOME} />,
  },
]);
