import Analytic from "../../views/Analytic";
import Coworkers from "../../views/CoWorker";
import Department from "../../views/Department";
import NewDepartment from "../../views/Department/New";
import StatusDepartment from "../../views/Department/Status";
import Settings from "../../views/Settings";
import Dashboard from "../../views/dashboard";

export const privateRoutes = [
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "department",
    element: <Department />,
  },
  {
    path: "department/new",
    element: <NewDepartment />,
  },
  {
    path: "department/status",
    element: <StatusDepartment />,
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
