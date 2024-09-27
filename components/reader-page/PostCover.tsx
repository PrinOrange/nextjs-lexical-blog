export const PostCover = (props: { coverURL: string }) => {
  return (
    <div
      className="mt-0 mb-8 flex w-full justify-center rounded-md"
      style={{
        aspectRatio: "5/1",
        background: `url(${props.coverURL})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    />
  );
};
