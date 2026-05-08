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

//Validação do formulário

const formulario = document.getElementById('meu-formulario');
const feedback = document.getElementById('feedback');

formulario.addEventListener('submit', function(event){
    event.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    if(nome === ""){
        exibirFeedback("Por favor, digite seu nome para continuar.", "erro");
        return;
    } 

    if(email === ""){
        exibirFeedback("Por favor, digite seu e-mail para continuar.", "erro");
        return;
    }

    if(mensagem.length < 10){
        exibirFeedback("Sua mensagem precisa ter pelo menos 10 caracteres.", "erro");
        return;
    }

    exibirFeedback("Mensagem enviada com sucesso! 🚀", "sucesso");
    formulario.reset();
})

function exibirFeedback(texto, tipo) {
    feedback.innerText = texto;
    feedback.className = `feedback-ativo ${tipo}`; 

    setTimeout(() => {
        feedback.className = "feedback-oculto";
    }, 4000);
}