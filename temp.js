let player=1;

/*
document.getElementById("reset").addEventListener("onclick", function(event) {
    console.log(event);
});
*/
function Resetgrid(){
    
    player=1;
    for(let i=1;i<=3;i++){

        for(let j=1;j<=3;j++){
            let id="col-"+i+"-id-"+j;
            let data=document.getElementById(id);
            data.innerText='';   
        }
    
    }

}

function ResetWins(){

    let p1=document.getElementById('player-1');
    let p2=document.getElementById('player-2');
    
    p1.children[0].innerText='0'
    p2.children[0].innerText='0'
    Resetgrid();
}

document.addEventListener("click", function(event){
    
   // console.log(event);
      
    if(event.target.className==='body' || event.target.className==='reset' || event.target.innerText==='1' || event.target.innerText=='2')return;
    if(event.target.className==='resetPlayer' )return;
    if(event.target.className==='player-1' || event.target.className==='player-2')return;
      
    document.getElementById(event.target.id).innerHTML = player;
      player++;
      if(player===3)player=1;

      
      
      let count1=0;
      let count2=0;
      let player1=false;
      let player2=false;
    
    // checking from row to col
      for(let i=1;i<=3;i++){
        count1=0;
        count2=0;
        for(let j=1;j<=3;j++){
            let id="col-"+i+"-id-"+j;
            let data=document.getElementById(id);
            if(data.innerText==='1')count1++;
            else if(data.innerText==='2')count2++;
        }
        if(count1===3){
            player1=true;
            break;
        }else if(count2===3){
            player2=true;
            break;
        }
      }
    
    // checking from col to  row
      for(let i=1;i<=3;i++){
        count1=0;
        count2=0;
        for(let j=1;j<=3;j++){
            let id="col-"+j+"-id-"+i;
            let data=document.getElementById(id);
            if(data.innerText==='1')count1++;
            else if(data.innerText==='2')count2++;
        }
        if(count1===3){
            player1=true;
            break;
        }else if(count2===3){
            player2=true;
            break;
        }
      }
      

      // checking major diagonal

      count1=0;
      count2=0;
      id1="col-1-id-1";
      id2="col-2-id-2";
      id3="col-3-id-3";
      let data1=document.getElementById(id1);
      let data2=document.getElementById(id2);
      let data3=document.getElementById(id3);

      if(data1.innerText==='1')count1++;
      if(data2.innerText==='1')count1++;
      if(data3.innerText==='1')count1++;

      if(data1.innerText==='2')count2++;
      if(data2.innerText==='2')count2++;
      if(data3.innerText==='2')count2++;

      if(count1===3){
          player1=true;
      }else if(count2===3){
          player2=true;
      }
      
      
      // checking minor diagonal

      count1=0;
      count2=0;

      id1="col-1-id-3";
      id2="col-2-id-2";
      id3="col-3-id-1";
      data1=document.getElementById(id1);
      data2=document.getElementById(id2);
      data3=document.getElementById(id3);

      if(data1.innerText==='1')count1++;
      if(data2.innerText==='1')count1++;
      if(data3.innerText==='1')count1++;

      if(data1.innerText==='2')count2++;
      if(data2.innerText==='2')count2++;
      if(data3.innerText==='2')count2++;

      if(count1===3)player1=true;
      else if(count2===3)player2=true;


      if(player1){
          console.log("player1 has won");
          player=1;

          let p1=document.getElementById('player-1');
          let win=Number(p1.children[0].innerText);
          win++;
          p1.children[0].innerText=win;
          setTimeout(reset, 1000);
        
      }else if(player2){
          console.log("player2 has won");
          player=1;

          let p2=document.getElementById('player-2');
          let win=Number(p2.children[0].innerText);
          win++;
          p2.children[0].innerText=win;
          setTimeout(reset, 1000);
      }
      
      let complete=0;
      for(let i=1;i<=3;i++){

        for(let j=1;j<=3;j++){
            let id="col-"+i+"-id-"+j;
            let data=document.getElementById(id);
            if(data.innerText==='1' || data.innerText==='2')complete++;   
        }
    
      }

      if(complete===9)setTimeout(reset, 1000);

    
      function reset(){
        player=1;
        for(let i=1;i<=3;i++){

            for(let j=1;j<=3;j++){
                let id="col-"+i+"-id-"+j;
                let data=document.getElementById(id);
                data.innerText='';   
            }
        
        }
      }
}); 