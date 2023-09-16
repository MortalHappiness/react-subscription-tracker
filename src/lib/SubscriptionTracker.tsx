import { useState, useEffect, useRef } from "react";

import type {
  StorageDelegate,
  SubscriptionTrackerState,
} from "./storage/StorageDelegate";
import LocalStorageDelegate from "./storage/LocalStorageDelegate";

export interface SubscriptionTrackerProps {
  storageDelegate?: StorageDelegate;
}

export const SubscriptionTracker = (props: SubscriptionTrackerProps) => {
  const { storageDelegate } = props;
  const storageDelegateRef = useRef(
    storageDelegate || new LocalStorageDelegate()
  );
  const [state, setState] = useState<SubscriptionTrackerState>({
    subscriptions: [],
    categories: [],
  });
  const [isLoading, setIsLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    setIsLoading(true);
    storageDelegateRef.current
      .load()
      .then((state) => setState(state))
      .catch((error) => setErrorMsg(error.message))
      .finally(() => setIsLoading(false));
  }, [storageDelegate]);

  if (isLoading) return <div>Loading...</div>;
  if (errorMsg) return <div>Error: {errorMsg}</div>;

  return (
    <div>
      <div>{JSON.stringify(state)}</div>
    </div>
  );
};
