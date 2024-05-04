"use strict";(globalThis.webpackChunkmomentum=globalThis.webpackChunkmomentum||[]).push([[158,9968],{12363:(e,t,i)=>{i.d(t,{Z:()=>u});const s=async e=>{if(!e.loaded)return e.loading?new Promise((t=>{e.$subscribe(((e,i)=>i.loaded&&t()))})):e.refresh()},a=(e,t)=>({resetBeforeViewChange:()=>t.resetBeforeViewChange(),isOpen:()=>t.popupActive,open:async()=>t.popupActive||await t.togglePopup(!0),close:async()=>!t.popupActive||await t.togglePopup(!1),refresh:()=>e.refresh(),loaded:()=>e.loaded});var n=i(89968),r=i(71886);const d=(0,n.default)(),o=(0,r.default)(),l={...a(o,d),views:{links:{setActive:()=>d.setActiveView("list"),isActive:()=>d.popupActive&&"list"===d.activeViewId},add:{setActive:()=>(o.addItem(),d.setActiveView("form")),isActive:()=>d.popupActive&&"form"===d.activeViewId&&!o.activeItemId},edit:{async setActive(e){await s(o),o.editItem(e),await d.setActiveView("form")},isActive:()=>d.popupActive&&"form"===d.activeViewId&&o.activeItemId,selectableItems:()=>o.getUnPinnedItems.map((({id:e,title:t})=>({id:e,name:t})))}}};var c=i(84722),h=i(51545);const p=(0,c.V)(),v=(0,h.useNotesStore)(),u={links:l,notes:{...a(v,p),refresh:()=>v.refresh(!0),views:{notes:{async setActive(e){e&&await s(v),v.activeItemId=e,await p.setActiveView("list")},isActive:()=>p.popupActive&&"list"===p.activeViewId,selectableItems:()=>Object.values(v.getItems).map((({id:e,preview:t})=>({id:e,name:t})))},deleted:{setActive:()=>p.setActiveView("deleted"),isActive:()=>p.popupActive&&"deleted"===p.activeViewId,selectableItems:()=>Object.values(v.getDeletedItems).map((({id:e,preview:t})=>({id:e,name:t})))}}}}},30158:(e,t,i)=>{i.r(t),i.d(t,{useDevAppsStore:()=>d});var s=i(4239),a=i(63420),n=i(12363),r=i(20144);const d=(0,a.Q_)("devApps",{state(){return{pinned:localStorage.getObject(s.Z)||{appId:null,viewId:null,itemId:null},selectedItems:(e=n.Z,Object.entries(e).reduce(((e,[t,i])=>{const s=Object.entries(i.views).reduce(((e,[t,i])=>(i.selectableItems&&(e[t]=null),e)),{});return Object.keys(s).length&&(e[t]=s),e}),{}))};var e},getters:{loaded:()=>Object.values(n.Z).every((e=>e.loaded()))},actions:{async openView(e,t,i){await n.Z[e].open(),n.Z[e].resetBeforeViewChange(),n.Z[e].views[t].setActive(i)},closeApp:e=>n.Z[e].close(),pinApp(e,t,i){this.pinned.appId=e,this.pinned.viewId=t,localStorage.setObject(s.Z,{appId:e,viewId:t,itemId:i})},clearPinned(){this.pinned={appId:null,viewId:null,itemId:null},localStorage.removeItem(s.Z)},setActiveSelectedItems(){Object.entries(this.selectedItems).forEach((([e,t])=>{Object.keys(t).forEach((i=>{const s=n.Z[e].views[i].selectableItems();this.pinned.appId===e&&this.pinned.viewId===i&&((e,t)=>t.find((t=>t.id===e)))(this.pinned.itemId,s)?t[i]=this.pinned.itemId:s.length&&(t[i]=s[0].id)}))}))}}}),o=d();(0,r.YP)((0,a.Jk)(o).loaded,(e=>e&&o.setActiveSelectedItems()))},91488:(e,t,i)=>{i.d(t,{R:()=>a});var s=i(25038);class a{constructor({id:e,url:t,title:i,pinned:a=!1,readOnly:n=!1}={}){if(!e||void 0===i||!t)throw new Error("Legacy link created with incomplete data");this.id=e,this.links=[new s.r({url:t})],this.title=i,this.pinned=!!a,this.readOnly=n}get hasManyLinks(){return this.links.length>1}}},71886:(e,t,i)=>{i.r(t),i.d(t,{default:()=>w,makeLinksStore:()=>v,useLinksStore:()=>u});var s=i(63420),a=i(20144),n=i(78025),r=i(96380),d=i(34145),o=i(67652),l=i(41661),c=i(94119),h=i(79870),p=i(91488);const v=(e=(()=>({linksService:new r.m0(new d.U("links",{mode:o.Z.Timestamp}))}))().linksService)=>(0,s.Q_)("links",{plugins:[h.i.MockData],state:()=>({data:{},loading:!1,loaded:!1,activeItemId:"",activeItem:null}),getters:{service:()=>e,getItems(){return({pinned:e=!1,team:t=!1}={})=>{var i;const s=t?this.getTeamRoot:this.getRoot;if(!s)return[];const a=[];return null===(i=s.linksOrderIds)||void 0===i||i.forEach((t=>{const i=this.getItemById(t);if(i&&((0,n.dZ)(i)||(0,n.vt)(i))&&(t=>"pinned"in t?t.pinned===e:!e)(i)){let e;(0,n.dZ)(i)?e=this.buildLinkGroup(i):(0,n.vt)(i)&&(e=new p.R(i)),e&&e.links.length&&a.push(e)}})),a}},getUnPinnedItems(){return this.getItems()},getPinnedItems(){return this.getItems({pinned:!0})},getUnPinnedTeamItems(){return this.getItems({team:!0})},getPinnedTeamItems(){return this.getItems({pinned:!0,team:!0})},getRoot:e=>Object.values(e.data).find(n.cw)||null,getTeamRoot:e=>Object.values(e.data).find(n.nW)||null,getItemById:e=>t=>e.data[t]||null,buildLinkGroup(){return e=>{var t;const i=[];null===(t=e.linksOrderIds)||void 0===t||t.forEach((e=>{const t=this.getItemById(e);t&&(0,n.ll)(t)&&i.push(t)}));const s={...e,links:i};return new l.p(s)}},adding(){return!(!this.activeItem||this.activeItemId)}},actions:{addItem(){this.activeItem=new l.p},editItem(e){this.activeItemId=e;const t=this.getItemById(e);t&&(0,n.dZ)(t)&&(this.activeItem=this.buildLinkGroup(t))},clearActiveItem(){this.activeItem=null,this.activeItemId=""},refresh(){this.loading||this.loaded||(this.loading=!0,e.get({success:e=>{Object.keys(this.data).forEach((t=>{t in e||delete this.data[t]})),e.forEach((e=>a.ZP.set(this.data,e.id,e))),this.loaded=!0,this.loading=!1}}))},async updatePartialRootLinksOrderIds(e){const t=this.getRoot;t&&await this.update(t.id,{linksOrderIds:[...new Set([...e,...t.linksOrderIds])]})},async deleteLinkGroup(e){const t=this.getItemById(e);if(!t||!(0,n.dZ)(t)&&!(0,n.vt)(t))throw new Error(`Can't find LinkGroup with id ${e}`);await Promise.allSettled(Object.values(this.data).filter((i=>(0,n.ll)(i)&&i.parentLinkId===e||i===t)).map((e=>this.delete(e.id))))},async processMutations(e){e.filter((e=>e.method!==c.R4.Delete&&"linksOrderIds"in e.data)).forEach((t=>{if(t.method===c.R4.Create&&(0,n.dZ)(t.data)){const i=t.data.linksOrderIds;e.push({method:c.R4.Update,id:t.id,data:{linksOrderIds:i}}),Object.assign(t.data,{linksOrderIds:[]});const s=this.getRoot;if(!s)throw new Error("Can't fint RootLink");e.push({method:c.R4.Update,id:s.id,data:{linksOrderIds:[...s.linksOrderIds,t.id]}})}else t.method===c.R4.Update&&(e=e.filter((e=>e!==t))).push(t)}));for(const t of e)switch(t.method){case c.R4.Update:await this.update(t.id,t.data);break;case c.R4.Create:if((0,n.cw)(t.data))throw new Error("Can't create root links");if((0,n.nW)(t.data))throw new Error("Can't create root links");if((0,n.vt)(t.data))throw new Error("Can't create legacy links");await this.create(t.data);break;case c.R4.Delete:{const e=this.getItemById(t.id);if(!e)return;if((0,n.cw)(e))throw new Error("Can't delete root links");if((0,n.nW)(e))throw new Error("Can't delete team root links");await this.delete(t.id);break}}},async create(t){return a.ZP.set(this.data,t.id,t),await e.create(t),t},async update(t,i){const s=this.getItemById(t);if(!s)throw new Error(`No data found for ${t}`);const n={...s,...i};return a.ZP.set(this.data,t,n),await e.update(t,i),n},async delete(t){return a.ZP.delete(this.data,t),e.delete(t)}}}),u=v(),w=u},89968:(e,t,i)=>{i.r(t),i.d(t,{default:()=>r,useLinksViewStateStore:()=>n});var s=i(95756),a=i(24749);const n=(0,s.vM)("links",{views:{[a.od.List]:{defaultView:!0,order:1},[a.od.Form]:{order:2}}}),r=n},84722:(e,t,i)=>{i.d(t,{V:()=>s});const s=(0,i(95756).vM)("notes",{views:{list:{defaultView:!0,order:1},deleted:{order:2}}})},95756:(e,t,i)=>{i.d(t,{t7:()=>h,vM:()=>c});var s=i(63420),a=i(20144),n=i(96046),r=i(63139),d=i(7838),o=i(70237);const l=e=>Object.keys(e).find((t=>{var i;return null===(i=e[t])||void 0===i?void 0:i.defaultView})),c=(e,{views:t}={})=>{const i=(0,s.Q_)(e+"ViewState",{state:()=>{var i;return{activeViewId:null!==(i=t&&l(t))&&void 0!==i?i:"",beforeViewChange:()=>Promise.resolve(!0),confirmationProps:null,popupActive:!1,name:e}},getters:{activeView(e){if(!t)return null;const i=t[e.activeViewId];if(i)return i;throw new Error("No view found with id: "+e.activeViewId)},focused:()=>r.Z.isOnTop(e)},actions:{focus(){r.Z.add(e)},async setActiveView(e){var i,s;if(!t||!await this.beforeViewChange())return;let a=e;if("default"===e){const e=l(t);if(!e)throw new Error("No view found with defaultView: true");a=e}await(null===(s=null===(i=this.activeView)||void 0===i?void 0:i.beforeLeave)||void 0===s?void 0:s.call(i,a)),this.activeViewId=a},async togglePopup(e,{resetActiveView:t=!0}={}){await this.beforeViewChange()&&(await a.ZP.nextTick(),this.popupActive=null!=e?e:!this.popupActive,!this.popupActive&&t&&(this.resetBeforeViewChange(),this.confirmationProps=null,await this.setActiveView("default")))},resetBeforeViewChange(){this.beforeViewChange=()=>Promise.resolve(!0)},async setConfirmation(e){return new Promise((t=>{this.confirmationProps=e,this.confirmationProps.confirm=()=>t(!0),this.confirmationProps.cancel=()=>t(!1)})).finally((()=>{this.confirmationProps=null}))}}}),o=(0,s.Jk)(i());return d.Z.$on(e+":close",(()=>i().togglePopup(!1))),(0,a.YP)(o.popupActive,(t=>{t?r.Z.add(e):r.Z.remove(e)})),(0,a.YP)(o.confirmationProps,(t=>{(null==t?void 0:t.dashboardOverlay)&&r.Z.add(e,!0),n.Z.dashboardOverlayActive=!!(null==t?void 0:t.dashboardOverlay)})),i},h=(e,{views:t,extend:i})=>{const s=c(`base${o.Z.capitalizeFirstLetter(e)}`,{views:t}),a=i(s(),`extended${o.Z.capitalizeFirstLetter(e)}ViewState`);return p(`${e}ViewState`,s,a)},p=(e,t,i)=>{const n=t(),r=i();return(0,s.Q_)(e,(()=>({...(0,a.BK)(n),...(0,a.BK)(r)})))}}}]);