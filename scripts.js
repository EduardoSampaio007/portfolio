//Função para fazer a troca do conteúdo

function mostrarSecao(idSecao){
    const secoes = document.querySelectorAll('#conteudo-dinamico > div');

    secoes.forEach( secao => {
        secao.classList.add('secao-oculta');
    });

    const secaoParaMostrar = document.getElementById(idSecao);
    if(secaoParaMostrar){
        secaoParaMostrar.classList.remove('secao-oculta');
    }
}

