import React from 'react';
import QRCode from 'qrcode.react';

export const PixQrCode = () => {
  const emv =
    '00020126580014br.gov.bcb.pix0136c78052c6-43e5-4732-a9ef-90fd615ed6385204000053039865802BR5918Sibelius Seraphini6006Cidade62160512ccsseraphini630452D6';
  return <QRCode value={emv} />;
};
