const Web3 = require('web3')
const web3 = new Web3(Web3.givenProvider || "http://localhost:8545")

const run  = async () => {
	const latestBlock = await web3.eth.getBlockNumber()
	console.log(latestBlock)
}

run()

