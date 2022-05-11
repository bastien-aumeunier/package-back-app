const ColiSchema = require('../../utils/Schemas/ColisSchema')
const UserSchema = require('../../utils/Schemas/UserSchema')

const DeleteUser = async (arg) =>{
    try {
      await UserSchema.deleteOne({_id: arg})
      await ColiSchema.deleteMany({idUser: arg})
      return 200
    } catch (error) {
      console.log(error)
      return 500
    }
}

module.exports = DeleteUser