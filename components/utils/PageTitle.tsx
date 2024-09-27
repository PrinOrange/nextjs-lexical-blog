import { twMerge } from "tailwind-merge";

export const PageTitle = (props: {
  children?: React.ReactNode;
  classNames?: string;
}) => {
  return (
    <h2 className={twMerge("caption-font my-5 flex select-none justify-center font-bold text-2xl", props.classNames)}>
      {props.children}
    </h2>
  );
};
