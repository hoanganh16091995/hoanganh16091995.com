(function(e){function t(t){for(var i,s,n=t[0],l=t[1],d=t[2],p=0,u=[];p<n.length;p++)s=n[p],o[s]&&u.push(o[s][0]),o[s]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);c&&c(t);while(u.length)u.shift()();return r.push.apply(r,d||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],i=!0,n=1;n<a.length;n++){var l=a[n];0!==o[l]&&(i=!1)}i&&(r.splice(t--,1),e=s(s.s=a[0]))}return e}var i={},o={app:0},r=[];function s(t){if(i[t])return i[t].exports;var a=i[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=i,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(a,i,function(t){return e[t]}.bind(null,i));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],l=n.push.bind(n);n.push=t,n=n.slice();for(var d=0;d<n.length;d++)t(n[d]);var c=l;r.push(["56d7","chunk-vendors"]),a()})({"1b71":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return templateDefault}),__webpack_require__.d(__webpack_exports__,"b",function(){return testData});const templateDefault={template:'\n        <div>\n            <p style="margin-bottom: 0px;">\n                {{item["notificationText"]}}\n                <a href="" style="\n                    color: #0072c2;\n                    font-weight: bold;\n                ">\n                    {{dossier["dossierId"]}}\n                    <i aria-hidden="true" class="v-icon material-icons theme--light" style="font-size: 15px;color: #0072c2;">launch</i>\n                </a>\n            </p>\n            <p style="color: #90949c;font-size: 12px;">\n            <i aria-hidden="true" class="v-icon material-icons theme--light" style="font-size: 15px; color: rgb(0, 114, 194);">event</i>\n                {{new Date(dossier["createDate"]).toLocaleDateString(\'vi-VN\')}}\n            </p>\n        </div>\n    ',data:()=>({item:{},dossier:{}}),created:function(){let vm=this;void 0!==vm.$parent.item&&null!==vm.$parent.item&&(vm.item=vm.$parent.item,vm.dossier=eval(" ( "+vm.item["data"]+" ) ")["Dossier"]),console.log(vm.item)}},testData=[{guestUrl:"",data:'{"Dossier":{"dossierTemplateNo":"MAU_SNGV_LSVK01","cachedModel":true,"originality":3,"originalReferenceUid":"8f30c78e-a6ce-4a2f-bb22-ba5cb5282110","delegateWardCode":"07897","dossierStatus":"new","dossierRegister":"","durationCount":7,"referenceUid":"8f30c78e-a6ce-4a2f-bb22-ba5cb5282110","sampleCount":"1","applicantNote":"","dossierSubStatus":"new_0","password":"4656","dossierNo":"09.H44.181214.00108","govAgencyCode":"SNGV","originalDossierActionId":"37801","originalGovAgencyCode":"SNGV","originalOriginality":3,"dossierNote":"","finderCacheEnabled":true,"modelClass":"org.opencps.dossiermgt.model.Dossier","endorsementDate":null,"originDossierId":"0","processNo":"QT_SNGV_LSVK01","dossierActionId":"37801","wardName":"Phường Tân Dân","correcttingDate":null,"postalTelNo":"","originalServiceCode":"SNGV_LSVK01","userUuid":"3071a2f7-3926-e6ca-dafa-676f91a70706","postalDistrictName":"","submitting":false,"originalUuid":"1577ffc9-a398-c144-4dc0-e9db730fb338","serviceCode":"SNGV_LSVK01","modelClassName":"org.opencps.dossiermgt.model.Dossier","delegateEmail":"","serverNo":"SERVER_DVC","applicantIdNo":"131487417","createDate":1544782856576,"originalViaPostal":0,"address":"","registerBookName":"","districtName":"Thành phố Việt Trì","delegateCityName":"Tỉnh Phú Thọ","entityCacheEnabled":true,"userId":"240262","originalCompanyId":"20099","escapedModel":false,"originalOriginDossierId":"0","delegateDistrictName":"Thành phố Việt Trì","contactTelNo":"0947006999","delegateIdNo":"131487417","applicantIdType":"citizen","originalDossierStatus":"new","finishDate":null,"dossierStatusText":"Hồ sơ mới nhận","dossierSubStatusText":"Chờ bàn giao thụ lý","viaPostal":0,"columnBitmask":"0","dueDate":1545733258736,"govAgencyName":"Sở Ngoại vụ","groupId":"53365","dossierTemplateName":"Cấp visa, gia hạn visa.","registerBookCode":"","originalDossierId":"23601","originDossierNo":"","uuid":"1577ffc9-a398-c144-4dc0-e9db730fb338","briefNote":"","notification":false,"postalWardCode":"","postalCityName":"","originalUserId":"240262","durationUnit":0,"wardCode":"07897","new":false,"originalApplicantIdNo":"131487417","contactName":"","delegateName":"VI TRƯỜNG SƠN","delegateTelNo":"0947006999","receiveDate":1544782858736,"extendDate":null,"applicantName":"VI TRƯỜNG SƠN","folderId":"0","dossierName":"Cấp visa, gia hạn visa","companyId":"20099","postalAddress":"","processDate":null,"modifiedDate":1544782867802,"postalServiceName":"","dossierId":"23601","delegateAddress":"","districtCode":"227","originalDossierTemplateNo":"MAU_SNGV_LSVK01","cityCode":"25","submitDate":null,"cancellingDate":null,"stagedModelType":{"classSimpleName":"Dossier","referrerClassNameId":"0","referrerClassName":null,"className":"org.opencps.dossiermgt.model.Dossier","classNameId":"34906"},"lockState":"","applicantIdDate":null,"delegateCityCode":"25","cityName":"Tỉnh Phú Thọ","postalServiceCode":"","original":false,"contactEmail":"","originalDossierNo":"09.H44.181214.00108","releaseDate":null,"postalDistrictCode":"","delegateDistrictCode":"227","counter":96,"delegateWardName":"Phường Tân Dân","serviceName":"Cấp visa, gia hạn visa","userName":"Lê Phương Thảo","postalCityCode":"","primaryKeyObj":"23601","originalGroupId":"53365","postalWardName":"","online":false,"primaryKey":"23601"}}',notificationText:"Thông báo tiếp nhận hồ sơ",notifyMessage:"",title:"Thông báo tiếp nhận hồ sơ",userId:"0",userUrl:""},{guestUrl:"",data:'{"Dossier":{"dossierTemplateNo":"MAU_SNGV_LSVK01","cachedModel":true,"originality":3,"originalReferenceUid":"8f30c78e-a6ce-4a2f-bb22-ba5cb5282110","delegateWardCode":"07897","dossierStatus":"new","dossierRegister":"","durationCount":7,"referenceUid":"8f30c78e-a6ce-4a2f-bb22-ba5cb5282110","sampleCount":"1","applicantNote":"","dossierSubStatus":"new_0","password":"4656","dossierNo":"09.H44.181214.00108","govAgencyCode":"SNGV","originalDossierActionId":"37801","originalGovAgencyCode":"SNGV","originalOriginality":3,"dossierNote":"","finderCacheEnabled":true,"modelClass":"org.opencps.dossiermgt.model.Dossier","endorsementDate":null,"originDossierId":"0","processNo":"QT_SNGV_LSVK01","dossierActionId":"37801","wardName":"Phường Tân Dân","correcttingDate":null,"postalTelNo":"","originalServiceCode":"SNGV_LSVK01","userUuid":"3071a2f7-3926-e6ca-dafa-676f91a70706","postalDistrictName":"","submitting":false,"originalUuid":"1577ffc9-a398-c144-4dc0-e9db730fb338","serviceCode":"SNGV_LSVK01","modelClassName":"org.opencps.dossiermgt.model.Dossier","delegateEmail":"","serverNo":"SERVER_DVC","applicantIdNo":"131487417","createDate":1544782856576,"originalViaPostal":0,"address":"","registerBookName":"","districtName":"Thành phố Việt Trì","delegateCityName":"Tỉnh Phú Thọ","entityCacheEnabled":true,"userId":"240262","originalCompanyId":"20099","escapedModel":false,"originalOriginDossierId":"0","delegateDistrictName":"Thành phố Việt Trì","contactTelNo":"0947006999","delegateIdNo":"131487417","applicantIdType":"citizen","originalDossierStatus":"new","finishDate":null,"dossierStatusText":"Hồ sơ mới nhận","dossierSubStatusText":"Chờ bàn giao thụ lý","viaPostal":0,"columnBitmask":"0","dueDate":1545733258736,"govAgencyName":"Sở Ngoại vụ","groupId":"53365","dossierTemplateName":"Cấp visa, gia hạn visa.","registerBookCode":"","originalDossierId":"23601","originDossierNo":"","uuid":"1577ffc9-a398-c144-4dc0-e9db730fb338","briefNote":"","notification":false,"postalWardCode":"","postalCityName":"","originalUserId":"240262","durationUnit":0,"wardCode":"07897","new":false,"originalApplicantIdNo":"131487417","contactName":"","delegateName":"VI TRƯỜNG SƠN","delegateTelNo":"0947006999","receiveDate":1544782858736,"extendDate":null,"applicantName":"VI TRƯỜNG SƠN","folderId":"0","dossierName":"Cấp visa, gia hạn visa","companyId":"20099","postalAddress":"","processDate":null,"modifiedDate":1544782867802,"postalServiceName":"","dossierId":"23601","delegateAddress":"","districtCode":"227","originalDossierTemplateNo":"MAU_SNGV_LSVK01","cityCode":"25","submitDate":null,"cancellingDate":null,"stagedModelType":{"classSimpleName":"Dossier","referrerClassNameId":"0","referrerClassName":null,"className":"org.opencps.dossiermgt.model.Dossier","classNameId":"34906"},"lockState":"","applicantIdDate":null,"delegateCityCode":"25","cityName":"Tỉnh Phú Thọ","postalServiceCode":"","original":false,"contactEmail":"","originalDossierNo":"09.H44.181214.00108","releaseDate":null,"postalDistrictCode":"","delegateDistrictCode":"227","counter":96,"delegateWardName":"Phường Tân Dân","serviceName":"Cấp visa, gia hạn visa","userName":"Lê Phương Thảo","postalCityCode":"","primaryKeyObj":"23601","originalGroupId":"53365","postalWardName":"","online":false,"primaryKey":"23601"}}',notificationText:"Thông báo tiếp nhận hồ sơ",notifyMessage:"",title:"Thông báo tiếp nhận hồ sơ",userId:"0",userUrl:""}]},"56d7":function(e,t,a){"use strict";a.r(t);a("0f18");var i=a("a026"),o=a("bb71");i["a"].use(o["a"],{theme:{primary:"#001f4d",secondary:"#424242",accent:"#001f4d",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"},customProperties:!0,iconfont:"md"});var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",{attrs:{id:"app_dynamic_report"}},[e.isSignedIn?a("div",[a("div",{staticClass:"login_wrap_app_panel",staticStyle:{"text-align":"right","max-width":"1366px"}},[e._v("\n      ok login\n    ")]),a("v-navigation-drawer",{staticClass:"login_drawer",staticStyle:{"-webkit-box-shadow":"0 8px 10px -5px rgba(0,0,0,.2), 0 5px 28px 2px rgba(0,0,0,.14), 0 -5px 28px 1px rgba(0,0,0,0)","box-shadow":"0 8px 10px -5px rgba(0,0,0,.2), 0 5px 28px 2px rgba(0,0,0,.14), 0 -5px 28px 1px rgba(0,0,0,0)","z-index":"9999"},attrs:{fixed:"",right:"","hide-overlay":"",temporary:""},model:{value:e.drawerLogin,callback:function(t){e.drawerLogin=t},expression:"drawerLogin"}},[a("article",{staticClass:"glass down"},[a("v-layout",{staticClass:"px-3",staticStyle:{display:"flex","border-bottom":"1px solid #fff"},attrs:{row:"",wrap:""}},[a("v-flex",{staticClass:"text-center",attrs:{xs6:""}},[a("v-btn",{staticStyle:{"border-top-right-radius":"0","border-bottom-right-radius":"0","border-top-left-radius":"8px","border-bottom-left-radius":"8px"},attrs:{block:"",small:""}},[e._v("\n              Thông báo mới\n            ")])],1),a("v-flex",{staticClass:"text-center",attrs:{xs6:""}},[a("v-btn",{staticStyle:{background:"#d0d0d0","border-top-left-radius":"0","border-bottom-left-radius":"0","border-top-right-radius":"8px","border-bottom-right-radius":"8px"},attrs:{block:"",small:""}},[e._v("\n              Đánh dấu đã đọc\n            ")])],1)],1),a("div",{staticClass:"layout row wrap pl-3 pr-4",staticStyle:{display:"flex"}},[a("div",{staticClass:"flex xs12 mt-3",staticStyle:{background:"#ffffff66","border-radius":"8px"}},[a("div",{staticStyle:{padding:"5px 10px",background:"#fff0","text-transform":"uppercase","font-weight":"bold"}},[a("v-icon",{attrs:{size:"15",color:"red accent-4"}},[e._v("mail")]),e._v("\n              Thông báo\n            ")],1),a("div",{staticClass:"notification_wrap",staticStyle:{padding:"5px 10px",background:"#ffffffb3","border-bottom-left-radius":"8px","border-bottom-right-radius":"8px"}},e._l(e.testData,function(t,i){return a("template-rendering",{key:i,attrs:{item:t,layout_view:t["layout_view"],template_default:e.templateDefault}})}),1)])])],1)])],1):a("div",{staticStyle:{position:"relative",height:"50px"}},[e._v("\n            123123 17777 123 2132131\n  ")])])},s=[],n=a("bc3a"),l=a.n(n),d=a("854a"),c=a.n(d),p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return null!==e.template_default&&void 0!==e.template_default&&"undefined"!==e.template_default?a("my-dynamic-view"):e._e()},u=[],m=a("da1e"),g=m["a"],f=a("2877"),v=Object(f["a"])(g,p,u,!1,null,null,null);v.options.__file="template_rendering.vue";var _=v.exports,b=a("1b71");c.a.options={closeButton:!0,timeOut:"15000"};var h={components:{"template-rendering":_},data:()=>({isSignedIn:!1,userNameLogin:"",drawerLogin:!1,avatarURL:"http://via.placeholder.com/350x150",notificationCount:0,isShowUserMenu:!1,toggle_exclusive:0,forgottenURLStr:"",userName:"",passWord:"",userData:{},colorBG:"009688",templateDefault:b["a"],testData:b["b"]}),created(){let e=this;e.$nextTick(function(){e.isSignedIn=themeDisplay.isSignedIn()})},methods:{}},N=h,y=a("6544"),D=a.n(y),C=a("7496"),x=a("8336"),S=a("0e8f"),w=a("132d"),T=a("a722"),I=a("f774"),V=Object(f["a"])(N,r,s,!1,null,null,null);V.options.__file="App.vue";var k=V.exports;D()(V,{VApp:C["a"],VBtn:x["a"],VFlex:S["a"],VIcon:w["a"],VLayout:T["a"],VNavigationDrawer:I["a"]}),l.a.defaults.headers.common["Token"]=void 0!==window.Liferay?window.Liferay.authToken:"",i["a"].config.productionTip=!0,new i["a"]({render:function(e){return e(k)}}).$mount("#app_dynamic_report")},da1e:function(module,__webpack_exports__,__webpack_require__){"use strict";var vue__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("a026");__webpack_exports__["a"]={props:{item:{type:Object,default(){return{dossierId:0}}},layout_view:{type:Object},template_default:{type:Object}},created(){let vm=this,template="",data="{}",created="{}",updated="{}",methods="{}";null!==vm.layout_view&&void 0!==vm.layout_view&&"undefined"!==vm.layout_view?vue__WEBPACK_IMPORTED_MODULE_0__["a"].component("my-dynamic-view",{template:vm.layout_view["template"],data:eval(" ( "+vm.layout_view["data"]+" ) "),created:eval(" ( "+vm.layout_view["created"]+" ) "),updated:eval(" ( "+vm.layout_view["updated"]+" ) "),methods:vm.layout_view["methods"]}):null!==vm.template_default&&void 0!==vm.template_default&&"undefined"!==vm.template_default&&vue__WEBPACK_IMPORTED_MODULE_0__["a"].component("my-dynamic-view",{template:vm.template_default["template"],data:eval(" ( "+vm.template_default["data"]+" ) "),created:eval(" ( "+vm.template_default["created"]+" ) "),updated:eval(" ( "+vm.template_default["updated"]+" ) "),methods:vm.template_default["methods"]})}}}});
//# sourceMappingURL=app.734ed460.js.map