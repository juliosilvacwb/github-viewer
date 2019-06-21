class RepositorioController {

    constructor(rotas, repositorioService) {
        this._repositorioService = repositorioService;
        this._rotas = rotas;
     }

    buscarRepositorio(full_name) {
        this._rotas.go(`/repositorios/${full_name}`);
    }

    
}