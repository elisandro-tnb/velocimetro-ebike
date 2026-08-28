let totalBytes = 0;
console.log("%c--- TAMANHO DO LOCALSTORAGE ---", "color: #00d8ff; font-weight: bold;");

for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    // Cada caractere em UTF-16 consome 2 bytes
    const bytes = (key.length + value.length) * 2;
    totalBytes += bytes;
    console.log(`${key}: ${(bytes / 1024).toFixed(2)} KB`);
}

console.log("%c-------------------------------", "color: #00d8ff;");
console.log(`%cTOTAL OCUPADO: ${(totalBytes / 1024).toFixed(2)} KB`, "color: #00ff66; font-weight: bold;");