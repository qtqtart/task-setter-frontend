import { Loadable } from "@pages/loadable";

import { FC, lazy } from "react";

export const LazyProjectsPage: FC = Loadable(lazy(() => import("./page")));
