import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type QrCodeCreateInput = {
  code?: string | null;
  customer?: CustomerWhereUniqueInput | null;
  isUsed?: boolean | null;
};
