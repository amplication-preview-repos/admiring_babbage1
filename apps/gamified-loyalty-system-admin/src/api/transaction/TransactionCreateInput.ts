import { AdminWhereUniqueInput } from "../admin/AdminWhereUniqueInput";
import { CoffeeshopWhereUniqueInput } from "../coffeeshop/CoffeeshopWhereUniqueInput";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type TransactionCreateInput = {
  admin?: AdminWhereUniqueInput | null;
  coffeeshop?: CoffeeshopWhereUniqueInput | null;
  customer?: CustomerWhereUniqueInput | null;
  date?: Date | null;
  points?: number | null;
};
