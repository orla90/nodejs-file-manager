import { resolve } from 'path';
import { createHash } from 'crypto';
import { createReadStream } from 'fs';
import { ERROR_MESSAGE } from '../constants.js';

const handleHash = async ([path]) => {
  const filePath = resolve(path);
  const stream = createReadStream(filePath);
  const hash = createHash('sha256');

  stream.on('readable', () => {
    const data = stream.read();
    if (data) {
        hash.update(data);
    } else {
        console.log(hash.digest('hex'));
    }
  });

  stream.on('error', () => console.log(ERROR_MESSAGE))
};

export default handleHash;
