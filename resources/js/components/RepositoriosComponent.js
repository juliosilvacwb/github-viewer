class RepositoriosComponent {
    
    constructor() {
    }

    template(username, repositorios) {
        let component = 
        `<nav aria-label="breadcrumb" style="margin-top: 1em;">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="/">Home</a></li>
                <li class="breadcrumb-item"><a href="/detalhes/${username}">Detalhes</a></li>
                <li class="breadcrumb-item active" aria-current="page">Repositorios</li>
            </ol>
        </nav>
        ${this.montarTabela(repositorios)}`;

        return new Promise((resolve, reject)=> {
            resolve(component),
            reject(Error("Erro interno"))
        })
    }

    montarTabela(repositorios) {
        repositorios.sort(function(a, b){return b.stargazers_count-a.stargazers_count}); 

        let trs = '';
        repositorios.forEach(rep => {
            trs = trs.concat(`<tr style="cursor: pointer;" onclick="rotas.repositorioController.buscarRepositorio('${rep.full_name}')">
                                <th scope="row">${rep.id}</th>
                                <td>${rep.name}</td>
                                <td>${rep.description}</td>
                                <td>${rep.stargazers_count}</td>
                            </tr>`);
        })

        if(repositorios.length > 0) {
           return   `<table class="table table-hover">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nome</th>
                            <th scope="col">Descrição</th>
                            <th scope="col">Estrelas</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${trs}
                        </tbody>
                    </table>`;
        } else {
            return 'Não há repositórios para apresentar'
        }
    }

}