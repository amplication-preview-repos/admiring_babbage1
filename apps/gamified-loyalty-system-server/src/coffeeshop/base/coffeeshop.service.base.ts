/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Coffeeshop as PrismaCoffeeshop,
  Admin as PrismaAdmin,
  Reward as PrismaReward,
  Transaction as PrismaTransaction,
} from "@prisma/client";

export class CoffeeshopServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.CoffeeshopCountArgs, "select">
  ): Promise<number> {
    return this.prisma.coffeeshop.count(args);
  }

  async coffeeshops(
    args: Prisma.CoffeeshopFindManyArgs
  ): Promise<PrismaCoffeeshop[]> {
    return this.prisma.coffeeshop.findMany(args);
  }
  async coffeeshop(
    args: Prisma.CoffeeshopFindUniqueArgs
  ): Promise<PrismaCoffeeshop | null> {
    return this.prisma.coffeeshop.findUnique(args);
  }
  async createCoffeeshop(
    args: Prisma.CoffeeshopCreateArgs
  ): Promise<PrismaCoffeeshop> {
    return this.prisma.coffeeshop.create(args);
  }
  async updateCoffeeshop(
    args: Prisma.CoffeeshopUpdateArgs
  ): Promise<PrismaCoffeeshop> {
    return this.prisma.coffeeshop.update(args);
  }
  async deleteCoffeeshop(
    args: Prisma.CoffeeshopDeleteArgs
  ): Promise<PrismaCoffeeshop> {
    return this.prisma.coffeeshop.delete(args);
  }

  async findAdmins(
    parentId: string,
    args: Prisma.AdminFindManyArgs
  ): Promise<PrismaAdmin[]> {
    return this.prisma.coffeeshop
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .admins(args);
  }

  async findRewards(
    parentId: string,
    args: Prisma.RewardFindManyArgs
  ): Promise<PrismaReward[]> {
    return this.prisma.coffeeshop
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .rewards(args);
  }

  async findTransactions(
    parentId: string,
    args: Prisma.TransactionFindManyArgs
  ): Promise<PrismaTransaction[]> {
    return this.prisma.coffeeshop
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .transactions(args);
  }
}