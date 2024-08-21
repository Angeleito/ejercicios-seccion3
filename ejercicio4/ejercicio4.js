const elegir = ["Piedra", "Papel", "Tijeras"];
let botones = document.querySelectorAll('button');
let eleccionDelJugadorPantalla = document.getElementById('eleccion-jugador');
let eleccionDelComputadorPantalla = document.getElementById('eleccion-computador');
let ganadorPantalla = document.getElementById('ganador');

for (let i = 0; i < botones.length; i++) {
    let button = botones[i];
    button.addEventListener('click', () => {
        let eleccionDelUsuario = button.textContent;
        let eleccionDelComputador = elegir[Math.floor(Math.random() * elegir.length)];
        let ganador = determinarGanador(eleccionDelUsuario, eleccionDelComputador);

        eleccionDelJugadorPantalla.textContent = `tu eleccion: ${eleccionDelUsuario}`;
        eleccionDelComputadorPantalla.textContent = `eleccion del computador: ${eleccionDelComputador}`;
        ganadorPantalla.textContent = `Ganador: ${ganador}`;
    });
};

function determinarGanador(eleccionDelUsuario, eleccionDelComputador){
    if(eleccionDelUsuario === eleccionDelComputador){
        return 'empate';
    }else if(
        (eleccionDelUsuario === 'Piedra' && eleccionDelComputador === 'Tijeras') ||
        (eleccionDelUsuario === 'Papel' && eleccionDelComputador === 'Piedra') ||
        (eleccionDelUsuario === 'Tijeras' && eleccionDelComputador === 'Papel')
    ){
        return 'Usuario';
    }else{
        return 'Computador';
    };
};