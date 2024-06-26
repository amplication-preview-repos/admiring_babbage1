import { CoffeeshopWhereUniqueInput } from "../coffeeshop/CoffeeshopWhereUniqueInput";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type RewardCreateInput = {
  coffeeshop?: CoffeeshopWhereUniqueInput | null;
  customer?: CustomerWhereUniqueInput | null;
  points?: number | null;
};
