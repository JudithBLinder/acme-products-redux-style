const chalk = require('chalk');
const express = require('express');
const path = require('path');
const apiRouter = require('./apiRouter');

const PORT = process.env.PORT || 3000;
const DIST_PATH = path.join(__dirname, '../../dist');
const PUBLIC_PATH = path.join(__dirname, '../../public');

const app = express();

app.use(express.json());
app.use(express.static(DIST_PATH));
app.use(express.static(PUBLIC_PATH));

app.use('/api', apiRouter);

app.get('*', (req, res) => {
  res.sendFile(path.join(PUBLIC_PATH, './index.html'));
});

const startServer = () =>
  new Promise((res) => {
    app.listen(PORT, () => {
      console.log(chalk.green(`Server is now listening on PORT: ${PORT}`));
      res();
    });
  });

module.exports = {
  startServer,
  app,
};
