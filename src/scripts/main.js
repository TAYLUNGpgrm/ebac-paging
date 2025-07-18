AOS.init();

const dataDoEvento = new Date("Dec 27, 2025 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function () {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

    const diaemMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoemMs = 1000 * 60;

    const diasAteOEvento = Math.floor(distanciaAteOEvento / diaemMs);
    const horasAteOEvento = Math.floor((distanciaAteOEvento % diaemMs) / horaEmMs);
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % horaEmMs) / minutoemMs);
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutoemMs) / 1000);


    console.log(diasAteOEvento);
    console.log(horasAteOEvento);
    console.log(minutosAteOEvento);
    console.log(segundosAteOEvento);

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;

    if(distanciaAteOEvento < 0) {
        clearInterval(contaAsHoras)
        document.getElementById('contador').innerHTML = "Evento Expirado";
    }
}, 1000)