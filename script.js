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


var year = "2020" // año a mostrar el calendario // caso de uso: 2020 o mayor
var equinoccio = new Date("03/19/2020");
var fullmoon = new Date("01/10/2020"); // acumalado .5
var accum = true


var getEaster = function(year, equinoccio){
    tmpFullMoon = fullmoon;
    while(tmpFullMoon<equinoccio){
        tmpFullMoon.setDate(tmpFullMoon.getDate()+(accum?30:29))
        accum = !accum            
    }
    return tmpFullMoon
}     
var fullMoonEaster = getEaster(year, equinoccio);
console.log(fullMoonEaster, "LUNA LLENA DESPUES DE EQUINOCCIO")//luna llena despues de equinoccio


function setToSunday(fullMoonEaster){
    var day = fullMoonEaster.getDay() || 7;  
    if(day !== 7){
        fullMoonEaster.setHours(-24 * (day - 7));
    } 
    return fullMoonEaster;
}
var sundayEaster = setToSunday(fullMoonEaster);
console.log(sundayEaster,"DOMINGO DE PASCUA")//domingo de pascua

// function getNextSunday(date2){
//     while(date2.getDay()!=7){
//         date2.setDate(date2.getDate()+1);
//     }
//     return date2;
// }

function getNextMonday(date){
    while(date.getDay()!=1){
        date.setDate(date.getDate()+1);//funcion obtener lunes de una fecha
    }
    return date;
}


var threeKings = new Date("01/06/2020");
getNextMonday(threeKings);
console.log(getNextMonday(threeKings), "Reyes magos")//Reyes magos

var saintJoseph = new Date("03/19/2020");
getNextMonday(saintJoseph);
console.log(getNextMonday(saintJoseph), "Dia de San Jose")//Dia de San Jose

var saintPeterAndsaintPaul = new Date("06/29/2020");
getNextMonday(saintPeterAndsaintPaul);
console.log(getNextMonday(saintPeterAndsaintPaul), "Dia de san pedro y San Pablo")//Dia de san pedro y San Pablo

var virginAscent = new Date("08/15/2020");
getNextMonday(virginAscent);
console.log(getNextMonday(virginAscent), "Ascencion de la Virgen")//Ascencion de la Virgen

var breedDay = new Date("10/12/2020");
getNextMonday(breedDay);
console.log(getNextMonday(breedDay), "Dia de la Raza")//Dia de la raza

var allSaints = new Date("11/01/2020");
getNextMonday(allSaints);
console.log(getNextMonday(allSaints), "Dia de todos los santos");//Dia de todos los santos

var independenceCartagena = new Date("11/11/2020");
getNextMonday(independenceCartagena);
console.log(getNextMonday(independenceCartagena), "Dia de la independencia de Cartagena")//Dia de la independencia de Cartagena



var holyThursday = new Date(sundayEaster)
holyThursday.setDate(holyThursday.getDate()-(3));
console.log(new Date(holyThursday), "***jueves santo") //jueves santo

var goodFriday = new Date(sundayEaster);
goodFriday.setDate(goodFriday.getDate()-(2));
console.log(new Date(goodFriday), "***viernes santo")//viernes santo

var memorialDay = new Date(sundayEaster);
memorialDay.setDate(memorialDay.getDate()+(43));
console.log(new Date (memorialDay), "***Ascension de jesus")//Ascension de jesus

var corpusChristi = new Date(sundayEaster);
corpusChristi.setDate(corpusChristi.getDate()+(64));
console.log(new Date (corpusChristi), "***corpus Chisti")//corpus Chisti

var SacredHeartofJesus = new Date(sundayEaster);
SacredHeartofJesus.setDate (SacredHeartofJesus.getDate()+(71));
console.log(new Date(SacredHeartofJesus), "***sagrado corazon de Jesus")//sagrado corazon de Jesus



// Viernes santo = GoodFriday
//var daysWeek = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];

// var todosLosSantos = new Date("11/01/2020");
// function setToMondayAllsaints(todosLosSantos){
//     var day = todosLosSantos.getDay();
//     if(day !== 1){
//         todosLosSantos.setHours(-24 * ( day -1));
//     return todosLosSantos;
//     }
// }
// var allSaints = setToMondayAllsaints(todosLosSantos);
// console.log(allSaints, "allSaints")//todos los santos

// var sanJose = new Date("03/19/2020");
// function setToMonday(sanJose){
//     var day =sanJose.getDay();
//     if ( day !== 1)
//         sanJose.setHours (-24 * ( day -8) );
//     return sanJose;
// }
// var saintJoseph = setToMonday(sanJose);
// console.log(saintJoseph, "saintJoseph")//San Jose

// var reyesMagos = new Date("01/06/2020");
// function setToMonday( reyesMagos){
//     var day =reyesMagos.getDay();
//     if ( day !== 1)
//     reyesMagos.setHours (-24 * ( day -1) );
//     return reyesMagos;
// }
// var threeKingsDay = setToMonday(reyesMagos);
// console.log (threeKingsDay)

// function setToSunday(fullMoonEaster){
//     var day = fullMoonEaster.getDay() || 7;  
//     if(day !== 7) 
//     fullMoonEaster.setHours(-24 * (day - 7)); 
//     return fullMoonEaster;
// }
// var sundayEaster = setToSunday(fullMoonEaster);
// console.log(sundayEaster,"domingo de pascua")//domingo de pascua

// function setToSunday(){
//     var day = fullMoonEaster.getDay()  
//     if(day !== 7){
//         day.setDate(day.getDate()+1);
//     } 
//     return day;
// }
// var sundayEaster = setToSunday();
// console.log(sundayEaster,"domingo de pascua")//domingo de pascua

// var allSaintsToMonday = function(){
//     var allSaints = new Date("11/01/2020");
//     if(allSaints !== 1){
//         allSaints.setDate(allSaints.getDate()+1);
//     }
//     return allSaints;
// }
// var allSaintsDay = allSaintsToMonday();
// console.log(allSaintsDay, "dia de todos los santos")//dia de todos los santos

// var allSaints = new Date("11/01/2020");
// var allSaintsToMonday = function(){
//     while(allSaints !== 1){
//         allSaints.setDate(allSaints.getDate()+1);
//         allSaints++ 
//     }
//     return allSaints;
// }
// var allSaintsDay = allSaintsToMonday();
// console.log(allSaintsDay, "dia de todos los santos")//dia de todos los santos

// function getNextSunday(date2){
//     while(date2.getDay()!=7){
//         date2.setDate(date2.getDate()+1);
//     }
//     return date2;
// }