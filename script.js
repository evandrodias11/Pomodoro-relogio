var cronometro,
    s = document.getElementById("segundos") ,
    m = document.getElementById("minutos"),
    contador_s=0 , 
    contador_m;

function carga(){  document.getElementById('start').disabled=true;
  var opc=false;  
  contador_m=document.getElementById("session").innerHTML;
  s.innerHTML=":00";  
  cronometro = setInterval(
    function(){      
      if(contador_m==0 && contador_s==0){
        opc= (opc==false)? true:false;        
        contador_m = (opc==false)? document.getElementById("session").innerHTML : document.getElementById("break").innerHTML;        
      }      
      if(contador_s==00){
        contador_m--;
        contador_s=59;
      }      
      m.innerHTML=(contador_m>9)? contador_m : "0"+contador_m;      
      s.innerHTML=(contador_s>9)? ":"+contador_s : ":0"+contador_s;      
      contador_s--;      
      var dur=0;
      if(opc==false){
        dur=(parseInt(document.getElementById("session").innerHTML)*60);
        $("#figure").css("-webkit-animation-name", "movp");
        $("#figure").css({"animation-name":"movp"}); 
        $("#figure").css('-webkit-animation-duration',dur+'s');
        $("#figure").css('animation-duration',dur+'s');
        }else{   
          dur=parseInt(document.getElementById("break").innerHTML)*60;
          $("#figure").css("-webkit-animation-name", "movm");
          $("#figure").css("animation-name", "movm");
          $("#figure").css('-webkit-animation-duration',dur+'s');
        $("#figure").css('animation-duration',dur+'s');
        }        
    },1000);
}

function reset(){
  contador_s=0;
  contador_m=0;
  m.innerHTML="00";
  s.innerHTML=":00";
  clearInterval(cronometro);
  $("#figure").css("-webkit-animation-name", "");
        $("#figure").css({"animation-name":""}); 
        $("#figure").css('-webkit-animation-duration','0');
        $("#figure").css('animation-duration','0');  
  document.getElementById('start').disabled=false;
}

function bm(){ 
  reset();
  if(document.getElementById("break").innerHTML>1){
    document.getElementById("break").innerHTML--;
  }  
}
function bp(){ 
  reset();
  if(document.getElementById("break").innerHTML<25){
    document.getElementById("break").innerHTML++;
  }  
}
function sm(){ 
  reset();
  if(document.getElementById("session").innerHTML>1){
    document.getElementById("session").innerHTML--;
  }  
}

function sp(){ 
  reset();
  if(document.getElementById("session").innerHTML<25){
    document.getElementById("session").innerHTML++;
  }  
}