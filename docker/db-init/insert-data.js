const axios = require('axios');
const fs = require('fs');

console.log('Inserting data into Elasticsearch...');
const bulkData = fs.readFileSync('bulk.json', 'utf8');

axios
	.post('http://localhost:9200/_bulk', bulkData, {
		headers: {
			'Content-Type': 'application/x-ndjson',
		},
	})
	.then((response) => {
		console.log('Bulk data inserted successfully:', response.data);
	})
	.catch((error) => {
		console.error('Error inserting bulk data:', error.message);
	});
