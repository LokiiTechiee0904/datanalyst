require("dotenv").config()

const express = require("express")
const bodyParser = require("body-parser")

const sendMessage = require("./services/whatsappService")
const mainMenu = require("./utils/menu")

const app = express()

app.use(bodyParser.json())

app.post("/webhook", async(req,res)=>{

const message =
req.body.entry?.[0]?.changes?.[0]?.value?.messages?.[0]

if(!message){
return res.sendStatus(200)
}

const phone = message.from
const text = message.text.body

if(text.toLowerCase()=="hi"){

await sendMessage(phone,mainMenu())

}

if(text=="1"){
await sendMessage(phone,"Enter 25rs batter count")
}

if(text=="2"){

await sendMessage(phone,
"Sales started\n\nSend\n1 for 25rs batter\n2 for 35rs batter")

}

res.sendStatus(200)

})

app.listen(3000,()=>{
console.log("DOSA BATTER server running")
})