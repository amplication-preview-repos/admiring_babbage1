import { Admin } from "../admin/Admin";
import { Coffeeshop } from "../coffeeshop/Coffeeshop";
import { Customer } from "../customer/Customer";

export type Transaction = {
  admin?: Admin | null;
  coffeeshop?: Coffeeshop | null;
  createdAt: Date;
  customer?: Customer | null;
  date: Date | null;
  id: string;
  points: number | null;
  updatedAt: Date;
};
