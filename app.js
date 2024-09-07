//console.log(dados[1].titulo)
function pesquisar(){
    let section = document.getElementById("resultados-pesquisa")

    let campoPesquisa = document.getElementById("campo-pesquisa").value
    //console.log(campoPesquisa)

    //se campoPesquisa form uma string sem nada
    if(!campoPesquisa){
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome de uma atleta ou esporte</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = ""

    //para cada
    for(let dado of dados){
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        //se titulo includes campoPesquisa
        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){

            //cria um novo elemento HTML para cada Resultado
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

        }

        if(!resultados){
            resultados = "<p>Nada foi encontrado</p>"
        }
        
    section.innerHTML = resultados
}

