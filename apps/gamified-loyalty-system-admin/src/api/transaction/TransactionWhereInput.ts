import { AdminWhereUniqueInput } from "../admin/AdminWhereUniqueInput";
import { CoffeeshopWhereUniqueInput } from "../coffeeshop/CoffeeshopWhereUniqueInput";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type TransactionWhereInput = {
  admin?: AdminWhereUniqueInput;
  coffeeshop?: CoffeeshopWhereUniqueInput;
  customer?: CustomerWhereUniqueInput;
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  points?: IntNullableFilter;
};
