(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{"60+p":function(s,t,e){"use strict";var i=e("Lb+3"),a=e.n(i);a.a},"Lb+3":function(s,t,e){},h0SI:function(s,t,e){"use strict";e.r(t);var i=function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"animated fadeIn kickstarter-bg"},[e("section",{staticClass:"hero is-large"},[e("div",{staticClass:"hero-body"},[e("div",{staticClass:"container has-padding-2x"},[e("div",{staticClass:"column is-12"},[e("div",{staticClass:"has-text-centered"},[e("countdown",{attrs:{time:s.countdownDate},scopedSlots:s._u([{key:"default",fn:function(t){return[e("div",{staticClass:"columns is-gapless"},[e("div",{staticClass:"column",on:{mouseover:function(t){s.isActive=!0}}},[e("strong",{staticClass:"is-size-0 is-size-1-mobile has-text-primary",class:[{"is-rainbow-text":s.isActive}]},[s._v(s._s(t.days))]),e("p",{staticClass:"is-size-2"},[s._v(" "+s._s(s.$tc("count_down.days",t.days))+" ")])]),s._v(" "),e("div",{staticClass:"column",on:{mouseover:function(t){s.isActive2=!0}}},[e("strong",{staticClass:"is-size-0 is-size-1-mobile has-text-primary",class:[{"is-rainbow-text":s.isActive2}]},[s._v(s._s(t.hours))]),e("p",{staticClass:"is-size-2"},[s._v(" "+s._s(s.$tc("count_down.hours",t.hours))+" ")])]),s._v(" "),e("div",{staticClass:"column",on:{mouseover:function(t){s.isActive3=!0}}},[e("strong",{staticClass:"is-size-0 is-size-1-mobile has-text-primary",class:[{"is-rainbow-text":s.isActive3}]},[s._v(s._s(t.minutes))]),e("p",{staticClass:"is-size-2"},[s._v(" "+s._s(s.$tc("count_down.minutes",t.minutes))+" ")])]),s._v(" "),e("div",{staticClass:"column",on:{mouseover:function(t){s.isActive4=!0}}},[e("strong",{staticClass:"is-size-0 is-size-1-mobile has-text-primary",class:[{"is-rainbow-text":s.isActive4}]},[s._v(s._s(t.seconds))]),e("p",{staticClass:"is-size-2"},[s._v(" "+s._s(s.$tc("count_down.seconds",t.seconds))+" ")])])])]}}])})],1)]),s._v(" "),e("div",{staticClass:"column is-12"},[e("div",{staticClass:"columns is-centered is-mobile"},[e("div",{staticClass:"column container-small"},[e("div",{staticClass:"content has-text-centered"},[e("p",{staticClass:"is-size-4 is-marginless padding-bottom-1x",domProps:{innerHTML:s._s(s.$t("count_down.kickstarter_launch",[s.localTime,s.localDate]))}}),s._v(" "),e("div",[e("a",{staticClass:"animated button rubberBand is-rounded is-large padding-top-2x",attrs:{target:"_blank",rel:"noopener noreferrer",href:"http://eepurl.com/dDZIpf"}},[s._m(0),e("span",[s._v(s._s(s.$t("splash_hero.notify_me")))])]),s._v(" "),e("button",{staticClass:"button animated rubberBand is-large is-rounded padding-top-2x share-button",on:{click:function(t){s.onUserWantsToShare()}}},[s._m(1),s._v(" "),e("span",[s._v("\n                                        "+s._s(s.$t("hud.share"))+"\n                                    ")])])])])])])])])])])])},a=[function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("span",{staticClass:"icon"},[e("i",{staticClass:"fab fa-kickstarter-k"})])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("span",{staticClass:"icon"},[e("i",{staticClass:"fas fa-share-alt"})])}],n=e("MMEz"),o=e("ZNl5"),c={components:{countdown:n["a"]},name:"ob-kickstarter",methods:{onUserWantsToShare:function(){this.openShareModal()},openShareModal:function(){this.$modal.open({parent:this,component:o["a"]})}},data:function(){var s=new Date,t=new Date(s.valueOf()+60*s.getTimezoneOffset()*1e3),e=new Date(t.valueOf()+72e5),i=new Date(2018,7,19,19,0,0,0),a=i-e,n=new Date(i.valueOf()-72e5),o=new Date(n.valueOf()-60*s.getTimezoneOffset()*1e3),c=o.getDate(),r=o.getMinutes()>0?o.getMinutes():"00",l=o.getHours()>9?o.getHours():"0".concat(o.getHours()),u="".concat(l,":").concat(r);return{countdownDate:a,localTime:u,localDate:c,isActive:!1,isActive2:!1,isActive3:!1,isActive4:!1}}},r=c,l=(e("60+p"),e("KHd+")),u=Object(l["a"])(r,i,a,!1,null,null,null);t["default"]=u.exports}}]);
//# sourceMappingURL=7.51a18161.js.map