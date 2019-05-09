const crypto = require('crypto')

let Encrypt = (data) => {
    let key = 'gp9'
    const cipher = crypto.createCipher('aes192', key);
    var crypted = cipher.update(data, 'utf8', 'hex');
    crypted += cipher.final('hex');
    return crypted;
}

let Decrypt = (encrypted) => {
    let key = 'gp9'
    const decipher = crypto.createDecipher('aes192', key);
    var decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}

module.exports = {
  Encrypt,
  Decrypt
}