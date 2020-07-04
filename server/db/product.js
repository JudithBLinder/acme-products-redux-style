const { STRING, UUID, UUIDV4 } = require('sequelize');
const db = require('./db');

const Product = db.define('product', {
  id: {
    type: UUID,
    defaultValue: UUIDV4,
    primaryKey: true,
  },
  name: {
    type: STRING,
    allowNull: false,
    uniqe: true,
    validate: {
      notEmpty: true,
    },
  },
});

module.exports = Product;
