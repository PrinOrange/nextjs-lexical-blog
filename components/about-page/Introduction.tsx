export const Introduction = () => {
  return (
    <div className={"my-5 justify-center content-font md:flex md:space-x-10"}>
      <div className="my-auto flex md:w-1/3">
        <img alt="my-profile" className="mx-auto my-auto max-h-[23rem] rounded-lg" src="/images/profile.webp" />
      </div>
      <div className="my-auto md:w-1/3">
        <div className="mt-5 mb-3 font-bold text-3xl">Hi, there👋</div>I am a student / entrepreneur / engineer (Your
        profession) majoring in (Your Research Field) born in XXXX (Your birth year)
        <br />
        <br />
        My main research interests includes XXXX
        <br />
        <br />
        Additionally, I am also interested in XXXX.
      </div>
    </div>
  );
};
