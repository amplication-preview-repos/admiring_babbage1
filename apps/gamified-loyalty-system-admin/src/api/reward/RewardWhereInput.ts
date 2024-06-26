import { CoffeeshopWhereUniqueInput } from "../coffeeshop/CoffeeshopWhereUniqueInput";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type RewardWhereInput = {
  coffeeshop?: CoffeeshopWhereUniqueInput;
  customer?: CustomerWhereUniqueInput;
  id?: StringFilter;
  points?: FloatNullableFilter;
};
