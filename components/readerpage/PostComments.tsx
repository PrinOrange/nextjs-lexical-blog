import { Config } from "@/data/config";
import Giscus from "@giscus/react";
import { useTheme } from "next-themes";

export const PostComments = (props: { postId: string }) => {
  const { theme } = useTheme();
  return (
    Config.Giscus && (
      <div className="my-5">
        <Giscus
          id={props.postId}
          repo={Config.Giscus.repo as `${string}/${string}`}
          repoId={Config.Giscus.repoId}
          category={Config.Giscus.category}
          categoryId={Config.Giscus.categoryId}
          mapping="pathname"
          term={props.postId}
          reactionsEnabled="1"
          emitMetadata="0"
          theme={theme === "light" ? "light_tritanopia" : "dark_tritanopia"}
          inputPosition="top"
          loading="eager"
          lang="en"
        />
      </div>
    )
  );
};
