const ColiSchema = require('../../utils/Schemas/ColisSchema')
const Colissimo = require('../../modules/Colissimo')

const GetIdColis = async (arg) =>{
  var Tracker = {}
  try {
    let colis = await ColiSchema.findOne({_id: arg})
    switch (colis.transport) {
      case 'UPS':
        return `UPS n'est pas encore disponible`
      case 'Mondial Relay':
        return `Mondial Relay n'est pas encore disponible`
      case 'Colissimo':
        Tracker = await Colissimo(colis)
        return Tracker
      case 'DHL':
        return `DHL n'est pas encore disponible`
      case 'Chronopost':
        return `Chronopost n'est pas encore disponible`
      case 'Colisprive':
        return `Colisprive n'est pas encore disponible`
      default:
        return `Transport non reconnu`
    }
  } catch (error) {
    console.log(error)
    return 500;
  }
}

module.exports = GetIdColis