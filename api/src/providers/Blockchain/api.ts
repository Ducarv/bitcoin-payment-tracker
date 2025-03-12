import axios from "axios"

const fetchTransactionsByAddress = async (address: string) => {
    return await axios.get(`https://blockchain.info/rawaddr/${address}`)
}

const latestBlock = async () => {
    return await axios.get('https://blockchain.info/latestblock');
}

export { fetchTransactionsByAddress, latestBlock }