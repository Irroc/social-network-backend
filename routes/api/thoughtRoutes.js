const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction
} = require('../../controllers/ThoughtController.js');

// /api/thoughts
router.route('/').get(getThoughts).post(createThought);

router.route('/reactions/:thoughtId').post(addReaction)
router.route('/:thoughtId/:reactionId').delete(removeReaction)
// /api/thoughts/:thoughtId
router
  .route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

module.exports = router;
