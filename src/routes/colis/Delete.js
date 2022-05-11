const ColiSchema = require('../../utils/Schemas/ColisSchema')

const DeleteColis = async (arg) =>{
    try {
      await ColiSchema.deleteOne({_id: arg})
      return 200
    } catch (error) {
      console.log(error)
      return 500
    }
}

module.exports = DeleteColis