import HmacSha1 from 'crypt-js/hmac-sha1'
import Base64 from 'crypt-js/enc-base64'

class Crypt {
  static instance = CryptoJS
  constructor (key = 'admin', iv='iv+key') {
    this.key = key
    this.iv = iv
  }

  encodeByAES (data) {
    const { key, iv } = {
      CryptoJS.enc.Utf8.parse(key),
      CryptoJS.enc.Utf8.parse(iv)
    }
    return CryptoJS.AES.encrypt(data, key, iv).toString()
  }

  decodeByAES () {

  }

}

export default Crypt
