import { Link, useLocation } from "react-router-dom";
import NavigationList from "./navigationList";

const Navigation = () => {
  const { pathname } = useLocation();

  return (
    <nav className="sticky bottom-0 right-0 left-0 bg-quiz-black-100 border-t border-quiz-gray-300 py-2">
      <ul className="flex flex-row-reverse justify-around w-full">
        {NavigationList.map(({ id, label, icon, route }) => (
          <li
            key={id}
            className={`${pathname === route ? "active" : ""}`}
          >
            <Link
              to={route}
              className="flex flex-col items-center justify-center gap-1 text-quiz-gray-500 text-xs"
            >
              <img src={icon} />
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
