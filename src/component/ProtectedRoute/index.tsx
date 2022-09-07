import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { loginSelectors } from "../../redux/slice/login";
interface PropType {
  component: React.FC;
}

const ProtectedRoute: React.FC<PropType> = ({ component: Component }) => {
  const location = useLocation();
  const user = useSelector(loginSelectors.selectAccount);

  return Object.keys(user).length !== 0 ? (
    <Component />
  ) : (
    <Navigate to={`/login?url=${location.pathname}`}></Navigate>
  );
};
export default ProtectedRoute;
