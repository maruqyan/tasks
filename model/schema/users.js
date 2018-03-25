const db = require('../db');
const UserSchema = new db.Schema({
  firstname: {
    type:String
  },

  lastname: {
    type:String
  },

  datebirth: {
    type:Date,
    default: Date.now
  },

  address: {
    type:String
  },

  address2: {
    type:String
  },

  country: {
    type:String
  },

  city: {
    type:String
  },

  firstname: {
    type:String
  },

  postalcode: {
    type:String
  },

})

const users = db.model('user', UserSchema);
module.exports = users;
