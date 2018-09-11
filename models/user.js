const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
    email: {
      type: String,
      index: { unique: true }
    },
    password: String,
    stocks: Array,
    coins: Array
  });

  UserSchema.methods.validPassword = function validPassword(password) {
    return bcrypt.compareSync(password, this.password);
  };

  UserSchema.pre('save', function saveHook(next) {
    const user = this;
  
    if (!user.isModified('password')) return next();
  
    return bcrypt.genSalt((saltError, salt) => {
      if (saltError) { return next(saltError); }
  
      return bcrypt.hash(user.password, salt, (hashError, hash) => {
        if (hashError) { return next(hashError); }
  
        user.password = hash;
  
        return next();
      });
    });
  });

    const User = mongoose.model('User', UserSchema)
    module.exports= User;