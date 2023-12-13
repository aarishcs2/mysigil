import Analytic from "../../views/Analytic";
import Coworkers from "../../views/CoWorker";
import Department from "../../views/Department";
import NewDepartment from "../../views/Department/New";
import StatusDepartment from "../../views/Department/Status";
import Settings from "../../views/Settings";
import Dashboard from "../../views/dashboard";
import EditProfile from "../../views/CoWorker/EditProfile";
import SignatureBuilder from "../../views/SignatureBuilder";
import EditTemplate from "../../views/SignatureBuilder/EditTemplate";
import AddProfile from "../../views/CoWorker/AddProfile";
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
    path: "co-worker/edit/:id",
    element: <EditProfile />,
  },
  {
    path: "co-worker/add",
    element: <AddProfile />,
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
    path: "signaturebuilder",
    element: <SignatureBuilder />,
  },
  {
    path: "Edit-template",
    element: <EditTemplate />,
  },
];
export const SignatureBuilderPrivateRoute = [
  {
    path: "Edit-template/*",
    element: <EditTemplate />,
  },
];
