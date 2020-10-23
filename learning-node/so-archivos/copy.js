const fs = require('fs');

fs.copyFile('naranja.txt', 'limon.txt', function (err) {
    if (err) {
        return console.log(err);
    }

    console.log('El archivo fue copiado exitosamente');
});
