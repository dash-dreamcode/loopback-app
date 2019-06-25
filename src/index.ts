import { AppUsersApplication } from './application';
import { ApplicationConfig } from '@loopback/core';
import { ExpressServer } from './server';

export { ExpressServer, AppUsersApplication };

export default async function main(options: ApplicationConfig = {}) {
  const app = new ExpressServer(options);
  await app.boot();
  await app.start();

  console.log(`Server is running at http://localhost:3000`);
}
