const fs = require('fs')
const requestNative =  require('request')

function main () {
    return new Promise((resolve, reject) => {
        const options = {
            url: '',
        }
        requestNative(options)
            .on("error", (error) => {
                reject(error)
            })
            .pipe(fs.createWriteStream(filePath))
            .on("finish", () => {
                resolve(filePath)
            })
    })
}

main()
