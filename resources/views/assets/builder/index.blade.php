@extends('template.master')
@section('content')
@include('assets.builder.header')
@include('assets.form-modal.custom-css')
<div id="map"></div>
<div class="menuLeft">
    <div class="submenu">
        <div class="smd" data-toggle="modal" id="menu-add-airfield" onclick="openMenu('#modal-coordinate','airfield')" data-toggle-class="modal-open-aside">
            <i class=" img-thumbnail fad fa-plane-departure fa-2x contentMenuLeft" title="Add Airfield"></i>
            <!-- <img src="{{asset('images/zoom out.png')}}" class=" img-thumbnail contentMenu" title="Zoom IN"> -->
        </div>
        <div class="smd" data-toggle="modal" id="menu-add-radar" onclick="openMenu('#modal-coordinate','radar')" data-toggle-class="modal-open-aside">
            <i class=" img-thumbnail fad fa-radar fa-2x contentMenuLeft" title="Add Radar"></i>
            <!-- <img src="{{asset('images/zoom out.png')}}" class=" img-thumbnail contentMenu" title="Zoom IN"> -->
        </div>
        <div class="smd" data-toggle="modal" id="menu-add-dahanud" onclick="openMenu('#modal-coordinate','dahanud')" data-toggle-class="modal-open-aside">
            <i class=" img-thumbnail fad fa-rocket fa-2x contentMenuLeft" title="Add Dahanud"></i>
            <!-- <img src="{{asset('images/zoom out.png')}}" class=" img-thumbnail contentMenu" title="Zoom IN"> -->
        </div>
        <div class="smd" data-toggle="modal" id="menu-add-kri" onclick="openMenu('#modal-coordinate','kri')" data-toggle-class="modal-open-aside">
            <i class=" img-thumbnail fad fa-ship fa-2x contentMenuLeft" title="Add KRI"></i>
            <!-- <img src="{{asset('images/zoom out.png')}}" class=" img-thumbnail contentMenu" title="Zoom IN"> -->
        </div>
        <div class="smd" data-toggle="modal" id="menu-add-missile" onclick="openMenuMissile('#modal-add-missile')" data-toggle-class="modal-open-aside">
            <i class=" img-thumbnail fad fa-rocket-launch fa-2x contentMenuLeft" title="Add Missile"></i>
            <!-- <img src="{{asset('images/zoom out.png')}}" class=" img-thumbnail contentMenu" title="Zoom IN"> -->
        </div>
        <div class="smd" data-toggle="modal" id="menu-add-missile" onclick="openMenuAircraft('add')" data-toggle-class="modal-open-aside">
            <i class=" img-thumbnail fad fa-fighter-jet fa-2x contentMenuLeft" title="Add Aircraft"></i>
            <!-- <img src="{{asset('images/zoom out.png')}}" class=" img-thumbnail contentMenu" title="Zoom IN"> -->
        </div>
    </div>
</div>
@include('assets.form-modal.form')
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

        map.on('mousemove', function(evt){
        // console.log(evt.latlng);
        })
