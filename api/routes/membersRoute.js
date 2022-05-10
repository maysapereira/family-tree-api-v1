const { Router } = require('express')
const MembersController = require('../controllers/MembersController')

const router = Router()

router.get('/members', MembersController.searchMembers)
router.get('/members/:id', MembersController.searchMember)
router.post('/members', MembersController.createMember)


module.exports = router