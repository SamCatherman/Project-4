var mongoose = require('./connection')

var RandomSong = mongoose.model("RandomSong")

var seedData = [
  {
    "name": "EverydayPeople",
    "artist": "Sly and the Family Stone",
    "album": "alb1",
    "popularity": "89",
    "url": "https://play.spotify.com/track/7lL2lMWNtzOcf5HnEudNgn"
  },
  {
    "name": "funk",
    "artist": "Sly",
    "album": "alb1",
    "popularity": "89",
    "url": "https://play.spotify.com/track/7lL2lMWNtzOcf5HnEudNgn"
  },
  {
    "name": "If You Want Me to Stay",
    "artist": "Sly and the Family Stone",
    "album": "alb2",
    "popularity": "49",
    "url": "https://play.spotify.com/track/2BydLQAh7CUIFvSEqAMc4x"
  },
  {
    "name": "Killing Me Softly",
    "artist": "Fugees",
    "album": "alb3",
    "popularity": "82",
    "url": "https://play.spotify.com/track/0Q0IVlqMV64kNLlwjPj0Hl"
  },
  {
    "name": "C.R.E.A.M.",
    "artist": "Wu-Tang Clan",
    "album": "alb4",
    "popularity": "82",
    "url": "https://play.spotify.com/track/119c93MHjrDLJTApCVGpvx"
  },
  {
    "name": "Protect Ya Neck",
    "artist": "Wu-Tang Clan",
    "album": "alb5",
    "popularity": "82",
    "url": "https://play.spotify.com/track/1Sgj10byiGzPpI2IrXSFEn"
  },

]

RandomSong.remove({}).then(function(){
  RandomSong.collection.insert(seedData).then(function(){
    process.exit();
  })
})
console.log("seeded");
