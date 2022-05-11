const axios = require('axios')
const API = require('../utils/Constante')
const setDelivery = require('./Delivery')

const Colissimo = async (colis) => {
    let track = colis.track
    const config = {
      headers: {
        'X-Okapi-Key': API.KEY_COLISSIMO,
        Accept : 'application/json',
      }
    }
    try {
      let Tracker = {}
      let resp = await axios.get(API.LINK_COLISSIMO + track + '?lang=fr_FR', config)
        let ship = resp.data.shipment
        if (resp.data.returnCode == 200) {
           Tracker = {
            track: track,
            isDelivered: ship.isFinal,
            step: ship.event,
            deliveryDate: ship.deliveryDate.substring(0,10),
            url:ship.url,
          }
          if(Tracker.isDelivered && colis.etat != 'livré'){
            setDelivery(colis)
          }
          return Tracker
        }
        return 'Erreur Vérifier le numéro de suivi'
    } catch(error) {
      return 'Erreur Vérifier le numéro de suivi'
    }
}

module.exports = Colissimo