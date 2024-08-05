console.log("Rock paper scisser");

const image=document.querySelectorAll(".image");

const you=document.getElementById("you");
const comp=document.getElementById("comp");
const rel = document.getElementById("rel");
let youScrore=0;
let compScrore=0;


console.log( you.innerHTML , comp.innerHTML, rel);



const Drawgame= ()=>{
    console.log("Draw game");
    rel.innerHTML='Draw game';
    rel.style.color="black";
    
}


const getcompchoise= ()=>{
    const option=['Rock',"Paper","scisser"];
    const index= Math.floor( Math.random()*3);
    return option[index];
}

const playGame = (userchoice)=>{
    console.log("user choise ", userchoice);

    //computer generated choise
    const compchoise = getcompchoise();
    console.log("computer choise ", compchoise);

    if(userchoice === compchoise)
    {
        Drawgame()
    }
    else 
    {
        // let youScrore=0;
        // let compScrore=0;
        let getresult=true;
        if(userchoice === 'Rock')
        {
            //paper, scissors
            getresult = compchoise === "Paper"? false:true;
            rel.innerHTML= getresult ? "Rock is win by Scissors" : " you lose by Paper " ;
            if(getresult){
                rel.style.color="green";
                youScrore++;
            }
            else{
                rel.style.color="red";
                compScrore++;
            }

        }
        else
        if(userchoice === "Paper")
        {
            //Rock,Scissors
            getresult= compchoise === "scisser"? false:true;
            rel.innerHTML= getresult ? "Paper is win by Rock" : " you lose by Scissors " ;
            if(getresult){
                rel.style.color="green";
                youScrore++;
            }
            else{
                rel.style.color="red";
                compScrore++;
            }
        }
        if(userchoice === "scisser")
        {
            //Rock, paper
            getresult= compchoise === 'Rock'? false:true;
            rel.innerHTML= getresult ? "Scisser is win by Paper" : " you lose  Rock" ;
            if(getresult){
                rel.style.color="green";
                youScrore++;
            }
            else{
                rel.style.color="red";
                compScrore++;
            }
            
        }
        console.log(getresult)
        you.innerHTML=youScrore;
        comp.innerHTML=compScrore;
    }
}

image.forEach((choise)=>{
    choise.addEventListener("click", ()=>{
        const userchoice=choise.getAttribute("id");
        playGame(userchoice);
    });
})



