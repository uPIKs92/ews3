<div lj-type="stage" style="max-width: 911.57px; height:358.62px;">
    <div lj-type="layer" lj-default-frame="main-menu" style="overflow: hidden;">
        <div lj-type="frame" lj-name="main-menu" lj-transition="fade">
            <ul id="main-menu-btn" class="m-0 p-0 form-inline"></ul>
        </div>
        <div lj-type="frame" lj-name="logon-menu" lj-transition="fade">
            <ul id="logon-menu-btn" class="m-0 p-0 form-inline"></ul>
        </div>
        <div lj-type="frame" lj-name="setpwd-menu" lj-transition="fade">
            <ul id="setpwd-menu-btn" class="m-0 p-0 form-inline"></ul>
        </div>
        <div lj-type="frame" lj-name="ppibrt-menu" lj-transition="fade">
            <ul id="ppibrt-menu-btn" class="m-0 p-0 form-inline text-none"></ul>
        </div>
        <div lj-type="frame" lj-name="commet-menu" lj-transition="fade">
            <ul id="commet-menu-btn" class="m-0 p-0 form-inline"></ul>
        </div>
        <div lj-type="frame" lj-name="movbtm-menu" lj-transition="fade">
            <ul id="movbtm-menu-btn" class="m-0 p-0 form-inline"></ul>
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
            <ul id="alpha-menu-btn" class="m-0 p-0 form-inline bg-dark" style="width: 911.57px;">
                <li class="btn btn-box-sm">1</li>
                <li class="btn btn-box-sm">2</li>
                <li class="btn btn-box-sm">3</li>
                <li class="btn btn-box-sm">4</li>
                <li class="btn btn-box-sm">5</li>
                <li class="btn btn-box-sm">6</li>
                <li class="btn btn-box-sm">7</li>
                <li class="btn btn-box-sm">8</li>
                <li class="btn btn-box-sm">9</li>
                <li class="btn btn-box-sm">0</li>
                <li class="btn btn-box-sm">-</li>
                <li class="btn-box-sm-half"></li>
                <li class="btn btn-box-sm">q</li>
                <li class="btn btn-box-sm">w</li>
                <li class="btn btn-box-sm">e</li>
                <li class="btn btn-box-sm">r</li>
                <li class="btn btn-box-sm">t</li>
                <li class="btn btn-box-sm">y</li>
                <li class="btn btn-box-sm">u</li>
                <li class="btn btn-box-sm">i</li>
                <li class="btn btn-box-sm">o</li>
                <li class="btn btn-box-sm">p</li>
                <li class="btn-box-sm-half"></li>
                <li class="btn btn-box-sm"></li>
                <li class="btn btn-box-sm">a</li>
                <li class="btn btn-box-sm">s</li>
                <li class="btn btn-box-sm">d</li>
                <li class="btn btn-box-sm">f</li>
                <li class="btn btn-box-sm">g</li>
                <li class="btn btn-box-sm">h</li>
                <li class="btn btn-box-sm">j</li>
                <li class="btn btn-box-sm">k</li>
                <li class="btn btn-box-sm">l</li>
                <li class="btn btn-box-sm"></li>
                <li class="btn-box-sm-half"></li>
                <li class="btn btn-box-sm"></li>
                <li class="btn btn-box-sm">z</li>
                <li class="btn btn-box-sm">x</li>
                <li class="btn btn-box-sm">c</li>
                <li class="btn btn-box-sm">v</li>
                <li class="btn btn-box-sm">b</li>
                <li class="btn btn-box-sm">n</li>
                <li class="btn btn-box-sm">m</li>
                <li class="btn btn-box-sm"></li>
                <li class="btn btn-box-sm">.</li>
                <li class="btn-box-sm-half"></li>
                <li class="btn btn-box-sm">abort</li>
                <li class="btn btn-box-sm"></li>
                <li class="btn btn-box-sm">nxfld</li>
                <li class="btn btn-box-sm" style="width: 405.35px;">space</li>
                <li class="btn btn-box-sm">bkspc</li>
                <li class="btn btn-box-sm">dlfld</li>
                <li class="btn btn-box-sm">enter</li>
            </ul>
        </div>
    </div>
</div>


