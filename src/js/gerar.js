let sectionCertificados = document.querySelector(".container-certificados");
let sectionProjetos = document.querySelector(".container-projetos");

let resultadoCertificados = "";
let resultadoProjetos = "";

for (let certificado of certificados){
    resultadoCertificados +=
    `
    <div class="${certificado.classe}">
        <a href=${certificado.link} target="_blank">
        <img src=${certificado.link} alt=${certificado.alt}>
        <h3>${certificado.titulo}</h3>
        </a>
    </div>
    `
}

resultadoCertificados += `<button class="btn-mostrar-certificados">Mostrar mais</button>`;

 // Atualiza a seção de resultados com os elementos HTML gerados
 sectionCertificados.innerHTML += resultadoCertificados;

for (let projeto of projetos){
    resultadoProjetos +=
    `
    <div class="${projeto.classe}">
        <a href=${projeto.link} target="_blank">
        <img src=${projeto.imagem} alt=${projeto.alt}>
        <h3>${projeto.titulo}</h3>
        <div class="informacoes-projeto">
            <p>${projeto.descricao}</p>
            <p>🔗 Ver projeto no meu Github</p>
        </div>
        </a>
     </div>
     `
}

resultadoProjetos += `<button class="btn-mostrar-projetos">Mostrar mais</button>`;

sectionProjetos.innerHTML += resultadoProjetos;
            