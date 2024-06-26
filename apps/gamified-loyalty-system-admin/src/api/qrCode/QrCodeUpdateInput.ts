import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type QrCodeUpdateInput = {
  code?: string | null;
  customer?: CustomerWhereUniqueInput | null;
  isUsed?: boolean | null;
};
