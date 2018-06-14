if (self.CavalryLogger) { CavalryLogger.start_js(["MF0S5"]); }

__d("ResetScrollOnUnload",["Run"],(function(a,b,c,d,e,f){a={disableScrollRestoration:function(){b("Run").onUnload(function(){window.history.scrollRestoration="manual"})},init:function(a){b("Run").onUnload(function(){window.history.scrollRestoration="manual",a.style.opacity="0",window.scrollTo(0,0)})}};e.exports=a}),null);
__d("AccessibilityWebAssistiveTechTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(){this.clear()}a.prototype.log=function(){b("GeneratedLoggerUtils").log("logger:AccessibilityWebAssistiveTechLoggerConfig",this.$1,b("Banzai").BASIC)};a.prototype.logVital=function(){b("GeneratedLoggerUtils").log("logger:AccessibilityWebAssistiveTechLoggerConfig",this.$1,b("Banzai").VITAL)};a.prototype.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:AccessibilityWebAssistiveTechLoggerConfig",this.$1,{signal:!0})};a.prototype.clear=function(){this.$1={};return this};a.prototype.getData=function(){return babelHelpers["extends"]({},this.$1)};a.prototype.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.setIndicatedBrowsers=function(a){this.$1.indicated_browsers=b("GeneratedLoggerUtils").serializeVector(a);return this};a.prototype.setIsVirtualCursorAction=function(a){this.$1.is_virtual_cursor_action=a;return this};a.prototype.setVC=function(a){this.$1.vc=a;return this};a.prototype.updateExtraData=function(a){a=b("nullthrows")(b("GeneratedLoggerUtils").serializeMap(a));b("GeneratedLoggerUtils").checkExtraDataFieldNames(a,g);this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.addToExtraData=function(a,b){var c={};c[a]=b;return this.updateExtraData(c)};var g={indicated_browsers:!0,is_virtual_cursor_action:!0,vc:!0};e.exports=a}),null);
__d("AccessibilityWebVirtualCursorClickLogger",["AccessibilityWebAssistiveTechTypedLogger","VirtualCursorStatus"],(function(a,b,c,d,e,f){a={init:function(a){a.forEach(function(a){b("VirtualCursorStatus").add(a,this._log)}.bind(this),this)},_log:function(a,c){var d=arguments.length<=2||arguments[2]===undefined?!1:arguments[2];a&&new(b("AccessibilityWebAssistiveTechTypedLogger"))().setIndicatedBrowsers(c).setIsVirtualCursorAction(d).log()}};e.exports=a}),null);
__d("NavigationMenubarInteractionsTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(){this.clear()}a.prototype.log=function(){b("GeneratedLoggerUtils").log("logger:NavigationMenubarInteractionsLoggerConfig",this.$1,b("Banzai").BASIC)};a.prototype.logVital=function(){b("GeneratedLoggerUtils").log("logger:NavigationMenubarInteractionsLoggerConfig",this.$1,b("Banzai").VITAL)};a.prototype.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:NavigationMenubarInteractionsLoggerConfig",this.$1,{signal:!0})};a.prototype.clear=function(){this.$1={};return this};a.prototype.getData=function(){return babelHelpers["extends"]({},this.$1)};a.prototype.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.setAction=function(a){this.$1.action=a;return this};a.prototype.setTargetItem=function(a){this.$1.target_item=a;return this};a.prototype.updateExtraData=function(a){a=b("nullthrows")(b("GeneratedLoggerUtils").serializeMap(a));b("GeneratedLoggerUtils").checkExtraDataFieldNames(a,g);this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.addToExtraData=function(a,b){var c={};c[a]=b;return this.updateExtraData(c)};var g={action:!0,target_item:!0};e.exports=a}),null);
__d("NavigationAssistantController",["csx","cx","fbt","AccessibilityExperimentsConfig","Arbiter","AsyncDialog","AsyncRequest","CSS","DOM","DOMEventListener","DOMTraverser","DOMQuery","Event","Focus","Menu","MenuItem","NavigationMenubarInteractionsTypedLogger","PopoverMenu","KeyEventController","KeyboardShortcuts","RTLKeys","PageTransitions","TabbableElements","debounce","ge","getActiveElement","getOrCreateDOMID","gkx","setImmediate"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j=["main","banner","search","navigation","region","complementary","form","contentinfo"],k={main:function(a){return a?i._("Main: {section name}",[i._param("section name",a)]):i._("Main section")},banner:function(a){return i._("{section name} banner",[i._param("section name",a)])},search:function(a){return i._("Search {section name}",[i._param("section name",a)])},navigation:function(a){return a?i._("Navigate {section name}",[i._param("section name",a)]):i._("Navigation")},region:function(a){return a},complementary:function(a){return a?a:i._("Complementary information")},form:function(a){return i._("{section name} form",[i._param("section name",a)])},contentinfo:function(a){return i._("{section name} footer",[i._param("section name",a)])}},l=500;a={init:function(a,c,d,e,f,g){__p&&__p();this._banner=a;this._menubar=c;this._sectionsMenu=d;this._accessibilityMenu=e;this._globalMenu=f;this._shortcutMenuItem=this._accessibilityMenu&&this._accessibilityMenu.getItemAt(0);this._menubarMenus=[{menu:this._sectionsMenu,logName:"page_sections"}];this._accessibilityMenu&&this._menubarMenus.push({menu:this._accessibilityMenu,logName:"accessibility"});this._globalMenu&&this._menubarMenus.push({menu:this._globalMenu,logName:"global"});document.body&&b("CSS").addClass(document.body,"hasAXNavMenubar");this._hasBanner=document.body&&b("CSS").hasClass(document.body,"hasBanner");this._shown=!1;this._items=[];this._hotKeyTrigger=null;this._menubarMenuItems=b("DOMQuery").scry(this._menubar,'[role="button"]');this._menubarMenuItems.forEach(function(a){a.setAttribute("role","menuitem")});this._activeItem=this._menubarMenuItems[0];this._activeItemIndex=0;if(g!=null)for(var h in g)Object.prototype.hasOwnProperty.call(g,h)&&g[h]!=null&&g[h].disableTypeaheadActivation();this._setupEvents();this._keysSoFar="";this._clearKeysSoFarAfterDelay=b("debounce")(function(){this._keysSoFar=""}.bind(this),l);this._handlePageLoad()},_setupEvents:function(){this._menubarMenuItems[0].addEventListener("focus",this._showMenubar.bind(this)),this._menubar.addEventListener("keydown",this._checkHide.bind(this)),this._menubar.addEventListener("keyup",this._checkMenuSwitch.bind(this)),this._menubarMenus.forEach(function(a){a.menu.subscribe("show",this._menuShown.bind(this,a)),a.menu.subscribe("hide",this._menuHidden.bind(this,a)),a.menu.subscribe("done",this._checkBlur.bind(this)),a.menu.getRoot().addEventListener("keyup",this._checkMenuSwitch.bind(this))}.bind(this)),b("DOMEventListener").add(document,"click",this._checkClickBlur.bind(this)),this._sectionsMenu.subscribe("focus",this._highlightFocused.bind(this)),this._sectionsMenu.subscribe("blur",this._unhighlightFocused.bind(this)),this._accessibilityMenu&&this._accessibilityMenu.subscribe("itemclick",this._checkShortcutsShow.bind(this)),this._globalMenu&&this._globalMenu.subscribe("itemclick",this._checkLogEvent.bind(this)),b("gkx")("AT5huHG2ZwhQRG4wsq3SGMN3nvTL0cl6WnMDmJ4szQP1y0o6thXp_6CfXUwNbqgDFgYrK5iR2HDgMq3_mzv-_V8b")&&(b("DOMEventListener").add(document,"keydown",this._checkHotKey.bind(this)),b("DOMEventListener").add(document,"keypress",this._trackHotKeyPress.bind(this)),b("DOMEventListener").add(document,"keyup",this._unsetHotKey.bind(this)))},_checkHide:function(a){a=b("Event").getKeyCode(a);if(a===b("RTLKeys").ESC){this._hideMenubar();this._returnFocus();return}a===b("RTLKeys").TAB&&b("setImmediate")(function(){this._hideMenubar()}.bind(this))},_returnFocus:function(){if(this._hotKeyTrigger)b("Focus").set(this._hotKeyTrigger,!0),this._hotKeyTrigger=null;else{var a=this._banner.nextElementSibling;b("TabbableElements").isTabbable(a)||(a=b("DOMTraverser").nextFilteredNode(document.body,a,b("TabbableElements").isTabbable));b("Focus").set(a)}},_setActiveItem:function(a){if(a<0||a>=this._menubarMenuItems.length)return;this._activeItem.setAttribute("tabindex","-1");this._activeItem=this._menubarMenuItems[a];this._activeItemIndex=a;this._activeItem.setAttribute("tabindex","0")},_checkMenuSwitch:function(event){__p&&__p();var a=b("Event").getKeyCode(event),c=this._menubarMenus.length,d=this._activeItemIndex;switch(a){case b("RTLKeys").getLeft():d=this._activeItemIndex===0?c-1:this._activeItemIndex-1;break;case b("RTLKeys").getRight():d=this._activeItemIndex===c-1?0:this._activeItemIndex+1;break;default:d=this._findItemToFocus(a);if(d<0)return!1}this._isShowingMenu&&this._isShowingMenu.done();this._setActiveItem(d);setTimeout(function(){b("Focus").set(this._activeItem,!0)}.bind(this),0);return!0},_findItemToFocus:function(a){if(this._isShowingMenu)return-1;a=String.fromCharCode(a).toLowerCase();this._keysSoFar||(this._searchIndex=this._activeItemIndex);this._keysSoFar+=a;this._clearKeysSoFarAfterDelay();a=this._findMatchInRange(this._searchIndex+1,this._menubarMenuItems.length);a<0&&(a=this._findMatchInRange(0,this._searchIndex));return a<0?this._searchIndex:a},_findMatchInRange:function(a,b){for(var a=a;a<b;a++){var c=this._menubarMenuItems[a].innerText;if(c.toLowerCase().indexOf(this._keysSoFar)===0)return a}return-1},_menuShown:function(a){this._ignoreBlur=!0,this._isShowingMenu=a.menu,this._logEvent("menu_shown",a.logName)},_menuHidden:function(a){this._ignoreBlur=!1,this._isShowingMenu===a.menu&&(this._isShowingMenu=null)},_checkClickBlur:function(){this._ignoreBlur||this._checkBlur()},_checkBlur:function(){var a=b("getActiveElement")();this._shown&&a&&!b("DOM").contains(this._menubar,a)&&!this._ignoreBlur&&this._hideMenubar();this._highlighted&&(b("CSS").removeClass(this._highlighted,"_1toc"),this._highlighted=null)},_highlightFocused:function(a,c){this._highlighted&&b("CSS").removeClass(this._highlighted,"_1toc"),this._highlighted=b("ge")(c.item.getValue()),this._highlighted&&b("CSS").addClass(this._highlighted,"_1toc")},_unhighlightFocused:function(a,c){this._highlighted&&b("CSS").removeClass(this._highlighted,"_1toc")},_checkHotKey:function(a){__p&&__p();var c=b("Event").getKeyCode(a),d=a.altKey;if(!b("gkx")("AT6Q2x7gNg7Gis3g_Acxq5QKW2uVkTcYAELBQCGsE3TGJOtPLz-mx51ETR-YD6ugDTtNRWwZZrCB6V07w1aU__FR")&&!b("KeyEventController").filterEventTargets(a,"keydown"))return;if(c===b("RTLKeys").FORWARD_SLASH&&d){c=b("getActiveElement")();this._listenHotKeyPress=!0;if(this._shown){this._menubarMenus.forEach(function(a){a.menu.done()});setTimeout(function(){this._returnFocus(),this._hideMenubar()}.bind(this),0);return}if(c&&this._isInDialog(c))return;this._hotKeyTrigger=c;this._showMenubar();b("Focus").set(this._activeItem,!0);this._logEvent("hotkey_triggered","menubar");return}this._listenHotKeyPress=!1;this._shown&&this._checkHide(a)},_unsetHotKey:function(a){this._listenHotKeyPress=!1},_trackHotKeyPress:function(a){if(this._listenHotKeyPress){a=b("Event").getKeyCode(a);this._logEvent("hotkey_char",""+a)}},_handlePageLoad:function(){this._validateMainSection(),this._setupSectionsMenu(),this._setupAccessibilityMenu(),b("PageTransitions").registerCompletionCallback(function(){this._handlePageLoad()}.bind(this))},_validateMainSection:function(){var a=document.getElementById("content");if(!a)return;var c=b("DOMQuery").scry(a,'[role="main"]'),d=a.getAttribute("role")==="main";c.length&&d?a.setAttribute("role",""):!c.length&&!d&&a.setAttribute("role","main")},_isInDialog:function(a){a=a;while(a&&a!==document&&a.getAttribute("role")!=="dialog")a=a.parentNode;return a!==document},_hideMenubar:function(){if(!this._shown)return;this._shown=!1;b("KeyboardShortcuts").popLayer();b("CSS").addClass(this._banner,"_1toe");this._setActiveItem(0);!this._hasBanner&&document.body&&b("CSS").removeClass(document.body,"hasBanner");setTimeout(function(){b("Event").fire(window,"scroll")},350)},_showMenubar:function(){__p&&__p();if(this._shown)return;this._shown=!0;this._ignoreBlur=!1;this._validateMainSection();this._setupSectionsMenu();this._setupAccessibilityMenu();b("KeyboardShortcuts").pushLayer();b("CSS").matchesSelector(this._banner.nextElementSibling,"._3d9x")?b("CSS").addClass(this._banner,"_1tof"):b("CSS").removeClass(this._banner,"_1tof");b("CSS").removeClass(this._banner,"_1toe");!this._hasBanner&&document.body&&b("CSS").addClass(document.body,"hasBanner");setTimeout(function(){b("Event").fire(window,"scroll"),b("Arbiter").inform("banner/shown",null,b("Arbiter").BEHAVIOR_STATE)},50);this._logEvent("shown","menubar")},_addMenuItem:function(a,c,d){c=b("Menu").buildItemFromData({ctor:b("MenuItem"),label:a,selected:!1,value:c,onclick:function(c){setTimeout(function(){b("Focus").set(b("ge")(d),!0),this._hideMenubar()}.bind(this),0),this._logEvent("selected_item",a),this._ignoreBlur=!1}.bind(this)});this._sectionsMenu.addItem(c);this._items.push(c)},_getLandmarkSections:function(a){var b=[],c=[];a.forEach(function(a){var d=a.getAttribute("role");d==="main"?b.push(a):j.indexOf(d)>-1&&c.push(a)});return b.concat(c)},_computeElementLabel:function(a,b,c){__p&&__p();var d=a.getAttribute("id");c=c||[];var e=c.includes(d);!e&&d&&c.push(d);d=a.getAttribute("aria-labelledby");if(!e&&d){e=d.split(" ");var f="";e.forEach(function(a){a=document.getElementById(a);if(!a)return;f+=this._computeElementLabel(a,!1,c)}.bind(this));return f}d=a.getAttribute("aria-label");if(d)return d;return b?"":a.innerText?a.innerText.substring(0,100):""},_addSectionItems:function(a){__p&&__p();a.forEach(function(a){__p&&__p();if(!b("TabbableElements").isVisible(a)||!a.offsetHeight||!a.offsetWidth)return;var c=a.getAttribute("role");if(!c||!Object.prototype.hasOwnProperty.call(k,c))return;var d=k[c](this._computeElementLabel(a,!0)),e=a;if(c==="search"||c==="region"||c==="form"){c=b("DOMQuery").scry(a,".navigationFocus");c.length&&(e=c[0],!b("TabbableElements").isTabbable(e)&&b("TabbableElements").find(e).length&&(e=b("TabbableElements").find(e)[0]))}d&&this._addMenuItem(d,b("getOrCreateDOMID")(a),b("getOrCreateDOMID")(e))}.bind(this))},_setupSectionsMenu:function(){var a=b("DOMQuery").scry(document.body,"[role]");a=this._getLandmarkSections(a);this._cleanupSectionsMenu();this._addSectionItems(a)},_cleanupSectionsMenu:function(){while(this._items.length)this._sectionsMenu.removeItem(this._items.pop())},_setupAccessibilityMenu:function(){if(!this._accessibilityMenu)return;if(b("KeyboardShortcuts").hasFlyoutToShow()){var a=this._accessibilityMenu.getItemAt(0);a!==this._shortcutMenuItem&&this._accessibilityMenu.addItemBefore(this._shortcutMenuItem,a)}else this._accessibilityMenu.removeItem(this._shortcutMenuItem)},_logEvent:function(a,c){new(b("NavigationMenubarInteractionsTypedLogger"))().setAction(a).setTargetItem(c).log()},_checkShortcutsShow:function(a,c){if(c.item.getValue()==="key_shortcuts")if(b("AccessibilityExperimentsConfig").a11yKeyboardShortcutNub)this._ignoreBlur=!1,this._hideMenubar(),setTimeout(function(){b("KeyboardShortcuts").showShortcutFlyout()},0);else{a=this._getHelpDialogRequest();a&&(a.setRelativeTo(b("getActiveElement")()),b("AsyncDialog").send(a),this._ignoreBlur=!1,this._hideMenubar())}this._logEvent("selected_item_ax",c.item.getValue())},_checkLogEvent:function(a,b){a=b.item.getValue();this._logEvent("selected_item_global",a);this._ignoreBlur=!1},_getHelpDialogRequest:function(){if(!this._dialogRequest)this._dialogRequest=new(b("AsyncRequest"))("/ajax/keyboard_shortcuts"),this._dialogRequest.setReadOnly(!0);else if(this._dialogRequest.transport)return null;return this._dialogRequest}};e.exports=a}),null);
__d("FormTypeABTester",["Base64","Event"],(function(a,b,c,d,e,f){__p&&__p();function a(a){__p&&__p();var c=32,d=65,e=90,f=48,g=57,h=58,i=63,j=91,k=94,l=0,m=0,n=0,o=0,p=[],q=null,r=[],s=[],t=[],u=[];for(var v=0;v<10;v++)r.push(0),s.push(0);for(var v=0;v<10;v++)s.push(0),t.push(0),u.push(0);v=function(a){__p&&__p();var b=window.event?Date.now():a.timeStamp;a=window.event?window.event.keyCode:a.which;a%=128;a>=d&&a<=e||a==c?l++:a>=f&&a<=g?m++:a>=h&&a<=i||a>=j&&a<=k?n++:o++;p[a]=b;if(q){var r=b-q;r>=0&&(a>=d&&a<=e||a==c)&&(r<400?s[Math.floor(r/20)]++:r<1e3?t[Math.floor((r-400)/60)]++:r<3e3&&u[Math.floor((r-1e3)/200)]++)}q=b};var w=function(a){var b=window.event?Date.now():a.timeStamp;a=window.event?window.event.keyCode:a.which;b=b-p[a%128];b>=50&&b<250&&r[Math.floor((b-50)/20)]++},x=function(a){var b=Math.max.apply(Math,a),c=[];a.forEach(function(a){c.push(Math.floor(a*63/(b||1)))});return c};this.getDataVect=function(){var a=s.concat(t,u);return x(a).concat(x(r),[l/2,m/2,n/2,o/2])};this.getData=function(){return b("Base64").encodeNums(this.getDataVect())};b("Event").listen(a,{keyup:w.bind(this),keydown:v.bind(this)})}e.exports=a}),null);
__d("FourOhFourJSTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(){this.clear()}a.prototype.log=function(){b("GeneratedLoggerUtils").log("logger:FourOhFourJSLoggerConfig",this.$1,b("Banzai").BASIC)};a.prototype.logVital=function(){b("GeneratedLoggerUtils").log("logger:FourOhFourJSLoggerConfig",this.$1,b("Banzai").VITAL)};a.prototype.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:FourOhFourJSLoggerConfig",this.$1,{signal:!0})};a.prototype.clear=function(){this.$1={};return this};a.prototype.getData=function(){return babelHelpers["extends"]({},this.$1)};a.prototype.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.setFbid=function(a){this.$1.fbid=a;return this};a.prototype.setOriginalURI=function(a){this.$1.original_uri=a;return this};a.prototype.setScriptPath=function(a){this.$1.script_path=a;return this};a.prototype.updateExtraData=function(a){a=b("nullthrows")(b("GeneratedLoggerUtils").serializeMap(a));b("GeneratedLoggerUtils").checkExtraDataFieldNames(a,g);this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.addToExtraData=function(a,b){var c={};c[a]=b;return this.updateExtraData(c)};var g={fbid:!0,original_uri:!0,script_path:!0};e.exports=a}),null);
__d("LoginFormController",["Event","ge","goURI","Button","Cookie","DeferredCookie","FormTypeABTester","WebStorage"],(function(a,b,c,d,e,f){__p&&__p();f.init=function(a,c,d,e){__p&&__p();if(e)var f=new(b("FormTypeABTester"))(a);b("Event").listen(a,"submit",function(){e&&a.ab_test_data&&(a.ab_test_data.value=f.getData()),window.__cookieReload&&window.clearInterval(window.__cookieReload),b("Button").setEnabled(c,!1),setTimeout(b("Button").setEnabled.bind(null,c,!0),15e3),b("DeferredCookie").flushAllCookies()});var g=b("ge")("lgnjs");if(g){var h=Math.floor(Date.now()/1e3);g.value=h}var i=b("WebStorage").getSessionStorage();g=i!=null?parseInt(i.getItem("LoginPollRateLimit"),10):0;var j=d!=null;g>h-60&&(j=!1);if(j){var k;g=function(){b("Cookie").get("c_user")!=null&&(window.clearInterval(k),i!=null&&i.setItem("LoginPollRateLimit",Math.floor(Date.now()/1e3)),b("goURI")(d))};k=window.setInterval(g,1e3);g()}}}),null);
__d("FocusRing",["cx","CSS","Event","Keys","KeyEventController","VirtualCursorStatus","emptyFunction"],(function(a,b,c,d,e,f,g){__p&&__p();var h=["mousedown","mouseup"];a={KEY_CODES:[b("Keys").UP,b("Keys").RIGHT,b("Keys").DOWN,b("Keys").LEFT,b("Keys").TAB,b("Keys").RETURN,b("Keys").SPACE,b("Keys").ESC],init:function(){if(this._initialized)return;this._userInteractingWithKeyboard=!1;this._attachVirtualCursorListener();this._attachKeyDownListener();document.body&&b("CSS").addClass(document.body,"_19_u");this._initialized=!0},usingKeyboardNavigation:function(){return this._userInteractingWithKeyboard},_attachVirtualCursorListener:function(){document.documentElement&&(this._onClickListener=b("VirtualCursorStatus").add(document.documentElement,this._onClick.bind(this)))},_attachMouseListeners:function(){this._onMouseListeners=h.map(function(a){return b("Event").listen(document.documentElement,a,this._onMouseEvent.bind(this))}.bind(this))},_attachKeyDownListener:function(){this._onKeyDownListener=b("Event").listen(document.documentElement,"keydown",this._onKeyDown.bind(this))},_initialized:!1,_userInteractingWithKeyboard:!0,_onMouseEvent:function(){this._hideFocusRing()},_onMouseListeners:h.map(function(a){return{remove:b("emptyFunction")}}),_removeMouseListeners:function(){this._onMouseListeners.forEach(function(a){return a.remove()})},_onClick:function(a,b,c){a&&this._showFocusRing()},_onKeyDown:function(event){this.KEY_CODES.indexOf(b("Event").getKeyCode(event))>-1&&b("KeyEventController").filterEventTargets(event,"keydown")&&this._showFocusRing()},_showFocusRing:function(){this._onKeyDownListener.remove(),this._attachMouseListeners(),this._userInteractingWithKeyboard=!0,document.body&&b("CSS").removeClass(document.body,"_19_u")},_hideFocusRing:function(){this._removeMouseListeners(),this._attachKeyDownListener(),this._userInteractingWithKeyboard=!1,document.body&&b("CSS").addClass(document.body,"_19_u")},_onKeyDownListener:{remove:b("emptyFunction")},_onClickListener:{remove:b("emptyFunction")}};e.exports=a}),null);
__d("FourOhFourJSLogger",["FourOhFourJSTypedLogger","ScriptPath"],(function(a,b,c,d,e,f){a={log:function(){window.onload=function(){var a=new(b("FourOhFourJSTypedLogger"))();a.setOriginalURI(window.location.href);a.setScriptPath(b("ScriptPath").getScriptPath());a.logVital()}}};e.exports=a}),null);
__d("LoginbarPopover",["CSS","ge","getActiveElement"],(function(a,b,c,d,e,f){__p&&__p();var g=1e3;a={init:function(a,c,d){var e=b("ge")("email",d);setTimeout(function(){return this.show(a,d,e)}.bind(this),g);c.addEventListener("click",function(event){event.kill(),this.toggle(d,e)}.bind(this));a.style.visibility="visible"},show:function(a,c,d){b("CSS").show(c);a=b("getActiveElement")().tagName.toLowerCase();a!=="input"&&a!=="textarea"&&d.focus()},toggle:function(a,c){b("CSS").toggle(a),b("CSS").shown(a)&&c.focus()}};e.exports=a}),null);
__d("ScreenDimensionsAutoSet",[],(function(a,b,c,d,e,f){function g(){if(!window.btoa)return"";var a={w:screen.width,h:screen.height,aw:screen.availWidth,ah:screen.availHeight,c:screen.colorDepth};return btoa(JSON.stringify(a))}a={setInputValue:function(a){a.value=g()}};e.exports=a}),null);
__d("StringTransformations",[],(function(a,b,c,d,e,f){e.exports={unicodeEscape:function(a){return a.replace(/[^A-Za-z0-9\-\.\:\_\$\/\+\=]/g,function(a){a=a.charCodeAt().toString(16);return"\\u"+("0000"+a.toUpperCase()).slice(-4)})},unicodeUnescape:function(a){return a.replace(/(\\u[0-9A-Fa-f]{4})/g,function(a){return String.fromCharCode(parseInt(a.slice(2),16))})}}}),null);
__d("SISketchSurface",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({FEED:"feed",LOGIN:"login",REG:"registration"})}),null);
__d("XSISketchResultsController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/sketch_results/",{})}),null);
__d("Sketch",["nullthrows","md5","Alea","AsyncRequest","XSISketchResultsController","Form","Base64","SISketchSurface","performanceNow","JSReliabilityFixesGatingConfig","emptyFunction"],(function(a,b,c,d,e,f){__p&&__p();function g(a,c,d){"use strict";this.seed=a,this.rounds=c,this.rng=b("Alea")(a),this.ctx=b("nullthrows")(d.getContext("2d")),this.width=d.width,this.height=d.height}g.prototype.solve=function(){"use strict";__p&&__p();for(var a=0;a<this.rounds;a++)switch(this.pickPrimitive(a)){case"text":this.drawText();break;case"bezier":this.drawBezier();break;case"circle":this.drawCircle();break;case"emoji":this.drawEmoji();break}};g.prototype.solveOnePrimitive=function(a){"use strict";__p&&__p();for(var b=0;b<this.rounds;b++)switch(a){case"text":this.drawText();break;case"bezier":this.drawBezier();break;case"circle":this.drawCircle();break;case"emoji":this.drawEmoji();break}};g.prototype.pickPrimitive=function(a){"use strict";var b=["emoji","circle","bezier","text"];return b[a%b.length]};g.prototype.drawText=function(){"use strict";var a=Math.floor(this.rng()*50+100);this.ctx.font=a+"px Arial";var b=Math.floor(this.rng()*100).toString(),c=Math.floor(this.rng()*this.width/2);a=this.rngRange(a*2,this.height-a);this.ctx.fillStyle=this.makeRadialGradient();this.applyShadow();this.ctx.fillText(b,c,a)};g.prototype.drawEmoji=function(){"use strict";var a=Math.floor(this.rng()*50+100);this.ctx.font=a+"px Arial";var b="\ud83d\ude03",c=Math.floor(this.rng()*this.width/2);a=this.rngRange(a*2,this.height-a);this.ctx.fillStyle=this.makeRadialGradient();this.applyShadow();this.ctx.fillText(b,c,a)};g.prototype.drawBezier=function(){"use strict";__p&&__p();this.ctx.beginPath();var a=this.rng()*this.width,b=this.rng()*this.height,c=this.rng()*this.width,d=this.rng()*this.height,e=this.rng()*this.width,f=this.rng()*this.height;this.ctx.moveTo(a,b);this.ctx.bezierCurveTo(this.rng()*this.width,this.rng()*this.height,this.rng()*this.width,this.rng()*this.height,c,d);this.ctx.bezierCurveTo(this.rng()*this.width,this.rng()*this.height,this.rng()*this.width,this.rng()*this.height,e,f);this.ctx.bezierCurveTo(this.rng()*this.width,this.rng()*this.height,this.rng()*this.width,this.rng()*this.height,a,b);this.ctx.fillStyle=this.makeRadialGradient();this.applyShadow();this.ctx.fill()};g.prototype.drawCircle=function(){"use strict";this.ctx.beginPath(),this.ctx.arc(this.rng()*this.width,this.rng()*this.height,this.rng()*this.width/5,0,2*Math.PI),this.ctx.fillStyle=this.makeRadialGradient(),this.applyShadow(),this.ctx.fill(),this.ctx.lineWidth=2,this.ctx.strokeStyle=this.makeRadialGradient(),this.ctx.stroke()};g.prototype.makeRadialGradient=function(){"use strict";var a=this.ctx.createRadialGradient(this.rng()*this.width,this.rng()*this.height,0,this.rng()*this.width,this.rng()*this.height,this.width*2);a.addColorStop(0,this.makeColor());a.addColorStop(.5,this.makeColor());a.addColorStop(1,this.makeColor());return a};g.prototype.makeColor=function(){"use strict";var a=Math.floor(this.rng()*255),b=Math.floor(this.rng()*255),c=Math.floor(this.rng()*255);return"rgb("+a+","+b+","+c+")"};g.prototype.applyShadow=function(){"use strict";this.ctx.shadowColor=this.makeColor(),this.ctx.shadowBlur=this.rng()*50,this.ctx.shadowOffsetX=this.rng()*15,this.ctx.shadowOffsetY=this.rng()*15};g.prototype.rngRange=function(a,b){"use strict";var c=Math.min(a,b);a=Math.max(a,b);return this.rng()*(a-c)+c};var h={solveIntern:function(a,b,c,d){a=h.solve(a,c,d);b.textContent=a.hash},solveAndCallAsyncController:function(a,c,d){a=h.createCanvasAndSolve(a,c,d);c=h.encode(a);d=b("XSISketchResultsController").getURIBuilder().getURI();new(b("AsyncRequest"))().setURI(d).setMethod("POST").setData({skstamp:c}).setTimeoutHandler(1e4,b("emptyFunction")).setErrorHandler(b("emptyFunction")).send()},solveAndUpdateForm:function(a,c,d,e){a=h.createCanvasAndSolve(a,c,d);e=="login_form"?a.surface=b("SISketchSurface").LOGIN:e=="reg"?a.surface=b("SISketchSurface").REG:a.surface="";c=h.encode(a);d=document.getElementById(e);b("Form").createHiddenInputs({skstamp:c},d)},solveAllPrimitivesAndCallAsyncController:function(a,c,d){a=h.createCanvasAndSolveAllPrimitives(a,c,d);c=h.encode(a);d=b("XSISketchResultsController").getURIBuilder().getURI();new(b("AsyncRequest"))().setURI(d).setMethod("POST").setData({skstamp:c}).setTimeoutHandler(1e4,b("emptyFunction")).setErrorHandler(b("emptyFunction")).send()},createCanvasAndSolve:function(a,c,d){__p&&__p();var e=document.createElement("canvas");e.width=200;e.height=200;e.style.display="none";var f={};f.rounds=d;f.seed=a;f.seed2=c;b("nullthrows")(document.body).appendChild(e);a=h.solve(e,a,d);c=h.solve(e,c,d);f.hash=a.hash;f.hash2=c.hash;f.time_taken=a.time_taken+c.time_taken;b("nullthrows")(document.body).removeChild(e);return f},solve:function(a,c,d){c=new g(c,d,a);c.ctx.clearRect(0,0,c.width,c.height);var e;b("JSReliabilityFixesGatingConfig").should_get_fix?(d=b("performanceNow")(),c.solve(),e=b("performanceNow")()):(d=performance.now(),c.solve(),e=performance.now());c=parseInt((e-d)*1e3,10);e=b("md5")(a.toDataURL());d={hash:e,time_taken:c};return d},createCanvasAndSolveAllPrimitives:function(a,c,d){__p&&__p();var e=document.createElement("canvas");e.width=200;e.height=200;e.style.display="none";var f={rounds:d,seed:a,hash:"",seed2:c,hash2:"",time_taken:0,hash_text:"",hash_bezier:"",hash_circle:"",hash_emoji:""};b("nullthrows")(document.body).appendChild(e);var g=h.solve(e,a,d);c=h.solve(e,c,d);f.hash=g.hash;f.hash2=c.hash;f.time_taken=g.time_taken+c.time_taken;f.hash_text=h.solvePrimitive(e,a,d,"text");f.hash_bezier=h.solvePrimitive(e,a,d,"bezier");f.hash_circle=h.solvePrimitive(e,a,d,"circle");f.hash_emoji=h.solvePrimitive(e,a,d,"emoji");b("nullthrows")(document.body).removeChild(e);return f},solvePrimitive:function(a,c,d,e){c=new g(c,d,a);c.ctx.clearRect(0,0,c.width,c.height);c.solveOnePrimitive(e);d=b("md5")(a.toDataURL());return d},encode:function(a){return b("Base64").encode(JSON.stringify(a))}};e.exports=h}),null);
__d("ErrorContextualDialogXUITheme",["cx"],(function(a,b,c,d,e,f,g){a={wrapperClassName:"_572t",arrowDimensions:{offset:12,length:22}};e.exports=a}),null);
__d("WebStorageMonster",["Event","AsyncRequest","UserActivity","StringTransformations","WebStorage","WebStorageMonsterLoggingURI","isEmpty","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f){__p&&__p();var g=3e5,h=!1;function i(a){var c={};for(var d in a){var e=a.getItem(d),f=b("StringTransformations").unicodeEscape(d);typeof e==="string"&&(c[f]=e.length)}return c}function j(a){var c=b("WebStorage").getLocalStorage();if(!c||!a.keys)return;m._getLocalStorageKeys().forEach(function(b){a.keys.includes(b)&&(c.removeItem(b),!1)})}function k(a){var c=b("WebStorage").getLocalStorage();c&&m._getLocalStorageKeys().forEach(function(b){a.some(function(a){return new RegExp(a).test(b)})||(c.removeItem(b),!1)})}function l(){var a=arguments.length<=0||arguments[0]===undefined?!1:arguments[0];b("UserActivity").isActive(g)?b("setTimeoutAcrossTransitions")(function(){l(a)},g):m.cleanNow(a)}var m={registerLogoutForm:function(a,c){b("Event").listen(a,"submit",function(a){m.cleanOnLogout(c)})},schedule:function(){var a=arguments.length<=0||arguments[0]===undefined?!1:arguments[0];if(h)return;h=!0;l(a)},cleanNow:function(){__p&&__p();var a=arguments.length<=0||arguments[0]===undefined?!1:arguments[0],c=Date.now(),d={},e=b("WebStorage").getLocalStorage();e&&(d.local_storage=i(e));var f=b("WebStorage").getSessionStorage();f&&(d.session_storage=i(f));var g=!b("isEmpty")(d),h=Date.now();d.logtime=h-c;if(g){var k=b("WebStorageMonsterLoggingURI").uri;if(k===null)return null;new(b("AsyncRequest"))(k).setData(d).setHandler(function(c){c=c.getPayload();c.keys&&(c.keys=c.keys.map(b("StringTransformations").unicodeUnescape));a||j(c)}).send()}},cleanOnLogout:function(a){a&&k(a);a=b("WebStorage").getSessionStorage();a&&a.clear()},_getLocalStorageKeys:function(){var a=b("WebStorage").getLocalStorage();return a?Object.keys(a):[]}};e.exports=m}),null);
__d("BrowserPrefillSource",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({BROWSER_DROPDOWN:"browser_dropdown",BROWSER_ONLOAD:"browser_onload",SERVER_PREFILL:"server_prefill",ATTEMPT_USER:"attempt_user",EMAIL_NOTIFICATION:"email_notification",HEADER:"header",IDENTIFIED_USER:"identified_user",LAST_LOGIN:"last_login",MOBILE_SUBNO_KEY:"mobile_subno_key",PROVIDED_OR_SOFT_MATCHED:"provided_or_soft_matched",TYPO_CORRECTED:"typo_corrected"})}),null);
__d("BrowserPrefillType",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({CONTACT_POINT:"contact_point",PASSWORD:"password"})}),null);
__d("LoginEvent",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({LOGIN_FAILURE:"login_failure",LOGIN_SUCCESS:"login_success",SESSION_TERMINATION:"session_termination",SESSION_UPDATE:"session_update",SESSION_VALIDATION:"session_validation",CHANGED_USER_IDENTIFIER:"changed_user_identifier",CLICKED_NEXT:"clicked_next",CLICKED_NEXT_USER_IDENTIFIER_BLANK:"clicked_next_user_identifier_blank",CLICKED_NEXT_USER_IDENTIFIER_FILLED:"clicked_next_user_identifier_filled",PASSWORD_ENTRY_VIEWED:"password_entry_viewed",CHANGED_PASSWORD:"changed_password",CLICKED_BACK:"clicked_back",CLICKED_SUBMIT:"clicked_submit",CLICKED_SUBMIT_PASSWORD_BLANK:"clicked_submit_password_blank",CLICKED_SUBMIT_PASSWORD_FILLED:"clicked_submit_password_filled",FORM_LOAD_CLIENT:"form_load_client",FORM_LOAD:"form_load",FORM_FOCUS:"form_focus",CLICKED_REG_IDENTIFIER_BLANK:"clicked_reg_identifier_blank",CLICKED_REG_IDENTIFIER_FILLED:"clicked_reg_identifier_filled",BROWSER_AUTOCOMPLETE:"browser_autocomplete",INVALID_CONTACTPOINT:"invalid_contactpoint",VALID_CONTACTPOINT:"valid_contactpoint",SHOWN_OTP_LINK:"shown_otp_link",CLICKED_OTP_LINK:"clicked_otp_link",CLICKED_NOT_YOU:"clicked_not_you",LOGIN_WITH_REMOVED_CP_CORRECT_PW:"login_with_removed_cp_correct_pw"})}),null);
__d("LoginFormKeys",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({BUTTON_KEY:"loginbutton",CUID:"cuid",EMAIL_FIELD_CONTAINER:"email_container",EMAIL_FIELD_KEY:"email",ERROR_BOX_KEY:"error_box",HEADER_BLOCK:"header_block",LOGIN_LINK:"login_link",NOT_ME_LINK:"not_me_link",PASSWORD_FIELD_KEY:"pass",PREFILL_CONTACT_POINT:"prefill_contact_point",PREFILL_SOURCE:"prefill_source",PREFILL_TYPE:"prefill_type",EMAIL_INPUT_CONTAINER:"email_input_container",FIRST_PREFILL_SOURCE:"first_prefill_source",FIRST_PREFILL_TYPE:"first_prefill_type",HAD_CP_PREFILLED:"had_cp_prefilled",HAD_PASSWORD_PREFILLED:"had_password_prefilled",AUTH_STEP_CP_DISPLAY:"step_two_cp_display",EMAIL_COMPONENTS_WRAPPER:"email_components_wrapper",PASSWORD_COMPONENTS_WRAPPER:"password_component_wrapper"})}),null);
__d("BrowserPrefillLogging",["BanzaiLogger","BrowserPrefillSource","BrowserPrefillType","DamerauLevenshtein","LoginEvent","LoginFormKeys","ge"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a={initContactpointFieldLogging:function(a){this.contactpointFieldID=a.contactpointFieldID;this._updateContactpoint();this.serverPrefillContactpoint=a.serverPrefill;a=b("ge")(this.contactpointFieldID);if(a==null)return;a.addEventListener("input",this._mayLogContactpointPrefillViaDropdown.bind(this));window.addEventListener("load",this._mayLogContactpointPrefillOnload.bind(this));return},registerCallback:function(a){this.regeisteredCallbacks=this.regeisteredCallbacks||[],this.regeisteredCallbacks.push(a)},_invokeCallbacks:function(a,b){if(this.regeisteredCallbacks==null||this.regeisteredCallbacks.size===0)return;this.regeisteredCallbacks.forEach(function(c){c(a,b)})},initPasswordFieldLogging:function(a){this.passwordFieldID=a.passwordFieldID;this._updatePassword();a=b("ge")(this.passwordFieldID);if(a==null)return;a.addEventListener("input",this._mayLogPasswordPrefillViaDropdown.bind(this));window.addEventListener("load",this._mayLogPasswordPrefillOnload.bind(this))},updatePrefill:function(a,c,d){var e=b("ge")(b("LoginFormKeys").PREFILL_SOURCE),f=b("ge")(b("LoginFormKeys").PREFILL_TYPE),g=b("ge")(b("LoginFormKeys").FIRST_PREFILL_SOURCE),h=b("ge")(b("LoginFormKeys").FIRST_PREFILL_TYPE),i=b("ge")(b("LoginFormKeys").HAD_CP_PREFILLED),j=b("ge")(b("LoginFormKeys").HAD_PASSWORD_PREFILLED),k=b("ge")(b("LoginFormKeys").PREFILL_CONTACT_POINT);e!=null&&(e.value=c);f!=null&&(f.value=d);k!=null&&a!=null&&(k.value=a);h!=null&&(h.value==null||h.value=="")&&(h.value=d);g!=null&&(g.value==null||g.value=="")&&(g.value=c);i!=null&&(i.value==null||i.value==="false")&&d===b("BrowserPrefillType").CONTACT_POINT&&(i.value="true");j!=null&&(j.value==null||j.value==="false")&&d===b("BrowserPrefillType").PASSWORD&&(j.value="true")},_mayLogContactpointPrefillOnload:function(){this._updateContactpoint();if(this.previousContactpoint==null||this.previousContactpoint==="")return;var a=this.previousContactpoint===this.serverPrefillContactpoint?b("BrowserPrefillSource").SERVER_PREFILL:b("BrowserPrefillSource").BROWSER_ONLOAD;this._logBrowserPrefill(a,b("BrowserPrefillType").CONTACT_POINT);this._invokeCallbacks(a,b("BrowserPrefillType").CONTACT_POINT)},_mayLogPasswordPrefillOnload:function(){this._updatePassword();if(this.previousPassword==null||this.previousPassword==="")return;this._logBrowserPrefill(b("BrowserPrefillSource").BROWSER_ONLOAD,b("BrowserPrefillType").PASSWORD);this._invokeCallbacks(b("BrowserPrefillSource").BROWSER_ONLOAD,b("BrowserPrefillType").PASSWORD)},_mayLogContactpointPrefillViaDropdown:function(){__p&&__p();var a=b("ge")(this.contactpointFieldID);if(a==null||a.value==null)return;if(this._isBrowserPrefill(this.previousContactpoint,a.value)===!1){this._updateContactpoint();return}this._updateContactpoint();this._logBrowserPrefill(b("BrowserPrefillSource").BROWSER_DROPDOWN,b("BrowserPrefillType").CONTACT_POINT);this._invokeCallbacks(b("BrowserPrefillSource").BROWSER_DROPDOWN,b("BrowserPrefillType").CONTACT_POINT)},_mayLogPasswordPrefillViaDropdown:function(){__p&&__p();var a=b("ge")(this.passwordFieldID);if(a==null||a.value==null)return;if(this._isBrowserPrefill(this.previousPassword,a.value)===!1){this._updatePassword();return}this._updatePassword();this._logBrowserPrefill(b("BrowserPrefillSource").BROWSER_DROPDOWN,b("BrowserPrefillType").PASSWORD);this._invokeCallbacks(b("BrowserPrefillSource").BROWSER_DROPDOWN,b("BrowserPrefillType").PASSWORD)},_isBrowserPrefill:function(a,c){if(c==="")return!1;if(c===a)return!1;if(c.length===1||a.length===c.length+1||c.length===a.length+1)return!1;var d=b("DamerauLevenshtein").DamerauLevenshteinDistance(c,a);return d===a.length-c.length?!1:!0},_updateContactpoint:function(){var a=b("ge")(this.contactpointFieldID);this.previousContactpoint=a!=null&&a.value!=null?a.value:""},_updatePassword:function(){var a=b("ge")(this.passwordFieldID);this.previousPassword=a!=null&&a.value!=null?a.value:""},_logBrowserPrefill:function(a,c){var d=null;c===b("BrowserPrefillType").CONTACT_POINT&&(d=this.previousContactpoint);a!==b("BrowserPrefillSource").SERVER_PREFILL&&this.updatePrefill(d,a,c);b("BanzaiLogger").create({signal:!0}).log("LoginEventsLoggerConfig",{event:b("LoginEvent").BROWSER_AUTOCOMPLETE,prefill_contact_point:d,prefill_source:a,prefill_type:c})}};e.exports=a}),null);
__d("ServiceWorkerLoginAndLogout",["ClientServiceWorkerMessage"],(function(a,b,c,d,e,f){function g(a){new(b("ClientServiceWorkerMessage"))(a,null).sendViaController()}a={login:function(){g("login")},logout:function(){g("logout")}};e.exports=a}),null);