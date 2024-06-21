import dotenv from 'dotenv';
dotenv.config();  // Load environment variables from .env file

export const environment = {
  production: true,
  contactKey: process.env['formskey'],
};
