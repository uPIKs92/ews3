<html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en">

<head>
    <title>Electronic Warfare Simulator</title>
    <link rel="icon" type="image/png" href="{{ asset('favicon.ico') }}">

    <!-- CSS MAPS -->
    <!-- <link rel="stylesheet" href="{{ asset('css/map.css') }}"> -->

    <!-- JQUERY -->
    <script type="text/javascript" src="{{ asset('plugin/jquery/jquery-3.4.1.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('plugin/jquery/jquery-ui.min.js') }}"></script>
    <!-- MASKED INPUT -->
    <script src="{{ url('plugin/inputmask/jquery.inputmask.bundle.min.js') }}" charset="utf-8"></script>

    <!-- POPPER JS -->
    <script src="{{ asset('plugin/popper/popper.min.js') }}"></script>

    <!-- BOOTSTRAP -->
    <link rel="stylesheet" href="{{ asset('plugin/bootstrap/css/bootstrap.min.css') }}">
    <script src="{{ asset('plugin/bootstrap/js/bootstrap.min.js') }}"></script>
    <link rel="stylesheet" href="{{ asset('plugin/bootstrap/css/bootstrap4-toggle.min.css') }}">
    <script src="{{ asset('plugin/bootstrap/js/bootstrap4-toggle.min.js') }}"></script>
    
    <!-- DATATABLE -->
    <link rel="stylesheet" href="{{ asset('plugin/dataTables/datatables.min.css') }}">
    <script src="{{ asset('plugin/dataTables/datatables.min.js') }}"></script>

    <!-- RADAR STYLE -->
    <link rel="stylesheet" href="{{ asset('css/radar-style.css') }}">

    {{-- pagination 
    <script src="{{ asset('plugin/pagination/pagination.js') }}"></script>--}}

    <!-- FONT AWESOME -->
    <link rel="stylesheet" href="{{ asset('fontawesomePro/css/all.css') }}">

    <!-- SweetAlert -->
    <link rel="stylesheet" type="text/css" href="{{ asset('plugin/sweetalert/sweetalert.css') }}" />
    <script type="text/javascript" src="{{ asset('plugin/sweetalert/sweetalert.min.js') }}"></script>

    <!-- LEAFLET -->
    <link rel="stylesheet" href="{{ asset('plugin/leaflet/leaflet.css') }}">
    <script src="{{ asset('plugin/leaflet/leaflet.js') }}"></script>

    <!-- Draw -->
    <script src="{{ asset('plugin/draw/src/Leaflet.draw.js') }}"></script>
    <script src="{{ asset('plugin/draw/src/Leaflet.Draw.Event.js') }}"></script>
    <script src="{{ asset('plugin/draw/src/Toolbar.js') }}"></script>
    <script src="{{ asset('plugin/draw/src/Tooltip.js') }}"></script>
    <script src="{{ asset('plugin/draw/src/ext/GeometryUtil.js') }}"></script>
    <script src="{{ asset('plugin/draw/src/ext/LatLngUtil.js') }}"></script>
    <script src="{{ asset('plugin/draw/src/ext/LineUtil.Intersect.js') }}"></script>
    <script src="{{ asset('plugin/draw/src/ext/Polygon.Intersect.js') }}"></script>
    <script src="{{ asset('plugin/draw/src/ext/Polyline.Intersect.js') }}"></script>
    <script src="{{ asset('plugin/draw/src/ext/TouchEvents.js') }}"></script>
    <script src="{{ asset('plugin/draw/src/draw/DrawToolbar.js') }}"></script>
    <script src="{{ asset('plugin/draw/src/Leaflet.Editable.js') }}"></script>
    <script src="{{ asset('plugin/draw/src/marker-direction.js') }}"></script>
    <script src="{{ asset('plugin/draw/src/leaflet.polylineoffset.js') }}"></script>
    <script src="{{ asset('plugin/draw/src/bouncemarker.js') }}"></script>

    <script src="{{ asset('plugin/draw/src/draw/handler/Draw.Feature.js') }}"></script>
    <script src="{{ asset('plugin/draw/src/draw/handler/Draw.SimpleShape.js') }}"></script>
    <script src="{{ asset('plugin/draw/src/draw/handler/Draw.Polyline.js') }}"></script>
    <script src="{{ asset('plugin/draw/src/draw/handler/Draw.Marker.js') }}"></script>
    <script src="{{ asset('plugin/draw/src/draw/handler/Draw.Circle.js') }}"></script>
    <script src="{{ asset('plugin/draw/src/draw/handler/Draw.CircleMarker.js') }}"></script>
    <script src="{{ asset('plugin/draw/src/draw/handler/Draw.Polygon.js') }}"></script>
    <script src="{{ asset('plugin/draw/src/draw/handler/Draw.Rectangle.js') }}"></script>
    <!-- <script src="{{ asset('plugin/draw/src/draw/handler/l.ellipse.js') }}"></script> -->
    <!-- <script src="{{ asset('plugin/draw/src/draw/handler/leaflet.ellipse-draw.js') }}"></script> -->
    <script src="{{ asset('plugin/draw/src/edit/EditToolbar.js') }}"></script>
    <script src="{{ asset('plugin/draw/src/edit/handler/EditToolbar.Edit.js') }}"></script>
    <script src="{{ asset('plugin/draw/src/edit/handler/EditToolbar.Delete.js') }}"></script>

    <script src="{{ asset('plugin/draw/src/Control.Draw.js') }}"></script>
    <script src="{{ asset('plugin/draw/src/edit/handler/Edit.Poly.js') }}"></script>
    <script src="{{ asset('plugin/draw/src/edit/handler/Edit.SimpleShape.js') }}"></script>
    <script src="{{ asset('plugin/draw/src/edit/handler/Edit.Rectangle.js') }}"></script>
    <script src="{{ asset('plugin/draw/src/edit/handler/Edit.Marker.js') }}"></script>
    <script src="{{ asset('plugin/draw/src/edit/handler/Edit.CircleMarker.js') }}"></script>
    <script src="{{ asset('plugin/draw/src/edit/handler/Edit.Circle.js') }}"></script>
    <script src="{{ asset('plugin/draw/src/leaflet.markercluster-src.js') }}"></script>
    <script src="{{ asset('plugin/draw/src/excel/xlsx.full.min.js') }}"></script>

    <!-- SHP FILE -->
    <!-- <script type="text/javascript" src="{{ asset('plugin/draw/src/shp/shp-write.js') }}"></script>
        <script type="text/javascript" src="{{ asset('plugin/draw/src/shp/shp.js') }}"></script>
        <script type="text/javascript" src="{{ asset('plugin/draw/src/shp/leaflet.shpfile.js') }}"></script> -->

    <link rel="stylesheet" href="{{ asset('plugin/draw/css/MarkerCluster.css') }}">
    <link rel="stylesheet" href="{{ asset('plugin/draw/css/MarkerCluster.Default.css') }}">
    <link rel="stylesheet" href="{{ asset('plugin/draw/src/leaflet.draw.css') }}" />
    <!-- <link rel="stylesheet" href="{{ asset('plugin/draw/css/Draw.css') }}"/> -->

    <!-- END DRAW -->
    <style>
        .lds-dual-ring {
            display: inline-block;
            width: 80px;
            height: 80px;
        }

        .lds-dual-ring:after {
            content: " ";
            display: block;
            width: 64px;
            height: 64px;
            margin: 8px;
            border-radius: 50%;
            border: 6px solid #2360db;
            border-color: #2360db transparent #2360db transparent;
            animation: lds-dual-ring 1.2s linear infinite;
        }

        @keyframes lds-dual-ring {
            0% {
                transform: rotate(0deg);
            }

            100% {
                transform: rotate(360deg);
            }
        }

    </style>
</head>

<body>
    @yield('content')

    @yield('js')
</body>

</html>
