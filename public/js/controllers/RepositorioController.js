class RepositorioController {

    constructor(rotas, repositorioService) {
        this._repositorioService = repositorioService;
        this._repositoriosComponent = new RepositoriosComponent();
        this._rotas = rotas;
        this._username = '';
        this._repositorios = [];
     }

    buscarRepositorio(full_name) {
        this._rotas.go(`/repositorios/${full_name}`);
    }

    ordernarPor(coluna) {
        this._repositorios.sort(function(a, b){return b[coluna]-a[coluna]});
        this.montarTemplate();
    }

    montarTemplate() {
        this._repositoriosComponent.template(this._username, this._repositorios)
        .then(template => $("#main").html(template))
    }
    
    template(username) {
        this._repositorioService.buscarRepositorios(username)
        .then(repositorios => {
            if(repositorios) {
                this._repositorios = repositorios;
                this.ordernarPor('stargazers_count');
                this._username = username;
            }
            this.montarTemplate();
        })
        .catch(() => this.montarTemplate());
    }

    
}