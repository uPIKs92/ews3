<nav class="navbar navbar-expand-lg navbar-light ">
    <div class="navbar-brand">
        <img src="{{ asset('ico/scenario.png') }}">Asset Builder
    </div>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item ">
                <a class="nav-link" href="{{ route('skenario.editor') }}">Skenario Editor</span></a>
            </li>
            <li class="nav-item active">
                <a class="nav-link" href="{{ route('asset.builder') }}">Asset Builder</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="{{ route('instruktur.index') }}">Publisher</a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="false">
                    <i class="fa fa-bars fa-lg"></i>
                </a>
                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                    <div class="arrow-up"></div>
                    <a class="dropdown-item" href="#">Select Object</a>
                    <a class="dropdown-item" href="#">Map Layer</a>
                    <a class="dropdown-item" href="#" data-toggle="modal" data-target="#modal-list-asset">Asset List</a>
                    <a class="dropdown-item" href="#" onclick="modalTyco()">Tyco List</a>
                    <!--<div class="dropdown-divider"></div>-->
                    <a class="dropdown-item" href="#"
                        style="background: var(--customRed); color: white; border-radius: 4px">Sign Out</a>
                </div>
            </li>
        </ul>
    </div>
</nav>
