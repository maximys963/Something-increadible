import * as mongoose from 'mongoose';

export const Film = mongoose.model(
  'Film',
  new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    year: {
      type: Number,
      required: true
    },
    format: {
      type: String,
      enum: [
        'DVD',
        'Blu-Ray',
        'VHS'
      ]
    },
    actors: {
      type: [String],
      required: true
    }
  }, { versionKey: false })
);

