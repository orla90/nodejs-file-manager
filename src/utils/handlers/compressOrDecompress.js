import zlib from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import { resolve, parse } from 'path';
import { pipeline } from 'stream';
import { promisify } from 'util';
import { ERROR_MESSAGE } from '../constants.js';

const handleCompressOrDecompress = async ([command, srcPath, destPath]) => {
  try {
    const srcPathToFile = resolve(srcPath);
    const destPathToFile = command === 'compress' ? resolve(destPath, `${parse(srcPathToFile).base}.br`) : resolve(destPath, parse(srcPathToFile).name);
    const pipe = promisify(pipeline);
    await pipe(
      createReadStream(srcPathToFile), 
      command === 'compress' ? zlib.createBrotliCompress() : zlib.createBrotliDecompress(), 
      createWriteStream(destPathToFile)
    );
  } catch {
    console.log(ERROR_MESSAGE)
  }
};

export default handleCompressOrDecompress;
