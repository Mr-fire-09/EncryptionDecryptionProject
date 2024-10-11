// Add event listener to welcome animation
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.querySelector(".welcome-animation").style.display = "none";  // Hide welcome animation
        document.querySelector(".main-content").style.display = "block";      // Show main content
        document.body.classList.add("full-screen"); // Optional: add full-screen class for styling
    }, 2000);
});

// Encryption Function
function encrypt() {
    const plainText = document.getElementById('plainText').value;
    if (!plainText) {
        alert('Please enter text to encrypt!');
        return;
    }

    // Your encryption logic here
    // TO DO: Implement real encryption logic
    const encryptedText = btoa(plainText); // Just an example using Base64 encoding
    document.getElementById('encryptedText').value = encryptedText;
}

// Decryption Function
function decrypt() {
    const encryptedText = document.getElementById('encryptedText').value;
    if (!encryptedText) {
        alert('Please enter the encrypted text to decrypt!');
        return;
    }

    // Your decryption logic here
    // TO DO: Implement real decryption logic
    try {
        const decryptedText = atob(encryptedText); // Just an example using Base64 decoding
        document.getElementById('decryptedText').value = decryptedText;
    } catch (e) {
        alert('Invalid encrypted text!');
    }
}
