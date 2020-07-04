const chalk = require('chalk');
const db = require('./db');
const Product = require('./product');

const sync = async ({ force = false }) => {
  try {
    await db.sync({ force });
    console.log(chalk.green('DB synced successfully'));
  } catch (e) {
    console.log(chalk.red('Failed to sync DB'));
    throw e;
  }
};

const seed = async () => {
  try {
    const products = [{ name: 'Foo' }, { name: 'Bar' }, { name: 'Jelly' }];
    await products.forEach((pro) => {
      Product.create(pro);
    });
    console.log(chalk.green('DB seeded successfully'));
  } catch (e) {
    console.log(chalk.red('DB seeding failed!'));
    throw e;
  }
};

module.exports = { sync, seed };
