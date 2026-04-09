import bcrypt from 'bcrypt'

const saltRounds = 10;

const encryptPassword = async (plainPassword) => {
    return await bcrypt.hash(plainPassword, saltRounds)
}

const decryptPassword = async (plainPassword, encryptedPassword) => {
    return await bcrypt.compare(plainPassword, encryptedPassword)
}

export { encryptPassword, decryptPassword }