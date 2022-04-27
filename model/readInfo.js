import { readFile } from 'fs';
import { promisify } from 'util';

const promisifiedReadFile = promisify(readFile);

export const readInfo = async (filePath, fileName) => {
  const fileData = await promisifiedReadFile(`${filePath}\\${fileName}`);
  return JSON.parse(fileData);
};
