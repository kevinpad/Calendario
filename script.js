// ***CATEGORIA 1***   FECHA FIJA
// No necesita calculo
// Año Nuevo -------------------------------- 1 de enero
// Día del trabajo -------------------------- 1 de mayo
// Día de la independencia ----------------- 20 de julio
// Batalla de Boyacá ------------------------ 7 de agosto
// Inmaculada concepción -------------------- 8 de diciembre
// Navidad --------------------------------- 25 de diciembre


// ***CATEGORIA 2***   SEGUN PASCUA      domingo inmediatamente posterior a la primera luna llena 
                                        //después del equinoccio de marzo
                                        //no antes del 22 de marzo y el 25 de abril como muy tarde.
// Se calculan sumando o restando días respecto a la fecha de celebración del Domingo de Pascua
// Jueves Santo ----------------------------- pascua  -3 dias
// Viernes Santo ---------------------------- pascua  -2 dias
// Ascención de Jesús ----------------------- pascua +43 dias
// Corpus Christi  -------------------------- pascua +64 dias
// Sagrado corazón de Jesús ----------------- pascua +71 dias


// ***CATEGORIA 3***   FECHA TRASLADABLE     
// si la fecha base no es lunes, se traslada al siguiente lunes
// Epifanía del señor (reyes magos)---------- 6 de enero
// Día de San José ------------------------- 19 de marzo
// San Pedro y San Pablo ------------------- 29 de junio
// Jueves Santo
// Viernes Santo
// Asunción de la Virgen ------------------- 15 de agosto
// Día de la raza -------------------------- 12 de octubre
// Todos los santos ------------------------- 1 de noviembre
// Independencia de Cartagena -------------- 11 de noviembre


var year = "2021" // año a mostrar el calendario // caso de uso: 2020 o mayor
var month = 0
var equinoccio = new Date("03/19/2020");
var fullmoon = new Date("01/10/2020"); // acumalado .5
var accum = true


var es_bisiesto = function(year){
    return year % 4 == 0 && year % 100 != 0 || year % 400 == 0;
}

if(es_bisiesto(year) == true){
    february = "29";
}else {
    february = "28";
}


var getEaster = function(year, equinoccio){
    tmpFullMoon = fullmoon;
    while(tmpFullMoon<equinoccio){
        tmpFullMoon.setDate(tmpFullMoon.getDate()+(accum?30:29))
        accum = !accum            
    }
    return tmpFullMoon
}     
var fullMoonEaster = getEaster(year, equinoccio);


function setToSunday(fullMoonEaster){
    var day = fullMoonEaster.getDay() || 7;  
    if(day !== 7){
        fullMoonEaster.setHours(-24 * (day - 7));
    } 
    return fullMoonEaster;
}
var sundayEaster = setToSunday(fullMoonEaster);

function getNextMonday(date){
    while(date.getDay()!=1){
        date.setDate(date.getDate()+1);//funcion obtener lunes de una fecha
    }
    return date;
}

var threeKings = new Date("01/06/2020");
getNextMonday(threeKings);

var saintJoseph = new Date("03/19/2020");
getNextMonday(saintJoseph);

var saintPeterAndsaintPaul = new Date("06/29/2020");
getNextMonday(saintPeterAndsaintPaul);

var virginAscent = new Date("08/15/2020");
getNextMonday(virginAscent);

var breedDay = new Date("10/12/2020");
getNextMonday(breedDay);

var allSaints = new Date("11/01/2020");
getNextMonday(allSaints);

var independenceCartagena = new Date("11/11/2020");
getNextMonday(independenceCartagena);



var holyThursday = new Date(sundayEaster)
holyThursday.setDate(holyThursday.getDate()-(3));

var goodFriday = new Date(sundayEaster);
goodFriday.setDate(goodFriday.getDate()-(2));

var memorialDay = new Date(sundayEaster);
memorialDay.setDate(memorialDay.getDate()+(43));

var corpusChristi = new Date(sundayEaster);
corpusChristi.setDate(corpusChristi.getDate()+(64));

var SacredHeartofJesus = new Date(sundayEaster);
SacredHeartofJesus.setDate (SacredHeartofJesus.getDate()+(71));

var daysMonths = [31, february, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var months = ["Enero", "Febrero", "Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

var initial = new Date(month + "/01/" + year)
for(let j = 1; j <= daysMonths[month]; j++){
    console.log("dia: " + j);
    initial.getDay();
    
    
}
var newTr = document.createElement("tr");
var newTd = document.createElement("td");






var menu = document.getElementById("calendario-numeros").getElementsByTagName("table")[0];

menu.appendChild(newTr);
newTr.appendChild(newTd);
newTd.innerHTML = "6";


for(newTd.innerHTML = 6; newTd.innerHTML<31; newTd.innerHTML++){
    // document.createElement("td");
    // document.getElementById("calendario-numeros").getElementsByTagName("table")[0];
    // newTr.appendChild(newTd);
    // newTd.innerHTML = "6";
 }


//var tdMaster = newTd.innerHTML

