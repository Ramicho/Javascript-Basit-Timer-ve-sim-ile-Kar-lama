
const tarih = new Date();
const isim = prompt("Adınız nedir?");
console.log(isim);

const myName = document.getElementById('myName');
myName.innerHTML = isim;

const myClock = document.getElementById('myClock');
// myClock.innerHTML=showTime();

// function showTime() {
//     let day = tarih.getDate() ;
//     return day
// }



var saniye = 0, dakika = 0, saat = 0;
function showTime() {
    if (saniye < 59) {
        saniye++;
    } else {
        saniye = 0;
        if (dakika < 59) {
            dakika++;
        } else {
            dakika = 0;
            saat++;
        }
    }

    var sureElement = document.getElementById("myClock");
    if (sureElement) {
        sureElement.innerHTML = saat + " : " + dakika + " : " + saniye + "   " + tarih.toTurkishFormatDate("DD");
    }
}

document.addEventListener("DOMContentLoaded", function () {
    var sureElement = document.getElementById("myClock");
    if (sureElement) {
        sureElement.innerHTML = "0 : 0 : 0";
        setInterval(showTime, 1000);
    }
});

Date.prototype.toTurkishFormatDate = function(format) {
    var date = this,
            weekDay = date.getDay();
    var dayNames = new Array("Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi");

    format = format.replace("DD", dayNames[weekDay]);

    return format;
}