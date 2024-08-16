import { Config } from "@/data/config";
import Giscus from "@giscus/react";
import { useTheme } from "next-themes";

export const PostComments = (props: { postId: string }) => {
  const { theme } = useTheme();
  return (
    Config.Giscus && (
      <div className="mt-10 mb-5">
        <Giscus
          category={Config.Giscus.category}
          categoryId={Config.Giscus.categoryId}
          emitMetadata="0"
          id={props.postId}
          inputPosition="top"
          lang="en"
          loading="eager"
          mapping="pathname"
          reactionsEnabled="1"
          repo={Config.Giscus.repo as `${string}/${string}`}
          repoId={Config.Giscus.repoId}
          term={props.postId}
          theme={theme === "light" ? "light_tritanopia" : "dark_tritanopia"}
        />
      </div>
    )
  );
};
