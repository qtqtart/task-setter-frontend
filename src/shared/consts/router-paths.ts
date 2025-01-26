const LAYOUTS = Object.freeze({
  AUTH: "auth",
  DASHBOARD: "dashboard",
});

const PAGES = Object.freeze({
  SIGN_IN: "sign-in",
  SING_UP: "sign-up",
  //
  HOME: "home",
  TASKS: "tasks",
  PROJECTS: "projects",
  SETTINGS: "settings",
});

const FULL = Object.freeze({
  SIGN_IN: "/" + LAYOUTS.AUTH + "/" + PAGES.SIGN_IN,
  SIGN_UP: "/" + LAYOUTS.AUTH + "/" + PAGES.SING_UP,
  //
  HOME: "/" + LAYOUTS.DASHBOARD + "/" + PAGES.HOME,
  TASKS: "/" + LAYOUTS.DASHBOARD + "/" + PAGES.TASKS,
  PROJECTS: "/" + LAYOUTS.DASHBOARD + "/" + PAGES.PROJECTS,
  SETTINGS: "/" + LAYOUTS.DASHBOARD + "/" + PAGES.SETTINGS,
});

export const ROUTER_PATHS = {
  LAYOUTS,
  PAGES,
  FULL,
};
