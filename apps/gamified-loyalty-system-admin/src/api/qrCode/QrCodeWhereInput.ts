import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type QrCodeWhereInput = {
  code?: StringNullableFilter;
  customer?: CustomerWhereUniqueInput;
  id?: StringFilter;
  isUsed?: BooleanNullableFilter;
};
