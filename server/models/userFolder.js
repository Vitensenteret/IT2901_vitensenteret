const mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      bcrypt = require('bcrypt-nodejs')

/*
 |--------------------------------------------------------------------------
 | User schema
 |--------------------------------------------------------------------------
*/
const UserFolder = new Schema({
  isRoot: { type: Boolean, default: false, },
  title: { type: String, default: 'New Folder' },
  folders: {
    type: [{type: mongoose.Schema.Types.ObjectId, ref: 'UserFolder'}],
    default: [],
  },
  surveys: {
    type: [{type: mongoose.Schema.Types.ObjectId, ref: 'Survey'}],
    default: [],
  },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User',
          required: true, }
});

module.exports = mongoose.model('UserFolder', UserFolder);
