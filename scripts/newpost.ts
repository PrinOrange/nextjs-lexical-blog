import { type ChildProcessWithoutNullStreams, type SpawnSyncReturns, spawn, spawnSync } from "child_process";
import fs from "fs";
import path from "path";
import { PostFilesDirectory } from "@/consts/consts";
import { getCurrentTime } from "@/lib/date";
import colors from "colors";
import inquirer, { type QuestionCollection } from "inquirer";
import _ from "lodash";
import { titleCase } from "title-case";

type TAnswer = {
  title: string;
  subtitle: string;
  tags: string;
  noPrompt: boolean;
  pin: boolean;
  allowShare: boolean;
};

const questions: QuestionCollection<TAnswer> = [
  {
    type: "input",
    name: "title",
    message: "What's the title?",
    validate: (input: string) => (input.trim() === "" ? "Please enter a title." : true),
  },
  { type: "input", name: "subtitle", message: "What's the subtitle?" },
  { type: "input", name: "tags", message: "Assign tags for the posts and separate them with commas." },
  { type: "confirm", name: "noPrompt", message: "Do NOT prompt this post? (D:false)", default: false },
  { type: "confirm", name: "pin", message: "Do you want to pin this post? (D:false)", default: false },
  { type: "confirm", name: "allowShare", message: "Do you allow everybody share this post? (D:true)", default: true },
];

const createTemplate = (answers: TAnswer): string => {
  const { year, month, day } = getCurrentTime();
  const tags = JSON.stringify(
    answers.tags
      .split(",")
      .map((tag) => tag.trim())
      .filter((tag) => tag !== ""),
  );

  return `---
title: "${titleCase(answers.title)}"
subtitle: "${answers.subtitle}"
summary: ""
author: ""
coverURL: ""
time: "${year}-${month}-${day}"
tags: ${tags}
noPrompt: ${answers.noPrompt}
pin: ${answers.pin}
allowShare: ${answers.allowShare}
closed: false
---`;
};

const writePostFile = (filePath: string, content: string): void => {
  fs.writeFile(filePath, content, "utf-8", (err) => {
    if (err) {
      console.error("Error writing file:", err);
      return;
    }

    console.log(colors.green(colors.bold("Create Post Succeed.")));
    console.log(`Open the file ${colors.cyan(filePath)} to write your blog now.`);
    console.log("Some fields, such as summary, need to be filled in by yourself after opening the file.");

    const openFileCommand: Record<string, () => ChildProcessWithoutNullStreams | SpawnSyncReturns<Buffer>> = {
      win32: () => spawn("cmd", ["/c", "start", filePath]),
      darwin: () => spawnSync("open", [filePath]),
      linux: () => spawnSync("xdg-open", [filePath]),
      freebsd: () => spawnSync("xdg-open", [filePath]),
    };

    const command = openFileCommand[process.platform];
    if (command) command();
    else {
      console.log("Unsupported platform. Open the file manually please.");
    }
  });
};

inquirer.prompt<TAnswer>(questions).then((answers) => {
  const { year, month, day } = getCurrentTime();
  const content = createTemplate(answers);
  const sluggedTitle = _.kebabCase(answers.title);
  const postFileName = `${year}-${month}-${day}-${sluggedTitle}.md`;
  const postFilePath = path.resolve(path.join(PostFilesDirectory, postFileName));

  writePostFile(postFilePath, content);
});
