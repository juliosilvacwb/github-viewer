class HomeComponent {
    constructor() {}

    template() {
        return new Promise((resolve, reject)=> {
            resolve(
            `<div class="home">
                <div class="row">
                    <div class="col-md-8 offset-md-2 box-img">
                        <img src="resources/img/image-home.svg" class="imagem figure-img img-fluid">
                    </div>
                </div>
                <form id="form">
                    <div class="row">
                        <div class="col-md-8 offset-md-2">
                            <div class="alert alert-danger oculto" role="alert" id="mensagem">
                                Usuário não encontrado
                            </div>
                        </div>
                        <div class="col-md-6 offset-md-2 col-sm-12">
                            <input class="form-control" id="search" type="search" placeholder="Informe o usuário do gihub" aria-label="Pesquisar">
                        </div>
                        <div class="col-md-2 col-sm-6" >
                            <button class="btn btn-outline-success" type="button" onclick="rotas.homeController.buscarUsuario()">Pesquisar</button>
                        </div>
                    </div>
                </form>
            </div>`),
            reject(Error("Erro interno"))
        })
    }

}