const { Router } = require('express')
const MembersController = require('../controllers/MembersController')

const router = Router()

router.get('/members', MembersController.searchMembers)

module.exports = router