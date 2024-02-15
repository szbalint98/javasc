function udvozles(){
    console.log("Sziaaa")
}
var szam="0"
let nev="jenő"

console.log(szam +" tipusa:"+ typeof szam)
console.log(`${szam} típusa: ${typeof szam}`)
console.log(nev+"tipusa "+typeof nev)
function elagazas(){
    if(szam%2===0){
        console.log("Páros")
    }else if(szam%2===1){
        console.log("Páratlan")
    }else if(szam===0){
        console.log("0")
    }
}
for (let index = 0; index < 10; index++) {
    console.log(`${index}.SZiaaa`)
    
}
let index=0;
while (index<10) {
    console.log(`${index}. hello`)
    index++;
}