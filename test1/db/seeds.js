var mongoose = require('./connection')

var RandomSong = mongoose.model("RandomSong")

var seedData = [
  {
    "name": "funk",
    "artist": "Sly",
    "album": "alb1",
    "popularity": "89",
    "url": "www.google.com"
  },
  {
    "name": "Soul",
    "artist": "Sly",
    "album": "alb2",
    "popularity": "49",
    "url": "www.yelp.com"
  },
  {
    "name": "funk2",
    "artist": "Robbie",
    "album": "alb3",
    "popularity": "82",
    "url": "www.spotify.com"
  }
]

RandomSong.remove({}).then(function(){
  RandomSong.collection.insert(seedData).then(function(){
    process.exit();
  })
})
console.log("seeded");
