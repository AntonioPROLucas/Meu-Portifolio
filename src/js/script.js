//- Objetivo 1 - quando o usuário clicar no botão de mostrar mais deve abrir os projetos que estão escondidos no html 
  //Passo 1 - pegar o botão mostrar mais no JS pra poder verificar quando o usuário clicar em cima dele 
  //definir constantes e funções
  const btnMostrarMais = document.querySelector(".btn-mostrar-projetos");
  const projetosInativos = document.querySelectorAll(".projeto:not(.ativo)");
  const btnMostrarCertificados = document.querySelector(".btn-mostrar-certificados");
  const certificadosInativos = document.querySelectorAll(".certificado:not(.ativo)");


  function esconderBotao() {
     btnMostrarMais.classList.add("remover");
  }

  function mostrarMaisProjetos() {
     projetosInativos.forEach(projetoInativo => {
         projetoInativo.classList.add('ativo');
     });
 }

  function esconderBotao2() {
     btnMostrarCertificados.classList.add("remover");
  }

 function mostrarMaisCertificados() {
    certificadosInativos.forEach(certificadoInativo => {
        certificadoInativo.classList.add('ativo');
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


  //Passo 2 - identificar o clique no botão
  btnMostrarCertificados.addEventListener('click', () => {
    //Passo 3 - adicionar a classe ativo nos projetos escondidos 
    mostrarMaisCertificados();
    //- Objetivo 2 - esconder o botão de mostrar mais 
    //  Passo 1 - pegar o botão e esconder ele 
    esconderBotao2();

  });