import express, { Request, Response } from "express"
import transactionsController from "../controllers/transactions/cotainer"

const router = express.Router();

router.get('/transactions/:address', async (req: Request, res: Response) => {
    await transactionsController.getTransactionsByAddress(req, res)
});

export default router;