{{-- <div id="vKeyboard" name="vKeyboard">
    <li class="btnbtn-box-sm vKeyboard-number" id="keyboard-1" value="1">1</li>
    <li class="btnbtn-box-sm vKeyboard-number" id="keyboard-2" value="2">2</li>
    <li class="btnbtn-box-sm vKeyboard-number" id="keyboard-3" value="3">3</li>
    <li class="btnbtn-box-sm vKeyboard-number" id="keyboard-4" value="4">4</li>
    <li class="btnbtn-box-sm vKeyboard-number" id="keyboard-5" value="5">5</li>
    <li class="btnbtn-box-sm vKeyboard-number" id="keyboard-6" value="6">6</li>
    <li class="btnbtn-box-sm vKeyboard-number" id="keyboard-7" value="7">7</li>
    <li class="btnbtn-box-sm vKeyboard-number" id="keyboard-8" value="8">8</li>
    <li class="btnbtn-box-sm vKeyboard-number" id="keyboard-9" value="9">9</li>
    <li class="btnbtn-box-sm vKeyboard-number vKeyboard-double" id="keyboard-0" value="0">0</li>
    <li class="btnbtn-box-sm vKeyboard-symbol" id="keyboard-tiret" value="-">-</li>
    <li class="btn-box-sm-half"></li>
    <li class="btnbtn-box-sm vKeyboard-letter" id="keyboard-Q" value="Q">q</li>
    <li class="btnbtn-box-sm vKeyboard-letter" id="keyboard-W" value="W">w</li>
    <li class="btnbtn-box-sm vKeyboard-letter" id="keyboard-E" value="E">e</li>
    <li class="btnbtn-box-sm vKeyboard-letter" id="keyboard-R" value="R">r</li>
    <li class="btnbtn-box-sm vKeyboard-letter" id="keyboard-T" value="T">t</li>
    <li class="btnbtn-box-sm vKeyboard-letter" id="keyboard-Y" value="Y">y</li>
    <li class="btnbtn-box-sm vKeyboard-letter" id="keyboard-U" value="U">u</li>
    <li class="btnbtn-box-sm vKeyboard-letter" id="keyboard-I" value="I">i</li>
    <li class="btnbtn-box-sm vKeyboard-letter" id="keyboard-O" value="O">o</li>
    <li class="btnbtn-box-sm vKeyboard-letter" id="keyboard-P" value="P">p</li>
    <li class="btn-box-sm-half"></li>
    <li class="btnbtn-box-sm"></li>
    <li class="btnbtn-box-sm vKeyboard-letter" id="keyboard-A" value="A">a</li>
    <li class="btnbtn-box-sm vKeyboard-letter" id="keyboard-S" value="S">s</li>
    <li class="btnbtn-box-sm vKeyboard-letter" id="keyboard-D" value="D">d</li>
    <li class="btnbtn-box-sm vKeyboard-letter" id="keyboard-F" value="F">f</li>
    <li class="btnbtn-box-sm vKeyboard-letter" id="keyboard-G" value="G">g</li>
    <li class="btnbtn-box-sm vKeyboard-letter" id="keyboard-H" value="H">h</li>
    <li class="btnbtn-box-sm vKeyboard-letter" id="keyboard-J" value="J">j</li>
    <li class="btnbtn-box-sm vKeyboard-letter" id="keyboard-K" value="K">k</li>
    <li class="btnbtn-box-sm vKeyboard-letter" id="keyboard-L" value="L">l</li>
    <li class="btnbtn-box-sm"></li>
    <li class="btn-box-sm-half"></li>
    <li class="btnbtn-box-sm"></li>
    <li class="btnbtn-box-sm vKeyboard-letter" id="keyboard-Z" value="Z">z</li>
    <li class="btnbtn-box-sm vKeyboard-letter" id="keyboard-X" value="X">x</li>
    <li class="btnbtn-box-sm vKeyboard-letter" id="keyboard-C" value="C">c</li>
    <li class="btnbtn-box-sm vKeyboard-letter" id="keyboard-V" value="V">v</li>
    <li class="btnbtn-box-sm vKeyboard-letter" id="keyboard-B" value="B">b</li>
    <li class="btnbtn-box-sm vKeyboard-letter" id="keyboard-N" value="N">n</li>
    <li class="btnbtn-box-sm vKeyboard-letter" id="keyboard-M" value="M">m</li>
    <li class="btnbtn-box-sm"></li>
    <li class="btnbtn-box-sm vKeyboard-number vKeyboard-symbol vKeyboard-pad" id="keyboard-." value=".">.</li>
    <li class="btn-box-sm-half"></li>
    <li class="btnbtn-box-sm">abort</li>
    <li class="btnbtn-box-sm"></li>
    <li class="btnbtn-box-sm">nxfld</li>
    <li class="btnbtn-box-sm vKeyboard-symbol vKeyboard-space" id="keyboard-space" value=" " style="width: 405.35px;">
        space
    </li>
    <li class="btnbtn-box-sm vKeyboard-return vKeyboard-numOk vKeyboard-double" id="keyboard-return" value="">bkspc</li>
    <li class="btnbtn-box-sm">dlfld</li>
    <li class="btnbtn-box-sm vKeyboard-enter vKeyboard-double" disabled="disabled" id="keyboard-enter">enter</li>
</div> --}}