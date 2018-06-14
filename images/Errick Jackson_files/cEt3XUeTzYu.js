if (self.CavalryLogger) { CavalryLogger.start_js(["5WSlX"]); }

__d("ActivityLogStory",["Event","Toggler","Run"],(function(a,b,c,d,e,f){"use strict";a={registerPopover:function(a){var c=b("Event").listen(window,"scroll",function(c){b("Toggler").hide(a)});b("Run").onLeave(c.remove.bind(c))}};e.exports=a}),null);
__d("AllActivityContentLoader",["csx","Arbiter","CSS","DOM","DOMScroll","OnVisible","Parent","MorePagerFetchOnScroll","TimelineComponentKeys","TimelineConstants","TimelineController","TimelineLegacySections","TimelineSmartInsert","UIPagelet","Vector","$","clickRefAction"],(function(a,b,c,d,e,f,g){__p&&__p();var h=!1,i=null,j={},k=[],l={},m=[],n=null;function o(a,c,d,e,f){this.node=a,this._canScrollLoad=!0,this.scrubberKey=c,this._pageletLoadData=d,this.loaded=e,this.sortKey=f,this.contentNode=b("DOM").scry(a,"div._z6j")[0]}function p(){if(h)return;b("TimelineController").register(b("TimelineComponentKeys").CONTENT,r);b("clickRefAction")("scrubber").set_namespace("allactivity");h=!0}function q(a){a=b("TimelineLegacySections").get(a);a&&a._canScrollLoad&&a.load()}Object.assign(o.prototype,{load:function(){__p&&__p();if(this.loaded)return;this.loaded=!0;this.contentNode&&b("CSS").hide(this.contentNode);b("CSS").show(b("Parent").byClass(this.node,"fbTimelineSection"));var a=this.node;function c(c){b("TimelineSmartInsert").run(a,c)}var d=b("DOM").find(this.node,"div.fbTimelineLogStream");m.push(b("UIPagelet").loadFromEndpoint("TimelineEntStoryActivityLogPagelet",d.id,this._pageletLoadData,{usePipe:!0,jsNonblock:!0,constHeight:!0,displayCallback:c,append:!0}))},contentAdded:function(a){this.hasContent||(b("CSS").removeClass(b("Parent").byClass(this.node,"stat_elem"),"async_saving"),this.contentNode&&(a&&b("DOM").prependContent(this.contentNode,a),b("CSS").show(this.contentNode)),this.hasContent=!0)},fullyLoaded:function(){this.hasContent||(b("CSS").removeClass(b("Parent").byClass(this.node,"stat_elem"),"async_saving"),b("CSS").show(b("DOM").find(this.node,"div._40pu")),this.contentNode&&b("CSS").hide(this.contentNode))},activateScrollLoad:function(){this._canScrollLoad=!0,l[this.scrubberKey]&&l[this.scrubberKey].reset()},deactivateScrollLoad:function(){if(!this.loaded)this._canScrollLoad=!1;else{var a=b("DOM").scry(this.node,".uiMorePager");a&&a.map(function(a){a=b("MorePagerFetchOnScroll").getInstance(a.id);a&&a.removeEventListeners()})}l[this.scrubberKey]&&l[this.scrubberKey].remove()},getParent:function(){return this.parentKey?b("TimelineLegacySections").get(this.parentKey):null}});var r={SCROLL_TO_OFFSET:115,HEADER_SCROLL_CUTOFF:30,CURRENT_SECTION_OFFSET:150,registerTimePeriod:function(a,c,d,e,f,g){p();a=new o(a,c,d,e,g);!f?(k.push(c),j[c]=!0):(a.parentKey=f,b("TimelineLegacySections").get(f).subSections=b("TimelineLegacySections").get(f).subSections||[],b("TimelineLegacySections").get(f).subSections.push(a),b("TimelineLegacySections").get(f).subSections.sort(function(a,b){return b.sortKey-a.sortKey}));b("TimelineLegacySections").set(c,a);r.checkCurrentSectionChange();b("Arbiter").inform(b("TimelineConstants").SECTION_REGISTERED,{scrubberKey:c},b("Arbiter").BEHAVIOR_PERSISTENT)},reset:function(){r.stopLoadingContent(),h=!1,b("TimelineLegacySections").removeAll(),i=null,j={},k=[],l={},m=[],n=null},stopLoadingContent:function(){for(var a in l)l[a]&&l[a].remove();for(var b=0;b<m.length;b++)m[b].cancel()},setContentHeader:function(a){n=a},checkCurrentSectionChange:function(){var a=r.getCurrentSection(),c=i&&i.scrubberKey;if(a&&a.scrubberKey!==c){i=a;c=a.scrubberKey;a=a.parentKey;a||(a=c,c=null);b("TimelineController").sectionHasChanged(a,c)}},getCurrentSection:function(){__p&&__p();var a={},c=b("TimelineLegacySections").getAll();for(var d in c){var e=c[d];if(!e.loaded)continue;var f=b("Vector").getElementPosition(e.node,"viewport").y;f<r.CURRENT_SECTION_OFFSET&&(a[f]=e)}f=Math.max.apply(this,Object.keys(a));e=f==-Infinity;if(!e)return a[f];else return null},enableScrollLoad:function(a,c,d){a=b("$")(a);c=r.getNextSectionKey(c);c&&(l[c]=new(b("OnVisible"))(a,q.bind(null,c),!1,d||1e3))},getNextSectionKey:function(a){__p&&__p();var c=b("TimelineLegacySections").get(a);c=c.getParent();if(c)for(var d=0;d<c.subSections.length-1;d++)if(c.subSections[d].scrubberKey==a)return c.subSections[d+1].scrubberKey;for(var d=0;d<k.length-d;d++)if(k[d]==c.scrubberKey){a=k[d+1];if(a){a=b("TimelineLegacySections").get(a);if(a&&a.subSections){a=a.subSections[0];if(a)return a.scrubberKey}}}return null},navigateToSection:function(a,c,d){__p&&__p();c=!!c;d=b("TimelineLegacySections").get(a);if(!d)return;d.getParent()||(a=d.subSections[0].scrubberKey,d=b("TimelineLegacySections").get(a));for(var e=0;e<k.length;e++){var f=b("TimelineLegacySections").get(k[e]);for(var g=0;g<f.subSections.length;g++){if(f.subSections[g].scrubberKey==a)break;f.subSections[g].deactivateScrollLoad()}if(f.scrubberKey==d.getParent().scrubberKey)break}d.activateScrollLoad();d.load();r.adjustContentPadding();g=b("Vector").getScrollPosition().x;f=b("Vector").getElementPosition(d.node).y;if(!c){e=r.SCROLL_TO_OFFSET;b("DOMScroll").scrollTo(new(b("Vector"))(g,f-e,"document"))}},adjustContentPadding:function(){b("$")("fbTimelineLogBody").style.paddingBottom=b("Vector").getViewportDimensions().y-r.CURRENT_SECTION_OFFSET-r.HEADER_SCROLL_CUTOFF+"px"},sectionHasContent:function(a){a=b("TimelineLegacySections").get(a);a&&a.contentAdded(n);n=null},sectionFullyLoaded:function(a){a=b("TimelineLegacySections").get(a);a&&a.fullyLoaded()}};e.exports=r}),null);
__d("legacy:dom",["DOM"],(function(a,b,c,d,e,f){a.DOM=b("DOM")}),3);
__d("FacebookSettingsPageTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(){this.clear()}a.prototype.log=function(){b("GeneratedLoggerUtils").log("logger:FacebookSettingsPageLoggerConfig",this.$1,b("Banzai").BASIC)};a.prototype.logVital=function(){b("GeneratedLoggerUtils").log("logger:FacebookSettingsPageLoggerConfig",this.$1,b("Banzai").VITAL)};a.prototype.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:FacebookSettingsPageLoggerConfig",this.$1,{signal:!0})};a.prototype.clear=function(){this.$1={};return this};a.prototype.getData=function(){return babelHelpers["extends"]({},this.$1)};a.prototype.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.setEntryPoint=function(a){this.$1.entry_point=a;return this};a.prototype.setEvent=function(a){this.$1.event=a;return this};a.prototype.setProduct=function(a){this.$1.product=a;return this};a.prototype.setProductElement=function(a){this.$1.product_element=a;return this};a.prototype.setVC=function(a){this.$1.vc=a;return this};c={entry_point:!0,event:!0,product:!0,product_element:!0,vc:!0};e.exports=a}),null);
__d("NotifUserSettingActionTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(){this.clear()}a.prototype.log=function(){b("GeneratedLoggerUtils").log("logger:NotifUserSettingActionLoggerConfig",this.$1,b("Banzai").BASIC)};a.prototype.logVital=function(){b("GeneratedLoggerUtils").log("logger:NotifUserSettingActionLoggerConfig",this.$1,b("Banzai").VITAL)};a.prototype.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:NotifUserSettingActionLoggerConfig",this.$1,{signal:!0})};a.prototype.clear=function(){this.$1={};return this};a.prototype.getData=function(){return babelHelpers["extends"]({},this.$1)};a.prototype.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.setAppID=function(a){this.$1.app_id=a;return this};a.prototype.setControllerClass=function(a){this.$1.controller_class=a;return this};a.prototype.setCurState=function(a){this.$1.cur_state=a;return this};a.prototype.setEntityID=function(a){this.$1.entity_id=a;return this};a.prototype.setEventType=function(a){this.$1.event_type=a;return this};a.prototype.setMedium=function(a){this.$1.medium=a;return this};a.prototype.setNotifType=function(a){this.$1.notif_type=a;return this};a.prototype.setPrevState=function(a){this.$1.prev_state=a;return this};a.prototype.setRecipID=function(a){this.$1.recip_id=a;return this};a.prototype.setSource=function(a){this.$1.source=a;return this};a.prototype.setWantLess=function(a){this.$1.want_less=a;return this};c={app_id:!0,controller_class:!0,cur_state:!0,entity_id:!0,event_type:!0,medium:!0,notif_type:!0,prev_state:!0,recip_id:!0,source:!0,want_less:!0};e.exports=a}),null);
__d("ActivityLogSearch",["Event","CSS","DOM","Input","Run"],(function(a,b,c,d,e,f){function a(a,c,d){var e=b("DOM").find(d,".inputtext");c=b("Event").listen(c,"click",function(){b("CSS").hide(a),b("CSS").show(d),e.focus()});b("Run").onLeave(c.remove.bind(c));c=b("Event").listen(e,"blur",function(){b("Input").getValue(e)||(b("CSS").hide(d),b("CSS").show(a))});b("Run").onLeave(c.remove.bind(c))}e.exports=a}),null);
__d("PopoverMenuDynamicTooltip",["csx","DOMQuery","Tooltip"],(function(a,b,c,d,e,f,g){__p&&__p();function a(a){"use strict";this._popoverMenu=a,this._setMenuSubscription=null,this._changeSubscription=null}a.prototype.enable=function(){"use strict";this._setMenuSubscription=this._popoverMenu.subscribe("setMenu",this._onSetMenu.bind(this))};a.prototype.disable=function(){"use strict";this._popoverMenu.unsubscribe(this._setMenuSubscription),this._setMenuSubscription=null,this._removeChangeSubscription()};a.prototype._onSetMenu=function(){"use strict";__p&&__p();this._removeChangeSubscription(),this._menu=this._popoverMenu.getMenu(),this._changeSubscription=this._menu.subscribe("change",function(a,c){__p&&__p();a=c.item;c[0]&&(a=c[0].item);if(!a)return;c=a.getLabel();c=c?c.toString():null;if(!c)return;a=this._popoverMenu.getTriggerElem();a=b("DOMQuery").scry(a,"span._55pe")[0];if(a&&a.nodeName){a=a.parentNode;a&&b("Tooltip").set(a,c)}}.bind(this))};a.prototype._removeChangeSubscription=function(){"use strict";this._changeSubscription&&(this._menu.unsubscribe(this._changeSubscription),this._changeSubscription=null)};e.exports=a}),null);
__d("ScrollHighlight",["DOMScroll","highlight"],(function(a,b,c,d,e,f){a={actOn:function(a,c,d){b("DOMScroll").scrollTo(a,!0,!1,0,d),b("highlight")(a,null,c)}};e.exports=a}),null);
__d("FutureSideNavItem",["Arbiter","CSS","DOM","Parent","$","createArrayFromMixed","getElementText"],(function(a,b,c,d,e,f){__p&&__p();function a(a,c){"use strict";__p&&__p();this.id=a.id;this.up=c;this.endpoint=a.endpoint;this.type=a.type;this.node=a.node||b("$")(a.id);this.paths=a.path?b("createArrayFromMixed")(a.path):[];this.keys=a.key?b("createArrayFromMixed")(a.key):[];c=this._findKeys(this.keys);this.numericKey=c.numeric||this.keys[0];this.textKey=c.text||this.keys[0];this._pathPattern=this._buildRegex(this.paths);this._keyPattern=this._buildRegex(this.keys);this.hideLoading();this.hideSelected()}a.prototype.equals=function(a){"use strict";return a&&a.id===this.id};a.prototype.getLinkNode=function(){"use strict";return b("DOM").scry(this.node,"a.item")[0]||b("DOM").scry(this.node,"a.subitem")[0]};a.prototype.matchPath=function(a){"use strict";return this._matchInput(this._pathPattern,a)};a.prototype.matchKey=function(a){"use strict";return this._matchInput(this._keyPattern,a)};a.prototype._matchInput=function(a,b){"use strict";a=a&&a.exec(b);return a&&a.slice(1)};a.prototype.getTop=function(){"use strict";return this.isTop()?this:this.up.getTop()};a.prototype.isTop=function(a){"use strict";return!this.up};a.prototype.setCount=function(a,b){"use strict";return this._updateCount(a,!0)};a.prototype.incrementCount=function(a,b){"use strict";return this._updateCount(a,!1)};a.prototype._updateCount=function(a,c,d){"use strict";__p&&__p();var e=b("DOM").scry(this.node,"span.count")[0],f=e&&b("DOM").scry(e,"span.countValue")[0];if(f){c=c?0:parseInt(b("getElementText")(f),10);c=Math.max(0,c+a);a=this.isTop()?"hidden":"hiddenSubitem";b("DOM").setContent(f,c);d&&b("CSS").conditionClass(this.node,a,!c);b("CSS").conditionClass(e,"hidden_elem",!c);if(this.isTop()){f=b("DOM").scry(this.node,"div.linkWrap")[0];f&&(b("CSS").conditionClass(f,"noCount",!c),b("CSS").conditionClass(f,"hasCount",c))}}b("Arbiter").inform("NavigationMessage.COUNT_UPDATE_DONE")};a.prototype.showLoading=function(){"use strict";b("CSS").addClass(this.node,"loading")};a.prototype.hideLoading=function(){"use strict";b("CSS").removeClass(this.node,"loading")};a.prototype.showSelected=function(){"use strict";b("CSS").addClass(this.node,"selectedItem"),b("CSS").hasClass(this.node,"hider")&&b("CSS").addClass(this._getExpanderParent(),"expandedMode")};a.prototype.hideSelected=function(){"use strict";b("CSS").removeClass(this.node,"selectedItem")};a.prototype.showChildren=function(){"use strict";b("CSS").addClass(this.node,"open")};a.prototype.hideChildren=function(){"use strict";b("CSS").removeClass(this.node,"open")};a.prototype._getExpanderParent=function(){"use strict";return b("Parent").byClass(this.node,"expandableSideNav")};a.prototype._buildRegex=function(a){"use strict";if(a.length){a=a.map(function(a){if(typeof a==="string")return a.replace(/([^a-z0-9_])/gi,"\\$1");else if(a&&a.regex)return a.regex});return new RegExp("^(?:"+a.join("|")+")$")}};a.prototype._findKeys=function(a){"use strict";var b=/^(app|group|fl)_/,c={};for(var d=0;d<a.length;d++){var e=b.test(a[d]);e&&!c.numeric?c.numeric=a[d]:!e&&!c.text&&(c.text=a[d]);if(c.numeric&&c.text)break}return c};e.exports=a}),null);
__d("FutureSideNavSection",["Bootloader","DOMQuery","$"],(function(a,b,c,d,e,f){__p&&__p();function a(a){"use strict";this.id=a.id,this.node=this.node||b("$")(a.id),this.editEndpoint=a.editEndpoint}a.prototype.equals=function(a){"use strict";return a&&a.id===this.id};a.prototype.getEditorAsync=function(a){"use strict";b("Bootloader").loadModules(["SortableSideNav"],function(c){c=new c(b("DOMQuery").find(this.node,"ul.uiSideNav"),this.editEndpoint);a(c)}.bind(this),"FutureSideNavSection")};e.exports=a}),null);
__d("FutureSideNav",["Arbiter","ChannelConstants","CSS","DOM","DOMDimensions","$","Event","FutureSideNavItem","FutureSideNavSection","NavigationMessage","PageTransitions","Parent","Run","SelectorDeprecated","URI","Vector","Locale","createArrayFromMixed","debounce"],(function(a,b,c,d,e,f){__p&&__p();function g(a,b,c){"use strict";g.instance&&g.instance.uninstall();g.instance=this;if(typeof a==="undefined")return;this.init(a,b,c)}g.prototype.init=function(a,c,d){"use strict";__p&&__p();this.root=a,this.items={},this.sections={},this.editor=null,this.editing=!1,this.selected=null,this.loading=null,this.keyParam="sk",this.defaultKey=c,this.uri=b("URI").getRequestURI(),this.ajaxPipe=d,this.ajaxPipeEndpoints={},this.sidecol=!0,this._installed=!0,this._handlePageTransitions=!0,b("PageTransitions").registerHandler(function(a){return this._handlePageTransitions&&this.handlePageTransition(a)}.bind(this)),this._eventHandlers=[],this._sectionEventHandlers={},this._arbiterSubscriptions=[b("Arbiter").subscribe(b("NavigationMessage").NAVIGATION_COMPLETED,this.navigationComplete.bind(this)),b("Arbiter").subscribe(b("NavigationMessage").NAVIGATION_FAILED,this.navigationFailed.bind(this)),b("Arbiter").subscribe(b("NavigationMessage").NAVIGATION_COUNT_UPDATE,this.navigationCountUpdate.bind(this)),b("Arbiter").subscribe(b("NavigationMessage").NAVIGATION_SELECT,this.navigationSelect.bind(this)),b("Arbiter").subscribe(b("ChannelConstants").getArbiterType("nav_update_counts"),this.navigationCountUpdateFromPresence.bind(this)),b("Arbiter").subscribe("sideNavPopoverMenuItemClicked",function(a,c){a=b("Parent").byClass(c.bookmarkNode,"homeSideNav");a=a&&a.getAttribute("id");if(!a)return;this._handleMenuClick(this.sections[a],c.bookmarkNode,c.menuItemNode,c.menuNode)}.bind(this)),b("Arbiter").subscribe("sideNavPopoverMenuCheckFavorite",function(a,c){a=b("Parent").byClass(c.bookmarkNode,"homeSideNav");a=a&&a.getAttribute("id");if(!a)return;a=this.sections[a].equals(this.getSection("favorites"));var d=this.items[c.bookmarkNode.id];a?d.showFavorite(c.menuNode):d.hideFavorite(c.menuNode)}.bind(this))],this._handleResize=b("debounce")(this._checkNarrow.bind(this),200),this._eventHandlers.push(b("Event").listen(window,"resize",this._handleResize)),this._checkNarrow(),this._selectorSubscriptions=[],window.Selector&&this._selectorSubscriptions.push(b("SelectorDeprecated").subscribe(["open","close"],function(a,c){c=b("Parent").byClass(c.selector,"sideNavItem");c&&b("CSS").conditionClass(c,"editMenuOpened",a==="open")})),b("Run").onLeave(this.uninstall.bind(this)),this._pendingSections&&this._pendingSections.forEach(function(a){this.initSection.apply(this,a)}.bind(this))};g.prototype._checkNarrow=function(){"use strict";if(!this.root)return;var a=b("Vector").getElementPosition(this.root).x;b("CSS").conditionClass(this.root,"uiNarrowSideNav",a<20||b("Locale").isRTL()&&a+b("DOMDimensions").getElementDimensions(this.root).width<b("DOMDimensions").getElementDimensions(b("$")("globalContainer")).width)};g.prototype.uninstall=function(){"use strict";__p&&__p();if(this._installed){this._installed=!1;this._handlePageTransitions=!1;this._arbiterSubscriptions.forEach(b("Arbiter").unsubscribe);this._selectorSubscriptions.forEach(function(a){b("SelectorDeprecated").unsubscribe(a)});this._eventHandlers.forEach(function(a){a.remove()});for(var a in this._sectionEventHandlers)this._sectionEventHandlers[a].remove();this._handleResize.reset()}};g.prototype.initSection=function(a,b){"use strict";if(!this._installed){this._pendingSections=this._pendingSections||[];this._pendingSections.push(arguments);return}this._initItems(b);this._initSection(a)};g.prototype.addItem=function(a,b){"use strict";this._initItem(a,b)};g.prototype._initItems=function(a){"use strict";var c=function(a,b){var d=this._initItem(a,b);a.children&&a.children.forEach(function(a){c(a,d)})}.bind(this);b("createArrayFromMixed")(a).forEach(function(a){c(a,null)})};g.prototype._initItem=function(a,c){"use strict";c=this.items[a.id]=this._constructItem(a,c);(c.equals(this.selected)||a.selected)&&this.setSelected(c);a=c.getLinkNode();a&&this._eventHandlers.push(b("Event").listen(a,"click",function(event){return!this.editing}.bind(this)));return c};g.prototype._initSection=function(a){"use strict";this._sectionEventHandlers[a.id]&&this._sectionEventHandlers[a.id].remove();var c=this.sections[a.id]=this._constructSection(a);this._sectionEventHandlers[a.id]=b("Event").listen(c.node,"click",this.handleSectionClick.bind(this,c));return c};g.prototype._constructItem=function(a,c){"use strict";return new(b("FutureSideNavItem"))(a,c)};g.prototype._constructSection=function(a){"use strict";return new(b("FutureSideNavSection"))(a)};g.prototype.handleSectionClick=function(a,event){"use strict";var b=this._getEventTarget(event,"a");b&&this._handleLinkClick(a,b,event)};g.prototype._getEventTarget=function(event,a){"use strict";var c=event.getTarget();if(c.tagName!==a.toUpperCase())return b("Parent").byTag(c,a);else return c};g.prototype._handleMenuClick=function(a,c,d,e){"use strict";b("CSS").hasClass(d,"rearrange")&&this.beginEdit(a)};g.prototype._handleMenuItemClick=function(a,b,c){"use strict";a==="rearrange"&&this.beginEdit(b)};g.prototype._handleLinkClick=function(a,c,event){"use strict";b("CSS").hasClass(c,"navEditDone")&&(this.editing?this.endEdit():this.beginEdit(a),event.kill())};g.prototype.getItem=function(a){"use strict";if(this._isCurrentPath(a))return this._getItemForKey(this._getKey(a.getQueryData())||this.defaultKey);else return this._getItemForPath(a.getPath())};g.prototype.getNodeForKey=function(a){"use strict";a=this._getItemForKey(a);if(a)return a.node};g.prototype._isCurrentPath=function(a){"use strict";return a.getDomain()===this.uri.getDomain()&&a.getPath()===this.uri.getPath()};g.prototype._getKey=function(a){"use strict";return a[this.keyParam]};g.prototype._getSectionForNode=function(a){"use strict";while(a=a.parentNode)if(a.id&&this.sections[a.id])return this.sections[a.id]};g.prototype._getItemForNode=function(a){"use strict";a=b("Parent").byClass(a,"sideNavItem");return a&&this.items[a.id]};g.prototype._getItemForKey=function(a){"use strict";return this._findItem(function(b){return b.matchKey(a)})};g.prototype._getItemForPath=function(a){"use strict";return this._findItem(function(b){return b.matchPath(a)})};g.prototype._findItem=function(a){"use strict";for(var b in this.items)if(a(this.items[b]))return this.items[b]};g.prototype.removeItem=function(a){"use strict";a&&this.items[a.id]&&(b("DOM").remove(a.node),delete this.items[a.id])};g.prototype.removeItemByKey=function(a){"use strict";this.removeItem(this._getItemForKey(a))};g.prototype.moveItem=function(a,c,d){"use strict";a=b("DOM").find(a.node,"ul.uiSideNav");(d?b("DOM").prependContent:b("DOM").appendContent)(a,c.node)};g.prototype.setLoading=function(a){"use strict";this.loading&&this.loading.hideLoading(),this.loading=a,this.loading&&this.loading.showLoading()};g.prototype.setSelected=function(a){"use strict";this.setLoading(null),this.selected&&(this.selected.hideSelected(),this.selected.getTop().hideChildren()),this.selected=a,this.selected&&(this.selected.showSelected(),this.selected.getTop().showChildren())};g.prototype.handlePageTransition=function(a){"use strict";var b=this.getItem(a);b=b&&b.endpoint&&this._doPageTransition(b,a);return b};g.prototype._doPageTransition=function(a,b){"use strict";this.setLoading(a);this._sendPageTransition(a.endpoint,babelHelpers["extends"]({},this._getTransitionData(a,b),b.getQueryData()));return!0};g.prototype._sendPageTransition=function(a,c){"use strict";c.endpoint=a,b("Arbiter").inform(b("NavigationMessage").NAVIGATION_BEGIN,{useAjaxPipe:this._useAjaxPipe(a),params:c})};g.prototype._getTransitionData=function(a,b){"use strict";var c={};c.sidecol=this.sidecol;c.path=b.getPath();c[this.keyParam]=a.textKey;c.key=a.textKey;return c};g.prototype._useAjaxPipe=function(a){"use strict";return this.ajaxPipe||this.ajaxPipeEndpoints[a]};g.prototype.navigationComplete=function(){"use strict";this.loading&&this.setSelected(this.loading)};g.prototype.navigationFailed=function(){"use strict";this.setLoading(null)};g.prototype.navigationSelect=function(a,b){"use strict";a=this._getItemForKey(this._getKey(b));b.asLoading?this.setLoading(a):this.setSelected(a)};g.prototype.navigationCountUpdate=function(a,b){"use strict";a=this._getItemForKey(b&&b.key);a&&(typeof b.count!=="undefined"?a.setCount(b.count,b.hide):typeof b.increment!=="undefined"&&a.incrementCount(b.increment,b.hide))};g.prototype.navigationCountUpdateFromPresence=function(a,c){"use strict";c=c.obj;if(c&&((!c.class_name||c.class_name&&b("CSS").hasClass(this.root,c.class_name))&&c.items))for(var d=0;d<c.items.length;d++)this.navigationCountUpdate(a,c.items[d])};g.prototype.beginEdit=function(a){"use strict";this.editing||(this.editing=!0,b("CSS").addClass(this.root,"editMode"),this._updateTrackingData(),this._initEditor(a))};g.prototype.endEdit=function(){"use strict";this.editing&&(b("CSS").removeClass(this.root,"editMode"),this.editor&&this.editor.endEdit(),this.editor=null,this.editing=!1,this._updateTrackingData())};g.prototype._updateTrackingData=function(a){"use strict";a=this.root.getAttribute("data-gt")||"{}";try{a=JSON.parse(a),this.editing?a.editing=!0:delete a.editing,this.root.setAttribute("data-gt",JSON.stringify(a))}catch(a){}};g.prototype._initEditor=function(a){"use strict";a.getEditorAsync(function(a){this.editing&&(this.editor=a,this.editor.beginEdit())}.bind(this))};g.getInstance=function(){"use strict";return g.instance||new g()};g.initMenu=function(a,b){"use strict";b.subscribe("itemclick",function(b,c){b=g.getInstance();var d=a.getTriggerElem(),e=b._getSectionForNode(d);d=b._getItemForNode(d);b._handleMenuItemClick(c.item.getValue(),e,d)})};g.initSectionGlobally=function(a,b){"use strict";g.getInstance().initSection(a,b)};g.instance=null;e.exports=g}),null);
__d("TimelineAllActivitySideNav",["csx","$","CSS","DOMQuery","DOM","FutureSideNav","PageTransitions","Scroll","Style","UIPagelet","ge","getOrCreateDOMID","getViewportDimensions"],(function(a,b,c,d,e,f,g){__p&&__p();function h(){var a=b("ge")("rightColContent");a=a&&b("DOMQuery").scry(a,".fbTimelineLogScrubber")[0];a&&b("DOM").remove(a)}a={init:function(a,c,d,e,f){__p&&__p();f=b("DOMQuery").find(b("$")("contentArea"),"._6-0");var g=b("getOrCreateDOMID")(f);b("Style").set(f,"minHeight",b("getViewportDimensions")().height+"px");b("CSS").addClass(a,"fixed_elem");b("PageTransitions").registerHandler(function(a){__p&&__p();var f;if(c===a.getPath()&&a.getQueryData().sk==d){var f=function(){var c=babelHelpers["extends"]({profile_id:e,renderContentsOnly:1,uripath:a.toString()},a.getQueryData()),d=b("FutureSideNav").getInstance(),f=d&&d._getItemForKey(c.log_filter||"all");f&&d.setLoading(f);h();b("UIPagelet").loadFromEndpoint("TimelineAllActivityColumn",g,c,{jsNonblock:!0,constHeight:!0,displayCallback:function(a){a(),f&&d.setSelected(f),b("Scroll").setTop(document.body,0),b("PageTransitions").transitionComplete(!0)}});return{v:!0}}();if(typeof f==="object")return f.v}return!1})}};e.exports=a}),null);
__d("FacebookSettingsPageEvent",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({IMPRESSION:"impression",CLICK:"click"})}),null);
__d("FacebookSettingsPageProduct",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({LEGACY_ACCOUNT_SETTINGS:"legacy_account_settings",SETTINGS_2_0:"settings_2_0",SETTINGS_2_0_MESSENGER_ONLY:"settings_2_0_messenger_only"})}),null);
__d("XNotificationsRoombaReviewController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/settings/notifications/review-updates/",{notif_id:{type:"Int",required:!0},__asyncDialog:{type:"Int"}})}),null);
__d("XPartnersPortalMobileSettingsController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/mobile/settings/",{carrier_id:{type:"Int"},partner_id:{type:"Int"},portal:{type:"Enum",enumType:1},ref:{type:"Enum",enumType:1},current_tab:{type:"String"}})}),null);
__d("SettingsController",["Arbiter","Banzai","Bootloader","CSS","CurrentUser","DOM","DOMQuery","EducationPromotionTriggerInfo","Event","FacebookSettingsPageEvent","FacebookSettingsPageProduct","FacebookSettingsPageTypedLogger","NotifUserSettingActionTypedLogger","PageTransitions","Parent","Style","URI","XEducationPromotionTriggerRecordController","XNotificationsRoombaReviewController","XPartnersPortalMobileSettingsController","ge"],(function(a,b,c,d,e,f){__p&&__p();var g=null,h=null;function i(){return new(b("URI"))(window.location.href).getQueryData().tab||"account"}function j(){return new(b("URI"))(window.location.href).getQueryData().section}function k(){return new(b("URI"))(window.location.href).getQueryData().edit_section}function l(){return new(b("URI"))(window.location.href).getQueryData().managed_notif_id}function m(){return new(b("URI"))(window.location).getQueryData().id}function n(){return new(b("URI"))(window.location).getQueryData().partner_id}function o(a){return new(b("URI"))(a).addQueryData({view:null})}function p(a){return b("Parent").byClass(a,"fbSettingsListItem")}function q(a){return b("Parent").byClass(a,"fbSettingsListLink")}function r(a){return b("Parent").byClass(a,"cancel")}function s(){return new(b("URI"))(window.location).getPath()}function t(){return"/pages/edit/"}function u(){return b("XPartnersPortalMobileSettingsController").getURIBuilder().getURI().toString()}var v={init:function(a,c,d){__p&&__p();this.extra_params=d||{};b("Event").listen(a,"click",function(a){a=a.getTarget();r(a)&&this.closeEditor()}.bind(this));b("PageTransitions").registerHandler(function(a){__p&&__p();var c=a.getQueryData();if(a.getPath()==s()&&c.tab===i()&&c.view!==undefined){b("PageTransitions").transitionComplete();c.section&&(this._currentSection=c.section,b("Arbiter").inform("section_toggle",{action:"expand",section:this._currentSection}));return!0}if(c.tab!=i()||a.getPath()!==s()){this._sectionArbiter&&this._sectionArbiter.unsubscribe();this._sectionArbiter=null;this._masherEventHandler&&this._masherEventHandler.remove();this._masherEventHandler=null;this._selectorEventHandler&&this._selectorEventHandler.remove();this._selectorEventHandler=null;if(!this._banzaiRoute)return!1;if(a.getPath()==="/settings")b("Banzai").post(this._banzaiRoute,{event:"settings_link",exit_point:c.tab+"_settings"});else{c=a.getPath();a.getQueryData().audience_usered&&(c="composer_link");b("Banzai").post(this._banzaiRoute,{event:"exit_settings_page",exit_point:c})}this._banzaiRoute=null}return!1}.bind(this));d=j();if(d){a=c+":"+d;this.scrollToActiveSection(a)}c=k();c&&this.maybeOpenDialogForEditSection(c);d=l();d&&this.openManagedSettingsDialog(d)},openManagedSettingsDialog:function(a){var c=b("XNotificationsRoombaReviewController").getURIBuilder().setInt("notif_id",a).getURI();b("Bootloader").loadModules(["AsyncDialog"],function(a){a.bootstrap(c.toString(),null,"dialog")},"SettingsController")},maybeOpenDialogForEditSection:function(a){a=document.getElementById(a);if(!a)return;a=a.querySelector('a[rel="dialog"]');if(a)try{var event=document.createEvent("MouseEvents");event.initMouseEvent("click",!0,!0);a.dispatchEvent(event)}catch(a){}},scrollToActiveSection:function(a){var b=document.getElementById(a);b?b.scrollIntoView():setTimeout(function(){this.scrollToActiveSection(a)}.bind(this),250)},getQueryString:function(a,b){if(b==null)return null;b=b?b:window.location.href;a=new RegExp("[?&]"+a+"=([^&#]*)","i");a=a.exec(b);return a?a[1]:null},handleLinkClick:function(a){__p&&__p();var c=i(),d=j(),e=this.getQueryString("section",a),f=b("CurrentUser").getID();if(c==="notifications"){c=new(b("NotifUserSettingActionTypedLogger"))().setEventType("settings_page_impression").setSource("web_settings_page").setPrevState(d).setCurState(e).setControllerClass("SettingsController").setWantLess(!1).setRecipID(parseInt(f,10));c.log()}if(g&&g.checkUnsaved())return;h!==a&&(h&&b("CSS").removeClass(h,"async_saving"));h=a;d=a.getAttribute("data-meta");var k=JSON.parse(d);switch(k.rel){case"async":b("Bootloader").loadModules(["AsyncRequest"],function(b){b.bootstrap(k.ajaxify,a)},"SettingsController");break;case"dialog":b("Bootloader").loadModules(["AsyncDialog"],function(b){b.bootstrap(k.ajaxify,a,k.rel)},"SettingsController");break;default:throw new Error('SettingsController.handleLinkClick: Unexpected "rel".')}},updateErrors:function(a,b){g&&(g.hideErrors(),g.showError(a,b))},hideErrors:function(){g&&g.hideErrors()},getEditor:function(){return g},setEditor:function(a){(!a||!h||a.contains(h))&&(this.closeEditor()!==!1&&(h&&b("PageTransitions").go(o(h.href)),h=null,(g=a)&&a.show()))},prepareAndReplaceEditor:function(a){a.prepare(g.container),g=a},prepareAndSetEditor:function(a,b,c){a=p(a);v.setEditor(b.prepare(a,c))},closeEditor:function(){__p&&__p();if(g&&g.hide()!==!1){b("Arbiter").inform("section_toggle",{action:"collapse",section:this._currentSection});if(b("DOM").contains(document.body,g.container)){var a=null,c=s(),d={tab:i()};c==t()?d.id=m():c==u()&&(d.partner_id=n());for(var e in this.extra_params)Object.prototype.hasOwnProperty.call(this.extra_params,e)&&(d[e]=this.extra_params[e]);a=new(b("URI"))(c).setQueryData(d);b("PageTransitions").go(o(a))}g=null}return!g},setPreviewForCurrent:function(a){v.setPreview(g.container,a)},setPreview:function(a,c){a=b("DOM").find(p(a),"span.fbSettingsListItemContent");b("DOM").setContent(a,c)},closeAndAnimateEdited:function(){var a=g.container;v.closeEditor();v.animateEditedListItem(a)},animateEdited:function(a){v.animateEditedListItem(p(a))},animateEditedListItem:function(a){b("Bootloader").loadModules(["Animation"],function(c){var d=b("DOM").find(a,"span.fbSettingsListItemEdit"),e=b("DOM").find(a,"span.fbSettingsListItemSaved");b("CSS").hide(d);b("CSS").show(e);b("Style").set(d,"opacity",0);new c(q(d)).from("background","#fff8bb").to("background","#fff").duration(1e3).ease(c.ease.begin).ondone(function(){b("CSS").removeClass(a,"fbSettingsListItemEdited"),b("Style").set(this.obj,"background",""),new c(e).to("color","#fff").duration(500).ease(c.ease.begin).ondone(function(){b("CSS").hide(e),b("Style").set(e,"color",""),b("CSS").show(d),new c(d).to("opacity",1).duration(500).ease(c.ease.begin).go()}).go()}).go()},"SettingsController")},registerSectionLogging:function(a){this._banzaiRoute=a,this._sectionArbiter=b("Arbiter").subscribe("section_toggle",function(c,d){b("Banzai").post(a,{event:d.section+"_"+d.action})})},logClickFacebookSettingsPage:function(a,c){new(b("FacebookSettingsPageTypedLogger"))().setEvent(b("FacebookSettingsPageEvent").CLICK).setProduct(a).setProductElement(c).log()},registerSelectorLogging:function(a,c,d,e,f){a=a.getInstance(),a.subscribe("open",function(){b("Banzai").post(f,{event:c})}),a.subscribe("close",function(){b("Banzai").post(f,{event:d})}),a.subscribe("changed",function(){b("Banzai").post(f,{event:e}),e==="canpost_change"&&b("Bootloader").loadModules(["AsyncRequest"],function(a){new a().setURI(b("XEducationPromotionTriggerRecordController").getURIBuilder().getURI()).setMethod("POST").setData({timestamps:[b("EducationPromotionTriggerInfo").LAST_UPDATE_TIMELINE_AND_TAGGING_SETTINGS_TIMESTAMP]}).send()},"SettingsController")})},registerNonAdamaSelectorLogging:function(a,c,d,e,f){this._selectorValue=f,this._selectorEventHandler=b("Event").listen(e,"click",function(){b("DOMQuery").scry(e,".openToggler").length===0?b("Banzai").post(a,{event:c}):b("Banzai").post(a,{event:d})})},setComposerNUXText:function(a,c){a=b("ge")(a);a&&b("DOM").setContent(a,c)},registerNonAdamaSelectorChange:function(a,event,c){c!=this._selectorValue&&(this._selectorValue=c,b("Banzai").post(a,{event:event}))},registerMasherLogging:function(a,event){this._masherEventHandler=b("Event").listen(a,"click",function(){b("Banzai").post("privacy_settings",{event:event})})}};e.exports=v}),null);
__d("XSettingsExitSurveyController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/settings/exit_survey/",{current_tab:{type:"String",required:!0}})}),null);
__d("SettingsExitSurvey",["AsyncRequest","Run","XSettingsExitSurveyController"],(function(a,b,c,d,e,f){a={launchOnExit:function(a){var c=b("XSettingsExitSurveyController").getURIBuilder().setString("current_tab",a).getURI();b("Run").onLeave(function(){return new(b("AsyncRequest"))().setURI(c).setAllowCrossPageTransition(!0).send()})}};e.exports=a}),null);
__d("SelectorSubmitOnChange",["Parent","submitForm"],(function(a,b,c,d,e,f){__p&&__p();function a(a){"use strict";this._selector=a}a.prototype.enable=function(){"use strict";this._subscription=this._selector.subscribe("change",this._onChange.bind(this))};a.prototype.disable=function(){"use strict";this._subscription.unsubscribe(),this._subscription=null};a.prototype._onChange=function(){"use strict";var a=b("Parent").byTag(this._selector.getButton(),"form");a&&b("submitForm")(a)};Object.assign(a.prototype,{_subscription:null});e.exports=a}),null);
__d("legacy:ui-side-nav-future-js",["FutureSideNav"],(function(a,b,c,d,e,f){a.FutureSideNav=b("FutureSideNav")}),3);