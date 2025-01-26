const Arweave = require('arweave');

const arweave = Arweave.init({
    host: 'arweave.net',
    port: 443,
    protocol: 'https',
});

(async () => {
    try {
        const transactionId = '[PUT ARWEAVE TRANSACTION HASH HERE THAT POINTS TO DATA]';
        const data = await arweave.transactions.getData(transactionId, { decode: true, string: true });
        console.log('Data retrieved from Arweave:');
        console.log(data);
    } catch (error) {
        console.error('Error retrieving data:', error);
    }
})();
