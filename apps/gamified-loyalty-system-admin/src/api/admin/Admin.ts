import { Coffeeshop } from "../coffeeshop/Coffeeshop";
import { Transaction } from "../transaction/Transaction";

export type Admin = {
  coffeeshop?: Coffeeshop | null;
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  role?: "Option1" | null;
  transactions?: Array<Transaction>;
  updatedAt: Date;
};
