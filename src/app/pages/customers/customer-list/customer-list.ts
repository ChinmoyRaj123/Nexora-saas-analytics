import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../../core/services/customer/customer';
import { Customer } from '../../../core/models/customer.model';
import { SubscriptionService } from '../../../core/services/subscription/subscription';

@Component({
  imports: [CurrencyPipe],
  selector: 'nex-customer-list',
  styleUrl: './customer-list.css',
  templateUrl: './customer-list.html',
})
export class CustomerList implements OnInit {
  customers: Customer[] = [];
  totalCustomers: number = 0;
  activeCustomers: number = 0;
  monthlyRevenue: number = 0;
  loading: boolean = true;

  constructor(
    private customerService: CustomerService,
    private subscriptionService: SubscriptionService,
  ) {}

  ngOnInit() {
    this.customers = this.customerService.getCustomerList();
    this.totalCustomers = this.customerService.totalCustomers;
    this.activeCustomers = this.customerService.activeCustomers;
    this.monthlyRevenue = this.subscriptionService.monthlyRevenue;
    this.loading = false;
  }
}
