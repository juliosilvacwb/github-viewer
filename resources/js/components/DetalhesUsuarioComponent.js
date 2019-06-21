class DetalhesUsuarioComponent {
    
    constructor() {
    }

    template(usuario) {
        return new Promise((resolve, reject)=> {
            resolve(
            `<nav aria-label="breadcrumb" style="margin-top: 1em;">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="/">Home</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Detalhes</li>
                </ol>
            </nav>

            <div class="card-deck">

                <div class="card">
                    <div class="row no-gutters">
                        <div class="col-md-4" style="padding: 0.2em;">
                            <img src="${ usuario.avatar_url }" id="avatar" class="card-img-top" alt="imagem do usuário">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title" id="username">${ usuario.name }</h5>
                                <h6 class="card-subtitle mb-2 text-muted">Bio</h6>
                                <p class="card-text" id="bio">${ usuario.bio ?  usuario.bio : ''}</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="card">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                            <span class="text-muted">Email: </span>
                            <span id="email">${ usuario.email ?  usuario.email : 'Não informado'}</span>
                        </li>
                        <li class="list-group-item">
                            <span class="text-muted">Número de seguidores: </span>
                            <span id="following">${ usuario.following }</span>:
                        </li>
                        <li class="list-group-item">
                            <span class="text-muted">Número de seguidos: </span>
                            <span id="followers">${ usuario.followers }</span>
                        </li>
                        <li class="list-group-item">
                            <a href="/repositorios/${ usuario.login }" id="repositorios" class="card-link">Repositórios</a>
                        </li>
                    </ul>
                </div>
            </div>`),
            reject(Error("Erro interno"))
        })
    }

}