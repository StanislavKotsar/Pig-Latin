
function translatePigLatin(str) {
  
  var firstl = str[0].toLowerCase();
  var i=0; 
  if(firstl==="a"||firstl==="e"||firstl==="i"||firstl==="o"||firstl==="u"||firstl==="y"){
  str=str.concat("way");  
  }else{ 
    while(i<str.length){
    str=str.concat(firstl);
    str=str.substr(1);
    firstl= str[0];
      if(firstl==="a"||firstl==="e"||firstl==="i"||firstl==="o"||firstl==="u"||firstl==="y"){
    
  str=str.concat("ay");
        break;
  }
    i++;
  } 
   
  }
  
  
  return str;
}

translatePigLatin("consonant");