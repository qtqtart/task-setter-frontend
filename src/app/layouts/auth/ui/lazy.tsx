import { Loadable } from "@pages/loadable";

import { FC, lazy } from "react";

export const LazyAuthLayout: FC = Loadable(lazy(() => import("./layout")));
