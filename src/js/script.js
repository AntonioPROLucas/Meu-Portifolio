//- Objetivo 1 - quando o usuário clicar no botão de mostrar mais deve abrir os projetos que estão escondidos no html 
  //Passo 1 - pegar o botão mostrar mais no JS pra poder verificar quando o usuário clicar em cima dele 
  //definir constantes e funções
  const btnMostrarMais = document.querySelector(".btn-mostrar-projetos");
  const projetosInativos = document.querySelectorAll(".projeto:not(.ativo)");

  function esconderBotao() {
     btnMostrarMais.classList.add("remover");
  }

  function mostrarMaisProjetos() {
     projetosInativos.forEach(projetoInativo => {
         projetoInativo.classList.add('ativo');
     });
 }

  //Passo 2 - identificar o clique no botão
  btnMostrarMais.addEventListener('click', () => {
    //Passo 3 - adicionar a classe ativo nos projetos escondidos 
    mostrarMaisProjetos();
    //- Objetivo 2 - esconder o botão de mostrar mais 
    //  Passo 1 - pegar o botão e esconder ele 
    esconderBotao();

  });
  


