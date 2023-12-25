export const PageCover = (props: { coverURL: string }) => {
  return (
    <div
      className="my-5 mt-0 flex w-full justify-center rounded-xl"
      style={{
        aspectRatio: "4/1",
        background: `url(${props.coverURL})`,
        backgroundSize: "cover",
      }}
    />
  );
};
