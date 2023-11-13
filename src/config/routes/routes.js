import Analytic from "../../views/Analytic";
import Coworkers from "../../views/CoWorker";
import Department from "../../views/Department";
import NewDepartment from "../../views/Department/New";
import Settings from "../../views/Settings";
import Dashboard from "../../views/dashboard";
export const privateRoutes = [
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/department",
    element: <Department />,
  },
  {
    path: "/department/new",
    element: <NewDepartment />,
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
