module.exports = {
	up: async (queryInterface, Sequelize) => {
		queryInterface.createTable('configurations', {
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			name: {
				type: Sequelize.STRING,
				allowNull: false,
				unique: true,
			},
			sort_by: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			sort_order: {
				type: Sequelize.ENUM('asc', 'desc'),
				allowNull: false,
			},
			is_active: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
				defaultValue: false,
			},
		});
	},

	down: async (queryInterface, Sequelize) => {
		queryInterface.dropTable('configurations');
	},
};
