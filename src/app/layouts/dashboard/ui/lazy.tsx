import { Loadable } from "@pages/loadable";

import { FC, lazy } from "react";

export const LazyDashboardLayout: FC = Loadable(lazy(() => import("./layout")));
