import archiver from "archiver";
import Color from "colors";
import fs from "fs";
import inquirer from "inquirer";
import path from "path";
import tar from "tar";

const UserDataDirectory = "./data";

function checkAndCreateDirectory(dirPath) {
  try {
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
    fs.accessSync(dirPath, fs.constants.R_OK | fs.constants.W_OK);
    return true;
  } catch (err) {
    throw err;
  }
}

function isDirectoryEmptySync(directory) {
  try {
    if (!fs.existsSync(directory)) {
      fs.mkdirSync(directory, { recursive: true });
    }
    const files = fs.readdirSync(directory);
    return files.length === 0;
  } catch (err) {
    throw err;
  }
}

function packageDirectory(sourceDir, outputFilePath) {
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

function extractTarGz(tarGzPath, targetDir) {
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
          const date = new Date();
          const filename = `archive-${date.getFullYear()}-${
            date.getMonth() + 1
          }-${date.getDate()}-${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}.tar.gz`;
          const outFilePath = path.join(OutputDirPath, filename);
          if (checkAndCreateDirectory(OutputDirPath)) {
            packageDirectory(UserDataDirectory, outFilePath);
          }
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
        if (!confirm) {
          console.log("Operation canceled.");
          return;
        }
      }
      inquirer
        .prompt({
          type: "input",
          name: "ArchiveFilePath",
          message: "The archive package's path:",
        })
        .then((answers) => {
          const { ArchiveFilePath } = answers;
          if (fs.existsSync(ArchiveFilePath)) {
            extractTarGz(ArchiveFilePath, UserDataDirectory);
          } else {
            console.log(Color.red("The archive package does not exist."));
          }
        });
      break;
  }
}

main();
