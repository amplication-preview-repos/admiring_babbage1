import { QrCode as TQrCode } from "../api/qrCode/QrCode";

export const QRCODE_TITLE_FIELD = "code";

export const QrCodeTitle = (record: TQrCode): string => {
  return record.code?.toString() || String(record.id);
};
