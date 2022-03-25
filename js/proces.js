   
function rook(x, y, boolean){
document.getElementById (numbLetters [x]+y).classList.add("yellow");
  //  console.log (x,y)
  //  var arrId=[]
    
    for (let i=x;i<7;){
        i++;
      let korId= numbLetters[i]+y;      let cell= document.getElementById(korId);
        if(cell.innerText == ""){
      cell.classList.add("green")
      // arrId =arrId.concat( korId);
       }
       else{
      let colorCh= (cell.innerText.charCodeAt(0)>=9818)? 1:0;
        if (boolean != colorCh){
          cell.classList.add("red") 
           break 
        } else{
            cell.classList.  add("protected"+boolean);break
        }
      }
    };
    for (let i=x;i>0;) {
        i--;
        let korId= numbLetters[i]+y;      let cell= document.getElementById(korId);
        if(cell.innerText == ""){
      cell.classList.add("green")
      // arrId =arrId.concat( korId);
       }
       else{
      let colorCh= (cell.innerText.charCodeAt(0)>=9818)? 1:0;   // console.log(colorCh)
        if (boolean != colorCh){
          cell.classList.add("red") 
           break 
        }
        else{
            cell.classList.  add("protected"+boolean);
        break}
      }
    };
    for (let i=y;i<8;){
    i++;
    let korId= numbLetters[x]+i;      let cell= document.getElementById(korId);
        if(cell.innerText == ""){
      cell.classList.add("green")
      // arrId =arrId.concat( korId);
       }
       else{
      let colorCh= (cell.innerText.charCodeAt(0)>=9818)? 1:0;    //   console.log(colorCh)
        if (boolean != colorCh){
          cell.classList.add("red") 
           break 
        }
        else{
            cell.classList.  add("protected"+boolean);
        break}
      }
    };  
    for (let i=y;i>1;){
    i--;
    let korId= numbLetters[x]+i;      let cell= document.getElementById(korId);
        if(cell.innerText == ""){
      cell.classList.add("green")
      // arrId =arrId.concat( korId);    
       } else{
      let colorCh= (cell.innerText.charCodeAt(0)>=9818)?1:0;
      // console.log(colorCh)
        if (boolean != colorCh){
          cell.classList.add("red") 
           break 
        }
        else{
            cell.classList.  add("protected"+boolean);
         break}
      }
    };  

};//function rook

function elephant(x, y, boolean){
document.getElementById (numbLetters [x]+y).classList.add("yellow");
   // console.log (x,y)
   // var arrId=[]
	for (let  i=x,d=y;i<7&&d<8;){
        i++;d++;
        let korId= numbLetters[i]+d;     
		let cell= document.getElementById(korId);
        if(cell.innerText == ""){
			cell.classList.add("green")
      // arrId =arrId.concat( korId);
       }
       else{
		let colorCh= (cell.innerText.charCodeAt(0)>=9818)? 1:0;  // console.log(colorCh)
        if (boolean != colorCh){
          cell.classList.add("red") 
           break 
        }
        else{
            cell.classList.  add("protected"+boolean);
			break}
		}
    };
    for (let i=x,d=y;i>0&&d>1;) {
        i--;  d--;
        let korId= numbLetters[i]+d;      let cell= document.getElementById(korId);
        if(cell.innerText == ""){
      cell.classList.add("green")
     //  arrId =arrId.concat( korId);
       }
       else{
      let colorCh= (cell.innerText.charCodeAt(0)>=9818)? 1:0;   //    console.log(colorCh)
        if (boolean != colorCh){
          cell.classList.add("red") 
           break 
        }
        else{ cell.classList.  add("protected"+boolean);
       break}
      }
    };
    for (let i=x,d=y;i<7&&d>1;){
    i++; d--;
    let korId= numbLetters[i]+d;      let cell= document.getElementById(korId);
        if(cell.innerText == ""){
      cell.classList.add("green")
      // arrId =arrId.concat( korId);
       }
       else{
      let colorCh= (cell.innerText.charCodeAt(0)>=9818)? 1:0;    //   console.log(colorCh)
        if (boolean != colorCh){
          cell.classList.add("red") 
           break 
        }
        else{ cell.classList.  add("protected"+boolean);
       break}
      }
    };  
   for (let i=x,d=y;i>0&&d<8;){
    i--; d++;
    let korId= numbLetters[i]+d;      let cell= document.getElementById(korId);
        if(cell.innerText == ""){
      cell.classList.add("green")
       //arrId =arrId.concat( korId);    
       } else{
      let colorCh= (cell.innerText.charCodeAt(0)>=9818)? 1:0;   //    console.log(colorCh)
        if (boolean != colorCh){
          cell.classList.add("red") 
           break 
        }
        else{ cell.classList.  add("protected"+boolean);
       break}
      }
    };  

};//end function elephant

