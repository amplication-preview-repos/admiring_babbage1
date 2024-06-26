import { Admin } from "../admin/Admin";
import { Reward } from "../reward/Reward";
import { Transaction } from "../transaction/Transaction";

export type Coffeeshop = {
  admins?: Array<Admin>;
  createdAt: Date;
  id: string;
  location: string | null;
  name: string | null;
  rewards?: Array<Reward>;
  transactions?: Array<Transaction>;
  updatedAt: Date;
};
