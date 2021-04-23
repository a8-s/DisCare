const http = require('http');
const discord=require('discord.js')
const express = require('express');
const app=express();

const hostname = 'localhost';
const port = 3000;
const client= new discord.Client();
client.login(client_id);

//Webhook message sender
const Discord= require('discord.js')
const webhook= new Discord.WebhookClient('','')


webhook.send('test2')




//socket message reader
const websocket=require('ws')
const ws=new websocket( '')
let interval=0; 

payload=    {

    op:2,
    d: {
        token:token, 
        intents:513, 
        channel_id: "830396909385547819",
        properties: {

            $os:'windows',
            $browser:'chrome', 
            $device:'chrome', 
        }


    }
}

ws.on('open', function open(){

    ws.send(JSON.stringify(payload))
})
ws.on('message', function incoming(data){
    let payload=JSON.parse(data)
    const {t, event, op,d}= payload; 

    switch (op){
        case 10:
            const {heartbeat_interval}=d;
            interval = heartbeat(heartbeat_interval);
            break;
    }


    switch (t){
        case 'MESSAGE_CREATE':
            let author = d.author.username;
            let content = d.content
            if (d.channel_id=="")
                console.log(`${author}:${content}`)

            break;

    }

})


const heartbeat= (ms)=> {
        return setInterval(() =>{
            ws.send(JSON.stringify({
                op:1, 
                d:{
                    "channel_id": "",
                }
            
            
            
            }))

            
        }, ms)
        
 }


*/



//Local app 
app.get('/',(req,res) => {
    res.send('Test');


});

app.listen(port, () =>{

    console.log('success');
});

//Connection to Discord 
client.on('ready', () => {

    console.log("logged in ")

});

client.on('messasge', message => {

    if(message.author.bot) return;
    if(message.content.toLowerCase() === '?listen') {
        message.channel.send('bot is collecting messages');
        let filter = m => !m.author.bot;
        let collector= new discord.MessageCollector(message.channel, filter);
        collector.on('collect', (message,col)  => {
            console.log("Collected message:" + message.content);

        });


    }
})

*/