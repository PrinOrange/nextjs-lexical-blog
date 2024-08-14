import * as fs from "fs";
import * as path from "path";
import { UserDataDirectory } from "@/consts/consts";
import { getCurrentTime } from "@/lib/date";
import { checkAndCreateDirectory, isDirectoryEmptySync } from "@/lib/file";
import archiver from "archiver";
import Color from "colors";
import inquirer from "inquirer";
import * as tar from "tar";

function packageDirectory(sourceDir: string, outputFilePath: string) {
  const output = fs.createWriteStream(outputFilePath);
  const archive = archiver("tar", {
    gzip: true,
    zlib: { level: 9 },
  });
  archive.on("end", () => {
    console.log(
      `${Color.green("Archive successfully")}, with ${(archive.pointer() / (1024 * 1024)).toFixed(3)} MB in total.`,
    );
    console.log(`The archive package is saved in ${Color.cyan(outputFilePath)}.`);
  });
  archive.on("error", (err) => {
    throw err;
  });
  archive.pipe(output);
  archive.directory(sourceDir, false);
  archive.finalize();
}

function extractTarGz(tarGzPath: string, targetDir: string) {
  tar
    .x({
      file: tarGzPath,
      cwd: targetDir,
    })
    .then(() => console.log(Color.green("Restore the user data successfully.")))
    .catch((err) => {
      throw err;
    });
}

async function main() {
  const { action } = await inquirer.prompt([
    {
      type: "list",
      name: "action",
      message: "What do you want to do?",
      choices: ["Pack to archive the user data", "Unpack and restore user data"],
    },
  ]);

  switch (action) {
    case "Pack to archive the user data":
      inquirer
        .prompt({
          type: "input",
          name: "OutputDirPath",
          message: "The archive package's output path:",
        })
        .then((answers) => {
          const { OutputDirPath } = answers;
          const { year, month, day, hours, minutes, seconds } = getCurrentTime();
          const filename = `archive-${year}-${month}-${day}-${hours}-${minutes}-${seconds}.tar.gz`;
          const outFilePath = path.join(OutputDirPath, filename);
          checkAndCreateDirectory(OutputDirPath) && packageDirectory(UserDataDirectory, outFilePath);
        });
      break;

    case "Unpack and restore user data":
      if (!isDirectoryEmptySync(UserDataDirectory)) {
        const { confirm } = await inquirer.prompt([
          {
            type: "confirm",
            name: "confirm",
            message: Color.bgRed(
              Color.bold(
                " DANGER : Existing user data detected in ./data directory. \nThis operation will overwrite the current user data, continue? ",
              ),
            ),
          },
        ]);
        if (confirm) {
          inquirer
            .prompt({
              type: "input",
              name: "ArchivedPackagePath",
              message: "The archive package's path:",
            })
            .then((answers) => {
              const { ArchivedPackagePath } = answers;
              if (fs.existsSync(ArchivedPackagePath)) {
                extractTarGz(ArchivedPackagePath, UserDataDirectory);
              } else {
                console.log(Color.red("The archive package does not exist."));
              }
            });
          return;
        }
      }
      console.log("Operation canceled.");
      break;
  }
}

main();
