import { Loadable } from "@pages/loadable";

import { FC, lazy } from "react";

export const LazySignInPage: FC = Loadable(lazy(() => import("./page")));
