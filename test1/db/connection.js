var mongoose = require('mongoose')
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/spot")
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId

var RandomSongSchema = new mongoose.Schema(
  {
    name: String,
    artist: String,
    url: String
  }
)

mongoose.model("RandomSong", RandomSongSchema);
module.exports = mongoose;
