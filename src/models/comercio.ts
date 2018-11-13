import sequelize  from '../config/sequelize';
import Sequelize from 'sequelize';

const Comercio  = sequelize.define('comercio', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    codigoComercio: {
      type: Sequelize.STRING,
      field: 'codigo_comercio' // Will result in an attribute that is codigoComercio when user facing but codigo_comercio in the database
    }
  }, {
    freezeTableName: true // Model tableName will be the same as the model name
  });

export default Comercio