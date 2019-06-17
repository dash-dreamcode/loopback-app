import { DefaultCrudRepository, Condition, AndClause, OrClause } from '@loopback/repository';
import { User, UserRelations } from '../models';
import { UserDbDataSource } from '../datasources';
import { inject } from '@loopback/core';
import { Response } from '../controllers';
import { cat } from 'shelljs';
let normalise = require('ajv-error-messages');
let Ajv = require('ajv');

interface UserType {
  name: string;
  email: string;
}

export class UserRepository extends DefaultCrudRepository<
  User,
  typeof User.prototype.email,
  UserRelations
  > {
  constructor(
    @inject('datasources.userDB') dataSource: UserDbDataSource,
  ) {
    super(User, dataSource);
  }

  async createUser(user: User): Promise<Response> {
    let valid = this.validateData(user);
    let mongoError;

    if (valid.message === "success") {
      try {
        mongoError = await this.create(user)
      } catch (err) {
        mongoError = err
      }
    }
    return {
      message: mongoError ? mongoError.errmsg : (valid.message || valid),
      data: user
    };
  }

  validateData = (data: UserType) => {
    const userSchema = {
      type: 'object',
      required: ['name', 'email'],
      properties: {
        name: {
          type: 'string',
          maxLength: 8,
        },
        email: {
          type: 'string',
          format: 'email',
          maxLength: 20,
        },
      }
    };

    const isValid = new Ajv({ allErrors: true }).compile(userSchema);
    let normalizedErrors;

    if (!isValid(data)) {
      let ajvErrors = isValid.errors
      normalizedErrors = normalise(ajvErrors);
    }

    return normalizedErrors || { message: "success" };
  };

  findByName(
    key: string,
  ) {
    return this.find({ where: { name: { like: key } } })
  }

  findByEmail(
    key: string,
  ) {
    return this.find({ where: { email: { like: key } } })
  }
}
