function pararTodosOsAudios() {
    const audios = document.querySelectorAll("audio");
    audios.forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
    });
}

const botao = document.getElementById("apadrinhe");
const audioApadrinhe = document.getElementById("audio-apadrinhe");

botao.addEventListener('mouseenter', () => {
    pararTodosOsAudios();
    audioApadrinhe.currentTime = 0;
    audioApadrinhe.play().catch(err => console.log("Erro ao tocar o áudio:", err));
});

const audioSob = document.getElementById("audioSobre");
const secaoSob = document.getElementById("sobre");

function tocarSec(secao, audio){
    secao.addEventListener('mouseenter', () => {
        pararTodosOsAudios();
        audio.currentTime = 0;
        audio.play().catch(err => console.log("Erro ao tocar o áudio:", err));
    });
}

const audioVol = document.getElementById("ad-voluntario");
const secaoVol = document.getElementById("voluntario")

tocarSec(secaoSob, audioSob);
tocarSec(secaoVol, audioVol);

