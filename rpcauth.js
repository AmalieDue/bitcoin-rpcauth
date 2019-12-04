const crypto = require('crypto')

function generateSalt (size) {
  const buf = crypto.randomBytes(size)
  const salt = buf.toString('hex')
  return salt
}

function generatePassword () {
  const buf = crypto.randomBytes(32)
  const password = Buffer.from(buf).toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/g, '')
  return password
}

function passwordToHmac (salt, password) {
  const hmac = crypto.createHmac('sha256', salt)
  hmac.update(password)
  return hmac.digest('hex')
}

module.exports = {
  generateSalt,
  generatePassword,
  passwordToHmac
}
