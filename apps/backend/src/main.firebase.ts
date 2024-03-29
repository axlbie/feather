/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as express from 'express';
import * as functions from 'firebase-functions';
import { AppModule } from './modules/app/app.module';
const port = process.env.PORT || 5001;
const server = express();

export const createApp = async (expressInstance) => {
  const appServer = await NestFactory.create(
    AppModule,
    new ExpressAdapter(expressInstance)
  );
  return appServer;
};

createApp(server)
  .then((appServer) => {
    appServer.init();
    Logger.log(
      `🚀 Firebase application is running on: http://localhost:${port}`
    );
  })
  .catch((error) => {
    console.log(error);
    Logger.error(`❌ Application could not start`, error);
  });

export const api = functions.https.onRequest(server);
