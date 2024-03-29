module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			'product',
			[
				{
					item_id: '399',
					name: 'Single',
					locale: 'tr_TR',
					click: 122,
					purchase: 904,
					id: 1,
				},
				{
					item_id: '1086',
					name: 'Woo Album #4',
					locale: 'tr_TR',
					click: 203,
					purchase: 606,
					id: 2,
				},
				{
					item_id: '1116',
					name: 'Patient Ninja',
					locale: 'tr_TR',
					click: 470,
					purchase: 298,
					id: 3,
				},
				{
					item_id: '397',
					name: 'Polo',
					locale: 'tr_TR',
					click: 604,
					purchase: 674,
					id: 4,
				},
				{
					item_id: '386',
					name: 'V-Neck T-Shirt',
					locale: 'tr_TR',
					click: 592,
					purchase: 740,
					id: 5,
				},
				{
					item_id: '388',
					name: 'Hoodie with Logo',
					locale: 'tr_TR',
					click: 496,
					purchase: 202,
					id: 6,
				},
				{
					item_id: '1098',
					name: 'Woo Ninja',
					locale: 'tr_TR',
					click: 73,
					purchase: 189,
					id: 7,
				},
				{
					item_id: '1107',
					name: 'Ship Your Idea',
					locale: 'tr_TR',
					click: 597,
					purchase: 236,
					id: 8,
				},
				{
					item_id: '1067',
					name: 'Woo Album #3',
					locale: 'tr_TR',
					click: 40,
					purchase: 31,
					id: 9,
				},
				{
					item_id: '1066',
					name: 'Woo Album #2',
					locale: 'tr_TR',
					click: 936,
					purchase: 0,
					id: 10,
				},
				{
					item_id: '398',
					name: 'Album',
					locale: 'tr_TR',
					click: 378,
					purchase: 150,
					id: 11,
				},
				{
					item_id: '393',
					name: 'Sunglasses',
					locale: 'tr_TR',
					click: 753,
					purchase: 375,
					id: 12,
				},
				{
					item_id: '1068',
					name: 'Woo Logo',
					locale: 'tr_TR',
					click: 421,
					purchase: 260,
					id: 13,
				},
				{
					item_id: '406',
					name: 'T-Shirt with Logo',
					locale: 'tr_TR',
					click: 424,
					purchase: 819,
					id: 14,
				},
				{
					item_id: '387',
					name: 'Hoodie',
					locale: 'tr_TR',
					click: 221,
					purchase: 245,
					id: 15,
				},
				// {
				// 	item_id: '1074',
				// 	name: 'Ship Your Idea',
				// 	locale: 'tr_TR',
				// 	click: 675,
				// 	purchase: 486,
				// 	id: 16,
				// },
				// {
				// 	item_id: '1101',
				// 	name: 'Premium Quality',
				// 	locale: 'tr_TR',
				// 	click: 709,
				// 	purchase: 86,
				// 	id: 17,
				// },
				// {
				// 	item_id: '1075',
				// 	name: 'Ninja Silhouette',
				// 	locale: 'tr_TR',
				// 	click: 799,
				// 	purchase: 41,
				// 	id: 18,
				// },
				// {
				// 	item_id: '396',
				// 	name: 'Long Sleeve Tee',
				// 	locale: 'tr_TR',
				// 	click: 828,
				// 	purchase: 967,
				// 	id: 19,
				// },
				// {
				// 	item_id: '1065',
				// 	name: 'Woo Album #1',
				// 	locale: 'tr_TR',
				// 	click: 810,
				// 	purchase: 173,
				// 	id: 20,
				// },
				// {
				// 	item_id: '15',
				// 	name: 'Tişört Logosu',
				// 	locale: 'tr_TR',
				// 	click: 683,
				// 	purchase: 432,
				// 	id: 21,
				// },
				// {
				// 	item_id: '1104',
				// 	name: 'Flying Ninja',
				// 	locale: 'tr_TR',
				// 	click: 199,
				// 	purchase: 161,
				// 	id: 22,
				// },
				// {
				// 	item_id: '1069',
				// 	name: 'Woo Logo',
				// 	locale: 'tr_TR',
				// 	click: 323,
				// 	purchase: 221,
				// 	id: 23,
				// },
				// {
				// 	item_id: '395',
				// 	name: 'Hoodie with Zipper',
				// 	locale: 'tr_TR',
				// 	click: 498,
				// 	purchase: 502,
				// 	id: 24,
				// },
				// {
				// 	item_id: '407',
				// 	name: 'Beanie with Logo',
				// 	locale: 'tr_TR',
				// 	click: 817,
				// 	purchase: 29,
				// 	id: 25,
				// },
				// {
				// 	item_id: '1064',
				// 	name: 'Woo Single #2',
				// 	locale: 'tr_TR',
				// 	click: 709,
				// 	purchase: 727,
				// 	id: 26,
				// },
				// {
				// 	item_id: '1076',
				// 	name: 'Happy Ninja',
				// 	locale: 'tr_TR',
				// 	click: 605,
				// 	purchase: 717,
				// 	id: 27,
				// },
				// {
				// 	item_id: '408',
				// 	name: 'Logo Collection',
				// 	locale: 'tr_TR',
				// 	click: 273,
				// 	purchase: 852,
				// 	id: 28,
				// },
				// {
				// 	item_id: '390',
				// 	name: 'Beanie',
				// 	locale: 'tr_TR',
				// 	click: 670,
				// 	purchase: 240,
				// 	id: 29,
				// },
				// {
				// 	item_id: '391',
				// 	name: 'Belt',
				// 	locale: 'tr_TR',
				// 	click: 687,
				// 	purchase: 761,
				// 	id: 30,
				// },
				// {
				// 	item_id: '392',
				// 	name: 'Cap',
				// 	locale: 'tr_TR',
				// 	click: 13,
				// 	purchase: 824,
				// 	id: 31,
				// },
				// {
				// 	item_id: '389',
				// 	name: 'T-Shirt',
				// 	locale: 'tr_TR',
				// 	click: 35,
				// 	purchase: 804,
				// 	id: 32,
				// },
				// {
				// 	item_id: '1077',
				// 	name: 'Happy Ninja',
				// 	locale: 'tr_TR',
				// 	click: 722,
				// 	purchase: 148,
				// 	id: 33,
				// },
				// {
				// 	item_id: '1073',
				// 	name: 'Ship Your Idea',
				// 	locale: 'tr_TR',
				// 	click: 944,
				// 	purchase: 991,
				// 	id: 34,
				// },
				// {
				// 	item_id: '1070',
				// 	name: 'Woo Ninja',
				// 	locale: 'tr_TR',
				// 	click: 626,
				// 	purchase: 611,
				// 	id: 35,
				// },
				// {
				// 	item_id: '1071',
				// 	name: 'Woo Ninja',
				// 	locale: 'tr_TR',
				// 	click: 648,
				// 	purchase: 293,
				// 	id: 36,
				// },
				// {
				// 	item_id: '1072',
				// 	name: 'Premium Quality',
				// 	locale: 'tr_TR',
				// 	click: 81,
				// 	purchase: 302,
				// 	id: 37,
				// },
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('product', null, {});
	},
};
