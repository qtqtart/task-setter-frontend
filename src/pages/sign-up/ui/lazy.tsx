import { Loadable } from "@pages/loadable";

import { FC, lazy } from "react";

export const LazySignUpPage: FC = Loadable(lazy(() => import("./page")));
