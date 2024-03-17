const btn = document.getElementById("submit");
const inp = document.getElementById("getNum");


function generate(){
    let x = inp.value;
    const himg = document.getElementById("images");
    const dice = document.getElementById("result");
    const value = [];
    const imgs = [];
    for(i=0; i<x; i++){
        let random = Math.floor(Math.random()*6) + 1;
        value.push(random);
        imgs.push(`<img src="./${random}.png">`);
    }
    dice.textContent = `Dice: ${value.join(",")}`;
    himg.innerHTML = imgs.join("");


}