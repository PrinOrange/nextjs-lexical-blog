import { Config } from "@/data/config";

export const BottomCard = () => {
  return (
    <div className="flex w-full flex-col justify-center p-8">
      <img alt={Config.AuthorName} className="mx-auto h-24 w-24 rounded-full" src={Config.AvatarURL} />
      <p className="mx-auto mt-5 content-font">{Config.Sentence}</p>
    </div>
  );
};
