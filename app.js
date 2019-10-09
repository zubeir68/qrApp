const qrcode = require('qrcode');
const fs = require('fs');
const opn = require('opn');

run().catch(error => console.error(error.stack));

async function run() {
    const res = await qrcode.toString('http://asyncawait.net');
    
    if(res) {
        console.log(res);
        
        opn(res);
    }
    await fs.writeFileSync('./qr.html', `<img src"${res}">`);
    console.log('Wrote to ./qr.html');
    
}