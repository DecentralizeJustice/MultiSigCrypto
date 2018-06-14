if (self.CavalryLogger) { CavalryLogger.start_js(["AQ3PU"]); }

__d("AbstractCommentLiveTypingPublisher",["destroyOnUnload"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=10*1e3,h=10*1e3,i=200;function a(){this.$1=null,this.$2=null,this.$3=-1,b("destroyOnUnload")(this.destroy.bind(this)),window.addEventListener&&window.addEventListener("unload",function(){this.destroy()}.bind(this))}a.prototype.destroy=function(){this.$4(),this.$5(),this.$6()};a.prototype.handleStartEvent=function(){this.$7()||this.$8(),this.$9()};a.prototype.handleStopEvent=function(){this.$4()};a.prototype.publishStartEvent=function(){throw new Error("publishStartEvent should be overridden by subclass")};a.prototype.publishStopEvent=function(){throw new Error("publishStopEvent should be overridden by subclass")};a.prototype.$7=function(){return!!this.$1};a.prototype.$5=function(){this.$2&&(clearTimeout(this.$2),this.$2=null)};a.prototype.$6=function(){this.$1&&(clearTimeout(this.$1),this.$1=null)};a.prototype.$9=function(){var a=Date.now(),b=this.$3;a>b+i&&(this.$3=a,this.$5(),this.$2=setTimeout(function(){this.$4()}.bind(this),h))};a.prototype.$4=function(){this.$7()&&(this.publishStopEvent(),this.$6()),this.$5()};a.prototype.$8=function(){this.publishStartEvent(),this.$6(),this.$1=setTimeout(function(){this.$8()}.bind(this),g)};e.exports=a}),null);
__d("XUFITypingIndicatorController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/ufi/typing/{feedback_id}/{update}/",{feedback_id:{type:"String",required:!0},parent_comment_id:{type:"String"},update:{type:"Enum",required:!0,enumType:1},session_id:{type:"String"}})}),null);
__d("AbstractCommentLiveTypingXHRPublisher",["AbstractCommentLiveTypingPublisher","ActorURI","ChannelClientID","XUFITypingIndicatorController"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;function h(a,b,c){this.$1=a,this.$2=b,this.$3=c}h.prototype.$4=function(){var a=b("XUFITypingIndicatorController").getURIBuilder().setString("session_id",b("ChannelClientID").getID()).setString("feedback_id",""+this.$1);this.$2&&a.setString("parent_comment_id",""+this.$2);return a};h.prototype.$5=function(a){a=a.getURI();this.$3&&(a=b("ActorURI").create(a,String(this.$3)));return a};h.prototype.buildStartURI=function(){return this.$5(this.$4().setEnum("update","start"))};h.prototype.buildStopURI=function(){return this.$5(this.$4().setEnum("update","stop"))};c=babelHelpers.inherits(a,b("AbstractCommentLiveTypingPublisher"));g=c&&c.prototype;function a(a,b,c){g.constructor.call(this),this.$AbstractCommentLiveTypingXHRPublisher1=new h(a,b,c)}a.prototype.getStartURI=function(){return this.$AbstractCommentLiveTypingXHRPublisher1.buildStartURI()};a.prototype.getStopURI=function(){return this.$AbstractCommentLiveTypingXHRPublisher1.buildStopURI()};e.exports=a}),null);
__d("UFIAddCommentLiveTypingPublisher",["AbstractCommentLiveTypingXHRPublisher","AsyncRequest"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;c=babelHelpers.inherits(a,b("AbstractCommentLiveTypingXHRPublisher"));g=c&&c.prototype;function a(a,b,c){g.constructor.call(this,a,b,c),this.$UFIAddCommentLiveTypingPublisher1=null,this.$UFIAddCommentLiveTypingPublisher2=null}a.prototype.handleStartEvent=function(){g.handleStartEvent.call(this)};a.prototype.handleStopEvent=function(){g.handleStopEvent.call(this)};a.prototype.publishStartEvent=function(){if(this.$UFIAddCommentLiveTypingPublisher1)return;this.$UFIAddCommentLiveTypingPublisher2&&(this.$UFIAddCommentLiveTypingPublisher2.abort(),this.$UFIAddCommentLiveTypingPublisher2=null);var a=this.getStartURI();this.$UFIAddCommentLiveTypingPublisher1=new(b("AsyncRequest"))().setURI(a).setMethod("POST").setFinallyHandler(function(){this.$UFIAddCommentLiveTypingPublisher1=null}.bind(this));this.$UFIAddCommentLiveTypingPublisher1.send()};a.prototype.publishStopEvent=function(){if(this.$UFIAddCommentLiveTypingPublisher2)return;this.$UFIAddCommentLiveTypingPublisher1&&(this.$UFIAddCommentLiveTypingPublisher1.abort(),this.$UFIAddCommentLiveTypingPublisher1=null);var a=this.getStopURI();this.$UFIAddCommentLiveTypingPublisher2=new(b("AsyncRequest"))().setURI(a).setMethod("POST").setFinallyHandler(function(){this.$UFIAddCommentLiveTypingPublisher2=null}.bind(this));this.$UFIAddCommentLiveTypingPublisher2.send()};e.exports=a}),null);