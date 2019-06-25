class HomeController {

    constructor(rotas) {
        this._rotas = rotas;
        this._homeComponent = new HomeComponent();
    }

    buscarUsuario(username) {
        username = username ? username : $("#search").val();
        this._rotas.go(`/detalhes/${username}`);
    }

    template() {
        this._homeComponent.template().then(template => $("#main").html(template))
    }

}