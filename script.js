body = document.getElementsByName('body')
themeicon = document.querySelector('.themeicon')
a = document.getElementsByTagName('a')


function printSpan(intro, message, speed){
    var i=0;
    var interval = setInterval(function(){
        document.getElementById(intro).innerHTML+=message.charAt(i);
        i++;
        if(i>message.length){
            clearInterval(interval);
        }
    }, speed);
}
printSpan( "intro", "Hello, I am Cartwright.", 200);

function printCon(about, message, speed){
    var i=0;
    var interval = setInterval(function(){
        document.getElementById(about).innerHTML+=message.charAt(i);
        i++;
        if(i>message.length){
            setTimeout(function(){
                var j=message.length;
                var deleteInterval = setInterval(function(){
                    var newMessage = message.substring(0,j);
                    document.getElementById(about).innerHTML=newMessage;
                    j--;
                    if(j<0){
                        clearInterval(deleteInterval);
                        printCon(about,message,speed);
                    }
                }, speed);
            }, 0); // add delay before deleting text
            clearInterval(interval);
        }
    }, speed);
}
printCon( "about", "I'm a DIGITAL MARKETER. ", 90);

