var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var AnnouncementSchema = new Schema(
  {
    poster: {type: String, required: true, max: 100},
    email: {type: String, required: true, max: 100},
    expiration_date: {type: Date},
    custom_announcement: {type: String, required: true, max: 100},
    //expiration_date: {type: String, required: false, max: 10}
  }
);

AnnouncementSchema
  .virtual('url')
  .get(function () {
    return '/announcement/list/' + this._id;
  });

  AnnouncementSchema
  .virtual('nimi')
  .get(function () {
    return '/announcement/list/' + this.poster;
  });



//Export model
module.exports = mongoose.model('Announcement', AnnouncementSchema);