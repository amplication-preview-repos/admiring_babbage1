import { SortOrder } from "../../util/SortOrder";

export type AdminOrderByInput = {
  coffeeshopId?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  role?: SortOrder;
  updatedAt?: SortOrder;
};
