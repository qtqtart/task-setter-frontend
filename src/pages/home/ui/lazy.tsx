import { Loadable } from "@pages/loadable";

import { FC, lazy } from "react";

export const LazyHomePage: FC = Loadable(lazy(() => import("./page")));
