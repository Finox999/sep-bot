const {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange
} = require('@adiwajshing/baileys')
const fs = require('fs')
const { banner, start, success } = require('./lib/functions')
const { color } = require('./lib/color')

require('./index.js')
nocache('./index.js', module => console.log(`${module} abis di update`))
require('./main.js')
nocache('./main.js', module => console.log(`${module} abis di update`))
console.log('KONTOL BAPAK KAU PECAH NGENTOD')
const starts = async (hexa = new WAConnection()) => {
hexa.version = [2, 2119, 6]
    hexa.logger.level = 'warn'
    console.log(banner.string)
    hexa.on('qr', () => {
        console.log(color('[','white'), color('!','red'), color(']','white'), color(' Scan bang'))
    })

    fs.existsSync('./session.json') && hexa.loadAuthInfo('./session.json')
    hexa.on('Berhasil nyambung tod', () => {
        start('2', 'Lagi konek,sabar ya')
    })
    hexa.on('Open', () => {
        success('2', 'Berhasil menyambung ngentot')
    })
    await hexa.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./session.json', JSON.stringify(hexa.base64EncodedAuthInfo(), null, '\t'))

    hexa.on('chat-update', async (message) => {
        require('./index.js','./main.js')(hexa, message)
    })
}

	
/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
function nocache(module, cb = () => { }) {
    console.log('𝑺𝑬𝑳𝑭 𝑩𝑶𝑻', `'${module}'`, '𝑩𝒀 - 𝑭𝑰𝑵𝑶')
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}

/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}

starts()
