@extends('template.master')
@section('content')
@include('skenario.header.header')
@include('assets.form-modal.custom-css')
<div id="map"></div>
<div class="menuLeft">
    <div class="submenu">
        <div class="smd" data-toggle="modal" id="menu-add-airfield" onclick="openMenu('#modal-coordinate','aircraft')" data-toggle-class="modal-open-aside">
            <i class=" img-thumbnail fad fa-fighter-jet  fa-2x contentMenuLeft" title="Add Aircraft"></i>
            <!-- <img src="{{asset('images/zoom out.png')}}" class=" img-thumbnail contentMenu" title="Zoom IN"> -->
        </div>
        <div class="smd" data-toggle="modal" id="menu-add-radar" onclick="openRadar('#modal-add-radar')" data-toggle-class="modal-open-aside">
            <i class=" img-thumbnail fad fa-bullseye fa-2x contentMenuLeft" title="Add Radar"></i>
            <!-- <img src="{{asset('images/zoom out.png')}}" class=" img-thumbnail contentMenu" title="Zoom IN"> -->
        </div>
        <div class="smd" data-toggle="modal" id="menu-add-KRI" onclick="openRadar('#modal-add-kri')" data-toggle-class="modal-open-aside">
            <i class=" img-thumbnail fad fa-ship fa-2x contentMenuLeft" title="Add KRI"></i>
            <!-- <img src="{{asset('images/zoom out.png')}}" class=" img-thumbnail contentMenu" title="Zoom IN"> -->
        </div>
    </div>
</div>
@include('skenario.form')
@endsection
@section('js')
<script>
    var objectAsset;
    var menu;
    var counter=0;
    var map = L.map('map',
		{
			// minZoom: 5,
            maxZoom: 19,
            editable: true,
            zoomControl:false,
            renderer : false
            // crs: L.CRS.EPSG4326
		}
        ).setView([2.41627, 119.202148], 5);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
