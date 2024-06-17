import { faker } from "@faker-js/faker";
import { useParams } from "react-router-dom";
import ChatMessage from "./_components/chatMessage";

const Chat = () => {
  const { chat: chatId } = useParams();
  console.log(chatId);

  const chatList = [
    {
      id: faker.database.mongodbObjectId(),
      message: faker.lorem.paragraph(),
      time: `${faker.date.anytime().getHours()}:${faker.date
        .anytime()
        .getMinutes()}`,
      senderIsMe: true,
    },
    {
      id: faker.database.mongodbObjectId(),
      message: faker.lorem.paragraph(),
      time: `${faker.date.anytime().getHours()}:${faker.date
        .anytime()
        .getMinutes()}`,
      senderIsMe: true,
    },
    {
      id: faker.database.mongodbObjectId(),
      message: faker.lorem.paragraph(),
      time: `${faker.date.anytime().getHours()}:${faker.date
        .anytime()
        .getMinutes()}`,
      senderIsMe: false,
    },
    {
      id: faker.database.mongodbObjectId(),
      message: faker.lorem.paragraph(),
      time: `${faker.date.anytime().getHours()}:${faker.date
        .anytime()
        .getMinutes()}`,
      senderIsMe: true,
    },
  ];

  console.log({ chatList });

  return (
    <div>
      {chatList.map(({ id, ...others }) => (
        <ChatMessage key={id} {...others} />
      ))}
    </div>
  );
};

export default Chat;
