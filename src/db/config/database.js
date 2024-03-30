// This file exists because Sequelize only support import config as a string path, not an object
// module.exports = require('../../config/config').sqlDB;
const sqlDb = require('../../config/config').sqlDB;

module.exports = {
	username: sqlDb.user,
	...sqlDb,
};