function queen(x,y,boolean ){
document.getElementById (numbLetters [x]+y).classList.add("yellow");
    rook(x,y,boolean );
    elephant (x,y,boolean );
};//end function queen

function pawn(x,y,boolean ){
 document.getElementById (numbLetters [x]+y).classList.add("yellow");
   for(let i=1;i<=2;i++){
       // когда пешка достигла края
        if ((y==8)||(y==1)) {
document.getElementById (numbLetters [x]+y). innerHTML= (boolean==0)?"&#x2655":"&#x265B";
        break}

        let elY= (boolean ==0)?(y*1+i):(y*1-i);
    let korId = numbLetters[x]+elY;
  //  console.log(korId )
        let cell= document.getElementById (korId);
      
      if ((i<2)&&(x!=7)){ 
      //R,L - right,left view white
        let cellR= document.getElementById (numbLetters [x+1]+elY);
          if (cellR.innerText !=""){
        let colorChR= (cellR.innerText.charCodeAt(0)>=9818)? 1:0;      // console.log(colorChR)
            if (boolean!=colorChR){
         cellR.classList.add("red") }
          }else{ cellR.classList.  add("protected"+boolean);
       }
      }
      if ((i<2)&&(x!=0)){
        let cellL= document.getElementById (numbLetters [x-1]+elY);
        if (cellL.innerText !=""){
            let colorChL= (cellL.innerText.charCodeAt(0)>=9818)? 1:0;    //   console.log(colorChL);
          if (boolean!=colorChL){
         cellL.classList.add("red") 
          }else{ cellL.classList.  add("protected"+boolean);
           }
        }
      }
      if (cell.innerText ==""){
        cell.classList.add("green");
      }else{break}
      if ((y!=2&&boolean==0)||(y!=7&&boolean==1)){break  }
    };
};//end function pawn 

function horse(x,y,boolean ){
 document.getElementById (numbLetters [x]+y).classList.add("yellow");
    try{ let cell= document.getElementById (numbLetters [x+2]+(y*1+1));
     if (cell.innerText ==""){
     cell.classList.add("green")
     }else{
        let colorCh= (cell.innerText.charCodeAt(0)>=9818)? 1:0;    if(boolean != colorCh){
            cell.classList.add("red")
        }else{ cell.classList.  add("protected"+boolean);
       }
     }
   } catch(err){//console .log(err)
     };
   
   try{let cell= document.getElementById (numbLetters [x+2]+(y-1));
     if (cell.innerText ==""){
     cell.classList.add("green")
     }else{
        let colorCh= (cell.innerText.charCodeAt(0)>=9818)? 1:0;    if(boolean != colorCh){
            cell.classList.add("red")
        }else{ cell.classList.  add("protected"+boolean);
       }
     }
  }catch (err) {//console.log(err)
  };
  
   try{let cell= document.getElementById (numbLetters [x-2]+(y*1+1));
     if (cell.innerText ==""){
     cell.classList.add("green")
     }else{
        let colorCh= (cell.innerText.charCodeAt(0)>=9818)? 1:0;    if(boolean != colorCh){
            cell.classList.add("red")
        }else{
            cell.classList.  add("protected"+boolean);
        }
     }
  }catch (err) {//console.log(err)
  };
  
   try{let cell= document.getElementById (numbLetters [x-2]+(y-1));
     if (cell.innerText ==""){
     cell.classList.add("green")
     }else{
        let colorCh= (cell.innerText.charCodeAt(0)>=9818)? 1:0;    if(boolean != colorCh){
            cell.classList.add("red")
        }else{ cell.classList.  add("protected"+boolean);
       }
     }
  }catch (err) {//console.log(err)
  };
  
   try{let cell= document.getElementById (numbLetters [x+1]+(y*1+2));
     if (cell.innerText ==""){
     cell.classList.add("green")
     }else{
        let colorCh= (cell.innerText.charCodeAt(0)>=9818)? 1:0;    if(boolean != colorCh){
            cell.classList.add("red")
        }else{ cell.classList.  add("protected"+boolean);
       }
     }
  }catch (err) {//console.log(err)
  };
  
   try{let cell= document.getElementById (numbLetters [x+1]+(y-2));
     if (cell.innerText ==""){
     cell.classList.add("green")
     }else{
        let colorCh= (cell.innerText.charCodeAt(0)>=9818)? 1:0;    if(boolean != colorCh){
            cell.classList.add("red")
        }else{ cell.classList.  add("protected"+boolean);
       }
     }
  }catch (err) {//console.log(err)
  };
  
   try{let cell= document.getElementById (numbLetters [x-1]+(y*1+2));
     if (cell.innerText ==""){
     cell.classList.add("green")
     }else{
        let colorCh= (cell.innerText.charCodeAt(0)>=9818)? 1:0;    if(boolean != colorCh){
            cell.classList.add("red")
        }else{ cell.classList.  add("protected"+boolean);
       }
     }
  }catch (err) {//console.log(err)
  };
  
   try{let cell= document.getElementById (numbLetters [x-1]+(y-2));
     if (cell.innerText ==""){
     cell.classList.add("green")
     }else{
        let colorCh= (cell.innerText.charCodeAt(0)>=9818)? 1:0;    if(boolean != colorCh){
            cell.classList.add("red")
        }else{ cell.classList.  add("protected"+boolean);
       }
     }
  }catch (err) {//console.log(err)
  };
    
};//end function horse

