import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../../../core/services/transaction/transaction';
import { Transaction } from '../../../core/models/transaction.model';
import { CurrencyPipe, DatePipe } from '@angular/common';

@Component({
  imports: [CurrencyPipe, DatePipe],
  selector: 'nex-transaction-list',
  styleUrl: './transaction-list.css',
  templateUrl: './transaction-list.html',
})
export class TransactionList implements OnInit {
  transactions: Transaction[] = [];
  loading: boolean = true;
  searchTerm = '';
  statusFilter = 'all';
  typeFilter = 'all';

  constructor(private transactionService: TransactionService) {}
  ngOnInit() {
    this.transactions = this.transactionService.getTransactionList();
    this.loading = false;
  }

  get totalCollected(): number {
    return this.transactions
      .filter((transaction) => transaction.status === 'succeeded')
      .reduce((total, transaction) => total + transaction.amount, 0);
  }

  get successfulCount(): number {
    return this.transactions.filter((transaction) => transaction.status === 'succeeded').length;
  }

  get failedCount(): number {
    return this.transactions.filter((transaction) => transaction.status === 'failed').length;
  }

  get filteredTransactions(): Transaction[] {
    const search = this.searchTerm.trim().toLowerCase();

    return this.transactions.filter((transaction) => {
      const matchesSearch =
        transaction.customerName.toLowerCase().includes(search) ||
        transaction.id.toLowerCase().includes(search);

      const matchesStatus = this.statusFilter === 'all' || transaction.status === this.statusFilter;

      const matchesType =
        this.typeFilter === 'all' || transaction.paymentMethod === this.typeFilter;

      return matchesSearch && matchesStatus && matchesType;
    });
  }
}
