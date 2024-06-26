import { Coffeeshop as TCoffeeshop } from "../api/coffeeshop/Coffeeshop";

export const COFFEESHOP_TITLE_FIELD = "name";

export const CoffeeshopTitle = (record: TCoffeeshop): string => {
  return record.name?.toString() || String(record.id);
};
