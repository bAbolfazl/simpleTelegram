import { useLocation } from "react-router-dom";
import EditIcon from "/src/assets/edit.svg";
import { useMemo } from "react";

const Header = () => {
  const { pathname } = useLocation();

  const isRootRoute = useMemo(() => pathname === "/", [pathname]);

  return (
    <div className="sticky top-0 right-0 left-0 z-10 bg-quiz-black-100 flex items-center justify-between font-bold text-base px-4 pt-3 pb-6 border-b border-quiz-gray-400">
      <button className="font-medium">Edit</button>
      <h1>
        {!isRootRoute
          ? pathname.charAt(1).toUpperCase() + pathname.slice(2)
          : "Chats"}
      </h1>
      <button>
        <img src={EditIcon} alt="edit" />
      </button>
    </div>
  );
};

export default Header;
