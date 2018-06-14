if (self.CavalryLogger) { CavalryLogger.start_js(["xZHUS"]); }

__d("AudienceSuggestionPurpose",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({MENTION:"mention",MESSAGE:"message",SHARE:"share"})}),null);
__d("CommunityConversationsEvent",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({COMMENT_BUBBLE_STORY_RENDERED:"comment_bubble_story_rendered",FRIENDS_TO_MSG_FETCH_REQ_SENT:"friends_to_msg_fetch_req_sent",FRIENDS_TO_MSG_CLOSED:"friends_to_msg_closed",FRIENDS_TO_MSG_HSCROLL_DISPLAYED:"friends_to_msg_hscroll_displayed",FRIENDS_TO_MSG_PILL_DISPLAYED:"friends_to_msg_pill_displayed",FRIENDS_TO_MSG_PILL_TAPPED:"friends_to_msg_pill_tapped",INSTANT_GROUP_SHARE:"instant_group_share",INSTANT_GROUP_SHARE_FETCH_SUGGESTED_GROUP:"instant_group_share_fetch_suggeted_group",MENTION_PIVOT_RENDERED:"mention_pivot_rendered",MENTION_PIVOT_LOADING_SHOWN:"mention_pivot_loading_shown",MENTION_PIVOT_SUGGESTIONS_SHOWN:"mention_pivot_suggestions_shown",MENTION_PIVOT_MORE_SUGGESTIONS_LOADED:"mention_pivot_more_suggestions_loaded",MENTION_PIVOT_MENTION_ADDED:"mention_pivot_mention_added",MENTION_PIVOT_DISMISSED:"mention_pivot_dismissed",MENTION_PIVOT_DISMISSED_VIA_COMMENT:"mention_pivot_dismissed_via_comment",MENTION_PIVOT_RANKING_REQUESTED:"mention_pivot_ranking_requested",MENTION_PIVOT_RANKING_SUGGESTED:"mention_pivot_ranking_suggested",MENTION_PIVOT_RANKING_FINISHED:"mention_pivot_ranking_finished",RESHARE_CONFIRMATION_DISPLAYED:"reshare_confirmation_displayed",RESHARE_CONFIRMATION_DISMISSED:"reshare_confirmation_dismissed",RESHARE_CONFIRMATION_PERMALINK_BACK_CLICKED:"reshare_confirmation_permalink_back_clicked",RESHARE_CONFIRMATION_VIEW_POST_CLICKED:"reshare_confirmation_view_post_clicked",STORY_VIEWED:"story_viewed",STORY_COMMENTED_ON:"story_commented_on",STORY_LIKED:"story_liked",STORY_SHARE_INITIATED:"story_share_initiated"})}),null);
__d("CommunityConversationsTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(){this.clear()}a.prototype.log=function(){b("GeneratedLoggerUtils").log("logger:CommunityConversationsLoggerConfig",this.$1,b("Banzai").BASIC)};a.prototype.logVital=function(){b("GeneratedLoggerUtils").log("logger:CommunityConversationsLoggerConfig",this.$1,b("Banzai").VITAL)};a.prototype.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:CommunityConversationsLoggerConfig",this.$1,{signal:!0})};a.prototype.clear=function(){this.$1={};return this};a.prototype.getData=function(){return babelHelpers["extends"]({},this.$1)};a.prototype.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.setAttachedStoryID=function(a){this.$1.attached_story_id=a;return this};a.prototype.setCallerID=function(a){this.$1.caller_id=a;return this};a.prototype.setErrorMessage=function(a){this.$1.error_message=a;return this};a.prototype.setEvent=function(a){this.$1.event=a;return this};a.prototype.setFeedbackID=function(a){this.$1.feedback_id=a;return this};a.prototype.setFriendsToMsgPillIndex=function(a){this.$1.friends_to_msg_pill_index=a;return this};a.prototype.setFtID=function(a){this.$1.ft_id=a;return this};a.prototype.setInstantGroupShareFetchSuggetedGroupContext=function(a){this.$1.instant_group_share_fetch_suggeted_group_context=a;return this};a.prototype.setInstantGroupType=function(a){this.$1.instant_group_type=a;return this};a.prototype.setMentionIndex=function(a){this.$1.mention_index=a;return this};a.prototype.setMentionSuggestionRanker=function(a){this.$1.mention_suggestion_ranker=a;return this};a.prototype.setMentionSuggestions=function(a){this.$1.mention_suggestions=b("GeneratedLoggerUtils").serializeVector(a);return this};a.prototype.setName=function(a){this.$1.name=a;return this};a.prototype.setNewStoryID=function(a){this.$1.new_story_id=a;return this};a.prototype.setNumFriendsByPrimaryMethod=function(a){this.$1.num_friends_by_primary_method=a;return this};a.prototype.setNumFriendsWithUcp=function(a){this.$1.num_friends_with_ucp=a;return this};a.prototype.setNumTopicsInPost=function(a){this.$1.num_topics_in_post=a;return this};a.prototype.setRankingLatencyUs=function(a){this.$1.ranking_latency_us=a;return this};a.prototype.setReshareConfirmationContext=function(a){this.$1.reshare_confirmation_context=a;return this};a.prototype.setStoryID=function(a){this.$1.story_id=a;return this};a.prototype.setStoryInteractionType=function(a){this.$1.story_interaction_type=a;return this};a.prototype.setSuggestionPurpose=function(a){this.$1.suggestion_purpose=a;return this};a.prototype.setVC=function(a){this.$1.vc=a;return this};c={attached_story_id:!0,caller_id:!0,error_message:!0,event:!0,feedback_id:!0,friends_to_msg_pill_index:!0,ft_id:!0,instant_group_share_fetch_suggeted_group_context:!0,instant_group_type:!0,mention_index:!0,mention_suggestion_ranker:!0,mention_suggestions:!0,name:!0,new_story_id:!0,num_friends_by_primary_method:!0,num_friends_with_ucp:!0,num_topics_in_post:!0,ranking_latency_us:!0,reshare_confirmation_context:!0,story_id:!0,story_interaction_type:!0,suggestion_purpose:!0,vc:!0};e.exports=a}),null);
__d("UFIAddMentionsPill.react",["cx","Image.react","Link.react","React","SearchableEntry"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h;h=babelHelpers.inherits(a,b("React").Component);h&&h.prototype;a.prototype.render=function(){var a=this.props.entry.getPhoto()?b("React").createElement(b("Image.react"),{className:"_3dnm",src:this.props.entry.getPhoto()}):null,c=this.props.entry.getTitle(),d=this.props.entry.getSubtitle();return b("React").createElement(b("Link.react"),{key:this.props.entry.getUniqueID(),className:"_3dnn"+(a?"":" _3dno"),href:"#","data-hover":"tooltip","aria-label":d,"data-tooltip-content":d,onClick:function(event){event.preventDefault(),event.stopPropagation(),this.props.onClick(this.props.entry)}.bind(this)},a,b("React").createElement("div",{className:"_3dnr"},"@",c))};function a(){h.apply(this,arguments)}e.exports=a}),null);
__d("XStoryFriendSuggestionController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/story/suggest_story_friend/",{caller_id:{type:"String",required:!0},purpose:{type:"Enum",required:!0,enumType:1},ft_id:{type:"FBID"},cursor:{type:"String"},typeahead:{type:"String"}})}),null);
__d("UFIAddMentionsCap.react",["ix","cx","fbt","Arbiter","AsyncRequest","AsyncResponse","AudienceSuggestionPurpose","CommunityConversationsEvent","CommunityConversationsTypedLogger","Image.react","React","SearchableEntry","ShimButton.react","SubscriptionsHandler","UFIAddMentionsPill.react","UFIUIEvents","XStoryFriendSuggestionController","XUICarousel.react","XUICarouselAnimator","XUICarouselArrow.react","XUICarouselItem.react","XUISpinner.react","asset"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j;c=babelHelpers.inherits(a,b("React").Component);j=c&&c.prototype;function a(){__p&&__p();var a,c;for(var d=arguments.length,e=Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=j.constructor).call.apply(a,[this].concat(e)),this.$2=new Set(),this.state={cursor:undefined,hidden:!1,suggestions:[],maskedSuggestions:new Set(),hasMoreData:!0,requestInFlight:!1},this.$5=function(a){var c=a.payload;c=c||{};a=c.results||[];var d=a.map(function(a){return new(b("SearchableEntry"))({uniqueID:a.id,title:a.shortName,subtitle:a.name,photo:a.photo,type:"user"})});this.setState(function(a){return{requestInFlight:!1,cursor:c.cursor,suggestions:a.suggestions.concat(d),hasMoreData:!!c.cursor}})}.bind(this),this.$6=function(a){this.setState({requestInFlight:!1})}.bind(this),c}a.prototype.$3=function(event,a){if(event!==b("CommunityConversationsEvent").MENTION_PIVOT_MENTION_ADDED){if(this.$2.has(event))return;this.$2.add(event)}var c=new(b("CommunityConversationsTypedLogger"))().setEvent(event).setFeedbackID(this.props.contextArgs.ftentidentifier).setMentionSuggestions(this.state.suggestions.map(function(a){return a.getUniqueID()})).setCallerID(this.props.callerID);a!==undefined&&c.setMentionIndex(a);c.log()};a.prototype.$4=function(){if(this.state.requestInFlight)return;if(!this.state.hasMoreData)return;this.setState({requestInFlight:!0});this.state.suggestions.length>0&&this.$3(b("CommunityConversationsEvent").MENTION_PIVOT_MORE_SUGGESTIONS_LOADED);var a=b("XStoryFriendSuggestionController").getURIBuilder().setString("caller_id",this.props.callerID).setFBID("ft_id",this.props.contextArgs.ftentidentifier).setEnum("purpose",b("AudienceSuggestionPurpose").MENTION).setString("cursor",this.state.cursor).getURI();new(b("AsyncRequest"))().setURI(a).setMethod("POST").setHandler(this.$5).setErrorHandler(this.$6).send()};a.prototype.UNSAFE_componentWillMount=function(){__p&&__p();var a=this;this.$1=new(b("SubscriptionsHandler"))();this.$3(b("CommunityConversationsEvent").MENTION_PIVOT_RENDERED);this.props.isComposerFocused?this.$4():(function(){var c=b("Arbiter").subscribe("UFIAddComment/focus",function(a,b){if(!b||!b.isTopLevelComposer||b.ftentidentifier!=this.props.contextArgs.ftentidentifier||b.instanceid!=this.props.contextArgs.instanceid)return;this.$4();c.unsubscribe()}.bind(a));a.$1.addSubscriptions(c)})();this.$1.addSubscriptions(b("Arbiter").subscribe(b("UFIUIEvents").Comment,function(a,c){a=c.ft_id;c.target;if(a!==this.props.contextArgs.ftentidentifier)return;this.$3(b("CommunityConversationsEvent").MENTION_PIVOT_DISMISSED_VIA_COMMENT);this.setState({hidden:!0})}.bind(this)))};a.prototype.componentWillUnmount=function(){this.$1&&this.$1.release()};a.prototype.$7=function(a,c){this.props.onAddMention&&this.props.onAddMention(c),this.$3(b("CommunityConversationsEvent").MENTION_PIVOT_MENTION_ADDED,a),this.setState(function(a){a=new Set(a.maskedSuggestions);a.add(c.getUniqueID());return{maskedSuggestions:a}}),this.$8()};a.prototype.$8=function(){var a=this.state.suggestions.filter(function(a){return!this.state.maskedSuggestions.has(a.getUniqueID())}.bind(this)).length;this.refs.carousel.state.index>=a-8&&this.$4()};a.prototype.render=function(){__p&&__p();if(this.state.hidden)return null;var a=void 0;if(this.state.suggestions.length>0){this.$3(b("CommunityConversationsEvent").MENTION_PIVOT_SUGGESTIONS_SHOWN);var c=this.state.suggestions.map(function(a,c){return this.state.maskedSuggestions.has(a.getUniqueID())?null:b("React").createElement(b("XUICarouselItem.react"),{key:"mention_"+a.getUniqueID()},b("React").createElement(b("UFIAddMentionsPill.react"),{entry:a,onClick:this.$7.bind(this,c)}))}.bind(this));c=c.filter(function(a){return a!==null});this.state.hasMoreData&&c.push(b("React").createElement(b("XUICarouselItem.react"),{key:"loading_item"},b("React").createElement("div",{className:"_3hnb"},b("React").createElement(b("XUISpinner.react"),{size:"large"}))));var d=b("React").createElement(b("XUICarouselArrow.react"),{className:"_1nt8"},b("React").createElement(b("Image.react"),{alt:i._("Prev"),src:g("460831")})),e=b("React").createElement(b("XUICarouselArrow.react"),{className:"_1nt8",onClick:function(){this.$8(),this.refs.carousel.next()}.bind(this)},b("React").createElement(b("Image.react"),{alt:i._("Next"),src:g("460838")}));a=b("React").createElement(b("XUICarousel.react"),{animator:new(b("XUICarouselAnimator"))({type:"horizontal",centered:!1}),className:"_3hnz",arrows:[d,e],initialindex:1,initialAutoplay:!1,moveStep:3,wrapAround:!1,ref:"carousel",resizeViewport:"disabled",renderArrowsOutsideViewport:!0},c)}else this.state.requestInFlight&&(this.$3(b("CommunityConversationsEvent").MENTION_PIVOT_LOADING_SHOWN),a=b("React").createElement("div",{className:"_3hn-"},b("React").createElement(b("XUISpinner.react"),{size:"large"})));d=i._("Choose friends to tag");this.props&&this.props.contextArgs&&this.props.contextArgs.communityConversationsParams&&this.props.contextArgs.communityConversationsParams.headerText&&(d=this.props.contextArgs.communityConversationsParams.headerText);if(a)return b("React").createElement("div",{className:"_3hn_"+(this.props.position==="above"?" _255y":"")+(this.props.position==="below"?" _255z":"")},b("React").createElement("div",{className:"_3ho0"},b("React").createElement("div",{className:"_3ho1"},d),b("React").createElement(b("ShimButton.react"),{onClick:function(){this.setState({hidden:!0}),this.$3(b("CommunityConversationsEvent").MENTION_PIVOT_DISMISSED)}.bind(this),className:"_3ho2"},b("React").createElement(b("Image.react"),{src:g("404728")})),a));else return null};e.exports=a}),null);