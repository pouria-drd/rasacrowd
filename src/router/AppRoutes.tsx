import { ROUTES } from "./routes";
import { Route, Routes } from "react-router-dom";
// import { UserRolesEnum } from "../contexts/AuthContext";

import {
  // public
  HomePage,
  NotFoundPage,

  TeamPage,
  PersonalPage,
  OrganizationPage,

  EditPage,
  TrackingPage,

} from "../pages";

// import PrivateRoute from "./PrivateRoute";

function CustomRoutes() {
  return (
    <div className="px-4 sm:px-20 md:px-40 lg:px-72">
      <Routes>
        {/* Public Routes */}
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route path={ROUTES.NOT_FOUND_PAGE} element={<NotFoundPage />} />

        <Route path={ROUTES.EDIT} element={<EditPage />} />
        <Route path={ROUTES.TRACKING} element={<TrackingPage />} />

        <Route path={ROUTES.TEAM} element={<TeamPage />} />
        <Route path={ROUTES.PERSONAL} element={<PersonalPage />} />
        <Route path={ROUTES.ORGANIZATION} element={<OrganizationPage />} />

        {/* Auth pages */}
        {/* <Route path={ROUTES.Login_User_PAGE} element={<LoginPage />} />
      <Route path={ROUTES.Register_User_PAGE} element={<RegisterUserPage />} />
      <Route path={ROUTES.UNAUTHORIZED} element={<UnauthorizedPage />} /> */}

        {/* Private Routes */}
        {/* <Route
        path={ROUTES.DASHBOARD}
        element={
          <PrivateRoute
            element={<DashboardPage />}
            allowedRoles={[UserRolesEnum.USER]}
          />
        }
      /> */}
      </Routes>
    </div>
  );
}

export default CustomRoutes;
