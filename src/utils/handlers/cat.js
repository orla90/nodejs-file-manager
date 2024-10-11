import { createReadStream } from 'fs';
import { resolve } from 'path';
import { ERROR_MESSAGE } from '../constants.js';

const handleCat = async (target) => {  
  const pathToFile = resolve(...target);
  
  const readableStream = createReadStream(
    pathToFile,
    'utf-8'
  );

  readableStream.on('data', (chunk) => process.stdout.write(chunk));
  readableStream.on('error', () => console.log(ERROR_MESSAGE));
}

export default handleCat;