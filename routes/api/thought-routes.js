const router = require('express').Router();
const {
  getThoughts,
  getOneThought,
  updateThought,
  createThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/').get(getThoughts).post(createThought);
router.route('/:thoughtId/reactions').post(addReaction);
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);
router.route('/:thoughtId').get(getOneThought).put(updateThought).delete(deleteThought);

module.exports = router;