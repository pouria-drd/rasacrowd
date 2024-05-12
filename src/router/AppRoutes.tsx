import { ROUTES } from "./routes";
import { Route, Routes } from "react-router-dom";
// import { UserRolesEnum } from "../contexts/AuthContext";

import {
    // public
    HomePage,
    NotFoundPage,
    TeamPage,
    ServicePage,
    PersonalPage,
    OrganizationPage,
    EditPage,
    TrackingPage,
} from "../pages";
import SurveysPage from "../pages/survey/SurveysPage";

// import PrivateRoute from "./PrivateRoute";

function CustomRoutes() {
    return (
        <Routes>
            {/* Public Routes */}
            <Route path={ROUTES.HOME} element={<HomePage />} />
            <Route path={ROUTES.SURVEYS} element={<SurveysPage />} />
            <Route path={ROUTES.NOT_FOUND_PAGE} element={<NotFoundPage />} />

            <Route path={ROUTES.EDIT} element={<EditPage />} />
            <Route path={ROUTES.TRACKING} element={<TrackingPage />} />

            <Route path={ROUTES.TEAM} element={<TeamPage />} />
            <Route path={ROUTES.SERVICE} element={<ServicePage />} />
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
    );
}

export default CustomRoutes;
