import { Request, Response } from 'express';
import { TransactionsProvider } from '../../providers/transactions/Transactions'

export class TransactionsController {
    constructor(private trasactionsProvider: TransactionsProvider) {}

    public async getTransactionsByAddress(req: Request, res: Response) {
        const { address } = req.params;

        try {
            const transactions = await this.trasactionsProvider.getTransactionsByAddress(address);
            return res.status(200).json(transactions);
        } catch(error) {
            throw new Error(String(error));
        }
    }
}