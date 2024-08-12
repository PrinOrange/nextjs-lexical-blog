import { cutForSearch } from "@node-rs/jieba";
import Colors from "colors";
import minisearch from "minisearch";
import sizeof from "object-sizeof";
import { getPostFileContent, sortedPosts } from "./post-process";

// Due to the flaws of the word tokenizer,
// it is necessary to match CJKL symbols only
// during the word segmentation process to prevent repeated recognition.
const NonCJKLRecognizeRegex =
  /[^\u4e00-\u9fa5\u3040-\u30ff\uac00-\ud7af\u1100-\u11ff\u3130-\u318f\u31c0-\u31ef\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff\u0041-\u005a\u0061-\u007a\u00c0-\u00ff\u0100-\u017f\u0180-\u024f\s ]/g;

function tokenizer(str: string) {
  const result = cutForSearch(str.replace(NonCJKLRecognizeRegex, " "), true);
  for (let i = 0; i < result.length; i++) {
    if (result[i].trim() === "") {
      result.splice(i, 1);
      i--;
    }
  }
  return result;
}

function makeSearchIndex() {
  const startTime = Date.now();
  let miniSearch = new minisearch({
    fields: ["id", "title", "tags", "subtitle", "summary", "content"],
    storeFields: ["id", "title", "tags", "summary"],
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

export const SearchIndex = Object.freeze(makeSearchIndex());
