import Analytic from "../../views/Analytic";
import Coworkers from "../../views/CoWorker";
import Department from "../../views/Department";
import NewDepartment from "../../views/Department/New";
import StatusDepartment from "../../views/Department/Status";
import Settings from "../../views/Settings";
import Dashboard from "../../views/dashboard";
import EditProfile from "../../views/CoWorker/EditProfile";
import Emailtemplate from "../../views/Emailtemplates";
import Templatedetail from "../../views/Emailtemplates/Templatedetail";
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
    path: "co-worker/edit-profile",
    element: <EditProfile />,
  },
  {
    path: "settings",
    element: <Settings />,
  },
  {
    path: "analytic",
    element: <Analytic />,
  },
  {
    path: "templates",
    element: <Emailtemplate />,
  },
  {
    path: "templatedetail/:id",
    element: <Templatedetail />,
  },
];