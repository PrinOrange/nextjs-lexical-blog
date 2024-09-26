import { PostFilesDirectory } from "@/consts/consts";
import { getCurrentTime } from "@/lib/date";
import { stringifyFrontmatter } from "@/lib/frontmatter";
import type { TPostFrontmatter } from "@/types/frontmatter.type";
import { type ChildProcessWithoutNullStreams, type SpawnSyncReturns, spawn, spawnSync } from "child_process";
import colors from "colors";
import fs from "fs";
import inquirer, { type QuestionCollection } from "inquirer";
import _ from "lodash";
import path from "path";
import { titleCase } from "title-case";

type TAnswer = {
  inputTitle: string;
  inputSubtitle: string;
  inputTags: string;
  inputNoPrompt: boolean;
  inputPin: boolean;
  inputAllowShare: boolean;
};

const questions: QuestionCollection<TAnswer> = [
  {
    type: "input",
    name: "inputTitle",
    message: "What's the title? (Required)",
    validate: (input: string) => (input.trim() === "" ? "Please enter a title." : true),
  },
  {
    type: "input",
    name: "inputSubtitle",
    message: "What's the subtitle? (Optional)",
  },
  {
    type: "input",
    name: "inputTags",
    message: "Assign tags for the posts and separate them with commas. (Required, default: others)",
  },
  {
    type: "confirm",
    name: "inputNoPrompt",
    message: "Do NOT prompt this post? (Required, Default:false)",
    default: false,
  },
  {
    type: "confirm",
    name: "inputPin",
    message: "Do you want to pin this post? (Required, Default:false)",
    default: false,
  },
  {
    type: "confirm",
    name: "inputAllowShare",
    message: "Do you allow everybody share this post? (Required, Default:true)",
    default: true,
  },
];

const writePostFile = (filePath: string, content: string): void => {
  fs.writeFile(filePath, content, "utf-8", (err) => {
    if (err) {
      console.error("Error writing file:", err);
      return;
    }

    console.log(colors.green(colors.bold("Create Post Succeed.")));
    console.log(`Open the file ${colors.cyan(filePath)} to write your blog now.`);
    console.log("Some fields, such as summary, need to be filled in by yourself after opening the file.");
  });
};

const openPostFile = (filePath: string) => {
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
};

inquirer.prompt<TAnswer>(questions).then((answers) => {
  // Process the answer
  const { year, month, day } = getCurrentTime();
  const title = titleCase(answers.inputTitle);
  const subtitle = titleCase(answers.inputSubtitle);

  const tags = _.uniq(
    answers.inputTags
      .split(",")
      .map((tag) => tag.trim())
      .filter((tag) => tag !== ""),
  );
  if (tags.length === 0) tags.push("others");

  const pin = answers.inputPin;
  const noPrompt = answers.inputNoPrompt;
  const allowShare = answers.inputAllowShare;
  const time = `${year}-${month}-${day}`;

  // Stringify the frontmatters
  const frontmatter: TPostFrontmatter = {
    title: title,
    subtitle: subtitle,
    summary: "",
    coverURL: null,
    time: time,
    tags: tags,
    pin: pin,
    noPrompt: noPrompt,
    allowShare: allowShare,
    closed: false,
  };
  const stringifiedFrontmatter = stringifyFrontmatter(frontmatter);

  // Output the new post file
  const postFileName = `${year}-${month}-${day}-${_.kebabCase(answers.inputTitle)}.md`;
  const postFilePath = path.resolve(path.join(PostFilesDirectory, postFileName));

  writePostFile(postFilePath, `${stringifiedFrontmatter}\n`);
  openPostFile(postFilePath);
});
