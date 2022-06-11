export const AreaHeader = () => {
    return (
        <div id="header" class="row bg-info">
            <nav class="navbar navbar-expand-lg navbar-light bg-info ">
                <div class="container-fluid">
                    <a class="navbar-brand text-light" href="/"><strong>Penta-Vite-Vanilla</strong></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link text-light" aria-current="page" href="#">Home</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}