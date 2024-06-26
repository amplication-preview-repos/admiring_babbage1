/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { QrCode } from "./QrCode";
import { QrCodeCountArgs } from "./QrCodeCountArgs";
import { QrCodeFindManyArgs } from "./QrCodeFindManyArgs";
import { QrCodeFindUniqueArgs } from "./QrCodeFindUniqueArgs";
import { CreateQrCodeArgs } from "./CreateQrCodeArgs";
import { UpdateQrCodeArgs } from "./UpdateQrCodeArgs";
import { DeleteQrCodeArgs } from "./DeleteQrCodeArgs";
import { Customer } from "../../customer/base/Customer";
import { QrCodeService } from "../qrCode.service";
@graphql.Resolver(() => QrCode)
export class QrCodeResolverBase {
  constructor(protected readonly service: QrCodeService) {}

  async _qrCodesMeta(
    @graphql.Args() args: QrCodeCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [QrCode])
  async qrCodes(@graphql.Args() args: QrCodeFindManyArgs): Promise<QrCode[]> {
    return this.service.qrCodes(args);
  }

  @graphql.Query(() => QrCode, { nullable: true })
  async qrCode(
    @graphql.Args() args: QrCodeFindUniqueArgs
  ): Promise<QrCode | null> {
    const result = await this.service.qrCode(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => QrCode)
  async createQrCode(@graphql.Args() args: CreateQrCodeArgs): Promise<QrCode> {
    return await this.service.createQrCode({
      ...args,
      data: {
        ...args.data,

        customer: args.data.customer
          ? {
              connect: args.data.customer,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => QrCode)
  async updateQrCode(
    @graphql.Args() args: UpdateQrCodeArgs
  ): Promise<QrCode | null> {
    try {
      return await this.service.updateQrCode({
        ...args,
        data: {
          ...args.data,

          customer: args.data.customer
            ? {
                connect: args.data.customer,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => QrCode)
  async deleteQrCode(
    @graphql.Args() args: DeleteQrCodeArgs
  ): Promise<QrCode | null> {
    try {
      return await this.service.deleteQrCode(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Customer, {
    nullable: true,
    name: "customer",
  })
  async getCustomer(
    @graphql.Parent() parent: QrCode
  ): Promise<Customer | null> {
    const result = await this.service.getCustomer(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}