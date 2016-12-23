var mongoose = require('mongoose')
var mongoURI = 'mongodb://localhost/spot'
mongoose.connect(mongoURI)
var Schema = mongoose.Schema;
var RandomSongSchema = new mongoose.Schema(
  {
    name: String,
    artist: String,
    album: String,
    popularity: Number,
    url: String
  }
)

mongoose.model("RandomSong", RandomSongSchema);
module.exports = mongoose;
