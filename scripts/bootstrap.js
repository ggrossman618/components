const fs = require('fs-extra');
const { resolve, runSpawn, run } = require('./helpers');

async function bootstrap() {
  const atxModules = resolve('node_modules/@altronix');
  if (!fs.existsSync(atxModules)) fs.mkdirSync(atxModules);

  await run('components:build');
  await run('components:install');
}

// main
async function main() {
  try {
    if (await fs.exists(resolve('node_modules/@altronix/components'))) {
      if (process.argv[2] && process.argv[2] === 'force') {
        console.log('Found modules, forcing bootstrap anyway...');
        await bootstrap();
      } else {
        console.log('Found modules, skipping bootstrap...');
      }
    } else {
      console.log('Missing modules, running bootstrap...');
      await bootstrap();
    }
  } catch (e) {
    console.log(e);
  }
}

(async function () {
  await main();
})();
