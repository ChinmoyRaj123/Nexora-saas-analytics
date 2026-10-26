import { Service } from '@angular/core';
import { MOCK_SUBSCRIPTIONS } from '../../mock-data/subscription.mock';

@Service()
export class SubscriptionService {
  subscription = MOCK_SUBSCRIPTIONS;
  constructor() {}
  getSubscriptionList() {
    return this.subscription;
  }
  get activeSubscriptions(): number {
    return this.subscription.filter((subscription) => subscription.status === 'active').length;
  }
  get totalSubscriptions(): number {
    return this.subscription.length;
  }

  get trialCount(): number {
    return this.subscription.filter((subscription) => subscription.status === 'trialing').length;
  }

  get dueCount(): number {
    return this.subscription.filter((subscription) => subscription.status === 'past_due').length;
  }

  get monthlyRevenue(): number {
    return this.subscription
      .filter((subscription) => subscription.status === 'active')
      .reduce((total, subscription) => {
        const monthlyAmount =
          subscription.billingCycle === 'yearly' ? subscription.amount / 12 : subscription.amount;

        return total + monthlyAmount;
      }, 0);
  }
}
