import { promises } from 'fs';
import { resolve } from 'path';
import { ERROR_MESSAGE } from '../constants.js';

const handleAdd = async ([fileName]) => {  
  const filePath = resolve(fileName);

  try {
    await promises.access(filePath);
    console.log(ERROR_MESSAGE);
  } catch (error) {
      if (error.code !== 'ENOENT') console.log(ERROR_MESSAGE);
      await promises.writeFile(filePath, '');
  }
}

export default handleAdd;