import seal from "@/assets/icons/seal.svg";
import { Config } from "@/data/config";

export const BottomCard = () => {
  return (
    <div className="flex w-full select-none flex-col justify-center p-8">
      <div
        className="mx-auto h-24 w-24"
        style={{ backgroundImage: `url(${seal.src})`, backgroundRepeat: "no-repeat", backgroundSize: "contain" }}
      />
      <p className={"mx-auto mt-5 content-font"}>{Config.Sentence}</p>
    </div>
  );
};
