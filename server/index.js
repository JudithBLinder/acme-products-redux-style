const chalk = require('chalk');

const { startServer } = require('./api/index');
const { sync, seed } = require('./db/index');

const startApp = async () => {
  console.log(chalk.cyan('App is starting...'));
  try {
    await sync({ force: false });
    await seed();
    await startServer();
    console.log(chalk.blueBright('App is ready.'));
  } catch (e) {
    console.error(e);
    console.log(chalk.red('App failed to start!'));
  }
};

startApp();
