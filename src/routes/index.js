import paths from "./paths";
import DefaultLayout from "../components/Layout/DefaultLayout";
import pages from "../pages";
const publicRoutes = [
  {
    component: pages.home,
    path: paths.home,
    layout: DefaultLayout,
  },
  {
    component: pages.practice,
    path: paths.practice,
    layout: DefaultLayout,
  },
];

export { publicRoutes };
