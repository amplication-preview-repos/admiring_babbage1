import { AdminListRelationFilter } from "../admin/AdminListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { RewardListRelationFilter } from "../reward/RewardListRelationFilter";
import { TransactionListRelationFilter } from "../transaction/TransactionListRelationFilter";

export type CoffeeshopWhereInput = {
  admins?: AdminListRelationFilter;
  id?: StringFilter;
  location?: StringNullableFilter;
  name?: StringNullableFilter;
  rewards?: RewardListRelationFilter;
  transactions?: TransactionListRelationFilter;
};
