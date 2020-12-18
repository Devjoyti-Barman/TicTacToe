// This is for to check who's turn right now

let turn=1;
//creating 2d array and initialize with -1 denoting the cell is not used
let grid=new Array(3);

for(let i=0;i<3;i++){
  grid[i]=new Array(3);
  for(let j=0;j<3;j++)grid[i][j]=-1;
}

// selecting every cell and adding eventListener for clicking

let cell=document.querySelectorAll('#col');

cell.forEach( (item)=>{
    item.addEventListener('click',event=>{
        
        
        let row=Number(event.target.parentElement.className[7])-1;
        let col=Number(event.target.className[3])-1;
        
       
        if(grid[row][col]===1 || grid[row][col]===2){
            alert('The Cell was filled');
            return;
        }
        
        if(turn===3)turn=1;   

        grid[row][col]=turn;
        event.target.innerText=turn;
        turn++;

        let winner=check();
        if(winner===-1);
        else{
           console.log(winner);
           winner=Number(winner);
           
           // incerment the player wins
           let player='player'+winner;
           let winnerPlayer=document.getElementById(player);
           let times=Number( winnerPlayer.children[0].innerText);
           winnerPlayer.children[0].innerText=times+1;

           setTimeout(Resetgrid,2000);
        }
    });
});

// This will check which user has won the game
check=()=>{
    
    let player1=1;
    let player2=2;
    let count1=0;
    let count2=0;
    let total=0;
    
    // checking direction row to col
    for(let i=0;i<3;i++){
        
        count1=0;
        count2=0;
        for(let j=0;j<3;j++){
           if(grid[i][j]===1)count1++;
           else if(grid[i][j]===2)count2++;        
        }

        if(count1===3){
            return player1;
        }else if(count2===3){
            return player2;
        }
        
        // if all the cell is filled then reset the grid
        total+=count1+count2;
        if(total===9){
            setTimeout(Resetgrid,1500);
        }

    }
    
    

  
    // checking col to row

    count1=0;
    count2=0;

    for(let j=0;j<3;j++){
        count1=0;
        count2=0;
        for(let i=0;i<3;i++){
            if(grid[i][j]===1)count1++;
            else if(grid[i][j]===2)count2++;
        }
        if(count1===3){
            return player1;
        }else if(count2===3){
            return player2;
        } 
    }

  

    // checking major diagonal

    count1=0;
    count2=0;
    for(let i=0;i<3;i++){
        if(grid[i][i]===1)count1++;
        else if(grid[i][i]===2)count2++;
    }
    
    if(count1===3){
        return player1;
    }else if(count2===3){
        return player2;
    }

    // checking minor diagonal

    count1=0;
    count2=0;
    let j=2;
    for(let i=0;i<3;i++){
        if(grid[i][j]===1)count1++;
        else if( grid[i][j]===2)count2++;
        j--;
    }

    if(count1===3){
        return player1;
    }else if(count2===3){
        return player2;
    }

    return -1;
}


// This will reset the grid and html grid
Resetgrid=()=>{
    
    // reseting the grid
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
           grid[i][j]=-1;
        }
    }
    
    // reseting the html grid
    let data=document.querySelectorAll('.row');
     
    data.forEach( (item)=>{
        
        //console.log(item.children);
        let len=item.children.length;
        
        for(let i=0;i<len;i++){
            item.children[i].innerText='';
        }

    }); 
    
    // reseting the player turn's
    turn=1; 
}


//This will reset player's wins

ResetWin=()=>{

    for(let i=1;i<3;i++){

        let player='player'+i;
        let winnerPlayer=document.getElementById(player);
        winnerPlayer.children[0].innerText=0;
    }
    Resetgrid();
}