import { handleLs } from './index.js'

const handleReadline = (input, eventEmitter) => {
  switch (input.trim()) {
    case '.exit':
      eventEmitter.emit('exit');
      break;
    case 'ls':
      handleLs();
      break;
    default: 
      console.log('Invalid input.');
      break;
  }
}

export default handleReadline;