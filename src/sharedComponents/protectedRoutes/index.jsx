import { Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  // TODO: If the user was not authenticated, should redirect to /login page and also clear the local storage

  return (
    <>
      <Outlet />
    </>
  );
};

export default ProtectedRoutes;
