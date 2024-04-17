const { Thought, User } = require('../models');

const thoughtController = {
  // get all thoughts
  async getThoughts(req, res) {
    try {
      const dbThoughts= await Thought.find()
        .sort({ createdAt: 0 });

      res.json(dbThoughts);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
 
  async getOneThought(req, res) {
    try {
      const dbThoughts= await Thought.findOne({ _id: req.params.thoughtId });

      if (!dbThoughts) {
        return res.status(404).json({ message: 'No thought found.' });
      }

      res.json(dbThoughts);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // create a thought
  async createThought(req, res) {
    try {
      const dbThoughts= await Thought.create(req.body);

      const dbUser = await User.findOneAndUpdate(
        { _id: req.body.userId },
        { $push: { thoughts: dbThoughts._id } },
        { new: true }
      );

      if (!dbUser) {
        return res.status(404).json({ message: 'Thought created with error' });
      }

      res.json({ message: 'Thought successfully created!' });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // update thought
  async updateThought(req, res) {
    const dbThoughts= await Thought.findOneAndUpdate({ _id: req.params.thoughtId }, { $set: req.body });

    if (!dbThoughts) {
      return res.status(404).json({ message: 'Cannot find thought' });
    }

    res.json(dbThoughts);

    console.log(err);
    res.status(500).json(err);
  },

  async deleteThought(req, res) {
    try {
      const dbThoughts= await Thought.findOneAndRemove({ _id: req.params.thoughtId })

      if (!dbThoughts) {
        return res.status(404).json({ message: 'Cannot find thought' });
      }

      const dbUser = User.findOneAndUpdate(
        { thoughts: req.params.thoughtId },
        { $pull: { thoughts: req.params.thoughtId } },
        { new: true }
      );

      if (!dbUser) {
        return res.status(404).json({ message: 'Thought created with error' });
      }

      res.json({ message: 'Thought successfully deleted!' });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  async removeReaction(req, res) {
    try {
      const dbThoughts= await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $pull: { reactions: { reactionId: req.params.reactionId } } },
        { runValidators: true, new: true }
      );

      if (!dbThoughts) {
        return res.status(404).json({ message: 'Cannot find thought' });
      }

      res.json(dbThoughts);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
};

module.exports = thoughtController;
