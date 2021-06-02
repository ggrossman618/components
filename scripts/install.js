const fs = require('fs-extra');
const { join, sep } = require('path');
const { resolve } = require('./helpers');

// TODO move package.json copy into build function (when building dist)
//      then just copy dist into node_modules
function install(prj) {
  const pkg = `${join(resolve('packages'), prj)}${sep}package.json`;
  const dist = join(resolve('dist'), prj);
  const dest = join(resolve('node_modules/@altronix'), prj);

  // Copy dist folder into node_modules
  fs.copySync(dist, dest);
  fs.copyFileSync(pkg, join(dest, 'package.json'));
}

install(process.argv.slice(2)[0]);
