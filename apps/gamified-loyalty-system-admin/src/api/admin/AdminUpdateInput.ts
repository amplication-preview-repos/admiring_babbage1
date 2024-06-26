import { CoffeeshopWhereUniqueInput } from "../coffeeshop/CoffeeshopWhereUniqueInput";
import { TransactionUpdateManyWithoutAdminsInput } from "./TransactionUpdateManyWithoutAdminsInput";

export type AdminUpdateInput = {
  coffeeshop?: CoffeeshopWhereUniqueInput | null;
  email?: string | null;
  name?: string | null;
  role?: "Option1" | null;
  transactions?: TransactionUpdateManyWithoutAdminsInput;
};
