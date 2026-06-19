document.getElementById('btn-mensagens').addEventListener('click', function(e) {
    e.preventDefault();
    this.closest('.notificacao-container').classList.toggle('aberto');
});

document.addEventListener('click', function(e) {
    if (!e.target.closest('.notificacao-container')) {
        document.querySelectorAll('.notificacao-container').forEach(el => {
            el.classList.remove('aberto');
        });
    }
});