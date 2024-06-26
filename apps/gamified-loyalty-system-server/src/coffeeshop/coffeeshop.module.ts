import { Module } from "@nestjs/common";
import { CoffeeshopModuleBase } from "./base/coffeeshop.module.base";
import { CoffeeshopService } from "./coffeeshop.service";
import { CoffeeshopController } from "./coffeeshop.controller";
import { CoffeeshopResolver } from "./coffeeshop.resolver";

@Module({
  imports: [CoffeeshopModuleBase],
  controllers: [CoffeeshopController],
  providers: [CoffeeshopService, CoffeeshopResolver],
  exports: [CoffeeshopService],
})
export class CoffeeshopModule {}
