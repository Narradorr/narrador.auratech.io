(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{171:function(t,e,n){"use strict";n.r(e);n(307);var r=n(50),component=Object(r.a)({},(function(){var t=this,e=t._self._c;return e("footer",{staticClass:"footer",attrs:{id:"footer"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"row footer__raw"},[t._m(0),t._v(" "),e("div",{staticClass:"col-md-3"},[t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),e("div",{staticClass:"back_call"},[e("NuxtLink",{attrs:{to:"/contacts"}},[e("button",{staticClass:"btn qq-button"},[t._v("Наши контакты")])])],1)])])])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-md-9"},[e("div",{staticClass:"copyright"},[e("p",[t._v("© 2023, Auratech.")]),t._v(" "),e("p",[t._v("Все права защищены")])])])},function(){var t=this._self._c;return t("div",{staticClass:"address"},[t("address",[this._v("Астана, ул. Д. Кунаева 10. офис 2819. Бизнес центр Emerald Tower")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"phone"},[e("img",{attrs:{src:"/img/phone.svg",alt:""}}),t._v(" "),e("a",{attrs:{href:"tel:+77770249314"}},[t._v("+7 (777)-024-93-14")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"email"},[e("img",{attrs:{src:"/img/email.svg",alt:""}}),t._v(" "),e("a",{attrs:{href:"mailto:info@lorem ipsum"}},[t._v("info@auratech.kz")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Footer:n(171).default})},175:function(t,e,n){"use strict";n(11),n(20),n(19);n(8).default.directive("mask",{inserted:function(t,e){for(var mask=e.value,n=mask.indexOf("_"),r=(mask.replace(/[^_]/gm,"").length,mask.replace(/[^0-9_]/gm,"")),o=[],i=0;i<r.length;i++)isNaN(r[i])||o.push(i);t.value=mask,t.clean=mask.replace(/[^0-9]/gm,""),t.addEventListener("focus",(function(t){t.preventDefault()})),t.addEventListener("click",(function(e){e.preventDefault();var n=t.value.indexOf("_");-1==n&&(n=t.value.length),t.setSelectionRange(n,n)})),t.addEventListener("paste",(function(e){t.selectionStart<n&&(t.value="_"+t.value)})),t.addEventListener("input",(function(e){t.selectionStart;!function(e,r){var l=t.value,c=l.replace(/[^0-9]/gm,""),f="";l.length<n&&(c=(l=mask+l).replace(/[^0-9]/gm,""));for(var i=0;i<c.length;i++)-1==o.indexOf(i)&&(f+=c[i]);l="";var cursor=0;for(i=0;i<mask.length;i++)"_"==mask[i]&&f?(l+=f[0],f=f.slice(1),cursor=i+1):l+=mask[i];cursor<n&&(cursor=n),t.value=l,t.clean=t.value.replace(/[^0-9]/gm,""),t.setSelectionRange(cursor,cursor)}()}))}})},231:function(t,e,n){var content=n(306);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(62).default)("48c3da4c",content,!0,{sourceMap:!1})},232:function(t,e,n){var content=n(308);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(62).default)("2e87fdab",content,!0,{sourceMap:!1})},243:function(t,e,n){"use strict";var r=n(50),component=Object(r.a)({},(function(){var t=this,e=t._self._c;return e("div",[e("header",[e("Headerr")],1),t._v(" "),e("main",[e("nuxt")],1),t._v(" "),e("footer",[e("Footer")],1)])}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{Headerr:n(328).default,Footer:n(171).default,Footer:n(171).default})},246:function(t,e,n){n(247),t.exports=n(248)},303:function(t,e,n){var content=n(304);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(62).default)("ead59668",content,!0,{sourceMap:!1})},304:function(t,e,n){var r=n(61)((function(i){return i[1]}));r.push([t.i,'body{font-family:"Montserrat",sans-serif!important}.section{padding-left:141px!important;padding-right:82px!important}a.nav-link{color:#666;cursor:pointer;display:inline-block;font-size:30px;padding-bottom:3%;padding-right:3%;position:relative;-webkit-text-decoration:none;text-decoration:none}a.nav-link :after{background:linear-gradient(114.44deg,#624af2,#50ddc3);box-shadow:inset -40px 0 30px -25px #fff,inset 40px 0 30px -25px #fff;content:"";display:block;height:4px;transform:scaleX(.0001);transition:transform .25s ease-in-out}a.nav-link :hover:after{transform:scaleX(1)}.btn.qq-button{align-items:center;background:#1f52ff;border:none;border-radius:40px;color:#f7f7fc;display:flex;flex-direction:column;font-family:"Poppins","Montserrat"!important;font-size:1em;font-style:normal;font-weight:600;justify-content:center;letter-spacing:.75px;line-height:28px;padding:18px 32px;transition:all .3s ease}.btn.qq-button:hover{background:linear-gradient(114.44deg,#7433ff,#ffa3fd);color:#f7f7fc}.btn.qq-button:active{background:linear-gradient(114.44deg,#624af2,#50ddc3);box-shadow:0 4px 4px rgba(0,0,0,.25);color:#f7f7fc!important}.advantages__section,.partners__section,.services__section{padding:130px 0;position:relative}@media(max-width:1440px){html{font-size:14px!important}}@media(max-width:1240px){html{font-size:13px!important}}@media(max-width:1120px){html{font-size:12px!important}}.title-text{color:#000;font-size:3.75em;font-style:normal;font-weight:500;line-height:2.75em;text-transform:uppercase}',""]),r.locals={},t.exports=r},305:function(t,e,n){"use strict";n(231)},306:function(t,e,n){var r=n(61)((function(i){return i[1]}));r.push([t.i,".navbar-brand{margin-bottom:1em}.navbar{background-color:#fff;height:125px}.nav-item{align-items:center;display:flex}.nav-item .nav-link{color:#4e4b66;font-size:1em;font-style:normal;font-weight:500;padding-left:20px!important;padding-right:20px!important;text-align:right;text-transform:uppercase}",""]),r.locals={},t.exports=r},307:function(t,e,n){"use strict";n(232)},308:function(t,e,n){var r=n(61)((function(i){return i[1]}));r.push([t.i,'.footer{align-items:flex-start;background:#1d1d1d;display:flex;flex-direction:row;gap:20px;justify-content:space-between;min-height:352px;padding:56px 32px;width:100%}.copyright{color:#fff;font-family:"Inter"!important;font-size:.875em;font-style:normal;font-weight:300;line-height:1.25em}.footer__nav_block{display:flex;justify-content:center}.footer_nav li{margin:16px 0}.footer_nav li:first-child{margin:0}.footer_nav a{font-size:16px;font-weight:500;text-align:right}.address,.footer_nav a{color:#fff;font-style:normal;line-height:20px}.address{font-size:.875em;font-weight:400}.email,.phone{margin:20px 0}.email a,.phone a{color:#fff;font-size:1em;font-style:normal;font-weight:500;line-height:32px;margin-left:8px}.back_call{margin:10px 0}a{-webkit-text-decoration:none!important;text-decoration:none!important}.btn.qqb-button{align-items:flex-start;background:#0a41ff;border-radius:40px;color:#fff;display:flex;flex-direction:row;font-size:14px;font-weight:600;gap:10px;line-height:17px;padding:12px 16px;text-transform:uppercase}.btn.qqb-button:hover{background-color:#0062cc;color:#fff}@media(min-width:1440px){.container{max-width:1440px}}@media screen and (orientation:portrait)and (max-width:880px){.back_call{display:flex;justify-content:flex-end}.footer__raw{display:flex;flex-direction:column-reverse!important}.footer__nav_block{justify-content:start}}',""]),r.locals={},t.exports=r},328:function(t,e,n){"use strict";n.r(e);n(23);var r=n(8).default.extend({name:"Headerr",computed:{isApp:function(){return"application"===this.$route.name}}}),o=(n(305),n(50)),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("header",{staticClass:"header"},[e("nav",{staticClass:"navbar navbar-expand-lg items-center mx-4"},[e("NuxtLink",{attrs:{to:"/"}},[e("div",{staticClass:"navbar-brand"},[e("img",{attrs:{src:"/img/logo.svg",alt:""}})])]),t._v(" "),e("div",{staticClass:"collapse navbar-collapse justify-content-end",attrs:{id:"navbarNav"}},[e("ul",{staticClass:"navbar-nav"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t.isApp?t._e():e("li",{staticClass:"nav-item"},[e("NuxtLink",{attrs:{to:"/application"}},[e("button",{staticClass:"btn btn-primary qq-button",attrs:{type:"button"}},[t._v("\n                            Оставить заявку\n                        ")])])],1)])])],1)])}),[function(){var t=this,e=t._self._c;t._self._setupProxy;return e("li",{staticClass:"nav-item active"},[e("a",{staticClass:"nav-link",attrs:{href:"/#advantages"}},[t._v("Наши преимущества")])])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"/#services"}},[t._v("Услуги")])])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"/#partners"}},[t._v("Партнеры")])])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"/contacts"}},[t._v("Контакты")])])}],!1,null,null,null);e.default=component.exports}},[[246,11,1,12]]]);