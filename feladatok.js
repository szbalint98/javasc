export function udvozles(){
    console.log("Sziaaa")
}
var szam="0"
let nev="jenő"

console.log(szam +" tipusa:"+ typeof szam)
console.log(`${szam} típusa: ${typeof szam}`)
console.log(nev+"tipusa "+typeof nev)
export function elagazas(){
    if(szam%2===0){
        console.log("Páros")
    }else if(szam%2===1){
        console.log("Páratlan")
    }else if(szam===0){
        console.log("0")
    }
}
export function ciklus1(){
    for (let index = 0; index < 10; index++) {
    console.log(`${index}.SZiaaa`)
    
}}
export function ciklus2(){
    let index=0;
    while (index<10) {
        console.log(`${index}. hello`)
        index++;
}
}
let vtomb= new Array();

export function tomb(){
    for (let index = 0; index < 50; index++) {
        let vel =(Math.random()*100)+1;
        vtomb[index]=vel;
        console.log(vel);
        
    }
    
}