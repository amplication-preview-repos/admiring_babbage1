import { SortOrder } from "../../util/SortOrder";

export type AchievementOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  pointsThreshold?: SortOrder;
  updatedAt?: SortOrder;
};
