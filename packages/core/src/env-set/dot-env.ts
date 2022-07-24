import { appendFileSync } from 'fs';

import dotenv from 'dotenv';

import { fromRoot } from './parameters';

export const appendDotEnv = (key: string, value: string) => {
  appendFileSync('.env', `${key}=${value}\n`);
};

export const configDotEnv = () => {
  if (fromRoot) {
    // Dotenv.config({ path: '../../.env' });
    dotenv.config();
  } else {
    dotenv.config();
  }
};
