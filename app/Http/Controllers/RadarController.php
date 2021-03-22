<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class RadarController extends Controller
{
    public function index()
    {
        return view('radar.index');
    }
    public function master_t()
    {
        return view('radar.master-t.index');
    }
    public function thomson()
    {
        return view('radar.thomson.index');
    }
    public function second_screen()
    {
        return view('radar.thomson.panel.second-screen');
    }
    public function airbase_view()
    {
        return view('radar.thomson.table-view.airbase-view');
    }
    public function antico_view()
    {
        return view('radar.thomson.table-view.antico-view');
    }
    public function cfp_view()
    {
        return view('radar.thomson.table-view.cfp-view');
    }
    public function intercept_view()
    {
        return view('radar.thomson.table-view.intercept-view');
    }
    public function workload_view()
    {
        return view('radar.thomson.table-view.workload-view');
    }
    public function map_control()
    {
        return view('radar.thomson.menu.map-menu');
    }
    public function radar_control()
    {
        return view('radar.thomson.menu.radar-menu');
    }
    public function intercept()
    {
        return view('radar.thomson.panel.intercept-panel');
    }
    public function intercept_ground()
    {
        return view('radar.thomson.menu.intercept-ground-menu');
    }
    public function intercept_tyco()
    {
        return view('radar.thomson.menu.intercept-tyco-menu');
    }
    public function intercept_inflight()
    {
        return view('radar.thomson.menu.intercept-inflight-menu');
    }
    public function intercept_engage()
    {
        return view('radar.thomson.menu.intercept-engage-menu');
    }
    public function intercept_return()
    {
        return view('radar.thomson.menu.intercept-return-menu');
    }
    public function tactic()
    {
        return view('radar.thomson.panel.tactic-panel');
    }
    public function tactic_sim()
    {
        return view('radar.thomson.menu.tactic-sim-menu');
    }
    public function track_ident()
    {
        return view('radar.thomson.menu.track-ident-menu');
    }
    public function track_filter()
    {
        return view('radar.thomson.menu.track-filter-menu');
    }
    public function aux()
    {
        return view('radar.thomson.menu.aux-menu');
    }
    public function debug()
    {
        return view('radar.thomson.menu.debug-menu');
    }
    public function lbow()
    {
        return view('radar.lbow.index');
    }
}
