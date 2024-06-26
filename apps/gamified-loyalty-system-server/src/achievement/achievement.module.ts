import { Module } from "@nestjs/common";
import { AchievementModuleBase } from "./base/achievement.module.base";
import { AchievementService } from "./achievement.service";
import { AchievementController } from "./achievement.controller";
import { AchievementResolver } from "./achievement.resolver";

@Module({
  imports: [AchievementModuleBase],
  controllers: [AchievementController],
  providers: [AchievementService, AchievementResolver],
  exports: [AchievementService],
})
export class AchievementModule {}
