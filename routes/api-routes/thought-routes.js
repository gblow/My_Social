// Import the dependencies and controllers
const router = require('express').Router();
const {
    getThoughts,
    getThoughtsById,
    createThought,
    deleteThought,
    updateThoughtById,
    createReaction,
    deleteReaction,
} = require('../../controllers/thought-controller');

// GET and POST all Thoughts
router.route('/').get(getThoughts).post(createThought);

// GET, PUT and DELETE Thoughts
router.route('/:thoughtId').get(getThoughtsById).put(updateThoughtById).delete(deleteThought);

// POST reaction to a Thought
router.route('/:thoughtId/reactions').post(createReaction);

// DELETE reaction to a Thought
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);
// Export the router
module.exports = router;