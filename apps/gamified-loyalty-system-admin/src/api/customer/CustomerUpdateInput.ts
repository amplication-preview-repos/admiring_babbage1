import { QrCodeUpdateManyWithoutCustomersInput } from "./QrCodeUpdateManyWithoutCustomersInput";
import { RewardUpdateManyWithoutCustomersInput } from "./RewardUpdateManyWithoutCustomersInput";
import { TransactionUpdateManyWithoutCustomersInput } from "./TransactionUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  email?: string | null;
  name?: string | null;
  qrCodes?: QrCodeUpdateManyWithoutCustomersInput;
  rewards?: RewardUpdateManyWithoutCustomersInput;
  transactions?: TransactionUpdateManyWithoutCustomersInput;
};
