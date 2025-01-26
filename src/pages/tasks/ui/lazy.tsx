import { Loadable } from "@pages/loadable";

import { FC, lazy } from "react";

export const LazyTaskPage: FC = Loadable(lazy(() => import("./page")));
