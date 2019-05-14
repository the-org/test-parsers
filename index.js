const Mercury = require('@postlight/mercury-parser');
const Parser = require('rss-parser');

// rss-parser example
let parser = new Parser();
const rssUrl = `https://hacks.mozilla.org/feed/`;

let parseRSS = async (url) => {
  let feed = await parser.parseURL(url);

  console.log('feed.items[0]', feed.items[0]);
}

parseRSS(rssUrl);

// mercury parser example
const url = `https://dev.to/kossnocorp/if-you-want-to-ship-a-side-project-start-with-unlearning-the-best-practices-5b1l`;

Mercury
  .parse(url)
  .then(result => console.log(result));
