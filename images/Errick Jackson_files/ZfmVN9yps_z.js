if (self.CavalryLogger) { CavalryLogger.start_js(["QORgu"]); }

__d("highlight",["Animation","Style"],(function(a,b,c,d,e,f){function a(a,c,d,e){new(b("Animation"))(a).from("background",e||"#fff9d7").to("background",d||"#fff").ease(b("Animation").ease.both).duration(2e3).ondone(function(){b("Style").set(a,"background",""),c&&c()}).go()}e.exports=a}),null);
__d("LtgPostTranslation",["cx","Arbiter","AsyncRequest","ContentTranslationStrings","DOM","Event","LoadingIndicator.react","React","ReactDOM","UFIUIEvents","XLtgPostTranslationController","collectDataAttributes","ge","highlight"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a={_renderTranslation:function(a,c){var d=b("DOM").create("div",{className:"_63tb"},c||b("ContentTranslationStrings").NO_TRANSLATION_AVAILABLE);b("DOM").replace(a,d);c&&b("highlight")(d)},bindListener:function(a,c){__p&&__p();b("Event").listen(a,"click",function(event){__p&&__p();event.prevent();var d=b("ge")("translationSpinnerPlaceholder_"+c);d&&b("ReactDOM").render(b("React").createElement(b("LoadingIndicator.react"),{size:"small",color:"white"}),d);d=event.getTarget();d=b("collectDataAttributes")(d,["ft"]);d=b("XLtgPostTranslationController").getURIBuilder().setString("ftid",c).setString("data_ft",JSON.stringify(d.ft)).getURI();new(b("AsyncRequest"))().setURI(d).setHandler(function(c){c=c.getPayload();this._renderTranslation(a,c&&c.text);b("Arbiter").inform(b("UFIUIEvents").TranslationRendered)}.bind(this)).setErrorHandler(function(){this._renderTranslation(a,null)}.bind(this)).send()}.bind(this))}};e.exports=a}),null);