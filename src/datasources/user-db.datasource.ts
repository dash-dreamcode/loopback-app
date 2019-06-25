import { inject } from '@loopback/core';
import { juggler } from '@loopback/repository';

const config = {
  "name": "userDB",
  "connector": "mongodb",
  "url": "",
  "host": "127.0.0.1",
  "port": 27017,
  "user": "",
  "password": "",
  "database": "users",
  "useNewUrlParser": true
};

export class UserDbDataSource extends juggler.DataSource {
  static dataSourceName = 'userDB';

  constructor(
    @inject('datasources.config.userDB', { optional: true })
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
