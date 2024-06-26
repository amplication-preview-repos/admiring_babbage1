import { SortOrder } from "../../util/SortOrder";

export type QrCodeOrderByInput = {
  code?: SortOrder;
  createdAt?: SortOrder;
  customerId?: SortOrder;
  id?: SortOrder;
  isUsed?: SortOrder;
  updatedAt?: SortOrder;
};
