import { Customer } from "../customer/Customer";

export type QrCode = {
  code: string | null;
  createdAt: Date;
  customer?: Customer | null;
  id: string;
  isUsed: boolean | null;
  updatedAt: Date;
};
