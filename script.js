// ***CATEGORIA 1***   FECHA FIJA
// No necesita calculo
// Año Nuevo -------------------------------- 1 de enero
// Día del trabajo -------------------------- 1 de mayo
// Día de la independencia ----------------- 20 de julio
// Batalla de Boyacá ------------------------ 7 de agosto
// Inmaculada concepción -------------------- 8 de diciembre
// Navidad --------------------------------- 25 de diciembre


// ***CATEGORIA 2***   SEGUN PASCUA
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
let monthNames = ['enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre','Octubre', 'Noviembre', 'Disiembre'];

let currentDate = new Date();
let currentDay = currentDate.getDate();
let monthNumber = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

let dates = document.getElementById('fechas');
let month = document.getElementById('mes');
let year = document.getElementById('año');

let prevMonthDOM = document.getElementById('prev-mes');
let nextMonthDOM = document.getElementById('siguiente-mes');

month.textContent = monthNames[monthNumber];
year.textContent = currentYear.toString();

prevMonthDOM.addEventListener('click', ()=>lastMonth());
nextMonthDOM.addEventListener('click', ()=>nextMonth());



const writeMonth = (month) => {

    for(let i = startDay(); i>0;i--){
        dates.innerHTML += ` <div class="calendario__fechas calendario__articulo calendario__last-dia">
            ${getTotalDays(monthNumber-1)-(i-1)}
        </div>`;
    }

    for(let i=1; i<=getTotalDays(month); i++){
        if(i===currentDay) {
            dates.innerHTML += ` <div class="calendario__fechas calendario__articulo calendario__dia">${i}</div>`;
        }else{
            dates.innerHTML += ` <div class="calendario__fechas calendario__articulo">${i}</div>`;
        }
    }
}

const getTotalDays = month => {
    if(month === -1) month = 11;

    if (month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11) {
        return  31;

    } else if (month == 3 || month == 5 || month == 8 || month == 10) {
        return 30;

    } else {

        return isLeap() ? 29:28;
    }
}

const isLeap = () => {
    return ((currentYear % 100 !==0) && (currentYear % 4 === 0) || (currentYear % 400 === 0));
}

const startDay = () => {
    let start = new Date(currentYear, monthNumber, 1);
    return ((start.getDay()-1) === -1) ? 6 : start.getDay()-1;
}

const lastMonth = () => {
    if(monthNumber !== 0){
        monthNumber--;
    }else{
        monthNumber = 11;
        currentYear--;
    }

    setNewDate();
}

const nextMonth = () => {
    if(monthNumber !== 11){
        monthNumber++;
    }else{
        monthNumber = 0;
        currentYear++;
    }

    setNewDate();
}

const setNewDate = () => {
    currentDate.setFullYear(currentYear,monthNumber,currentDay);
    month.textContent = monthNames[monthNumber];
    year.textContent = currentYear.toString();
    dates.textContent = '';
    writeMonth(monthNumber);
}

writeMonth(monthNumber);