import mongoose from 'mongoose';
import config from './config';
import app from './app';
import { Server } from 'http';

process.on('uncaughtException', error => {
  console.log(error);
  process.exit(1);
});

let server: Server;

async function main() {
  try {
    await mongoose.connect(config.database_url as string);

    server = app.listen(config.port, () => {
      console.log(`🚀 Server is listening on port ${config.port}`);
    });

    console.log(`✅ Successfully connected to Database`);
  } catch (error) {
    console.log(`❌ Failed to connect Database : ${error}`);
  }

  process.on('unhandledRejection', error => {
    console.log(
      'Unhandled rejection is detected, we are closing our server......'
    );

    if (server) {
      server.close(() => {
        console.log(error);
        process.exit(1);
      });
    } else {
      process.exit(1);
    }
  });
}

main();

process.on('SIGTERM', () => {
  console.log('SIGTERM is received');

  if (server) {
    server.close();
  }
});
