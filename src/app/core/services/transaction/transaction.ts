import { Service } from '@angular/core';
import { MOCK_TRANSACTIONS } from '../../mock-data/transaction.mock';

@Service()
export class TransactionService {
  transactions = MOCK_TRANSACTIONS;

  constructor() {}

  getTransactionList() {
    return this.transactions;
  }
}
