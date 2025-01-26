import { Loadable } from "@pages/loadable";

import { FC, lazy } from "react";

export const LazySettingsPage: FC = Loadable(lazy(() => import("./page")));
