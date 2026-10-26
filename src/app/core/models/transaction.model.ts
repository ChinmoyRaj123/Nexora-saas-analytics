export type PaymentStatus = 'succeeded' | 'pending' | 'failed' | 'refunded';

export interface Transaction {
  id: string;
  customerId: string;
  customerName: string;
  amount: number;
  currency: 'USD';
  status: PaymentStatus;
  paymentMethod: 'card' | 'paypal' | 'bank_transfer';
  createdAt: string;
}
