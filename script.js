let music=new Audio("");
let audioTurn=new Audio("ting.mp3")
let gameOver=new Audio("gameoveer.mp3");
let turn="X"
let isgameover=false

//funciton to change the turn
const changeTurn=()=>{
    return turn==="X"?"O":"X";
}

//Function to check for a win
const checkWin=()=>{

    let boxtext=document.getElementsByClassName('boxtext')
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach(e=>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText )&&(boxtext[e[2]].innerText===boxtext[e[1]].innerText)&&
            (boxtext[e[0]].innerText!==""))
            {
                document.querySelector('.info').innerText=boxtext[e[0]].innerText+" won";
                isgameover=true
                document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="200px"
            }
        
        
    })

}

//Game Logic

let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(Element=>{

    let boxText=Element.querySelector('.boxtext');
    Element.addEventListener('click',()=>{
     if(boxText.innerText==='')
     {
         boxText.innerText=turn;
         turn=changeTurn();
         audioTurn.play();
         checkWin();
         if(!isgameover){

            document.getElementsByClassName("info")[0].innerText="Turn for "+ turn;
         }
     }

    })
})

//Add Onclick listener to reset button
reset.addEventListener('click',()=>{
    let boxtexts=document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element=>{
        element.innerText=""
    });
    turn="X";
    isgameover=false;
    document.getElementsByClassName("info")[0].innerText="Turn for "+ turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="0px"
})