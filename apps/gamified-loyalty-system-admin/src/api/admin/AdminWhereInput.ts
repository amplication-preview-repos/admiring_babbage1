import { CoffeeshopWhereUniqueInput } from "../coffeeshop/CoffeeshopWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TransactionListRelationFilter } from "../transaction/TransactionListRelationFilter";

export type AdminWhereInput = {
  coffeeshop?: CoffeeshopWhereUniqueInput;
  email?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  role?: "Option1";
  transactions?: TransactionListRelationFilter;
};
