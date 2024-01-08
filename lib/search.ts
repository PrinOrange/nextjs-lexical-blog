import { cutForSearch } from "@node-rs/jieba";
import minisearch from "minisearch";
import { getPostFileContent, sortedPosts } from "./post-process";

// Due to the flaws of the word tokenizer,
// it is necessary to match CJKL symbols only
// during the word segmentation process to prevent repeated recognition.
const CJKLRecognizeRegex = /[\u4E00-\u9FFF\u3040-\u309F\u30A0-\u30FF\uAC00-\uD7A3a-zA-Z]+/g;

function tokenizer(str: string) {
  const result = cutForSearch(str, true).filter((item) => item.match(CJKLRecognizeRegex));
  return result;
}

function makeSearchIndex() {
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
  return miniSearch;
}

export const SearchIndex = makeSearchIndex();