</script>
<!-- DRAW -->
<script src="{{asset('plugin/draw/Draw.Control.js')}}"></script>
<script src="{{asset('plugin/draw/CustomDraw.js')}}"></script>
<script>
    $(document).ready(function(){
        $('#list-radar').DataTable();
        $('#list-airfield').DataTable();
        $('#list-missile').DataTable();
        $('#list-dahanud').DataTable();
        $('#list-kri').DataTable();

        dataairfield();
        dataradar();
        datadahanud();
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

    function focusTo(obj)
    {
        var item = $(obj).data('item');
        
        map.flyTo({lng : Number(item.long), lat: Number(item.lat)},11);
    }

    function dataradar()
    {
        
        $.ajax({
            method:"POST",
            url:"{{ route('load_radar') }}",
            data:{
                _token:"{{ csrf_token() }}"
            },
            success: function(res) {
                //console.log(res);
               
                $.each(res,function(i,val){
                    let icon = new L.Icon.Default();
                    let prop ={
                        icon:icon
                    };
                    let lnglat=ObjectControl.latLng(val.lat,val.long);
                    let object=ObjectControl.Marker.Create(lnglat,prop).bindTooltip(val.name,{
                    permanent: true, 
                    direction : 'bottom',
                    className: 'transparent-tooltip', offset: [0,-15]
                    }).bindPopup(val.name);
                    object.addTo(map);
                });
            },
            error: function() {
                
            }
        });
    }

    function dataairfield()
    {
        $.ajax({
            method:"POST",
            url:"{{ route('load_airfield') }}",
            data:{
                _token:"{{ csrf_token() }}"
            },
            success: function(res) {
                //console.log(res);
               
                $.each(res,function(i,val){
                    let icon = new L.Icon.Default();
                    let prop ={
                        icon:icon
                    };
                    let lnglat=ObjectControl.latLng(val.lat,val.long);
                    let object=ObjectControl.Marker.Create(lnglat,prop).bindTooltip(val.name,{
                    permanent: true, 
                    direction : 'bottom',
                    className: 'transparent-tooltip', offset: [0,-15]
                    }).bindPopup(val.name);
                    object.addTo(map);
                });
            },
            error: function() {
                
            }
        });
    }

    function datadahanud()
    {
        $.ajax({
            method:"POST",
            url:"{{ route('load_dahanud') }}",
            data:{
                _token:"{{ csrf_token() }}"
            },
            success: function(res) {
                //console.log(res);
               
                $.each(res,function(i,val){
                    let icon = new L.Icon.Default();
                    let prop ={
                        icon:icon
                    };
                    let lnglat=ObjectControl.latLng(val.lat,val.long);
                    let object=ObjectControl.Marker.Create(lnglat,prop).bindTooltip(val.name,{
                    permanent: true, 
                    direction : 'bottom',
                    className: 'transparent-tooltip', offset: [0,-15]
                    }).bindPopup(val.name);
                    object.addTo(map);
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
            url:"{{ route('load_kri') }}",
            data:{
                _token:"{{ csrf_token() }}"
            },
            success: function(res) {
                //console.log(res);
               
                $.each(res,function(i,val){
                    let icon = new L.Icon.Default();
                    let prop ={
                        icon:icon
                    };
                    let lnglat=ObjectControl.latLng(val.lat,val.long);
                    let object=ObjectControl.Marker.Create(lnglat,prop).bindTooltip(val.name,{
                    permanent: true, 
                    direction : 'bottom',
                    className: 'transparent-tooltip', offset: [0,-15]
                    }).bindPopup(val.name);
                    object.addTo(map);
                });
            },
            error: function() {
                
            }
        });
    }

    function setGlobalAsset(param)
    {
        window.objectAsset = param;
    }

    function openMenuAircraft(cmd)
    {
        $('#modal-aircraft').modal('show');
    }

    function upper(id)
    {
        var val = $('#'+id+'_name').val();
        $('#'+id+'_name').val(val.toUpperCase());
    }

    function openMenu(id,asset){
        ObjectControl.Marker.Draw({icon: new L.Icon.Default()});
        $('#modal-list-asset').modal('hide');
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

    function clearAllInputForm(asset){
        if(asset == 'radar'){
            $('form#form-radar').attr('action',"{{ route('store_radar') }}");
            $('#id_radar').val('');
            $('#name_radar').val('');
            $('#type_radar').val(1);
            $('#kosek_radar').val(0);
            $('#satrad_radar').val(0);
            $('#range_radar').val(0);
            $('#altitude_radar').val(0);
            $('#elevation_min_radar').val(0);
            $('#elevation_max_radar').val(0);
            //$('#long_airfield').val('');
            //$('#lat_airfield').val('');
        }else if(asset == 'dahanud'){
            $('form#form-dahanud').attr('action',"{{ route('store_dahanud') }}");
            $('#id_dahanud').val('');
            $('#name_dahanud').val('');
            $('#type_dahanud').val('');
            $('#kosek_dahanud').val(0);
            $('#satrad_dahanud').val(0);
            $('#range_dahanud').val(0);
            $('#altitude_dahanud').val(0);
            $('#elevation_min_dahanud').val(0);
            $('#elevation_max_dahanud').val(0);
            //$('#long_airfield').val('');
            //$('#lat_airfield').val('');
        }else if(asset == 'kri'){
            $('form#form-kri').attr('action',"{{ route('store_kri') }}");
            $('#id_kri').val('');
            $('#name_kri').val('');
            $('#type_kri').val('');
            $('#kosek_kri').val(0);
            $('#satrad_kri').val(0);
            $('#range_kri').val(0);
            $('#altitude_kri').val(0);
            $('#elevation_min_kri').val(0);
            $('#elevation_max_kri').val(0);
            //$('#long_airfield').val('');
            //$('#lat_airfield').val('');
        }else if(asset == 'airfield'){
            $('form#form-airfield').attr('action',"{{ route('store_airfield') }}");
            $('#id_airfield').val('');
            $('#name_airfield').val('');
            $('#city_airfield').val('');
            $('#altitude_airfield').val(0);
            //$('#long_airfield').val('');
            //$('#lat_airfield').val('');
            $("#satrad_civil").prop("checked", false);
            $("#satrad_military").prop("checked", false);
            $("#satrad_joint").prop("checked", false);
            var html ='<tr><td>No</td><td>Length (m)</td><td>Heading</td><td>Option</td></tr>';
            $('#tb_runway_airfield').html(html);
        }else if(asset == 'missile'){
            $('form#form-missile').attr('action',"{{ route('store_missile') }}");
            $('#id_missile').val('');
            $('#name_missile').val('');
            $('#type_missile').val(1);
            $('#range_missile').val(0);
            $('#altitude_missile').val(0);
            $('#weight_missile').val(0);
        }
    }
    
    function nextStep(obj,modalBefore)
    {
        var id = $(obj).data('id');
        
        $(modalBefore).modal('hide');
        if(id){
            clearAllInputForm(objectAsset);
            $('#modal-add-'+objectAsset).modal('show');
        }
    }

    function openMenuMissile(id)
    {
        $('#modal-list-asset').modal('hide');
        clearAllInputForm('missile');
        if(id){
            $(id).modal('show');
        }
    }

    function edit(obj,menu)
    {
        var item = $(obj).data('item');
        console.log(item);
        $('#modal-list-asset').modal('hide');
        if(menu == 'radar'){
            $('form#form-radar').attr('action',"{{ route('update_radar') }}");
            $('#id_radar').val(item.id);
            $('#name_radar').val(item.name);
            $('#type_radar').val(item.type);
            $('#kosek_radar').val(item.kosek);
            $('#satrad_radar').val(item.satuan_radar);
            $('#range_radar').val(item.range);
            $('#altitude_radar').val(item.altitude);
            $('#elevation_min_radar').val(item.elevation_min);
            $('#elevation_max_radar').val(item.elevation_max);
            $('#long_radar').val(item.long);
            $('#lat_radar').val(item.lat);
            $('#modal-add-radar').modal('show');
        }else if(menu == 'dahanud'){
            $('form#form-dahanud').attr('action',"{{ route('update_dahanud') }}");
            $('#id_dahanud').val(item.id);
            $('#name_dahanud').val(item.name);
            $('#type_dahanud').val(item.type);
            $('#kosek_dahanud').val(item.kosek);
            $('#satrad_dahanud').val(item.satuan_radar);
            $('#range_dahanud').val(item.range);
            $('#altitude_dahanud').val(item.altitude);
            $('#elevation_min_dahanud').val(item.elevation_min);
            $('#elevation_max_dahanud').val(item.elevation_max);
            $('#long_dahanud').val(item.long);
            $('#lat_dahanud').val(item.lat);
            $('#modal-add-dahanud').modal('show');
        }else if(menu == 'kri'){
            $('form#form-kri').attr('action',"{{ route('update_kri') }}");
            $('#id_kri').val(item.id);
            $('#name_kri').val(item.name);
            $('#type_kri').val(item.type);
            $('#kosek_kri').val(item.kosek);
            $('#satrad_kri').val(item.satuan_radar);
            $('#range_kri').val(item.range);
            $('#altitude_kri').val(item.altitude);
            $('#elevation_min_kri').val(item.elevation_min);
            $('#elevation_max_kri').val(item.elevation_max);
            $('#long_kri').val(item.long);
            $('#lat_kri').val(item.lat);
            $('#modal-add-kri').modal('show');
        }else if(menu == 'airfield'){
            $('form#form-airfield').attr('action',"{{ route('update_airfield') }}");
            $('#id_airfield').val(item.id);
            $('#name_airfield').val(item.name);
            $('#city_airfield').val(item.city);
            $('#altitude_airfield').val(item.altitude);
            $('#long_airfield').val(item.long);
            $('#lat_airfield').val(item.lat);

            if(item.type = 'Civil'){
                $("#satrad_civil").prop("checked", true);
            }else if(item.type = 'Military'){
                $("#satrad_military").prop("checked", true);
            }else if(item.type = 'Joint Military Civil'){
                $("#satrad_joint").prop("checked", true);
            }

            if(item.runway){
                $('#numbRunway').val(item.runway.length);
                var html='<tr><td>No</td><td>Length (m)</td><td>Heading</td><td>Option</td></tr>';
                $.each(item.runway,function(i,val){
                     html +='<tr id="rowRunway'+(i+1)+'">';
                        html +='<td>'+(i+1)+'</td>';
                        html +='<td>'+val.length+'<input value="'+val.length+'" type="hidden" name="length_runway[]"></td>';
                        html +='<td>'+val.heading+'<input value="'+val.heading+'" type="hidden" name="heading_runway[]"></td>';
                        html +='<td><a onclick="removeRow('+(i+1)+')" class="btn btn-danger btn-xs"><i class="fa fa-minus"></i></a></td>';
                    html +='</tr>';
                });
                $('#tb_runway_airfield').html(html);
            }

            $('#modal-add-airfield').modal('show');
        }else if(menu == 'missile'){
            $('form#form-missile').attr('action',"{{ route('update_missile') }}");
            $('#id_missile').val(item.id);
            $('#name_missile').val(item.name);
            $('#type_missile').val(item.type);
            $('#range_missile').val(item.range);
            $('#altitude_missile').val(item.altitude);
            $('#weight_missile').val(item.weight);
            $('#modal-add-missile').modal('show');
        }
    }

    function addmore()
    {
        var html='';
        var no = parseInt($('#numbRunway').val());
        $('#numbRunway').val(no+1);
        var length = $('#length_runway_airfield').val();
        var heading = $('#heading_runway_airfield').val();
        html +='<tr id="rowRunway'+$('#numbRunway').val()+'">';
            html +='<td>'+$('#numbRunway').val()+'</td>';
            html +='<td>'+length+'<input value="'+length+'" type="hidden" name="length_runway[]"></td>';
            html +='<td>'+heading+'<input value="'+heading+'" type="hidden" name="heading_runway[]"></td>';
            html +='<td><a onclick="removeRow('+$('#numbRunway').val()+')" class="btn btn-danger btn-xs"><i class="fa fa-minus"></i></a></td>';
        html +='</tr>';
        $('#tb_runway_airfield').append(html);
    }

    function clearmore()
    {
        var html ='<tr><td>No</td><td>Length (m)</td><td>Heading</td><td>Option</td></tr>';
        $('#tb_runway_airfield').html(html);
        $('#numbRunway').val(0);
    }

    function removeRow(no){
      var cek = parseInt($('#numbRunway').val());
        if (cek != 0) {
            $('#numbRunway').val(cek - 1);
        }
        $('#rowRunway' + no).remove();
    }

    function modalTyco()
    {
        $('#contentAircraft').html('<h6>Please Choose Aircraft Name ...</h6>');
        $('#modal-aircraft-list').modal('show');
    }

    function showTycoDetail(obj){
        var item = $(obj).data('item');
        //console.log(item);
        $.ajax({
            method:"POST",
            url:"{{ route('load_aircraft') }}",
            data:{
                _token:"{{ csrf_token() }}",
                id_aircraft:item.id
            },
            beforeSend:function(){
                $('#loader_aircraft').show();
            },
            success: function(res) {
               $('#loader_aircraft').hide();
               $('#contentAircraft').html(res);
            },
            error: function() {
                
            }
        });
    }

    function onSubmitAircraft(cmd)
    {
        if(cmd == 'submit'){
            $('form#form-aircraft-list').attr('action',"{{ route('update_aircraft') }}");
        }else{
            $('form#form-aircraft-list').attr('action',"{{ route('delete_aircraft') }}");
        }
        $('form#form-aircraft-list').submit();
    }
    
</script>
@include('assets.builder.footer')
@endsection
