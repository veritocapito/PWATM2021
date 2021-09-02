const bd = require('../utils/bd');

const getAll = () => bd('productos').select('nombre', 'precio', 'stock');

module.exports = {getAll}