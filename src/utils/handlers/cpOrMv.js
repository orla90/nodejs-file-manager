import { createReadStream, createWriteStream, promises } from 'fs';
import { resolve, parse } from 'path';
import { pipeline } from 'stream';
import { promisify } from 'util';
import { ERROR_MESSAGE } from '../constants.js';

const handleCpOrMv = async ([command, oldPath, newPath]) => {  
  try {
    const oldFilePath = resolve(oldPath);
    const newFilePath = resolve(newPath, parse(oldFilePath).base);
    const pipe = promisify(pipeline);

    const readableStream = createReadStream(oldFilePath);
    const writableStream = createWriteStream(newFilePath);
    await pipe(readableStream, writableStream);
    if (command === 'mv') await promises.unlink(oldFilePath);
  } catch {
    console.log(ERROR_MESSAGE);
  }
}

export default handleCpOrMv;