import {
  StorageDelegate,
  SubscriptionTrackerState,
  BillingCycleUnit,
} from "./StorageDelegate";

export default class LocalStorageDelegate implements StorageDelegate {
  async load() {
    // TODO: Add real implementation
    const state: SubscriptionTrackerState = {
      subscriptions: [
        {
          name: "a",
          currency: "USD",
          amount: 10.5,
          billingCycle: 1,
          billingCycleUnit: BillingCycleUnit.MONTH,
        },
      ],
      categories: [],
    };
    return state;
  }

  async save(state: SubscriptionTrackerState) {
    // TODO: Add real implementation
  }
}
