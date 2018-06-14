if (self.CavalryLogger) { CavalryLogger.start_js(["nEwyG"]); }

__d("SphericalPhotoManagerLoader",["SphericalPhotoManager"],(function(a,b,c,d,e,f){"use strict";e.exports=b("SphericalPhotoManager").module}),null);
__d("VideoWatchAndScrollControl.react",["ix","cx","fbt","AbstractButton.react","CurrentUser","Image.react","Locale","React","ReactDOM","TooltipData","VideoWebDriverIDs","VideoPlayerExperiments","XUIAmbientNUX.react","asset","shallowCompare"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j;c=b("React").PropTypes;d=babelHelpers.inherits(a,b("React").Component);j=d&&d.prototype;function a(){var a,b;for(var c=arguments.length,d=Array(c),e=0;e<c;e++)d[e]=arguments[e];return b=(a=j.constructor).call.apply(a,[this].concat(d)),this.$1=function(){typeof this.props.onWNSNUXClose==="function"&&this.props.onWNSNUXClose()}.bind(this),b}a.prototype.shouldComponentUpdate=function(a,c){return b("shallowCompare")(this,a,c)};a.prototype.onMouseOut=function(a){b("ReactDOM").findDOMNode(this.refs.button).blur()};a.prototype.onButtonClick=function(){this.props.showWNSNUX&&this.$1(),this.props.onEnterWatchAndScroll&&this.props.onEnterWatchAndScroll()};a.prototype.getIconSrc=function(){var a=b("VideoPlayerExperiments").rhcWNSEnabled,c=b("Locale").isRTL();if(a&&!c||!a&&c){a=b("VideoPlayerExperiments").pipEntryIcon;if(a)return a;return this.props.isSlidingWNSEligible?g("463043"):g("426217")}return this.props.isSlidingWNSEligible?g("463039"):g("463040")};a.prototype.render=function(){var a=b("React").createElement(b("Image.react"),{className:"_rwt",src:this.getIconSrc()}),c=b("CurrentUser").isWorkUser()?i._("Continue watching while you use Workplace"):i._("Continue watching while you use Facebook");c=b("React").createElement(b("AbstractButton.react"),babelHelpers["extends"]({},b("TooltipData").propsFor(c,"above"),{className:"_zbd"+(b("VideoPlayerExperiments").rhcWNS&&b("VideoPlayerExperiments").responsiveRHC?" _4xu4":""),"data-testid":b("VideoWebDriverIDs").WNS_CONTROL,disabled:this.props.disabled,image:a,label:i._("Enter Watch And Scroll"),labelIsHidden:!0,onClick:this.onButtonClick.bind(this),onMouseOut:this.onMouseOut.bind(this),ref:"button",tabIndex:this.props.tabIndex,type:"button"}));a=i._("Video not playing?");var d=i._("Click to load the video while you continue using Facebook");a=b("React").createElement(b("XUIAmbientNUX.react"),{alignment:"right",contextRef:function(){return this.refs.button}.bind(this),customwidth:250,onCloseButtonClick:this.$1,shown:this.props.showWNSNUX,position:"above",width:"custom"},b("React").createElement("div",{className:"_302j"},a),d);return b("React").createElement("span",null,c,a)};a.propTypes={onEnterWatchAndScroll:c.func,tabIndex:c.string};e.exports=a}),null);