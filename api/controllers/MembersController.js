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

    static async searchMember(req, res) {
        const { id }  = req.params
        try {
            const oneMember = await database.Members.findOne(
                {
                    where: {
                        id: Number(id)
                    }
                })
        return res.status(200).json(oneMember)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async createMember(req, res){
        const newMember = req.body
        try {
            const createNewMember = await database.Members.create(newMember)
            return res.status(200).json(createNewMember)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = MembersController