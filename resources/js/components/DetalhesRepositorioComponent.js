class DetalhesRepositorioComponent {
    
    constructor() {
    }

    template(repositorio) {
        let card = this.montarCard(repositorio);
        console.log(card)
        let component = 
        `<nav aria-label="breadcrumb" style="margin-top: 1em;">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="/">Home</a></li>
                <li class="breadcrumb-item"><a href="/detalhes/${repositorio.owner.login}">Detalhes</a></li>
                <li class="breadcrumb-item"><a href="/repositorios/${repositorio.owner.login}">Repositorios</a></li>
                <li class="breadcrumb-item active" aria-current="page">${repositorio.name}</li>
            </ol>
        </nav>
        ${this.montarCard(repositorio)}`;

        return new Promise((resolve, reject)=> {
            resolve(component),
            reject(Error("Erro interno"))
        })
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