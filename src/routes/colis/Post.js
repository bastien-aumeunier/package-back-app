const ColiSchema = require('../../utils/Schemas/ColisSchema')

const PostColis = async (arg) =>{
    try {
      let colis = new ColiSchema(arg)
      await colis.save()
      return(201)
    } catch (e) {
      console.log(e)
      return(500);
  
    }
}

module.exports = PostColis