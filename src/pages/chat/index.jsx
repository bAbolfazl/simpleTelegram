import { faker } from "@faker-js/faker";
import { useParams } from "react-router-dom";

const Chat = () => {
  const { chat: chatId } = useParams();
  console.log(chatId);

  return (
    <div>
      <div>{faker.lorem.paragraph()}</div>
      <div>{faker.lorem.paragraph()}</div>
    </div>
  );
};

export default Chat;
