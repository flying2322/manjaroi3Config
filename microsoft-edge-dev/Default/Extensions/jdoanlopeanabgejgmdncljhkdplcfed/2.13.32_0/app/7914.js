"use strict";(globalThis.webpackChunkmomentum=globalThis.webpackChunkmomentum||[]).push([[7914],{77914:(e,i,t)=>{t.d(i,{LifeUpdater:()=>l});var n=t(51057);class o extends n.SW{constructor(){super(),this.sync=!1}load(e){e&&(super.load(e),void 0!==e.sync&&(this.sync=e.sync))}}class a extends n.SW{constructor(){super(),this.sync=!1}load(e){e&&(super.load(e),void 0!==e.sync&&(this.sync=e.sync))}}class s{constructor(){this.count=0,this.delay=new o,this.duration=new a}load(e){e&&(void 0!==e.count&&(this.count=e.count),this.delay.load(e.delay),this.duration.load(e.duration))}}class l{constructor(e){this.container=e}init(e){const i=this.container,t=e.options.life;t&&(e.life={delay:i.retina.reduceFactor?(0,n.Gu)(t.delay.value)*(t.delay.sync?1:(0,n.sZ)())/i.retina.reduceFactor*n.X5:0,delayTime:0,duration:i.retina.reduceFactor?(0,n.Gu)(t.duration.value)*(t.duration.sync?1:(0,n.sZ)())/i.retina.reduceFactor*n.X5:0,time:0,count:t.count},e.life.duration<=0&&(e.life.duration=-1),e.life.count<=0&&(e.life.count=-1),e.life&&(e.spawning=e.life.delay>0))}isEnabled(e){return!e.destroyed}loadOptions(e,...i){e.life||(e.life=new s);for(const t of i)e.life.load(t?.life)}update(e,i){this.isEnabled(e)&&e.life&&function(e,i,t){if(!e.life)return;const o=e.life;let a=!1;if(e.spawning){if(o.delayTime+=i.value,!(o.delayTime>=e.life.delay))return;a=!0,e.spawning=!1,o.delayTime=0,o.time=0}if(-1===o.duration)return;if(e.spawning)return;if(a?o.time=0:o.time+=i.value,o.time<o.duration)return;if(o.time=0,e.life.count>0&&e.life.count--,0===e.life.count)return void e.destroy();const s=(0,n.Cs)(0,t.width),l=(0,n.Cs)(0,t.width);e.position.x=(0,n.vd)(s),e.position.y=(0,n.vd)(l),e.spawning=!0,o.delayTime=0,o.time=0,e.reset();const r=e.options.life;r&&(o.delay=(0,n.Gu)(r.delay.value)*n.X5,o.duration=(0,n.Gu)(r.duration.value)*n.X5)}(e,i,this.container.canvas.size)}}}}]);