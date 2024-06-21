const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349164188304";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_03_20_06_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTI1LFxuICAgICAgICA5MixcbiAgICAgICAgMjIwLFxuICAgICAgICAzOSxcbiAgICAgICAgNDMsXG4gICAgICAgIDY4LFxuICAgICAgICA0MCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgOTQsXG4gICAgICAgIDY4LFxuICAgICAgICA0OCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNixcbiAgICAgICAgMjQzLFxuICAgICAgICAyMjksXG4gICAgICAgIDIwOCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMTksXG4gICAgICAgIDY3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDUsXG4gICAgICAgIDc0LFxuICAgICAgICAxOSxcbiAgICAgICAgMTU5LFxuICAgICAgICA3MyxcbiAgICAgICAgNTgsXG4gICAgICAgIDExLFxuICAgICAgICAzNCxcbiAgICAgICAgOTQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNixcbiAgICAgICAgMTgxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDQzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNTAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTE5LFxuICAgICAgICA1NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTAxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNDAsXG4gICAgICAgIDc1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDc4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDc4LFxuICAgICAgICAyMDksXG4gICAgICAgIDY3LFxuICAgICAgICA1NCxcbiAgICAgICAgNTYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTk3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDM4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTQyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjI3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTM2LFxuICAgICAgICA4LFxuICAgICAgICAyNDksXG4gICAgICAgIDk4LFxuICAgICAgICA3OSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjEsXG4gICAgICAgIDU0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNyxcbiAgICAgICAgNCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDAsXG4gICAgICAgIDExLFxuICAgICAgICAzMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTEwLFxuICAgICAgICA3MSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEyNixcbiAgICAgICAgNzEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTYsXG4gICAgICAgIDg4LFxuICAgICAgICA4MyxcbiAgICAgICAgNzIsXG4gICAgICAgIDEwNixcbiAgICAgICAgODIsXG4gICAgICAgIDczLFxuICAgICAgICA2MixcbiAgICAgICAgNTQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjI3LFxuICAgICAgICAyMTksXG4gICAgICAgIDI0NixcbiAgICAgICAgMTg1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNDIsXG4gICAgICAgIDIwLFxuICAgICAgICAxNyxcbiAgICAgICAgOSxcbiAgICAgICAgNDQsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTE3LFxuICAgICAgICA4MyxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNDUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDU1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNDAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDcwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAzOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2NyxcbiAgICAgICAgODUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMSxcbiAgICAgICAgODYsXG4gICAgICAgIDUyLFxuICAgICAgICAxODksXG4gICAgICAgIDI1MyxcbiAgICAgICAgOCxcbiAgICAgICAgMzAsXG4gICAgICAgIDcxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjExLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNTgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMzUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTg4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNzksXG4gICAgICAgIDIxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTI2LFxuICAgICAgICA3NSxcbiAgICAgICAgMTg4LFxuICAgICAgICA1MCxcbiAgICAgICAgMjksXG4gICAgICAgIDY4LFxuICAgICAgICA0MCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTY4LFxuICAgICAgICA1MCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDgzLFxuICAgICAgICA1NSxcbiAgICAgICAgMTk5LFxuICAgICAgICA5NCxcbiAgICAgICAgMTkzLFxuICAgICAgICA1OCxcbiAgICAgICAgMjEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgOSxcbiAgICAgICAgMTUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTExLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjQyLFxuICAgICAgICAxMzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE5MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJGR1FrdzIra3ZlZlRna2ZLdlM4d0dHa2JvRmFFZzJJVlBMZUcvaUNpTTE4PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJGRnBwY0lmV1QxUzcxWU9uSHo0Q0R3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjdiMzQyNjFiLTIyNjQtNDRlZS1iMDIwLTA3MTMwYjQwYmY3MVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyOSxcbiAgICAgIDIwNCxcbiAgICAgIDExLFxuICAgICAgMTAsXG4gICAgICAyMjUsXG4gICAgICAyMDQsXG4gICAgICAyNTEsXG4gICAgICA4NSxcbiAgICAgIDE0OSxcbiAgICAgIDE1LFxuICAgICAgMTQ4LFxuICAgICAgMjM0LFxuICAgICAgNTEsXG4gICAgICA1MSxcbiAgICAgIDEyNCxcbiAgICAgIDE4NixcbiAgICAgIDE2NixcbiAgICAgIDUsXG4gICAgICAxODYsXG4gICAgICAxMDVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjE1LFxuICAgICAgMTcyLFxuICAgICAgMjI4LFxuICAgICAgMjUwLFxuICAgICAgMTU4LFxuICAgICAgOTMsXG4gICAgICA5NixcbiAgICAgIDcxLFxuICAgICAgMjE0LFxuICAgICAgMjEyLFxuICAgICAgMTI2LFxuICAgICAgMjQzLFxuICAgICAgMTEyLFxuICAgICAgNjcsXG4gICAgICAxMjQsXG4gICAgICAyMDcsXG4gICAgICA0MSxcbiAgICAgIDE3OCxcbiAgICAgIDE5NixcbiAgICAgIDE5OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJCTUc2OFZCWVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTE2NDE4ODMwNDo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMDE1MTE3MTE4MTM2OTc6NkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNM003Y0lGRVBIaTA3TUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjVzeElDZFN5MUY3TWNWY2U3VTZtK282Q2VValM0TlYvNEV6OWkxMkNwVk09XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiWnhRc0RjVmp2WUxBNDRXVjh6b0Z6a2IxR0wzeWlnNFc3MFlzdERNV2hzT0dPMVN0dyt3TEFsT3JobWdKRlpzazdVNDhkV2I3eGlTVWJwOW11RVlKRFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwicnFYYUR2Z3FLV3kxVW4wN2hCdDI2aEFNMWU1OHVsUklWR3kvZEZ6QjBtTm8yWHNEZFNMcUtPOVZvMXB0RG82TGFlczQ1eWgzRlZkQjRrMEE5VzBWZ3c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTE2NDE4ODMwNDo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgODNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxODk0MDAyMlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
