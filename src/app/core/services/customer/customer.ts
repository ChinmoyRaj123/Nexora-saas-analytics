import { Service } from '@angular/core';
import { MOCK_CUSTOMERS } from '../../mock-data/customer.mock';

@Service()
export class CustomerService {
  customer = MOCK_CUSTOMERS;
  constructor() {}
  getCustomerList() {
    return this.customer;
  }
  get activeCustomers(): number {
    return this.customer.filter((customer) => customer.status === 'active').length;
  }

  get totalCustomers(): number {
    return this.customer.length;
  }
}
