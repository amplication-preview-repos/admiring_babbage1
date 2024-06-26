import { QrCode } from "../qrCode/QrCode";
import { Reward } from "../reward/Reward";
import { Transaction } from "../transaction/Transaction";

export type Customer = {
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  qrCodes?: Array<QrCode>;
  rewards?: Array<Reward>;
  transactions?: Array<Transaction>;
  updatedAt: Date;
};
