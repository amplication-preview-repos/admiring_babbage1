import * as graphql from "@nestjs/graphql";
import { AchievementResolverBase } from "./base/achievement.resolver.base";
import { Achievement } from "./base/Achievement";
import { AchievementService } from "./achievement.service";

@graphql.Resolver(() => Achievement)
export class AchievementResolver extends AchievementResolverBase {
  constructor(protected readonly service: AchievementService) {
    super(service);
  }
}
