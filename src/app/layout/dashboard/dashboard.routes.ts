import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    loadComponent: () => import('../../pages/dashboard/dashboard').then((m) => m.Dashboard),
  },
  {
    path: 'customers',
    loadComponent: () =>
      import('../../pages/customers/customer-list/customer-list').then((m) => m.CustomerList),
  },
  {
    path: 'transactions',
    loadComponent: () =>
      import('../../pages/transactions/transaction-list/transaction-list').then(
        (m) => m.TransactionList,
      ),
  },
  {
    path: 'subscriptions',
    loadComponent: () =>
      import('../../pages/subscriptions/subscription-list/subscription-list').then(
        (m) => m.SubscriptionList,
      ),
  },
];
