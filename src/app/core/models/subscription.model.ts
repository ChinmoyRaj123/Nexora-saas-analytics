import { PlanType } from './customer.model';

export type SubscriptionStatus = 'active' | 'trialing' | 'past_due' | 'cancelled';

export interface Subscription {
  id: string;
  customerId: string;
  customerName: string;
  plan: Exclude<PlanType, 'free'>;
  amount: number;
  currency: 'USD';
  billingCycle: 'monthly' | 'yearly';
  status: SubscriptionStatus;
  startDate: string;
  renewalDate: string | null;
}
