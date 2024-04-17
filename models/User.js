// Importing the required dependencies from the mongoose library
const { Schema, model } = require('mongoose'); 
const userSchema = new Schema(
  {
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
      // using regular expression to validate email format
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Email has to match'],
    },

    friends:[
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
    }
  ],
    thoughts:[
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought',
    }
  ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
}
);

userSchema.virtual('friendCount').get(function(){
    return this.friends.length;
  }
);

const User = model('User',userSchema)

module.exports = User



