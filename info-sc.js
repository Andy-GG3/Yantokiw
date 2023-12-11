import { promises } from 'fs'
import { join } from 'path'

let handler = async function (m, { conn, __dirname }) {
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
  
m.reply(`
*≡ SCRIPT BOT*

▢ _*𝐬𝐜𝐫𝐢𝐩𝐭 𝐛𝐨𝐭 ʙʏ ᴀɴᴅʏ*_
➠ ᴏᴡɴᴇʀ :  ᴀɴᴅʏ
➠ ʏᴏᴜᴛᴜʙᴇ : FOZEX 999
`.trim())
    
}

handler.help = ['script']
handler.tags = ['main']
handler.command = ['sc', 'script'] 

export default handler