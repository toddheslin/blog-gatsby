"use strict";

var Podcast = require('podcast');
var path = require('path');
var podcastFeed = require(path.join(__dirname, '../content/data/podcast.json'));

// http://beingremarkable.me/podcast?format=RSS
// Need to go into squarespace before trial ends to tell itunes to redirect feed to this server

/* lets create an rss feed */
var feed = new Podcast({
    title: 'The Remarkable Crowdfunding Toddcast: Ideas | Tribes | Funding | Lifestyle',
    description: 'Todd Heslin from the Being Remarkable blog explores the question: How do you inspire your tribe to crowdfund and share your new projects?',
    feed_url: 'https://beingremarkable.herokuapp.com/podcast',
    site_url: 'http://beingremarkable.me',
    image_url: 'https://beingremarkable.herokuapp.com/public/img/podcast.png',
    //docs: 'http://beingremarkable.me/rss/docs.html',
    author: 'Todd Heslin',
    managingEditor: 'Todd Heslin',
    webMaster: 'Todd Heslin',
    copyright: '2016 Todd Heslin',
    language: 'en',
    //categories: ['Category 1','Category 2','Category 3'],
    // pubDate: 'May 20, 2012 04:00:00 GMT',
    // ttl: '60',
    itunesAuthor: 'Todd Heslin: Startup guy | Entrepreneur | Blogger',
    itunesSubtitle: 'Todd Heslin from the Being Remarkable blog explores the question: "How do you inspire your tribe to crowdfund and share your new projects?"',
    itunesSummary: 'Focusing on telling remarkable stories, you will discover tips, techniques and strategies on how to connect with your existing tribe to raise money for projects before you even start them. Episodes will feature interviews with current and existing entrepreneurs who have undertaken projects on crowdfunding platforms such as Kickstarter, Indiegogo, Fundable, Crowdfunder and Rally. Why do some projects receive over 1000x more money than they needed? What happens to successful crowdfunding projects after they ship? Why do some people crowdfund even when they don\'t need the money? Is crowdfunding better than seeking investors for your project? Join the fastest growing community of remarkable entrepreneurs.',
    itunesOwner: { name: 'Todd Heslin', email:'todd@heslin.net.au' },
    itunesExplicit: false,
    itunesCategory: [{
        "text": "Business",
        "subcats": [{
          "text": "Management & Marketing"
        }]
    }],
    itunesImage: 'https://beingremarkable.herokuapp.com/public/img/podcast.png'
});

for (var i = 0; i < podcastFeed.length; i++) {
  feed.item({
      title:  podcastFeed[i].title,
      description: '',
      url: podcastFeed[i].enclosure.link, // link to the item
      guid: podcastFeed[i].guid, // optional - defaults to url
      date: podcastFeed[i].pubDate, // any format that js Date can parse.
      enclosure : {
        url: podcastFeed[i].enclosure.link,
        type: 'audio/mpeg'
      },
      itunesAuthor: podcastFeed[i].author,
      itunesExplicit: false,
      itunesDuration: podcastFeed[i].enclosure.duration
  });

}

// cache the xml to send to clients
var xml = feed.xml();

module.exports = {
  rss: function(req,res) {
    res.set('Content-Type', 'text/xml')
    res.send(xml);
  }
};
