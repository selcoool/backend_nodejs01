import { Sequelize } from 'sequelize'
import config from '../config/config.js'


// console.log(' db_database', config)

// const sequelize = new Sequelize(
//   config.db_database,
//   config.db_user,
//   config.db_password,
//   {
//       host: config.db_host,
//       port: config.db_port,
//       dialect: config.db_dialect,
//   }
// )

const sequelize = new Sequelize('restaurant', 'root', '159753', {
  host: 'localhost',
  port:"3310",
  dialect: "mysql"
});


try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

export default sequelize


// npm sequelize-auto -h localhost -d test -u root -x "" -p 3306  --dialect mysql -c src/models -o src/models -l esm 