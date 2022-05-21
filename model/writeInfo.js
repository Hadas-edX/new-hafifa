import { writeFile } from 'fs';
import { promisify } from 'util';

import { readInfo } from './readInfo';
import { determineFileDetails } from './utils';

const SUCCESS_STATUS_CODE = 200;
const GENERIC_ERROR_STATUS_CODE = 500;

const promisifiedWriteFile = promisify(writeFile);

const writeInfoToFile = async (info) => {
  try {
    const fileJson = await readInfo();

    const parsedInfo = JSON.parse(JSON.stringify(info));
    const timestamp = new Date().toLocaleString();
    parsedInfo.timestamp = timestamp;
    fileJson.push(parsedInfo);

    const file = determineFileDetails();
    await promisifiedWriteFile(`${file.path}\\${file.name}`, JSON.stringify(fileJson));
    return { status: SUCCESS_STATUS_CODE, message: 'Your idea was successfully documented' };
  } catch (err) {
    return { status: GENERIC_ERROR_STATUS_CODE, message: 'Oy Vey' };
  }
};

export const writeInfo = writeInfoToFile;
