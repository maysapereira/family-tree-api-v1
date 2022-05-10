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

    static async updateMember(req, res){
        const { id }  = req.params
        const newData = req.body
        try {
                await database.Members.update(newData,  {
                    where: {
                        id: Number(id)
                    }
                })
                const updatedMember = await database.Members.findOne(
                    {
                        where: {
                            id: Number(id)
                        }
                    })
                return res.status(200).json(updatedMember)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async deleteMember(req, res) {
        const { id }  = req.params
        try {
                await database.Members.destroy (
                    {
                        where: {
                            id: Number(id)
                        }
                    })
        return res.status(200).json(
            {
                message: `The member with id ${id} has beem deleted from the family tree`
            }
        )
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = MembersController