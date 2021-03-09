<nav class="navbar navbar-expand-lg navbar-light ">
    <div class="navbar-brand">
        <img src="{{ asset('ico/scenario.png') }}" img alt="logo app">publisher
    </div>
    <form class="form-inline my-2 my-lg-0">
        <button data-item="" class="btn btn-outline-success my-2 my-sm-0" type="button"><i
                class="fa fa-save fa-md"></i>&nbsp;Save Gameplay</button>
    </form>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto ">
            <li class="nav-item">
                <a class="nav-link" href="{{ route('skenario.editor') }}">Skenario Editor</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="{{ route('asset.builder') }}">Asset Builder</a>
            </li>
            <li class="nav-item active">
                <a class="nav-link" href="{{ route('instruktur.index') }}">Publisher</a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="false" aria-label="ddBars">
                    <i class="fa fa-bars fa-lg"></i>
                </a>
                <ul id="nav-dropdown" class="dropdown-menu dropdown-menu-right text-right">
                    <li>
                        <div class="arrow-up"></div>
                        <a href="#" class="dropdown-item" role="button" data-toggle="modal"
                            onclick="openForm('#modal-launch-aircraft')">
                            Launch Aircraft
                            <i class="far fa-plus-square w-Custom2"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="dropdown-item">
                            Military from Random
                            <i class="far fa-fighter-jet w-Custom2"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="dropdown-item">
                            Civil from Random
                            <i class="far fa-fighter-jet w-Custom2"></i>
                        </a>
                    </li>
                    <li>
                        <a class="dropdown-item" href="#" role="button" data-toggle="modal"
                            onclick="openForm('#modal-sim-control')">
                            Simulation Control
                            <i class="far fa-tachometer-alt w-Custom2"></i>
                        </a>
                    </li>
                    <li class="dropdown-item dropdown-submenu p-0">
                        <a href="#" data-toggle="dropdown" class="dropdown-item">
                            Display Setting
                            <i class="far fa-map-marked-alt w-Custom2"></i>
                        </a>
                        <ul class="dropdown-menu text-right">
                            <li class="dropdown-item p-0">
                                <a class="dropdown-item" href="#" role="button" data-toggle="modal"
                                    onclick="openForm('#modal-map-setting')">
                                    Map Layer
                                    <i class="far fa-layer-group w-Custom2"></i>
                                </a>
                            </li>
                            <li class="dropdown-item p-0">
                                <a href="#" class="dropdown-item" role="button" data-toggle="modal"
                                    onclick="openForm('#modal-define-label')">
                                    Define Label
                                    <i class="far fa-list-ol w-Custom2"></i>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a class="dropdown-item" href="#"
                            style="background: var(--customRed); color: white; border-radius: 4px">
                            Sign Out
                            <i class="far fa-sign-out-alt w-Custom2"></i>
                        </a>
                    </li>
                </ul>
            </li>
        </ul>
    </div>

</nav>
