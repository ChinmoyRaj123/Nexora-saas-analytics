import { Component, OnInit } from '@angular/core';
import { Customer } from '../../core/models/customer.model';
import { CustomerService } from '../../core/services/customer/customer';
import { CurrencyPipe } from '@angular/common';

@Component({
  imports: [CurrencyPipe],
  selector: 'nex-dashboard',
  styleUrl: './dashboard.css',
  templateUrl: './dashboard.html',
})
export class Dashboard implements OnInit {
  customers: Customer[] = [];
  totalCustomers: number = 0;
  activeCustomers: number = 0;
  loading: boolean = true;
  CustomerService: CustomerService;

  constructor(private customerService: CustomerService) {
    this.CustomerService = this.customerService;
  }

  ngOnInit(): void {
    this.customers = this.CustomerService.getCustomerList();
    this.totalCustomers = this.CustomerService.totalCustomers;
    this.activeCustomers = this.CustomerService.activeCustomers;
    this.loading = false;
  }
}
