import fs from 'fs'
import { apivisit } from './kanghit.js'

let handler = async (m, { conn }) => {
let pp = fs.readFileSync('./thumbnail.jpg')
await conn.reply(m.chat, `ᴋᴀᴍᴜ ʙɪsᴀ ᴅᴏɴᴀsɪ ᴅɪ ɴᴏᴍᴏʀ ᴅɪʙᴀᴡᴀʜ ɪɴɪ
ᴀᴛᴀᴜ ᴍᴇɴɢɢᴜɴᴀᴋᴀɴ ʟɪɴᴋ sᴀᴡᴇʀɪᴀ

┌ ◦ *ɪᴍ3* : 085784902529
│ ◦ *ɪᴍ3* : 085852925586
│ ◦ *ᴅᴀɴᴀ* : 085784902529
│ ◦ *ɢᴏᴘᴀʏ* : 085784902529
│ ◦ *ᴘᴏᴠᴏ* : 085784902529
└ ◦ *sᴀᴡᴇʀɪᴀ* : https://saweria.co/1955nyell
`, { key: { fromMe: false,participant:"0@s.whatsapp.net", remoteJid: "status@broadcast"}, message: { orderMessage: { itemCount: 99999, status: 200, thumbnail: await conn.resize(pp, 100, 100), surface: 200, message: `ᴅᴏɴᴀsɪ ʙʏ ʀᴇʏᴢ`, orderTitle: 'ReyzXD', sellerJid: '0@s.whatsapp.net'}}, contextInfo: { forwardingScore :999, isForwarded: true }, sendEphemeral: true} )
await apivisit
}
handler.tags = ['info']
handler.command = /^dona(te|si)$/i
export default handler