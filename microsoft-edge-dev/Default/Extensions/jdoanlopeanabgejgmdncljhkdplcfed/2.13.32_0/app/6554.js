"use strict";(globalThis.webpackChunkmomentum=globalThis.webpackChunkmomentum||[]).push([[6554],{86554:(e,l,a)=>{a.d(l,{RollUpdater:()=>r});var n=a(51057);const o=2*Math.PI;class t{constructor(){this.enable=!1,this.value=0}load(e){e&&(void 0!==e.enable&&(this.enable=e.enable),void 0!==e.value&&(this.value=(0,n.Cs)(e.value)))}}class s{constructor(){this.darken=new t,this.enable=!1,this.enlighten=new t,this.mode="vertical",this.speed=25}load(e){e&&(void 0!==e.backColor&&(this.backColor=n.Oz.create(this.backColor,e.backColor)),this.darken.load(e.darken),void 0!==e.enable&&(this.enable=e.enable),this.enlighten.load(e.enlighten),void 0!==e.mode&&(this.mode=e.mode),void 0!==e.speed&&(this.speed=(0,n.Cs)(e.speed)))}}class r{getTransformValues(e){const l=e.roll?.enable&&e.roll,a=l&&l.horizontal,n=l&&l.vertical;return{a:a?Math.cos(l.angle):void 0,d:n?Math.sin(l.angle):void 0}}init(e){!function(e){const l=e.options.roll;if(l?.enable)if(e.roll={enable:l.enable,horizontal:"horizontal"===l.mode||"both"===l.mode,vertical:"vertical"===l.mode||"both"===l.mode,angle:(0,n.sZ)()*o,speed:(0,n.Gu)(l.speed)/360},l.backColor)e.backColor=(0,n.lN)(l.backColor);else if(l.darken.enable&&l.enlighten.enable){const a=(0,n.sZ)()>=n.vq?"darken":"enlighten";e.roll.alter={type:a,value:(0,n.Gu)("darken"===a?l.darken.value:l.enlighten.value)}}else l.darken.enable?e.roll.alter={type:"darken",value:(0,n.Gu)(l.darken.value)}:l.enlighten.enable&&(e.roll.alter={type:"enlighten",value:(0,n.Gu)(l.enlighten.value)});else e.roll={enable:!1,horizontal:!1,vertical:!1,angle:0,speed:0}}(e)}isEnabled(e){const l=e.options.roll;return!e.destroyed&&!e.spawning&&!!l?.enable}loadOptions(e,...l){e.roll||(e.roll=new s);for(const a of l)e.roll.load(a?.roll)}update(e,l){this.isEnabled(e)&&function(e,l){const a=e.options.roll,n=e.roll;if(!n||!a?.enable)return;const t=n.speed*l.factor,s=o;n.angle+=t,n.angle>s&&(n.angle-=s)}(e,l)}}}}]);