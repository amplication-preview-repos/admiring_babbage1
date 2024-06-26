import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CoffeeshopServiceBase } from "./base/coffeeshop.service.base";

@Injectable()
export class CoffeeshopService extends CoffeeshopServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
