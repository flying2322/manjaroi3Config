"use strict";(globalThis.webpackChunkmomentum=globalThis.webpackChunkmomentum||[]).push([[2084],{52084:(t,e,i)=>{i.d(e,{TiltUpdater:()=>c});var s=i(51057);class n{constructor(){this.enable=!1,this.speed=0,this.decay=0,this.sync=!1}load(t){t&&(void 0!==t.enable&&(this.enable=t.enable),void 0!==t.speed&&(this.speed=(0,s.Cs)(t.speed)),void 0!==t.decay&&(this.decay=(0,s.Cs)(t.decay)),void 0!==t.sync&&(this.sync=t.sync))}}class o extends s.SW{constructor(){super(),this.animation=new n,this.direction="clockwise",this.enable=!1,this.value=0}load(t){super.load(t),t&&(this.animation.load(t.animation),void 0!==t.direction&&(this.direction=t.direction),void 0!==t.enable&&(this.enable=t.enable))}}const a=2*Math.PI;class c{constructor(t){this.container=t}getTransformValues(t){const e=t.tilt?.enable&&t.tilt;return{b:e?Math.cos(e.value)*e.cosDirection:void 0,c:e?Math.sin(e.value)*e.sinDirection:void 0}}init(t){const e=t.options.tilt;if(!e)return;t.tilt={enable:e.enable,value:(0,s.Id)((0,s.Gu)(e.value)),sinDirection:(0,s.sZ)()>=s.vq?1:-1,cosDirection:(0,s.sZ)()>=s.vq?1:-1,min:0,max:a};let i=e.direction;switch("random"===i&&(i=Math.floor(2*(0,s.sZ)())>0?"counter-clockwise":"clockwise"),i){case"counter-clockwise":case"counterClockwise":t.tilt.status="decreasing";break;case"clockwise":t.tilt.status="increasing"}const n=t.options.tilt?.animation;n?.enable&&(t.tilt.decay=1-(0,s.Gu)(n.decay),t.tilt.velocity=(0,s.Gu)(n.speed)/360*this.container.retina.reduceFactor,n.sync||(t.tilt.velocity*=(0,s.sZ)()))}isEnabled(t){const e=t.options.tilt?.animation;return!t.destroyed&&!t.spawning&&!!e?.enable}loadOptions(t,...e){t.tilt||(t.tilt=new o);for(const i of e)t.tilt.load(i?.tilt)}async update(t,e){this.isEnabled(t)&&t.tilt&&((0,s.Cr)(t,t.tilt,!1,"none",e),await Promise.resolve())}}}}]);