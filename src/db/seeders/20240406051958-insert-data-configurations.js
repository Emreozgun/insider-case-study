module.exports = {
	up: async (queryInterface) => {
		await queryInterface.bulkInsert(
			'configurations',
			[
				{
					id: 1,
					name: 'Sort by Purchase Ascending',
					sort_by: 'purchase',
					sort_order: 'asc',
					is_active: true,
				},
				{
					id: 2,
					name: 'Sort by Click Descending',
					sort_by: 'click',
					sort_order: 'desc',
					is_active: false,
				},
			],
			{}
		);
	},

	down: async (queryInterface) => {
		await queryInterface.bulkDelete('configurations', null, {});
	},
};
