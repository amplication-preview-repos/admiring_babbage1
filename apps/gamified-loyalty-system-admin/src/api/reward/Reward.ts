import { Coffeeshop } from "../coffeeshop/Coffeeshop";
import { Customer } from "../customer/Customer";

export type Reward = {
  coffeeshop?: Coffeeshop | null;
  createdAt: Date;
  customer?: Customer | null;
  id: string;
  points: number | null;
  updatedAt: Date;
};
