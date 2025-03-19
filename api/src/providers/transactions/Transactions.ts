import { ITransactions } from '../../types/ITransactions';
import { fetchTransactionsByAddress, latestBlock } from '../Blockchain/api';

export class TransactionsProvider {

    public async getTransactionsByAddress(address: string): Promise<ITransactions[]> {
        const addressInfos = await fetchTransactionsByAddress(address) as { data: { txs: any[] } };
        const latestBlockData = await latestBlock() as { data: { height: number } };
        

        const transactions: ITransactions[] = [];

        addressInfos.data.txs.forEach((transaction: any) => {
            const transactionObj: ITransactions = {
                hash: transaction.hash,
                value: transaction.result / 100_000_000,
                timestamp: transaction.time,
                confirmations: latestBlockData.data.height - transaction.block_height + 1,
                status: this.getTransactionStatus(transaction, address)
            };
            transactions.push(transactionObj);
        });

        return transactions;
    }

    private getTransactionStatus(transaction: any, address: string): "sent" | "recieved" | "both" {
        const isSent = transaction.inputs.some((input: any) => input.prev_out.addr === address);
        const isRecieved = transaction.out.some((output: any) => output.addr === address);

        if (isSent && isRecieved) {
            return "both";
        } else if (isSent) {
            return "sent";
        } else {
            return "recieved";
        }
    }
}