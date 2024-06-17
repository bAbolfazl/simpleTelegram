import { Link } from "react-router-dom";
import ChatPreview from "./_components/chatPreview";

const Home = () => {
  return (
    <div>
      {[...Array(20)].map((_item, index) => (
        <Link key={index} to={`/chat/${index}`}>
          <ChatPreview id={index} />
        </Link>
      ))}
    </div>
  );
};

export default Home;
