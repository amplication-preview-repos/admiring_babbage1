import { SortOrder } from "../../util/SortOrder";

export type TransactionOrderByInput = {
  adminId?: SortOrder;
  coffeeshopId?: SortOrder;
  createdAt?: SortOrder;
  customerId?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  points?: SortOrder;
  updatedAt?: SortOrder;
};
