class HomeController {

    constructor(rotas, usuarioService) {
        this._usuarioService = usuarioService;
        this._rotas = rotas;
     }

    buscarUsuario(event) {
        event.preventDefault();
        let username = $("#search").val();
        this._rotas.go(`/detalhes/${username}`);
    }

    
}