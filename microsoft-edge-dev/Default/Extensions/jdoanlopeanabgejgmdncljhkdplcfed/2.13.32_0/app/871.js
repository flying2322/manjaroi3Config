"use strict";(globalThis.webpackChunkmomentum=globalThis.webpackChunkmomentum||[]).push([[871],{10871:(t,i,s)=>{s.d(i,{EmitterInstance:()=>h});var e=s(51057),o=s(7097),n=s(52817);function a(t,i){t.color?t.color.value=i:t.color={value:i}}class h{constructor(t,i,s,n,a){this.emitters=i,this.container=s,this._destroy=()=>{this._mutationObserver?.disconnect(),this._mutationObserver=void 0,this._resizeObserver?.disconnect(),this._resizeObserver=void 0,this.emitters.removeEmitter(this),this._engine.dispatchEvent("emitterDestroyed",{container:this.container,data:{emitter:this}})},this._prepareToDie=()=>{if(this._paused)return;const t=void 0!==this.options.life?.duration?(0,e.Gu)(this.options.life.duration):void 0;this.container.retina.reduceFactor&&(this._lifeCount>0||this._immortal)&&void 0!==t&&t>0&&(this._duration=t*e.X5)},this._setColorAnimation=(t,i,s,o=1)=>{const n=this.container;if(!t.enable)return i;const a=(0,e.vd)(t.offset),h=(0,e.Gu)(this.options.rate.delay)*e.X5/n.retina.reduceFactor;return(i+(0,e.Gu)(t.speed??0)*n.fpsLimit/h+a*o)%s},this._engine=t,this._currentDuration=0,this._currentEmitDelay=0,this._currentSpawnDelay=0,this._initialPosition=a,n instanceof o.Emitter?this.options=n:(this.options=new o.Emitter,this.options.load(n)),this._spawnDelay=(0,e.Gu)(this.options.life.delay??0)*e.X5/this.container.retina.reduceFactor,this.position=this._initialPosition??this._calcPosition(),this.name=this.options.name,this.fill=this.options.fill,this._firstSpawn=!this.options.life.wait,this._startParticlesAdded=!1;let h=(0,e.ZB)({},this.options.particles);if(h??={},h.move??={},h.move.direction??=this.options.direction,this.options.spawnColor&&(this.spawnColor=(0,e.lN)(this.options.spawnColor)),this._paused=!this.options.autoPlay,this._particlesOptions=h,this._size=this._calcSize(),this.size=(0,e.ap)(this._size,this.container.canvas.size),this._lifeCount=this.options.life.count??-1,this._immortal=this._lifeCount<=0,this.options.domId){const t=document.getElementById(this.options.domId);t&&(this._mutationObserver=new MutationObserver((()=>{this.resize()})),this._resizeObserver=new ResizeObserver((()=>{this.resize()})),this._mutationObserver.observe(t,{attributes:!0,attributeFilter:["style","width","height"]}),this._resizeObserver.observe(t))}const r=this.options.shape,l=this._engine.emitterShapeManager?.getShapeGenerator(r.type);l&&(this._shape=l.generate(this.position,this.size,this.fill,r.options)),this._engine.dispatchEvent("emitterCreated",{container:s,data:{emitter:this}}),this.play()}externalPause(){this._paused=!0,this.pause()}externalPlay(){this._paused=!1,this.play()}async init(){await(this._shape?.init())}pause(){this._paused||delete this._emitDelay}play(){if(!this._paused&&this.container.retina.reduceFactor&&(this._lifeCount>0||this._immortal||!this.options.life.count)&&(this._firstSpawn||this._currentSpawnDelay>=(this._spawnDelay??0))){if(void 0===this._emitDelay){const t=(0,e.Gu)(this.options.rate.delay);this._emitDelay=t*e.X5/this.container.retina.reduceFactor}(this._lifeCount>0||this._immortal)&&this._prepareToDie()}}resize(){const t=this._initialPosition;this.position=t&&(0,e.Ac)(t,this.container.canvas.size,e.OW.origin)?t:this._calcPosition(),this._size=this._calcSize(),this.size=(0,e.ap)(this._size,this.container.canvas.size),this._shape?.resize(this.position,this.size)}update(t){this._paused||(this._firstSpawn&&(this._firstSpawn=!1,this._currentSpawnDelay=this._spawnDelay??0,this._currentEmitDelay=this._emitDelay??0),this._startParticlesAdded||(this._startParticlesAdded=!0,this._emitParticles(this.options.startCount)),void 0!==this._duration&&(this._currentDuration+=t.value,this._currentDuration>=this._duration&&(this.pause(),void 0!==this._spawnDelay&&delete this._spawnDelay,this._immortal||this._lifeCount--,this._lifeCount>0||this._immortal?(this.position=this._calcPosition(),this._shape?.resize(this.position,this.size),this._spawnDelay=(0,e.Gu)(this.options.life.delay??0)*e.X5/this.container.retina.reduceFactor):this._destroy(),this._currentDuration-=this._duration,delete this._duration)),void 0!==this._spawnDelay&&(this._currentSpawnDelay+=t.value,this._currentSpawnDelay>=this._spawnDelay&&(this._engine.dispatchEvent("emitterPlay",{container:this.container}),this.play(),this._currentSpawnDelay-=this._currentSpawnDelay,delete this._spawnDelay)),void 0!==this._emitDelay&&(this._currentEmitDelay+=t.value,this._currentEmitDelay>=this._emitDelay&&(this._emit(),this._currentEmitDelay-=this._emitDelay)))}_calcPosition(){if(this.options.domId){const t=document.getElementById(this.options.domId);if(t){const i=t.getBoundingClientRect(),s=this.container.retina.pixelRatio;return{x:(i.x+.5*i.width)*s,y:(i.y+.5*i.height)*s}}}return(0,e.Gz)({size:this.container.canvas.size,position:this.options.position})}_calcSize(){const t=this.container;if(this.options.domId){const i=document.getElementById(this.options.domId);if(i){const s=i.getBoundingClientRect();return{width:s.width*t.retina.pixelRatio,height:s.height*t.retina.pixelRatio,mode:"precise"}}}return this.options.size??(()=>{const t=new n.r;return t.load({height:0,mode:"percent",width:0}),t})()}_emit(){if(this._paused)return;const t=(0,e.Gu)(this.options.rate.quantity);this._emitParticles(t)}_emitParticles(t){const i=(0,e.wA)(this._particlesOptions);for(let s=0;s<t;s++){const t=(0,e.ZB)({},i);if(this.spawnColor){const i=this.options.spawnColor?.animation;if(i){const t={h:360,s:100,l:100},s=3.6;this.spawnColor.h=this._setColorAnimation(i.h,this.spawnColor.h,t.h,s),this.spawnColor.s=this._setColorAnimation(i.s,this.spawnColor.s,t.s),this.spawnColor.l=this._setColorAnimation(i.l,this.spawnColor.l,t.l)}a(t,this.spawnColor)}const s=this.options.shape;let o=this.position;if(this._shape){const i=this._shape.randomPosition();if(i){o=i.position;const e=s.replace;e.color&&i.color&&a(t,i.color),e.opacity&&(t.opacity?t.opacity.value=i.opacity:t.opacity={value:i.opacity})}else o=null}o&&this.container.particles.addParticle(o,t)}}}}}]);