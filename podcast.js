const parsePod = require('node-podcast-parser');
const superagent = require('superagent');

const rssUrl = `https://feed.syntax.fm/rss`;


let parse = (url) => {

  superagent.get(url)
    .buffer()
    .type('xml')
    .then(response => {
      // console.log('response', response.text);

      parsePod(response.text, (err, data) => {
        if (err) {
          console.log('err', err);
          return;
        }
        console.log('data', data.episodes[0].enclosure);
      });
    });
};

parse(rssUrl);
