const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userShema = new mongoose.Shema({
    firstName: {
    type: String,
    required: true,
    min: 3,
    max: 50,
  },
  lastName: {
    type: String,
    required: true,
    min: 3,
    max: 50, 
  },
  email: {
    type: String,
    required: true,
    min: 3,
    max: 70,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    min: 3,
    max: 70,
  },
  role: {
    type: String,
    default:'user',
    enum: ['user', 'admin', 'superadmin']
},
hash_password: {
  type: String,
  required: true
},
}, {timestamps: true});

userSchema.virtual('fullName')
.get(function(){
    return `${this.firstName} ${this.lastName}`;
});

userSchema.methods = {
    authenticate:async function(password){
        return await bcrypt.compare(password, this.hash_password)
    }
}

module.exports = mongoose.model("User", userShema) 