//beggining of dmg area
  function KDmg (){
 var kdmg =  parseInt(document.getElementById("atk_k").value);  
 var ddef = parseInt(document.getElementById("def_d").value); 
return kdmg - ddef;
  }
  function DDmg () {
var ddmg =  parseInt(document.getElementById("atk_d").value);  
 var kdef = parseInt(document.getElementById("def_k").value); 
 return ddmg - kdef; 
  }
  //end of dmg area 

  //beggining of randomizer area 

function Krandom(){
 return Math.floor(Math.random() * 100) + 1 ;
}    

function Drandom (){
  return Math.floor (Math.random() * 100) + 1 ;
}

// end of randomizer area


// begginging of dodge chance area   
function Kctd () {
   var ctd_K = parseInt (document.getElementById("ctd_k").value); 
   var Kh = parseInt (document.getElementById("hp_d").value);
   var one  = 100 - ctd_K ; 
   var two = 100 * one; 
   var three = two / 100 ; 
   var result ; 
     
 if (Krandom() >= three) {
        result = 0 ; 
   }  else {
   result =  Kh - DDmg(); 
   }
    
return result ;
}



function Dctd () { 

 var ctd_D = parseInt (document.getElementById("ctd_d").value); 
 var Dh = parseInt (document.getElementById("hp_k").value);
 var one = 100 - ctd_D ; 
 var two = 100 * one ; 
 var three = two / 100; 
 var result; 

      
 if (Drandom() > three) {
   result = 0 ; 
          }  else {
   result =  Dh - KDmg(); 
   }
    
return result ;
}

// end of chance area 



console.log("I love Darina");
document.getElementById("demo").innerHTML = Dctd();
