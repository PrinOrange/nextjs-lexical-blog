import { fontSourceSerifScreenCN } from "@/styles/font";

export const TagBadge = (props: { name: string; size: "sm" | "md"; count?: number }) => {
  return (
    <div
      className={`mx-1 my-1 ${fontSourceSerifScreenCN.className} ${
        props.size === "sm" ? "text-sm" : "text-base"
      } border-2 border-black px-2  dark:border-white  dark:text-white`}
    >
      {`${props.name}${props.count ? ` (${props.count})` : ""}`}
    </div>
  );
};
