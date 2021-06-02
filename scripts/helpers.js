const path = require('path');
const spawn = require('child_process').spawn;

const root = path.join(__dirname, '..');

// Spawn a process
module.exports = exports = {};
exports.runSpawn = function runSpawn(
  program,
  args,
  opts = { stdio: 'inherit', shell: process.platform === 'win32' }
) {
  return new Promise((resolve, reject) => {
    spawn(program, args, opts)
      .on('exit', (code) => (code ? reject(code) : resolve(code)))
      .on('error', (e) => reject(e));
  });
};

// run
exports.run = async function run(project) {
  await exports.runSpawn('yarn', [project]);
};

// Resolve a directory from root
exports.resolve = function resolve(p) {
  return path.join(root, p);
};
