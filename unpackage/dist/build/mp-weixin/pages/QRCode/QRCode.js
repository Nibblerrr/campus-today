(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/QRCode/QRCode"],{3733:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{leave:null,currDate:"",index:0,leaves:null,oneHeight:0,twoHeight:0,threeHeight:0}},onLoad:function(){var t=this;this.refreshCurrDate(),this.leave=e.getStorageSync("currLeaves"),this.index=e.getStorageSync("currIndex"),setInterval((function(){t.refreshCurrDate()}),1e3)},onBackPress:function(e){return"navigateBack"!==e.from&&(this.onreturn(),!0)},methods:{onreturn:function(){e.redirectTo({url:"../index/index"})},viewLeaves:function(){e.navigateTo({url:"../viewLeaves/viewLeaves",animationType:"none"})},index1:function(){e.navigateTo({url:"../index/index",animationType:"none"})},refreshCurrDate:function(){var e=new Date;this.currDate=e.getFullYear()+"-"+(Number(e.getMonth()+1).toString().length<=1?"0"+Number(e.getMonth()+1):Number(e.getMonth()+1))+"-"+(e.getDate().toString().length<=1?"0"+e.getDate():e.getDate())+" "+(e.getHours().toString().length<=1?"0"+e.getHours():e.getHours())+":"+(e.getMinutes().toString().length<=1?"0"+e.getMinutes():e.getMinutes())+":"+(e.getSeconds().toString().length<=1?"0"+e.getSeconds():e.getSeconds())},backPage:function(){e.navigateBack({delta:1})},clear:function(){var t=this;e.showModal({title:"提示",content:"确定要销假吗？",success:function(n){if(n.confirm){var i=new Date;t.leaves=e.getStorageSync("todaySchoolLeaves").reverse(),t.leave.state="已完成",t.leave["clearDate"]=(Number(i.getMonth()+1).toString().length<=1?"0"+Number(i.getMonth()+1):Number(i.getMonth()+1))+"-"+(i.getDate().toString().length<=1?"0"+i.getDate():i.getDate())+" "+(i.getHours().toString().length<=1?"0"+i.getHours():i.getHours())+":"+(i.getMinutes().toString().length<=1?"0"+i.getMinutes():i.getMinutes()),t.leaves[t.index]=t.leave,e.setStorageSync("todaySchoolLeaves",t.leaves.reverse()),e.navigateBack({delta:1})}}})},getCheckStateBorderHeight:function(){var t=this,n=e.createSelectorQuery().in(this);n.select(".main-content-checkState-state-checkOne").boundingClientRect((function(e){t.oneHeight=null==e?0:e.height})).exec(),n.select(".main-content-checkState-state-checkTwo").boundingClientRect((function(e){t.twoHeight=null==e?0:e.height})).exec(),n.select(".main-content-checkState-state-checkThree").boundingClientRect((function(e){t.threeHeight=null==e?0:e.height})).exec();var i=0;return this.oneHeight>75&&i++,this.twoHeight>75&&i++,this.threeHeight>75&&i++,"已完成"==this.leave.state?""!=this.leave.threeCheck?3==i?"height:330px":2==i?"height:310px":1==i?"height:290px":"height:270px":""!=this.leave.twoCheck?2==i?"height:220px":1==i?"height:210px":"height:175px":1==i?"height:140px":"height:100px":"正在休假中"==this.leave.state?""!=this.leave.threeCheck?3==i?"height:240px":2==i&&this.threeHeight<75?"height:230px":2==i&&this.threeHeight>75?"height:220px":1==i&&this.threeHeight<75?"height:210px":"height:190px":""!=this.leave.twoCheck?2==i||1==i&&this.twoHeight<75?"height:125px":(1==i&&this.twoHeight,"height:105px"):"height:40px":void 0},getTopStateBackground:function(){return"已完成"==this.leave.state?"background-image: linear-gradient(#657181, #9EA8B4);":"正在休假中"==this.leave.state?"background-image: linear-gradient(#08A45A, #00DE72);":void 0},leaveDateStyle:function(){if(this.index%2!=0)return"color:#F59A12;"},imgFileClick:function(){e.previewImage({urls:[this.leave.imgFile]})}}};t.default=n}).call(this,n("543d")["default"])},"396f":function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return i}));var i,a=function(){},r=[]},"443d":function(e,t,n){"use strict";n.r(t);var i=n("396f"),a=n("da3f");for(var r in a)"default"!==r&&function(e){n.d(t,e,(function(){return a[e]}))}(r);n("555e");var o,h=n("f0c5"),c=Object(h["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],o);t["default"]=c.exports},"555e":function(e,t,n){"use strict";var i=n("cd1e"),a=n.n(i);a.a},"6d58":function(e,t,n){"use strict";(function(e){n("82d7");i(n("66fd"));var t=i(n("443d"));function i(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},cd1e:function(e,t,n){},da3f:function(e,t,n){"use strict";n.r(t);var i=n("3733"),a=n.n(i);for(var r in i)"default"!==r&&function(e){n.d(t,e,(function(){return i[e]}))}(r);t["default"]=a.a}},[["6d58","common/runtime","common/vendor"]]]);