const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direction) {
    this.direction = direction;
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error('Incorrect arguments!')
    }

    let result = ''
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const upperCaseMessage = message.toUpperCase();

    if (upperCaseMessage.match(/[A-Z]/g)) {
      const plainText = upperCaseMessage.match(/[A-Z]/g).join('');
      const keyString = key.repeat(Math.ceil(plainText.length / key.length)).slice(0, plainText.length).toUpperCase();
      let cipherText = '';


      for (let i = 0; i < plainText.length; i++) {
        const index = (alphabet.indexOf(plainText[i]) + alphabet.indexOf(keyString[i])) % alphabet.length;
        const letter = alphabet[index]
        cipherText += letter;
      }

      for (let i = 0; i < upperCaseMessage.length; i++) {
        if (alphabet.includes(upperCaseMessage[i])) {
          result += cipherText[0];
          cipherText = cipherText.slice(1);
        } else {
          result += upperCaseMessage[i];
        }
      }
    } else {
      result = upperCaseMessage;
    }

    if (this.direction === false) {
      result = result.split('').reverse().join('');
    }

    return result;
  }

  decrypt(encryptedMessage, key) {
    if (encryptedMessage === undefined || key === undefined) {
      throw new Error('Incorrect arguments!')
    }

    let result = ''
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const upperCaseMessage = encryptedMessage.toUpperCase();

    if (upperCaseMessage.match(/[A-Z]/g)) {
      const cipherText = upperCaseMessage.match(/[A-Z]/g).join('');
      const keyString = key.repeat(Math.ceil(cipherText.length / key.length)).slice(0, cipherText.length).toUpperCase();
      let plainText = '';

      for (let i = 0; i < cipherText.length; i++) {
        const index = (alphabet.length + alphabet.indexOf(cipherText[i]) - alphabet.indexOf(keyString[i])) % alphabet.length;
        const letter = alphabet[index];
        plainText += letter;
      }

      for (let i = 0; i < upperCaseMessage.length; i++) {
        if (alphabet.includes(upperCaseMessage[i])) {
          result += plainText[0];
          plainText = plainText.slice(1);
        } else {
          result += upperCaseMessage[i];
        }
      }
    } else {
      result = upperCaseMessage;
    }

    if (this.direction === false) {
      result = result.split('').reverse().join('');
    }

    return result;
  }
}


module.exports = {
  VigenereCipheringMachine
};
