const ColiSchema = require('../utils/Schemas/ColisSchema')


const setDelivery = async (colis) => {
    let id= colis._id
      let task = await ColiSchema.findOne({_id: id})
      task.etat = 'livré'
      try {
        await ColiSchema.updateOne({_id: id}, task)
      } catch (error) {
        console.log(error)
      }
  }

  module.exports = setDelivery
  