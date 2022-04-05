/**


   * Create By Dika Ardnt.


   * Contact Me on wa.me/6288292024190


   * Follow https://github.com/DikaArdnt


*/





const fs = require('fs')


const chalk = require('chalk')





// Website Api


global.APIs = {


	zenz: 'https://zenzapi.xyz',


}





// Apikey Website Api


global.APIKeys = {

'https://zenzapi.xyz': 'sanzychan01'

}





// Other

global.namabot = 'ZeeBot'

global.namaowner = 'Zee'

global.myweb = 'Error'


global.owner = [ '6282174006859' ]


global.premium = ['6282174006859']


global.packname = 'Zee'


global.author = 'WhatsApp Bot'


global.sessionName = 'hisoka'


global.prefa = ['','!','.','🐦','🐤','🗿']


global.sp = '⭔'


global.mess = {


    success: '✓ Success',


    admin: 'Fitur Khusus Admin Group!',


    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',


    owner: 'Fitur Khusus Owner Bot',


    group: 'Fitur Digunakan Hanya Untuk Group!',


    private: 'Fitur Digunakan Hanya Untuk Private Chat!',


    bot: 'Fitur Khusus Pengguna Nomor Bot',


    wait: 'Proses...',


    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',


}


global.limitawal = {


    premium: "Infinity",


    free: 200000


}


global.thumb = fs.readFileSync('./lib/hisoka.jpg')


global.chatDB = JSON.parse(fs.readFileSync('./chatsDB.js'))


let file = require.resolve(__filename)


fs.watchFile(file, () => {


	fs.unwatchFile(file)


	console.log(chalk.redBright(`Update'${__filename}'`))


	delete require.cache[file]


	require(file)


})