function king (x,y,boolean ){
document.getElementById (numbLetters [x]+y).classList.add("yellow");
     try{
     let cell= document.getElementById (numbLetters [x+1]+(y));
     if (cell.innerText ==""){
     cell.classList.add("green")
     }else{
        let colorCh= (cell.innerText.charCodeAt(0)>=9818)? 1:0;    if((boolean != colorCh)&& (!cell.classList.contains("protected"+colorCh))){
            
            cell.classList.add("red")
        }else{ cell.classList.  add("protected"+boolean);
       }
     }
  }catch (err) {
  //console.log("End dosk")
  };
  try{
     let cell= document.getElementById (numbLetters [x+1]+(y*1+1));
     if (cell.innerText ==""){
     cell.classList.add("green")
     }else{
        let colorCh= (cell.innerText.charCodeAt(0)>=9818)? 1:0;    if((boolean != colorCh)&& (!cell.classList.contains("protected"+colorCh))){
            cell.classList.add("red")
        }else{ cell.classList.  add("protected"+boolean);
       }
     }
  }catch (err) {
  //console.log("End dosk")
  };
  try{
     let cell= document.getElementById (numbLetters [x]+(y*1+1));
     if (cell.innerText ==""){
     cell.classList.add("green")
     }else{
        let colorCh= (cell.innerText.charCodeAt(0)>=9818)? 1:0;    if((boolean != colorCh)&& (!cell.classList.contains("protected"+colorCh))){
            cell.classList.add("red")
        }else{ cell.classList.  add("protected"+boolean);
       }
     }
  }catch (err) {
  //console.log("End dosk")
  };
  try{
     let cell= document.getElementById (numbLetters [x-1]+(y*1+1));
     if (cell.innerText ==""){
     cell.classList.add("green")
     }else{
        let colorCh= (cell.innerText.charCodeAt(0)>=9818)? 1:0;    if((boolean != colorCh)&& (!cell.classList.contains("protected"+colorCh))){
            cell.classList.add("red")
        }else{ cell.classList.  add("protected"+boolean);
       }
     }
  }catch (err) {
  //console.log("End dosk")
  };
  try{
     let cell= document.getElementById (numbLetters [x-1]+(y));
     if (cell.innerText ==""){
     cell.classList.add("green")
     }else{
        let colorCh= (cell.innerText.charCodeAt(0)>=9818)? 1:0;    if((boolean != colorCh)&& (!cell.classList.contains("protected"+colorCh))){
            cell.classList.add("red")
        }else{ cell.classList.  add("protected"+boolean);
       }
     }
  }catch (err) {
  //console.log("End dosk")
  };
  try{
     let cell= document.getElementById (numbLetters [x-1]+(y-1));
     if (cell.innerText ==""){
     cell.classList.add("green")
     }else{
        let colorCh= (cell.innerText.charCodeAt(0)>=9818)? 1:0;    if((boolean != colorCh)&& (!cell.classList.contains("protected"+colorCh))){
            cell.classList.add("red")
        }else{ cell.classList.  add("protected"+boolean);
       }
     }
  }catch (err) {
  //console.log("End dosk")
  };try{
     let cell= document.getElementById (numbLetters [x]+(y-1));
     if (cell.innerText ==""){
     cell.classList.add("green")
     }else{
        let colorCh= (cell.innerText.charCodeAt(0)>=9818)? 1:0;    if((boolean != colorCh)&& (!cell.classList.contains("protected"+colorCh))){
            cell.classList.add("red")
        }else{ cell.classList.  add("protected"+boolean);
       }
     }
  }catch (err) {
  //console.log("End dosk")
  }; 
  try{
     let cell= document.getElementById (numbLetters [x+1]+(y-1));
     if (cell.innerText ==""){
     cell.classList.add("green")
     }else{
        let colorCh= (cell.innerText.charCodeAt(0)>=9818)? 1:0;    if((boolean != colorCh)&& (!cell.classList.contains("protected"+colorCh))){
            cell.classList.add("red")
        }else{ cell.classList.  add("protected"+boolean);
       }
     }
  }catch (err) {
  //console.log("End dosk")
  }  
};// end function king 

