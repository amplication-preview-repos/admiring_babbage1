import { CoffeeshopWhereInput } from "./CoffeeshopWhereInput";
import { CoffeeshopOrderByInput } from "./CoffeeshopOrderByInput";

export type CoffeeshopFindManyArgs = {
  where?: CoffeeshopWhereInput;
  orderBy?: Array<CoffeeshopOrderByInput>;
  skip?: number;
  take?: number;
};
