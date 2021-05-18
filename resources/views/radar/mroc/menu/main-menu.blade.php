<div id="stage" lj-type="stage" style="max-width: 911.57px; height:447.78px;">
    <div lj-type="layer" lj-default-frame="main-menu" style="overflow: hidden;">
        <div lj-type="frame" lj-name="main-menu" lj-transition="fade">
            <ul id="main-menu-btn" class="m-0 p-0 form-inline"></ul>
        </div>
        <div lj-type="frame" lj-name="logon-menu" lj-transition="fade">
            <ul id="logon-menu-btn" class="m-0 p-0 form-inline"></ul>
        </div>
        <div lj-type="frame" lj-name="totes-menu" lj-transition="fade">
            <ul id="totes-menu-btn" class="m-0 p-0 form-inline"></ul>
        </div>
        <div lj-type="frame" lj-name="maps-menu" lj-transition="fade">
            <ul id="maps-menu-btn" class="m-0 p-0 form-inline"></ul>
        </div>
        <div lj-type="frame" lj-name="creftr-menu" lj-transition="fade">
            <ul id="creftr-menu-btn" class="m-0 p-0 form-inline"></ul>
        </div>
        <div lj-type="frame" lj-name="crevec-menu" lj-transition="fade">
            <ul id="crevec-menu-btn" class="m-0 p-0 form-inline"></ul>
        </div>
        <div lj-type="frame" lj-name="line-menu" lj-transition="fade">
            <ul id="line-menu-btn" class="m-0 p-0 form-inline"></ul>
        </div>
        <div lj-type="frame" lj-name="color-menu" lj-transition="fade">
            <ul id="color-menu-btn" class="m-0 p-0 form-inline"></ul>
        </div>
        <div lj-type="frame" lj-name="crecir-menu" lj-transition="fade">
            <ul id="crecir-menu-btn" class="m-0 p-0 form-inline"></ul>
        </div>
        <div lj-type="frame" lj-name="crearc-menu" lj-transition="fade">
            <ul id="crearc-menu-btn" class="m-0 p-0 form-inline"></ul>
        </div>
        <div lj-type="frame" lj-name="histry-menu" lj-transition="fade">
            <ul id="histry-menu-btn" class="m-0 p-0 form-inline"></ul>
        </div>
        <div lj-type="frame" lj-name="trklin-menu" lj-transition="fade">
            <ul id="trklin-menu-btn" class="m-0 p-0 form-inline"></ul>
        </div>
        <div lj-type="frame" lj-name="selreg-menu" lj-transition="fade">
            <ul id="selreg-menu-btn" class="m-0 p-0 form-inline"></ul>
        </div>
        <div lj-type="frame" lj-name="stbsrc-menu" lj-transition="fade">
            <ul id="stbsrc-menu-btn" class="m-0 p-0 form-inline"></ul>
        </div>
        <div lj-type="frame" lj-name="amdreg-menu" lj-transition="fade">
            <ul id="amdreg-menu-btn" class="m-0 p-0 form-inline"></ul>
        </div>
        <div lj-type="frame" lj-name="commet-menu" lj-transition="fade">
            <ul id="commet-menu-btn" class="m-0 p-0 form-inline"></ul>
        </div>
        <div lj-type="frame" lj-name="pltsel-menu" lj-transition="fade">
            <ul id="pltsel-menu-btn" class="m-0 p-0 form-inline"></ul>
        </div>
        <div lj-type="frame" lj-name="pltsrc-menu" lj-transition="fade">
            <ul id="pltsrc-menu-btn" class="m-0 p-0 form-inline"></ul>
        </div>
        <div lj-type="frame" lj-name="tacmis-menu" lj-transition="fade">
            <ul id="tacmis-menu-btn" class="m-0 p-0 form-inline"></ul>
        </div>
        <div lj-type="frame" lj-name="seltmp-menu" lj-transition="fade">
            <ul id="seltmp-menu-btn" class="m-0 p-0 form-inline"></ul>
        </div>
        <div lj-type="frame" lj-name="crptm-menu" lj-transition="fade">
            <ul id="crptm-menu-btn" class="m-0 p-0 form-inline"></ul>
        </div>
        <div lj-type="frame" lj-name="scrmbl-menu" lj-transition="fade">
            <ul id="scrmbl-menu-btn" class="m-0 p-0 form-inline"></ul>
        </div>
        <div lj-type="frame" lj-name="settrk-menu" lj-transition="fade">
            <ul id="settrk-menu-btn" class="m-0 p-0 form-inline"></ul>
        </div>
        <div lj-type="frame" lj-name="labpos-menu" lj-transition="fade">
            <ul id="labpos-menu-btn" class="m-0 p-0 form-inline"></ul>
        </div>
        <div lj-type="frame" lj-name="trksel-menu" lj-transition="fade">
            <ul id="trksel-menu-btn" class="m-0 p-0 form-inline"></ul>
        </div>
    </div>
    <div lj-type="layer" lj-name="menulayer" lj-native-scroll="false">
        <!-- The layer for the menu on top of the main content -->
        <div lj-type="frame" lj-name="closed" class="nav" lj-fit-to="responsive-width" lj-transition="fade"
            lj-neighbors.l="#sidemenu">
            <!-- The frame for the menu in the closed state -->
        </div>
        <div lj-type="frame" lj-name="sidemenu" class="nav menu" lj-fit-to="responsive-height" lj-transition="right"
            lj-neighbors.r="closed">
            <!-- The frame for the menu in the open state. The "neighbors" attribute allows swipe gestures to close the menu. -->
            <!-- The close button with a link to the closed state. -->
            <div id="alpha-menu-btn" class="m-0 p-0">
                <div class="vKeyboard" id="vKeyboard" name="vKeyboard">
                    <ul class="m-0 p-0 form-inline bg-dark list-unstyled" style="width: 911.57px;">
                        <li><button type="button" class="btn btn-box-sm vKeyboard-number" id="keyboard-1"
                                value="1">1</button></li>
                        <li><button type="button" class="btn btn-box-sm vKeyboard-number" id="keyboard-2"
                                value="2">2</button></li>
                        <li><button type="button" class="btn btn-box-sm vKeyboard-number" id="keyboard-3"
                                value="3">3</button></li>
                        <li><button type="button" class="btn btn-box-sm vKeyboard-number" id="keyboard-4"
                                value="4">4</button></li>
                        <li><button type="button" class="btn btn-box-sm vKeyboard-number" id="keyboard-5"
                                value="5">5</button></li>
                        <li><button type="button" class="btn btn-box-sm vKeyboard-number" id="keyboard-6"
                                value="6">6</button></li>
                        <li><button type="button" class="btn btn-box-sm vKeyboard-number" id="keyboard-7"
                                value="7">7</button></li>
                        <li><button type="button" class="btn btn-box-sm vKeyboard-number" id="keyboard-8"
                                value="8">8</button></li>
                        <li><button type="button" class="btn btn-box-sm vKeyboard-number" id="keyboard-9"
                                value="9">9</button></li>
                        <li><button type="button" class="btn btn-box-sm vKeyboard-number vKeyboard-double"
                                id="keyboard-0" value="0">0</button></li>
                        <li><button type="button" class="btn btn-box-sm vKeyboard-symbol" id="keyboard-tiret"
                                value="-">-</button></li>
                        <li class="btn-box-sm-half"></li>
                        <li><button type="button" class="btn btn-box-sm vKeyboard-letter" id="keyboard-Q"
                                value="Q">Q</button></li>
                        <li><button type="button" class="btn btn-box-sm vKeyboard-letter" id="keyboard-W"
                                value="W">W</button></li>
                        <li><button type="button" class="btn btn-box-sm vKeyboard-letter" id="keyboard-E"
                                value="E">E</button></li>
                        <li><button type="button" class="btn btn-box-sm vKeyboard-letter" id="keyboard-R"
                                value="R">R</button></li>
                        <li><button type="button" class="btn btn-box-sm vKeyboard-letter" id="keyboard-T"
                                value="T">T</button></li>
                        <li><button type="button" class="btn btn-box-sm vKeyboard-letter" id="keyboard-Y"
                                value="Y">Y</button></li>
                        <li><button type="button" class="btn btn-box-sm vKeyboard-letter" id="keyboard-U"
                                value="U">U</button></li>
                        <li><button type="button" class="btn btn-box-sm vKeyboard-letter" id="keyboard-I"
                                value="I">I</button></li>
                        <li><button type="button" class="btn btn-box-sm vKeyboard-letter" id="keyboard-O"
                                value="O">O</button></li>
                        <li><button type="button" class="btn btn-box-sm vKeyboard-letter" id="keyboard-P"
                                value="P">P</button></li>
                        <li class="btn-box-sm-half"></li>
                        <li class="btn btn-box-sm"></li>
                        <li><button type="button" class="btn btn-box-sm vKeyboard-letter" id="keyboard-A"
                                value="A">A</button></li>
                        <li><button type="button" class="btn btn-box-sm vKeyboard-letter" id="keyboard-S"
                                value="S">S</button></li>
                        <li><button type="button" class="btn btn-box-sm vKeyboard-letter" id="keyboard-D"
                                value="D">D</button></li>
                        <li><button type="button" class="btn btn-box-sm vKeyboard-letter" id="keyboard-F"
                                value="F">F</button></li>
                        <li><button type="button" class="btn btn-box-sm vKeyboard-letter" id="keyboard-G"
                                value="G">G</button></li>
                        <li><button type="button" class="btn btn-box-sm vKeyboard-letter" id="keyboard-H"
                                value="H">H</button></li>
                        <li><button type="button" class="btn btn-box-sm vKeyboard-letter" id="keyboard-J"
                                value="J">J</button></li>
                        <li><button type="button" class="btn btn-box-sm vKeyboard-letter" id="keyboard-K"
                                value="K">K</button></li>
                        <li><button type="button" class="btn btn-box-sm vKeyboard-letter" id="keyboard-L"
                                value="L">L</button></li>
                        <li class="btn btn-box-sm"></li>
                        <li class="btn-box-sm-half"></li>
                        <li class="btn btn-box-sm"></li>
                        <li><button type="button" class="btn btn-box-sm vKeyboard-letter" id="keyboard-Z"
                                value="Z">Z</button></li>
                        <li><button type="button" class="btn btn-box-sm vKeyboard-letter" id="keyboard-X"
                                value="X">X</button></li>
                        <li><button type="button" class="btn btn-box-sm vKeyboard-letter" id="keyboard-C"
                                value="C">C</button></li>
                        <li><button type="button" class="btn btn-box-sm vKeyboard-letter" id="keyboard-V"
                                value="V">V</button></li>
                        <li><button type="button" class="btn btn-box-sm vKeyboard-letter" id="keyboard-B"
                                value="B">B</button></li>
                        <li><button type="button" class="btn btn-box-sm vKeyboard-letter" id="keyboard-N"
                                value="N">N</button></li>
                        <li><button type="button" class="btn btn-box-sm vKeyboard-letter" id="keyboard-M"
                                value="M">M</button></li>
                        <li class="btn btn-box-sm"></li>
                        <li>
                            <button type="button" class="btn btn-box-sm vKeyboard-number vKeyboard-symbol vKeyboard-pad"
                                id="keyboard-." value=".">
                                .
                            </button>
                        </li>
                        <li class="btn-box-sm-half"></li>
                        <li class="btn btn-box-sm">abort</li>
                        <li class="btn btn-box-sm"></li>
                        <li class="btn btn-box-sm">nxfld</li>
                        <li>
                            <button type="button" class="btn btn-box-sm vKeyboard-symbol vKeyboard-space"
                                id="keyboard-space" value=" " style="width: 405.35px;">
                                space
                            </button>
                        </li>
                        <li>
                            <button type="button"
                                class="btn btn-box-sm vKeyboard-return vKeyboard-numOk vKeyboard-double"
                                id="keyboard-return" value="">
                                bkspc
                            </button>
                        </li>
                        <li class="btn btn-box-sm" id="keyboard-clear">dlfld</li>
                        <li>
                            <button type="button" class="btn btn-box-sm vKeyboard-enter vKeyboard-double"
                                id="keyboard-enter">
                                OK
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
