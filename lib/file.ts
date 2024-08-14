import * as fs from "fs";

export function checkAndCreateDirectory(dirPath: string) {
  try {
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
    fs.accessSync(dirPath, fs.constants.R_OK | fs.constants.W_OK);
    return true;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export function isDirectoryEmptySync(directory: string) {
  try {
    if (!fs.existsSync(directory)) {
      fs.mkdirSync(directory, { recursive: true });
    }
    const files = fs.readdirSync(directory);
    return files.length === 0;
  } catch (err) {
    console.log(err);
    throw err;
  }
}
