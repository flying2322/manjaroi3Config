"use strict";(globalThis.webpackChunkmomentum=globalThis.webpackChunkmomentum||[]).push([[7183],{47183:(e,i,t)=>{t.d(i,{BaseMover:()=>o});var n=t(51057);class o{init(e){const i=e.options.move.gravity;e.gravity={enable:i.enable,acceleration:(0,n.Gu)(i.acceleration),inverse:i.inverse},function(e){const i=e.container,t=e.options.move.spin;if(!t.enable)return;const o=t.position??{x:50,y:50},a={x:.01*o.x*i.canvas.size.width,y:.01*o.y*i.canvas.size.height},s=e.getPosition(),c=(0,n.Sp)(s,a),r=(0,n.Gu)(t.acceleration);e.retina.spinAcceleration=r*i.retina.pixelRatio,e.spin={center:a,direction:e.velocity.x>=0?"clockwise":"counter-clockwise",angle:e.velocity.angle,radius:c,acceleration:e.retina.spinAcceleration}}(e)}isEnabled(e){return!e.destroyed&&e.options.move.enable}move(e,i){const t=e.options,o=t.move;if(!o.enable)return;const a=e.container,s=a.retina.pixelRatio;e.retina.moveSpeed??=(0,n.Gu)(o.speed)*s,e.retina.moveDrift??=(0,n.Gu)(e.options.move.drift)*s;const c=function(e){return e.slow.inRange?e.slow.factor:1}(e),r=e.retina.moveSpeed*a.retina.reduceFactor,l=e.retina.moveDrift,p=(0,n.KI)(t.size.value)*s,y=r*(o.size?e.getRadius()/p:1)*c*(i.factor||1)/2,v=e.retina.maxSpeed??a.retina.maxSpeed;o.spin.enable?function(e,i){const t=e.container;if(!e.spin)return;const n={x:"clockwise"===e.spin.direction?Math.cos:Math.sin,y:"clockwise"===e.spin.direction?Math.sin:Math.cos};e.position.x=e.spin.center.x+e.spin.radius*n.x(e.spin.angle),e.position.y=e.spin.center.y+e.spin.radius*n.y(e.spin.angle),e.spin.radius+=e.spin.acceleration;const o=Math.max(t.canvas.size.width,t.canvas.size.height),a=.5*o;e.spin.radius>a?(e.spin.radius=a,e.spin.acceleration*=-1):e.spin.radius<0&&(e.spin.radius=0,e.spin.acceleration*=-1),e.spin.angle+=.01*i*(1-e.spin.radius/o)}(e,y):function(e,i,t,o,a,s){!function(e,i){const t=e.options.move.path;if(!t.enable)return;if(e.lastPathTime<=e.pathDelay)return void(e.lastPathTime+=i.value);const o=e.pathGenerator?.generate(e,i);o&&e.velocity.addTo(o),t.clamp&&(e.velocity.x=(0,n.uZ)(e.velocity.x,-1,1),e.velocity.y=(0,n.uZ)(e.velocity.y,-1,1)),e.lastPathTime-=e.pathDelay}(e,s);const c=e.gravity,r=c?.enable&&c.inverse?-1:1;a&&t&&(e.velocity.x+=a*s.factor/(60*t)),c?.enable&&t&&(e.velocity.y+=r*(c.acceleration*s.factor)/(60*t));const l=e.moveDecay;e.velocity.multTo(l);const p=e.velocity.mult(t);c?.enable&&o>0&&(!c.inverse&&p.y>=0&&p.y>=o||c.inverse&&p.y<=0&&p.y<=-o)&&(p.y=r*o,t&&(e.velocity.y=p.y/t));const y=e.options.zIndex,v=(1-e.zIndexFactor)**y.velocityRate;p.multTo(v);const{position:u}=e;u.addTo(p),i.vibrate&&(u.x+=Math.sin(u.x*Math.cos(u.y)),u.y+=Math.cos(u.y*Math.sin(u.x)))}(e,o,y,v,l,i),function(e){const i=e.initialPosition,{dx:t,dy:o}=(0,n.oW)(i,e.position),a=Math.abs(t),s=Math.abs(o),{maxDistance:c}=e.retina,r=c.horizontal,l=c.vertical;if(r||l)if((r&&a>=r||l&&s>=l)&&!e.misplaced)e.misplaced=!!r&&a>r||!!l&&s>l,r&&(e.velocity.x=.5*e.velocity.y-e.velocity.x),l&&(e.velocity.y=.5*e.velocity.x-e.velocity.y);else if((!r||a<r)&&(!l||s<l)&&e.misplaced)e.misplaced=!1;else if(e.misplaced){const t=e.position,o=e.velocity;r&&(t.x<i.x&&o.x<0||t.x>i.x&&o.x>0)&&(o.x*=-(0,n.sZ)()),l&&(t.y<i.y&&o.y<0||t.y>i.y&&o.y>0)&&(o.y*=-(0,n.sZ)())}}(e)}}}}]);