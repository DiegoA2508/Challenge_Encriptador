const inputText = document.getElementById('inputText');
const outputText = document.getElementById('outputText');
const noMessage = document.getElementById('noMessage');
const encryptBtn = document.getElementById('encryptBtn');
const decryptBtn = document.getElementById('decryptBtn');

// Encriptar función simple (cifrado César con desplazamiento de 3)
function encrypt(text) {
    return text.replace(/[a-z]/g, function(c) {
        return String.fromCharCode((c.charCodeAt(0) - 97 + 3) % 26 + 97);
    });
}

// Desencriptar función simple (cifrado César con desplazamiento de 3)
function decrypt(text) {
    return text.replace(/[a-z]/g, function(c) {
        return String.fromCharCode((c.charCodeAt(0) - 97 - 3 + 26) % 26 + 97);
    });
}

encryptBtn.addEventListener('click', () => {
    const text = inputText.value.trim();
    if (text) {
        noMessage.style.display = 'none';
        outputText.textContent = encrypt(text);
    } else {
        noMessage.style.display = 'block';
        outputText.textContent = '';
    }
});

decryptBtn.addEventListener('click', () => {
    const text = inputText.value.trim();
    if (text) {
        noMessage.style.display = 'none';
        outputText.textContent = decrypt(text);
    } else {
        noMessage.style.display = 'block';
        outputText.textContent = '';
    }
});
