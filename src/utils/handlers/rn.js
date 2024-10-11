import { promises } from 'fs';
import { resolve } from 'path';
import { ERROR_MESSAGE } from '../constants.js';

const handleRn = async ([pathToFile, fileName]) => {  
  const oldFilePath = resolve(pathToFile);
  const newFilePath = resolve(fileName);

  try {
    await promises.access(oldFilePath);
  } catch {}

  try {
    await promises.access(newFilePath);
  } catch {}

  try {
    await promises.rename(oldFilePath, newFilePath);
  } catch (error) {
    console.log(ERROR_MESSAGE);
  }
}

export default handleRn;