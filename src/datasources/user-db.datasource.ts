import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './user-db.datasource.json';

export class UserDbDataSource extends juggler.DataSource {
  static dataSourceName = 'userDB';

  constructor(
    @inject('datasources.config.userDB', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
