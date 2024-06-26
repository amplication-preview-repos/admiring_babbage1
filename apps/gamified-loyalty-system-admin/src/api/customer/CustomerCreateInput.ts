import { QrCodeCreateNestedManyWithoutCustomersInput } from "./QrCodeCreateNestedManyWithoutCustomersInput";
import { RewardCreateNestedManyWithoutCustomersInput } from "./RewardCreateNestedManyWithoutCustomersInput";
import { TransactionCreateNestedManyWithoutCustomersInput } from "./TransactionCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  email?: string | null;
  name?: string | null;
  qrCodes?: QrCodeCreateNestedManyWithoutCustomersInput;
  rewards?: RewardCreateNestedManyWithoutCustomersInput;
  transactions?: TransactionCreateNestedManyWithoutCustomersInput;
};
