const express = require('express')
const contactsControllers = require('../controllers/contacts')
const router = express.Router()

router
  .post('/:feedback', contactsControllers.addFeedback)

module.exports = router
