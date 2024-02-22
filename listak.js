export function listak(){
    let lista =["első","második"]
    
    lista.push("sziaaaaa")
    console.log(lista[2])
}
export function listak2(){
    const listaszam=[12,13,15]
    listaszam[0]=212112
    console.log(listaszam)
}
export function objectumok(){
    const etel1 = {
        neve:"Brassói",
        ar:2990
    }
    console.log(etel1.nev)
    console.log(etel1.kor)

    etel1.mennyiseg=3

    
    let kutyalista=[
        {
            nev:"Dézi",
            fajta:"pitbull",
            szin:"barna",
            marmagassag: 46,
            szul_datum:2020,
            szul_hely:"Budapest"
        },
        {
            nev:"Béni",
            fajta:"pitbull",
            szin:"barna",
            marmagassag: 36,
            szul_datum:2018,
            szul_hely:"Budapest"
        }
    ]
}