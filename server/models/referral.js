const mongoose = require('mongoose'),
      Schema = mongoose.Schema;


const ReferralSchema = new Schema({
  expirationDate: {
    type: Date,
    expires:  60*60*24*14,  // expire after two weeks
    default: Date.now
  },
  referral: {
    type: String,
    required: true
  },
  issued_date: {
    type: Date,
    default: Date.now
  },
  active: {
    type: Boolean,
    default: true
  }

})
module.exports = mongoose.model('Referral', ReferralSchema);