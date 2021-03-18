<style>
    #map {
        width: 100%;
        top: 60px;
        bottom: 0px;
        position: absolute;
    }

    .menuRight {
        position: absolute;
        right: 20px;
        top: 1%;
        width: 5%;
        cursor: pointer;
        z-index: 400;
        color: #595a88
    }

    .menuLeft {
        position: absolute;
        left: 20px;
        top: 90px;
        width: 5%;
        cursor: pointer;
        z-index: 400;
        color: #595a88
    }

    .submenu {
        margin-top: 11px;
        border-radius: 10px;
        padding: 10px;
        padding-top: 10px;
        padding-bottom: 0px;
        float: left;
        /* width: 100%; */
        position: absolute;
        /* max-height: 400px; */
        /* overflow-y: scroll;
        overflow-x: hidden; */
        background-color: #393e4670;
    }

    .img-thumbnail {
        padding: 3px;
        border-radius: 12px !important;
    }

    .contentMenu {
        /* color: #4c6ef5; */
        width: 40px;
        height: 40px;
        text-align: center;
    }

    .contentMenuLeft {
        /* color: #4c6ef5; */
        width: 46px;
        border-radius: 10px !important;
        height: 46px;
        text-align: center;
        padding: 4px;
    }

    .smd {
        /* width: 50px; */
        font-size: 12px;
        margin-bottom: 10px;
    }

    .contentMenu:hover {
        background-color: #595a88;
        color: #ffffff
    }

    .contentMenuLeft:hover {
        background-color: #595a88;
        color: #ffffff
    }

    .arrow-up {
        width: 0;
        height: 0;
        border-left: 12px solid transparent;
        border-right: 12px solid transparent;
        border-bottom: 12px solid rgb(255, 255, 255);
        top: -8px;
        right: 5;
        position: absolute;
        z-index: -1;
    }

    .cell-1 {
        border-collapse: separate;
        border-spacing: 0 4em;
        background: #ECECEC;
        border-bottom: 5px solid transparent;
        background-clip: padding-box;
        -webkit-background-clip: padding-box;
    }

    .table-cs,
    .table-cs td,
    .table-cs th {
        border: 1px solid black;
        padding: 5px;
        text-align: center;
    }

    .table-cs {
        width: 100%;
        border-collapse: collapse;
        background-color: #d4dbe3;
    }

    .table-cs .form-control {
        width: 80px;
        margin: auto;
    }

    .underline {
        border-bottom: 1px solid black;
        width: 100%;
        display: block;
    }

    .modal-body {
        max-height: calc(100vh - 300px);
        overflow-y: auto;
    }

    /* Stackoverflow preview fix, please ignore */
    .navbar-nav {
        flex-direction: row;
    }

    .nav-link {
        padding-right: .5rem !important;
        padding-left: .5rem !important;
    }

    .my-lg-0 {
        margin: 15px;
    }

    /* Fixes dropdown menus placed on the right side */
    /* .ml-auto .dropdown-menu {
left: auto !important;
right: -10px;
} */

    .tabpane.active {
        background-color: white;
    }

    .btn-sml {
        height: 30px;
        font-size: 10px;
    }

    .transparent-tooltip {
        background: transparent;
        border: 1px solid rgba(0, 0, 0, 0);
        box-shadow: none;
        color: var(--customRed);
        font-weight: bold;
    }

    .transparent-tooltip::before {
        border: none;
    }

    .formFooter {
        position: fixed;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 750;
        height: 40px;
        background-color: #393E46;
    }

    .menuFooter {
        position: absolute;
        left: 20px;
        bottom: 70px;
        width: fit-content;
        width: -moz-fit-content;
        cursor: pointer;
        z-index: 400;
    }

    .formFooter li {
        display: inline-block;
        padding: 5px;
        font-size: 12px;
    }

    .formFooter .input-group-text {
        width: 100%;
        padding: 5px;
        margin: auto;
        text-align: center;
        border-radius: 0;
        border-top-color: #bebebe;
        border-left-color: #bebebe;
        border-bottom-color: #606060;
        border-right-color: #606060;
        border-width: 2px;
        font-size: 12px;
    }

    #runwayForm .form-group {
        margin: 0px;
        padding-bottom: 15px;
    }

    #runwayForm .input-group {
        margin-right: 5px;
    }

    #runwayForm .tableBtn {
        padding-bottom: 15px;
        margin-left: 4px;
    }

    #runwayForm a.btn {
        height: 38px;
        width: 38px;
        padding-top: 15px;
        margin-left: 6px;
    }

    #modal-list-asset .col-sm-12.mt-1 {
        background-color: #fd9727;
        border-style: none;
    }

    #modal-list-asset .col-sm-12.mt-1 h5 {
        width: 95.8%;
        display: inline-block;
    }

    #modal-list-asset .col-sm-12 {

        margin-bottom: 15px;
    }

    #modal-list-asset .col-md-5,
    #modal-list-asset .col-md-6,
    #modal-list-asset .col-md-7 {
        border-style: none;
        background-color: #ebebeb;
    }

    #modal-list-asset .dataTables_length label,
    #modal-list-asset .dataTables_filter label {
        margin: 0px;
    }

    #form-aircraft-list a {
        background-color: #ebebeb;
        cursor: pointer;
    }

    #form-aircraft-list a:hover,
    #form-aircraft-list a:active {
        background-color: #343a40;
        color: #ffffff;
        cursor: pointer;
    }


    #contentAircraft .form-control {
        width: 65px;
        padding-left: 0px;
        text-align: center;
    }

    #contentAircraft .row {
        width: fit-content;
    }

    #contentAircraft .col-sm-10 {
        padding: 0px;
        background-color: #ebebeb;
    }

    #contentAircraft .col-form-label {
        background-color: #ebebeb;
    }

    #modal-scenario .col-sm-10,
    #modal-scenario .col-sm-2 {
        max-width: 50%;
    }

    #modal-scenario .input-group-text {
        width: 112px;
    }

    #modal-scenario .form-control {
        max-width: 100%;
    }

    #modal-add-aircraft .form-control {
        max-width: 170px;
    }

    #modal-add-aircraft .input-group-text {
        width: 142px;
    }

    #modal-add-aircraft h6 {
        margin: auto;
        margin-left: 10px;
    }

    ul .dropdown-menu {
        padding-left: 0px;
    }

    #nav-dropdown .dropdown-item {
        width: 230px;
    }

    a#navbarDropdown {
        text-decoration: none;
    }

    .modal {
        min-height: 5%;
        /* width: fit-content;
        left: 40%; */
    }

    .switch {
        display: inline-block;
        height: 34px;
        position: relative;
        width: 60px;
        margin: auto;
        left: 50%;
        transform: translateX(-50%);
    }

    .switch input {
        display: none;
    }

    .slider {
        background-color: #c05454;
        bottom: 0;
        cursor: pointer;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
        transition: .4s;
    }

    .slider:before {
        background-color: #fff;
        bottom: 4px;
        content: "";
        height: 26px;
        left: 4px;
        position: absolute;
        transition: .4s;
        width: 26px;
    }

    input:checked+.slider {
        background-color: #66bb6a;
    }

    input:checked+.slider:before {
        transform: translateX(26px);
    }

    .slider.round {
        border-radius: 34px;
    }

    .slider.round:before {
        border-radius: 50%;
    }

    .col-1,
    .col-2,
    .col-3,
    .col-4,
    .col-5,
    .col-6,
    .col-7,
    .col-8,
    .col-9,
    .col-10,
    .col-12,
    .col {
        border-style: none;
        padding: 10px
    }

    #modal-sim-control .form-control {
        background-color: #fff;
    }

    select {
        text-align-last: right;
    }

    option {
        direction: rtl;
    }

    label[for=r],
    output[for=r] {
        background-color: #f00;
        width: 35px;
    }

    label[for=g],
    output[for=g] {
        background-color: #0f0;
        width: 35px;
    }

    label[for=b],
    output[for=b] {
        background-color: #00f;
        width: 35px;
    }

    #hex {
        min-width: 4.5em;
        height: 90px;
        font-size: 10px;
        background: rgb(0, 0, 0);
    }

    .btnToggle {
        /* transform: translateX(227%); */
    }

    .btnToggle .btn.active {
        display: none;
    }

    .btnToggle input[type="radio"] {
        display: none;
    }

    .btnToggle .fixBtn {
        width: 88px;
        height: 20px
    }

    .btnToggle .down {
        color: #fff;
        border-bottom-color: #fff;
        border-right-color: #fff;
        border-bottom-width: 2px;
        border-right-width: 2px;
        border-top-color: #000;
        border-left-color: #000;
        /* box-shadow: 0 0 0 1px rgba(216, 217, 219, 0.5); */
    }

    .ul-btn img {
        height: 50px;
        width: 50px;
        padding: 0;
        /* filter: sepia(100%); */
    }

    .ul-btn img:hover {
        /* filter: sepia(0%); */
        box-shadow: 0 0 0 0.2rem rgba(29, 29, 29, 0.5);
    }

    .mini-btn li a {
        width: 22px;
        height: 17px;
    }

    .pagination li:hover {
        cursor: pointer;
    }

    table tbody tr {
        display: none;
    }

    #page_nav a,
    #page_nav a:active {
        text-decoration: none;
        color: #aeaead;
        margin-top: 9px;
        padding-bottom: 20px;
        display: block;
    }

    #page_nav a:hover {
        text-decoration: none;
        color: #eefd00;
    }

</style>
