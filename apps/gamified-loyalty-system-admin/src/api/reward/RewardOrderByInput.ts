import { SortOrder } from "../../util/SortOrder";

export type RewardOrderByInput = {
  coffeeshopId?: SortOrder;
  createdAt?: SortOrder;
  customerId?: SortOrder;
  id?: SortOrder;
  points?: SortOrder;
  updatedAt?: SortOrder;
};
