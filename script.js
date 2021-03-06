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
// Asunción de la Virgen ------------------- 15 de agosto
// Día de la raza -------------------------- 12 de octubre
// Todos los santos ------------------------- 1 de noviembre
// Independencia de Cartagena -------------- 11 de noviembre


var year = "2020" // año a mostrar el calendario // caso de uso: 2020 o mayor
var month = 0
var equinoccio = new Date("03/19/2020");
var fullmoon = new Date("01/10/2020"); // acumalado .5
var accum = true
var fullMoonEaster, sundayEaster, february, daysMonths, menu;


var es_bisiesto = function(year){
    return year % 4 == 0 && year % 100 != 0 || year % 400 == 0;
}

function optionFunction(){
    document.getElementsByTagName("tbody")[0].remove();
    document.getElementById("week-container").getElementsByTagName("table")[0].appendChild(document.createElement("tbody"));
    month = parseInt(document.getElementById("select-month").value);
    year = document.getElementById("select-year").value;
    equinoccio = new Date("03/19/"+year)
    calculateDOM()
}

for (let i = 2020; i < 2030; i++){
    var newOption = document.createElement("option");
    var menuOption = document.getElementById("select-year");
    menuOption.appendChild(newOption);
    newOption.setAttribute("value", i);
    newOption.innerHTML= i ;
}

//var monthsArray = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
var daysArray = [31, february, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

var setHoliday = function(date, months){
    months[date.getMonth()][date.getDate()-1] = true;
    return months;
}

var calculateDOM = function(){
    if(es_bisiesto(year) == true){
        february = "29";
    }else {
        february = "28";
    }
    daysArray[1] = february

    var months = [];
    for(let i = 0; i < 12; i++){
        months[i] = [];
        for(let j = 0; j < daysArray[i]; j++){
            months[i][j] = false
        }
    }
    fullMoonEaster = getEaster(equinoccio);
    sundayEaster = setToSunday(fullMoonEaster);
    console.log("full: ", fullMoonEaster, "; equi: ", equinoccio, "; domin: ", sundayEaster);

    (() => {        
            //Si no es Lunes, Lunes Proximo
            var threeKings = new Date("01/06/"+year);
            months = setHoliday(getNextMonday(threeKings),months);
        
            var saintJoseph = new Date("03/19/"+year);
            months = setHoliday(getNextMonday(saintJoseph),months);
            console.log(months, " todos los días ")
        
            var saintPeterAndsaintPaul = new Date("06/29/"+year);
            months = setHoliday(getNextMonday(saintPeterAndsaintPaul),months);
        
            var virginAscent = new Date("08/15/"+year);
            months = setHoliday(getNextMonday(virginAscent),months);
        
            var breedDay = new Date("10/12/"+year);
            months = setHoliday(getNextMonday(breedDay),months);
        
            var allSaints = new Date("11/01/"+year);
            months = setHoliday(getNextMonday(allSaints),months);
        
            var independenceCartagena = new Date("11/11/"+year);
            months = setHoliday(getNextMonday(independenceCartagena),months);
        
           
            //Segun Pascua
            var holyThursday = new Date(sundayEaster)
            months = setHoliday(new Date(holyThursday.setDate(holyThursday.getDate()-3)),months);
        
            var goodFriday = new Date(sundayEaster);
            months = setHoliday(new Date(goodFriday.setDate(goodFriday.getDate()-2)),months);
            
            var memorialDay = new Date(sundayEaster);
            months = setHoliday(new Date(memorialDay.setDate(memorialDay.getDate()+43)),months);
        
            var corpusChristi = new Date(sundayEaster);
            months = setHoliday(new Date(corpusChristi.setDate(corpusChristi.getDate()+64)),months);
            
            var SacredHeartofJesus = new Date(sundayEaster);
            months = setHoliday(new Date(SacredHeartofJesus.setDate(SacredHeartofJesus.getDate()+71)),months);
            
        
            // Fecha Fija
            var newYear = new Date("01/01/"+year);
            months = setHoliday(new Date(newYear.setDate(newYear.getDate())),months);
        
            var workingDay = new Date("05/01/"+year);
            months = setHoliday(new Date(workingDay.setDate(workingDay.getDate())),months);
        
            // var independenceDay = new Date("20/07/"+year);
            // months = setHoliday(new Date(independenceDay.setDate(independenceDay.getDate())),months);
        
            // var cartagenaBattle = new Date("07/08/"+year);
            // months = setHoliday(new Date(cartagenaBattle.setDate(cartagenaBattle.getDate())),months);
        
            // var inmaculadaConception = new Date("08/12/"+year);
            // months = setHoliday(new Date(inmaculadaConception.setDate(inmaculadaConception.getDate())),months);
        
            // var christmasDay = new Date("25/12/"+year);
            // months = setHoliday(new Date(christmasDay.setDate(christmasDay.getDate())),months);
    })();

    daysMonths = [31, february, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    var initial = new Date(1+month + "/01/" + year)
    let day = initial.getDay();
    var newTr = document.createElement("tr");

    if(day == 0)day = 7
    for(let i = 0; i < (day-1); i++){
        var newTd = document.createElement("td");
        newTd.innerHTML = "&nbsp;";
        newTr.appendChild(newTd);
    }
    menu = document.getElementById("week-container").getElementsByTagName("table")[0].children[1];
    menu.appendChild(newTr);

    for(let j = 1; j <= daysMonths[month]; j++){
        var newTd = document.createElement("td");
        newTr.appendChild(newTd);
        newTd.innerHTML = j;
        //console.log(months[month][j-1], "! ", month )
        if(months[month][j-1])
            newTd.classList.add("dom")
        
        initial = new Date(1+month + `/${j}/` + year)
        day = initial.getDay();
        if(day == 0){
            newTr = document.createElement("tr");
            menu.appendChild(newTr);
        }
    }
        
}


var getEaster = function(equinoccio){        // obtener Pascua
    tmpFullMoon = new Date(fullmoon);
    accum = true;
    let fortyThree = 0
    while(tmpFullMoon < equinoccio){

        tmpFullMoon.setDate(tmpFullMoon.getDate()+(accum?30:29));
        accum = !accum            
     //   console.log("luna: ", tmpFullMoon)
    }
    return tmpFullMoon
}     


function setToSunday(fullMoonEaster){       // Funcion obtener Domingo de Pascua
    var day = fullMoonEaster.getDay();  
    if(day !== 7){
        fullMoonEaster.setHours(-24 * (day - 7));
    } 
    return fullMoonEaster;
}

// function setToSunday(fullMoonEaster){
//     while(fullMoonEaster.getDay() !=0){
//         fullMoonEaster.setDate(fullMoonEaster.getDate()+1);
//     }
//     return fullMoonEaster;
// }


function getNextMonday(date){        // Funcion si no es lunes, obtener Lunes proximo 
    while(date.getDay() != 1){
        date.setDate(date.getDate()+1);
    }
    return date;
}

calculateDOM();