import fs from 'fs';
import dotenv from 'dotenv';

dotenv.config();

const envConfig = `
export const environment = {
  production: false,
  notesBaseUrl: "${process.env.NOTES_BASE_URL}",
  userMgmtUrl: "${process.env.USERMGMT_BASE_URL}"
};
`;

fs.writeFileSync('./src/app/environment.ts', envConfig);
