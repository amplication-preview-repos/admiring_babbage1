import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AchievementService } from "./achievement.service";
import { AchievementControllerBase } from "./base/achievement.controller.base";

@swagger.ApiTags("achievements")
@common.Controller("achievements")
export class AchievementController extends AchievementControllerBase {
  constructor(protected readonly service: AchievementService) {
    super(service);
  }
}
