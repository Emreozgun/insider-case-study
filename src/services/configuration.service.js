const { Sequelize } = require('sequelize');
const db = require('../db/models');

async function setActiveConfig(configurationId) {
	let transaction;
	try {
		transaction = await db.sequelize.transaction();

		const targetConfiguration = await db.configurations.findByPk(
			configurationId,
			{
				transaction,
			}
		);
		// console.log({ targetConfiguration });
		if (targetConfiguration) {
			await targetConfiguration.update(
				{ is_active: true },
				{ transaction }
			);
		}

		await db.configurations.update(
			{ is_active: false },
			{
				where: {
					id: { [Sequelize.Op.ne]: configurationId },
				},
				transaction,
			}
		);
		await transaction.commit();
		// console.log('Transaction successfully committed.');
	} catch (error) {
		if (transaction) await transaction.rollback();
		// console.error('Error in transaction:', error);
	}
}

async function getAllConfigs() {
	const configs = await db.configurations.findAll();

	return configs;
}

module.exports = {
	setActiveConfig,
	getAllConfigs,
};
