import { faker } from "@faker-js/faker";

const ChatPreview = () => {
  return (
    <div className="flex px-2.5 pt-1.5 pb-2 gap-2">
      <img
        src={faker.image.urlPicsumPhotos()}
        className="w-[60px] h-[60px] rounded-full"
        alt="avatar"
        width="full"
      />

      <div className="grow">
        <div className="flex w-full justify-between items-center">
          <div className="font-medium text-base leading-3">
            {faker.person.firstName()}
          </div>
          <div className="text-quiz-gray-100">
            {faker.date.anytime().getHours()}:
            {faker.date.anytime().getMinutes()}
          </div>
        </div>
        <div className="border-b border-b-quiz-gray-300 mt-2 pb-2 -mr-2.5 pr-2.5">
          <div className="text-quiz-gray-200 line-clamp-2 mr-7">
            {faker.lorem.paragraph(2)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPreview;
