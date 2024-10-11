import { createInterface } from 'readline';
import { EventEmitter } from 'events';
import { chdir } from 'process';
import { homedir } from 'os';
import { handleReadline } from './utils/index.js'

chdir(homedir());

const username = process.argv
  .slice(2)
  ?.find((arg) => arg.startsWith('--username='))
  ?.split('')
  ?.slice('--username='.length)
  ?.join('') ?? 'Guest';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const eventEmitter = new EventEmitter();

eventEmitter.on('exit', () => {
  exit();
})

rl.on('line', (input) => handleReadline(input, eventEmitter))
  .on("SIGINT", () => exit())
  .on('ls', () => eventEmitter.emit('ls'))

username && console.log(`Welcome to the File Manager, ${ username.charAt(0).toUpperCase() + username.slice(1) }!`);
console.log(`You are currently in ${process.cwd()}`);

const exit = () => {
  console.log(`Thank you for using File Manager, ${ username.charAt(0).toUpperCase() + username.slice(1) }, goodbye!`);
  rl.close();
  process.exit();
}
