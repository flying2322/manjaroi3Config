function Prorate(){let e=this;e.upgradeDialog=null,e.previewUpgradeReq=function(e,t,r){let n=e.data,a={email:n.email,liccodeCurr:n.liccodeCurr,liccodeNew:n.liccodeNew};return fetch("https://ransxfmm6c.execute-api.us-east-1.amazonaws.com/Prod/preview",{method:"POST",cache:"no-cache",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}).then((e=>e.ok?e.json().then((function(e){return r(e),e})):(r(e),e))).catch((e=>{alert(e)}))},e.sendUpgradeReq=function(e,t,r){let n=e.data,a={email:n.email,liccodeCurr:n.liccodeCurr,liccodeNew:n.liccodeNew};return fetch("https://ransxfmm6c.execute-api.us-east-1.amazonaws.com/Prod/modify",{method:"PUT",cache:"no-cache",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}).then((e=>e.ok?e.json().then((function(e){return r(e),e})):e.json().then((function(e){return alert(e),r(e),e})))).catch((e=>(r({error:e}),{error:e})))},e.showUpgradePage=function(e,t,r){chrome.tabs.create({url:"https://www.naturalreaders.com/payment/pwpay/plans"})},e.windowId="",chrome.runtime.onMessage.addListener((function(e,t,r){if(e.fn in prorate)return prorate[e.fn](e,t,r),!0}))}const prorate=new Prorate;