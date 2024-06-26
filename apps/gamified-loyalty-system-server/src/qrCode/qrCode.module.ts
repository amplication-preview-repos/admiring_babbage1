import { Module } from "@nestjs/common";
import { QrCodeModuleBase } from "./base/qrCode.module.base";
import { QrCodeService } from "./qrCode.service";
import { QrCodeController } from "./qrCode.controller";
import { QrCodeResolver } from "./qrCode.resolver";

@Module({
  imports: [QrCodeModuleBase],
  controllers: [QrCodeController],
  providers: [QrCodeService, QrCodeResolver],
  exports: [QrCodeService],
})
export class QrCodeModule {}
