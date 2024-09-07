//console.log(dados[1].titulo)
function pesquisar(){
    let section = document.getElementById("resultados-pesquisa")

    let resultados = ""

    //para cada
    for(let dado of dados){
        resultados += `
        <div class="item-resultado">
                        <h2>
                            <a href="https://www.youtube.com/watch?v=U6QlKjfTSpc" target="_blank">${dado.titulo}</a>
                        </h2>
                        <p class="descricao-meta">
                            ${dado.descricao}
                        </p>
                        <a href=${dado.link} target="_blank">Instagram</a>
                    </div>` 
    }

    section.innerHTML = resultados
}

