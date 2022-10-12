(function(g){var window=this;'use strict';var u7a=function(a){g.X.call(this,{D:"div",K:"ytp-miniplayer-ui"});this.xf=!1;this.player=a;this.T(a,"minimized",this.ih);this.T(a,"onStateChange",this.OL)},v7a=function(a){g.LO.call(this,a);
    this.u=new g.nE(this);this.j=new u7a(this.player);this.j.hide();g.fO(this.player,this.j.element,4);a.Hf()&&(this.load(),g.uo(a.getRootNode(),"ytp-player-minimized",!0));this.player.N("web_rounded_containers")&&g.uo(a.getRootNode(),"ytp-rounded-miniplayer",!0)};
    g.v(u7a,g.X);g.k=u7a.prototype;
    g.k.gJ=function(){this.tooltip=new g.LS(this.player,this);g.N(this,this.tooltip);g.fO(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.Ic=new g.FP(this.player);g.N(this,this.Ic);this.Di=new g.X({D:"div",K:"ytp-miniplayer-scrim"});g.N(this,this.Di);this.Di.Da(this.element);this.T(this.Di.element,"click",this.lE);var a=new g.X({D:"button",Ga:["ytp-miniplayer-close-button","ytp-button"],X:{"aria-label":"\ub2eb\uae30"},W:[g.EL()]});g.N(this,a);a.Da(this.Di.element);this.T(a.element,"click",
    this.Kk);a=new g.N2(this.player,this);g.N(this,a);a.Da(this.Di.element);this.As=new g.X({D:"div",K:"ytp-miniplayer-controls"});g.N(this,this.As);this.As.Da(this.Di.element);this.T(this.As.element,"click",this.lE);var b=new g.X({D:"div",K:"ytp-miniplayer-button-container"});g.N(this,b);b.Da(this.As.element);a=new g.X({D:"div",K:"ytp-miniplayer-play-button-container"});g.N(this,a);a.Da(this.As.element);var c=new g.X({D:"div",K:"ytp-miniplayer-button-container"});g.N(this,c);c.Da(this.As.element);this.NS=
    new g.gR(this.player,this,!1);g.N(this,this.NS);this.NS.Da(b.element);b=new g.eR(this.player,this);g.N(this,b);b.Da(a.element);this.nextButton=new g.gR(this.player,this,!0);g.N(this,this.nextButton);this.nextButton.Da(c.element);this.Gi=new g.xS(this.player,this);g.N(this,this.Gi);this.Gi.Da(this.Di.element);this.zc=new g.rR(this.player,this);g.N(this,this.zc);g.fO(this.player,this.zc.element,4);this.bE=new g.X({D:"div",K:"ytp-miniplayer-buttons"});g.N(this,this.bE);g.fO(this.player,this.bE.element,
    4);a=new g.X({D:"button",Ga:["ytp-miniplayer-close-button","ytp-button"],X:{"aria-label":"\ub2eb\uae30"},W:[g.EL()]});g.N(this,a);a.Da(this.bE.element);this.T(a.element,"click",this.Kk);a=new g.X({D:"button",Ga:["ytp-miniplayer-replay-button","ytp-button"],X:{"aria-label":"\ub2eb\uae30"},W:[g.LL()]});g.N(this,a);a.Da(this.bE.element);this.T(a.element,"click",this.I3);this.T(this.player,"presentingplayerstatechange",this.Vc);this.T(this.player,"appresize",this.zb);this.T(this.player,"fullscreentoggled",
    this.zb);this.zb()};
    g.k.show=function(){this.Ie=new g.go(this.Dt,null,this);this.Ie.start();this.xf||(this.gJ(),this.xf=!0);0!==this.player.getPlayerState()&&g.X.prototype.show.call(this);this.zc.show();this.player.unloadModule("annotations_module")};
    g.k.hide=function(){this.Ie&&(this.Ie.dispose(),this.Ie=void 0);g.X.prototype.hide.call(this);this.player.Hf()||(this.xf&&this.zc.hide(),this.player.loadModule("annotations_module"))};
    g.k.ra=function(){this.Ie&&(this.Ie.dispose(),this.Ie=void 0);g.X.prototype.ra.call(this)};
    g.k.Kk=function(){this.player.stopVideo();this.player.Oa("onCloseMiniplayer")};
    g.k.I3=function(){this.player.playVideo()};
    g.k.lE=function(a){if(a.target===this.Di.element||a.target===this.As.element)this.player.V().N("kevlar_miniplayer_play_pause_on_scrim")?g.BK(this.player.Eb())?this.player.pauseVideo():this.player.playVideo():this.player.Oa("onExpandMiniplayer")};
    g.k.ih=function(){g.uo(this.player.getRootNode(),"ytp-player-minimized",this.player.Hf())};
    g.k.ge=function(){this.zc.dc();this.Gi.dc()};
    g.k.Dt=function(){this.ge();this.Ie&&this.Ie.start()};
    g.k.Vc=function(a){g.V(a.state,32)&&this.tooltip.hide()};
    g.k.zb=function(){g.KR(this.zc,0,this.player.fb().getPlayerSize().width,!1);g.uR(this.zc)};
    g.k.OL=function(a){this.player.Hf()&&(0===a?this.hide():this.show())};
    g.k.wc=function(){return this.tooltip};
    g.k.Gf=function(){return!1};
    g.k.Og=function(){return!1};
    g.k.Zi=function(){return!1};
    g.k.Fk=function(){return!1};
    g.k.Mg=function(){return!1};
    g.k.ZA=function(){};
    g.k.zo=function(){};
    g.k.Wv=function(){};
    g.k.Tm=function(){return null};
    g.k.Ez=function(){return null};
    g.k.Dk=function(){return new g.El(0,0,0,0)};
    g.k.handleGlobalKeyDown=function(){return!1};
    g.k.handleGlobalKeyUp=function(){return!1};
    g.k.Lt=function(a,b,c,d,e){var f=0,h=d=0,l=g.Sl(a);if(b){c=g.po(b,"ytp-prev-button")||g.po(b,"ytp-next-button");var m=g.po(b,"ytp-play-button"),n=g.po(b,"ytp-miniplayer-expand-watch-page-button");c?f=h=12:m?(b=g.Ql(b,this.element),h=b.x,f=b.y-12):n&&(h=g.po(b,"ytp-miniplayer-button-top-left"),f=g.Ql(b,this.element),b=g.Sl(b),h?(h=8,f=f.y+40):(h=f.x-l.width+b.width,f=f.y-20))}else h=c-l.width/2,d=25+(e||0);b=this.player.fb().getPlayerSize().width;e=f+(e||0);l=g.Jg(h,0,b-l.width);e?(a.style.top=e+"px",
    a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
    g.k.showControls=function(){};
    g.k.Mn=function(){};
    g.k.Ak=function(){return!1};
    g.k.aB=function(){};
    g.k.qx=function(){};
    g.k.hp=function(){};
    g.k.jC=function(){};
    g.k.Yp=function(){};g.v(v7a,g.LO);g.k=v7a.prototype;g.k.onVideoDataChange=function(){if(this.player.N("web_rounded_containers")&&this.player.getVideoData()){var a=16/9;a=this.player.getVideoAspectRatio()>a+.1;g.uo(this.player.getRootNode(),"ytp-rounded-miniplayer-extra-wide-video",a)}};
    g.k.create=function(){g.LO.prototype.create.call(this);this.u.T(this.player,"videodatachange",this.onVideoDataChange);this.onVideoDataChange()};
    g.k.Rj=function(){return!1};
    g.k.load=function(){this.player.hideControls();this.j.show()};
    g.k.unload=function(){this.player.showControls();this.j.hide()};g.KO("miniplayer",v7a);})(_yt_player);
    