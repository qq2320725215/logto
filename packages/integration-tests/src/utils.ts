import { Response } from 'got/dist/source';

export const extractCookie = (response: Response) => {
  const { headers } = response;

  return headers['set-cookie']?.join('; ') ?? '';
};

export const generateUsername = () => `usr_${crypto.randomUUID().replaceAll('-', '_')}`;
export const generatePassword = () => `pwd_${crypto.randomUUID()}`;

export const generateResourceName = () => `res_${crypto.randomUUID()}`;
export const generateResourceIndicator = () => `https://${crypto.randomUUID()}.logto.io`;
