import { readFile } from 'fs';
import { promisify } from 'util';

import { determineFileDetails } from './utils';

const promisifiedReadFile = promisify(readFile);

const readInfoFromFile = async () => {
  const file = determineFileDetails();
  const fileData = await promisifiedReadFile(`${file.path}\\${file.name}`);
  return JSON.parse(fileData);
};

export const readInfo = readInfoFromFile;
