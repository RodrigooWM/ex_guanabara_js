
setInterval(alterar,1000)//1000 milisegundos, representa 1 segundo.

function alterar(){
var msg = window.document.getElementById('msg');
var foto = window.document.getElementById('foti');
var data = new Date();
var hora = data.getHours();
msg.innerHTML=`Agora são ${hora} horas e ${data.getMinutes()} minutos e ${data.getSeconds()} segundos`;
if (hora>=5 && hora<12){  
    foto.src= 'img/dia.png'
    window.document.getElementById('fundo').style.backgroundColor='yellow'
}
else if (hora>=12 && hora<18){  
    foto.src='img/tarde.png'  
    window.document.getElementById('fundo').style.backgroundColor='orange' 
}
else if (hora>=18 && hora<24){       
    foto.src="img/noite.png"
    window.document.getElementById('fundo').style.backgroundColor='#696969'
}
else{   
    foto.src="img/madruga.png"
    window.document.getElementById('fundo').style.backgroundColor='pink'
}
}