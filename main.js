const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".texto");
for(let i = 0; i <botoes.length; i++) {
    botoes[i].onclick = function(){

        for(let j = 0; j <botoes.length; j++){
            botoes[j].classList.remove("ativo");
            textos[j].classlist.remove("ativo");
        }

        botoes[i].classList.add("ativo");
        textos[i].classlist.add("ativo");
    }

}

const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = date("2024-06-21T00:00:00");
const tempoObjetivo2 = date("2024-09-21T00:00:00");
const tempoObjetivo3 = date("2024-12-21T00:00:00");
const tempoObjetivo4 = date("2025-03-21T00:00:00");

const tempos = [tempoObjetivo1,tempoObjetivo2,tempoObjetivo3,tempoObjetivo4];


function calculaTempo(tempoObjetivo) {
    let tempoAtual = new date();
    let tempofinal = tempoObjetivo - tempoAtual;
    let segundos = Math.floor(tempofinal / 1000);
    let minutos = math.floor(segundos / 60);
    let horas = math.floor(minutos / 60);
    let dias = math.floor(horas / 24);

    segundo %= 60;
    minutos %= 60;
    horas %= 24;
    if (tempofinal > 0){
        return [dias,horas,minutos,segundos];
    } else {
        return [0,0,0,0];
    }
}

function atualizaCronometro(){
    for (let i=0; i<contadores.length;i++){
        document.getElementById("dias"+i).textContent = calculaTempo(tempos[i])[0];
        document.getElementById("horas"+i).textContent = calculaTempo(tempos[i])[1];
        document.getElementById("min"+i).textContent = calculaTempo(tempos[i])[2];
        document.getElementById("seg"+i).textContent = calculaTempo(tempos[i])[3];
    }
}

function comecacronometro(){
    atualizaCronometro();
    setInterval(atualizaCronometro,1000);
}

comecacronometro();