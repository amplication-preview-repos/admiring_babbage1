import { CoffeeshopWhereUniqueInput } from "../coffeeshop/CoffeeshopWhereUniqueInput";
import { TransactionCreateNestedManyWithoutAdminsInput } from "./TransactionCreateNestedManyWithoutAdminsInput";

export type AdminCreateInput = {
  coffeeshop?: CoffeeshopWhereUniqueInput | null;
  email?: string | null;
  name?: string | null;
  role?: "Option1" | null;
  transactions?: TransactionCreateNestedManyWithoutAdminsInput;
};
