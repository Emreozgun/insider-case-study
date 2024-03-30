module.exports = {
	up: (queryInterface, Sequelize) =>
		queryInterface.createTable('products', {
			id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
			},
			item_id: {
				type: Sequelize.STRING,
				primaryKey: true,
				allowNull: false,
			},
			name: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			locale: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			click: {
				type: Sequelize.INTEGER,
				allowNull: false,
				defaultValue: 0,
			},
			purchase: {
				type: Sequelize.INTEGER,
				allowNull: false,
				defaultValue: 0,
			},
		}),
	down: (queryInterface /* , Sequelize */) =>
		queryInterface.dropTable('products'),
};
