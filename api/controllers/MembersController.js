const database = require('../db/models')

class MembersController {
    static async searchMembers(req, res) {
        try {
            const allMembers = await database.Members.findAll()
            return res.status(200).json(allMembers)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = MembersController