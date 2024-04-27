// Caesar Cipher Algorithm for Encryption and Decryption
function caesarCipher(text, shift) {
  let result = "";
  for (let i = 0; i < text.length; i++) {
    let charCode = text.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) {
      result += String.fromCharCode(((charCode - 65 + shift) % 26) + 65);
    } else if (charCode >= 97 && charCode <= 122) {
      result += String.fromCharCode(((charCode - 97 + shift) % 26) + 97);
    } else {
      result += text.charAt(i);
    }
  }
  return result;
}

// Encrypt function
function encrypt() {
  let text = document.getElementById("encryptText").value;
  let password = document.getElementById("encryptPassword").value;
  let shift = password.length; // Shift amount based on password length
  let encryptedText = caesarCipher(text, shift);
  document.getElementById("encryptedResult").textContent = encryptedText;
}

// Decrypt function
function decrypt() {
  let text = document.getElementById("decryptText").value;
  let password = document.getElementById("decryptPassword").value;
  let shift = password.length; // Shift amount based on password length
  // Decrypting involves shifting backwards, so we use negative shift
  let decryptedText = caesarCipher(text, -shift);
  document.getElementById("decryptedResult").textContent = decryptedText;
}
