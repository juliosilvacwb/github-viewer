class Rotas {
    constructor() {
        this.usuarioService = new UsuarioService();
        this.repositoriosService = new RepositoriosService();

        this._repositoriosComponent = new RepositoriosComponent();
        this._detalhesRepositorioComponent = new DetalhesRepositorioComponent();
        this._detalhesUsuarioComponent = new DetalhesUsuarioComponent();
        this._homeComponent = new HomeComponent();

        this.homeController = new HomeController(this, this.usuarioService);
        this.repositorioController = new RepositorioController(this, this.repositoriosService);
        
        if(window.location.search) {
            this.tratarSearch(window.location.search);
        } else {
            this.rotear(window.location.pathname);
        }
    }
    
    rotear(pathname) {
        if(pathname === '/') {
            this._homeComponent.template().then(template => {
                $("#main").html(template);
            })
        } else if (pathname.includes('/detalhes')) {
            this.usuarioService.buscarUsuario(pathname.split('/')[2])
            .then(usuario => {
                if(usuario.location && usuario.name) {
                    this._detalhesUsuarioComponent.template(usuario).then(template=> {
                        $("#main").html(template);
                    })
                } else {
                    $("#mensagem").removeClass("oculto");
                }
            });
        } else if (pathname.includes('/repositorios') && pathname.split('/').length == 3) {
            this.repositoriosService.buscarRepositorios(pathname.split('/')[2])
            .then(repositorios => {
                this._repositoriosComponent.template(pathname.split('/')[2], repositorios).then(template=> {
                    $("#main").html(template);
                })
            });
        } else if (pathname.includes('/repositorios') && pathname.split('/').length == 4) {
            this.repositoriosService.buscarRepositorio(`${pathname.split('/')[2]}/${pathname.split('/')[3]}`)
            .then(repositorio => {
                this._detalhesRepositorioComponent.template(repositorio).then(template=> {
                    $("#main").html(template);
                })
            });
        }
    }

    go(uri) {
        history.pushState( {id: uri }, 'GitHub Viewer', uri );
        this.rotear(uri);
    }
    
    tratarSearch(search) {
        if(this.isUrlValida(search)) {
            let parts = search.split("/");
            
            if(search.split("/").length == 3) {
                history.pushState( {id: `/${parts[1]}/${parts[2]}` }, 'GitHub Viewer', `/${parts[1]}/${parts[2]}` );
            } else if(search.split("/").length == 4) {
                history.pushState( {id: `/${parts[1]}/${parts[2]}/${parts[3]}` }, 'GitHub Viewer', `/${parts[1]}/${parts[2]}/${parts[3]}` );
            }

            this.rotear(window.location.pathname);
        } else {
            let parts = search.split("/");
            history.pushState( {id: '/' }, 'GitHub Viewer', '/' );
            this.rotear(window.location.pathname);
        }
    }

    isUrlValida(search) {
        if(search.startsWith("?url=/repositorios") 
            && ( search.split("/").length == 3 || search.split("/").length == 4)) 
                return true;
        if(search.startsWith("?url=/detalhes") && search.split("/").length == 3) 
            return true;
    }
}