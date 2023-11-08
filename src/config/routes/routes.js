import Analytic from "../../views/Analytic";
import Coworkers from "../../views/CoWorker";
import Department from "../../views/Department";
import Settings from "../../views/Settings";

export const privateRoutes = [
  {
    path: "/",
    element: <Department />,
  },
  {
    path: "co-worker",
    element: <Coworkers />,
  },
  {
    path: "settings",
    element: <Settings />,
  },
  {
    path: "analytic",
    element: <Analytic />,
  },
];
