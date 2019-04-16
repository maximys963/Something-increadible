import * as express from 'express';
import { Film } from './models';

const app = express();

app
  .post('/film', async (req, res) => {
    const film = new Film(req.body);

    try {
      await film.save();
      res.end();
    } catch (e) {
      res
        .status(400)
        .json(e);
    }
  })
  .post('/films/fromFile', async (req, res) => {
    const content: string = req.body.toString();
    const strings = content.split(/\r+\n+|\r+|\n+/)
      .filter(_ => _ !== '')
      .map(_ => _.trim());
    const filmsAmount = strings.length / 4;

    const films = [];
    for (let i = 0; i < filmsAmount; i++) {
      const startIndex = i * 4;
      films.push({
        name: strings[startIndex].match(/^Title:\s(.+)$/)[1],
        year: +strings[startIndex + 1].match(/^Release\sYear:\s(.+)$/)[1],
        format: strings[startIndex + 2].match(/^Format:\s(.+)$/)[1],
        actors: strings[startIndex + 3].match(/^Stars:\s(.+)$/)[1].split(', ')
      });
    }

    try {
      await Promise.all(
        films.map(async _ => {
          const film = new Film(_);
          return film.save();
        })
      );

      res.end();
    } catch (e) {
      res
        .status(400)
        .json(e);
    }
  })
  .delete('/film/:filmId', async (req, res) => {
    try {
      await Film.deleteOne({_id: req.params.filmId});
      res.end();
    } catch (e) {
      res
        .status(400)
        .json(e);
    }
  })
  .get('/film/:filmId', async (req, res) => {
    try {
      res.json(await Film.findById(req.params.filmId));
    } catch (e) {
      res
        .status(400)
        .json(e);
    }
  })
  .get('/film/byName/:filmName', async (req, res) => {
    res.json(await Film.find({ name: req.params.filmName}));
  })
  .get('/film/byActorName/:actorName', async (req, res) => {
    res.json(await Film.find({ actors: { $elemMatch: req.params.actorName } }));
  })
  .get('/films', async (req, res) => {
    res.json(await Film.find({}));
  });


export const RestAPI = app;

