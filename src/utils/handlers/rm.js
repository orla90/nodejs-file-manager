import { promises } from 'fs';
import { resolve } from 'path';
import { ERROR_MESSAGE } from '../constants.js';

const handleRm = async ([path]) => {   
  try {
    const filePath = resolve(path);
    await promises.unlink(filePath);
  } catch {
    console.log(ERROR_MESSAGE);
  }
}

export default handleRm;