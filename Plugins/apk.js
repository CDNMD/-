const config = require('../config')
const fg = require('api-dylux');
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
const apkdl = require('../lib/apkdl')

cmd({
    pattern: "apk",
    alias: ["app","playstore"],
    react: "💫",
    desc: "Download apk from playstore.",
    category: "download",
    use: '.apk <app name>',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!q) return await conn.sendMessage(from , { text:'🚩 *Where is the app name !!*' }, { quoted: mek } )        
const data2 = await apkdl.search(q)
const dat2a = data2
if (dat2a.length < 1) return await conn.sendMessage(from, { text: '🚩 *Not found !!*'}, { quoted: mek } )
const data = await apkdl.download(dat2a[0].id)
let listdata = `乂 ＡＰＫ ＤＯＷＮＬＯＡＤＥＲ
*◦ Name :* ${data.name}
*◦ Developer :* ${data.package}
*◦ Last update :* ${data.lastup}
*◦ Size :* ${data.size}`
await conn.sendMessage(from, { image: { url: data.icon }, caption: listdata }, { quoted: mek })
let sendapk = await conn.sendMessage(from , { document : { url : data.dllink  } , mimetype : 'application/vnd.android.package-archive' , fileName : data.name + '.' + 'apk',caption: '' } , { quoted: mek })
await conn.sendMessage(from, { react: { text: '✅', key: sendapk.key }})
} catch (e) {
reply('*Error !!*')
console.log(e)
}
})
