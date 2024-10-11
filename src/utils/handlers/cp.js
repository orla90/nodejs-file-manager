import { createReadStream, createWriteStream } from 'fs';
import { resolve, parse } from 'path';
import { pipeline } from 'stream';
import { promisify } from 'util';
import { ERROR_MESSAGE } from '../constants.js';

const handleCp = async ([oldPath, newPath]) => {  
  try {
    const oldFilePath = resolve(oldPath);
    const newFilePath = resolve(newPath, parse(oldFilePath).base);
    const pipe = promisify(pipeline);

    const readableStream = createReadStream(oldFilePath);
    const writableStream = createWriteStream(newFilePath);
    await pipe(readableStream, writableStream);
  } catch {
    console.log(ERROR_MESSAGE);
  }
}

export default handleCp;