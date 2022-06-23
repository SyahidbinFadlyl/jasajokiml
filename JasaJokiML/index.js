var rank = ["Warrior", "Elite", "Master","Grandmaster","Epic","Legends","Mythic","Mythical Glory"]
var harga = [10000, 15000, 25000, 25000, 50000, 60000, 150000]
var hargaMGWin = 25000
// 0 ->1 = 0
// 0 -> 3 =
function hitungHarga (mulai,finish){
    var a = 0
    var numStart = 0    
    var numFinish = 0
    var total = 0
    while(a < rank.length){
        if(mulai === rank[a]){
            numStart = a
        }
        if(finish === rank[a]){
            numFinish = a
        }
        a = a + 1
    }
    var numJumlah = numFinish - numStart
    if(numJumlah < 0){
        alert("Mau turun rank kah?")
    }else if(numJumlah === 0){
        alert("Rank segitu-segitu aja ngapain joki")
    }else{
        while(numStart < numFinish){
            total +=harga[numStart]
            numStart ++
        }
    }
    return total
} 


function validasiNoHp(number){
    if(isNaN(number)){
        return false
    } 
    return true
}

function submitted (event) {
    event.preventDefault()
    let name = document.getElementById('nama').value
    let nohp = document.getElementById('contact').value

    if (validasiNoHp(nohp)) {
        localStorage.setItem("name", name)
        localStorage.setItem("contact", nohp)
    
        window.location.href="index2.html";
    } else {
        alert("Nomor hp ya nomor dong !")
    }

}