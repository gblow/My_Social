const { User, Thought } = require('../models');

const userController = {
  // get all users
  async getUsers(req, res) {
    try {
      const dbUser = await User.find()
        
      res.json(dbUser);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // get single user by id
  async getOneUser(req, res) {
    try {
      const dbUser = await User.findOne({ _id: req.params.userId })
        .populate('Thoughts');

      if (!dbUser) {
        return res.status(404).json({ message: 'No user with this id!' });
      }

      res.json(dbUser);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // create new user
  async newUser(req, res) {
    try {
      const dbUser = await User.create(req.body);
      res.json(dbUser);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
 
  async updateUser(req, res) {
    try {
      const dbUser = await User.findOneAndUpdate(
        { _id: req.params.userId },
        {
          $set: req.body,
        },
        {
          new: true,
        }
      );

      if (!dbUser) {
        return res.status(404).json({ message: 'No user found' });
      }

      res.json(dbUser);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
};
module.exports = userController;
