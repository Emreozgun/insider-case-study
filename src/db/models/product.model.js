module.exports = (sequelize, DataTypes) => {
	const products = sequelize.define(
		'products',
		{
			id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
			},
			item_id: {
				type: DataTypes.STRING,
				primaryKey: true,
				allowNull: false,
			},
			name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			locale: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			click: {
				type: DataTypes.INTEGER,
				allowNull: false,
				defaultValue: 0,
			},
			purchase: {
				type: DataTypes.INTEGER,
				allowNull: false,
				defaultValue: 0,
			},
		},
		{
			tableName: 'products',
		}
	);

	// Empty associate function
	products.associate = function () {
		// Define associations here if necessary
		// This function is left empty since there are no associations to define
	};

	return products;
};
