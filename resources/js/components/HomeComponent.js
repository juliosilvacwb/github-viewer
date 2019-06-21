class HomeComponent {
    constructor() {}

    template() {
        return new Promise((resolve, reject)=> {
            resolve(
            `<div class="home">
                <div class="row">
                    <div class="col-md-8 offset-md-2 box-img">
                        <img class="imagem" src="resources/img/image-home.svg">
                    </div>
                </div>
                <form id="form" onsubmit="rotas.homeController.buscarUsuario(event)">
                    <div class="row">
                        <div class="col-md-8 offset-md-2">
                            <div class="alert alert-danger oculto" role="alert" id="mensagem">
                                Usuário não encontrado
                            </div>
                        </div>
                        <div class="col-md-6 offset-md-2">
                            <input class="form-control" id="search" type="search" placeholder="Informe o nome do usuário do gihub" aria-label="Pesquisar">
                        </div>
                        <div class="col-md-2">
                            <button class="btn btn-outline-success" type="submit">Pesquisar</button>
                        </div>
                    </div>
                </form>
            </div>`),
            reject(Error("Erro interno"))
        })
    }

}