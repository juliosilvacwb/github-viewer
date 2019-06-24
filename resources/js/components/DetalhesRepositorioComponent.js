class DetalhesRepositorioComponent {
    
    constructor() {
    }

    template(username, repositorio) {

        return new Promise((resolve, reject)=> {
            resolve(this.montarTemplate(username, repositorio)),
            reject(Error("Erro interno"))
        })
    }

    montarTemplate(username, repositorio) {
        let component = `<nav aria-label="breadcrumb" style="margin-top: 1em;">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="/">Home</a></li>
                                <li class="breadcrumb-item">
                                    <span onclick="rotas.homeController.buscarUsuario('${username}')" 
                                        id="repositorios" class="card-link link">Detalhes Usuário</span>
                                </li>
                                <li class="breadcrumb-item">
                                    <span onclick="rotas.detalhesRepositorioController.buscarRepositorio('${username}')" 
                                        id="repositorios" class="card-link link">Repositórios</span>
                                </li>
                                <li class="breadcrumb-item active" aria-current="page">${repositorio ? repositorio.name : ''}</li>
                            </ol>
                        </nav>`
        if(repositorio) {
            return `${component} ${this.montarCard(repositorio)}`
        } else {
            return `${component} <br/> Repositório não encontrado`
        }
    }

    montarCard(repositorio) {
       return `<div class="card col-sm-12" ">
            <div class="card-body">
                <h5 class="card-title">${repositorio.name}</h5>
                <p class="card-text">${repositorio.description}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Estrelas: ${repositorio.stargazers_count}</li>
                <li class="list-group-item">Linguagem: ${repositorio.linguagem ? repositorio.linguagem : 'Não informado'}</li>
            </ul>
            <div class="card-body">
                <a href="${repositorio.html_url}" class="card-link">Ver no GitHub</a>
            </div>
        </div>`
    }

}