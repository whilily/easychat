//const ws = new WebSocket("ws://localhost:8000/ws")


function servmsg(msg,parent,from_server = false,red = false){
    var newmsg = document.createElement("li");
    newmsg.textContent = msg;
    if(from_server){newmsg.classList.add("server_msg");}
    if(red){newmsg.classList.add("red_msg");}
    parent.appendChild(newmsg);
}

//get date
const now = new Date();
//get log
const chatlist = document.getElementById("chatlist");
//get input
const ichat = document.getElementById("ichat");

//welcome message
servmsg(`Successfully launched at ${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}.`,chatlist,true);
servmsg("Note: Do not forget that this chat is not secure; You must NOT send any private message.",chatlist,true);
servmsg("Have a nice chat.    :)",chatlist,true)

//focus on input bar
ichat.focus();

ichat.addEventListener("keydown",e => {
    if(e.key == "Enter" || e.key == "Return"){
        servmsg(ichat.value,chatlist);
        ichat.value = "";
        e.preventDefault();
    }
});