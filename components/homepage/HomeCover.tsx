import { SocialIcons } from "@/components/utils/SocialIcons";
import { Config } from "@/data/config";
import { fontFangZhengXiaoBiaoSongCN, fontSourceSerifScreenCN } from "@/styles/font";

export const HomeCover = () => {
  return (
    <>
      <div
        className="mb-24 mt-3 flex w-full justify-center rounded-xl"
        style={{
          aspectRatio: "4/1",
          background: `url(${Config.PageCovers.websiteCoverURL})`,
          backgroundSize: "cover",
        }}
      >
        <img
          className="relative top-1/2 my-auto h-24 w-24 rounded-full shadow-2xl md:h-32 md:w-32"
          alt={Config.Nickname}
          src={Config.AvatarURL}
        />
      </div>
      <div className={`${fontFangZhengXiaoBiaoSongCN.className} my-8 text-center text-4xl font-bold`}>
        {Config.Nickname}
      </div>
      <SocialIcons />
      {Config.Sentence && (
        <div className="my-8 flex justify-center">
          <p className={`${fontSourceSerifScreenCN.className} text-lg`}>{Config.Sentence}</p>
        </div>
      )}
    </>
  );
};
