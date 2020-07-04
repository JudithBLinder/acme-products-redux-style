const chalk = require('chalk');
const { Router } = require('express');
const Product = require('../db/product');

const apiRouter = Router();

apiRouter.get('/products', async (req, res) => {
  const products = await Product.findAll();

  res.send({ products });
});
apiRouter.post('/products', async (req, res) => {
  try {
    res.status(201).send(
      await Product.create({
        name: req.body.name,
      })
    );
  } catch (e) {
    console.log(chalk.red(`Error posting product name: ${req.body.name}`));
  }
});

apiRouter.delete('/products/:id', async (req, res) => {
  try {
    await Product.destroy({
      where: { id: req.params.id },
    });
    res.sendStatus(204);
  } catch (e) {
    console.log(chalk.red(`Error deleting product id: ${req.params.id}`));
  }
});

module.exports = apiRouter;
