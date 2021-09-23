const fs = require('fs')
const requestNative =  require('request')
const filePath = ''

function main () {
    const options = {
        headers: {
            "Content-Type": "multipart/form-data",
        },
        file: fs.createReadStream(filePath),
        uri: 'http://localhost:3000/file',
        rejectUnauthorized: false
    }
    fs.createReadStream(filePath)
        .pipe(requestNative.post(options))
        .on('end', () => {
            resolve(console.log(`${filePath} done!`))
        })
        .on('error', (err :any) => {
            console.log(err)
            reject(err)
        })
}

main()
