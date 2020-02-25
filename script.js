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
<<<<<<< HEAD
// Independencia de Cartagena -------------- 11 de noviembre
=======
// Independencia de Cartagena -------------- 11 de noviembre
<<<<<<< HEAD


var year = "2020" // año a mostrar el calendario // caso de uso: 2020 o mayor
var equinoccio = new Date("03/19/2020");
var fullmoon = new Date("01/10/2020"); // acumalado .5
var accum = true



var getEaster = function(year, equinoccio){
    tmpFullMoon = fullmoon;
    a = 0
    while(tmpFullMoon<equinoccio && a<9){
        tmpFullMoon.setDate(tmpFullMoon.getDate()+(accum?30:29))
        accum = !accum
            
        //console.log("aaaa")
        a++
    }
    //ahora calcular domingo pascua
    return tmpFullMoon
}     
var fullMoonEaster = getEaster(year, equinoccio);
console.log(fullMoonEaster)



function setToSunday(fullMoonEaster){
    var day = fullMoonEaster.getDay() || 7;  
    if(day !== 7) 
    fullMoonEaster.setHours(-24 * (day - 7)); 
    return fullMoonEaster;
}
var sundayEaster = setToSunday(fullMoonEaster);
console.log(sundayEaster,"rtyu")//domingo de pascua



var holyThursday = new Date(sundayEaster)
holyThursday.setDate(holyThursday.getDate()-(3));
console.log(new Date(holyThursday)) //jueves santo

var goodFriday = new Date(sundayEaster);
goodFriday.setDate(goodFriday.getDate()-(2));
console.log(new Date(goodFriday))//viernes santo


var memorialDay = new Date(sundayEaster);
memorialDay.setDate(memorialDay.getDate()+(43));
console.log(new Date (memorialDay))//Ascension de jesus

var corpusChristi = new Date(sundayEaster);
corpusChristi.setDate(corpusChristi.getDate()+(64));
console.log(new Date (corpusChristi))//corpus Chisti

var SacredHeartofJesus = new Date(sundayEaster);
SacredHeartofJesus.setDate (SacredHeartofJesus.getDate()+(71));
console.log(new Date(SacredHeartofJesus))//sagrado corazon de Jesus




// Viernes santo = GoodFriday
//var daysWeek = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
======
