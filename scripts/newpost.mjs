import { spawn } from "child_process";
import Color from "colors";
import fs from "fs";
import inquirer from "inquirer";
import path from "path";
import process from "process";

let today = new Date();

let year = today.getFullYear();
let month = today.getMonth() + 1;
let day = today.getDate();

month = month < 10 ? "0" + month : month;
day = day < 10 ? "0" + day : day;

let formattedDate = year + "-" + month + "-" + day;

const questions = [
  {
    type: "input",
    name: "title",
    message: "What's the title?",
    validate: function (input) {
      if (input.trim() === "") {
        return "Please enter a title.";
      }
      return true;
    },
  },
  {
    type: "input",
    name: "subtitle",
    message: "What's the subtitle?",
  },
  {
    type: "tags",
    name: "tags",
    message: "Assign tags for the posts and separate them with commas.",
  },
  {
    type: "confirm",
    name: "noPrompt",
    message: "Do NOT prompt this post? (D:false)",
    default: false,
  },
  {
    type: "confirm",
    name: "pin",
    message: "Do you want to pin this post? (D:false)",
    default: false,
  },
  {
    type: "confirm",
    name: "allowShare",
    message: "Do you allow everybody share this post? (D:true)",
    default: true,
  },
];

const template = (title, subtitle, tags, noPrompt, pin, allowShare) => `---
title: ${JSON.stringify(title.toLowerCase())}
subtitle: ${JSON.stringify(subtitle)}
summary: ""
coverURL: ""
time: "${formattedDate}"
tags: ${JSON.stringify(tags)}
noPrompt: ${noPrompt}
pin: ${pin}
allowShare: ${allowShare}
---
`;

inquirer.prompt(questions).then((answers) => {
  const tags = answers.tags
    .split(",")
    .map((tag) => tag.trim())
    .filter((tag) => tag !== "");
  const content = template(answers.title, answers.subtitle, tags, answers.noPrompt, answers.pin, answers.allowShare);
  const sluggedTitle = answers.title.replace(/\s/g, "-");
  const postFileName = `${formattedDate}-${sluggedTitle}.md`;
  const postFilePath = path.resolve(path.join("./data/posts", postFileName));
  fs.writeFile(postFilePath, content, "utf-8", (err) => {
    if (err) console.log(err);
    console.log(Color.green(Color.bold("Create Post Succeed.")));
    console.log(`Open the file ${Color.cyan(postFilePath)} to write your blog now.`);
    console.log("Some fields, such as summary, need to be filled in by yourself after opening the file.");
    if (process.platform === "win32") {
      spawn("cmd", ["/c", "start", postFilePath]);
      return;
    }
    if (["darwin", "linux", "freebsd"].includes(process.platform)) {
      spawn("open", [postFilePath]);
      return;
    }
  });
});
