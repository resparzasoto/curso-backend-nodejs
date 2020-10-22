const fs = require('fs');
const file = fs.createWriteStream('./big');

for (let i = 0; i <= 1e5 ; i++) {
    file.write('Esto es una cadena de texto muy larga, bastante larga, muy pero muy laaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaargaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
}

file.end();
