import { Loadable } from "@pages/loadable";

import { FC, lazy } from "react";

export const LazyTasksByProjectId: FC = Loadable(lazy(() => import("./page")));
