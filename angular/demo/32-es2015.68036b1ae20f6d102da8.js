(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{AqDu:function(e,t,i){"use strict";i.r(t),i.d(t,"MapsModule",function(){return W});var n=i("SVse"),a=i("8Y7J"),s=i("2Vo4"),o=i("HDdC"),r=i("XNiG"),h=i("itXk"),g=i("eIep"),l=i("lJxs"),d=i("IzEk"),p=i("jtHE"),c=i("1G5W");const m=["*"];class _{constructor(e){this._ngZone=e,this._pending=[],this._listeners=[],this._targetStream=new s.a(void 0)}_clearListeners(){for(const e of this._listeners)e.remove();this._listeners=[]}getLazyEmitter(e){return this._targetStream.pipe(Object(g.a)(t=>{const i=new o.a(n=>{if(!t)return void this._pending.push({observable:i,observer:n});const a=t.addListener(e,e=>{this._ngZone.run(()=>n.next(e))});return this._listeners.push(a),()=>a.remove()});return i}))}setTarget(e){const t=this._targetStream.value;e!==t&&(t&&(this._clearListeners(),this._pending=[]),this._targetStream.next(e),this._pending.forEach(e=>e.observable.subscribe(e.observer)),this._pending=[])}destroy(){this._clearListeners(),this._pending=[],this._targetStream.complete()}}const u={center:{lat:37.421995,lng:-122.084092},zoom:17};let b=(()=>{class e{constructor(e,t,i){this._elementRef=e,this._ngZone=t,this._eventManager=new _(this._ngZone),this._options=new s.a(u),this._center=new s.a(void 0),this._zoom=new s.a(void 0),this._destroy=new r.a,this.height="500px",this.width="500px",this.boundsChanged=this._eventManager.getLazyEmitter("bounds_changed"),this.centerChanged=this._eventManager.getLazyEmitter("center_changed"),this.mapClick=this._eventManager.getLazyEmitter("click"),this.mapDblclick=this._eventManager.getLazyEmitter("dblclick"),this.mapDrag=this._eventManager.getLazyEmitter("drag"),this.mapDragend=this._eventManager.getLazyEmitter("dragend"),this.mapDragstart=this._eventManager.getLazyEmitter("dragstart"),this.headingChanged=this._eventManager.getLazyEmitter("heading_changed"),this.idle=this._eventManager.getLazyEmitter("idle"),this.maptypeidChanged=this._eventManager.getLazyEmitter("maptypeid_changed"),this.mapMousemove=this._eventManager.getLazyEmitter("mousemove"),this.mapMouseout=this._eventManager.getLazyEmitter("mouseout"),this.mapMouseover=this._eventManager.getLazyEmitter("mouseover"),this.projectionChanged=this._eventManager.getLazyEmitter("projection_changed"),this.mapRightclick=this._eventManager.getLazyEmitter("rightclick"),this.tilesloaded=this._eventManager.getLazyEmitter("tilesloaded"),this.tiltChanged=this._eventManager.getLazyEmitter("tilt_changed"),this.zoomChanged=this._eventManager.getLazyEmitter("zoom_changed"),this._isBrowser=Object(n.z)(i),this._isBrowser&&window}set center(e){this._center.next(e)}set zoom(e){this._zoom.next(e)}set options(e){this._options.next(e||u)}ngOnChanges(){this._setSize(),this.googleMap&&this.mapTypeId&&this.googleMap.setMapTypeId(this.mapTypeId)}ngOnInit(){this._isBrowser&&(this._mapEl=this._elementRef.nativeElement.querySelector(".map-container"),this._setSize(),this._googleMapChanges=this._initializeMap(this._combineOptions()),this._googleMapChanges.subscribe(e=>{this.googleMap=e,this._eventManager.setTarget(this.googleMap)}),this._watchForOptionsChanges(),this._watchForCenterChanges(),this._watchForZoomChanges())}ngOnDestroy(){this._eventManager.destroy(),this._destroy.next(),this._destroy.complete()}fitBounds(e,t){this._assertInitialized(),this.googleMap.fitBounds(e,t)}panBy(e,t){this._assertInitialized(),this.googleMap.panBy(e,t)}panTo(e){this._assertInitialized(),this.googleMap.panTo(e)}panToBounds(e,t){this._assertInitialized(),this.googleMap.panToBounds(e,t)}getBounds(){return this._assertInitialized(),this.googleMap.getBounds()||null}getCenter(){return this._assertInitialized(),this.googleMap.getCenter()}getClickableIcons(){return this._assertInitialized(),this.googleMap.getClickableIcons()}getHeading(){return this._assertInitialized(),this.googleMap.getHeading()}getMapTypeId(){return this._assertInitialized(),this.googleMap.getMapTypeId()}getProjection(){return this._assertInitialized(),this.googleMap.getProjection()}getStreetView(){return this._assertInitialized(),this.googleMap.getStreetView()}getTilt(){return this._assertInitialized(),this.googleMap.getTilt()}getZoom(){return this._assertInitialized(),this.googleMap.getZoom()}get controls(){return this._assertInitialized(),this.googleMap.controls}get data(){return this._assertInitialized(),this.googleMap.data}get mapTypes(){return this._assertInitialized(),this.googleMap.mapTypes}get overlayMapTypes(){return this._assertInitialized(),this.googleMap.overlayMapTypes}_setSize(){if(this._mapEl){const e=this._mapEl.style;e.height=null===this.height?"":M(this.height)||"500px",e.width=null===this.width?"":M(this.width)||"500px"}}_combineOptions(){return Object(h.a)([this._options,this._center,this._zoom]).pipe(Object(l.a)(([e,t,i])=>{var n;return Object.assign(Object.assign({},e),{center:t||e.center||u.center,zoom:null!==(n=null!=i?i:e.zoom)&&void 0!==n?n:u.zoom,mapTypeId:this.mapTypeId})}))}_initializeMap(e){return e.pipe(Object(d.a)(1),Object(l.a)(e=>this._ngZone.runOutsideAngular(()=>new google.maps.Map(this._mapEl,e))),function(e,t,i){let n;return n={bufferSize:1,windowTime:void 0,refCount:!1,scheduler:void 0},e=>e.lift(function({bufferSize:e=Number.POSITIVE_INFINITY,windowTime:t=Number.POSITIVE_INFINITY,refCount:i,scheduler:n}){let a,s,o=0,r=!1,h=!1;return function(g){let l;o++,!a||r?(r=!1,a=new p.a(e,t,n),l=a.subscribe(this),s=g.subscribe({next(e){a.next(e)},error(e){r=!0,a.error(e)},complete(){h=!0,s=void 0,a.complete()}})):l=a.subscribe(this),this.add(()=>{o--,l.unsubscribe(),s&&!h&&i&&0===o&&(s.unsubscribe(),s=void 0,a=void 0)})}}(n))}())}_watchForOptionsChanges(){Object(h.a)([this._googleMapChanges,this._options]).pipe(Object(c.a)(this._destroy)).subscribe(([e,t])=>{e.setOptions(t)})}_watchForCenterChanges(){Object(h.a)([this._googleMapChanges,this._center]).pipe(Object(c.a)(this._destroy)).subscribe(([e,t])=>{t&&e.setCenter(t)})}_watchForZoomChanges(){Object(h.a)([this._googleMapChanges,this._zoom]).pipe(Object(c.a)(this._destroy)).subscribe(([e,t])=>{void 0!==t&&e.setZoom(t)})}_assertInitialized(){}}return e.\u0275fac=function(t){return new(t||e)(a["\u0275\u0275directiveInject"](a.ElementRef),a["\u0275\u0275directiveInject"](a.NgZone),a["\u0275\u0275directiveInject"](a.PLATFORM_ID))},e.\u0275cmp=a["\u0275\u0275defineComponent"]({type:e,selectors:[["google-map"]],inputs:{height:"height",width:"width",center:"center",zoom:"zoom",options:"options",mapTypeId:"mapTypeId"},outputs:{boundsChanged:"boundsChanged",centerChanged:"centerChanged",mapClick:"mapClick",mapDblclick:"mapDblclick",mapDrag:"mapDrag",mapDragend:"mapDragend",mapDragstart:"mapDragstart",headingChanged:"headingChanged",idle:"idle",maptypeidChanged:"maptypeidChanged",mapMousemove:"mapMousemove",mapMouseout:"mapMouseout",mapMouseover:"mapMouseover",projectionChanged:"projectionChanged",mapRightclick:"mapRightclick",tilesloaded:"tilesloaded",tiltChanged:"tiltChanged",zoomChanged:"zoomChanged"},exportAs:["googleMap"],features:[a["\u0275\u0275NgOnChangesFeature"]],ngContentSelectors:m,decls:2,vars:0,consts:[[1,"map-container"]],template:function(e,t){1&e&&(a["\u0275\u0275projectionDef"](),a["\u0275\u0275element"](0,"div",0),a["\u0275\u0275projection"](1))},encapsulation:2,changeDetection:0}),e})();const v=/([A-Za-z%]+)$/;function M(e){return null==e?"":v.test(e)?e:`${e}px`}let w=(()=>{class e{constructor(e,t,i){this._googleMap=e,this._elementRef=t,this._ngZone=i,this._eventManager=new _(this._ngZone),this._options=new s.a({}),this._position=new s.a(void 0),this._destroy=new r.a,this.closeclick=this._eventManager.getLazyEmitter("closeclick"),this.contentChanged=this._eventManager.getLazyEmitter("content_changed"),this.domready=this._eventManager.getLazyEmitter("domready"),this.positionChanged=this._eventManager.getLazyEmitter("position_changed"),this.zindexChanged=this._eventManager.getLazyEmitter("zindex_changed")}set options(e){this._options.next(e||{})}set position(e){this._position.next(e)}ngOnInit(){this._googleMap._isBrowser&&(this._combineOptions().pipe(Object(d.a)(1)).subscribe(e=>{this._ngZone.runOutsideAngular(()=>{this.infoWindow=new google.maps.InfoWindow(e)}),this._eventManager.setTarget(this.infoWindow)}),this._watchForOptionsChanges(),this._watchForPositionChanges())}ngOnDestroy(){this._eventManager.destroy(),this._destroy.next(),this._destroy.complete(),this.infoWindow&&this.close()}close(){this._assertInitialized(),this.infoWindow.close()}getContent(){return this._assertInitialized(),this.infoWindow.getContent()}getPosition(){return this._assertInitialized(),this.infoWindow.getPosition()}getZIndex(){return this._assertInitialized(),this.infoWindow.getZIndex()}open(e){this._assertInitialized();const t=e?e.getAnchor():void 0;this.infoWindow.get("anchor")===t&&t||(this._elementRef.nativeElement.style.display="",this.infoWindow.open(this._googleMap.googleMap,t))}_combineOptions(){return Object(h.a)([this._options,this._position]).pipe(Object(l.a)(([e,t])=>Object.assign(Object.assign({},e),{position:t||e.position,content:this._elementRef.nativeElement})))}_watchForOptionsChanges(){this._options.pipe(Object(c.a)(this._destroy)).subscribe(e=>{this._assertInitialized(),this.infoWindow.setOptions(e)})}_watchForPositionChanges(){this._position.pipe(Object(c.a)(this._destroy)).subscribe(e=>{e&&(this._assertInitialized(),this.infoWindow.setPosition(e))})}_assertInitialized(){}}return e.\u0275fac=function(t){return new(t||e)(a["\u0275\u0275directiveInject"](b),a["\u0275\u0275directiveInject"](a.ElementRef),a["\u0275\u0275directiveInject"](a.NgZone))},e.\u0275dir=a["\u0275\u0275defineDirective"]({type:e,selectors:[["map-info-window"]],hostAttrs:[2,"display","none"],inputs:{options:"options",position:"position"},outputs:{closeclick:"closeclick",contentChanged:"contentChanged",domready:"domready",positionChanged:"positionChanged",zindexChanged:"zindexChanged"},exportAs:["mapInfoWindow"]}),e})();const y={position:{lat:37.421995,lng:-122.084092}};let f=(()=>{class e{constructor(e,t){this._googleMap=e,this._ngZone=t,this._eventManager=new _(this._ngZone),this.animationChanged=this._eventManager.getLazyEmitter("animation_changed"),this.mapClick=this._eventManager.getLazyEmitter("click"),this.clickableChanged=this._eventManager.getLazyEmitter("clickable_changed"),this.cursorChanged=this._eventManager.getLazyEmitter("cursor_changed"),this.mapDblclick=this._eventManager.getLazyEmitter("dblclick"),this.mapDrag=this._eventManager.getLazyEmitter("drag"),this.mapDragend=this._eventManager.getLazyEmitter("dragend"),this.draggableChanged=this._eventManager.getLazyEmitter("draggable_changed"),this.mapDragstart=this._eventManager.getLazyEmitter("dragstart"),this.flatChanged=this._eventManager.getLazyEmitter("flat_changed"),this.iconChanged=this._eventManager.getLazyEmitter("icon_changed"),this.mapMousedown=this._eventManager.getLazyEmitter("mousedown"),this.mapMouseout=this._eventManager.getLazyEmitter("mouseout"),this.mapMouseover=this._eventManager.getLazyEmitter("mouseover"),this.mapMouseup=this._eventManager.getLazyEmitter("mouseup"),this.positionChanged=this._eventManager.getLazyEmitter("position_changed"),this.mapRightclick=this._eventManager.getLazyEmitter("rightclick"),this.shapeChanged=this._eventManager.getLazyEmitter("shape_changed"),this.titleChanged=this._eventManager.getLazyEmitter("title_changed"),this.visibleChanged=this._eventManager.getLazyEmitter("visible_changed"),this.zindexChanged=this._eventManager.getLazyEmitter("zindex_changed")}set title(e){this._title=e}set position(e){this._position=e}set label(e){this._label=e}set clickable(e){this._clickable=e}set options(e){this._options=e}ngOnInit(){this._googleMap._isBrowser&&(this._ngZone.runOutsideAngular(()=>{this.marker=new google.maps.Marker(this._combineOptions())}),this._assertInitialized(),this.marker.setMap(this._googleMap.googleMap),this._eventManager.setTarget(this.marker))}ngOnChanges(e){const{marker:t,_title:i,_position:n,_label:a,_clickable:s}=this;t&&(e.options&&t.setOptions(this._combineOptions()),e.title&&void 0!==i&&t.setTitle(i),e.position&&n&&t.setPosition(n),e.label&&void 0!==a&&t.setLabel(a),e.clickable&&void 0!==s&&t.setClickable(s))}ngOnDestroy(){this._eventManager.destroy(),this.marker&&this.marker.setMap(null)}getAnimation(){return this._assertInitialized(),this.marker.getAnimation()||null}getClickable(){return this._assertInitialized(),this.marker.getClickable()}getCursor(){return this._assertInitialized(),this.marker.getCursor()||null}getDraggable(){return this._assertInitialized(),!!this.marker.getDraggable()}getIcon(){return this._assertInitialized(),this.marker.getIcon()||null}getLabel(){return this._assertInitialized(),this.marker.getLabel()||null}getOpacity(){return this._assertInitialized(),this.marker.getOpacity()||null}getPosition(){return this._assertInitialized(),this.marker.getPosition()||null}getShape(){return this._assertInitialized(),this.marker.getShape()||null}getTitle(){return this._assertInitialized(),this.marker.getTitle()||null}getVisible(){return this._assertInitialized(),this.marker.getVisible()}getZIndex(){return this._assertInitialized(),this.marker.getZIndex()||null}getAnchor(){return this._assertInitialized(),this.marker}_combineOptions(){const e=this._options||y;return Object.assign(Object.assign({},e),{title:this._title||e.title,position:this._position||e.position,label:this._label||e.label,clickable:void 0!==this._clickable?this._clickable:e.clickable,map:this._googleMap.googleMap})}_assertInitialized(){}}return e.\u0275fac=function(t){return new(t||e)(a["\u0275\u0275directiveInject"](b),a["\u0275\u0275directiveInject"](a.NgZone))},e.\u0275dir=a["\u0275\u0275defineDirective"]({type:e,selectors:[["map-marker"]],inputs:{title:"title",position:"position",label:"label",clickable:"clickable",options:"options"},outputs:{animationChanged:"animationChanged",mapClick:"mapClick",clickableChanged:"clickableChanged",cursorChanged:"cursorChanged",mapDblclick:"mapDblclick",mapDrag:"mapDrag",mapDragend:"mapDragend",draggableChanged:"draggableChanged",mapDragstart:"mapDragstart",flatChanged:"flatChanged",iconChanged:"iconChanged",mapMousedown:"mapMousedown",mapMouseout:"mapMouseout",mapMouseover:"mapMouseover",mapMouseup:"mapMouseup",positionChanged:"positionChanged",mapRightclick:"mapRightclick",shapeChanged:"shapeChanged",titleChanged:"titleChanged",visibleChanged:"visibleChanged",zindexChanged:"zindexChanged"},exportAs:["mapMarker"],features:[a["\u0275\u0275NgOnChangesFeature"]]}),e})(),z=(()=>{class e{}return e.\u0275mod=a["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=a["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)}}),e})();var C=i("IheW"),I=i("JIr8"),k=i("LRne");let E=(()=>{class e{constructor(e){this.apiLoaded=e.jsonp("https://maps.googleapis.com/maps/api/js?key=AIzaSyASyYRBZmULmrmw_P9kgr7_266OhFNinPA","callback").pipe(Object(l.a)(()=>!0),Object(I.a)(()=>Object(k.a)(!1)))}}return e.\u0275fac=function(t){return new(t||e)(a["\u0275\u0275inject"](C.a))},e.\u0275prov=a["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function O(e,t){if(1&e){const e=a["\u0275\u0275getCurrentView"]();a["\u0275\u0275elementStart"](0,"map-marker",12,13),a["\u0275\u0275listener"]("mapClick",function(){a["\u0275\u0275restoreView"](e);const i=t.$implicit,n=a["\u0275\u0275reference"](1);return a["\u0275\u0275nextContext"](2).openInfoWindow(n,i)}),a["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit,i=a["\u0275\u0275nextContext"](2);a["\u0275\u0275property"]("label",e.label)("title",e.title)("position",e.position)("options",i.markerOptions)}}function L(e,t){if(1&e&&(a["\u0275\u0275elementStart"](0,"div"),a["\u0275\u0275elementStart"](1,"google-map",9),a["\u0275\u0275template"](2,O,2,4,"map-marker",10),a["\u0275\u0275elementStart"](3,"map-info-window"),a["\u0275\u0275elementStart"](4,"a",11),a["\u0275\u0275elementStart"](5,"strong"),a["\u0275\u0275text"](6),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]()),2&e){const e=a["\u0275\u0275nextContext"]();a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("options",e.options)("width","100%")("height","360px"),a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("ngForOf",e.markers),a["\u0275\u0275advance"](2),a["\u0275\u0275propertyInterpolate"]("href",null==e.activeInfoWindow?null:e.activeInfoWindow.www,a["\u0275\u0275sanitizeUrl"]),a["\u0275\u0275advance"](2),a["\u0275\u0275textInterpolate"](null==e.activeInfoWindow?null:e.activeInfoWindow.title)}}let j=(()=>{class e{constructor(e,t){this.gmLoader=e,this.document=t,this.title="",this.options={center:{lat:37.42,lng:-122.103719},zoom:11},this.markerOptions={draggable:!1},this.markerPositions=[],this.markers=[{position:{lat:37.431489,lng:-122.163719},label:"S",title:"Stanford",www:"https://www.stanford.edu/"},{position:{lat:37.394694,lng:-122.150333},label:"T",title:"Tesla",www:"https://www.tesla.com/"},{position:{lat:37.331681,lng:-122.0301},label:"A",title:"Apple",www:"https://www.apple.com/"},{position:{lat:37.484722,lng:-122.148333},label:"F",title:"Facebook",www:"https://www.facebook.com/"}]}get infoWindowContent(){return this.activeInfoWindow}set infoWindowContent(e){this.title=e.title,this.activeInfoWindow=e}ngOnInit(){this.setPositions()}ngOnDestroy(){this.removeGoogleMapScript()}setPositions(){this.markers.forEach(e=>{const{lat:t,lng:i}=Object.assign({},e.position);this.markerPositions.push({lat:t,lng:i})})}openInfoWindow(e,t){this.infoWindowContent=t,this.infoWindow.open(e)}removeGoogleMapScript(){const e=["maps.googleapis"];window.google=void 0;const t=this.document.head.getElementsByTagName("script");for(let n=t.length-1;n>=0;n--){const a=t[n].getAttribute("src");if(null!=a&&e.filter(e=>a.includes(e)).length)try{t[n].remove()}catch(i){t[n].parentNode.removeChild(t[n])}}}}return e.\u0275fac=function(t){return new(t||e)(a["\u0275\u0275directiveInject"](E),a["\u0275\u0275directiveInject"](n.d))},e.\u0275cmp=a["\u0275\u0275defineComponent"]({type:e,selectors:[["app-google-maps-integration"]],viewQuery:function(e,t){if(1&e&&a["\u0275\u0275viewQuery"](w,1),2&e){let e;a["\u0275\u0275queryRefresh"](e=a["\u0275\u0275loadQuery"]())&&(t.infoWindow=e.first)}},features:[a["\u0275\u0275ProvidersFeature"]([E])],decls:13,vars:3,consts:[[1,"fade-in"],[1,"card"],[1,"card-header"],[1,"badge","badge-info"],[1,"card-header-actions"],["href","https://github.com/angular/components/tree/master/src/google-maps","target","_blank",1,"card-header-action"],[1,"text-muted"],[1,"card-body"],[4,"ngIf"],[3,"options","width","height"],[3,"label","title","position","options","mapClick",4,"ngFor","ngForOf"],["target","_blank",1,"px-2",3,"href"],[3,"label","title","position","options","mapClick"],["marker","mapMarker"]],template:function(e,t){1&e&&(a["\u0275\u0275elementStart"](0,"div",0),a["\u0275\u0275elementStart"](1,"div",1),a["\u0275\u0275elementStart"](2,"div",2),a["\u0275\u0275text"](3," Google Maps "),a["\u0275\u0275elementStart"](4,"span",3),a["\u0275\u0275text"](5,"CoreUI Pro Integration"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](6,"div",4),a["\u0275\u0275elementStart"](7,"a",5),a["\u0275\u0275elementStart"](8,"small",6),a["\u0275\u0275text"](9,"docs"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](10,"div",7),a["\u0275\u0275template"](11,L,7,6,"div",8),a["\u0275\u0275pipe"](12,"async"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]()),2&e&&(a["\u0275\u0275advance"](11),a["\u0275\u0275property"]("ngIf",a["\u0275\u0275pipeBind1"](12,1,t.gmLoader.apiLoaded)))},directives:[n.n,b,n.m,w,f],pipes:[n.b],styles:[""]}),e})();var x=i("iInd");const S=[{path:"",component:j,data:{title:"Google Maps"}}];let D=(()=>{class e{}return e.\u0275mod=a["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=a["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[x.g.forChild(S)],x.g]}),e})();var T=i("rVqu");let W=(()=>{class e{}return e.\u0275mod=a["\u0275\u0275defineNgModule"]({type:e,bootstrap:[j]}),e.\u0275inj=a["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},providers:[],imports:[[n.c,z,C.c,C.b,D,T.b]]}),e})()}}]);