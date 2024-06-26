import { AdminCreateNestedManyWithoutCoffeeshopsInput } from "./AdminCreateNestedManyWithoutCoffeeshopsInput";
import { RewardCreateNestedManyWithoutCoffeeshopsInput } from "./RewardCreateNestedManyWithoutCoffeeshopsInput";
import { TransactionCreateNestedManyWithoutCoffeeshopsInput } from "./TransactionCreateNestedManyWithoutCoffeeshopsInput";

export type CoffeeshopCreateInput = {
  admins?: AdminCreateNestedManyWithoutCoffeeshopsInput;
  location?: string | null;
  name?: string | null;
  rewards?: RewardCreateNestedManyWithoutCoffeeshopsInput;
  transactions?: TransactionCreateNestedManyWithoutCoffeeshopsInput;
};
