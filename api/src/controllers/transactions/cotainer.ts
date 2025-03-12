import { TransactionsProvider } from "../../providers/transactions/Transactions";
import { TransactionsController } from "./TransactionsController";

const transactionsProvice = new TransactionsProvider();
const transactionsController = new TransactionsController(transactionsProvice);

export default transactionsController;