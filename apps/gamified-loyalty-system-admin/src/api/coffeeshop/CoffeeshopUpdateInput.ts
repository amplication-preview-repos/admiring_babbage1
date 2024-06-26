import { AdminUpdateManyWithoutCoffeeshopsInput } from "./AdminUpdateManyWithoutCoffeeshopsInput";
import { RewardUpdateManyWithoutCoffeeshopsInput } from "./RewardUpdateManyWithoutCoffeeshopsInput";
import { TransactionUpdateManyWithoutCoffeeshopsInput } from "./TransactionUpdateManyWithoutCoffeeshopsInput";

export type CoffeeshopUpdateInput = {
  admins?: AdminUpdateManyWithoutCoffeeshopsInput;
  location?: string | null;
  name?: string | null;
  rewards?: RewardUpdateManyWithoutCoffeeshopsInput;
  transactions?: TransactionUpdateManyWithoutCoffeeshopsInput;
};
