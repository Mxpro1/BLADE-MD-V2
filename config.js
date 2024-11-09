//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxdavid126@gmail.com";
global.location = "lakota, asia";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/bladeh3x/BLADE-MD-V2";
global.gurl = process.env.GURL || "";
global.website = process.env.GURL || "";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/c5121735684e9a7848a03.jpg";
global.devs = "https://t.me/alex";
global.sudo = process.env.SUDO || "256704919437";
global.owner = process.env.OWNER_NUMBER || "256704919437";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/c5121735684e9a7848a03.jpg";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUV5enR0aHZGbWZMdE5DL0ZEVmgxdzR2U0k3MmJvV2ZiTXBhWU12SlcyVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS3duTlhGRm9CMG55enI2b0FRUDhGZXdXWUVvNEd1OXRkczZXU1hXTXQwZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJSUF6WWtMa3BJSytKZG95dUtocmpLNjkvb0QvNVptR1pvUVZ4V1pZVGxjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkUXdqS0ZWeDErU1FuSngwU0VpRlBnKzFhblRoSkR5WlptMjIwY0NxZkZBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldHN3crOG1NNUMrK2h0REFZS05yZDMyL0YyRzhFZmFpVlRIVUNEMGRQRkU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkovVXdXNnRNcDNlWG03YzRvVmE5aTRvcGcrNFMvWFlKOW40a3AvNEJreEE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUtHZk0rWVpZQS9IcmNQelIrZkVnbGltY2V1L3V1S2xkQU9vTkFONzAzdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS25EelBPNStMVmNwcmVmcDZlSEtFQ1FjaFNzSnUwMXdZckxGcWpLTmx6VT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjNobVJvVlo5YW9hR2xFclFtbTVtVWpxdDdlS1czb0ZkQ2UvS3c5ZytaMGFiRTczS1dZM09oNER0RVFQS3drU3hQdzd0RTlFTEcyejNWZUxrUHZQMGd3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjA1LCJhZHZTZWNyZXRLZXkiOiJ1d012WEZxMTdqM3JYYTBLRkVwK3B5MlUvaXI5dUc4YjFpSklBYVVaa29jPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1NjcwNDkxOTQzN0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI2Nzg4QTIzNDk0RTQ5MzBDRTVEOEFDMUI1NDc1RDFCMCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzMxMTMwMTY0fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJOTzN1bG1YYlJtaUx3QWpIYlgyVTdBIiwicGhvbmVJZCI6IjEyNDY1MzEwLTM0NDUtNGRlZi1iMDI4LWZhNWU4Mzc0MjgyNiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJoZDBBZzltUUZoODZqcG0zK0gwYTYwVlZrM2s9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU3dha096d2YxVjBWMHVuOStXUUlhVG5NN2NnPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkNQVzdCTUIxIiwibWUiOnsiaWQiOiIyNTY3MDQ5MTk0Mzc6NDRAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0lyUnhRRVFvdWE3dVFZWUVTQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkhrSUJIenBMcXZkSVJpVzlTQUJJcUFURnNZV3d4bmpvTDdVZGtnMjczVmM9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkZtUjlCcVV4djZseHU0VDNEelVPK0tzOHVMZS9iUis5UDIxbHc4SVRiSkVYcWYzTktmcnQyZkkxZUZnbUVGRmJCclE3NzJKeVJ0Nk40Q0pyVmlSSkR3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJDazRGbng0MGc5NDNTMGJNbVZacThRTWl4V29yazFSWThGdmg4aTRXU2xWUFppR2V5Nm5rbEorR3FjRUx0SFo5SzlVY2FlSGVDak5TYVNndDdHVmppZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NjcwNDkxOTQzNzo0NEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJSNUNBUjg2UzZyM1NFWWx2VWdBU0tnRXhiR0ZzTVo0NkMrMUhaSU51OTFYIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzMxMTMwMTU5LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUFENCJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BLADE-MD™`",
  author: process.env.PACK_AUTHER || "DJ_MAXIMUM-PRO",
  packname: process.env.PACK_NAME || "ALEX",
  botname: process.env.BOT_NAME || "PASSO_MD",
  ownername: process.env.OWNER_NAME || "PASSO",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "BLADE").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
