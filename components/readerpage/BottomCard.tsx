import { Config } from "@/data/config";

export const BottomCard = () => {
  return (
    <div className="p-8 w-full flex flex-col justify-center">
      <img alt={Config.AuthorName} className="h-24 w-24 rounded-full mx-auto" src={Config.AvatarURL} />
      <p className="mx-auto mt-5 font-source-serif-screen">{Config.Sentence}</p>
    </div>
  );
};
