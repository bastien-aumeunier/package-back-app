const UserSchema = require('../../utils/Schemas/UserSchema')
const bcrypt = require('bcrypt')

const login = async (arg) =>{
  console.log('tryLogin')
    try {
      let user = await UserSchema.findOne({mail: arg.mail})
      const match = await bcrypt.compare(arg.password, user.password)
        if (match) {
          console.log(user)
          return [200, user]
        } else {
          console.log('2')
          if (arg.password == user.password) {
            return [200, user]
          }
          return [403, 'Mot de passe incorrect']
        }
    } catch (error) {
      return [403, {}]
    }
}

module.exports = login
