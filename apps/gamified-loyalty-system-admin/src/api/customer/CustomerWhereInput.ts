import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { QrCodeListRelationFilter } from "../qrCode/QrCodeListRelationFilter";
import { RewardListRelationFilter } from "../reward/RewardListRelationFilter";
import { TransactionListRelationFilter } from "../transaction/TransactionListRelationFilter";

export type CustomerWhereInput = {
  email?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  qrCodes?: QrCodeListRelationFilter;
  rewards?: RewardListRelationFilter;
  transactions?: TransactionListRelationFilter;
};
