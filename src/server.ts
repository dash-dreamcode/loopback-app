import { AppUsersApplication } from './application';
import { ApplicationConfig } from '@loopback/core';
import * as express from "express";
import pEvent from 'p-event';
import { Request, Response } from 'express';
import * as path from 'path';

export class ExpressServer {
  public app: express.Application;
  private lbApp: AppUsersApplication;

  constructor(options: ApplicationConfig = {}) {
    this.app = express();
    this.lbApp = new AppUsersApplication(options);
    this.app.use('/api', this.lbApp.requestHandler);

    // Custom Express routes
    this.app.get('/', function (_req: Request, res: Response) {
      res.sendFile(path.resolve('public/express.html'));
    });
    this.app.get('/hello', function (_req: Request, res: Response) {
      res.send('Hello world!');
    });
  }

  async boot() {
    await this.lbApp.boot();
  }

  async start() {
    const port = this.lbApp.restServer.config.port || 3000;
    const host = this.lbApp.restServer.config.host || '127.0.0.1';
    const server = this.app.listen(port, host);
    await pEvent(server, 'listening');
  }
}