function clear(x=stepPers%2){
    for (i=0;i<elTd.length;i++){  
        elTd[i].classList.remove ("red", "undefined", "yellow","green","protected"+x);
    };
};//end function clear

function checked(boolean=stepPers%2){
      
 for(i=0;i<elTd.length;i++) { 
 
   if (elTd[i].innerHTML==""){continue}
   let codeAt= elTd[i].innerHTML.charCodeAt(0);
   if (codeAt==9818){ var bKid=elTd[i].id}
   if (codeAt==9812){var wKid=elTd[i].id}
   let xod=(codeAt>=9818)?1:0;
   let elX= numbLetters.indexOf(elTd[i].id[0]);
   libFun[codeAt](elX,elTd[i].id[1],xod);
 } ;
  
    let result = (boolean==0&&document.getElementById (wKid).classList.contains("red"))||(boolean ==1&& document.getElementById (bKid).classList.contains("red"))? "ТАК НЕЛЬЗЯ ВАМ ШАХ!":true;
    let warning0= (boolean==0&&document.getElementById (bKid).classList.contains("red"))? "Внимание шах черным!":"";
    let warning1= (boolean==1&&document.getElementById (wKid).classList.contains("red") )? 
"Внимание шах белым!":"";
    let allRes=[result, warning0, warning1];
    return allRes 
};//end function checked 

function bot(boolean =stepPers%2){
    
    for(el=0;el<elTd.length ;el++){
    clear();
   // console.log(el);
    let colorCh= elTd[el].innerText.charCodeAt(0)>=9818?1:0;
        if((elTd[el].innerHTML !="")&&(colorCh ==boolean)){ 
            let elX= numbLetters.indexOf(elTd[el].id[0]);
   libFun[elTd[el].innerHTML.charCodeAt(0)](elX,elTd[el].id[1],boolean );
           let clRed= document.getElementsByClassName("red");
		   let clGreen= document.getElementsByClassName("green");
           let clYellow= document.getElementsByClassName("yellow");      
   //сохранить ситуацию             
 for(let i=0;i< elTd.length;i++){
 elTd[i].classList.remove("protected1","protected0")
     saveCl[i]=elTd[i].classList[1];
  // console.log(i, saveCl[i], elTd[i].className )
 };
  
  for(let a=0;a<clRed.length;a++){
  clRed[a].innerHTML= clYellow[0].innerHTML ;
       clYellow[0].innerHTML="";
              clear();
             let result= checked();
              clear();
              if (result[0]==true){
              
  //востановить ситуацию               
  for(let i=0;i<elTd.length;i++){  
     elTd[i].innerHTML =save[i];
  // elTd[i].classList.add(saveCl[i]);
  };
                 return// console.log("Try "+clYellow[0].innerHTML+" on .red is true" ); 
              }else{
  //востановить ситуацию               
  for(let i=0;i<elTd.length;i++){  
     elTd[i].innerHTML =save[i];
    elTd[i].classList.add(saveCl[i]);
  };
      //console.log("Try "+clYellow[0].innerHTML+" on .red is error" );
              } 
 
           };//end for red
           for(let a=0; a<clGreen.length;a++){            

              clGreen[a].innerHTML= clYellow[0].innerHTML ;
             clYellow[0].innerHTML="";
              clear();
             let result= checked();
              clear();
              if (result[0]==true){
             
  //востановить ситуацию               
  for(i=0;i<elTd.length;i++){  
     elTd[i].innerHTML =save[i]; 
 //  elTd[i].classList.add(saveCl[i]);
//console.log(saveCl[i])
  };         
           return// console.log("Try "+clYellow[0].innerHTML+" on .green is true" ); 
              }else{

  //востановить ситуацию               
  for(i=0;i<elTd.length;i++){  
     elTd[i].innerHTML =save[i];
     elTd[i].classList.add(saveCl[i]);
//console.log(saveCl[i])
  };
 // console.log("Try "+clYellow[0].innerHTML+" on .green is error" ); 
              }
           };//end for green
        }
       // console .log("end for")
    };
    let result=(stepPers%2==0)?"ЧЕРНЫЕ!!!":"БЕЛЫЕ!!!";
    alert("Поздравляем выйграли " +result);
};//end function bot