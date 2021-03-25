<div lj-type="stage" style="max-width: 911.57px; height:358.62px;">
    <div lj-type="layer" lj-default-frame="main-menu" style="overflow: hidden;">
        <div lj-type="frame" lj-name="main-menu" lj-transition="fade">
            <ul id="main-menu-btn" class="m-0 p-0 form-inline bg-black"></ul>
        </div>
        <div lj-type="frame" lj-name="logon-menu" lj-transition="fade">
            <ul id="logon-menu-btn" class="m-0 p-0 form-inline bg-black"></ul>
        </div>
        <div lj-type="frame" lj-name="setpwd-menu" lj-transition="fade">
            <ul id="setpwd-menu-btn" class="m-0 p-0 form-inline bg-black"></ul>
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
