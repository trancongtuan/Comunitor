import { sign, verify, decode } from 'jsonwebtoken';

export const generateJwt = async (
  payload: any,
  privateBase64: string,
  issuer: string,
  subject: string,
  expiresIn: any,
) => {
  const priv = Buffer.from(privateBase64, 'base64').toString('utf-8');
  return sign(
    payload,
    { key: priv, passphrase: 'anhvn' },
    {
      algorithm: 'RS256',
      subject,
      issuer,
      encoding: 'UTF-8',
      expiresIn,
    },
  );
};

export const verifyJwt = (token: string, publicBase64: string) => {
  const pub = Buffer.from(publicBase64, 'base64').toString('utf-8');
  return verify(token, pub);
};

export const decodeJwt = (token: string) => {
  return decode(token, { json: true });
};
