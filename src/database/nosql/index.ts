import mongoose from 'mongoose';

export const initNoSqlDatabase = () =>
  mongoose.connect('mongodb://localhost:27017/mongodb', {
    // user: 'mongouser',
    // pass: 'mongopass',
    keepAlive: true,
  });
