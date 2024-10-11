import { chdir } from 'process';
import { ERROR_MESSAGE } from '../constants.js';

const handleCd = async (path) => {
  try {
    await chdir(...path);;
  } catch (error) {
      if (error.code === 'ENOENT') console.log(ERROR_MESSAGE);
  }
}

export default handleCd;