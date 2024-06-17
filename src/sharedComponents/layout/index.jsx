import { Outlet, useLocation } from "react-router-dom";
import Navigation from "./navigation";
import Header from "./header";

const Layout = () => {
  const location = useLocation();
  console.log({ location });

  return (
    <>
      <Header />
      <div className="min-h-dvh">
        <Outlet />
      </div>
      <Navigation />
    </>
  );
};

export default Layout;
