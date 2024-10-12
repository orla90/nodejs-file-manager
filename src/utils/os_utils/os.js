import os from 'os';
import { ERROR_MESSAGE } from '../constants.js';

const showCpus = () => {
  console.log(`Total number of CPUs: ${ os.cpus().length }.\n`);

  os.cpus().forEach((cpu, i) => {
      const speedGHz = (cpu.speed / 1000).toFixed(2);
      console.log(`CPU ${ i + 1 }: Model: ${ cpu.model }, Clock rate: ${ speedGHz } GHz.`);
  });
}

const getOsInfo = async ([ param ]) => {   
  switch (param.trim()) {
    case '--EOL':
      console.log(`Default system End-Of-Line: ${ JSON.stringify(os.EOL) }`);
      break;
    case '--cpus':
      showCpus();
      break;
    case '--homedir':
      console.log(`Home directory: ${ os.homedir() }`);
      break;
    case '--username':
      console.log(`Current system user name: ${ os.userInfo().username }`);
      break;
    case '--architecture':
      console.log(`CPU architecture: ${ os.arch() }`);
      break;
    default: 
      console.log(ERROR_MESSAGE);
      break;
  }
}

export default getOsInfo;