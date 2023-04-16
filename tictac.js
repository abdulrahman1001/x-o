let title = document.querySelector(".title");
let turn="X"
let square=[];
function winner(){
for(i=1;i<10;i++){
    square[i]=document.getElementById("item"+i).innerHTML
}
    if(square[1]==square[2]&& square[2]==square[3] && square[3]!=""){
        title.innerHTML="the game is done";
        document.getElementById("item"+1).style.background='#0000';
        document.getElementById("item"+2).style.background='#0000';
        document.getElementById("item"+3).style.background='#0000';
        
    }
    else if(square[4]==square[5]&& square[5]==square[6] && square[5]!=""){
        title.innerHTML="the game is done";
        document.getElementById("item"+4).style.background='#0000';
        document.getElementById("item"+5).style.background='#0000';
        document.getElementById("item"+6).style.background='#0000';

    }
    else if(square[7]==square[8]&& square[7]==square[9] && square[7]!=""){
        title.innerHTML="the game is done";
        document.getElementById("item"+7).style.background='#0000';
        document.getElementById("item"+8).style.background='#0000';
        document.getElementById("item"+9).style.background='#0000';
    }
    else if(square[1]==square[4]&& square[4]==square[7] && square[1]!=""){
        title.innerHTML="the game is done";
        document.getElementById("item"+1).style.background='#0000';
        document.getElementById("item"+4).style.background='#0000';
        document.getElementById("item"+7).style.background='#0000';

    }
        else if(square[2]==square[5]&& square[5]==square[8] && square[5]!=""){
            title.innerHTML="the game is done";
        document.getElementById("item"+5).style.background='#0000';
        document.getElementById("item"+2).style.background='#0000';
        document.getElementById("item"+8).style.background='#0000';

        }
        else if(square[3]==square[6]&& square[6]==square[9] && square[9]!=""){
            title.innerHTML="the game is done";
        document.getElementById("item"+6).style.background='#0000';
        document.getElementById("item"+9).style.background='#0000';
        document.getElementById("item"+3).style.background='#0000';

        }
        else if(square[1]==square[5]&& square[5]==square[9] && square[5]!=""){
            title.innerHTML="the game is done";
        document.getElementById("item"+1).style.background='#0000';
        document.getElementById("item"+5).style.background='#0000';
        document.getElementById("item"+9).style.background='#0000';

        }
        else if(square[3]==square[5]&& square[5]==square[7] && square[5]!=""){
            title.innerHTML="the game is done";
        document.getElementById("item"+5).style.background='#0000';
        document.getElementById("item"+7).style.background='#0000';
        document.getElementById("item"+3).style.background='#0000';
        }


}
function game(id){
    let elme= document.getElementById(id);
    if(turn==="X" && elme.innerHTML==""){
        elme.innerHTML="X";
        turn= "O"
        title.innerHTML="O turn"
    }
    else if(turn==="O" && elme.innerHTML==""){
        elme.innerHTML="O";
        turn= "X"
        title.innerHTML="X turn"
    }
    winner();
    
}
function restart() {
     square[1]="";

}