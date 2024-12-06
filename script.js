let turnMusic=new Audio("images/ting.mp3");
let gameOverMusic=new Audio("images/gameover.mp3");
let music=new Audio("images/music.mp3");
let resetbtn=document.getElementById("reset");
let gameOver=false;
let turn="X";

const changeTurn= ()=>{
    return turn=="X"?"0":"X";
}

const checkWin = ()=>{
    let textboxes=document.getElementsByClassName("boxtext");
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    for (let i = 0; i < wins.length; i++) {
        let [a,b,c]=wins[i];
        if(textboxes[a].innerHTML===textboxes[b].innerHTML && textboxes[a].innerHTML===textboxes[c].innerHTML && textboxes[a].innerHTML!=='')
        {
            document.getElementsByClassName("info")[0].innerText=textboxes[a].innerText +" WON";
            gameOverMusic.play();
            textboxes[a].classList.toggle("strike");
            textboxes[c].classList.toggle("strike");
            textboxes[b].classList.toggle("strike");
            gameOver=true;
            document.querySelector(".imgdance").getElementsByTagName("img")[0].style.width="200px";
        }
    }
}

let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxText=element.querySelector(".boxtext");
    element.addEventListener('click',()=>{
        if(boxText.textContent=='')
        {
            music.play();
            boxText.textContent=turn;
            turn=changeTurn();
            turnMusic.play();
            checkWin();
            if(gameOver==false)
            document.getElementsByClassName("info")[0].innerText= "Turn For " +turn;
        }
    })
    
});


resetbtn.addEventListener('click',()=>{

    let boxtxt=document.querySelectorAll(".boxtext");
    Array.from(boxtxt).forEach(element=>{
        element.innerText=""
        element.classList.remove("strike")
    })

    turn="X";
    gameOver=false;
    document.getElementsByClassName("info")[0].innerText="Turn For "+ turn;
    document.querySelector(".imgdance").getElementsByTagName("img")[0].style.width="0px";
})