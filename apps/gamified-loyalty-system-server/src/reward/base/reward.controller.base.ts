/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { RewardService } from "../reward.service";
import { RewardCreateInput } from "./RewardCreateInput";
import { Reward } from "./Reward";
import { RewardFindManyArgs } from "./RewardFindManyArgs";
import { RewardWhereUniqueInput } from "./RewardWhereUniqueInput";
import { RewardUpdateInput } from "./RewardUpdateInput";

export class RewardControllerBase {
  constructor(protected readonly service: RewardService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Reward })
  async createReward(@common.Body() data: RewardCreateInput): Promise<Reward> {
    return await this.service.createReward({
      data: {
        ...data,

        coffeeshop: data.coffeeshop
          ? {
              connect: data.coffeeshop,
            }
          : undefined,

        customer: data.customer
          ? {
              connect: data.customer,
            }
          : undefined,
      },
      select: {
        coffeeshop: {
          select: {
            id: true,
          },
        },

        createdAt: true,

        customer: {
          select: {
            id: true,
          },
        },

        id: true,
        points: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Reward] })
  @ApiNestedQuery(RewardFindManyArgs)
  async rewards(@common.Req() request: Request): Promise<Reward[]> {
    const args = plainToClass(RewardFindManyArgs, request.query);
    return this.service.rewards({
      ...args,
      select: {
        coffeeshop: {
          select: {
            id: true,
          },
        },

        createdAt: true,

        customer: {
          select: {
            id: true,
          },
        },

        id: true,
        points: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Reward })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async reward(
    @common.Param() params: RewardWhereUniqueInput
  ): Promise<Reward | null> {
    const result = await this.service.reward({
      where: params,
      select: {
        coffeeshop: {
          select: {
            id: true,
          },
        },

        createdAt: true,

        customer: {
          select: {
            id: true,
          },
        },

        id: true,
        points: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Reward })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateReward(
    @common.Param() params: RewardWhereUniqueInput,
    @common.Body() data: RewardUpdateInput
  ): Promise<Reward | null> {
    try {
      return await this.service.updateReward({
        where: params,
        data: {
          ...data,

          coffeeshop: data.coffeeshop
            ? {
                connect: data.coffeeshop,
              }
            : undefined,

          customer: data.customer
            ? {
                connect: data.customer,
              }
            : undefined,
        },
        select: {
          coffeeshop: {
            select: {
              id: true,
            },
          },

          createdAt: true,

          customer: {
            select: {
              id: true,
            },
          },

          id: true,
          points: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Reward })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteReward(
    @common.Param() params: RewardWhereUniqueInput
  ): Promise<Reward | null> {
    try {
      return await this.service.deleteReward({
        where: params,
        select: {
          coffeeshop: {
            select: {
              id: true,
            },
          },

          createdAt: true,

          customer: {
            select: {
              id: true,
            },
          },

          id: true,
          points: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}