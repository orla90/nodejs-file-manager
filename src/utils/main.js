import { 
  handleFuncErr, 
  handleLs, 
  handleUp,
  handleCd,
  handleCat,
  handleAdd,
  handleRn,
  handleCpOrMv,
  handleRm,
  getOsInfo,
  handleHash,
  handleCompressOrDecompress,
 } from './index.js'

const handleReadline = (input, eventEmitter) => {
  const args = input.split(' ').slice(1);

  switch (input.split(' ')[0]) {
    case '.exit':
      eventEmitter.emit('exit');
      break;
    case 'ls':
      handleFuncErr(handleLs);
      break;
    case 'up':
      handleFuncErr(handleUp);
      break;
    case 'cd':
      handleFuncErr(handleCd, ...args);
      break;
    case 'cat':
      handleFuncErr(handleCat, ...args);
      break;
    case 'add':
      handleFuncErr(handleAdd, ...args);
      break;
    case 'rn':
      handleFuncErr(handleRn, ...args);
      break;
    case 'cp':
    case 'mv':
      handleFuncErr(handleCpOrMv, ...input.split(' '));
      break;
    case 'rm':
      handleFuncErr(handleRm, ...args);
      break;
    case 'os':
      handleFuncErr(getOsInfo, ...args);
      break;
    case 'hash':
      handleFuncErr(handleHash, ...args);
      break;
    case 'compress':
    case 'decompress':
      handleFuncErr(handleCompressOrDecompress, ...input.split(' '));
      break;
    default: 
      console.log('Invalid input.');
      break;
  }
}

export default handleReadline;