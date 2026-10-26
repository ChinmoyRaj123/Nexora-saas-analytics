import { Component, OnInit } from '@angular/core';
import { SubscriptionService } from '../../../core/services/subscription/subscription';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { Subscription } from '../../../core/models/subscription.model';

@Component({
  imports: [CurrencyPipe, DatePipe],
  selector: 'nex-subscription-list',
  styleUrl: './subscription-list.css',
  templateUrl: './subscription-list.html',
})
export class SubscriptionList implements OnInit {
  subscriptions: Subscription[] = [];
  activeSubscriptions: number = 0;
  totalSubscriptions: number = 0;
  monthlyRevenue: number = 0;
  trialCount: number = 0;
  dueCount: number = 0;
  searchTerm = '';
  statusFilter = 'all';
  billingFilter = 'all';

  loading: boolean = true;

  constructor(private subscriptionService: SubscriptionService) {}

  ngOnInit(): void {
    this.subscriptions = this.subscriptionService.getSubscriptionList();
    this.activeSubscriptions = this.subscriptionService.activeSubscriptions;
    this.totalSubscriptions = this.subscriptionService.totalSubscriptions;
    this.monthlyRevenue = this.subscriptionService.monthlyRevenue;
    this.trialCount = this.subscriptionService.trialCount;
    this.trialCount = this.subscriptionService.dueCount;
    this.loading = false;
  }

  get filteredSubscriptions(): Subscription[] {
    const search = this.searchTerm.trim().toLowerCase();

    return this.subscriptions.filter((subscription) => {
      const matchesSearch =
        subscription.customerName.toLowerCase().includes(search) ||
        subscription.plan.toLowerCase().includes(search);

      const matchesStatus =
        this.statusFilter === 'all' || subscription.status === this.statusFilter;

      const matchesBilling =
        this.billingFilter === 'all' || subscription.billingCycle === this.billingFilter;

      return matchesSearch && matchesStatus && matchesBilling;
    });
  }
}
