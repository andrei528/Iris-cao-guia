
// scripts.js

function pararTodosOsAudios() {
    const audios = document.querySelectorAll("audio");
    audios.forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
    });
}

// Mobile menu toggle
document.getElementById('mobile-menu-button').addEventListener('click', function() {
  const menu = document.getElementById('mobile-menu');
  menu.classList.toggle('hidden');
});

// Accordion functionality
document.querySelectorAll('.accordion-header').forEach(button => {
  button.addEventListener('click', () => {
    const accordion = button.closest('.accordion');
    const icon = button.querySelector('.fa-chevron-down');

    accordion.classList.toggle('active');

    if (accordion.classList.contains('active')) {
      icon.style.transform = 'rotate(180deg)';
      pararTodosOsAudios();

      const audioPerguntaId = button.getAttribute('data-audio-pergunta');
      const audioRespostaId = button.getAttribute('data-audio-resposta');

      const audioPergunta = document.getElementById(audioPerguntaId);
      const audioResposta = document.getElementById(audioRespostaId);

      audioPergunta.play().catch(err => console.log("Erro ao tocar o áudio:", err));

      audioPergunta.onended = function() {
          audioResposta.play().catch(err => console.log("Erro ao tocar o áudio:", err));
      }
    } else {
      pararTodosOsAudios();
      icon.style.transform = 'rotate(0deg)';
    }
  });
});

// Sponsor carousel animation
const sponsors = document.querySelectorAll('.sponsor-carousel div');
sponsors.forEach(sponsor => {
  const clone = sponsor.cloneNode(true);
  document.querySelector('.sponsor-carousel').appendChild(clone);
});
