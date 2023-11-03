function toggleMode() {
    const html = document.documentElement

    html.classList.toggle('light')
}

function togglePipoca() {
    const img = document.getElementById('imagem');

    imagem.addEventListener('mouseover', function() {
        imagem.src = 'pipoca.png';
      });
      
      imagem.addEventListener('mouseout', function() {
        imagem.src = 'pipoca1.png';
      });
}