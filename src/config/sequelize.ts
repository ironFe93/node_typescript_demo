import Sequelize from 'sequelize';

var sequelize = new Sequelize('culqi_prod_2', 'root', 'mysqlr00t', {
    host: 'localhost',
    port: 7777,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
    define: {
        timestamps: false
    }
});

export default sequelize;