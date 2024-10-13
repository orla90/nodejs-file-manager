import { ERROR_MESSAGE } from '../constants.js';

const handleFuncErr = async (func, ...args) => {
  try {
    func(args);
    setTimeout(() => {
      console.log(`\nYou are currently in ${process.cwd()}`)
    }, 10);
  } catch (error) {
    console.error(ERROR_MESSAGE)
  }
}

export default handleFuncErr;