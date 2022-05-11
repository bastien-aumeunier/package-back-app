const ColiSchema = require('../../utils/Schemas/ColisSchema')

const getColis = async (arg) =>{
    try {
      let data = await ColiSchema.find({idUser: arg})
      return data
    } catch (error) {
      return `Vous n'avez pas de colis`
    }
}

module.exports = getColis
