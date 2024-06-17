import { Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  // TODO If the user was not authenticated, should redirect to /login page
  // TODO and also clear the user token from local storage and global state manager here

  return (
    <>
      <Outlet />
    </>
  );
};

export default ProtectedRoutes;
