import * as graphql from "@nestjs/graphql";
import { QrCodeResolverBase } from "./base/qrCode.resolver.base";
import { QrCode } from "./base/QrCode";
import { QrCodeService } from "./qrCode.service";

@graphql.Resolver(() => QrCode)
export class QrCodeResolver extends QrCodeResolverBase {
  constructor(protected readonly service: QrCodeService) {
    super(service);
  }
}
