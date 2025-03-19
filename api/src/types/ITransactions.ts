export interface ITransactions {
    hash: string;
    value: number;
    timestamp: number;
    confirmations: number;
    status: "recieved" | "sent" | "both";
}