(function(){class b{get(a,c){chrome.storage.local.get(a,d=>{c(chrome.runtime.lastError?null:d)})}set(a){chrome.storage.local.set(a,function(){})}remove(a){chrome.storage.local.remove(a)}};var e=new b;const f=new URLSearchParams(window.location.search),g=(parseInt(f.get("authuser"),10)||"0")+"";e.set({authuser:g});}).call(this);