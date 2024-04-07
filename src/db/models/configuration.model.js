module.exports = (sequelize, DataTypes) => {
	const configurations = sequelize.define(
		'configurations',
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			name: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true,
			},
			sort_by: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			sort_order: {
				type: DataTypes.ENUM('asc', 'desc'),
				allowNull: false,
			},
			is_active: {
				type: DataTypes.BOOLEAN,
				allowNull: false,
				defaultValue: false,
			},
		},
		{
			tableName: 'configurations',
		}
	);

	// Empty associate function
	configurations.associate = function () {};

	return configurations;
};
