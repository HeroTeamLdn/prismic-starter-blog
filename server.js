const express = require('express');
const next = require('next');
const request = require('request');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    server.get('/blog/:uid', (req, res) => {
      const params = { uid: req.params.uid };
      app.render(req, res, '/blogPost', params);
    });

    server.get('/privacy-policy', (req, res) => {
      const params = { uid: 'privacy-policy' };
      app.render(req, res, '/basic', params);
    });

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, err => {
      if (err) throw err;
      console.log('> Ready on http://localhost:3000');
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
