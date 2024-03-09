import { ROUTES } from "./routes";
import { Navigate } from "react-router-dom";
import { useAuth, UserRolesEnum } from "../contexts/AuthContext";

interface PrivateRouteProps {
  element: React.ReactNode;
  allowedRoles: UserRolesEnum[];
}

/**
 * PrivateRoute Component for role-based and authenticated routing.
 *
 * @param {React.ReactNode} element - The element to be rendered if authorized.
 * @param {UserRolesEnum[]} allowedRoles - An array of allowed roles.
 *
 * @returns {React.ReactNode} - Rendered element or redirection to unauthorized page.
 */
const PrivateRoute = ({ element, allowedRoles }: PrivateRouteProps) => {
  const { user } = useAuth();

  // Redirect or show an unauthorized message based on authentication and roles
  if (!user || (allowedRoles && !allowedRoles.includes(user.role))) {
    return <Navigate to={ROUTES.HOME} />;
  }

  return element;
};

export default PrivateRoute;
