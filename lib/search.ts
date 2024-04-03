import { cutForSearch } from "@node-rs/jieba";
import Colors from "colors";
import minisearch from "minisearch";
import sizeof from "object-sizeof";
import { getPostFileContent, sortedPosts } from "./post-process";

// Due to the flaws of the word tokenizer,
// it is necessary to match CJKL symbols only
// during the word segmentation process to prevent repeated recognition.
const CJKLRecognizeRegex = /[\u4E00-\u9FFF\u3040-\u309F\u30A0-\u30FF\uAC00-\uD7A3a-zA-Z]+/g;

function tokenizer(str: string) {
  const result = cutForSearch(str, true).filter((item) => CJKLRecognizeRegex.test(item));
  return result;
}

function makeSearchIndex() {
  const startTime = Date.now();
  let miniSearch = new minisearch({
    fields: ["id", "title", "tags", "subtitle", "summary", "content"],
    storeFields: ["id", "title", "tags"],
    tokenize: tokenizer,
  });
  for (let index = 0; index < sortedPosts.allPostList.length; index++) {
    const post = sortedPosts.allPostList[index];
    const content = getPostFileContent(post.id);
    miniSearch.add({
      id: post.id,
      title: post.frontMatter.title,
      tags: post.frontMatter.tags,
      subtitle: post.frontMatter.subtitle,
      summary: post.frontMatter.summary,
      content: content,
    });
  }
  const endTime = Date.now();
  const sizeofIndex = (sizeof(miniSearch) / 1024 ** 2).toFixed(3);
  console.log(
    Colors.cyan(
      `Search index is ready. And the size of index is ${sizeofIndex} mb. And it costs ${(endTime - startTime) / 1000} s.`,
    ),
  );
  return miniSearch;
}

export const SearchIndex = makeSearchIndex();
