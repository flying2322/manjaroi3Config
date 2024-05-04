"use strict";(globalThis.webpackChunkmomentum=globalThis.webpackChunkmomentum||[]).push([[1886,4145,6113],{78025:(t,e,i)=>{i.d(e,{cw:()=>d,dZ:()=>a,ll:()=>r,nW:()=>o,vt:()=>n});var s=i(24749);function a(t){return t.type===s.Un.LinkGroup&&!t.isRoot}function n(t){return t.type===s.Un.Legacy}function r(t){return t.type===s.Un.Link}function d(t){return t.type===s.Un.LinkGroup&&"isRoot"in t&&t.isRoot&&!("isTeamRoot"in t&&t.isTeamRoot)}function o(t){return t.type===s.Un.LinkGroup&&"isTeamRoot"in t&&t.isTeamRoot}},91488:(t,e,i)=>{i.d(e,{R:()=>a});var s=i(25038);class a{constructor({id:t,url:e,title:i,pinned:a=!1,readOnly:n=!1}={}){if(!t||void 0===i||!e)throw new Error("Legacy link created with incomplete data");this.id=t,this.links=[new s.r({url:e})],this.title=i,this.pinned=!!a,this.readOnly=n}get hasManyLinks(){return this.links.length>1}}},25038:(t,e,i)=>{i.d(e,{G:()=>o,r:()=>d});var s=i(89608),a=i(70237),n=i(25786),r=i(24749);class d{constructor({id:t=(0,n.uuidv4)(),url:e=""}={}){this.id=t,this.url=e}}function o({url:t},e){const i="links"+(void 0===e?"":`.${e}`);if(!t)throw new s.B({message:r.XO.URL_EMPTY,input:i});if(!a.Z.isValidUrl(t))throw new s.B({message:r.XO.URL_INVALID,input:i})}},41661:(t,e,i)=>{i.d(e,{G:()=>o,p:()=>d});var s=i(89608),a=i(25038),n=i(24749),r=i(70237);class d{constructor({id:t=r.Z.uuidv4(),links:e=[],title:i="",pinned:s=!1,readOnly:n=!1}={}){this.id=t,this.links=e.map((t=>new a.r(t))),this.title=i,this.pinned=!!s,this.readOnly=n}get hasManyLinks(){return this.links.length>1}}function o({title:t,links:e}){if(0===t.length)throw new s.B({message:n.XO.TITLE_EMPTY,input:"title"});if(0===e.length)throw new s.B({message:n.XO.URL_EMPTY,input:"links.0"});e.forEach(((t,i)=>{(t.url||1===e.length)&&(0,a.G)(t,i)}))}},96380:(t,e,i)=>{i.d(e,{km:()=>h,m0:()=>o,wc:()=>l});var s=i(78025),a=i(24749),n=i(41661),r=i(25038),d=i(48626);class o{constructor(t){this.dataService=t}get(t){this.dataService.get({...t,success:e=>{(async()=>{var i;1===e.filter(s.cw).length?t.success(e):0!==(null===(i=await d.Z.get("links"))||void 0===i?void 0:i.cache)&&(await d.Z.patch("links",{cache:0}),this.dataService.get(t))})()}})}create(t){return this.dataService.create(t.id,t)}update(t,e){return this.dataService.update(t,e)}delete(t){return this.dataService.delete(t)}}function h(t){return[{id:t.id,title:t.title,pinned:t.pinned,type:a.Un.LinkGroup,readOnly:!1,linksOrderIds:t.links.map((t=>t.id))},...t.links.map((e=>({id:e.id,type:a.Un.Link,url:e.url,parentLinkId:t.id})))]}function l(t){const e=Object.assign(new n.p,t);return e.links=e.links.filter((t=>t.url.length)).map((t=>Object.assign(new r.r,t,{url:t.url.includes("://")?t.url:"https://"+t.url}))),e}},71886:(t,e,i)=>{i.r(e),i.d(e,{default:()=>y,makeLinksStore:()=>p,useLinksStore:()=>m});var s=i(63420),a=i(20144),n=i(78025),r=i(96380),d=i(34145),o=i(67652),h=i(41661),l=i(94119),c=i(79870),u=i(91488);const p=(t=(()=>({linksService:new r.m0(new d.U("links",{mode:o.Z.Timestamp}))}))().linksService)=>(0,s.Q_)("links",{plugins:[c.i.MockData],state:()=>({data:{},loading:!1,loaded:!1,activeItemId:"",activeItem:null}),getters:{service:()=>t,getItems(){return({pinned:t=!1,team:e=!1}={})=>{var i;const s=e?this.getTeamRoot:this.getRoot;if(!s)return[];const a=[];return null===(i=s.linksOrderIds)||void 0===i||i.forEach((e=>{const i=this.getItemById(e);if(i&&((0,n.dZ)(i)||(0,n.vt)(i))&&(e=>"pinned"in e?e.pinned===t:!t)(i)){let t;(0,n.dZ)(i)?t=this.buildLinkGroup(i):(0,n.vt)(i)&&(t=new u.R(i)),t&&t.links.length&&a.push(t)}})),a}},getUnPinnedItems(){return this.getItems()},getPinnedItems(){return this.getItems({pinned:!0})},getUnPinnedTeamItems(){return this.getItems({team:!0})},getPinnedTeamItems(){return this.getItems({pinned:!0,team:!0})},getRoot:t=>Object.values(t.data).find(n.cw)||null,getTeamRoot:t=>Object.values(t.data).find(n.nW)||null,getItemById:t=>e=>t.data[e]||null,buildLinkGroup(){return t=>{var e;const i=[];null===(e=t.linksOrderIds)||void 0===e||e.forEach((t=>{const e=this.getItemById(t);e&&(0,n.ll)(e)&&i.push(e)}));const s={...t,links:i};return new h.p(s)}},adding(){return!(!this.activeItem||this.activeItemId)}},actions:{addItem(){this.activeItem=new h.p},editItem(t){this.activeItemId=t;const e=this.getItemById(t);e&&(0,n.dZ)(e)&&(this.activeItem=this.buildLinkGroup(e))},clearActiveItem(){this.activeItem=null,this.activeItemId=""},refresh(){this.loading||this.loaded||(this.loading=!0,t.get({success:t=>{Object.keys(this.data).forEach((e=>{e in t||delete this.data[e]})),t.forEach((t=>a.ZP.set(this.data,t.id,t))),this.loaded=!0,this.loading=!1}}))},async updatePartialRootLinksOrderIds(t){const e=this.getRoot;e&&await this.update(e.id,{linksOrderIds:[...new Set([...t,...e.linksOrderIds])]})},async deleteLinkGroup(t){const e=this.getItemById(t);if(!e||!(0,n.dZ)(e)&&!(0,n.vt)(e))throw new Error(`Can't find LinkGroup with id ${t}`);await Promise.allSettled(Object.values(this.data).filter((i=>(0,n.ll)(i)&&i.parentLinkId===t||i===e)).map((t=>this.delete(t.id))))},async processMutations(t){t.filter((t=>t.method!==l.R4.Delete&&"linksOrderIds"in t.data)).forEach((e=>{if(e.method===l.R4.Create&&(0,n.dZ)(e.data)){const i=e.data.linksOrderIds;t.push({method:l.R4.Update,id:e.id,data:{linksOrderIds:i}}),Object.assign(e.data,{linksOrderIds:[]});const s=this.getRoot;if(!s)throw new Error("Can't fint RootLink");t.push({method:l.R4.Update,id:s.id,data:{linksOrderIds:[...s.linksOrderIds,e.id]}})}else e.method===l.R4.Update&&(t=t.filter((t=>t!==e))).push(e)}));for(const e of t)switch(e.method){case l.R4.Update:await this.update(e.id,e.data);break;case l.R4.Create:if((0,n.cw)(e.data))throw new Error("Can't create root links");if((0,n.nW)(e.data))throw new Error("Can't create root links");if((0,n.vt)(e.data))throw new Error("Can't create legacy links");await this.create(e.data);break;case l.R4.Delete:{const t=this.getItemById(e.id);if(!t)return;if((0,n.cw)(t))throw new Error("Can't delete root links");if((0,n.nW)(t))throw new Error("Can't delete team root links");await this.delete(e.id);break}}},async create(e){return a.ZP.set(this.data,e.id,e),await t.create(e),e},async update(e,i){const s=this.getItemById(e);if(!s)throw new Error(`No data found for ${e}`);const n={...s,...i};return a.ZP.set(this.data,e,n),await t.update(e,i),n},async delete(e){return a.ZP.delete(this.data,e),t.delete(e)}}}),m=p(),y=m},94119:(t,e,i)=>{var s;function a(t,e){const i={};return Object.keys(e).forEach((s=>{("object"==typeof e[s]?JSON.stringify(e[s]):e[s])!==("object"==typeof t[s]?JSON.stringify(t[s]):t[s])&&(i[s]=e[s])})),i}function n(t,e){const i=[],n=new Set;return null==e||e.forEach((e=>{n.add(e.id);const r=null==t?void 0:t.find((t=>t.id===e.id));if(r){const t=a(r,e);Object.keys(t).length&&i.push({method:s.Update,id:e.id,data:t})}else i.push({method:s.Create,id:e.id,data:e})})),null==t||t.forEach((t=>{n.has(t.id)||i.push({method:s.Delete,id:t.id})})),i}i.d(e,{R4:()=>s,qu:()=>a,t:()=>n}),function(t){t.Create="create",t.Update="update",t.Delete="delete"}(s||(s={}))},34145:(t,e,i)=>{i.d(e,{U:()=>d});var s=i(42935),a=i(24960),n=i(67652),r=i(35597);class d{constructor(t,{queryParams:e={},getResponseProperty:i,path:s="",mode:r=n.Z.Sync}={}){this.type=t,this.queryParams=e,this.getResponseProperty=i,this.path=s,this.mode=r,this.dataSync=a.Z}get({id:t,path:e=this.path||this.type,mode:i=this.mode,success:s,failure:a,queryParams:d={},retry:o,responseProperty:h=this.getResponseProperty,appendIdToPath:l,timestampKey:c=this.type}){(async()=>{var u;i===n.Z.Timestamp&&(i=await r.Z.requiresSync(c)?n.Z.Sync:n.Z.Cache,r.Z.addUpdateListener(c,this.refresh.bind(this,{id:t,path:e,queryParams:d,retry:o,responseProperty:h,appendIdToPath:l,timestampKey:c}))),e+=this.buildQueryString((null===(u=this.queryParams)||void 0===u?void 0:u.get)||{},d);const p=[this.type,{id:t,path:e,env:this.getEnv(),mode:i,retry:o,responseProperty:h,appendIdToPath:l,timestampKey:c}];i===n.Z.Server?this.dataSync.sendMessage({handler:"get",args:p}).then(s).catch(a):this.dataSync.sendRecurringCrossTabMessage({msgId:`${this.type}${t?`:${t}`:""}:refreshed`,handler:"get",args:p,success:s,failure:a})})()}refresh({id:t,path:e=this.path||this.type,queryParams:i={},retry:s,responseProperty:a=this.getResponseProperty,appendIdToPath:r,timestampKey:d=this.type}={}){return new Promise(((o,h)=>this.get({id:t,mode:n.Z.Server,path:e,queryParams:i,retry:s,success:o,failure:h,responseProperty:a,appendIdToPath:r,timestampKey:d})))}async create(t,e,{path:i=this.path||this.type,mode:s=this.mode}={}){const a=[this.type,t,e];a.push({path:i,mode:s,env:this.getEnv()}),await this.dataSync.sendMessage({handler:"create",args:a})}async update(t,e,{path:i=this.path||this.type,mode:s=this.mode,queryParams:a={},appendIdToPath:n}={}){var r;const d=this.buildQueryString((null===(r=this.queryParams)||void 0===r?void 0:r.update)||{},a),o=[this.type,t,e];o.push({path:i,mode:s,env:this.getEnv(),queryString:d,appendIdToPath:n}),await this.dataSync.sendMessage({handler:"update",args:o})}async delete(t,{path:e=this.path||this.type,mode:i=this.mode}={}){const s=[this.type,t];s.push({path:e,mode:i,env:this.getEnv()}),await this.dataSync.sendMessage({handler:"delete",args:s})}getEnv(){return{token:localStorage.getItem("token"),clientUuid:localStorage.getItem("client_uuid"),apiUrl:m.globals.urlRootApi,version:m.globals.version,tabId:s.Z}}buildQueryString(...t){const e=t.reduce(((t,e)=>({...e,...t})),{}),i=new URLSearchParams(e).toString();return i?"?"+i:""}}},67652:(t,e,i)=>{var s;i.d(e,{Z:()=>a}),function(t){t.Sync="sync",t.Cache="cache",t.Server="server",t.Timestamp="timestamp"}(s||(s={}));const a=s}}]);