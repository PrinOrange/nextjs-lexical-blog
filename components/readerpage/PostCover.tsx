export const PostCover = (props: { coverURL: string }) => {
  return (
    <div
      className="mb-8 mt-0 flex w-full justify-center rounded-xl"
      style={{
        aspectRatio: "5/2",
        background: `url(${props.coverURL})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    />
  );
};
