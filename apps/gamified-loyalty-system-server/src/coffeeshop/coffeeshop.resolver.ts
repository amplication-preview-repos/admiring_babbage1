import * as graphql from "@nestjs/graphql";
import { CoffeeshopResolverBase } from "./base/coffeeshop.resolver.base";
import { Coffeeshop } from "./base/Coffeeshop";
import { CoffeeshopService } from "./coffeeshop.service";

@graphql.Resolver(() => Coffeeshop)
export class CoffeeshopResolver extends CoffeeshopResolverBase {
  constructor(protected readonly service: CoffeeshopService) {
    super(service);
  }
}
