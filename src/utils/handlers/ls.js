import { promises as fs } from 'fs';

const handleLs = async () => {
  const entries = await fs.readdir(process.cwd(), { withFileTypes: true });
  const folders = [];
  const files = [];
  const table = {};

  class Directory {
    constructor(name, type) {
      this.Name = name;
      this.Type = type;
    }
  }

  entries.forEach(entry => {
      if (entry.isDirectory()) {
          folders.push([ entry.name, 'directory' ]);
      } else if (entry.isFile()) {
          files.push([ entry.name, 'file' ]);
      }
  });

  folders.sort((a, b) => a[0] - b[0]);
  files.sort((a, b) => a[0] - b[0]);

  [...folders, ...files].forEach((item, i) => table[i] = new Directory(...item))

  console.table(table)
}

export default handleLs;