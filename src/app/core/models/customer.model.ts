export type CustomerStatus = 'active' | 'inactive' | 'suspended';

export type PlanType = 'free' | 'pro' | 'enterprise';

export interface Customer {
  id: string;
  name: string;
  email: string;
  company: string;
  plan: PlanType;
  status: CustomerStatus;
  joinedAt: string;
  country: string;
  avatarInitials: string;
}
