<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('coba');
// });
Route::get('/','HomeController@index')->name('home.index');
Route::get('/load-scenario','HomeController@load_scenario')->name('home.load_scenario');
Route::post('/load-scenario/data','HomeController@load_scenario_data')->name('home.load_scenario_data');

Route::get('/scenario','SkenarioEditorController@index')->name('skenario.editor');
Route::get('/scenario/{id}','SkenarioEditorController@index2')->name('skenario.editor2');
Route::post('/scenario/store','SkenarioEditorController@skenario_store')->name('skenario.store');
Route::post('/scenario/aircraft-store','SkenarioEditorController@aircraft_store')->name('skenario.aircraft.store');
Route::post('/scenario/aircraft-load','SkenarioEditorController@aircraft_load')->name('skenario.aircraft.load');
Route::post('/scenario/radar-get','SkenarioEditorController@radar_get')->name('skenario.radar.get');
Route::post('/scenario/radar-store','SkenarioEditorController@radar_store')->name('skenario.radar.radar_store');
Route::post('/scenario/radar-load','SkenarioEditorController@radar_load')->name('skenario.radar.load');
Route::post('/scenario/kri-get','SkenarioEditorController@kri_get')->name('skenario.kri.get');
Route::post('/scenario/kri-store','SkenarioEditorController@kri_store')->name('skenario.kri.store');
Route::post('/scenario/kri-load','SkenarioEditorController@kri_load')->name('skenario.kri.load');

Route::get('/asetbuilder','AssetBuilderController@index')->name('asset.builder');
Route::post('/airfield/store','AssetBuilderController@store_airfield')->name('store_airfield');
Route::post('/airfield/load','AssetBuilderController@load_airfield')->name('load_airfield');
Route::post('/airfield/update','AssetBuilderController@update_airfield')->name('update_airfield');
Route::get('/airfield/destroy/{id}','AssetBuilderController@destroy_airfield')->name('destroy_airfield');
Route::post('/radar/store','AssetBuilderController@store_radar')->name('store_radar');
Route::post('/radar/load','AssetBuilderController@load_radar')->name('load_radar');
Route::post('/radar/update','AssetBuilderController@update_radar')->name('update_radar');
Route::get('/radar/destroy/{id}','AssetBuilderController@destroy_radar')->name('destroy_radar');
Route::post('/dahanud/store','AssetBuilderController@store_dahanud')->name('store_dahanud');
Route::post('/dahanud/load','AssetBuilderController@load_dahanud')->name('load_dahanud');
Route::post('/dahanud/update','AssetBuilderController@update_dahanud')->name('update_dahanud');
Route::get('/dahanud/destroy/{id}','AssetBuilderController@destroy_dahanud')->name('destroy_dahanud');
Route::post('/kri/store','AssetBuilderController@store_kri')->name('store_kri');
Route::post('/kri/load','AssetBuilderController@load_kri')->name('load_kri');
Route::post('/kri/update','AssetBuilderController@update_kri')->name('update_kri');
Route::get('/kri/destroy/{id}','AssetBuilderController@destroy_kri')->name('destroy_kri');
Route::post('/missile/store','AssetBuilderController@store_missile')->name('store_missile');
Route::post('/missile/update','AssetBuilderController@update_missile')->name('update_missile');
Route::get('/missile/destroy/{id}','AssetBuilderController@destroy_missile')->name('destroy_missile');
Route::post('/aircraft/store','AssetBuilderController@store_aircraft')->name('store_aircraft');
Route::post('/aircraft/load','AssetBuilderController@load_aircraft')->name('load_aircraft');
Route::post('/aircraft/update','AssetBuilderController@update_aircraft')->name('update_aircraft');
Route::post('/aircraft/delete','AssetBuilderController@delete_aircraft')->name('delete_aircraft');

Route::get('/instruktur','InstrukturController@index')->name('instruktur.index');

Route::get('/master_t','RadarController@master_t')->name('master_t');

Route::get('/thomson','RadarController@thomson')->name('thomson');
Route::get('/thomson/map','RadarController@map_control')->name('map-menu');
Route::get('/thomson/radar','RadarController@radar_control')->name('radar-menu');
Route::get('/thomson/second_screen','RadarController@thomson_2nd_scr')->name('thomson-2nd-scr');

Route::get('/thomson/intercept_view','RadarController@intercept_view')->name('intercept-view');
Route::get('/thomson/antico_view','RadarController@antico_view')->name('antico-view');
Route::get('/thomson/workload_view','RadarController@workload_view')->name('workload-view');
Route::get('/thomson/cfp_view','RadarController@cfp_view')->name('cfp-view');
Route::get('/thomson/airbase_view','RadarController@airbase_view')->name('airbase-view');

Route::get('/thomson/intercept','RadarController@intercept')->name('intercept-menu');
Route::get('/thomson/intercept-ground','RadarController@intercept_ground')->name('intercept-ground-menu');
Route::get('/thomson/intercept-tyco','RadarController@intercept_tyco')->name('intercept-tyco-menu');
Route::get('/thomson/intercept-inflight','RadarController@intercept_inflight')->name('intercept-inflight-menu');
Route::get('/thomson/intercept-engage','RadarController@intercept_engage')->name('intercept-engage-menu');
Route::get('/thomson/intercept-return','RadarController@intercept_return')->name('intercept-return-menu');

Route::get('/thomson/tactic','RadarController@tactic')->name('tactic-menu');
Route::get('/thomson/tactic-sim','RadarController@tactic_sim')->name('tactic-sim-menu');

Route::get('/thomson/t-ident','RadarController@track_ident')->name('track-ident-menu');
Route::get('/thomson/t-filter','RadarController@track_filter')->name('track-filter-menu');
Route::get('/thomson/aux','RadarController@aux')->name('aux-menu');
Route::get('/thomson/debug','RadarController@debug')->name('debug-menu');

Route::get('/lbow','RadarController@lbow')->name('lbow');
Route::get('/lbow/second_screen','RadarController@lbow_2nd_scr')->name('lbow-2nd-scr');