</script>
<!-- DRAW -->
<script src="{{asset('plugin/draw/Draw.Control.js')}}"></script>
<script src="{{asset('plugin/draw/CustomDraw.js')}}"></script>
<script>
    $(document).ready(function(){
        dataaircraft();
        dataradar();
        datakri();

        @if(Session::has('msg'))
        swal({
            title: "{{ Session::get('msg') }}",
            type: "success",
            buttons: false,
            dangerMode: false,
        });
        @elseif(Session::has('error'))
        swal({
            title: "{{ Session::get('error') }}",
            type: "error",
            buttons: false,
            dangerMode: false,
        });
        @endif
    });

    function dataaircraft()
    {
        
        $.ajax({
            method:"POST",
            url:"{{ route('skenario.aircraft.load') }}",
            data:{
                _token:"{{ csrf_token() }}",
                id_scenario:"{{ $id_scenario}}"
            },
            success: function(res) {
                //console.log(res);
               
                $.each(res,function(i,val){
                    let icon = new L.Icon.Default();
                    let prop ={
                        icon:icon
                    };
                    let lnglat=ObjectControl.latLng(val.lat,val.long);
                    let object=ObjectControl.Marker.Create(lnglat,prop).bindTooltip(val.callsign,{
                    permanent: true, 
                    direction : 'bottom',
                    className: 'transparent-tooltip', offset: [0,-15]
                    }).bindPopup(val.callsign);
                    object.addTo(map);
                });
            },
            error: function() {
                
            }
        });
    }

    function dataradar()
    {
        
        $.ajax({
            method:"POST",
            url:"{{ route('skenario.radar.load') }}",
            data:{
                _token:"{{ csrf_token() }}",
                id_scenario:"{{ $id_scenario}}"
            },
            success: function(res) {
                //console.log(res);
               
                $.each(res,function(i,val){
                    let icon = new L.Icon.Default();
                    let prop ={
                        icon:icon
                    };
                    if(val.radar){
                        let lnglat=ObjectControl.latLng(val.radar.lat,val.radar.long);
                        let object=ObjectControl.Marker.Create(lnglat,prop).bindTooltip(val.radar.name,{
                        permanent: true, 
                        direction : 'bottom',
                        className: 'transparent-tooltip', offset: [0,-15]
                        }).bindPopup(val.radar.name);
                        object.addTo(map);
                    }
                    
                });
            },
            error: function() {
                
            }
        });
    }

    function datakri()
    {
        
        $.ajax({
            method:"POST",
            url:"{{ route('skenario.kri.load') }}",
            data:{
                _token:"{{ csrf_token() }}",
                id_scenario:"{{ $id_scenario}}"
            },
            success: function(res) {
                //console.log(res);
               
                $.each(res,function(i,val){
                    let icon = new L.Icon.Default();
                    let prop ={
                        icon:icon
                    };
                    if(val.kri){
                        let lnglat=ObjectControl.latLng(val.kri.lat,val.kri.long);
                        let object=ObjectControl.Marker.Create(lnglat,prop).bindTooltip(val.kri.name,{
                        permanent: true, 
                        direction : 'bottom',
                        className: 'transparent-tooltip', offset: [0,-15]
                        }).bindPopup(val.kri.name);
                        object.addTo(map);
                    }
                    
                });
            },
            error: function() {
                
            }
        });
    }

    function saveScenario(obj)
    {
        $('#modal-scenario').modal('show');
    }

    function setGlobalAsset(param)
    {
        window.objectAsset = param;
    }

    function openMenu(id,asset){
        ObjectControl.Marker.Draw({icon: new L.Icon.Default()});

        map.on(L.Draw.Event.CREATED, function(evt) {
            var layer = evt.layer;
            if (layer instanceof L.Marker) {
                let latlng = layer.getLatLng();
                var lat = latlng.lat;
                var lng = latlng.lng;
                
                if(id){
                    setGlobalAsset(asset);
                    $('#setCoordinate').attr('data-id',asset);
                    $('#long_'+asset).val(lng);
                    $('#lat_'+asset).val(lat);
                    $(id).modal('show');
                }
            }
            ObjectControl.getFeatureGroup().removeLayer(evt.layer);
        })
    }

    function nextStep(obj,modalBefore)
    {
        var id = $(obj).data('id');
        
        $(modalBefore).modal('hide');
        if(id){
            //clearAllInputForm(objectAsset);
            $('#modal-add-'+objectAsset).modal('show');
        }
    }

    function openRadar(id)
    {
        if(id){
            $(id).modal('show');
        }
    }

    function radarChange()
    {
        var id_radar = $('#radar').val();
        
        $.ajax({
            method:"POST",
            url:"{{ route('skenario.radar.get') }}",
            data:{
                _token:"{{ csrf_token() }}",
                id_radar:id_radar
            },
            success: function(res) {
                //console.log(res);
                $('#type_radar').val(res.type);
                $('#kosek_radar').val(res.kosek);
                $('#satrad_radar').val(res.satuan_radar);
                $('#range_radar').val(res.range);
                $('#altitude_radar').val(res.altitude);
                $('#elevation_min_radar').val(res.elevation_min);
                $('#elevation_max_radar').val(res.elevation_max);
                $('#long_radar').val(res.long);
                $('#lat_radar').val(res.lat);
            },
            error: function() {
                
            }
        });
    }

    function kriChange()
    {
        var id_kri = $('#kri').val();
        
        $.ajax({
            method:"POST",
            url:"{{ route('skenario.kri.get') }}",
            data:{
                _token:"{{ csrf_token() }}",
                id_kri:id_kri
            },
            success: function(res) {
                //console.log(res);
                $('#type_kri').val(res.type);
                $('#kosek_kri').val(res.kosek);
                $('#satrad_kri').val(res.satuan_radar);
                $('#range_kri').val(res.range);
                $('#altitude_kri').val(res.altitude);
                $('#elevation_min_kri').val(res.elevation_min);
                $('#elevation_max_kri').val(res.elevation_max);
                $('#long_kri').val(res.long);
                $('#lat_kri').val(res.lat);
            },
            error: function() {
                
            }
        });
    }
</script>

@include('assets.builder.footer')
@endsection