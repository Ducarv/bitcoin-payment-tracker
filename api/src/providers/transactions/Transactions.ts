import { ITransactions } from '../../types/ITransactions';
import { fetchTransactionsByAddress, latestBlock } from '../Blockchain/api';

export class TransactionsProvider {

    public async getTransactionsByAddress(address: string): Promise<ITransactions[]> {
        const rawTransactions = await fetchTransactionsByAddress(address) as { data: { txs: any[] } };
        const latestBlockData = await latestBlock() as { data: { height: number } };

        const transactions: ITransactions[] = [];

        rawTransactions.data.txs.forEach((transaction: any) => {
            const transactionObj: ITransactions = {
                hash: transaction.hash,
                value: transaction.result / 100_000_000,
                timestamp: transaction.time,
                //confirmations: latestBlockData.data.height - transaction.block_height
            };
            transactions.push(transactionObj);
        });

        return transactions;
    }
}