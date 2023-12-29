import Link from "next/link";

export const TagBadge = (props: { name: string; size: "sm" | "md"; count?: number }) => {
  return (
    <Link href={`/tags/${props.name}`} className={`mx-1 my-auto ${props.size === "sm" ? "text-sm" : "text-base"}`}>
      <div className="border-2 border-black px-2 hover:border-gray-600 hover:text-gray-600  dark:border-white  dark:text-white  dark:hover:border-gray-200">
        {`${props.name}${props.count ? ` (${props.count})` : ""}`}
      </div>
    </Link>
  );
};
