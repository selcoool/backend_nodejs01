import { Sequelize } from 'sequelize'
import config from '../config/config.js'


// console.log(' db_database', config)

const sequelize = new Sequelize(
  config.db_database,
  config.db_user,
  config.db_password,
  {
      host: config.db_host,
      port: config.db_port,
      dialect: config.db_dialect,
  }
)

// const sequelize = new Sequelize('restaurant', 'root', '159753', {
//   host: 'localhost',
//   port:"3310",
//   dialect: "mysql"
// });

// npx sequelize auto -h localhost -d restaurant -u root -x 159753 -p 3310 --dialect mysql -o src/models -l esm


try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

export default sequelize


// npx sequelize-auto -h localhost -d data_chuan01 -u root -x 159753 -p 3310  --dialect mysql -o src/models -l esm 