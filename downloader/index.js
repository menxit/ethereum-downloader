const Web3 = require('web3')
const web3 = new Web3(Web3.givenProvider || "ws://parity:8546")

const run  = async (starterBlock = 0) => {
	const latestBlock = await web3.eth.getBlockNumber()
	console.warn('Funzione richiamata')
	for (let i = starterBlock; i <= latestBlock; i++) {
		if (i % 10000 === 0) {
			console.warn('block: ', i, '\tstarterBlock: ', starterBlock, '\tlatestBlock: ', latestBlock)
		}
		const block = await web3.eth.getBlock(i)

		if(block) {
			block.transactions.forEach(async transactionHash => {
				const transaction = await web3.eth.getTransaction(transactionHash)
				console.log(JSON.stringify(transaction))
			})
		}
	}
	setTimeout(async () => run(latestBlock), 10000)
}

run(0)

