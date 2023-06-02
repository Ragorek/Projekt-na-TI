
var count = 0

/* Wypożyczona funkcja z overflow,
    Wykorzystuje do zatrzymania animacji po 1s */
function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }
/* Zmiana tekstu u samej górze */
function NewText(){
    document.getElementById("Anime").innerHTML = texts[count]

    if(count < texts.length -1){
        count++
    }
    else{
        count = 0
    }
}
/* Zmiana koloru tła */
function ColorShift(color){
    console.log("def".localeCompare(color) == 0);
    if("def".localeCompare(color) == 0){
        document.body.style.background = "linear-gradient(50deg, rgb(49, 77, 52) 0%, rgb(34, 87, 41) 25%, rgb(22, 122, 35) 75%, rgb(10, 160, 30) 100%)";
        document.body.style.backgroundAttachment = "fixed"
        document.body.style.backgroundSize = "cover"
    }
    else{
        console.log("helo")
        document.body.style.background = color;
    }
}

/* Szybkie wstawianie obrazkow */
function createImg(link){
    let div = document.createElement('div');
    div.classList.add("puzzle");
    document.getElementById("DinoPart").appendChild(div);
    div.style.backgroundImage = 'url('+link+')';
}
/* Coś jakby opóźnienie w odpaleniu tych funkcji,
 by zaczęły działać dopiero po wczytaniu całego pliku html */
$(document).ready(function(){

    /* Zmiana tekstu co 6s */
    setInterval(NewText,6000)
    NewText(); 

    /* Po kliknięciu wysuwa/wsuwa się menu boczne, i zatrzymuje w pozycji */
    $("#slide").click(function(){
        document.getElementById("MenuVerti").style.animationPlayState = "running";
        delay(1000).then(() => document.getElementById("MenuVerti").style.animationPlayState = "paused");
    })
    /* Spamuje wszystkimi obrazkami */
    imgs.forEach(createImg)
})