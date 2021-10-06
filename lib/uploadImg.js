const axios = require('axios')
const cheerio = require('cheerio')
const FormData = require('form-data')

/** 
 * Upload image to url
 * Base url https://ofiles.herokuapp.com/
 * param {string} path
*/

const upImages = (path) => new Promise((resolve, reject) => {
    const fd = new FormData()
    fd.append('myImage', path, `${Date.now()}.jpg`)
    axios({
            method: 'POST',
            url: 'https://ofiles.herokuapp.com/upload',
            data: fd,
            headers: {
                'user-agent': 'Mozilla/5.0 (Linux; Android 9; Redmi 6A) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.99 Mobile Safari/537.36',
                'content-type': `multipart/form-data; boundary=${fd._boundary}`
            }
        })
        .then(({ data }) => {
            const $ = cheerio.load(data)
                resolve({
                url: 'https://ofiles.herokuapp.com/' + $("div.container > img").attr("src").replace(' ', '').replace('  ', '').replace(/\\/g, '/')
            })
        })
})
module.export = upImages 