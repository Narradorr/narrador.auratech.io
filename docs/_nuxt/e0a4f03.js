(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{351:function(t,e){t.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(object,t){return Object.prototype.hasOwnProperty.call(object,t)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t._self._c;return t.$slots.default&&t.$slots.default.length?e("div",{key:t.$slots.default.length,staticClass:"ssr-carousel",attrs:{"data-ssrc-id":t.scopeId},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"tab",9,e.key,"Tab")?null:t.onTab.apply(null,arguments)}}},[e("style",{tag:"component",domProps:{innerHTML:t._s(t.instanceStyles)}}),e("div",{staticClass:"ssr-carousel-slides"},[e("div",{ref:"peekValues",staticClass:"ssr-peek-values",style:t.peekStyles}),e("div",t._g({ref:"mask",staticClass:"ssr-carousel-mask",class:{pressing:t.pressing,disabled:t.disabled,"no-mask":t.overflowVisible,"not-draggable":t.noDrag}},t.maskListeners),[e("ssr-carousel-track",t._b({ref:"track",scopedSlots:t._u([{key:"default",fn:function(){return[t._t("default")]},proxy:!0},t.hasPeekClones?{key:"clones",fn:function(){return[t._t("default")]},proxy:!0}:null],null,!0)},"ssr-carousel-track",{dragging:t.dragging,trackTranslateX:t.trackTranslateX,slideOrder:t.slideOrder,activeSlides:t.activeSlides,leftPeekingSlideIndex:t.leftPeekingSlideIndex,rightPeekingSlideIndex:t.rightPeekingSlideIndex},!1))],1),t.showArrows?e("ssr-carousel-arrows",t._b({on:{back:t.back,next:t.next},scopedSlots:t._u([{key:"back",fn:function(e){return[t._t("back-arrow",null,null,e)]}},{key:"next",fn:function(e){return[t._t("next-arrow",null,null,e)]}}],null,!0)},"ssr-carousel-arrows",{index:t.index,pages:t.pages,shouldLoop:t.shouldLoop,pageLabel:t.pageLabel},!1)):t._e()],1),t.showDots?e("ssr-carousel-dots",t._b({on:{goto:t.gotoDot},scopedSlots:t._u([{key:"dot",fn:function(e){return[t._t("dot",null,null,e)]}}],null,!0)},"ssr-carousel-dots",{boundedIndex:t.boundedIndex,pages:t.pages,pageLabel:t.pageLabel},!1)):t._e(),e("div",{staticClass:"ssr-carousel-visually-hidden",attrs:{"aria-live":"polite","aria-atomic":"true"}},[t._v(t._s(t.currentSlideMessage))])],1):t._e()};r._withStripped=!0;var o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"ssr-carousel-arrows"},[e("button",{staticClass:"ssr-carousel-back-button",attrs:{"aria-label":`Previous ${t.pageLabel}`,"aria-disabled":t.backDisabled},on:{click:function(e){return t.$emit("back")}}},[t._t("back",(function(){return[e("span",{staticClass:"ssr-carousel-back-icon"})]}),{disabled:t.backDisabled})],2),e("button",{staticClass:"ssr-carousel-next-button",attrs:{"aria-label":`Next ${t.pageLabel}`,"aria-disabled":t.nextDisabled},on:{click:function(e){return t.$emit("next")}}},[t._t("next",(function(){return[e("span",{staticClass:"ssr-carousel-next-icon"})]}),{disabled:t.nextDisabled})],2)])};function h(t,e,n,r,o,h,d,l){var c,f="function"==typeof t?t.options:t;if(e&&(f.render=e,f.staticRenderFns=n,f._compiled=!0),r&&(f.functional=!0),h&&(f._scopeId="data-v-"+h),d?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(d)},f._ssrRegister=c):o&&(c=l?function(){o.call(this,(f.functional?this.parent:this).$root.$options.shadowRoot)}:o),c)if(f.functional){f._injectStyles=c;var m=f.render;f.render=function(t,e){return c.call(e),m(t,e)}}else{var v=f.beforeCreate;f.beforeCreate=v?[].concat(v,c):[c]}return{exports:t,options:f}}o._withStripped=!0;var d=h({props:{index:Number,pages:Number,shouldLoop:Boolean,pageLabel:String},computed:{backDisabled:function(){if(!this.shouldLoop)return 0===this.index},nextDisabled:function(){if(!this.shouldLoop)return this.index===this.pages-1}}},o,[],!1,null,null,null).exports,l=function(){var t=this,e=t._self._c;return e("div",{staticClass:"ssr-carousel-dots"},t._l(t.pages,(function(i){return e("button",{key:i,staticClass:"ssr-carousel-dot-button",attrs:{"aria-label":`Go to ${t.pageLabel} ${i}`,"aria-disabled":t.isDisabled(i)},on:{click:function(e){return t.$emit("goto",i-1)}}},[t._t("dot",(function(){return[e("span",{staticClass:"ssr-carousel-dot-icon"})]}),{index:i,disabled:t.isDisabled(i)})],2)})),0)};l._withStripped=!0;var c,f=h({props:{boundedIndex:Number,pages:Number,pageLabel:String},methods:{isDisabled:function(t){return this.boundedIndex===t-1}}},l,[],!1,null,null,null).exports,m=[].indexOf;c="a, button, input, textarea, select";var v,k,y=h({props:{dragging:Boolean,trackTranslateX:Number,slideOrder:Array,activeSlides:Array,leftPeekingSlideIndex:Number,rightPeekingSlideIndex:Number},data:function(){return{renderAsList:!1}},mounted:function(){return this.denyTabindex(this.inactiveSlides),this.denyTabindex(this.clonedSlides)},computed:{trackHTMLElement:function(){return this.renderAsList?"ul":"div"},uniqueSlidesCount:function(){return this.slideOrder.length},allSlidesCount:function(){return this.getSlideComponents().length},hasClonedSlides:function(){return this.allSlidesCount>this.uniqueSlidesCount},inactiveSlides:function(){return function(){for(var t=[],e=0,n=this.uniqueSlidesCount;0<=n?e<n:e>n;0<=n?e++:e--)t.push(e);return t}.apply(this).filter((t=>m.call(this.activeSlides,t)<0))},clonedSlides:function(){var t;return function(){for(var e=[],n=t=this.uniqueSlidesCount,r=this.allSlidesCount;t<=r?n<r:n>r;t<=r?n++:n--)e.push(n);return e}.apply(this)},styles:function(){if(this.trackTranslateX)return{transform:`translateX(${this.trackTranslateX}px)`}}},watch:{activeSlides:function(){return this.allowTabindex(this.activeSlides),this.denyTabindex(this.inactiveSlides)}},methods:{makeSlides:function(){return this.getSlideComponents().map(((t,e)=>{var n,r,o,h;return t=this.makeReactiveVnode(t),0===e&&"li"===t.tag&&(this.renderAsList=!0),r=e>=(h=this.uniqueSlidesCount),o=e-h,n="ssr-carousel-slide",t.data.staticClass?t.data.staticClass+=` ${n}`:t.data.staticClass=n,t.data.style.order=r?function(){switch(!1){case o!==this.leftPeekingSlideIndex:return"-1";case o!==this.rightPeekingSlideIndex:return this.slideOrder.length}}.call(this):this.slideOrder[e]||0,r&&o!==this.leftPeekingSlideIndex&&o!==this.rightPeekingSlideIndex&&(t.data.style.display="none"),(r||m.call(this.activeSlides,e)<0)&&(t.data.attrs["aria-hidden"]="true"),r&&null!=t.key&&(t.key+="-clone-"+e),t}))},getSlideComponents:function(){return[...this.$slots.default||[],...this.$slots.clones||[]].filter((function(t){return!t.text}))},makeReactiveVnode:function(t){var e;return t.data||console.error("vnode has no data",t),(e={...t}).data={...t.data},e.data.style={...t.data.style},e.data.attrs={...t.data.attrs},e},denyTabindex:function(t){return this.setTabindex(t,-1)},allowTabindex:function(t){return this.setTabindex(t,0)},setTabindex:function(t,e){var n,r,o,h,d;for(d=[],r=0,o=(h=this.getSlideElementsByIndices(t)).length;r<o;r++)(n=h[r]).matches(c)&&(n.tabIndex=e),d.push(n.querySelectorAll(c).forEach((function(t){return t.tabIndex=e})));return d},getSlideElementsByIndices:function(t){return Array.from(this.$el.children).filter((function(e,i){return m.call(t,i)>=0}))}},render:function(t){return t(this.trackHTMLElement,{class:["ssr-carousel-track",{dragging:this.dragging}],style:this.styles},this.makeSlides())}},undefined,undefined,!1,null,null,null).exports,S={props:{autoplayDelay:{type:Number,default:0},pauseOnFocus:{type:Boolean,default:!0}},mounted:function(){return this.autoplayStart()},beforeDestroy:function(){return this.autoplayStop()},computed:{autoplayPaused:function(){switch(!1){case!this.usingKeyboard:return!0;case!this.pauseOnFocus:return this.windowHidden||this.isFocused}}},watch:{autoplayPaused:function(t){return t?this.autoplayStop():this.autoplayStart()}},methods:{autoplayStart:function(){if(this.autoplayDelay&&this.pages)return this.autoPlayInterval=setInterval((()=>{if(!this.autoplayPaused)return this.autoplayNext()}),1e3*this.autoplayDelay)},autoplayStop:function(){return clearInterval(this.autoPlayInterval)},autoplayNext:function(){return this.shouldLoop||this.index<this.pages-1?this.next():this.goto(0)}}};k={passive:!0},v={passive:!1};var x={props:{boundaryDampening:{type:Number,default:.6},dragAdvanceRatio:{type:Number,default:.33},verticalDragTreshold:{type:Number,default:1},noDrag:Boolean},data:function(){return{pressing:!1,dragging:!1,isTouchDrag:!1,startPointer:null,lastPointer:null,dragVelocity:null,dragDirectionRatio:null}},beforeDestroy:function(){return window.removeEventListener("mousemove",this.onPointerMove,k),window.removeEventListener("mouseup",this.onPointerUp,k),window.removeEventListener("touchmove",this.onPointerMove,k),window.removeEventListener("touchend",this.onPointerUp,k),window.removeEventListener("touchmove",this.onWinMove,v)},computed:{dragIndex:function(){switch(!1){case!(Math.abs(this.dragVelocity)<=2):return Math.round(this.fractionalIndex);case!(this.dragVelocity<0):return Math.ceil(this.fractionalIndex);default:return Math.floor(this.fractionalIndex)}},fractionalIndex:function(){var t,e,n,r,o,h;return this.trackWidth?(h=-1*this.currentX,n=Math.floor(h/this.trackWidth),o=this.paginateBySlide?this.slideWidth:this.pageWidth,e=Math.floor((h-n*this.trackWidth)/o),t=h-n*this.trackWidth-e*o,r=this.currentSlidesPerPage,t/(function(){return!1==!this.shouldLoop?this.slidesCount-e*r:this.slidesCount-(e+1)*r}.call(this)<=r?this.lastPageWidth:o)+n*this.pages+e):0},isVerticalDrag:function(){if(this.dragDirectionRatio)return this.dragDirectionRatio<this.verticalDragTreshold},preventVerticalScroll:function(){return this.pressing&&this.isTouchDrag&&!this.isVerticalDrag}},watch:{pressing:function(){var t,e;return[t,e]=this.isTouchDrag?["touchmove","touchend"]:["mousemove","mouseup"],this.pressing?(window.addEventListener(t,this.onPointerMove,k),window.addEventListener(e,this.onPointerUp,k),window.addEventListener("contextmenu",this.onPointerUp,k),this.dragVelocity=0,this.preventContentDrag(),this.stopTweening()):(this.isOutOfBounds&&!this.shouldLoop?this.currentX>=0?this.gotoStart():this.gotoEnd():this.isVariableWidth?this.tweenToStop():this.isVerticalDrag?this.goto(this.index):this.goto(this.dragIndex),window.removeEventListener(t,this.onPointerMove,k),window.removeEventListener(e,this.onPointerUp,k),window.removeEventListener("contextmenu",this.onPointerUp,k),this.dragging=!1,this.startPointer=this.lastPointer=this.dragDirectionRatio=null),this.pressing?this.$emit("press"):this.$emit("release")},dragging:function(){return this.dragging?this.$emit("drag:start"):this.$emit("drag:end")},isVerticalDrag:function(){if(this.isVerticalDrag&&this.isTouchDrag)return this.pressing=!1},preventVerticalScroll:function(t){return t?window.addEventListener("touchmove",this.stopEvent,v):window.removeEventListener("touchmove",this.stopEvent,v)}},methods:{stopEvent:function(t){return t.preventDefault()},onPointerDown:function(t){return this.isTouchDrag="undefined"!=typeof TouchEvent&&null!==TouchEvent&&t instanceof TouchEvent,this.startPointer=this.lastPointer=this.getPointerCoords(t),this.pressing=!0,this.usingKeyboard=!1},onPointerUp:function(){return this.pressing=!1},onPointerMove:function(t){var e;return this.dragging||(this.dragging=!0),e=this.getPointerCoords(t),this.dragVelocity=e.x-this.lastPointer.x,this.targetX+=this.dragVelocity,this.lastPointer=e,this.dragDirectionRatio=Math.abs((e.x-this.startPointer.x)/(e.y-this.startPointer.y)),this.currentX=this.applyBoundaryDampening(this.targetX)},getPointerCoords:function(t){var e,n,r,o;return{x:(null!=(e=t.touches)&&null!=(n=e[0])?n.pageX:void 0)||t.pageX,y:(null!=(r=t.touches)&&null!=(o=r[0])?o.pageY:void 0)||t.pageY}},applyBoundaryDampening:function(t){switch(!1){case!this.shouldLoop:return t;case!(t>0):return Math.pow(t,this.boundaryDampening);case!(t<this.endX):return this.endX-Math.pow(this.endX-t,this.boundaryDampening);default:return this.applyXBoundaries(t)}},applyXBoundaries:function(t){return this.shouldLoop?t:Math.max(this.endX,Math.min(0,t))},preventContentDrag:function(){if(!this.contentDragPrevented)return this.$refs.track.$el.querySelectorAll("a, img").forEach((function(t){return t.addEventListener("dragstart",(function(t){return t.preventDefault()}))})),this.contentDragPrevented=!0}}},w={props:{feather:{type:Boolean|String|Number,default:!1}},methods:{makeBreakpointFeatheringStyle:function(t){var e,n;if(!this.isDisabledAtBreakpoint(t)&&!1!==(n=this.getResponsiveValue("feather",t))&&null!==n)return n&&"boolean"!=typeof n||(n=20),e=`linear-gradient(to right,\n\ttransparent, black ${n=this.autoUnit(n)},\n\tblack calc(100% - ${n}),\n\ttransparent)`,`${this.scopeSelector} .ssr-carousel-mask {\n\t-webkit-mask-image: ${e};\n\tmask-image: ${e};\n}`}}},P={props:{loop:Boolean,center:Boolean},data:function(){return{slideOrder:[]}},computed:{shouldLoop:function(){return this.loop&&!this.usingKeyboard},currentSlideIndex:function(){return Math.floor(this.currentX/this.slideWidth*-1)},trackLoopOffset:function(){var t;return this.shouldLoop?(t=this.currentSlideIndex,this.hasLeftPeekClone&&(t-=1),t*this.slideWidth):0},leftMostSlideIndex:function(){return this.slideOrder.findIndex((t=>0===t))},rightMostSlideIndex:function(){return this.slideOrder.findIndex((t=>t===this.slideOrder.length-1))}},watch:{currentSlideIndex:{immediate:!0,handler:function(){return this.setSlideOrder()}},currentSlidesPerPage:function(){return this.setSlideOrder()}},methods:{setSlideOrder:function(){var t,e,n;return t=(e=[...Array(this.slidesCount).keys()]).length,this.center&&(n=Math.floor(this.currentSlidesPerPage/2),e=[...e.slice(n),...e.slice(0,n)]),this.shouldLoop&&(n=(t-this.currentSlideIndex)%t,e=[...e.slice(n),...e.slice(0,n)]),this.slideOrder=e},makeBreakpointSlideOrderStyle:function(t){var i,e,n;if(this.center)return e=this.getResponsiveValue("slidesPerPage",t),n=Math.floor(e/2),function(){var t,e,r;for(r=[],i=t=0,e=this.slidesCount;0<=e?t<=e:t>=e;i=0<=e?++t:--t)r.push(`${this.scopeSelector} .ssr-carousel-slide:nth-child(${i+1}) {\n\torder: ${(i+n)%this.slidesCount};\n}`);return r}.call(this).join("")}}},$={props:{paginateBySlide:Boolean,value:{type:Number,default:0}},data:function(){return{index:this.value,currentX:0,targetX:0}},computed:{pages:function(){switch(!1){case!(this.paginateBySlide&&this.shouldLoop):return this.slidesCount;case!this.paginateBySlide:return this.slidesCount-this.currentSlidesPerPage+1;default:return Math.ceil(this.slidesCount/this.currentSlidesPerPage)}},disabled:function(){return this.isVariableWidth?Math.round(this.trackWidth)<=Math.round(this.carouselWidth):this.slidesCount<=this.currentSlidesPerPage},slides:function(){return(this.$slots.default||[]).filter((function(t){return!t.text}))},slidesCount:function(){return this.slides.length},boundedIndex:function(){var t;return(t=this.index%this.pages)<0?this.pages+t:t},currentIncompletePageOffset:function(){return this.makeIncompletePageOffset(this.index)},activeSlides:function(){var t;return this.isVariableWidth?function(){for(var t=[],i=0,e=this.slidesCount;0<=e?i<e:i>e;0<=e?i++:i--)t.push(i);return t}.apply(this):(t=this.paginateBySlide?this.boundedIndex:this.boundedIndex*this.currentSlidesPerPage,this.shouldLoop||(t-=this.boundedIndex%this.currentSlidesPerPage),function(){for(var e=[],i=t,n=t+this.currentSlidesPerPage;t<=n?i<n:i>n;t<=n?i++:i--)e.push(i);return e}.apply(this).reduce(((t,e)=>(this.shouldLoop?t.push(e%this.slidesCount):e<this.slidesCount&&t.push(e),t)),[]))}},watch:{value:function(){return this.value!==this.applyIndexBoundaries(this.value)?this.$emit("input",this.boundedIndex):this.value!==this.boundedIndex?this.goto(this.value):void 0},boundedIndex:function(){return this.$emit("change",{index:this.boundedIndex}),this.$emit("input",this.boundedIndex)}},methods:{next:function(){return this.goto(this.index+1)},back:function(){return this.goto(this.index-1)},gotoDot:function(t){return this.goto(t-this.boundedIndex+this.index)},goto:function(t){return this.index=this.applyIndexBoundaries(t),this.tweenToIndex(this.index)},gotoStart:function(){return this.isVariableWidth?this.tweenToX(0):this.goto(0)},gotoEnd:function(){return this.isVariableWidth?this.tweenToX(this.endX):this.goto(this.pages-1)},tweenToIndex:function(t){return this.targetX=this.getXForIndex(t),this.startTweening()},jumpToIndex:function(t){return this.currentX=this.targetX=this.getXForIndex(t)},getXForIndex:function(t){var e;return e=this.paginateBySlide?t*this.slideWidth*-1:t*this.pageWidth*-1,e+=this.makeIncompletePageOffset(t),Math.round(this.applyXBoundaries(e))},makeIncompletePageOffset:function(t){var e;return!this.shouldLoop||this.paginateBySlide?0:(e=this.pageWidth-this.lastPageWidth,Math.floor(t/this.pages)*e)},applyIndexBoundaries:function(t){return this.shouldLoop?t:Math.max(0,Math.min(this.pages-1,t))}}},W={props:{peekGutter:Boolean,peek:{type:Number|String,default:function(){return this.peekGutter?`calc(${this.gutter} - 1px)`:0}},peekLeft:{type:Number|String,default:function(){return this.peek}},peekRight:{type:Number|String,default:function(){return this.peek}},matchPeekWhenDisabled:{type:Boolean,default:!0},overflowVisible:Boolean},data:function(){return{clones:[],peekLeftPx:0,peekRightPx:0}},computed:{hasPeekClones:function(){return this.hasLeftPeekClone||this.hasRightPeekClone},hasPeekPrerequisites:function(){return this.shouldLoop&&this.slidesCount>1},hasLeftPeekClone:function(){return this.hasPeekPrerequisites&&this.peekLeft},hasRightPeekClone:function(){return this.hasPeekPrerequisites&&this.peekRight},leftPeekingSlideIndex:function(){if(this.hasLeftPeekClone)return this.rightMostSlideIndex},rightPeekingSlideIndex:function(){if(this.hasRightPeekClone)return this.leftMostSlideIndex},combinedPeek:function(){return this.peekLeftPx+this.peekRightPx},peekStyles:function(){var t;return t=this.currentResponsiveBreakpoint,{left:this.autoUnit(this.getResponsiveValue("peekLeft",t)),right:this.autoUnit(this.getResponsiveValue("peekRight",t))}}},watch:{peekLeft:function(){return this.capturePeekingMeasurements()},peekRight:function(){return this.capturePeekingMeasurements()},peek:function(){return this.capturePeekingMeasurements()},peekGutter:function(){return this.capturePeekingMeasurements()},responsive:function(){return this.capturePeekingMeasurements()}},methods:{capturePeekingMeasurements:function(){if(this.$refs.peekValues)return this.$nextTick((function(){var t;return t=getComputedStyle(this.$refs.peekValues),this.peekLeftPx=parseInt(t.left),this.peekRightPx=parseInt(t.right)}))},makeBreakpointTrackTransformStyle:function(t){var e,n,r;if(!this.isDisabledAtBreakpoint(t))return n=this.getResponsiveValue("peekLeft",t),r=this.hasLeftPeekClone?(e=this.getResponsiveValue("gutter",t),`transform: translateX(calc( ${this.autoUnit(n)} - (${this.makeSlideWidthCalc(t)} + ${this.autoUnit(e)}) ));`):`transform: translateX(${this.autoUnit(n)});`,`${this.scopeSelector} .ssr-carousel-track { ${r} }`}}},C=h({name:"SsrCarousel",mixins:[{props:{paginationLabel:String},data:function(){return{usingKeyboard:!1}},computed:{pageLabel:function(){switch(!1){case!this.paginationLabel:return this.paginationLabel;case!this.paginateBySlide:return"Slide";default:return"Page"}},currentSlideMessage:function(){return`${this.pageLabel} ${this.boundedIndex+1} of ${this.pages}`}},watch:{usingKeyboard:function(){if(this.usingKeyboard)return this.goto(0)}},methods:{onTab:function(){return this.usingKeyboard=!0}}},S,{data:function(){return{viewportWidth:null,carouselWidth:null,gutterWidth:0}},mounted:function(){return this.onResize(),this.resizeObserver=new ResizeObserver(this.onResize),this.resizeObserver.observe(this.$el)},beforeDestroy:function(){var t;return null!=(t=this.resizeObserver)?t.disconnect():void 0},computed:{pageWidth:function(){return this.carouselWidth-this.combinedPeek},slideWidth:function(){return this.pageWidth/this.currentSlidesPerPage},trackWidth:function(){return this.isVariableWidth?this.measuredTrackWidth+this.gutterWidth:this.slideWidth*this.slidesCount},lastPageWidth:function(){var t,e;return e=this.currentSlidesPerPage,0===(t=this.slidesCount%e)&&(t=e),t*this.slideWidth},endX:function(){return this.disabled?0:this.pageWidth-this.trackWidth-this.peekLeftPx+this.peekRightPx+1},isOutOfBounds:function(){return this.currentX>0||this.currentX<this.endX}},methods:{onResize:function(){var t,e;if((null!=(e=this.$el)?e.nodeType:void 0)===Node.ELEMENT_NODE&&(t=this.$refs.track.$el.firstElementChild))return this.gutterWidth=parseInt(getComputedStyle(t).marginRight),this.carouselWidth=this.$el.getBoundingClientRect().width+this.gutterWidth,this.viewportWidth=window.innerWidth,this.capturePeekingMeasurements(),this.isVariableWidth?this.captureTrackWidth():void 0},makeBreakpointSlideWidthStyle:function(t){if(!this.isVariableWidth)return`${this.scopeSelector} .ssr-carousel-slide {\n\twidth: ${this.makeSlideWidthCalc(t)};\n}`},makeSlideWidthCalc:function(t){var e,n,r,o,h;return n=this.isDisabledAtBreakpoint(t),h=this.getResponsiveValue("slidesPerPage",t),e=this.getResponsiveValue("gutter",t),r=this.getResponsiveValue("peekLeft",t),o=this.matchPeekWhenDisabled&&n?r:this.getResponsiveValue("peekRight",t),`calc( ${100/h}% - (${this.autoUnit(r)} + ${this.autoUnit(o)}) / ${h} - (${this.autoUnit(e)} * ${h-1}) / ${h} )`}}},x,w,{data:function(){return{hovered:!1,windowVisible:!0}},computed:{isFocused:function(){return this.windowVisible&&this.hovered},windowHidden:function(){return!this.windowVisible}},methods:{onEnter:function(){return this.hovered=!0},onLeave:function(){return this.hovered=!1},updateVisibility:function(){return this.windowVisible=!document.hidden}},mounted:function(){if(this.watchesHover)return document.addEventListener("visibilitychange",this.updateVisibility)},beforeDestroy:function(){return document.removeEventListener("visibilitychange",this.updateVisibility)}},{props:{gutter:{type:Number|String,default:20}},methods:{makeBreakpointSlideGutterStyle:function(t){var e,n;return e=this.getResponsiveValue("gutter",t),n=this.isDisabledAtBreakpoint(t)?0:e,`${this.scopeSelector} .ssr-carousel-slide {\n\tmargin-right: ${this.autoUnit(e)};\n}\n${this.scopeSelector} .ssr-carousel-slide:is(:last-child) {\n\tmargin-right: ${this.autoUnit(n)};\n}`}}},P,$,{props:{slidesPerPage:{type:Number,default:1},responsive:{type:Array,default:function(){return[]}}},computed:{scopeId:function(){return this.hashString(this.slidesCount+"|"+JSON.stringify(this.$props))},responsiveRules:function(){return this.responsive.map((t=>({...t,mediaQuery:this.makeMediaQuery(t),active:this.isBreakpointActive(t),peekLeft:t.peekLeft||t.peek||(t.peekGutter?t.gutter:void 0),peekRight:t.peekRight||t.peek||(t.peekGutter?t.gutter:void 0)})))},currentSlidesPerPage:function(){return this.getResponsiveValue("slidesPerPage",this.currentResponsiveBreakpoint)},currentResponsiveBreakpoint:function(){var t;return(t=[...this.responsiveRules].reverse().find((function({active:t}){return t})))?t:{slidesPerPage:this.slidesPerPage,gutter:this.gutter,peekLeft:this.peekLeft||this.peek||(this.peekGutter?this.gutter:void 0),peekRight:this.peekRight||this.peek||(this.peekGutter?this.gutter:void 0),feather:this.feather}},scopeSelector:function(){return`[data-ssrc-id='${this.scopeId}']`},instanceStyles:function(){return this.makeBreakpointStyles(this.$props)+this.responsiveRules.map((t=>`@media ${t.mediaQuery} { ${this.makeBreakpointStyles(t)} }`)).join(" ")}},watch:{pageWidth:function(){return this.jumpToIndex(this.index)},disabled:function(){if(this.disabled)return this.goto(0)}},methods:{makeMediaQuery:function(t){var e;return e=[],t.maxWidth&&e.push(`(max-width: ${t.maxWidth}px)`),t.minWidth&&e.push(`(min-width: ${t.minWidth}px)`),e.join(" and ")},makeBreakpointStyles:function(t){return[this.makeBreakpointDisablingRules(t),this.makeBreakpointFeatheringStyle(t),this.makeBreakpointTrackTransformStyle(t),this.makeBreakpointSlideWidthStyle(t),this.makeBreakpointSlideGutterStyle(t),this.makeBreakpointSlideOrderStyle(t)].join(" ")},makeBreakpointDisablingRules:function(t){var e;return e=this.getResponsiveValue("slidesPerPage",t),this.slidesCount<=e?`${this.scopeSelector} .ssr-carousel-track { justify-content: center; }\n${this.scopeSelector} .ssr-carousel-arrows,\n${this.scopeSelector} .ssr-carousel-dots { display: none; }`:`${this.scopeSelector} .ssr-carousel-track { justify-content: start; }\n${this.scopeSelector} .ssr-carousel-arrows { display: block; }\n${this.scopeSelector} .ssr-carousel-dots { display: flex; }`},isDisabledAtBreakpoint:function(t){var e;return e=this.getResponsiveValue("slidesPerPage",t),this.slidesCount<=e},isBreakpointActive:function(t){var e;switch(!1){case!!this.viewportWidth:case!((e=t.maxWidth)&&this.viewportWidth>e):case!((e=t.minWidth)&&this.viewportWidth<e):return!1;default:return!0}},getResponsiveValue:function(t,e){var n,r;return null!=(r=e[t])?r:this.responsiveRules.length&&(n=this.responsiveRules.find((function(n){if(n[t])return!!(e.maxWidth&&n.minWidth&&n.minWidth<e.maxWidth)||(!!(e.maxWidth&&n.maxWidth&&n.maxWidth<e.maxWidth)||(!!(e.minWidth&&n.minWidth&&n.minWidth>e.minWidth)||(!!(e.minWidth&&n.maxWidth&&n.minWidth>e.minWidth)||void 0)))})))?n[t]:this[t]},hashString:function(t){var e,i,n;for(e=0,i=0,n=t.length;i<n;)e=(e<<5)-e+t.charCodeAt(i++)<<0;return e.toString(36)},autoUnit:function(t){return t?String(t).match(/^[\d\-\.]+$/)?`${t}px`:t:"0px"}}},W,{props:{tweenDampening:{type:Number,default:.12},tweenInertia:{type:Number,default:3}},data:function(){return{currentX:0,targetX:0,tweening:!1}},beforeDestroy:function(){return window.cancelAnimationFrame(this.rafId)},watch:{tweening:function(){return this.tweening?(this.$emit("tween:start",{index:this.index}),this.tweenToTarget()):(window.cancelAnimationFrame(this.rafId),this.$emit("tween:end",{index:this.index}))}},methods:{tweenToX:function(t){return this.targetX=Math.round(t),this.startTweening()},startTweening:function(){if(!this.tweening&&this.currentX!==this.targetX)return this.tweening=!0},stopTweening:function(){return this.tweening=!1},tweenToTarget:function(){return this.currentX=this.currentX+(this.targetX-this.currentX)*this.tweenDampening,Math.abs(this.targetX-this.currentX)<1?(this.currentX=this.targetX,this.tweening=!1):this.rafId=window.requestAnimationFrame(this.tweenToTarget)},tweenToStop:function(){return this.targetX=this.applyXBoundaries(this.currentX+this.dragVelocity*this.tweenInertia),this.startTweening()}}},{data:function(){return{measuredTrackWidth:0}},computed:{isVariableWidth:function(){return null===this.slidesPerPage}},methods:{captureTrackWidth:function(){if(this.$refs.track)return this.measuredTrackWidth=this.$refs.track.$el.scrollWidth}}}],components:{SsrCarouselArrows:d,SsrCarouselDots:f,SsrCarouselTrack:y},props:{showArrows:Boolean,showDots:Boolean},computed:{trackTranslateX:function(){if(this.carouselWidth&&!this.disabled)return this.currentX+this.trackLoopOffset+this.peekLeftPx},watchesHover:function(){return this.autoplayDelay>0},maskListeners:function(){return this.disabled?{}:{...this.noDrag?{}:{mousedown:this.onPointerDown,touchstart:this.onPointerDown},...this.watchesHover?{mouseenter:this.onEnter,mouseleave:this.onLeave}:{}}}}},r,[],!1,null,null,null);e.default=C.exports}])}}]);