import minisearch from "minisearch";
import { cutForSearch } from "nodejs-jieba";
import { getPostFileContent, sortedPosts } from "./post-process";

function tokenizer(str: string) {
  return cutForSearch(str, true);
}

function makeSearchIndex() {
  let miniSearch = new minisearch({
    fields: ["id", "title", "tags", "subtitle", "summary", "content"],
    storeFields: ["id", "title", "tags"],
    tokenize: tokenizer,
    searchOptions: {
      fuzzy: 0.1,
    },
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
