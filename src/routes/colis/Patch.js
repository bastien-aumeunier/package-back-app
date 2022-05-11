const ColiSchema = require('../../utils/Schemas/ColisSchema')

const PatchColis = async (task, id) =>{
  try {
    await ColiSchema.updateOne({_id: id}, task)
    return 200
  } catch (error) {
    console.log(error)
    return 500
  }
}

module.exports = PatchColis