let number = 0
setTimeout(()=>{
    document.getElementsByClassName("followers")[0].innerText= "Followers in Instagram"

},6000)
setInterval(()=>{
    if(number<1000){
        number++;
        document.getElementsByClassName("counter")[0].innerText=number

    }
},5)
