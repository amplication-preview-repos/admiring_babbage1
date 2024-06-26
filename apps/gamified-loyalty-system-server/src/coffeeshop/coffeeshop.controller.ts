import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CoffeeshopService } from "./coffeeshop.service";
import { CoffeeshopControllerBase } from "./base/coffeeshop.controller.base";

@swagger.ApiTags("coffeeshops")
@common.Controller("coffeeshops")
export class CoffeeshopController extends CoffeeshopControllerBase {
  constructor(protected readonly service: CoffeeshopService) {
    super(service);
  }
}
