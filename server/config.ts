export const Config = {
  dev: {
    mongoUri: 'mongodb://localhost:27017/test',
    port: 3000
  },
  prod: {
    mongoUri: 'mongodb://root:rootpass1@ds225840.mlab.com:25840/heroku_k4zzpwtj',
    port: process.env.PORT
  }
};

