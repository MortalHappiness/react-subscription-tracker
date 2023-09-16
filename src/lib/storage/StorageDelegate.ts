export enum BillingCycleUnit {
  DAY = "day",
  WEEK = "week",
  MONTH = "month",
  YEAR = "year",
}

export interface Subscription {
  name: string;
  currency: string;
  amount: number;
  billingCycle: number;
  billingCycleUnit: BillingCycleUnit;
  description?: string;
  category?: string;
  firstBillingDate?: Date;
  endBillingDate?: Date;
}

export interface SubscriptionTrackerState {
  subscriptions: Subscription[];
  categories: string[];
}

export interface StorageDelegate {
  load(): Promise<SubscriptionTrackerState>;
  save(state: SubscriptionTrackerState): Promise<void>;
}
